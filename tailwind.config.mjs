const colors = require("tailwindcss/colors");

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
  plugins: [],
}
