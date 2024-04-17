import "solid-styled-components";
import { ButtonTheme } from "./button/types";
import { Properties } from "csstype";
// import { ButtonTheme } from "./button/types";
// import { InputTheme } from "./input/types";

declare module "solid-styled-components" {
  export type Size = "large" | "small";
  export type Status = "hover" | "active" | "disabled";
  export type Colors = "success" | "error" | "primary";

  export type SizeStyle = Partial<Record<Size, Properties>>;

  export type Token = {
    [k in Colors]: {
      brand: string;
      dark2: string;
      light3: string;
      light5: string;
      light7: string;
      light8: string;
      light9: string;
    };
  };

  export type Components = {
    token: Token;
    button?: ButtonTheme;
    // input?: InputTheme;
  };

  export interface DefaultTheme extends Components {}
}
