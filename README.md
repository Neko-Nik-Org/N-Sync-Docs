# N-Ops-Docs

Documentation Web For N-Ops Project

Maintain the following directory structure for the documentation:

```sh
src/content/docs/
├── backend
│   ├── ansible.md
│   ├── api-routes.md
│   ├── models.md
│   ├── overview.md
│   └── security.md
├── contribute
│   ├── how.md
│   ├── roadmap.md
│   └── structure.md
├── deployment
│   ├── docker.md
│   ├── local-dev.md
│   └── production.md
├── features
│   ├── command-center.md
│   ├── secure-notes.md
│   └── sql-runner.md
├── frontend
│   ├── components.md
│   ├── env-setup.md
│   ├── overview.md
│   ├── state-auth.md
│   └── websockets.md
├── get-started.md
├── guides
│   ├── example.md
│   ├── installation.md
│   ├── project-structure.md
│   ├── what.md
│   └── why.md
└── index.mdx

7 directories, 26 files
```

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
