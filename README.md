# Geoff Jiang — Portfolio

Personal portfolio built with Next.js, React, Framer Motion, and TypeScript.

## Local development

Use Node.js 22 and pnpm 11:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The default build produces standard Next.js output for Vercel. The separate
`pnpm build:sites` command preserves compatibility with the private OpenAI Sites
deployment.
