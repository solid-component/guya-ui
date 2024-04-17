import { For, children } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { css } from "solid-styled-components";

export type SpaceProps = {
  direction?: "vertical";
  align?: "start" | "end" | "center" | "baseline";
  children: JSX.Element;
  class?: string;
  style?: JSX.CSSProperties;
};

export function Space(props: SpaceProps) {
  const resolved = children(() => props.children);
  const childrenArray = () => resolved.toArray();
  const align = () => {
    switch (props.align) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      default:
        return props.align || "center";
    }
  };

  const bascCss = () =>
    css({
      display: "inline-flex",
      flexDirection: props.direction === "vertical" ? "column" : "row",
      alignItems: align(),
      columnGap: "8px",
      rowGap: "8px",
    });

  const genClass = () =>
    props.class ? props.class + " " + bascCss() : bascCss();
  return (
    <div class={genClass()} style={props.style}>
      <For each={childrenArray()}>
        {(item) => <div class="happy-space-item">{item}</div>}
      </For>
    </div>
  );
}
