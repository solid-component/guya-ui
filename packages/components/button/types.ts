import { JSX } from "solid-js";
import { Size, Status } from "solid-styled-components";
import { Properties } from "csstype";

export type ButtonType = "primary" | "success" | 'info' | 'danger';

export interface ButtonProps
  extends Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  class?: string;
  classList?: {
    [k: string]: boolean;
  };
  size?: Size;
  children?: JSX.Element;
  type?: ButtonType;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
}

export type SizeStyle = Partial<Record<Size, Properties>>;

export type ButtonTheme<
  TStatus extends Status = Status,
  TType extends ButtonType = ButtonType
> = Properties & {
  size: SizeStyle;
} & {
  [k in TStatus]: Properties;
} & {
  [k in TType]: Omit<ButtonTheme<TStatus, TType>, "size" | ButtonType>;
};

