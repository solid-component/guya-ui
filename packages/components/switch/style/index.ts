import { Accessor } from "solid-js";
import { css } from "solid-styled-components";
import { genStyle } from "../../theme";
import { AliasToken } from "../../theme/interface";
import { TinyColor } from "@ctrl/tinycolor";
import { switchToken } from "./token";

export const prepareComponentToken = (token: AliasToken) => {
  const { fontSize, lineHeight, controlHeight, colorWhite } = token;

  const height = fontSize * lineHeight;
  const heightSM = controlHeight / 2;
  const padding = 2; // Fixed value
  const handleSize = height - padding * 2;
  const handleSizeSM = heightSM - padding * 2;

  return {
    trackHeight: height,
    trackHeightSM: heightSM,
    trackMinWidth: handleSize * 2 + padding * 4,
    trackMinWidthSM: handleSizeSM * 2 + padding * 2,
    trackPadding: padding, // Fixed value
    handleBg: colorWhite,
    handleSize,
    handleSizeSM,
    handleShadow: `0 2px 4px 0 ${new TinyColor("#00230b")
      .setAlpha(0.2)
      .toRgbString()}`,
    innerMinMargin: handleSize / 2,
    innerMaxMargin: handleSize + padding + padding * 2,
    innerMinMarginSM: handleSizeSM / 2,
    innerMaxMarginSM: handleSizeSM + padding + padding * 2,
  };
};

const switchSizeCss = (
  width: number,
  switchToken: {
    height: number;
    handleSize: number;
    trackPadding: number;
    trackMinWidth: number;
    innerMinMargin: number;
    innerMaxMargin: number;
    fontSizeIcon: number;
  },
  textWidth = 0,
  size: "small" | "default"
) => {
  return {
    [`&[data-scope=switch][controll-size=${size}]`]: {
      minWidth: switchToken.trackMinWidth + "px",
      height: switchToken.height + "px",
      lineHeight: switchToken.height + "px",
      "[aria-label=loading]": {
        width: switchToken.fontSizeIcon + "px",
        height: switchToken.fontSizeIcon + "px",
      },
      "[data-scope=switch][data-part=control]": {
        minWidth: switchToken.trackMinWidth + "px",
        height: switchToken.height + "px",
        lineHeight: switchToken.height + "px",
      },
      "[data-part=thumb]": {
        width: switchToken.handleSize + "px",
        height: switchToken.handleSize + "px",
      },
      "[data-inner]": {
        display: "block",
        overflow: "hidden",
        height: "100%",
        transition: "padding .2s",
        "padding-inline": `${
          switchToken.innerMaxMargin
          //   switchToken.trackPadding * 2 + switchToken.handleSize
        }px ${switchToken.innerMinMargin}px`,
        "border-radius": "100px",
        color: "#fff",
      },
      "[data-part=thumb][data-state=checked]": {
        transform: `translateX(${
          width - switchToken.handleSize - switchToken.trackPadding * 2
        }px)`,
      },
      "[data-text=checked]": {
        display: "flex",
        height: "100%",
        transition: "margin-left .2s, margin-right .2s",
        marginLeft: `calc(-100% - ${
          switchToken.handleSize +
          switchToken.trackPadding +
          2 +
          switchToken.innerMinMargin
        }px)`,
        marginRight: `calc(100% + ${
          switchToken.handleSize +
          switchToken.trackPadding +
          2 +
          switchToken.innerMinMargin
        }px)`,
      },
      "[data-text=unchecked]": {
        display: "flex",
        height: "100%",
        transition: "margin-left .2s, margin-right .2s",
        "margin-top": -switchToken.height + "px",
        "margin-left": 0,
        "margin-right": 0,
      },
    },
    [`&[data-scope=switch][controll-size=${size}][data-state=checked]`]: {
      "[data-inner]": {
        "padding-inline": `${switchToken.innerMinMargin}px ${switchToken.innerMaxMargin}px`,
      },
      "[data-text=checked]": {
        "margin-left": 0,
        marginRight: 0,
      },
      "[data-text=unchecked]": {
        marginRight:
          -(textWidth + switchToken.handleSize + switchToken.trackPadding * 2) +
          "px",
        marginLeft:
          textWidth +
          switchToken.handleSize +
          switchToken.trackPadding * 2 +
          "px",
      },
    },
  };
};

export const switchCss = (
  rootRect: Accessor<{
    width: number;
    height: number;
  }>,
  textWidth = 0
) => {
  return genStyle(
    "switch",
    (token) => {
      const switchToken = prepareComponentToken(token);
      return css({
        display: "inline-flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        gap: "0.75rem",
        verticalAlign: "middle",
        fontSize: "12px",
        "&[data-state=checked][data-disabled]": {
          "[aria-label=loading]": {
            color: token.colorPrimary,
            opacity: token.opacityLoading,
          },
        },
        "&[data-disabled]": {
          cursor: "not-allowed",
          "[aria-label=loading]": {
            color: `rgba(0, 0, 0, ${token.opacityLoading})`,
            opacity: token.opacityLoading,
          },
        },
        "&:not([data-disabled])": {
          "[data-scope=switch][data-part=control]": {
            "&:hover": {
              background: token.colorTextTertiary,
            },
          },
          "[data-scope=switch][data-part=control][data-state=checked]": {
            "&:hover": {
              background: token.colorPrimaryHover,
            },
          },
        },
        "[data-scope=switch][data-part=control]": {
          display: "inline-flex",
          flexShrink: 0,
          position: "relative",
          "justify-content": "flex-start",
          "box-sizing": "content-box",
          "border-radius": "9999px",
          minWidth: "2.7rem",
          height: switchToken.trackHeight + "px",
          "transition-property":
            "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
          "transition-duration": ".2s",
          background: token.colorTextQuaternary,
          boxPack: "start",
          overflow: "hidden",
        },
        "[data-scope=switch][data-part=control][data-state=checked]": {
          background: token.colorPrimary,
        },
        "[data-scope=switch][data-part=thumb]": {
          background: "#fff",
          "transition-property": "transform",
          "transition-duration": ".2s",
          "border-radius": "inherit",
          width: `${switchToken.handleSize}px`,
          height: `${switchToken.handleSize}px`,
          top: switchToken.trackPadding + "px",
          left: switchToken.trackPadding + "px",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ...switchSizeCss(
          rootRect().width,
          {
            trackMinWidth: switchToken.trackMinWidth,
            height: switchToken.trackHeight,
            handleSize: switchToken.handleSize,
            trackPadding: switchToken.trackPadding,
            innerMinMargin: switchToken.innerMinMargin,
            innerMaxMargin: switchToken.innerMaxMargin,
            fontSizeIcon: switchToken.handleSize - switchToken.trackPadding,
          },
          textWidth,
          "default"
        ),
        "[aria-label=loading]": {
          color: token.colorPrimary,
        },

        ...switchSizeCss(
          rootRect().width,
          {
            trackMinWidth: switchToken.trackMinWidthSM,
            height: switchToken.trackHeightSM,
            handleSize: switchToken.handleSizeSM,
            trackPadding: switchToken.trackPadding,
            innerMinMargin: switchToken.innerMinMarginSM,
            innerMaxMargin: switchToken.innerMaxMarginSM,
            fontSizeIcon: switchToken.handleSizeSM - switchToken.trackPadding,
          },
          textWidth,
          "small"
        ),
      });
    },
    switchToken
  );
};
