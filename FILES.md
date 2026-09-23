# File map

What each file in this repo does. Content lives in `src/data/`; the home canvas and sliding panels render it.

## Root

| File | Role |
|---|---|
| [README.md](README.md) | How to run the app and set `RESEND_API_KEY`. |
| [FILES.md](FILES.md) | This map. |
| [package.json](package.json) | Dependencies and scripts (`dev`, `build`, `start`, `lint`). |
| [package-lock.json](package-lock.json) | Locked install tree. |
| [tsconfig.json](tsconfig.json) | TypeScript config; `@/*` maps to `src/*`. |
| [next.config.ts](next.config.ts) | React Compiler and `next/image` allowlist for GitHub raw URLs. |
| [next-env.d.ts](next-env.d.ts) | Next.js generated types. Do not edit. |
| [postcss.config.mjs](postcss.config.mjs) | Tailwind v4 PostCSS plugin. |
| [eslint.config.mjs](eslint.config.mjs) | ESLint: Next core-web-vitals + TypeScript. |
| [.gitignore](.gitignore) | Ignores `node_modules`, `.next`, `.env*`. |

## Public assets

| Path | Role |
|---|---|
| `public/cv.pdf` | CV download from the About panel. |
| `public/previews/portfolio.png` | Local preview image for this site in Projects. |
| `src/app/favicon.ico` | Browser tab icon. |

## App shell — `src/app`

| File | Role |
|---|---|
| [layout.tsx](src/app/layout.tsx) | Root HTML, fonts (Space Grotesk, JetBrains Mono), page title. |
| [page.tsx](src/app/page.tsx) | Home canvas: boot scene, module buttons, hash sync, panel open/close. |
| [globals.css](src/app/globals.css) | Theme tokens, blueprint grid, scrollbar. |
| [actions/contact.ts](src/app/actions/contact.ts) | Server action that sends the contact form via Resend. |

## Data — `src/data`

Static typed content. Change these to update the site; no CMS.

| File | Role |
|---|---|
| [about.ts](src/data/about.ts) | Name, bio, internships, education. |
| [projects.ts](src/data/projects.ts) | Project list (tags, links, featured flag). |
| [skills.ts](src/data/skills.ts) | Skill groups and levels. |
| [contact.ts](src/data/contact.ts) | GitHub, LinkedIn, email links (also the mail recipient). |

## Lib & hooks — `src/lib`, `src/hooks`

| File | Role |
|---|---|
| [modules.ts](src/lib/modules.ts) | The four module positions, curve math, boot stagger. |
| [hash.ts](src/lib/hash.ts) | Parse `#projects` / `#skills` / `#about` / `#contact` and build URLs. |
| [useViewport.ts](src/hooks/useViewport.ts) | Window width/height for placing modules. |
| [useParallax.ts](src/hooks/useParallax.ts) | Mouse parallax; skipped on coarse pointers (touch). |

## Home canvas — `src/components/home`

| File | Role |
|---|---|
| [BlueprintGrid.tsx](src/components/home/BlueprintGrid.tsx) | Full-screen grid background. |
| [ConnectionLines.tsx](src/components/home/ConnectionLines.tsx) | SVG curves from the core to each module. |
| [CoreRings.tsx](src/components/home/CoreRings.tsx) | Spinning dashed rings around the core. |
| [BootRipple.tsx](src/components/home/BootRipple.tsx) | One-shot ripple on first paint. |
| [PowerCore.tsx](src/components/home/PowerCore.tsx) | Center “Furkan” button; opens About. |
| [ModuleButton.tsx](src/components/home/ModuleButton.tsx) | Positioned Projects / Skills / About / Contact buttons. |

## Panels — `src/components/panels`

| File | Role |
|---|---|
| [PanelContainer.tsx](src/components/panels/PanelContainer.tsx) | Sliding chrome: title, close, swipe, scroll body. |
| [ProjectsPanel.tsx](src/components/panels/ProjectsPanel.tsx) | Category filters, featured card, project list. |
| [SkillsPanel.tsx](src/components/panels/SkillsPanel.tsx) | Accordion list of skill groups. |
| [AboutPanel.tsx](src/components/panels/AboutPanel.tsx) | Bio, experience, education, CV button. |
| [ContactPanel.tsx](src/components/panels/ContactPanel.tsx) | Social links and contact form. |

## Panel pieces

| File | Role |
|---|---|
| [FeaturedProjectCard.tsx](src/components/projects/FeaturedProjectCard.tsx) | Highlight card for the featured project. |
| [ProjectCard.tsx](src/components/projects/ProjectCard.tsx) | Collapsible project row. |
| [SkillCategoryCard.tsx](src/components/skills/SkillCategoryCard.tsx) | One skill category accordion. |
| [ExperienceTimeline.tsx](src/components/about/ExperienceTimeline.tsx) | Work / internship timeline. |
| [EducationTimeline.tsx](src/components/about/EducationTimeline.tsx) | Education timeline. |

## How a click travels

1. `page.tsx` reads the hash and stores `activeModule`.
2. `ModuleButton` or `PowerCore` calls `syncModule`, which updates state and the URL.
3. `PanelContainer` slides in on the side given by `MODULES_DEF.fx`.
4. The matching panel reads from `src/data/*` and renders.
