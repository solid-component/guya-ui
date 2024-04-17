import { mergeProps } from "solid-js";
import { Contain, ContainProps } from "./contain";
import { Popup, PopupProps } from "./popup";
import { useStyle } from "./useStyle";
import Header from "./header";

export * from "./contain";

export type Placement = "left" | "top" | "right" | "bottom";

export type DrawerProps = ContainProps &
  Omit<PopupProps, "panelTransition" | "panelStyle" | "class" | "classList"> & {
    width?: string;
    height?: string;
    placement?: Placement;
  };

export const Drawer = (props: DrawerProps) => {
  const merged = mergeProps(
    {
      appendToBody: true,
      placement: "right" as Placement,
      closable: true,
      maskClosable: true,
    },
    props
  );
  const panel = useStyle(merged);
  let ref: HTMLDivElement | undefined = undefined;
  return (
    <Contain
      {...merged}
      popup={
        <Popup
          onClick={(e) => {
            if (
              ref &&
              !(e.target === ref || ref.contains(e.target)) &&
              merged.maskClosable
            ) {
              console.log('dianji')
              props.onClose?.(e);
            }
          }}
          {...merged}
          classList={{
            [`happy-drawer-${merged.placement}`]: true,
          }}
          panelTransition={panel.panelTransition}
        >
          <div
            ref={ref}
            class={panel.panelCss()}
            classList={{
              "happy-drawer": true,
            }}
          >
            <Header />
            {props.children}
          </div>
        </Popup>
      }
    />
  );
};
