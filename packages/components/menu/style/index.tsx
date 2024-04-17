import { css, styled } from "solid-styled-components";

export const SMenu = css(() => ({
  ".menu-item": {
    borderRadius: '4px',
  },
  ".menu-item-header": {
    padding: '8px',
    transition: 'all .15s',
    "&:hover": {
        background: '#d9ecff',
        color: "#409EFF",
    }
  }
}));
