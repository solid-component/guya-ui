import { JSX } from "solid-js";
import { css } from "solid-styled-components";

export type TagProps = {
  type?: "primary";
  children?: JSX.Element;
};

export function Tag(props: TagProps) {
  return (
    <span
      class={css({
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        padding: '0 9px',
        borderRadius: '4px',
        [`&.happy-tag-primary`]: {
            background: '#ecf5ff',
            borderColor: '#d9ecff',
            color: '#409eff'
        }
      })}
      classList={{
        "happy-tag": true,
        [`happy-tag-${props.type}`]: !!props.type,
      }}
    >
      {props.children}
    </span>
  );
}
