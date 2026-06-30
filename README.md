<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Octa--Projects-0B192C?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PC9zdmc+">
  <img alt="Octa-Projects" src="https://img.shields.io/badge/Octa--Projects-0B192C?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTI5M2UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PC9zdmc+" width="320">
</picture>

**Modern bilingual university project showcase — Next.js, React, Tailwind, TypeScript**

[![Next.js](https://img.shields.io/badge/Next.js-16-000.svg?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4.svg?logo=tailwindcss)](https://tailwindcss.com)
[![next-intl](https://img.shields.io/badge/next--intl-4-0095D9.svg?logo=nextdotjs)](https://next-intl.dev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)
[![Status](https://img.shields.io/badge/status-production-22c55e.svg)](#)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel)](https://octa-remake.vercel.app)

---

## Overview

**Octa-Projects** is a modern, bilingual (English/Arabic) university website that showcases student projects. Originally built as the creator's first-ever website, this complete remake re-engineers the experience with Next.js 16 (App Router), React 19, Tailwind CSS, TypeScript, and internationalization via `next-intl`.

The platform features a filterable project catalog organized by major, faculty-based switching between Industry and Medical tracks, responsive design, and smooth reveal animations — all served through a locale-aware routing system.

---

## Features

| Category | Capabilities |
|---|---|
| **🌐 Internationalization** | Full English / Arabic support with locale-aware routing (`/[locale]/`) |
| **📂 Project Showcase** | Filterable, searchable project catalog organized by academic major |
| **🏛️ Faculty Switching** | Toggle between Technology of Industry and Medical Sciences faculties |
| **📱 Responsive Design** | Mobile-first layout with landscape/portrait adaptations |
| **🎞️ Smooth Animations** | Card-based reveal animations for a polished browsing experience |
| **🔍 SEO Optimized** | Sitemap and robots.txt configuration for search engines |
| **⚡ Modern Stack** | Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 3 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, SWC compiler) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 3 |
| **Language** | TypeScript 5 |
| **Internationalization** | next-intl 4 |
| **Build Tool** | Next.js Compiler (SWC) |
| **Deployment** | Vercel |

---

## Majors

### Technology of Industry and Energy Faculty
- Information Technology (IT)
- Railway Technology
- Textile Technology
- Food Industry Technology

### Medical Sciences Technology Faculty
- Dental Implants
- Pharmaceutical Manufacturing
- Medical Information Management

---

## Quick Start

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/Omar-Khaled-57/octa-remake.git
cd octa-remake

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000
```

### Build

```bash
npm run build
npm start
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build with TypeScript checking |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint across the codebase |

---

## Project Structure

```
octa-remake/
├── app/                    # Next.js App Router pages
│   └── [locale]/          # Locale-specific routes
│       ├── page.tsx       # Home page
│       ├── about-us/      # About page
│       ├── admissions/    # Admissions page
│       ├── news-events/   # News & Events page
│       ├── programs/      # Programs page
│       ├── projects/      # Projects showcase
│       ├── research-innovation/  # Research page
│       └── student-life/  # Student Life page
├── components/            # React components
├── messages/              # i18n translation files
│   ├── en.json            # English translations
│   └── ar.json            # Arabic translations
├── public/                # Static assets
│   ├── projects.json      # Project data
│   └── images/            # Image assets
├── styles/                # Custom CSS styles
├── tailwind.config.ts     # Tailwind configuration
├── i18n.ts               # Internationalization setup
└── tsconfig.json          # TypeScript configuration
```

---

## ⚠️ Disclaimer

**No real student data, project information, or any actual university data is used on this website.** All content — including student names, project names, descriptions, team members, and any other displayed information — is 100% fake and AI-generated for demonstration and showcase purposes only. Any resemblance to real persons or projects is coincidental.

This project was originally proposed to OTU (October Technological University) as an official student project showcase platform. The proposal was reviewed and **approved**. However, during mid-development — just a few days before the deadline — the university informed me that I should not proceed due to legal concerns. As a result, no cooperation or official data was ever provided, and all information on this site is entirely fabricated.

Due to the complete absence of university cooperation and the sudden late-stage cancellation, some parts of the site may contain incomplete, placeholder, or inaccurate information. **Nothing on this website should be treated as official university data.**

---

## Live Demo

The site is deployed on Vercel — check it out at [octa-remake.vercel.app](https://octa-remake.vercel.app).

---

## License

MIT

---

<div align="center">
  <sub>Built with Next.js 16, React 19, TypeScript, and Tailwind CSS</sub>
  <br>
  <sub>&copy; 2026 Omar Khaled. All rights reserved.</sub>
</div>
