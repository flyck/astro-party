/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, m as maybeRenderHead, h as renderComponent, s as spreadAttributes } from '../astro_qWz9nA0A.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */
import * as z from 'zod';
import { createLocalDatabaseClient, asDrizzleTable, seedLocal } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/config.js';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Astro Party</title>", "</head> <body> <div> ", ' </div>  <!-- based on: https://www.kevinzunigacuellar.com/blog/dark-mode-in-astro/ --> <script>\n  const theme = (() => {\n    console.log(window.matchMedia("(prefers-color-scheme: dark)"))\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n<\/script></body></html>'])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/felix.brilej/git/astro-party/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$ArrowLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ArrowLeft;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m15 18-6-6 6-6"></path> </svg>`;
}, "/Users/felix.brilej/git/astro-party/src/components/mini/arrowLeft.astro", void 0);

const $$Astro$7 = createAstro();
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m9 18 6-6-6-6"></path> </svg>`;
}, "/Users/felix.brilej/git/astro-party/src/components/mini/arrowRight.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { left, right, title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script src="https://unpkg.com/htmx.org"><\/script> ', " <!-- keep query parameter --> <script>\n function keepQueryParam(page) {\n     window.location = page + window.location.search;\n }\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen flex-col items-center justify-between "> <div class="my-auto mx-auto p-4"> <div class="mb-4 flex w-96 sm:w-80"> ${left ? renderTemplate`<a${addAttribute(left, "href")}${addAttribute(`keepQueryParam('${left}'); return false;`, "onclick")} class="flex" aria-label="Go Left"> ${renderComponent($$result2, "ChevronLeftIcon", $$ArrowLeft, { "class": "h-7 w-7 self-center mr-2" })} </a>` : renderTemplate`<div class="flex"> <div class="h-7 w-7 self-center mr-2"></div> </div>`} <div class="w-full h-96"> <div class="mb-4"> <div class="w-full dark:bg-gray-900 bg-gray-100 dark:border-gray-800 p-2 rounded-lg text-center border"> ${title} </div> </div> <div class="rounded-lg border dark:bg-gray-900 bg-gray-100 dark:text-gray-100 text-gray-900 dark:border-gray-800 border-gray-200 h-80"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ${right ? renderTemplate`<a${addAttribute(right, "href")}${addAttribute(`keepQueryParam('${right}'); return false;`, "onclick")} class="flex" aria-label="Go Right"> ${renderComponent($$result2, "ChevronRightIcon", $$ArrowRight, { "class": "h-7 w-7 self-center ml-2" })} </a>` : renderTemplate`<div class="flex"> <div class="h-7 w-7 self-center ml-2"></div> </div>`} </div> </div> </div> ` }));
}, "/Users/felix.brilej/git/astro-party/src/layouts/PageLayout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Scrollable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Scrollable;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col h-72 overflow-y-auto"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/felix.brilej/git/astro-party/src/layouts/Scrollable.astro", void 0);

const $$Astro$4 = createAstro();
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Input;
  const { class: className, title, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-b border-gray-500 p-2"> <div class="text-sm">${title}:</div> <input class="w-full text-sm dark:bg-gray-800 px-2 rounded-sm"${addAttribute(className, "class")}${spreadAttributes(rest)}> </div>`;
}, "/Users/felix.brilej/git/astro-party/src/components/mini/input.astro", void 0);

const $$Astro$3 = createAstro();
const $$SubmitButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SubmitButton;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="disabled:bg-gray-800 bg-blue-700 text-gray-200 rounded-b-lg w-full h-8 flex justify-center items-center" type="submit"${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/Users/felix.brilej/git/astro-party/src/components/submitButton.astro", void 0);

const $$Astro$2 = createAstro();
const $$Create$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Create$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "title": "Create Party" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form hx-post="/server/party/create" hx-target="#action-response"> ${renderComponent($$result2, "Scrollable", $$Scrollable, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Input", $$Input, { "name": "title", "title": "Title", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": "25th Birthday" })} ${renderComponent($$result3, "Input", $$Input, { "name": "description", "title": "Description", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": "Lets go hard" })} ${renderComponent($$result3, "Input", $$Input, { "name": "location", "title": "Where", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": "Dunenberg" })} ${renderComponent($$result3, "Input", $$Input, { "name": "date", "title": "When", "class": "w-full rounded-sm dark:bg-gray-800", "type": "text", "value": "2022-05-05" })} <div id="action-response" class="m-2"></div> ` })} <!-- TODO loading spinner --> ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "id": "submitButton" }, { "default": ($$result3) => renderTemplate`
Ok
` })} </form> ` })}`;
}, "/Users/felix.brilej/git/astro-party/src/pages/create.astro", void 0);

const $$file$2 = "/Users/felix.brilej/git/astro-party/src/pages/create.astro";
const $$url$2 = "/create";

const create$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Create$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const dbUrl$1 = "file:///Users/felix.brilej/git/astro-party/.astro/content.db";
const db$1 = createLocalDatabaseClient({ dbUrl: dbUrl$1 });

const Parties$1 = asDrizzleTable("Parties", {"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Parties","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Parties","primaryKey":false,"optional":false}},"location":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"location","collection":"Parties","primaryKey":false,"optional":false}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Parties"}}},"deprecated":false}, false);
const Participants$1 = asDrizzleTable("Participants", {"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Participants","primaryKey":true}},"partyId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"partyId","collection":"Participants","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}}}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Participants","primaryKey":false,"optional":false}},"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"Participants","primaryKey":false,"optional":false}},"invitation_sent":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"invitation_sent","collection":"Participants"}}},"deprecated":false}, false);
asDrizzleTable("Tasks", {"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Tasks","primaryKey":true}},"partyId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"partyId","collection":"Tasks","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}}}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Tasks","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Tasks","primaryKey":false,"optional":false}},"status":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"status","collection":"Tasks","primaryKey":false,"optional":false}}},"deprecated":false}, false);

async function seed() {
  await db$1.insert(Parties$1).values([
    {
      title: "Birthday Bash",
      description: "Celebrating a special day!",
      location: "123 Main Street",
      date: /* @__PURE__ */ new Date("2024-02-18")
    },
    {
      title: "Office Christmas Party",
      description: "Year-end festivities",
      location: "456 Business Ave",
      date: /* @__PURE__ */ new Date("2024-12-20")
    },
    {
      title: "Summer BBQ",
      description: "Grilling and chilling",
      location: "789 Sunny Lane",
      date: /* @__PURE__ */ new Date("2024-07-15")
    }
  ]);
  await db$1.insert(Participants$1).values([
    {
      partyId: 1,
      name: "John Doe",
      email: "john@example.com",
      invitation_sent: true
    },
    {
      partyId: 1,
      name: "Jane Smith",
      email: "jane@example.com",
      invitation_sent: false
    },
    {
      partyId: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      invitation_sent: true
    },
    {
      partyId: 3,
      name: "Alice Anderson",
      email: "alice@example.com",
      invitation_sent: false
    },
    {
      partyId: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      invitation_sent: true
    }
  ]);
}

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: seed
}, Symbol.toStringTag, { value: 'Module' }));

const dbUrl = "file:///Users/felix.brilej/git/astro-party/.astro/content.db";
const db = createLocalDatabaseClient({ dbUrl });

await seedLocal({
	db,
	tables: {"Parties":{"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Parties","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Parties","primaryKey":false,"optional":false}},"location":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"location","collection":"Parties","primaryKey":false,"optional":false}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Parties"}}},"deprecated":false},"Participants":{"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Participants","primaryKey":true}},"partyId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"partyId","collection":"Participants","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}}}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Participants","primaryKey":false,"optional":false}},"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"Participants","primaryKey":false,"optional":false}},"invitation_sent":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"invitation_sent","collection":"Participants"}}},"deprecated":false},"Tasks":{"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Tasks","primaryKey":true}},"partyId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"partyId","collection":"Tasks","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}}}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Tasks","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Tasks","primaryKey":false,"optional":false}},"status":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"status","collection":"Tasks","primaryKey":false,"optional":false}}},"deprecated":false}},
	userSeedGlob: /* #__PURE__ */ Object.assign({"/db/seed.ts": __vite_glob_0_0}),
	integrationSeedFunctions: [],
});

const Parties = asDrizzleTable("Parties", {"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Parties","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Parties","primaryKey":false,"optional":false}},"location":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"location","collection":"Parties","primaryKey":false,"optional":false}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Parties"}}},"deprecated":false}, false);
const Participants = asDrizzleTable("Participants", {"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Participants","primaryKey":true}},"partyId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"partyId","collection":"Participants","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}}}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Participants","primaryKey":false,"optional":false}},"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"Participants","primaryKey":false,"optional":false}},"invitation_sent":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"invitation_sent","collection":"Participants"}}},"deprecated":false}, false);
asDrizzleTable("Tasks", {"columns":{"id":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Tasks","primaryKey":true}},"partyId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"partyId","collection":"Tasks","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":true,"deprecated":false,"name":"id","collection":"Parties","primaryKey":true}}}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Tasks","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Tasks","primaryKey":false,"optional":false}},"status":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"status","collection":"Tasks","primaryKey":false,"optional":false}}},"deprecated":false}, false);

const $$Astro$1 = createAstro();
const $$Create$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Create$1;
  const { request } = Astro2;
  const url = new URL(request.headers.get("Hx-Current-Url") || "");
  const id = parseInt(url.searchParams.get("id") || "");
  if (!id) {
    return new Response(JSON.stringify({ message: "bad request" }), { status: 400 });
  }
  const inputSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().max(100)
  });
  const data = await request.formData();
  let inputJson = {};
  data.forEach((value, key) => {
    inputJson[key] = value;
  });
  const parsedInput = inputSchema.safeParse(inputJson);
  console.info("Input correct: " + parsedInput.success);
  let error = "something went wrong";
  if (parsedInput.success) {
    try {
      const newParticipant = { ...parsedInput.data, partyId: id, invitation_sent: false };
      console.info("Creating new participant: " + JSON.stringify(newParticipant));
      const insertResult = await db.insert(Participants).values(
        [newParticipant]
      );
      return new Response(JSON.stringify({ message: "participant created" }), {
        status: 200,
        headers: {
          "hx-redirect": `/participants?id=${id}`
        }
      });
    } catch (error2) {
      error2 = "Database Error";
      console.error("Couldnt insert participant");
    }
  } else {
    error = "Application Error";
  }
  return renderTemplate`${maybeRenderHead()}<div class="text-red-500 text-center">${error}</div>`;
}, "/Users/felix.brilej/git/astro-party/src/pages/server/participant/create.astro", void 0);

const $$file$1 = "/Users/felix.brilej/git/astro-party/src/pages/server/participant/create.astro";
const $$url$1 = "/server/participant/create";

const create$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Create$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  const { request } = Astro2;
  const inputSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().max(100),
    location: z.string().max(100),
    date: z.string().max(100).transform((str) => new Date(str))
  });
  const data = await request.formData();
  let inputJson = {};
  data.forEach((value, key) => {
    inputJson[key] = value;
  });
  const parsedInput = inputSchema.safeParse(inputJson);
  console.log("Input correct: " + parsedInput.success);
  if (parsedInput.success) {
    const party = await db.insert(Parties).values([
      { ...parsedInput.data }
    ]);
    const partyId = party.lastInsertRowid;
    console.log(party);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "hx-redirect": `/details?id=${partyId}`
      }
    });
  }
  function parseError() {
    return "Bad input";
  }
  return renderTemplate`${maybeRenderHead()}<div class="text-red-500">${parseError()}</div>`;
}, "/Users/felix.brilej/git/astro-party/src/pages/server/party/create.astro", void 0);

const $$file = "/Users/felix.brilej/git/astro-party/src/pages/server/party/create.astro";
const $$url = "/server/party/create";

const create = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Create,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Scrollable as $, Parties as P, $$SubmitButton as a, $$PageLayout as b, $$Layout as c, db as d, $$Input as e, Participants as f, create$2 as g, create$1 as h, create as i };
