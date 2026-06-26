# Manjula V Mahesh — Portfolio

An animated, single-page developer portfolio built with **React + TypeScript + Vite** and **Framer Motion**. It features an aurora-gradient theme, a custom cursor, an intro preloader, scroll-driven reveals, animated text and a magnetic call-to-action.

🎨 **Theme:** *Aurora Indigo* — a near-black canvas with drifting indigo / cyan / rose gradients and glassmorphism.

## ✨ Features

- ⚡️ React 18 + TypeScript on Vite
- 🌌 Animated aurora background with a subtle grid + noise overlay
- 🖱️ Custom spring-based cursor with hover states
- 🎬 Intro preloader and word-by-word text reveals
- 🧲 Magnetic buttons and scroll progress indicator
- 📱 Fully responsive with a mobile menu
- ♿️ Respects `prefers-reduced-motion`

## 🗂️ Project structure

```
portfolio_mahesh/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx              # App entry
    ├── App.tsx               # Layout composition
    ├── data/portfolio.ts     # All content (single source of truth)
    ├── types/index.ts        # Shared TypeScript types
    ├── hooks/                # useScrollSpy, useMediaQuery
    ├── styles/index.css      # Global styles + theme tokens
    └── components/
        ├── layout/           # Navbar, Footer, ScrollProgress
        ├── ui/               # Cursor, Aurora, AnimatedText, etc.
        └── sections/         # Hero, About, Skills, Experience,
                              #   Projects, Education, Contact
```

## 🚀 Getting started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check + production build
npm run build

# preview the production build
npm run preview
```

## 🧩 Editing content

All text (profile, skills, experience, projects, education) lives in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Update that one file to refresh
the whole site — no need to touch components.

---

Built with ❤️ by Manjula V Mahesh.
