import { css } from "solid-styled-components";
import { getAliasToken } from "../../theme";
import { ComponentToken } from "./token";
import { Properties } from "csstype";
import { AliasToken } from "../../theme/interface";

export const resetComponent = (
  token: AliasToken,
  needInheritFontFamily = false
): Properties => ({
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

export const cardCss = () => {
  const token = getAliasToken();
  const cardToken = {
    cardShadow: token.boxShadowCard,
    cardHeadPadding: token.padding,
    cardPaddingBase: token.paddingLG,
    cardActionsIconSize: token.fontSize,
    cardPaddingSM: 12, // Fixed padding.
  };
  return css({
    ...resetComponent(token),
    position: "relative",
    background: token.colorBgContainer,
    borderRadius: token.borderRadiusLG + "px",
    ".card-body": {
      padding: cardToken.cardPaddingSM + "px",
    },
    [`&.card-bordered`]: {
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`,
    },
    [`&:not(.card-bordered)`]: {
        boxShadow: token.boxShadowTertiary,
    }
  });
};
