import db from '@astrojs/db';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind()],
  output: "server"
});