import { SetStoreFunction } from "solid-js/store";
import { State } from "./toast";
import { Toast } from "./types";
import { defaultTimeouts } from "./useToaster";
import { batch } from "solid-js";

const genDuration = (state: State, t: Toast) =>
  t.duration ||
  state.toastOptions[t.type]?.duration ||
  state.toastOptions?.duration ||
  defaultTimeouts[t.type];

const genStyle = (state: State, t: Toast) => {
  return {
    ...state.toastOptions.style,
    ...state.toastOptions[t.type]?.style,
    ...t.style,
  };
};

class Emit {
  public store: [State, SetStoreFunction<State>];
  public toastTimeouts = new Map<Toast["id"], ReturnType<typeof setTimeout>>();
  public TOAST_EXPIRE_DISMISS_DELAY = 1000;
  public limit = 20;
  constructor(store: [State, SetStoreFunction<State>], limit: number = 20) {
    this.store = store;
    this.limit = limit;
  }
  addToRemoveQueue(toastId: string) {
    if (this.toastTimeouts.has(toastId)) {
      return;
    }
    const timeout = setTimeout(() => {
      this.toastTimeouts.delete(toastId);
      this.removeToast(toastId);
    }, this.TOAST_EXPIRE_DISMISS_DELAY);
    this.toastTimeouts.set(toastId, timeout);
  }
  addToast(toast: Toast) {
    const [state, setState] = this.store;
    setState("toasts", (l) =>
      [
        {
          ...state.toastOptions,
          ...state.toastOptions[toast.type],
          ...toast,
          duration: genDuration(state, toast),
          style: genStyle(state, toast),
        },
        ...l,
      ].slice(0, this.limit)
    );
  }
  updateToast(toast: Partial<Toast>) {
    const [state, setState] = this.store;
    const idx = state.toasts.findIndex((t) => t.id === toast.id);
    if (idx !== -1) {
      setState("toasts", idx, toast);
    }
  }
  dismissToast(toastId?: string) {
    const [state, setState] = this.store;
    if (toastId) {
      this.addToRemoveQueue(toastId);
      const idx = state.toasts.findIndex((t) => t.id === toastId);
      if (idx !== -1) {
        setState("toasts", idx, "visible", false);
      }
    } else {
      state.toasts.forEach((toast) => {
        this.addToRemoveQueue(toast.id);
      });
      setState(
        "toasts",
        { from: 0, to: state.toasts.length - 1 },
        "visible",
        false
      );
    }
  }
  upsertToast(toast: Toast) {
    const [state] = this.store;
    state.toasts.find((t) => t.id === toast.id)
      ? this.updateToast(toast)
      : this.addToast(toast);
  }
  startPause(time: number) {
    const [_, setState] = this.store;
    setState("pausedAt", time);
  }
  endPause(time: number) {
    const [state, setState] = this.store;
    const diff = time - (state.pausedAt || 0);
    batch(() => {
      setState("pausedAt", undefined);
      setState(
        "toasts",
        { from: 0, to: state.toasts.length - 1 },
        "pauseDuration",
        (l) => l + diff
      );
    });
  }
  removeToast(toastId?: string) {
    const [_, setState] = this.store;
    if (toastId === undefined) {
      setState("toasts", []);
    } else {
      setState("toasts", (toasts) => toasts.filter((t) => t.id !== toastId));
    }
  }
}

export default Emit;
