import { For, children, mergeProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { spaceCss } from "./style/index";
import classNames from "classnames";
import { genPrefixClasses } from "../theme";

export type SpaceProps = {
  size?: "small" | "middle" | "large";
  direction?: "vertical" | "horizontal";
  align?: "start" | "end" | "center" | "baseline";
  children: JSX.Element;
  class?: string;
  style?: JSX.CSSProperties;
  wrap?: boolean;
  classList?: {
    [k: string]: boolean | undefined;
  };
};

export function Space(p: SpaceProps) {
  const props = mergeProps({ size: "small" }, p);
  const resolved = children(() => props.children);
  const childrenArray = () => resolved.toArray();
  const align = () => {
    switch (props.align) {
      case "start":
        return "start";
      case "end":
        return "end";
      case "center":
        return "center";
      default:
        return props.align;
    }
  };

  const classes = () => {
    const cla = classNames(
      spaceCss(),
      genPrefixClasses({
        [`space-${props.size}`]: !!props.size,
        ["space-vertical"]: props.direction === "vertical",
        ["space-horizontal"]: props.direction !== "vertical",
        [`space-align-${align()}`]: !!align(),
        ["space-wrap"]: props.wrap,
      }),
      props.classList,
      props.class
    );
    return cla;
  };

  return (
    <div class={classes()} style={props.style}>
      <For each={childrenArray()}>
        {(item) => <div class="happy-space-item">{item}</div>}
      </For>
    </div>
  );
}
