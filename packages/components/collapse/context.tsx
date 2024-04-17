import { Accessor, ParentProps, createContext, useContext } from "solid-js";

type CollapseContextValue = {
    activeKeys: Accessor<string[]>,
    onChange: (key: string) => void
}

export const CollapseContext = createContext<CollapseContextValue>();

export const useCollapseContext = () => {
  return useContext(CollapseContext);
};

export function CollapseProvider(
  props: ParentProps & {
    value: CollapseContextValue
  }
) {
  return (
    <CollapseContext.Provider value={props.value}>
      {props.children}
    </CollapseContext.Provider>
  );
}
