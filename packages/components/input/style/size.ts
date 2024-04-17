import { CSSAttribute, SizeStyle, useTheme } from "solid-styled-components";
import { genSize } from "../../theme/utils";

export const inputDefaultSize = (): SizeStyle => {
  const theme = useTheme();
  return (
    theme?.input?.size || {
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

export const inputSize = (): CSSAttribute => {
  return genSize("input", inputDefaultSize());
};
