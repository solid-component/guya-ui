import { CSSAttribute, SizeStyle, useTheme } from "solid-styled-components";
import { genSize } from "../../theme/utils";

export const buttonDefaultSize = (): SizeStyle => {
  const theme = useTheme();
  return (
    theme?.button?.size || {
      large: {
        height: "40px",
        padding: "12px 19px",
      },
      small: {
        height: "24px",
        padding: "5px 11px",
      },
    }
  );
};

export const buttonSize = (): CSSAttribute => {
  return genSize("happy-btn", buttonDefaultSize());
};
