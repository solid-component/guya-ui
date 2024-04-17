import { toArray } from "happy-utils";
import { CollapseProvider, useCollapseContext } from "./context";
import { JSX, ParentProps, createEffect, createSignal } from "solid-js";
import { SCollapse } from "./style";
import { CollapseItem, CollapseItemProps } from "./collapse-item";
import { ArrowRight, Close, Right } from "solid-dada-icons";
import { css } from "solid-styled-components";

export type CollapseProps = {
  activeKey?: string | string[];
  defaultActiveKey?: string | string[];
  accordion?: boolean;
  onChange?: (keys: string[]) => void;
  class?: string;
  style?: JSX.CSSProperties;
};

const Panel = (
  props: CollapseItemProps & {
    label?: JSX.Element
    key: string;
  }
) => {
  const context = useCollapseContext();
  if (!("key" in props)) {
    console.warn("panel key is empty");
  }
  const [open, setOpen] = createSignal(false);

  const isOpened = () => {
    if (context) {
      return context.activeKeys().includes(props.key);
    }
    return open();
  };

  const handleOpen = () => {
    if (props.disabled) {
      return;
    }
    if (context) {
      context.onChange(props.key);
      return;
    }
    setOpen(!open());
  };

  return (
    <>
      <div
        onClick={handleOpen}
        class={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          background: "rgb(0 0 0 / 2%)",
          padding: "12px 16px",
          borderRadius: "4px",
        })}
      >
        <div>{props.label}</div>
        <div>
          <ArrowRight
            class={css({
              transition: "all .15s",
              transform: `rotate(${isOpened() ? "90deg" : "0deg"})`,
            })}
          />
        </div>
      </div>
      <CollapseItem open={isOpened()}>
        <div
          class={css({
            padding: "12px",
          })}
        >
          {props.children}
        </div>
      </CollapseItem>
    </>
  );
};

const Collapse = (props: ParentProps<CollapseProps>) => {
  const [activeKeys, setActiveKeys] = createSignal(
    toArray<string>(props.defaultActiveKey)
  );
  const isOpened = (key: string) => activeKeys().includes(key);
  return (
    <CollapseProvider
      value={{
        activeKeys,
        onChange: (key) => {
          let keys: string[] = [];
          if (props.accordion) {
            keys = isOpened(key) ? [] : [key];
          } else {
            keys = isOpened(key)
              ? activeKeys().filter((k) => k !== key)
              : activeKeys().concat(key);
          }
          if (!props.activeKey) {
            setActiveKeys(keys);
          }
          props.onChange?.(keys);
        },
      }}
    >
      {props.children}
    </CollapseProvider>
  );
};
Collapse.Panel = Panel

export { Collapse }
