import { css } from "solid-styled-components";
import { genStatus } from "../../theme/utils";
import { genSizeLargeButton, genSizeSmallButton } from "./size";

import { ButtonToken, prepareComponentToken } from "./token";
import { genStyle } from "../../theme";
import { Properties } from "csstype";
import { GenStyle } from "../../theme/types";

export const buttonPrimaryCss: GenStyle<ButtonToken> = (token) => {
  return {
    [`&.${token.componentCls}-primary`]: {
      backgroundColor: token.colorPrimary,
      boxShadow: token.primaryShadow,
      color: token.primaryColor,
      ...genStatus({
        hover: {
          color: token.colorTextLightSolid,
          background: token.colorPrimaryHover,
        },
        active: {
          color: token.colorTextLightSolid,
          background: token.colorPrimaryActive,
        },
        disabled: {
          cursor: "not-allowed",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.borderColorDisabled,
          color: token.colorTextDisabled,
          background: token.colorBgContainerDisabled,
          boxShadow: "none",
        },
      }),
    },
    [`&.${token.componentCls}-primary.${token.componentCls}-drangrous`]: {
      background: token.colorError,
      boxShadow: token.dangerShadow,
      color: token.dangerColor,
      ...genStatus({
        hover: {
          background: token.colorErrorHover,
        },
        active: {
          background: token.colorErrorActive,
        },
        disabled: {
          cursor: "not-allowed",
          borderColor: token.borderColorDisabled,
          color: token.colorTextDisabled,
          background: token.colorBgContainerDisabled,
          boxShadow: "none",
        },
      }),
    },
  };
};

export const buttonTextCss: GenStyle<ButtonToken> = (token) => {
  return {
    [`&.${token.componentCls}-text`]: {
      ...genStatus({
        hover: {
          color: token.colorText,
          background: token.textHoverBg,
        },
        active: {
          color: token.colorText,
          background: token.colorBgTextActive,
        },
        disabled: {
          cursor: "not-allowed",
          color: token.colorTextDisabled,
          boxShadow: "none",
        },
      }),
    },
    [`&.${token.componentCls}-text.${token.componentCls}-drangrous`]: {
      color: token.colorError,
      ...genStatus({
        hover: {
          color: token.colorErrorHover,
          background: token.colorErrorBg,
        },
        active: {
          color: token.colorErrorHover,
          background: token.colorErrorBg,
        },
        disabled: {
          cursor: "not-allowed",
          color: token.colorTextDisabled,
          boxShadow: "none",
        },
      }),
    },
  };
};

const buttonLinkCss: GenStyle<ButtonToken> = (token) => {
  return {
    [`&.${token.componentCls}-link`]: {
      color: token.colorLink,
      ...genStatus({
        hover: {
          color: token.colorLinkHover,
          background: token.linkHoverBg,
        },
        active: {
          color: token.colorLinkActive,
        },
        disabled: {
          cursor: "not-allowed",
          color: token.colorTextDisabled,
          boxShadow: "none",
        },
      }),
    },
    [`&.${token.componentCls}-link.${token.componentCls}-drangrous`]: {
      color: token.colorError,
      ...genStatus({
        hover: {
          color: token.colorErrorHover,
        },
        active: {
          color: token.colorErrorActive,
        },
        disabled: {
          cursor: "not-allowed",
          color: token.colorTextDisabled,
          boxShadow: "none",
        },
      }),
    },
  };
};

export const buttonDefaultCss: GenStyle<ButtonToken> = (token) => {
  return {
    [`&.${token.componentCls}-default`]: {
      background: token.defaultBg,
      borderColor: token.defaultBorderColor,
      color: token.defaultColor,
      boxShadow: token.defaultShadow,

      ...genStatus({
        hover: {
          color: token.defaultHoverColor,
          borderColor: token.defaultHoverBorderColor,
          background: token.defaultHoverBg,
        },
        active: {
          color: token.defaultActiveColor,
          borderColor: token.defaultActiveBorderColor,
          background: token.defaultActiveBg,
        },
        disabled: {
          cursor: "not-allowed",
          borderColor: token.borderColorDisabled,
          color: token.colorTextDisabled,
          background: token.colorBgContainerDisabled,
          boxShadow: "none",
        },
      }),
    },
    [`&.${token.componentCls}-default.${token.componentCls}-drangrous`]: {
      color: token.colorError,
      borderColor: token.colorError,
      ...genStatus({
        hover: {
          color: token.colorErrorHover,
          borderColor: token.colorErrorBorderHover,
        },
        active: {
          color: token.colorErrorActive,
          borderColor: token.colorErrorActive,
        },
        disabled: {
          cursor: "not-allowed",
          borderColor: token.borderColorDisabled,
          color: token.colorTextDisabled,
          background: token.colorBgContainerDisabled,
          boxShadow: "none",
        },
      }),
    },
  };
};

const resetButton = (): Properties => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  outline: "none",
  appearance: "none",
  userSelect: "none",
  cursor: "pointer",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  boxSizing: "border-box",
  background: "transparent",
  touchAction: 'manipulation',
  margin: 0,
});

export const buttonCss = () => {
  return genStyle(
    "btn",
    (token) => {
      return css({
        ...resetButton(),
        ...buttonDefaultCss(token),
        ...buttonPrimaryCss(token),
        ...buttonTextCss(token),
        ...buttonLinkCss(token),
        color: token.colorText,
        transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
        border: `${(token.lineWidth)}px ${token.lineType} transparent`,
        height: token.controlHeight + "px",
        fontSize: token.contentFontSize + "px",
        lineHeight: token.contentLineHeight,
        borderRadius: token.borderRadiusSM + 'px',
        "&[data-size=small]": genSizeSmallButton(token),
        "&[data-size=large]": genSizeLargeButton(token),
        [`&+.${token.componentCls}`]: {
          marginLeft: "12px",
        },
        [`&.${token.componentCls}-round`]: {
          borderRadius: "99px",
        },
        [`&.${token.componentCls}-circle`]: {
          padding: 0,
          borderRadius: "50%",
          aspectRatio: "1/1",
        },
      });
    },
    prepareComponentToken
  );
};
