# Astro Party

[![Netlify Status](https://api.netlify.com/api/v1/badges/386bf1a3-4b24-4181-8ddc-79ba6c952f20/deploy-status)](https://app.netlify.com/sites/flyck-astro-party/deploys)

An experiment with the new astro db to re-implement the
[party-task-planner](https://github.com/flyck/party-task-planner) with astro, astro server, astro
db and htmx.

With this stack CRUD apps can be created without react, which can be a dread at times. All
frontend actions can be implemented via the htmx abstraction, the templates come from the astro
server, and the data is in a simple astro database which has a great integration with astro db and
drizzle ORM.

## Learnings

### Learning Htmx

In this app I needed to figure these out in htmx + astro:
- [x] Loading spinners
- [x] Inline form validation
- [x] Reusable Modals and data-flow without react
- [x] Skeletons
- [x] Toast Messages
- [x] Astro View transitions with htmx

### New Technologies
- [x] Astro DB
- [x] Astro SSR
- [x] Netlify

I'll also have explained these in a blog over at ![double-trouble.dev]

## Powered by Astro

Used the Astro minimal starter kit:
```sh
npm create astro@latest -- --template minimal
```

## Plan

V1 Release: Basic App functionality with all the goodies.

Later Releases:
- Layout
  - [ ] Screen height on mobile behaves weirdly
  - [ ] Flexible bigger text input boxes (i.e. party description)
- Issues
  - [ ] Fix all type-errors
  - [ ] 404 page doesnt work in subdirectories
  - [ ] Fix deleting of an participant which still has tasks assigned
- Nice things
  - [ ] Modal gets closed when outside-area is clicked (escape & close button already work)
  - [ ] Have better toast messages with a proper library ([js-snackbar](https://www.michaelmickelson.com/js-snackbar/)?)
  - [ ] Navigate left-right on desktop via arrow keys
  - [ ] Pagination (average party wont have hundreds of guests / tasks, for bigger lists we have the scrollable area)
- Github Actions
  - [ ] Biome Linting
  - [ ] Nice releases

## Dev Notes

- Doing a db schema changes from date to string was as easy as changing the schema in the
  `db/config.ts`, removing the frontend type conversion and running a `npm run astro db push` 👏
- AstroDBs local behavior with sqlite is different from the prod deployment. Locally I always get
  the insert / delete status back. On deployment that is always empty
  - Fixed by request it specifically with `.returning()`
- When I deploy from local there is a dependency missing from the build: `Cannot find module
  '@libsql/linux-x64-gnu'`
  - Fixed by downgrading @libsql/client: https://github.com/tursodatabase/libsql-client-ts/issues/112
- Htmx with Astro View Transitions
  - https://github.com/bigskysoftware/htmx/discussions/692 htmx.trigger works for multiple events,
    the native browser events will only work once
  - Using htmx.trigger() will send an event, but htmx will not process it. Only `htmx.process()`
    works
    - Supported by https://github.com/bigskysoftware/htmx/issues/2011
  - https://github.com/bigskysoftware/htmx/issues/1761 a proper plugin?

### Utils

Useful to verify skeletons:
```typescript
await new Promise<void>((res) => setTimeout(() => {console.log(":)"); res()}, 2000))
return new Response(JSON.stringify({ ok: true }), {
    status: 200,
  })
```
