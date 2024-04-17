import {
  DefaultToastOptions,
  Toast,
} from "./types";
import { create } from "./create";


export interface State {
  toasts: Toast[];
  pausedAt: number | undefined;
  toastOptions: DefaultToastOptions;
}

const { toast, emit, store } = create();

export { toast, emit, store };
