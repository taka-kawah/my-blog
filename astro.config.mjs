import { defineConfig } from "astro/config";
import react from "@astrojs/react"
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
/** @type {import("astro").AstroUserConfig} */
const config = defineConfig({
    integrations: [react()],
    vite: {
        plugins: [tailwind()]
    }
})

export default config