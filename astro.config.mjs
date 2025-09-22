import { defineConfig } from "astro/config";
import react from "@astrojs/react"

// https://astro.build/config
/** @type {import("astro").AstroUserConfig} */
const config = defineConfig({
    integrations: [react()]
})

export default config