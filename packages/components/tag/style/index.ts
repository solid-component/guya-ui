import { css } from "solid-styled-components";
import { genStyle } from "../../theme";
import { ComponentToken } from "../../theme/types";
import { CSSAttribute } from "solid-styled-components";
import { TinyColor } from "@ctrl/tinycolor";

export const resetComponent = (
  token: ComponentToken<{}>,
  needInheritFontFamily = false
): CSSAttribute => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize + "px",
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: needInheritFontFamily ? "inherit" : token.fontFamily,
});

export const tagCss = () => {
  return genStyle("tag", (token) => {
    const tagFontSize = token.fontSizeSM;
    const defaultBg = new TinyColor(token.colorFillQuaternary)
      .onBackground(token.colorBgContainer)
      .toHexString();
    return css({
      ...resetComponent(token),
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "transparent",
      padding: "0 9px",
      marginInlineEnd: token.marginXS + "px",
      //   paddingInline: token.paInli,
      fontSize: tagFontSize + "px",
      //   lineHeight: token.tagLineHeight,
      background: defaultBg,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM + "px",
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      [`&.${token.componentCls}-primary`]: {
        background: token.colorPrimaryBg,
        borderColor: token.colorPrimaryBorder,
        color: token.colorPrimary,
        [`.${token.componentCls}-close-icon`]: {
          "&:hover": {
            color: token.colorPrimaryHover,
          },
        },
      },
      [`.${token.componentCls}-close-icon`]: {
        display: "inline-flex",
        cursor: "pointer",
        "&:hover": {
          color: token.colorTextHeading,
        },
      },
    });
  });
};
