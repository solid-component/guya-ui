import classNames from "classnames";
import { JSX, Show } from "solid-js";
import { tagCss } from "./style";
import { genPrefixClasses } from "../theme";
import { Close, CloseBold } from "solid-dada-icons";

export type TagProps = {
  type?: "primary";
  children?: JSX.Element;
  class?: string;
  closeIcon?: boolean | JSX.Element;
  classList?: {
    [k: string]: boolean | undefined;
  };
  onClose?: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>
};

export function Tag(props: TagProps) {
  const classes = () => {
    const cla = classNames(
      tagCss(),
      genPrefixClasses({
        tag: true,
        [`tag-${props.type}`]: !!props.type,
      }),
      props.classList,
      props.class
    );
    return cla;
  };
  return (
    <span class={classes()}>
      {props.children}
      <Show when={props.closeIcon}>
        <span
          class={classNames(
            genPrefixClasses({
              [`tag-close-icon`]: true,
            })
          )}
          onClick={props.onClose}
        >
          <Show
            when={typeof props.closeIcon === "boolean"}
            fallback={props.closeIcon}
          >
            <Close />
          </Show>
        </span>
      </Show>
    </span>
  );
}
