import { css } from "solid-styled-components";
import { genStyle } from "../../theme";

export const spaceCss = () => {
  return genStyle("space", (token) =>
    css({
      [`&.${token.componentCls}-vertical`]: {
        display: "flex",
        flexDirection: "column",
      },
      [`&.${token.componentCls}-small`]: {
        columnGap: token.paddingSM + "px",
        rowGap: token.paddingSM + "px",
      },
      [`&.${token.componentCls}-middle`]: {
        columnGap: token.padding + "px",
        rowGap: token.padding + "px",
      },
      [`&.${token.componentCls}-large`]: {
        columnGap: token.paddingLG + "px",
        rowGap: token.paddingLG + "px",
      },
      [`&.${token.componentCls}-wrap`]: {
        flexWrap: "wrap",
      },
      [`&.${token.componentCls}-align-center`]: {
        alignItems: "center",
      },
      [`&.${token.componentCls}-align-start`]: {
        alignItems: "start",
      },
      [`&.${token.componentCls}-align-end`]: {
        alignItems: "end",
      },
      [`&.${token.componentCls}-align-baseline`]: {
        alignItems: "baseline",
      },
      [`&.${token.componentCls}-horizontal`]: {
        display: "inline-flex",
      },
    })
  );
};
