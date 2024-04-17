import { JSX, Show, createEffect, createSignal, on } from "solid-js";
import { css } from "solid-styled-components";
import { Transition, TransitionProps } from "solid-transition-group";

export type MaskProps = JSX.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  transition?: Pick<
    TransitionProps,
    | "onAfterEnter"
    | "onAfterExit"
    | "onBeforeEnter"
    | "onBeforeExit"
    | "onEnter"
    | "onExit"
  >;
};

export const Mask = (props: MaskProps) => {
  const [open, setOpen] = createSignal(false);
  const propsOpen = () => props.open;
  createEffect(
    on(propsOpen, (v) => {
      requestAnimationFrame(() => {
        setOpen(v);
      });
    })
  );

  const enterActiveClass = css({
    transition: "opacity 0.3s",
  });
  const enterClass = css({
    opacity: 0,
  });
  const enterToClass = css({
    opacity: 1,
  });

  const defaultCss = () =>
    css({
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
    });

  const genClass = () =>
    props.class ? props.class + " " + defaultCss() : defaultCss();
  return (
    <Transition
      enterActiveClass={enterActiveClass}
      enterClass={enterClass}
      enterToClass={enterToClass}
      exitActiveClass={enterActiveClass}
      exitClass={enterToClass}
      exitToClass={enterClass}
      {...props.transition}
    >
      <Show when={open()}>
        <div {...props} class={genClass()} />
      </Show>
    </Transition>
  );
};
