import path from "path";
import { buildModule, copyFiles } from "./task";
import { buildOutput } from "../build-utils/src/paths";
import { copy } from "fs-extra";
import { buildConfig } from "./build-info";
import { generateTypesDefinitions } from "./tasks/types-definitions";

export const copyTypesDefinitions = async () => {
  const src = path.resolve(buildOutput, "types", "packages");
  console.log('src', src)
  const copyTypes = (module: "es" | "cjs") =>
    copy(src, buildConfig[module].output.path, { recursive: true });

  await copyTypes("es");
  await copyTypes("cjs");
};

const gennerate = async () => {
  await buildModule();
  await generateTypesDefinitions()
  await copyTypesDefinitions();
  await copyFiles();
};
gennerate();
