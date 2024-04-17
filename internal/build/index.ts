import { OutputOptions, rollup } from "rollup";
import { build } from "vite";
import { compRoot, epRoot, pkgRoot } from "../build-utils/src/paths";
import solid from "vite-plugin-solid";
import { generateExternal } from "./rollup";
import { buildConfigEntries } from "./build-info";
import glob from "fast-glob";
import { excludeFiles } from "../build-utils/src/pkg";

async function buildModule() {
  const input = excludeFiles(
    await glob("**/*.{js,ts,tsx}", {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  );
  // const res = await generateExternal({ full: false })
  buildConfigEntries.map(async ([module, config]) => {
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
            preserveModulesRoot: epRoot,
            sourcemap: true,
            entryFileNames: `[name].${config.ext}`,
          },
          external: await generateExternal({ full: false }),
          treeshake: false,
        },
      },
    });
  });
  // await writeBundles(
  //   bundle,
  //   buildConfigEntries.map(([module, config]): OutputOptions => {
  //     console.log("module", module);
  //     console.log("config", config);
  //     return {
  //       format: config.format,
  //       dir: config.output.path,
  //       exports: module === "cjs" ? "named" : undefined,
  //       preserveModules: true,
  //       preserveModulesRoot: epRoot,
  //       sourcemap: true,
  //       entryFileNames: `[name].${config.ext}`,
  //     };
  //   })
  // );
}
buildModule();
