/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_qWz9nA0A.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { d as db, P as Parties } from './create_ClgShnOW.mjs';
import { eq } from '@astrojs/db/dist/runtime/config.js';

const $$Astro = createAstro();
const $$Delete = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Delete;
  const { request } = Astro2;
  const url = new URL(request.headers.get("Hx-Current-Url") || "");
  const id = parseInt(url.searchParams.get("id") || "");
  if (!id) {
    return new Response(JSON.stringify({ message: "bad request" }), { status: 400 });
  }
  try {
    const party = await db.delete(Parties).where(eq(Parties.id, id));
    if (party.rowsAffected == 0) {
      throw new Error("Party not found");
    }
    console.info("Deleted party " + id);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "hx-redirect": `/`
      }
    });
  } catch (error) {
    console.error(`Couldnt delete party ${id}`);
  }
  function parseError() {
    return ":(";
  }
  return renderTemplate`${maybeRenderHead()}<div class="text-red-500">${parseError()}</div>`;
}, "/Users/felix.brilej/git/astro-party/src/pages/server/party/delete.astro", void 0);

const $$file = "/Users/felix.brilej/git/astro-party/src/pages/server/party/delete.astro";
const $$url = "/server/party/delete";

export { $$Delete as default, $$file as file, $$url as url };
