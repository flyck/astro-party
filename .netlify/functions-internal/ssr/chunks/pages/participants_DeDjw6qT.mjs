/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, h as renderComponent, m as maybeRenderHead, l as Fragment } from '../astro_qWz9nA0A.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Scrollable, e as $$Input, a as $$SubmitButton, b as $$PageLayout } from './create_ClgShnOW.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Modal;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<dialog data-modal class="backdrop:bg-gray-200 bg-gray-200"> <div class="mb-4 flex w-80 my-auto mx-auto">  <div class="flex w-7 mr-2"></div> <div class="w-full modal-content h-96"> <div class="mb-4"> <div class="w-full dark:bg-gray-900 bg-gray-100 dark:border-gray-800 p-2 rounded-lg text-center border"> <div class="flex justify-between"> ', ' <button class="" id="closeModalButton">\n\u2716\n</button> </div> </div> </div> <div class="rounded-lg border dark:bg-gray-900 bg-gray-100 dark:text-gray-100 text-gray-900 dark:border-gray-800 border-gray-200"> ', ` </div> <div class="w-2"></div> </div> <div class="flex w-7 mr-2"></div> </div> </dialog> <script>
 const modal = document.querySelector("dialog");

 document.getElementById("createButton").addEventListener('click', () => {
   modal?.showModal()
 });
 document.getElementById("closeModalButton").addEventListener('click', () => {
   modal?.close()
 });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${title}` }), renderSlot($$result, $$slots["default"]));
}, "/Users/felix.brilej/git/astro-party/src/layouts/Modal.astro", void 0);

const $$Astro = createAstro();
const $$Participants = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Participants;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "title": "Participants", "left": "/details" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div hx-trigger="load" hx-get="/server/participants/read" hx-target="#content"></div> ${renderComponent($$result2, "Scrollable", $$Scrollable, {}, { "default": ($$result3) => renderTemplate` <div id="content"></div> ` })} <button id="createButton" class="disabled:bg-gray-800 bg-blue-700 text-gray-200 rounded-b-lg w-full h-8 flex justify-center items-center">
+
</button> ${renderComponent($$result2, "Modal", $$Modal, { "title": "Create Participant" }, { "default": ($$result3) => renderTemplate` <form hx-post="/server/participant/create" hx-target="#action-feedback"> ${renderComponent($$result3, "Input", $$Input, { "name": "name", "title": "Name", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": "Johnny B" })} ${renderComponent($$result3, "Input", $$Input, { "name": "email", "title": "Email", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": "john@john.de" })} <div id="action-feedback"></div> ${renderComponent($$result3, "SubmitButton", $$SubmitButton, {}, { "default": ($$result4) => renderTemplate`Ok` })} </form> ` })}` })}`;
}, "/Users/felix.brilej/git/astro-party/src/pages/participants.astro", void 0);

const $$file = "/Users/felix.brilej/git/astro-party/src/pages/participants.astro";
const $$url = "/participants";

export { $$Participants as default, $$file as file, $$url as url };
