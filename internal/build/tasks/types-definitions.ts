import path from "path";
import {
  buildOutput,
  huRoot,
  pkgRoot,
  projRoot,
} from "../../build-utils/src/paths";
import { CompilerOptions, Project, SourceFile } from "ts-morph";
import { mkdir, readFile, writeFile } from "fs/promises";
import { excludeFiles } from "../../build-utils/src/pkg";
import { glob } from "fast-glob";
import consola from 'consola'
import chalk from 'chalk'

const TSCONFIG_PATH = path.resolve(projRoot, "tsconfig.web.json");
const outDir = path.resolve(buildOutput, "types");

async function addSourceFiles(project: Project) {
  //   project.addSourceFileAtPath(path.resolve(projRoot, "typings/env.d.ts"));

  const globSourceFile = '**/*.{js?(x),ts?(x)}';
  const filePaths = excludeFiles(
    await glob([globSourceFile, "!happy-ui/**/*"], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  );
  const epPaths = excludeFiles(
    await glob(globSourceFile, {
      cwd: huRoot,
      onlyFiles: true,
    })
  );
  const sourceFiles: SourceFile[] = [];
  await Promise.all([
    ...filePaths.map(async (file) => {
      if (file.endsWith(".tsx")) {
        const content = await readFile(file, "utf-8");
        const sourceFile = project.addSourceFileAtPath(file);
        sourceFiles.push(sourceFile);
      }
    }),
    ...epPaths.map(async (file) => {
      const content = await readFile(path.resolve(huRoot, file), "utf-8");
      sourceFiles.push(
        project.createSourceFile(path.resolve(pkgRoot, file), content)
      );
    }),
  ]);

  return sourceFiles;
}

function typeCheck(project: Project) {
    const diagnostics = project.getPreEmitDiagnostics()
    if (diagnostics.length > 0) {
      consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
      const err = new Error('Failed to generate dts.')
      consola.error(err)
    //   throw err
    }
  }

export const generateTypesDefinitions = async () => {
  const compilerOptions: CompilerOptions = {
    emitDeclarationOnly: true,
    outDir,
    baseUrl: projRoot,
    preserveSymlinks: true,
    skipLibCheck: true,
    noImplicitAny: false,
  };
  const project = new Project({
    compilerOptions,
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true,
  });
  const sourceFiles = await addSourceFiles(project);
  consola.success('Added source files')

  typeCheck(project)
  consola.success('Type check passed!')

  await project.emit({
    emitOnlyDtsFiles: true,
  })

  const tasks = sourceFiles.map(async (sourceFile) => {
    const relativePath = path.relative(pkgRoot, sourceFile.getFilePath())
    consola.trace(
      chalk.yellow(
        `Generating definition for file: ${chalk.bold(relativePath)}`
      )
    )

    const emitOutput = sourceFile.getEmitOutput()
    const emitFiles = emitOutput.getOutputFiles()
    if (emitFiles.length === 0) {
      throw new Error(`Emit no file: ${chalk.bold(relativePath)}`)
    }

    const subTasks = emitFiles.map(async (outputFile) => {
      const filepath = outputFile.getFilePath()
      await mkdir(path.dirname(filepath), {
        recursive: true,
      })

      await writeFile(
        filepath,
        outputFile.getText(),
        // pathRewriter('esm')(outputFile.getText()),
        'utf8'
      )

      consola.success(
        chalk.green(
          `Definition for file: ${chalk.bold(relativePath)} generated`
        )
      )
    })

    await Promise.all(subTasks)
  })

  await Promise.all(tasks)
};
