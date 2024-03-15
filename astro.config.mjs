import db from '@astrojs/db';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind()],
  output: "server",
  adapter: netlify()
});