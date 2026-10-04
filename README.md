# Yawar Abbas — SEO Specialist & Digital Growth Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-black?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**High-performance, cinematic, and conversion-optimized portfolio for Yawar Abbas — SEO Specialist & Digital Growth Strategist.**

[🌐 Live Portfolio](https://yawarabbas.com) • [📅 Book a Strategy Call](https://calendly.com/yawar-abbas/seo-growth-strategy-call) • [📰 Bi-weekly Newsletter](https://www.linkedin.com/newsletters/the-search-visibility-playbook-7493743068144271361)

</div>

---

## 🚀 Overview

This repository houses the modern, bespoke portfolio and web showcase for **Yawar Abbas**, an SEO Specialist and Digital Growth Strategist based in Punjab, Pakistan (operating globally for US & international clients).

The website bridges **technical search engine optimization (SEO)** with **tangible revenue acquisition**, **topical authority architecture**, and **Generative Engine Optimization (GEO)** for AI-powered search engines.

---

## ✨ Key Features & Architecture

### 1. 🎬 Cinematic Dark Preloader
- High-FPS percentage rollup counter (`0% → 100%`) synchronized with a gradient progress bar.
- Staggered letter-by-letter typographic entrance.
- Smooth curtain-lift exit animation powered by Framer Motion.

### 2. 📱 3D Interactive Hero Section
- **3D Mouse Parallax Tilt:** The centerpiece mobile frame dynamically rotates in 3D space (`perspective: 1000px`) following mouse motion.
- **Live Status Indicator:** Radar sonar animation indicating project availability.
- **Floating Accent Cards:** Ambient floating quote and certification badges on continuous oscillating cycles.

### 3. ♾️ Infinite Ticker Tech Marquee
- Continuous smooth scrolling ribbon displaying core tools (*Ahrefs, Google Search Console, GA4, GEO, Schema Markup, Programmatic SEO*).
- Interactive hover pause and glowing badge expansion.

### 4. 🍱 Dark Bento Services Grid ("What I Build For You")
- High-contrast deep indigo/violet container with numbered bento cards (`01` - `04`).
- Interactive hover elevation, gradient glow borders, and step number zoom.
- Dedicated Generative Engine Optimization (GEO) highlight banner.

### 5. 🌐 Built Websites Showcase & SEO Case Studies
Interactive tab switcher featuring production web builds and search architectures:
- **[Nurah Initiative](https://nurahinitiative.com)** — Social impact & educational empowerment platform.
- **[Himmatkaar](https://himmatkaar.netlify.app)** — Youth leadership and community organization hub.
- **[Flafe](https://flafeoffcial.vercel.app)** — Modern brand & digital experience.
- **[Areeka Haq](https://areeka.vercel.app)** — Official portfolio for top Pakistani influencer and actress Areeka Haq.
- Plus detailed strategic SEO case breakdowns for SaaS, eCommerce, and B2B platforms.

### 6. 🎁 Partner Perks & Exclusive Tool Discounts
A curated directory of partner deals and referral discounts:
- **Hostinger:** Cloud & WordPress hosting discount with code `YAWARABBAS`.
- **RankyTools:** Group-buy SEO intelligence suite (Ahrefs, SEMrush, Moz).
- **Bolt.new:** In-browser AI fullstack web generator.
- **Lovable.dev:** Natural-language AI software development platform.
- **Replit:** Cloud IDE and collaborative autonomous AI agent environment.

### 7. ⏱️ 2026 Career & Work Experience Split Timeline
- Structured timeline displaying 2026 roles across Himmatkaar, Saafify, Azm Pakistan, and Misaq (Contract Completed).
- Impact metrics, key responsibilities, and skill chips.

### 8. 📬 Direct Inquiry & Contact Form
- **One-Click Copy Email:** Copy `yaawarabbass@gmail.com` with animated clipboard feedback.
- **Direct Submission:** FormSubmit AJAX integration sending messages directly to `yaawarabbass@gmail.com` with mailto fallback.

### 9. 🎨 Signature Footer
- Magnetic circular *"Book Call ↗"* action button.
- Massive typographic watermark signature branding.
- Quick navigation, social hubs, and smooth back-to-top scrolling.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 14](https://nextjs.org/)** | App Router, Server-Side Rendering & Static Generation |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety and robust data structures |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first responsive design & custom glassmorphism |
| **[Framer Motion](https://www.framer.com/motion/)** | High-performance 60fps animations & scroll triggers |
| **[Lucide React](https://lucide.dev/)** | Modern, lightweight icon suite |
| **[PostCSS / Autoprefixer](https://postcss.org/)** | CSS vendor prefixing and bundling |

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styling, keyframes, and glassmorphic classes
│   ├── layout.tsx           # SEO metadata, OpenGraph, JsonLd & Google Fonts
│   ├── page.tsx             # Home page assembling all sections
│   ├── robots.ts            # Dynamic robots.txt generation
│   └── sitemap.ts           # Dynamic XML sitemap generation
├── components/
│   ├── Navbar.tsx           # Floating capsule glassmorphic navigation bar
│   ├── Preloader.tsx        # Cinematic dark opening screen with live counter
│   ├── TechMarquee.tsx      # Infinite horizontal tools ribbon
│   ├── Footer.tsx           # Signature dark footer with watermark & socials
│   ├── sections/
│   │   ├── HeroSection.tsx        # 3D interactive phone frame & greeting
│   │   ├── AboutSection.tsx       # Core strengths, bio matrix & animated counters
│   │   ├── ServicesSection.tsx    # Dark Bento grid ("What I build for you")
│   │   ├── ExpertiseSection.tsx   # Categorized skills & tools ("My tech stack")
│   │   ├── ExperienceSection.tsx  # 2026 work timeline & contract status
│   │   ├── WorkSection.tsx        # Built websites & SEO case studies
│   │   ├── AffiliatesSection.tsx  # Partner discounts & referral tools
│   │   ├── ApproachSection.tsx    # 4-step strategic growth framework
│   │   └── ContactSection.tsx     # Direct message form & social hub
│   └── ui/
│       ├── AnimatedCounter.tsx    # Scroll-triggered dynamic number rollups
│       ├── MotionWrapper.tsx      # Declarative Framer Motion triggers
│       ├── Badge.tsx              # Reusable pill badge
│       ├── Button.tsx             # Standardized CTA button
│       └── Card.tsx               # Glass & modern card container
├── data/
│   ├── siteData.ts          # Central configuration, URLs, built sites, & affiliates
│   ├── experience.ts        # 2026 career roles & responsibilities
│   ├── expertise.ts         # Technical SEO & GEO skill categories
│   ├── services.ts          # Service blueprints & deliverables
│   └── approach.ts          # 4-step methodology breakdown
└── public/
    └── images/              # Avatar, SVG assets, and icons
```

---

## ⚡ Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/yawarabbassss/Yawar-Abbas.git
cd Yawar-Abbas
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🌐 Connect with Yawar Abbas

- **Strategy Call:** [Book on Calendly](https://calendly.com/yawar-abbas/seo-growth-strategy-call)
- **LinkedIn:** [linkedin.com/in/yawar-abbass](https://linkedin.com/in/yawar-abbass)
- **YouTube:** [@yawarabbas.official](https://www.youtube.com/@yawarabbas.official)
- **Newsletter:** [The Search Visibility Playbook](https://www.linkedin.com/newsletters/the-search-visibility-playbook-7493743068144271361) (Bi-weekly)
- **GitHub:** [github.com/yawarabassss](https://github.com/yawarabassss)
- **Linktree:** [linktr.ee/yawarabbas](https://linktr.ee/yawarabbas)
- **Email:** [yaawarabbass@gmail.com](mailto:yaawarabbass@gmail.com)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
