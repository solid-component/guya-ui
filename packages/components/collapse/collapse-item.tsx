import * as collapsible from "@zag-js/collapsible";
import { normalizeProps, useMachine } from "@zag-js/solid";
import {
  JSX,
  createEffect,
  createMemo,
  createSignal,
  createUniqueId,
  on,
} from "solid-js";
import { css, keyframes } from "solid-styled-components";

const expand = keyframes(`
from {
  height: 0;
}
to {
  height: var(--height);
}
`);

const collapse = keyframes(`
from {
  height: var(--height);
}
to {
  height: 0;
}
`);

export type CollapseItemProps = {
  open?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  onOpenChange?: (details: collapsible.OpenChangeDetails) => void;
  onExitComplete?: () => void;
  children?: JSX.Element;
};

export const CollapseItem = (props: CollapseItemProps) => {
  const id = createUniqueId();
  const machine = collapsible.machine({
    open: props.defaultOpen,
    id,
    onOpenChange: props.onOpenChange,
    onExitComplete: props.onExitComplete,
  });
  const [state, send] = useMachine(machine);
  const api = createMemo(() => {
    return collapsible.connect(
      { ...state, context: { ...state.context, disabled: props.disabled } },
      send,
      normalizeProps
    );
  });
  createEffect(
    on([() => props.open], () => {
      if ("open" in props) {
        props.open ? api().open() : api().close();
      }
    })
  );
  return (
    <div
      {...api().rootProps}
      class={css({
        '[data-scope="collapsible"][data-part="content"]': {
          overflow: "hidden",
        },
        '[data-scope="collapsible"][data-part="content"][data-state="open"]': {
          animation: `${expand} 110ms cubic-bezier(0, 0, 0.38, 0.9)`,
        },
        '[data-scope="collapsible"][data-part="content"][data-state="closed"]':
          {
            animation: `${collapse} 110ms cubic-bezier(0, 0, 0.38, 0.9)`,
          },
      })}
    >
      <div {...api().contentProps}>{props.children}</div>
    </div>
  );
};
