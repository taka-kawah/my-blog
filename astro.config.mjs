import { defineConfig } from "astro/config";
import react from "@astrojs/react"
import tailwind from "@tailwindcss/vite";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from "@astrojs/mdx";
import remarkEmbedder from "@remark-embedder/core";
import { YoutubeTransformer } from "./src/plugins/youtube.ts";

// https://astro.build/config
/** @type {import("astro").AstroUserConfig} */
const config = defineConfig({
    integrations: [react(), mdx()],
    vite: {
        plugins: [tailwind()]
    },
    markdown: {
        remarkPlugins: [
            remarkMath, 
            [remarkEmbedder.default, {transformers: [YoutubeTransformer]}]
        ],
        rehypePlugins: [rehypeKatex]
    }
})

export default config