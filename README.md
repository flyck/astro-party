# Astro Party

An experiment with the new astro db to re-implement the
[party-task-planner](https://github.com/flyck/party-task-planner) with astro, astro server, astro
db and htmx.

With this stack (hopefully) CRUD apps can be created easily, as all frontend actions can be
implemented via the htmx abstraction, the templates come from the astro server, and the data is in
a simple astro database which has a great integration with astro db and drizzle ORM.

## Plan
- [x] Basic Layout
- [x] Create, Edit, List and Delete Party
- [ ] Create, Edit, List and Delete Participant
  - [x] Create
  - [x] List
  - [ ] Edit
  - [ ] Delete
- [x] Astro DB auth for netlify
- [x] Deploy Astro frontend to Netlify
  - https://docs.astro.build/en/guides/deploy/netlify/
- Issues
  - [x] On cascade delete
  - [x] Loading Skeletons
  - [x] Loading Spinners
  - [x] Remove date type from party date
- Nice things
  - [ ] Basic Transitions for buttons, fance slide-in of the whole menu
  - [ ] Modal gets closed when outside-area is clicked (escape & close button already work)
- [ ] Create, Edit, List and Delete Task
  - [x] List

## Dev Notes

- Doing a db schema changes from date to string was as easy as changing the schema in the
  `db/config.ts`, removing the frontend type conversion and running a `npm run astro db push` 👏
- AstroDBs local behavior with sqlite is different from the prod deployment. Locally I always get
  the insert / delete status back. On deployment that is always empty
  - Fixed by request it specifically with `.returning()`
- When I deploy from local there is a dependency missing from the build: `Cannot find module
  '@libsql/linux-x64-gnu'`
  - Fixed by downgrading @libsql/client: https://github.com/tursodatabase/libsql-client-ts/issues/112

## Powered by Astro

Used the Astro minimal starter kit:
```sh
npm create astro@latest -- --template minimal
```
