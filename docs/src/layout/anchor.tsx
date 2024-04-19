import { useLocation } from "@solidjs/router";
import { For, Show, createEffect, createRenderEffect, on } from "solid-js";
import { createStore } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import { css } from "solid-styled-components";

export const anchors = createStore<
  {
    type: "h1" | "h2" | "h3";
    label: string;
  }[]
>([]);

export function Anchor() {
  const [titles, setTitles] = anchors;
  const location = useLocation();
  const indent = (type: "h1" | "h2" | "h3") => {
    return +type.replace("h", "");
  };
  createRenderEffect(
    on(
      () => location.pathname,
      () => {
        setTitles([]);
      }
    )
  );
  return (
    <div
      class={css({
        position: "sticky",
        top: 64 + 32 + "px",
        paddingInline: "32px",
      })}
    >
      <For each={titles}>
        {(item, idx) => (
          <Show when={idx() !== 0}>
            <div>
              <div
                class={css({
                  fontSize: "12px",
                  cursor: "pointer",
                  color: "#909399",
                  paddingBlock: "4px",
                  paddingLeft: (indent(item.type) - 2) * 14 + "px",
                })}
                onClick={() => {
                  const dom = document.getElementById(item.label);
                  if (!dom) return;
                  window.scrollTo({
                    top: dom.getBoundingClientRect().top,
                    // block: "start",
                    behavior: "smooth",
                  });
                }}
              >
                {item.label}
              </div>
            </div>
          </Show>
        )}
      </For>
    </div>
  );
}
