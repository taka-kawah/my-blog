import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
const config = {
    plugins: [
        plugin(({addUtilities}) => {
            addUtilities({
                ".font-m-plus-rounded": {
                    "font-family": "\"M PLUS Rounded 1c\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial"
                },
                ".font-dela-gothic-one": {
                    "font-family": "\"Dela Gothic One\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial"
                },
                ".font-hachi-maru-pop": {
                    "font-family": "\"Hachi Maru Pop\", cursive, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial"
                },
                ".font-reggae-one": {
                    "font-family": "\"Reggae One\", system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial"
                },
                ".font-zen-maru-gothic": {
                    "font-family": "\"Zen Maru Gothic\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial"
                },
                ".font-potta-one": {
                    "font-family": "\"Potta One\", system-ui, -apple-system, \"Segoe UI\", \"Helvetica Neue\", Arial"
                },
                ".link-box": {
                    "position": "relative"
                },
                ".link-box-href": {
                    "position": "relative",
                    "top": 0,
                    "left": 0,
                    "width": "100%",
                    "height": "100%",
                    "text-decoration": "none",
                    "color": "inherit",
                    "background-color": "rgba(0, 0, 0, 0.1)"
                },
                ".no-decorate": {
                    "text-decoration": "none",
                    "color": "inherit"
                }
            })
        })
    ]
}

export default config