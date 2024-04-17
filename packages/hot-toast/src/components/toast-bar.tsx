import { Renderable, Toast, ToastPosition } from "../core/types";
import { JSX } from "solid-js";
import { keyframes, styled } from "solid-styled-components";
import { prefersReducedMotion, resolveValue } from "../core/utils";
import { ToastIcon } from "./toast-icon";

interface ToastBarProps {
  toast: Toast;
  position: () => ToastPosition | undefined;
  style?: JSX.CSSProperties;
  children?: (components: {
    icon: Renderable;
    message: Renderable;
  }) => Renderable;
}

const enterAnimation = (factor: number) => `
0% {transform: translate3d(0,${factor * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

const exitAnimation = (factor: number) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${factor * -150}%,-1px) scale(.6); opacity:0;}
`;

const Message = styled("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;

const fadeInAnimation = `0%{opacity:0;} 100%{opacity:1;}`;
const fadeOutAnimation = `0%{opacity:1;} 100%{opacity:0;}`;

const getAnimationStyle = (
  position: () => ToastPosition,
  visible: () => boolean
): JSX.CSSProperties => {
  const top = position().includes("top");
  const factor = top ? 1 : -1;
  const [enter, exit] = prefersReducedMotion()
    ? [fadeInAnimation, fadeOutAnimation]
    : [enterAnimation(factor), exitAnimation(factor)];
  return {
    animation: visible()
      ? `${keyframes(enter)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
      : `${keyframes(exit)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
  };
};

const ToastBarBase = styled("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`;

export const ToastBar = (props: ToastBarProps) => {
  const toast = () => props.toast;
  const animationStyle = (): JSX.CSSProperties => {
    if (props.toast.height) {
      return getAnimationStyle(
        () => props.position() || "top-center",
        () => toast().visible
      );
    }
    return { opacity: 0 };
  };

  const icon = <ToastIcon toast={props.toast} />;
  const message = (
    <Message>{resolveValue(props.toast.message, props.toast)}</Message>
  );

  const isFunction = () => {
    if (typeof props.children === "function") {
      return props.children({
        icon,
        message,
      });
    }
    return (
      <>
        {icon}
        {message}
      </>
    );
  };

  return (
    <ToastBarBase
      class={toast().className}
      style={{ ...animationStyle(), ...props.style, ...toast().style }}
    >
      {isFunction()}
    </ToastBarBase>
  );
};
