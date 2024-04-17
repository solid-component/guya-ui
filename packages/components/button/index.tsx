import { splitProps } from "solid-js";
import { buttonCss } from "./style";
import { ButtonProps } from "./types";
import { genPrefixClasses } from "../theme/utils";

export const Button = (props: ButtonProps) => {
  const [local, reset] = splitProps(props, [
    "round",
    "circle",
    "classList",
    "class",
    "type",
    "size",
  ]);
  const genClass = () =>
    props.class ? props.class + " " + buttonCss() : buttonCss();
  return (
    <button
      {...reset}
      class={genClass()}
      classList={{
        ...genPrefixClasses({
          [`btn-${local.size}`]: !!local.size,
          [`btn-${local.type}`]: !!local.type,
          [`btn-round`]: local.round,
          [`btn-circle`]: local.circle,
          [`is-disabled`]: props.disabled,
          btn: true,
        }),
        ...props.classList,
      }}
    >
      {props.children}
    </button>
  );
};
export default Button
