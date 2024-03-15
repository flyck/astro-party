/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_qWz9nA0A.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import { $ as $$Scrollable, a as $$SubmitButton, b as $$PageLayout } from './create_ClgShnOW.mjs';

const $$Astro = createAstro();
const $$Details = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Details;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "title": "Details", "right": "/participants" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div hx-trigger="load" hx-get="/server/party/read" hx-target="#content"></div> <form hx-post="/server/party/update" hx-target="#action-feedback"> ${renderComponent($$result2, "Scrollable", $$Scrollable, {}, { "default": ($$result3) => renderTemplate` <div id="content"></div> <div class="p-2"> <button aria-label="Delete Party" class="bg-red-600 text-gray-200 rounded-sm w-full" hx-post="/server/deleteParty" hx-target="#action-feedback" type="button">
Delete
</button> </div> <div id="action-feedback"></div> ` })} <!-- TODO loading spinner --> ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "id": "submitButton" }, { "default": ($$result3) => renderTemplate`
Ok
` })} </form> ` })}`;
}, "/Users/felix.brilej/git/astro-party/src/pages/details.astro", void 0);

const $$file = "/Users/felix.brilej/git/astro-party/src/pages/details.astro";
const $$url = "/details";

export { $$Details as default, $$file as file, $$url as url };
