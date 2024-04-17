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
import { css } from "solid-styled-components";
import { Loading } from "./loading";

export type SwitchProps = {
  checked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  checkedChildren?: JSX.Element;
  unCheckedChildren?: JSX.Element;
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
  const paddingInline = 2;
  const paddingBlock = 2;
  const thumbPadding = 24;
  const rightPadding = 9;
  const thumbSize = () => rootRect().height - paddingBlock * 2;

  const genCss = () => {
    return css({
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      cursor: "pointer",
      gap: "0.75rem",
      verticalAlign: "middle",
      lineHeight: rootRect().height + "px",
      fontSize: "12px",
      "&[data-disabled]": {
        cursor: "not-allowed",
      },
      "[data-scope=switch][data-part=control]": {
        display: "inline-flex",
        flexShrink: 0,
        "justify-content": "flex-start",
        "box-sizing": "content-box",
        "border-radius": "9999px",
        minWidth: "2.7rem",
        height: "22px",
        "transition-property":
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        "transition-duration": ".2s",
        background: "#cbd5e0",
        boxPack: "start",
        overflow: "hidden",
      },
      "[data-scope=switch][data-part=control][data-state=checked]": {
        background: "#4090ff",
      },
      "[data-scope=switch][data-part=thumb]": {
        background: "#fff",
        "transition-property": "transform",
        "transition-duration": ".2s",
        "border-radius": "inherit",
        width: `${thumbSize()}px`,
        height: `${thumbSize()}px`,
        top: paddingBlock + "px",
        left: paddingInline + "px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: api().isChecked ? "#1677ff" : "#cbd5e0",
      },
      "[data-scope=switch][data-part=thumb][data-state=checked]": {
        transform: `translateX(${
          rootRect().width - thumbSize() - paddingInline * 2
        }px)`,
      },
    });
  };

  return (
    <label ref={setRoot} {...api().rootProps} class={genCss()}>
      <input {...api().hiddenInputProps} />
      <span {...api().controlProps}>
        <span {...api().thumbProps}>
          <Show when={props.loading}>
            <Loading />
          </Show>
        </span>
        <span
          style={{
            display: "block",
            overflow: "hidden",
            height: "100%",
            transition: "padding .2s",
            "padding-inline": api().isChecked
              ? `${rightPadding}px ${thumbPadding}px`
              : `${thumbPadding}px ${rightPadding}px`,
            "border-radius": "100px",
            color: "#fff",
          }}
          ref={(ref) => {
            requestAnimationFrame(() => {
              const rect = ref.getBoundingClientRect();
              setMaxTextLen(rect.width - rightPadding - thumbPadding);
            });
          }}
        >
          <span
            class={css({
              display: "flex",
              height: "100%",
              transition: "margin-left .2s, margin-right .2s",
              "margin-left": api().isChecked
                ? 0
                : `calc(-100% - ${thumbPadding}px)`,
              "margin-right": api().isChecked
                ? 0
                : `calc(100% + ${thumbPadding}px)`,
            })}
          >
            {props.checkedChildren}
          </span>
          <span
            class={css({
              display: "flex",
              height: "100%",
              transition: "margin-left .2s, margin-right .2s",
              "margin-top": -rootRect().height + "px",
              "margin-left": api().isChecked
                ? maxTextLen() + thumbPadding + "px"
                : "0",
              "margin-right": api().isChecked
                ? -(maxTextLen() + thumbPadding) + "px"
                : "0",
            })}
          >
            {props.unCheckedChildren}
          </span>
        </span>
      </span>
    </label>
  );
}
