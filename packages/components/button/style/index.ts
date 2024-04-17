import { CSSAttribute, css, useTheme } from "solid-styled-components";
import { genPrefix, genSize, genStatus, genToken } from "../../theme/utils";
import { buttonSize } from "./size";

export const buttonPrimaryCss = (): CSSAttribute => {
  const token = genToken();
  return {
    [`&.${genPrefix('btn-primary')}`]: {
      borderColor: token.primary.brand,
      backgroundColor: token.primary.brand,
      color: "#fff",
      ...genStatus({
        hover: {
          color: "#fff",
          borderColor: token.primary.light3,
          background: token.primary.light3,
        },
        active: {
          color: "#fff",
          borderColor: token.primary.dark2,
          background: token.primary.dark2,
        },
        disabled: {
          color: "#fff",
          background: "#a0cfff",
          borderColor: "#a0cfff",
        },
      }),
    },
  };
};

export const buttonDefaultCss = (): CSSAttribute => {
  const token = genToken();
  return {
    color: "#606266",
    background: "#fff",
    height: "32px",
    padding: "8px 15px",
    borderRadius: "4px",
    borderColor: "#dcdfe6",
    ...genStatus({
      hover: {
        color: token.primary.brand,
        borderColor: token.primary.light7,
        background: token.primary.light9,
      },
      active: {
        color: token.primary.brand,
        borderColor: token.primary.brand,
        background: token.primary.light9,
      },
      disabled: {
        color: "#a8abb2",
        background: "#ffffff",
        borderColor: "#e4e7ed",
      },
    }),
  };
};

export const buttonCss = () => {
  return css({
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
    padding: 0,
    margin: 0,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "transparent",
    transition: ".1s",
    ...buttonDefaultCss(),
    ...buttonPrimaryCss(),
    ...buttonSize(),
    [`&+.${genPrefix("btn")}`]: {
      marginLeft: "12px",
    },
    [`&.${genPrefix("btn-round")}`]: {
      borderRadius: "99px",
    },
    [`&.${genPrefix("btn-circle")}`]: {
      padding: 0,
      borderRadius: "50%",
      aspectRatio: "1/1",
    },
  });
};
