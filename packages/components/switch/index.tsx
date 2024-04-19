import * as zagSwitch from "@zag-js/switch";
import { normalizeProps, useMachine } from "@zag-js/solid";
import {
  JSX,
  Show,
  createEffect,
  createMemo,
  createSignal,
  createUniqueId,
  on,
} from "solid-js";
import { Size, css } from "solid-styled-components";
import { Loading } from "./loading";
import { switchCss } from "./style";
import { Check } from "solid-dada-icons";

export type SwitchProps = {
  checked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  checkedChildren?: JSX.Element;
  unCheckedChildren?: JSX.Element;
  size?: Size;
  onCheckedChange?: (details: zagSwitch.CheckedChangeDetails) => void;
};

export function Switch(props: SwitchProps) {
  const id = createUniqueId();
  const machine = () => {
    return zagSwitch.machine({
      id,
      checked: props.checked,
      onCheckedChange: props.onCheckedChange,
    });
  };
  const [state, send] = useMachine(machine());
  const [root, setRoot] = createSignal<HTMLLabelElement>();
  const [textWidth, setTextWidth] = createSignal(0);
  const api = createMemo(() =>
    zagSwitch.connect(
      {
        ...state,
        context: {
          ...state.context,
          isDisabled: props.loading || props.disabled,
          checked: props.checked ?? state.context.checked,
        },
      },
      send,
      normalizeProps
    )
  );
  const [rootRect, setRootRect] = createSignal({
    width: 0,
    height: 0,
  });
  const [maxTextLen, setMaxTextLen] = createSignal<number>();
  const isChecked = () => api().isChecked;
  createEffect(
    on(isChecked, function (current, prev) {
      if (prev !== current) {
        const rect = root().getBoundingClientRect();
        setRootRect({
          width: rect.width,
          height: rect.height,
        });
      }
    })
  );
  const thumbPadding = 24;
  const rightPadding = 9;

  return (
    <label
      ref={setRoot}
      {...api().rootProps}
      // class={switchCss(rootRect, api().isChecked)}
      classList={{
        [switchCss(rootRect, textWidth())]: true,
        [`switch-${props.size}`]: !!props.size,
      }}
      controll-size={props.size || "default"}
    >
      <input {...api().hiddenInputProps} />
      <span {...api().controlProps}>
        <span {...api().thumbProps}>
          <Show when={props.loading}>
            <Loading />
          </Show>
        </span>
        <span
          data-inner
          ref={(ref) => {
            requestAnimationFrame(() => {
              const rect = ref.getBoundingClientRect();
              setTextWidth(rect.width);
            });
          }}
        >
          <span data-text="checked">{props.checkedChildren}</span>
          <span data-text="unchecked">{props.unCheckedChildren}</span>
        </span>
      </span>
    </label>
  );
}
