import { JSX } from "solid-js";
export type ToastType = "success" | "error" | "loading" | "blank" | "custom";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
export type Renderable = JSX.Element | string | null;

export type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;

export type ValueOrFunction<TValue, TArg> =
  | TValue
  | ValueFunction<TValue, TArg>;

export type ToastOptions = Partial<
  Pick<
    Toast,
    | "id"
    | "icon"
    | "duration"
    | "ariaProps"
    | "className"
    | "style"
    | "position"
    | "iconTheme"
  >
>;

export type Message = ValueOrFunction<Renderable, Toast>;

export interface IconTheme {
  primary: string;
  secondary: string;
}

export interface Toast {
  type: ToastType;
  id: string;
  message: Message;
  icon?: Renderable;
  duration?: number;
  pauseDuration: number;
  position?: ToastPosition;

  ariaProps: {
    role: "status" | "alert";
    "aria-live": "assertive" | "off" | "polite";
  };

  style?: JSX.CSSProperties;
  className?: string;
  iconTheme?: IconTheme;

  createdAt: number;
  visible: boolean;
  height?: number;
}

export type DefaultToastOptions = ToastOptions & {
  [key in ToastType]?: ToastOptions;
};

export interface ToasterProps {
  position?: () => ToastPosition;
  reverseOrder?: () => boolean;
  gutter?: () => number;
  toastOptions?: () => DefaultToastOptions;
  children?: (toast: Toast) => JSX.Element;
  containerStyle?: JSX.CSSProperties
  containerClass?: string
}
