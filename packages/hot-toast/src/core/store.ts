import { DefaultToastOptions } from "./types";
import { createEffect } from "solid-js";
import { store as defaultStore, emit, toast } from "./toast";
import { useToastContext } from "./context";

export const useStore = (
  toastOptions: () => DefaultToastOptions = () => ({})
) => {
  let context = useToastContext();
  if (!context.store) {
    context = {
      store: defaultStore,
      emit,
      toast,
    };
  }
  const store = () => context.store;
  const [state, setState] = store();
  const toasts = () => state.toasts;
  const pausedAt = () => state.pausedAt;
  createEffect(() => {
    setState({ toastOptions: toastOptions() });
  });
  return {
    toasts,
    emit: context.emit,
    toast: context.toast,
    pausedAt,
  };
};
