import { Accessor, createEffect, onCleanup } from "solid-js";
import { useStore } from "./store";
import { DefaultToastOptions, Toast, ToastPosition, ToastType } from "./types";

export const defaultTimeouts: {
  [key in ToastType]: number;
} = {
  blank: 4000,
  error: 4000,
  success: 2000,
  loading: Infinity,
  custom: 4000,
};

export const useToaster = (
  toastOptions: () => DefaultToastOptions = () => ({})
) => {
  const { emit, toast, toasts, pausedAt } = useStore(toastOptions);
  const startPause = () => {
    emit.startPause(Date.now());
  };

  const endPause = () => {
    if (pausedAt()) {
      emit.endPause(Date.now());
    }
  };

  createEffect(() => {
    if (pausedAt()) {
      return;
    }
    const now = Date.now();
    const timeouts = toasts().map((t) => {
      const duration = t.duration;
      if (duration === Infinity) {
        return;
      }
      const durationLeft =
        (duration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          toast.dismiss(t.id);
        }
        return;
      }
      return setTimeout(() => {
        toast.dismiss(t.id);
      }, duration);
    });
    onCleanup(() => {
      timeouts.forEach((timeout) => timeout && clearTimeout(timeout));
    });
  });

  const calculateOffset = (
    toast: Toast,
    opts?: {
      reverseOrder?: Accessor<boolean>;
      gutter?: Accessor<number>;
      defaultPosition?: ToastPosition;
    }
  ) => {
    const {
      reverseOrder = () => false,
      gutter = () => 8,
      defaultPosition,
    } = opts || {};
    const relevantToasts = toasts().filter(
      (t) =>
        (t.position || defaultPosition) ===
          (toast.position || defaultPosition) && t.height
    );
    const toastIndex = relevantToasts.findIndex((t) => t.id === toast.id);
    const toastsBefore = relevantToasts.filter(
      (toast, i) => i < toastIndex && toast.visible
    ).length;
    const offset = relevantToasts
      .filter((t) => t.visible)
      .slice(...(reverseOrder() ? [toastsBefore + 1] : [0, toastsBefore]))
      .reduce((acc, t) => acc + (t.height || 0) + gutter(), 0);
    return offset;
  };

  const updateHeight = (toastId: string, height: number) => {
    emit.updateToast({ id: toastId, height });
  };

  return {
    toasts,
    handlers: {
      calculateOffset,
      updateHeight,
      startPause,
      endPause,
    },
  };
};
