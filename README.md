# Reshma M — Personal Portfolio

A React + Vite portfolio built from Reshma M's resume, visually inspired by a
Figma "Personal Portfolio Website" template (mustard-yellow blob hero,
serif/sans type pairing, pill buttons, card-based sections). All content is
original — no text, images, or assets were copied from the reference design.

## Tech stack
- React 18
- Vite 5
- Plain CSS (component-scoped stylesheets, CSS custom properties for theming)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional, preview the production build locally
```

The production files are output to `dist/`.

## Project structure

```
public/
  Reshma_M_Resume.pdf      ← used by the "Download Resume" button
src/
  data/
    resumeData.js          ← single source of truth for all resume content
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    Skills.jsx / .css
    Education.jsx / .css
    Projects.jsx / .css
    ProjectCard.jsx / .css
    Certifications.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
  App.jsx
  index.css                ← design tokens, resets, shared button/section styles
  main.jsx
index.html
```

## Editing your content

Everything text-based lives in **`src/data/resumeData.js`** — update your
summary, skills, education, projects, certifications, or contact info there
and it flows through every section automatically. No need to touch component
files for content changes.

## Notes on placeholders

- The resume did not include a profile photo, LinkedIn, or GitHub link, so:
  - The hero/about sections use an initials avatar (`RM`) inside an original
    SVG blob shape as a placeholder — swap `hero__avatar` / `about__photo-frame`
    in `Hero.jsx` / `About.jsx` for a real `<img>` whenever you have a photo.
  - The Contact section only lists email and phone (the two channels present
    on the resume). Add LinkedIn/GitHub to `contactLinks` in `resumeData.js`
    and a link in `Contact.jsx` once you have those URLs.
- The contact form submits via a `mailto:` link (no backend) since no form
  endpoint was specified — swap `handleSubmit` in `Contact.jsx` for an API
  call if you add a backend or a service like Formspree later.

## Design tokens

Defined in `src/index.css`:
- `--color-accent: #f2b705` (mustard gold)
- `--color-ink: #1c1a17` (near-black text)
- `--color-bg: #fffdf7` (warm off-white)
- Display font: **Fraunces** (serif) · Body/UI font: **Inter** (sans)
