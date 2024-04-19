import { Properties } from "csstype";
import { CSSAttribute, SizeStyle, Token } from "solid-styled-components";
import { AliasToken } from "./interface";
export type Status = {
  hover?: Properties;
  active?: Properties;
  disabled?: Properties;
  focus?: Properties;
};

export type GenStatus = (status: Status) => CSSAttribute;
export type GenToken = () => Token;

export type GenSize = (prefix: string, size: SizeStyle) => CSSAttribute;

export type ComponentToken<T> = AliasToken & {
  componentCls: string;
} & T;

export type GenStyle<T> = (token: ComponentToken<T>) => CSSAttribute;
