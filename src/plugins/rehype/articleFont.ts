import { visit } from "unist-util-visit";
import type { Root } from "hast";

export default function articleFont() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "p") {
        return;
      }
      node.properties.class = ["font-manrope text-lg/8 tracking-wider"];
    });
  };
}
