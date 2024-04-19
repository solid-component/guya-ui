import { SizeStyle } from "solid-styled-components";
import { ButtonToken } from "./token";
import { GenStyle } from "../../theme/types";

export const genSizeLargeButton: GenStyle<ButtonToken> = (token) => {
  // const smallToken = {
  //   controlHeight: token.controlHeightSM,
  //   fontSize: token.contentFontSizeSM,
  //   lineHeight: token.contentLineHeightSM,
  //   padding: token.paddingXS,
  //   buttonPaddingHorizontal: token.paddingInlineSM,
  //   buttonPaddingVertical: token.paddingBlockSM,
  //   borderRadius: token.borderRadiusSM,
  //   buttonIconOnlyFontSize: token.onlyIconSizeSM,
  // }
  return {
    height: token.controlHeightLG + "px",
    fontSize: token.contentFontSizeLG + "px",
    lineHeight: token.contentLineHeightLG,
    padding: token.paddingLG + "px",
    paddingInline: token.paddingInlineLG + "px",
    paddingBlock: token.paddingBlockLG + "px",
    borderRadius: token.borderRadiusLG + "px",
    // buttonIconOnlyFontSize: token.onlyIconSizeSM,
  };
};

export const genSizeSmallButton: GenStyle<ButtonToken> = (token) => {
  return {
    height: token.controlHeightSM + "px",
    fontSize: token.contentFontSizeSM + "px",
    lineHeight: token.contentLineHeightSM,
    padding: token.paddingXS + "px",
    paddingInline: token.paddingInlineSM + "px",
    paddingBlock: token.paddingBlockSM + "px",
    borderRadius: token.borderRadiusSM + "px",
    // buttonIconOnlyFontSize: token.onlyIconSizeSM,
  };
};
