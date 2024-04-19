import path from "path";
import { copyFile } from "fs/promises";
import { huOutput, huPackage } from "../build-utils/src/paths";

import { build } from "vite";
import { compRoot, huRoot, pkgRoot } from "../build-utils/src/paths";
import solid from "vite-plugin-solid";
import { buildConfigEntries } from "./build-info";
import glob from "fast-glob";
import { excludeFiles } from "../build-utils/src/pkg";

export async function buildModule() {
  const input = excludeFiles(
    await glob("**/*.{js,ts,tsx}", {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  );
  // const res = await generateExternal({ full: false })
  const entries = buildConfigEntries.map(async ([module, config]) => {
    await build({
      plugins: [solid()],
      build: {
        lib: {
          entry: compRoot,
          formats: [module],
        },
        rollupOptions: {
          input,
          output: {
            format: config.format,
            dir: config.output.path,
            exports: module === "cjs" ? "named" : undefined,
            preserveModules: true,
            preserveModulesRoot: huRoot,
            sourcemap: true,
            entryFileNames: `[name].${config.ext}`,
          },
          // external: await generateExternal({ full: false }),
          treeshake: false,
        },
      },
    });
  });
  return Promise.all(entries)
}

export const copyFiles = () =>
  Promise.all([
    copyFile(huPackage, path.join(huOutput, "package.json")),
    //   copyFile(
    //     path.resolve(projRoot, 'README.md'),
    //     path.resolve(huOutput, 'README.md')
    //   ),
    //   copyFile(
    //     path.resolve(projRoot, 'global.d.ts'),
    //     path.resolve(huOutput, 'global.d.ts')
    //   ),
  ]);

