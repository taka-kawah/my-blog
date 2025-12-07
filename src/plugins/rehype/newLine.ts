import type { ElementContent, Root } from "hast";
import { visit } from "unist-util-visit";

export default function newLine() {
  return (tree: Root) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "p") return "skip";

      const newChildren: ElementContent[] = [];
      for (const child of node.children) {
        if (child.type !== "text") {
          newChildren.push(child);
          continue;
        }
        const lines = child.value.replace("\r", "").split("\n");
        for (const [i, line] of lines.entries()) {
          newChildren.push({
            type: "text",
            value: line,
          });
          if (i < lines.length - 1) {
            newChildren.push({
              type: "element",
              tagName: "br",
              properties: {},
              children: [],
            });
          }
        }
      }
      if (parent && index) {
        parent.children[index] = {
          type: node.type,
          tagName: node.tagName,
          properties: node.properties,
          children: newChildren,
        };
      }
      return "skip";
    });
  };
}
