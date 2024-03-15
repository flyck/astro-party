/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_qWz9nA0A.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import * as z from 'zod';
import { d as db, P as Parties } from './create_ClgShnOW.mjs';
import { eq } from '@astrojs/db/dist/runtime/config.js';

const $$Astro = createAstro();
const $$Update = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Update;
  const { request } = Astro2;
  const inputSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().max(100),
    location: z.string().max(100),
    date: z.string().max(100).transform((str) => new Date(str))
  });
  const url = new URL(request.headers.get("Hx-Current-Url") || "");
  const id = parseInt(url.searchParams.get("id") || "");
  if (!id) {
    return new Response(JSON.stringify({ message: "bad request" }), { status: 400 });
  }
  const data = await request.formData();
  let inputJson = {};
  data.forEach((value, key) => {
    inputJson[key] = value;
  });
  const parsedInput = inputSchema.safeParse(inputJson);
  console.log("Input correct: " + parsedInput.success);
  if (parsedInput.success) {
    const party = await db.update(Parties).set(
      { ...parsedInput.data }
    ).where(eq(Parties.id, id));
    console.log(party);
    return new Response(void 0, {
      status: 200
    });
  }
  function parseError() {
    return "Bad input";
  }
  return renderTemplate`${maybeRenderHead()}<div class="text-red-500">${parseError()}</div>`;
}, "/Users/felix.brilej/git/astro-party/src/pages/server/party/update.astro", void 0);

const $$file = "/Users/felix.brilej/git/astro-party/src/pages/server/party/update.astro";
const $$url = "/server/party/update";

export { $$Update as default, $$file as file, $$url as url };
