import path from "path";
import { ModuleFormat } from "rollup";
import { epOutput } from "../build-utils/src/paths";

export const modules = ["es", "cjs"] as const;
export type Module = (typeof modules)[number];

export interface BuildInfo {
  module: "ESNext" | "CommonJS";
  format: Module;
  ext: "mjs" | "cjs" | "js";
  output: {
    /** e.g: `es` */
    name: string;
    /** e.g: `dist/element-plus/es` */
    path: string;
  };

  bundle: {
    /** e.g: `element-plus/es` */
    path: string;
  };
}

export const PKG_NAME = "happy-ui";

export const buildConfig: Record<Module, BuildInfo> = {
  es: {
    module: "ESNext",
    format: "es",
    ext: "js",
    output: {
      name: "es",
      path: path.resolve(epOutput, "es"),
    },
    bundle: {
      path: `${PKG_NAME}/es`,
    },
  },
  cjs: {
    module: "CommonJS",
    format: "cjs",
    ext: "cjs",
    output: {
      name: "lib",
      path: path.resolve(epOutput, "lib"),
    },
    bundle: {
      path: `${PKG_NAME}/lib`,
    },
  },
};

export const buildConfigEntries = Object.entries(
  buildConfig
) as BuildConfigEntries;

export type BuildConfig = typeof buildConfig;
export type BuildConfigEntries = [Module, BuildInfo][];

export const target = "es2018";
