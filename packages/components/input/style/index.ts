import { css, CSSAttribute } from "solid-styled-components";
import { genStatus } from "../../theme/utils";
import { genStyle } from "../../theme";
import { inputToken, InputToken } from "./token";
import { GenStyle } from "../../theme/types";

export const inputDefault: GenStyle<InputToken> = (token): CSSAttribute => {
  return {
    height: token.controlHeight + "px",
    borderRadius: token.borderRadius + "px",
    color: token.colorText,
    // boxShadow: "rgb(220, 223, 230) 0px 0px 0px 1px inset",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: token.colorBorder,
    padding: `${token.paddingBlock}px ${token.paddingInline}px`,
    transition: `all ${token.motionDurationMid}`,
    // Firefox
    "&::-moz-placeholder": {
      opacity: 1,
    },
    "&::placeholder": {
      color: token.colorTextPlaceholder,
      userSelect: "none", // https://github.com/ant-design/ant-design/pull/32639
    },
    "&:placeholder-shown": {
      textOverflow: "ellipsis",
    },
    ...genStatus({
      hover: {
        // boxShadow: "0 0 0 1px #c0c4cc inset",
        borderColor: token.colorPrimaryHover,
      },
      focus: {
        // boxShadow: `0 0 0 1px ${token.primary.brand} inset`,
        borderColor: token.colorPrimaryHover,
      },
      disabled: {
        color: token.colorTextDisabled,
        background: token.colorFillTertiary,
      },
    }),
  };
};

const resetInput: GenStyle<{}> = (token) => ({
  width: "100%",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  cursor: "text",
  input: {
    height: "100%",
    flexGrow: 1,
    color: "inherit",
    outline: "none",
    border: "none",
    padding: "0",
    background: "transparent",
    fontSize: token.fontSize + "px",
  },
});

export const inputCss = () => {
  return genStyle(
    "input",
    (token) =>
      css({
        ...resetInput(token),
        ...inputDefault(token),
        height: token.controlHeight + "px",
        paddingInline: token.paddingInline + "px",
        paddingBlock: token.paddingBlock + "px",
        [`&.${token.componentCls}-large`]: {
          borderRadius: token.borderRadiusLG + "px",
          fontSize: token.fontSizeLG + "px",
          paddingInline: token.paddingInlineLG + "px",
          paddingBlock: token.paddingBlockLG + "px",
          input: {
            fontSize: token.fontSizeLG + "px",
            height: token.controlHeightLG + "px",
          },
        },
        [`&.${token.componentCls}-small`]: {
          borderRadius: token.borderRadiusSM + "px",
          fontSize: token.fontSizeSM + "px",
          height: token.controlHeightSM + "px",
          paddingInline: token.paddingInlineSM + "px",
          paddingBlock: token.paddingBlockSM + "px",
          input: {
            fontSize: token.fontSizeSM + "px",
            height: token.controlHeightLG + "px",
          },
        },
      }),
    inputToken
  );
};
