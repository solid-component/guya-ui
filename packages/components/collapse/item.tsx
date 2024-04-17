import { ArrowRight } from "solid-dada-icons";
import { ContentTransition } from "../content-transition";
import { JSX, ParentProps, createEffect, createSignal } from "solid-js";
import { SCollapseItem, SHeader } from "./style";
import { useCollapseContext } from "./context";
import classNames from "classnames";
export type CollapseItemProps = {
  key: string;
  class?: string;
  style?: JSX.CSSProperties;
  title?: JSX.Element;
  defaultActive?: boolean;
};

export const CollapseItem = (props: ParentProps<CollapseItemProps>) => {
  const context = useCollapseContext();
  const [open, setOpen] = createSignal(props.defaultActive);

  const handleChange = () => {
    if (context) {
      context.onChange(props.key);
      return;
    }
    setOpen(!open());
  };

  createEffect(() => {
    if (context) {
      setOpen(context.activeKeys().includes(props.key));
    }
  });

  return (
    <SCollapseItem
      class={classNames("collapse-item", props.class)}
      style={props.style}
    >
      <SHeader
        class={classNames('collapse-item-header')}
        onClick={() => {
          handleChange();
        }}
      >
        <div>{props.title}</div>
        <div>
          <ArrowRight
            style={{
              transition: "all .15s",
              transform: `rotate(${open() ? "90deg" : "0deg"})`,
            }}
          />
        </div>
      </SHeader>
      <ContentTransition open={open()}>
        {props.children}
      </ContentTransition>
    </SCollapseItem>
  );
};
