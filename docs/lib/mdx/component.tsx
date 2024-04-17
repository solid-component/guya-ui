import { visit } from "unist-util-visit";
import fs from "fs";
import path from "path";
import { u } from "unist-builder";

export default function rehypeComponent() {
  return function (tree) {
    visit(tree, (node) => {
      if (node.name === "ComponentPreview") {
        node.children?.push(
          u("element", {
            tagName: "ComponentSource",
            attributes: node.attributes,
            // properties: {
            //   name: node.
            // },
            children: [],
          })
        );
      }
      if (node.tagName === "ComponentSource") {
        const component = node.attributes.find((item) => item.name === "name")
          ?.value as string;
        const demo = node.attributes.find((item) => item.name === "demo")
          ?.value as string;
        const filePath = path.join(
          process.cwd(),
          "demos",
          component + "/" + demo + ".tsx"
        );
        let source = fs.readFileSync(filePath, "utf-8");
        node.children?.push(
          u("element", {
            tagName: "pre",
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"],
                },
                children: [
                  {
                    type: "text",
                    value: source,
                  },
                ],
              }),
            ],
          })
        );
      }
    });
  };
}
