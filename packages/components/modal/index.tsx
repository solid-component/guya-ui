import { JSX, Match, Switch, mergeProps, splitProps } from "solid-js";
import { Contain, ContainProps } from "../drawer";
import { Popup, PopupProps } from "../drawer/popup";
import { useStyle } from "./useStyle";
import { Header } from "./header";
import { Button } from "../button";
import { css } from "solid-styled-components";
import { DOMElement } from "solid-js/jsx-runtime";

interface EventHandler<T, E extends Event> {
  (
    e: E & {
      currentTarget: T;
      target: DOMElement;
    }
  ): void;
}

export type ModalProps = ContainProps & {
  title?: JSX.Element;
  closeIcon?: JSX.Element;
  closable?: boolean;
  width?: string;
  maskClosable?: boolean;
  onClose?: EventHandler<HTMLElement, MouseEvent>;
  centered?: boolean;
  footer?: JSX.Element;
} & Omit<PopupProps, "panelTransition" | "panelStyle" | "class" | "classList">;

export const Modal = (props: ModalProps) => {
  const [local, other] = splitProps(props, ["children", "maskClosable"]);
  const merged = mergeProps(
    { appendToBody: true, mask: true, closable: true, maskClosable: true },
    props
  );
  const { panelTransition, panelCss } = useStyle(props);
  let ref: HTMLDivElement | undefined = undefined;
  return (
    <Contain
      {...merged}
      popup={
        <Popup
          destroyOnClose
          onClick={(e) => {
            if (
              ref &&
              !(e.target === ref || ref.contains(e.target)) &&
              merged.maskClosable
            ) {
              props.onClose?.(e);
            }
          }}
          {...merged}
          panelTransition={panelTransition}
        >
          <div
            class={panelCss()}
            classList={{
              ["happy-modal-wrap"]: true,
              ["is-centered"]: props.centered,
            }}
          >
            <div ref={ref} class="happy-modal">
              <Header {...props} />
              <div
                class={css({
                  fontSize: "14px",
                  wordBreak: "break-word",
                })}
              >
                {local.children}
              </div>
              <Switch
                fallback={
                  <footer
                    class={css({
                      paddingTop: "16px",
                      textAlign: "right",
                      gap: "12px",
                      "button+button": {
                        marginLeft: "12px",
                      },
                    })}
                  >
                    <Button onClick={other.onClose}>取消</Button>
                    <Button type="primary">确认</Button>
                  </footer>
                }
              >
                <Match when={props.footer}>{props.footer}</Match>
                <Match when={props.footer === null}>
                  <></>
                </Match>
              </Switch>
            </div>
          </div>
        </Popup>
      }
    />
  );
};
