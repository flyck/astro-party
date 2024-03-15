/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../astro_qWz9nA0A.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { d as db, f as Participants, P as Parties, e as $$Input } from './create_ClgShnOW.mjs';
import { eq } from '@astrojs/db/dist/runtime/config.js';

const $$Astro$1 = createAstro();
const $$Read$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Read$1;
  const { request } = Astro2;
  const url = new URL(request.headers.get("Hx-Current-Url") || "");
  const id = parseInt(url.searchParams.get("id") || "");
  if (!id) {
    return new Response(JSON.stringify({ message: "bad request" }), { status: 400 });
  }
  const participants = await db.select().from(Participants).where(eq(Participants.partyId, id));
  return renderTemplate`${participants.map(
    (p) => renderTemplate`${maybeRenderHead()}<div${addAttribute(p.id, "key")} class="border-b border-gray-500 p-2"><div class="text-sm">${p.name || "?"} (${p.email})</div></div>`
  )}`;
}, "/Users/felix.brilej/git/astro-party/src/pages/server/participants/read.astro", void 0);

const $$file$1 = "/Users/felix.brilej/git/astro-party/src/pages/server/participants/read.astro";
const $$url$1 = "/server/participants/read";

const read$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Read$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Read = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Read;
  const { request } = Astro2;
  const url = new URL(request.headers.get("Hx-Current-Url") || "");
  const id = parseInt(url.searchParams.get("id") || "");
  if (!id) {
    return new Response(JSON.stringify({ message: "bad request" }), { status: 400 });
  }
  const party = await db.select().from(Parties).where(eq(Parties.id, id));
  if (party.length == 0) {
    return new Response(JSON.stringify({ message: "party not found" }), { status: 404 });
  }
  const { title, location, description, date } = party[0];
  return renderTemplate`${maybeRenderHead()}<ul> ${renderComponent($$result, "Input", $$Input, { "name": "title", "title": "Title", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": title })} ${renderComponent($$result, "Input", $$Input, { "name": "location", "title": "Where", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": location })} ${renderComponent($$result, "Input", $$Input, { "name": "date", "title": "When", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": date.toString() })} ${renderComponent($$result, "Input", $$Input, { "name": "description", "title": "Description", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": description })} </ul>`;
}, "/Users/felix.brilej/git/astro-party/src/pages/server/party/read.astro", void 0);

const $$file = "/Users/felix.brilej/git/astro-party/src/pages/server/party/read.astro";
const $$url = "/server/party/read";

const read = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Read,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { read as a, read$1 as r };
