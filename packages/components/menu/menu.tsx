import classNames from "classnames";
import { JSX } from "solid-js";

export type ItemProps = {
  active?: boolean;
  children?: JSX.Element;
} & JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Item = (props: ItemProps) => {
  return (
    <a
      {...props}
      class={classNames(props.class)}
      classList={{
        active: props.active,
        ...props.classList,
      }}
    >
      {props.children}
    </a>
  );
};

export const Menu = () => {
  return (
    // <Collapse class={SMenu}>
    //   <CollapseItem key="ok" title={<span>标题</span>}>
    //     <div>23</div>
    //   </CollapseItem>
    {
      /* <CollapseItem key="ok1" title={<span>标题1</span>}>
        <Collapse class={SMenu}>
          <CollapseItem
            style={{
              "padding-inline": "20px",
            }}
            title={<div>sub menu</div>}
            key="ok1-1"
          >
            <div>23</div>
          </CollapseItem>
        </Collapse>
      </CollapseItem> */
    }
    // </Collapse>
  );
};
