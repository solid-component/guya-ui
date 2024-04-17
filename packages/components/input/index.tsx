import { Show, createEffect, createSignal, splitProps } from "solid-js";
import { InputProps } from "./types";
import { inputCss } from "./style";
import { CircleClose } from "solid-dada-icons";

export const Input = (props: InputProps) => {
  const [local, other] = splitProps(props, ["prefix", "class", "suffix"]);

  const [ref, setRef] = createSignal<HTMLInputElement>(null);

  const [focus, setFocus] = createSignal(false);
  const [value, setValue] = createSignal(props.value || "");

  createEffect(() => {
    setValue(props.value || "");
  });

  const genClass = () =>
    props.class ? props.class + " " + inputCss() : inputCss();

  return (
    <div
      class={genClass()}
      classList={{
        [`input-${props.size}`]: !!props.size,
        ["is-focus"]: focus(),
        ["is-disabled"]: props.disabled,
        ...props.classList,
      }}
      onClick={() => {
        ref().focus();
      }}
    >
      <Show when={props.prefix}>
        <div style={{ display: "flex", "margin-right": "8px" }}>
          {props.prefix}
        </div>
      </Show>
      <input
        {...other}
        ref={setRef}
        value={value()}
        onInput={(e) => {
          props.onChangeValue?.(e.target.value);
          setValue(e.target.value);
          if (ref() && "value" in props) {
            ref().value = props.value || "";
          }
        }}
        onFocus={(e) => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
      <Show when={props.clearable || props.suffix}>
        <Show when={props.clearable && value()}>
          <div
            style={{
              height: "100%",
              display: "flex",
              cursor: "pointer",
              "align-items": "center",
            }}
            onClick={() => setValue("")}
          >
            <CircleClose />
          </div>
        </Show>
        <div style={{ display: "flex", "margin-right": "8px" }}>
          {props.suffix}
        </div>
      </Show>
    </div>
  );
};
