import { useTheme } from "solid-styled-components";
import { token } from ".";
import { GenSize, GenStatus, GenToken } from "./types";

export const genStatus: GenStatus = (status) => {
  return {
    [`&:not([disabled]):not(.is-disabled):hover`]: {
      ...status.hover,
    },
    "&:not([disabled]):not(.is-disabled):active": {
      ...status.active,
    },
    "&:not([disabled]):not(.is-disabled).is-focus": {
      ...status.focus,
    },
    "&[disabled], &.is-disabled": {
      cursor: "not-allowed",
      ...status.disabled,
    },
  };
};

export const genSize: GenSize = (prefix, size) => {
  return {
    [`&.${prefix}-large`]: {
      ...size.large,
    },
    [`&.${prefix}-small`]: {
      ...size.small,
    },
  };
};

export const genToken: GenToken = () => {
  const theme = useTheme();
  return theme?.token || token;
};

const prefix = "happy";

export const genPrefix = (className: string) => `${prefix}-${className}`;
export const genPrefixClasses = (classes: string | Record<string, boolean>) => {
  if (typeof classes === "string") {
    return {
      [genPrefix(classes)]: true,
    };
  }
  return Object.entries(classes).reduce((classStr, [className, value]) => {
    classStr[genPrefix(className)] = value
    return classStr;
  }, {});
};
