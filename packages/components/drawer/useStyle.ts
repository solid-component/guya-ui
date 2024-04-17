import { JSX, createEffect, mergeProps } from "solid-js";
import { css } from "solid-styled-components";
import { DrawerProps, Placement } from ".";

export function useStyle(p: DrawerProps) {
  const props = mergeProps(
    {
      width: "378px",
      height: "378px",
    },
    p
  );
  const unit = () =>
    ["top", "left"].includes(props.placement as Placement) ? -1 : 1;

  const vertical = () =>
    ["top", "bottom"].includes(props.placement as Placement);

  const transform = () => {
    if (vertical()) {
      return `translateY(${unit() * 100}%)`;
    }
    return `translateX(${unit() * 100}%)`;
  };

  const panelCss = () =>
    css({
      position: "absolute",
      width: vertical() ? "100%" : props.width,
      background: "#fff",
      height: vertical() ? props.height : "100%",
      top: vertical() ? undefined : 0,
      "pointer-events": "auto",
      "box-shadow": vertical()
        ? "0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16)"
        : "-6px 0 16px 0 rgba(0, 0, 0, 0.08), -3px 0 6px -4px rgba(0, 0, 0, 0.12), -9px 0 28px 8px rgba(0, 0, 0, 0.05)",
      [props.placement as Placement]: 0,
    });

  const enterActiveClass = css({
    transition: "all .3s",
  });
  const enterClass = () => css({
    opacity: 0,
    transform: transform(),
  });
  const enterToClass = () => css({
    opacity: 1,
    transform: vertical() ? "translateY(0)" : "translateX(0)",
  });
  console.log('enterClass', enterClass())

  const panelTransition = () => ({
    enterActiveClass,
    enterClass: enterClass(),
    enterToClass: enterToClass(),
    exitActiveClass: enterActiveClass,
    exitClass: enterToClass(),
    exitToClass: enterClass(),
  });

  return {
    panelCss,
    panelTransition,
  };
}
