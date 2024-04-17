import { createStore } from "solid-js/store";
import Emit from "./emit";
import { State } from "./toast";
import {
  DefaultToastOptions,
  Message,
  Renderable,
  Toast,
  ToastOptions,
  ToastType,
  ValueOrFunction,
} from "./types";
import { genId, resolveValue } from "./utils";

type ToastHandler = (message: Message, options?: ToastOptions) => string;

const createToast = (
  message: Message,
  type: ToastType = "blank",
  opts?: ToastOptions
): Toast => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId(),
});

export const create = (options?: { limit: number }) => {
  const store = createStore<State>({
    toasts: [],
    pausedAt: undefined,
    toastOptions: {},
  });
  const createHandler = (type?: ToastType): ToastHandler => {
    return (message, options) => {
      const toast = createToast(message, type, options);
      emit.upsertToast(toast);
      return toast.id;
    };
  };
  const emit = new Emit(store, options?.limit);
  const toast = (message: Message, opts?: ToastOptions) =>
    createHandler("blank")(message, opts);

  toast.error = createHandler("error");
  toast.success = createHandler("success");
  toast.loading = createHandler("loading");
  toast.custom = createHandler("custom");

  toast.dismiss = (toastId?: string) => emit.dismissToast(toastId);

  toast.remove = (toastId?: string) => emit.removeToast(toastId);

  toast.promise = <T>(
    promise: Promise<T>,
    msgs: {
      loading: Renderable;
      success: ValueOrFunction<Renderable, T>;
      error: ValueOrFunction<Renderable, any>;
    },
    opts?: DefaultToastOptions
  ) => {
    const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });
    promise
      .then((p) => {
        toast.success(resolveValue(msgs.success, p), {
          id,
          ...opts,
          ...opts?.success,
        });
        return p;
      })
      .catch((e) => {
        toast.error(resolveValue(msgs.error, e), {
          id,
          ...opts,
          ...opts?.error,
        });
      });

    return promise;
  };
  return { store, toast, emit };
};
