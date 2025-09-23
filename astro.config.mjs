import { defineConfig } from "astro/config";
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
/** @type {import("astro").AstroUserConfig} */
const config = defineConfig({
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()]
    }
})

export default config