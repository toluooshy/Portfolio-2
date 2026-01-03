# toshinowo.co

A personal website and portfolio built with **vanilla React**, designed to feel minimal at first glance but structurally dense upon closer inspection.

The site serves as a living archive of projects, research, and ongoing work across software, systems, and technology policy, with a visual aesthetic inspired by **e-ink displays, CRT terminals, and early web interfaces**.

---

## Philosophy

This site intentionally avoids:

- heavy frameworks
- CMS dependencies
- runtime filesystem tricks
- unnecessary animation

Instead, it prioritizes:

- clarity of content
- predictable structure
- long-term maintainability
- readable typography
- subtle visual complexity

The design aims to look _basic_, while rewarding careful inspection.

---

## Tech Stack

- **React** (no Next.js, no framework abstraction)
- **React Router** (client-side routing)
- **Plain CSS** (no CSS-in-JS, no preprocessors)
- **Static assets imported from `src/media`**
- **System + custom serif font** (Libre Baskerville)

No backend. No database. No build-time magic beyond what React already provides.

---

## Project Structure

```
src/
├─ components/        # Shared UI components (Navbar, etc.)
├─ pages/             # Route-level pages (Home, Projects, Papers, etc.)
├─ media/             # Images, gifs, icons, logos
├─ index.css          # Global styles + CRT/e-ink aesthetic
├─ App.jsx            # App shell & routing
└─ index.js           # Entry point
```

Each page is self-contained with its own CSS file to keep concerns local and legible.

---

## Pages

- **Home**
  Personal introduction, background, and curated links.

- **Projects**
  A chronological archive of technical and creative work, ranging from
  decentralized apps and research tools to hardware systems and experiments.

- **Papers**
  Research, writing, and long-form work, including academic, policy, and
  independent projects.

- **About / Initiatives**
  (Planned / in progress)

---

## Design System

- Monochrome palette
- CRT-style micro-contrast and scanline texture
- Minimal hover states with subtle gradients
- Text-forward layouts
- Mobile-first, responsive by default

Animations are intentionally sparse and respect `prefers-reduced-motion`.

---

## Running Locally

```bash
npm install
npm start
```

Then open:

```
http://localhost:3000
```

---

## Deployment

The site is designed to work on any static host:

- GitHub Pages
- Netlify
- Vercel
- S3 + CloudFront

No server-side configuration required.

---

## Status

This is a **living project**.

Content, structure, and styling will evolve as new work is added and older work is revisited. The goal is not polish for its own sake, but durability and clarity over time.

---

## Author

**Tolulope Oshinowo**
toshinowo.co
Computer Science (MSE), Princeton University
Electrical & Computer Engineering (BS), Olin College of Engineering
