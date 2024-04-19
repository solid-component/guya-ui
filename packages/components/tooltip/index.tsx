import { JSX, mergeProps } from "solid-js";
import Trigger, { TriggerProps } from "solid-trigger";
import { genTooltip } from "./style";
import { css } from "solid-styled-components";

export type TooltipProps = Omit<TriggerProps, "popup" | "transition"> & {
  content: JSX.Element;
};

export const Tooltip = (p: TooltipProps) => {
  const props = mergeProps({ showArrow: true }, p);
  const genDefaultCss = () =>
    css({
      "--bg-color": genTooltip().base.bg,
      fontSize: "12px",
      color: "#fff",
      padding: genTooltip().size?.md?.padding,
      borderRadius: genTooltip().size?.md?.radius,
    });
  return (
    <Trigger
      class={genDefaultCss()}
      zIndex={2240}
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
