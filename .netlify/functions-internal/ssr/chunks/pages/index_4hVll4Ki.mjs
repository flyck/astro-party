/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_qWz9nA0A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as $$Layout } from './create_ClgShnOW.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-col items-center justify-between"> <div class="flex flex-col items-center justify-center min-h-screen mt-auto"> <h1 class="text-2xl font-serif mb-10">Party Task Planner</h1> <a href="/create"> <button aria-label="New Party" class="bg-blue-500 mx-auto flex items-center justify-center h-14 w-14 rounded text-xl" variant="outline">
+
</button> </a> </div> </main> ` })}`;
}, "/Users/felix.brilej/git/astro-party/src/pages/index.astro", void 0);

const $$file = "/Users/felix.brilej/git/astro-party/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
