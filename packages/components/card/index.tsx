import { JSX } from "solid-js";
import { cardCss } from "./style";

export type CardProps = {
  style?: JSX.CSSProperties;
  children?: JSX.Element;
  bordered?: boolean
};

const Card = (props: CardProps) => {
  return (
    <div
      style={props.style}
      classList={{
        [cardCss()]: true,
        ["card-bordered"]: props.bordered,
      }}
    >
      <div
        class="card-t"
        classList={{
          ["card-body"]: true,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export { Card };
