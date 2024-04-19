import { splitProps } from "solid-js";
import { buttonCss } from "./style";
import { ButtonProps } from "./types";
import classNames from "classnames";
import { genPrefixClasses } from "../theme";

export const Button = (props: ButtonProps) => {
  const [local, reset] = splitProps(props, [
    "round",
    "circle",
    "classList",
    "class",
    "danger",
    "type",
    "size",
  ]);

  const classes = () => {
    const cla = classNames(
      buttonCss(),
      genPrefixClasses({
        ["btn-default"]: !local.type,
        [`btn-${local.type}`]: !!local.type,
        [`btn-drangrous`]: !!local.danger,
        [`btn-round`]: local.round,
        [`btn-circle`]: local.circle,
        [`is-disabled`]: props.disabled,
        btn: true,
      }),
      props.classList,
      props.class
    );
    return cla;
  };

  return (
    <button {...reset} data-size={props.size} class={classes()}>
      {props.children}
    </button>
  );
};
export default Button;
export * from './types'
