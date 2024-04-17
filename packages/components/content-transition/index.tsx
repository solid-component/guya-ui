import { JSX, ParentProps, createEffect, createSignal, mergeProps } from "solid-js";

export type ContentTransitionProps = {
  defaultOpen?: boolean;
  open?: boolean;
  /** default vertical */
  direction?: "horizontal" | "vertical" | "both";
};

export const ContentTransition = (
  p: ParentProps<ContentTransitionProps>
) => {
  const props = mergeProps({ direction: "vertical" },p)
  const [open, setOpen] = createSignal(props.defaultOpen)

  createEffect(() => {
    setOpen(props.open)
  })

  const styleClasses = (): JSX.CSSProperties => {
    const style: JSX.CSSProperties = {
      "grid-template-columns": open() ? "1fr" : "0fr",
      "grid-template-rows": open() ? "1fr" : "0fr",
    }
    if(props.direction === 'vertical') {
      delete style['grid-template-columns']
    }
    if(props.direction === 'horizontal') {
      delete style['grid-template-rows']
    }
    return style
  };

  const style = (): JSX.CSSProperties => {
    return {
      "white-space": "nowrap",
      "grid-row": "1 / span 2",
    }
  };

  return (
    <div
      class="content"
      style={{
        display: "grid",
        ...styleClasses(),
        transition: "all 150ms",
      }}
    >
      <div
        style={{
          ...style(),
          overflow: "hidden",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
