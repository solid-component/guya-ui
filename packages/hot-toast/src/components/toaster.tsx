import { For } from "solid-js/web";
import { ToastPosition, ToasterProps } from "../core/types";
import { JSX, Match, Switch, mergeProps } from "solid-js";
import { useToaster } from "../core/useToaster";
import { ToastBar } from "./toast-bar";
import { css } from "solid-styled-components";
import { resolveValue } from "../core/utils";

const DEFAULT_OFFSET = 16 + "px";

const getPositionStyle = (
  position: ToastPosition,
  offset: () => number
): JSX.CSSProperties => {
  const top = position.includes("top");
  const verticalStyle: JSX.CSSProperties = top ? { top: 0 } : { bottom: 0 };
  let horizontalStyle: JSX.CSSProperties = {};
  if (position.includes("center")) {
    horizontalStyle["justify-content"] = "center";
  }
  if (position.includes("right")) {
    horizontalStyle["justify-content"] = "flex-end";
  }
  return {
    left: 0,
    right: 0,
    display: "flex",
    position: "absolute",
    transition: `all 230ms cubic-bezier(.21,1.02,.73,1)`,
    transform: `translateY(${offset() * (top ? 1 : -1)}px)`,
    ...verticalStyle,
    ...horizontalStyle,
  };
};

const activeClass = css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;

export const Toaster = (p: ToasterProps) => {
  const props = mergeProps(
    {
      position: () => "top-center" as ToastPosition,
    },
    p
  );
  const { toasts, handlers } = useToaster(p.toastOptions);
  return (
    <div
      style={{
        position: "fixed",
        "z-index": 9999,
        top: DEFAULT_OFFSET,
        left: DEFAULT_OFFSET,
        right: DEFAULT_OFFSET,
        bottom: DEFAULT_OFFSET,
        "pointer-events": "none",
        ...props.containerStyle
      }}
      class={props.containerClass}
      onMouseEnter={handlers.startPause}
      onMouseLeave={handlers.endPause}
    >
      <For each={toasts()}>
        {(toast) => {
          const position = () => toast.position || props.position();
          const offset = () =>
            handlers.calculateOffset(toast, {
              gutter: props.gutter,
              reverseOrder: props.reverseOrder,
            });
          const style = () => getPositionStyle(position(), offset);
          return (
            <div
              style={style()}
              classList={{
                [activeClass]: toast.visible,
              }}
              ref={(el) => {
                const updateHeight = () => {
                  const height = el.getBoundingClientRect().height;
                  handlers.updateHeight(toast.id, height);
                };
                updateHeight();
                new MutationObserver(updateHeight).observe(el, {
                  subtree: true,
                  childList: true,
                  characterData: true,
                });
              }}
            >
              <Switch fallback={<ToastBar toast={toast} position={position} />}>
                <Match when={toast.type === "custom"}>
                  {resolveValue(toast.message, toast)}
                </Match>
                <Match when={typeof props.children === "function"}>
                  {props.children!(toast)}
                </Match>
              </Switch>
            </div>
          );
        }}
      </For>
    </div>
  );
};
