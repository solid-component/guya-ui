import { styled } from "solid-styled-components";

export const SHeader = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
}));

export const SCollapseItem = styled("div")(() => ({
  "&.collapse-item": {
    background: "rgb(0 0 0 / 2%)",
  },
  "&.collapse-item:first-child": {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  },
  "&.collapse-item:last-child": {
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
  },
}));

export const SCollapse = styled("div")(() => ({}));
