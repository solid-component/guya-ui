import { defineConfig, Plugin } from "vite";
import solid from "vite-plugin-solid";
import { CompileOptions } from "@mdx-js/mdx";
import path from "node:path";
import rehypeComponent from "./lib/mdx/component";
import rehypeShiki from "@shikijs/rehype";

type MdxExtensionOptions = { mdx?: boolean };

type MDXOptions = {
  extensions?: (string | [string, MdxExtensionOptions])[];
} & Partial<
  Pick<CompileOptions, "recmaPlugins" | "rehypePlugins" | "remarkPlugins">
>;

const mdx = (options: MDXOptions = {}): Plugin => {
  const MD_EXTENSIONS = [
    "md",
    "markdown",
    "mdown",
    "mkdn",
    "mkd",
    "mdwn",
    "mkdown",
    "ron",
  ];

  const MDX_EXTENSIONS = ["mdx"];
  const mdxExtensions =
    options.extensions
      ?.filter((extension) => typeof extension !== "string" && extension[1].mdx)
      .map((extension) => extension[0]) ?? MDX_EXTENSIONS;

  const mdExtensions =
    options.extensions
      ?.filter(
        (extension) => typeof extension === "string" || !extension[1].mdx
      )
      .map((extension) =>
        typeof extension === "string" ? extension : extension[0]
      ) ?? MD_EXTENSIONS;
  return {
    name: "mdx",
    enforce: "pre",
    async transform(source: string, id: string) {
      const extension = path.extname(id);
      if (
        ![...mdExtensions, ...mdxExtensions]
          .map((extension) => `.${extension}`)
          .includes(extension)
      ) {
        return null;
      }
      const compile = (await import("@mdx-js/mdx")).compile;
      const code = (
        await compile(source, {
          format: mdxExtensions.includes(extension)
            ? "mdx"
            : mdExtensions.includes(extension)
            ? "md"
            : "detect",
          jsx: true,
          jsxImportSource: "solid-js",
          providerImportSource: "solid-mdx",
          rehypePlugins: [
            rehypeComponent,
            [
              rehypeShiki,
              {
                themes: {
                  light: "vitesse-light",
                  dark: "vitesse-dark",
                },
              },
            ],
          ],
        })
      ).value.toString();
      return {
        code,
      };
    },
  };
};

export default defineConfig({
  plugins: [
    mdx(),
    solid({
      extensions: [".md", [".mdx", { typescript: true }]],
      // babel: {
      //   plugins: ["@babel/plugin-syntax-top-level-await"],
      // },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 将 @ 映射到项目的 src 目录
    },
  },
  build: { target: "esnext" },
});
