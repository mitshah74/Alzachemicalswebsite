# AGENTS.md

This repository is currently an empty workspace intended for a website/project. Keep the setup lean and predictable.

## Working rules
- Prefer the simplest solution that satisfies the task.
- Do not add heavy frameworks or dependencies unless the task explicitly requires them.
- Keep code readable, maintainable, and consistent with the existing structure.
- If the project is empty, scaffold a minimal but working structure before adding features.
- Validate changes with the smallest relevant command available for the project.

## Repository expectations
- Use a clear folder structure for source files and assets.
- Avoid unnecessary files and generated output in the repo.
- Keep documentation short and practical.

## Before finalizing work
- Make sure the workspace is in a runnable state.
- Summarize what changed and how to run it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
