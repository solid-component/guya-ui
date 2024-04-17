import { css } from "solid-styled-components";
import { ComponentPreview } from "./component-preview";
import { ComponentSource } from "./component-source";
import { ComponentProps, Suspense, children } from "solid-js";

export const MDXComponents = {
  h1(props: ComponentProps<"h1">) {
    const id = () => (typeof props.children === "string" ? props.children : "");
    return (
      <h1 id={id()} onClick={() => (location.href = "#" + id())}>
        {props.children}
      </h1>
    );
  },
  h2(props: ComponentProps<"h1">) {
    const id = () => (typeof props.children === "string" ? props.children : "");
    return (
      <h2
        id={id()}
        style={{
          "margin-top": "2.25rem",
          "margin-bottom": "1.25rem",
        }}
        onClick={() => (location.href = "#" + id())}
      >
        {props.children}
      </h2>
    );
  },
  code(props) {
    return (
      <div
        class={css({
          ".line": {
            display: "flex",
            alignItems: "center",
            height: "26px",
          },
        })}
        {...props}
      />
    );
  },
  pre(props) {
    return (
      <div
        style={{
          background: "#f5f7fa",
          padding: "4px",
        }}
      >
        <pre
          class={css({
            lineHeight: "2px",
          })}
        >
          {props.children}
        </pre>
      </div>
    );
  },
  ComponentSource,
  ComponentPreview,
};
