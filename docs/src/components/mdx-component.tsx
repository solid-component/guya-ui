import { css } from "solid-styled-components";
import { ComponentPreview } from "./component-preview";
import { ComponentSource } from "./component-source";
import { ComponentProps, Suspense, children, onMount } from "solid-js";
import { anchors } from "@/layout/anchor";

const [_, setTitles] = anchors;

export const MDXComponents = {
  a(props: ComponentProps<"a">) {
    return (
      <a
        class={css({
          color: "#4090ff",
          cursor: 'pointer',
          textDecoration: 'none'
        })}
        href={props.href}
        target="_blank"
      >
        {props.children}
      </a>
    );
  },
  h1(props: ComponentProps<"h1">) {
    const id = () => (typeof props.children === "string" ? props.children : "");
    onMount(() => {
      setTitles((l) => [...l, { type: "h1", label: id() }]);
    });
    return <h1 id={id()}>{props.children}</h1>;
  },
  h2(props: ComponentProps<"h1">) {
    const id = () => (typeof props.children === "string" ? props.children : "");
    onMount(() => {
      setTitles((l) => [...l, { type: "h2", label: id() }]);
    });
    return (
      <h2
        id={id()}
        style={{
          "margin-top": "2.25rem",
          "margin-bottom": "1.25rem",
        }}
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
