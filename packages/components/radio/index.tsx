import * as radio from "@zag-js/radio-group";
import { normalizeProps, useMachine } from "@zag-js/solid";
import { For, JSX, createMemo, createUniqueId } from "solid-js";
import { css } from "solid-styled-components";

export type RadioProps = {
  onValueChange?: (details: radio.ValueChangeDetails) => void
  options?: {
    value: string;
    label: JSX.Element;
  }[];
};

export function Radio(props: RadioProps) {
  const [state, send] = useMachine(
    radio.machine({
      id: createUniqueId(),
      onValueChange: props.onValueChange,
    })
  );

  const api = createMemo(() => radio.connect(state, send, normalizeProps));

  return (
    <div
      {...api().rootProps}
      class={css({
        "[data-scope=radio-group][data-part=item]": {
          display: "inline-flex",
          gap: ".5rem",
          alignItems: "center",
          userSelect: "none",
          cursor: "pointer",
          marginRight: "8px",
        },
        "[data-scope=radio-group][data-part=item-text]": {
          order: 2,
        },
        "[data-scope=radio-group][data-part=item-control]": {
          order: 1,
          width: "1.25rem",
          height: "1.25rem",
          borderRadius: "9999px",
          border: "1px solid #cfceca",
          color: "#fff",
          padding: "1px",
        },
        "[data-scope=radio-group][data-part=item-control][data-state=checked]":
          {
            background: "#4090ff",
            borderColor: "#4090ff",
            outlineWidth: "4px",
            outlineColor: "#fff",
            outlineOffset: "-5px",
            outlineStyle: "solid",
          },
      })}
    >
      <For each={props.options}>
        {(opt) => (
          <label {...api().getItemProps({ value: opt.value })}>
            <span {...api().getItemTextProps({ value: opt.value })}>
              {opt.label}
            </span>
            <input {...api().getItemHiddenInputProps({ value: opt.value })} />
            <div {...api().getItemControlProps({ value: opt.value })} />
          </label>
        )}
      </For>
    </div>
  );
}
