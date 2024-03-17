const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.blue,
        secondary: colors.yellow,
        slate: {
          900: "#0d1117",
          800: "#161b22",
        },
      }
    },
  },
  plugins: [
    // thanks to: https://www.crocodile.dev/blog/css-transitions-with-tailwind-and-htmx 🙏
    plugin(function({ addVariant }) {
      addVariant('htmx-settling', ['&.htmx-settling', '.htmx-settling &'])
      addVariant('htmx-request', ['&.htmx-request', '.htmx-request &'])
      addVariant('htmx-swapping', ['&.htmx-swapping', '.htmx-swapping &'])
      addVariant('htmx-added', ['&.htmx-added', '.htmx-added &'])
    }),
  ],
}
