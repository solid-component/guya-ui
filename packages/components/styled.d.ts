import "solid-styled-components";
import { ButtonTheme } from "./button/types";
import { Properties } from "csstype";
// import { ButtonTheme } from "./button/types";
// import { InputTheme } from "./input/types";
import type {
  AliasToken,
  MapToken,
  OverrideToken,
  SeedToken,
} from "./theme/interface";
import { Theme } from "./theme";

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

  export type ComponentsToken = {
    [key in keyof OverrideToken]?: OverrideToken[key] & {
      // theme?: Theme<SeedToken, MapToken>;
    };
  };

  export type DesignTokenProviderProps = {
    prefixCls?: string
    seedToken?: Partial<SeedToken>;
    theme?: Theme<SeedToken, MapToken>;
    components?: ComponentsToken;
  };

  export interface DefaultTheme extends DesignTokenProviderProps {}
}
