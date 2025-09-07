# PromptForge Academy Frontend

Production-ready Next.js 14+ app for PromptForge Academy.

## Getting Started

```sh
yarn install
yarn dev
```

## Scripts
- `dev`: Start local dev server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint
- `test`: Run Jest unit tests
- `e2e`: Run Playwright E2E tests

## Environment Variables
- `NEXT_PUBLIC_API_BASE`: API gateway base URL (default `/api/academy`)
- `NEXT_PUBLIC_SANDBOX_TOKEN`: Guest mode token (for sandbox limits)
- Vercel deployment: Set VERCEL_PROJECT settings in dashboard

## Deployment
- Push to main or PR branch, Vercel auto-deploys
- Configure env vars in Vercel dashboard

## Content
- MDX lessons in `/content/academy/{module}/{lesson}.mdx`
- Required frontmatter: `id`, `title`, `module`, `labPresets`

## Admin
- `/admin/content-validator`: Validates MDX frontmatter

## TODO
- Add secrets, business logic, and real API endpoints
- Improve UI/UX and add more modules/lessons
