import { PopupProps } from "../drawer/popup";
import { css } from "solid-styled-components";
import { ModalProps } from ".";

export const useStyle = (props: ModalProps) => {
  const panelCss = () =>
    css({
      position: "absolute",
      inset: 0,
      overflow: "auto",
      "&.is-centered": {
        textAlign: "center",
        "&:before": {
          display: "inline-block",
          content: `''`,
          height: "100%",
          verticalAlign: "middle",
        },
        ".happy-modal": {
          top: 0,
          margin: 0,
          display: "inline-block",
          verticalAlign: "middle",
        },
      },
      ".happy-modal": {
        position: "relative",
        background: "#fff",
        "pointer-events": "auto",
        "border-radius": "2px",
        top: "100px",
        // top: "50%",
        // transform: "translateY(-50%)",
        padding: "16px",
        margin: "0 auto",
        width: "300px",
        textAlign: "start",
        "margin-bottom": "24px",
        "box-shadow":
          "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
      },
    });
  const enterActiveClass = css({
    transition: "all .1s",
  });
  const enterClass = css({
    scale: 0.7,
    opacity: 0,
  });
  const enterToClass = css({
    scale: 1,
    opacity: 1,
  });

  const panelTransition: PopupProps["panelTransition"] = () => {
    return {
      enterActiveClass,
      enterClass,
      enterToClass,
      exitActiveClass: enterActiveClass,
      exitClass: enterToClass,
      exitToClass: enterClass,
    };
  };
  return {
    panelCss,
    panelTransition,
  };
};
