import { css, CSSAttribute } from "solid-styled-components";
import { genStatus, genToken } from "../../theme/utils";
import { inputSize } from "./size";

export const inputDefault = (): CSSAttribute => {
  const token = genToken();
  return {
    height: "32px",
    borderRadius: "4px",
    color: "#606266",
    boxShadow: "rgb(220, 223, 230) 0px 0px 0px 1px inset",
    padding: "1px 11px",
    transition: ".2s cubic-bezier(.645, .045, .355, 1)",
    ...genStatus({
      hover: {
        boxShadow: "0 0 0 1px #c0c4cc inset",
      },
      focus: {
        boxShadow: `0 0 0 1px ${token.primary.brand} inset`,
      },
      disabled: {
        color: "#a8abb2",
        background: "#f5f7fa",
        boxShadow: "0 0 0 1px #e4e7ed inset",
      },
    }),
  };
};

export const inputCss = () => {
  return css({
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
    },
    ...inputDefault(),
    ...inputSize()
  });
};
