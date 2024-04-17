import { JSX } from "solid-js";
import { Size } from "solid-styled-components";

export type InputProps = Omit<
  JSX.InputHTMLAttributes<HTMLInputElement>,
  "value"
> & {
  size?: Size;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  value?: string;
  clearable?: boolean
  onChangeValue?: (value: string) => void;
};
