import { Show } from "solid-js";
import { Toast } from "../core/types";
import { ErrorIcon } from "./error";
import { LoaderIcon } from "./loader";
import { keyframes, styled } from "solid-styled-components";
import { CheckmarkIcon } from "./checkmark";

const StatusWrapper = styled("div")`
  position: absolute;
`;

const IndicatorWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`;

const enter = keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`;

export const AnimatedIconWrapper = styled("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${enter} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`;

export const ToastIcon = (props: { toast: Toast }) => {
  const iconTheme = () => props.toast.iconTheme;
  const icon = () => props.toast.icon;
  if (icon()) {
    return (
      <Show when={typeof icon() === "string"} fallback={icon()}>
        <AnimatedIconWrapper>{icon()}</AnimatedIconWrapper>
      </Show>
    );
  }
  if (props.toast.type === "blank") {
    return null;
  }
  const isBlank = () => props.toast.type === "blank";
  return (
    <Show when={!isBlank()}>
      <IndicatorWrapper>
        <LoaderIcon {...iconTheme()}/>
        <Show when={props.toast.type !== "loading"}>
          <StatusWrapper>
            <Show
              when={props.toast.type === "error"}
              fallback={<CheckmarkIcon {...iconTheme()}/>}
            >
              <ErrorIcon {...iconTheme()}/>
            </Show>
          </StatusWrapper>
        </Show>
      </IndicatorWrapper>
    </Show>
  );
};

