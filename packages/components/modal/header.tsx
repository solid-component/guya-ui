import { CloseBold } from "solid-dada-icons";
import { css } from "solid-styled-components";
import { ModalProps } from ".";
import { Show } from "solid-js";

type ModalHeaderProps = Pick<
  ModalProps,
  "onClose" | "title" | "closeIcon" | "closable"
>;

export const Header = (props: ModalHeaderProps) => {
  return (
    <>
      <Show when={props.closable}>
        <Show when={!props.closeIcon} fallback={props.closeIcon}>
          <button
            class={css({
              border: "none",
              outline: "none",
              background: "transparent",
              cursor: "pointer",
              width: "48px",
              height: "48px",
              position: "absolute",
              right: 0,
              top: 0,
              color: "rgb(0 0 0 / 45%)",
              "&:hover": {
                color: "#409eff",
              },
            })}
            onClick={(e) => props.onClose?.(e)}
          >
            <CloseBold />
          </button>
        </Show>
      </Show>
      <div
        class={css({
          marginBottom: "8px",
          fontSize: "16px",
          fontWeight: 600,
        })}
      >
        {props.title}
      </div>
    </>
  );
};
