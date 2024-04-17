import {
  JSX,
  Show,
  createEffect,
  createSignal,
  mergeProps,
  on,
} from "solid-js";
import { Mask } from "../mask";
import { css } from "solid-styled-components";
import { Transition, TransitionProps } from "solid-transition-group";
import { DOMElement } from "solid-js/jsx-runtime";

interface EventHandler<T, E extends Event> {
  (
    e: E & {
      currentTarget: T;
      target: DOMElement;
    }
  ): void;
}

export type PopupProps = {
  open?: boolean;
  children?: JSX.Element;
  // placement?: Placement;
  mask?: boolean;
  maskClassName?: string;
  maskStyle?: JSX.CSSProperties;
  destroyOnClose?: boolean;
  appendToBody?: boolean;
  class?: string;
  classList?: {
    [k: string]: boolean | undefined;
  };
  onClick?: EventHandler<HTMLElement, MouseEvent>;
  keyboard?: boolean;
  onClose?:
    | EventHandler<HTMLElement, MouseEvent>
    | EventHandler<HTMLDivElement, KeyboardEvent>;
  onAfterExit?: () => void;
  panelTransition: () => Pick<
    TransitionProps,
    | "enterActiveClass"
    | "enterClass"
    | "enterToClass"
    | "exitActiveClass"
    | "exitClass"
    | "exitToClass"
  >;
};

export const Popup = (p: PopupProps) => {
  let panel: HTMLDivElement | undefined = undefined;
  const props = mergeProps(
    {
      open: false,
      mask: true,
      keyboard: true,
    },
    p
  );
  const [open, setOpen] = createSignal(false);
  const [destroy, setDestroy] = createSignal(false);
  const propsOpen = () => props.open;
  createEffect(
    on(propsOpen, (v) => {
      requestAnimationFrame(() => {
        setOpen(v);
      });
    })
  );

  createEffect(() => {
    if (propsOpen()) {
      setDestroy(false);
    }
  });

  const content = (
    <Show when={!destroy()} fallback={null}>
      {props.children}
    </Show>
  );

  const onPanelKeyDown: JSX.EventHandlerUnion<HTMLDivElement, KeyboardEvent> = (
    event
  ) => {
    if (!props.open) {
      return;
    }
    const { key } = event;
    switch (key) {
      // Close
      case "Escape": {
        if (props.onClose && props.keyboard) {
          event.stopPropagation();
          props.onClose(event);
        }
        break;
      }
    }
  };

  createEffect(() => {
    if (props.open && panel) {
      panel.focus({ preventScroll: true });
    }
  });
  const defaultCss = () =>
    css({
      inset: 0,
      zIndex: 999,
      outline: "none",
      pointerEvents: props.open ? "auto" : "none",
      position: props.appendToBody ? "fixed" : "absolute",
    });
  const genClass = () =>
    props.class ? props.class + " " + defaultCss() : defaultCss();
  return (
    <div
      ref={panel}
      tabIndex={-1}
      class={genClass()}
      classList={props.classList}
      onClick={props.onClick}
      onKeyDown={onPanelKeyDown}
    >
      <Mask
        open={open() && props.mask}
        class={props.maskClassName}
        style={{
          "pointer-events": "none",
          ...props.maskStyle,
        }}
      />
      <Transition
        {...props.panelTransition()}
        onAfterExit={() => {
          if (props.destroyOnClose) {
            setDestroy(true);
          }
          props.onAfterExit?.();
        }}
      >
        <Show when={open()}>{content}</Show>
      </Transition>
    </div>
  );
};
