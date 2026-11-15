# Aditya Yardi — portfolio

Personal portfolio for a mechanical engineer working in robotics and automation.
One home page (hero, statement, about, projects, experience, skills, education, contact) and
four case-study pages under `/projects/…`.

Built with Next.js 16 (App Router, static export), React 19, TypeScript and Tailwind CSS 4.
No animation library and no runtime dependencies beyond Next and React.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Type-checks and writes the static site to `out/` |
| `npm run lint` | ESLint |

## Deploy

`npm run build` produces plain HTML, CSS and JS in `out/`. Any static host works.

- **Vercel or Netlify:** import the repository. Build command `npm run build`, output directory `out`.
- **GitHub Pages:** publish the `out/` folder (for example with the `actions/deploy-pages` workflow).
  If the site is served from a sub-path such as `username.github.io/portfolio`, add
  `basePath: "/portfolio"` to `next.config.ts`. A `username.github.io` repository needs no change.
- **Anything else:** upload the contents of `out/`.

Before the first deploy, set `url` in `src/data/site.ts` to the final address. It is used for the
canonical and social-share image URLs (the build prints a `metadataBase` warning until it is set).

## Where the content lives

All text is data; components only lay it out.

| File | Content |
| --- | --- |
| `src/data/site.ts` | Name, role, location, email, LinkedIn, CV path (empty), GitHub (empty), site URL |
| `src/data/projects.ts` | Project cards, case-study text, diagrams, image references |
| `src/data/profile.ts` | Experience, skills, degrees, certificates, languages |
| `public/images/` | Project pictures and the portrait |

To add a project, append an entry to `projects` in `src/data/projects.ts`. With `hasPage: true` a
case-study page is generated at `/projects/<slug>/`. A project can show a picture (`image`), a
diagram (`diagram`, a list of columns of nodes) or both.

## Structure

```
src/
  app/
    layout.tsx              fonts, metadata, header and footer
    page.tsx                home page: the sections in order
    projects/[slug]/page.tsx  case-study template
    globals.css             design tokens, layout, buttons, cards, diagrams, motion
  components/               Hero, Statement, About, Projects, Experience, Skills, Education,
                            Nav, Footer, Diagram, ui (Arrow, Mark, Chips, SectionHead)
  data/                     site.ts, projects.ts, profile.ts
```

## Design notes

The visual direction follows the installed `taste` skill (tasteskill 2.5.1) and the reference
moodboard: a light neutral ground, near-black type, one orange accent.

- **Dealt, not picked.** The skill's dealers chose the split hero, Work Sans, solid buttons, the
  dots mark, the "space" rhythm (one ground, sections parted by space) and the `word-highlight`
  statement moment. Colours come from the moodboard (`#f0f0ee`, `#0e0e0e`, orange `#ec4610`).
- **One system.** One container with equal left and right edges, a 12-column grid, one button
  pair, one card style, one radius scale, one link style. Headlines are weight 500 with tight
  tracking; nothing is bold or set in capitals.
- **Motion in three places only.** The hero enters once on load, the statement lights up word by
  word as it is scrolled, and links, buttons and linked cards answer the pointer. Diagram pulses
  run only while a card is hovered or focused. Nothing fades in on scroll. Everything rests under
  `prefers-reduced-motion`, and the page is complete without JavaScript.
- **Honest visuals.** Simulation screenshots carry a "Simulation" label. Projects without pictures
  show a diagram of their documented method instead of an invented render. The coil outline on the
  first project is a schematic drawn from a parametric curve, not project data.
- **Copy.** Written to the skill's copy rules (plain headings that name things, verb-and-object
  buttons, numbers in sentences) and checked with its `copy-lint` script.

Where the brief and the skill disagreed, the brief won: Tailwind and React components instead of
the skill's static kit, smooth anchor scrolling, labels on simulation pictures, and sections sized
by their content instead of exactly one or two screens.

## Content rules

Every statement on the site comes from the résumé. Nothing was estimated: where the résumé gives
no measured figure (both FAPS projects), none is shown.

Left out on purpose:

- **Phone number and postal code.** They are on the résumé but not on the public pages.
- **PLC integration, cryogenic testing of superconductors, digital twins.** They were mentioned as
  possible themes but are not on the résumé and no documentation was supplied.

## To provide later

| Item | Where it goes |
| --- | --- |
| A public CV. None is published yet. Add a PDF to `public/` and set `cv` in `src/data/site.ts`; the download link then appears in the hero and footer. | `public/aditya-yardi-cv.pdf` |
| Larger simulation pictures. The supplied ones are under 1,000 px wide and are shown slightly enlarged on big screens; 1,600 px or wider would be sharp everywhere. | `public/images/` |
| A higher-resolution portrait. The current one is cropped from the résumé. | `public/images/aditya-yardi.png` |
| Photographs or video of the UR10e hardware and the winding setup | `image` on the two FAPS projects |
| Details of the two-arm chess simulation (tools, goal, your role). It currently shows only what the pictures prove and has no case-study page. | `two-arm-chess-cell` in `src/data/projects.ts` |
| Measured results for the FAPS projects (path-programming time saved, accuracy, cycle counts), once they can be published | `results` in `src/data/projects.ts` |
| Pictures of the jigs and fixtures, the Power BI dashboards or the Smart Turning setup, if they may be shown | `image` on those projects |
| Documentation for PLC integration and the cryogenic testing work, if they should appear | new entries in `src/data/projects.ts` |
