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
                }
            })
        })
    ]
}

export default config