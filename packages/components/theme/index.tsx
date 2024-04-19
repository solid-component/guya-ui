import {
  Token,
  DesignTokenProviderProps,
} from "solid-styled-components";
import defaultDerivative from "./themes/default";
import defaultSeedToken from "./themes/seed";
import {
  AliasToken,
  DerivativeFunc,
  MapToken,
  SeedToken,
  TokenType,
} from "./interface";
// import seedToken from './themes/seed';
import { createStore } from "solid-js/store";
import {
  createContext,
  mergeProps,
  useContext,
} from "solid-js";
import formatToken from "./util/alias";

const createTheme = <
  DesignToken extends TokenType,
  DerivativeToken extends TokenType
>(
  derivatives:
    | DerivativeFunc<DesignToken, DerivativeToken>[]
    | DerivativeFunc<DesignToken, DerivativeToken>
) => {
  return Array.isArray(derivatives) ? derivatives : [derivatives];
};

export const defaultTheme = createTheme(defaultDerivative);

export type Theme<
  DesignToken extends TokenType,
  DerivativeToken extends TokenType
> = DerivativeFunc<DesignToken, DerivativeToken>;

// console.log("dd", defaultTheme);

export const defaultConfig = {
  seedToken: defaultSeedToken,
  prefixCls: "h",
  // override: { override: defaultSeedToken },
};

export const token: Token = {
  success: {
    brand: "#67c23a",
    dark2: "#529b2e",
    light3: "#95d475",
    light7: "#d1edc4",
    light9: "#f0f9eb",
  },
  error: {
    brand: "#f56c6c",
    dark2: "#c45656",
    light3: "#f89898",
    light7: "#fcd3d3",
    light9: "#fef0f0",
  },
  primary: {
    brand: "#409eff",
    dark2: "#337ecc",
    light3: "#79bbff",
    light7: "#c6e2ff",
    light9: "#ecf5ff",
  },
};

export const seedTokenStore = createStore({ ...defaultSeedToken });

export const DesignTokenContext =
  createContext<DesignTokenProviderProps>(defaultConfig);

const getSeedToken = () => {
  const config = useContext(DesignTokenContext);
  return config.seedToken as SeedToken;
};

const getPrefixCls = () => {
  const config = useContext(DesignTokenContext);
  return config.prefixCls || defaultConfig.prefixCls;
};

const getTheme = () => {
  const config = useContext(DesignTokenContext);
  return config || defaultConfig;
};

const getMapToken = () => {
  const mergedToken = getSeedToken();
  const mapToken = defaultTheme.reduce((mapToken, derivative) => {
    return {
      ...mergedToken,
      ...mapToken,
      ...derivative(mergedToken, mapToken),
    };
  }, {} as MapToken);
  return mapToken;
};

const getAliasToken = () => {
  return formatToken({ ...getMapToken(), override: {} });
};

const ThemeProvider = (props: {
  value: DesignTokenProviderProps;
  children?: any;
}) => {
  const seedToken = () => props.value.seedToken;
  const prefixCls = () => props.value.prefixCls || defaultConfig.prefixCls;
  const mergedSeedToken = () => mergeProps(defaultSeedToken, seedToken());
  return (
    <DesignTokenContext.Provider
      value={{
        ...props.value,
        seedToken: mergedSeedToken(),
        prefixCls: prefixCls(),
      }}
    >
      {props.children}
    </DesignTokenContext.Provider>
  );
};

export const genPrefixCls = (className: string) => {
  const prefixCls = getPrefixCls();
  return `${prefixCls}-${className}`;
};

export const genPrefixClasses = (
  classes: string | Record<string, boolean | undefined>
) => {
  if (typeof classes === "string") {
    return {
      [genPrefixCls(classes)]: true,
    };
  }
  return Object.entries(classes).reduce((classStr, [className, value]) => {
    classStr[genPrefixCls(className)] = value;
    return classStr;
  }, {});
};

function genStyle<T>(
  componentName: string,
  styleFn: (
    aliasToken: AliasToken & {
      componentCls: string;
    } & T
  ) => string,
  compoenentToken?: (aliasToken: AliasToken) => T
) {
  const aliasToken = getAliasToken();
  return styleFn({
    ...aliasToken,
    ...compoenentToken?.(aliasToken),
    componentCls: genPrefixCls(componentName),
  });
}

export { getMapToken, genStyle, getTheme, ThemeProvider, getAliasToken };
