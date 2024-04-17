import { Properties } from "csstype";
import {
  CSSAttribute,
  Components,
  SizeStyle,
  Token,
} from "solid-styled-components";
export type Status = {
  hover?: Properties;
  active?: Properties;
  disabled?: Properties;
  focus?: Properties;
};

export type GenStatus = (status: Status) => CSSAttribute;
export type GenToken = () => Token;

export type GenSize = (prefix: string, size: SizeStyle) => CSSAttribute;
