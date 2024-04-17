import { JSX, mergeProps } from "solid-js";
import Trigger, { TriggerProps } from "solid-trigger";
import { genTooltip } from "./style";
import { css } from "solid-styled-components";

export type PopoverProps = Omit<TriggerProps, "popup" | "transition"> & {
  content: JSX.Element;
};

export const Popover = (p: PopoverProps) => {
  const props = mergeProps({ showArrow: true }, p);
  const genDefaultCss = () =>
    css({
      "--bg-color": genTooltip().base.bg,
      fontSize: "12px",
      color: "#606266",
      padding: genTooltip().size?.md?.padding,
      borderRadius: genTooltip().size?.md?.radius,
      border: "1px solid #e4e7ed",
      boxShadow: "0px 0px 12px rgba(0, 0, 0, .12)",
      ".popover-arrow::before": {
        border: "1px solid #e4e7ed",
      },
      "&.popover[data-popper-placement^=bottom]": {
        ".popover-arrow::before": {
          borderBottomColor: "transparent",
          borderRightColor: "transparent",
        },
      },
      "&.popover[data-popper-placement^=left]": {
        ".popover-arrow::before": {
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
        },
      },
      "&.popover[data-popper-placement^=top]": {
        ".popover-arrow::before": {
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
        },
      },
      "&.popover[data-popper-placement^=right]": {
        ".popover-arrow::before": {
          borderRightColor: "transparent",
          borderTopColor: "transparent",
        },
      },
    });
  return (
    <Trigger
      class={genDefaultCss()}
      zIndex={2240}
      placement="right"
      {...props}
      popup={props.content}
      transition={{
        onEnter: (el, done) => {
          const a = el.animate(
            [
              { scale: 0.6, opacity: 0 },
              { scale: 1, opacity: 1 },
            ],
            {
              duration: 150,
            }
          );
          a.finished.then(done);
        },
        onExit: (el, done) => {
          const a = el.animate(
            [
              { scale: 1, opacity: 1 },
              { scale: 0.6, opacity: 0 },
            ],
            {
              duration: 150,
            }
          );
          a.finished.then(done);
        },
      }}
    />
  );
};
