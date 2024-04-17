import { JSX, Show, createEffect, createSignal } from "solid-js";
import { Portal } from "solid-js/web";

export type ContainProps = {
  open?: boolean;
  appendToBody?: boolean;
  popup?: JSX.Element;
};

export const Contain = (props: ContainProps) => {
  const [mounted, setMounted] = createSignal(props.open);
  createEffect(() => {
    if (!mounted() && props.open) {
      setMounted(true);
    }
  });

  return (
    <Show when={props.open || mounted()}>
      <Show when={props.appendToBody} fallback={props.popup}>
        <Portal mount={document.body}>{props.popup}</Portal>
      </Show>
    </Show>
  );
};
