# Astro Party

An experiment with the new astro db to re-implement the
[party-task-planner](https://github.com/flyck/party-task-planner) with astro, astro server, astro
db and htmx.

With this stack (hopefully) CRUD apps can be created easily, as all frontend actions can be
implemented via the htmx abstraction, the templates come from the astro server, and the data is in
a simple astro database which has a great integration with astro db and drizzle ORM.

## Plan
- [x] Basic Layout
- [ ] Create, Edit, List and Delete Party
  - Create
- [ ] Create, Edit, List and Delete Participant
- [ ] Create, Edit, List and Delete Task
- [ ] Astro DB auth
- [ ] Deploy Astro frontend to Netlify
  - https://docs.astro.build/en/guides/deploy/netlify/

## Dev Notes

- To which extend to i need multiple pages in the frontend? In theory I could boost the new page
  into the current page and only adjust the window.href. Entry points for deeplinking still need
  to work though for most of the pages.
  - I could definitely do some crazy navigation within a section (party / participant / task) via
    hx-boost which doesnt need deep linking

## Powered by Astro

Used the Astro minimal starter kit:
```sh
npm create astro@latest -- --template minimal
```
