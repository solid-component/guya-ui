import { ParentProps, createContext, splitProps, useContext } from "solid-js";
import { store, toast, emit } from "./toast";

export type ToastContextValue = {
  store: typeof store;
  toast: typeof toast;
  emit: typeof emit;
};

export const ToastContext = createContext({} as ToastContextValue);

export const useToastContext = () => {
  return useContext(ToastContext);
};

export const ToastProvider = (props: ParentProps<ToastContextValue>) => {
  const [local, value] = splitProps(props, ["children"]);

  return (
    <ToastContext.Provider value={value}>
      {local.children}
    </ToastContext.Provider>
  );
};
