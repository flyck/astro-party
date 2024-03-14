# Astro Party

An experiment with the new astro db to re-implement the
[party-task-planner](https://github.com/flyck/party-task-planner) with astro, astro server, astro
db and htmx.

With this stack (hopefully) CRUD apps can be created easily, as all frontend actions can be
implemented via the htmx abstraction, the templates come from the astro server, and the data is in
a simple astro database which has a great integration with astro db and drizzle ORM.

## Plan
- Deploy astro server to netlify: https://docs.astro.build/en/guides/deploy/netlify/

## Powered by Astro

Used the Astro minimal starter kit:
```sh
npm create astro@latest -- --template minimal
```
