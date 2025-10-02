import { defineConfig } from "astro/config";
import react from "@astrojs/react"
import tailwind from "@tailwindcss/vite";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
/** @type {import("astro").AstroUserConfig} */
const config = defineConfig({
    integrations: [react()],
    vite: {
        plugins: [tailwind()]
    },
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    }
})

export default config