# Yawar Abbas — SEO Specialist Portfolio Website

A premium, modern, highly interactive production-quality personal brand website for **Yawar Abbas**, an SEO Specialist based in Punjab, Pakistan.

This website positions Yawar Abbas as a serious SEO professional who understands search engine optimization as a business-growth function rather than simply a rankings exercise.

---

## 🚀 Technology Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a curated brand palette:
  - Deep Emerald Green (`#0F3D2E`): Dark section backgrounds, headings, contrast panels, footer
  - Emerald Green (`#1DBF73`): Primary CTAs, highlights, hover states, icons
  - Soft Mint (`#D1FAE5`): Highlight cards, tags, subtle accents
  - Light Grey (`#F5F5F5`): Section backgrounds
  - White (`#FFFFFF`): Primary page background
- **Animation & Micro-interactions**: [Framer Motion](https://www.framer.com/motion/) & Tailwind CSS keyframe animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Data**: Next.js Metadata API, JSON-LD Person & WebSite Schemas, `sitemap.ts`, `robots.ts`

---

## 📁 Project Architecture

```
Yawar Abbas/
├── app/
│   ├── globals.css         # Global Tailwind directives & custom CSS
│   ├── layout.tsx          # Root layout with Google Fonts, metadata & JSON-LD
│   ├── page.tsx            # Main portfolio single-page application
│   ├── robots.ts           # Dynamic robots.txt generation
│   └── sitemap.ts          # Dynamic sitemap.xml generation
├── components/
│   ├── CanvasBackground.tsx# Interactive HTML5 Canvas fallback for hero background
│   ├── Footer.tsx          # Deep Emerald contrast footer with social profiles & quick links
│   ├── JsonLd.tsx          # Structured schema markup (Person & WebSite)
│   ├── Navbar.tsx          # Glassmorphic sticky header with mobile drawer
│   ├── sections/
│   │   ├── AboutSection.tsx      # Growth philosophy, 3-stage process & audience focus
│   │   ├── ApproachSection.tsx   # 7-Step "How I Approach SEO" interactive journey
│   │   ├── ContactSection.tsx    # Calendly booking CTA, Email, Socials & Inquiry form
│   │   ├── ExperienceSection.tsx # Career history (Himmatkaar, Misaq, Saafify, Azm Pakistan)
│   │   ├── ExpertiseSection.tsx  # Categorized skill matrix with interactive filter
│   │   ├── HeroSection.tsx       # Dynamic video/canvas hero, headline & editorial frame
│   │   ├── ServicesSection.tsx   # Categorized high-value SEO services matrix
│   │   └── WorkSection.tsx       # Truthful case studies coming soon & preview architecture
│   └── ui/
│       ├── Badge.tsx       # Tag primitive component
│       ├── Button.tsx      # Multi-variant CTA button primitive
│       └── Card.tsx        # Card container primitive with hover effects
├── data/
│   ├── approach.ts         # 7-Step methodology content
│   ├── experience.ts       # Factual career experience entries
│   ├── expertise.ts        # Skills and competencies matrix
│   ├── services.ts         # Service categories and descriptions
│   └── siteData.ts         # Central site data, URLs, copy & metadata
├── public/
│   ├── images/
│   │   └── yawar-abbas.svg # Editorial portrait photo placeholder
│   └── media/
│       └── hero-video.mp4  # Hero background video asset location
├── types/
│   └── index.ts            # TypeScript interfaces
├── .env.example            # Environment variables example
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies & scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Custom Tailwind theme setup
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or yarn / pnpm

### Installation

1. **Clone or navigate to project directory**:
   ```bash
   cd "c:\laragon\www\Yawar Abbas"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## 🎨 Content & Asset Replacement Guide

All personal brand data, links, copy, and file paths are centralized in `data/siteData.ts` for zero-friction updates:

### 1. Replace Profile Photo
Place your high-resolution portrait photograph in:
```
/public/images/yawar-abbas.png (or .jpg / .webp)
```
Then update `data/siteData.ts`:
```ts
avatarUrl: "/images/yawar-abbas.png"
```

### 2. Replace Hero Background Video
Place your subtle abstract motion video in:
```
/public/media/hero-video.mp4
```
*(If video is omitted or fails to load, the site automatically renders an ambient interactive Canvas data network background).*

### 3. Update Calendly URL
Update `data/siteData.ts`:
```ts
urls: {
  calendly: "https://calendly.com/yaawarch/seo-growth-strategy-call",
}
```

### 4. Update Email & Social Profiles
Update `data/siteData.ts`:
```ts
personal: {
  email: "yaawarabbass@gmail.com",
},
urls: {
  linkedin: "https://linkedin.com/in/yawar-abbass",
  instagram: "https://instagram.com/yawarabbassss",
  facebook: "https://facebook.com/yawarabbassss",
}
```

### 5. Attach Downloadable Resume / CV
Place your PDF resume file in:
```
/public/yawar-abbas-cv.pdf
```

### 6. Update Services
Edit `data/services.ts` to add, remove, or refine service offerings, categories, and descriptions.

### 7. Add Future Case Studies
Edit `data/siteData.ts` or add project records in `types/index.ts` to activate published case studies in `components/sections/WorkSection.tsx`.

---

## 🌐 Deploying to Vercel

The repository is 100% Vercel ready:

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Yawar Abbas SEO Portfolio"
   git remote add origin https://github.com/<your-username>/yawar-abbas-portfolio.git
   git push -u origin main
   ```

2. Log into [Vercel](https://vercel.com).
3. Click **"Add New"** → **"Project"**.
4. Import your GitHub repository `yawar-abbas-portfolio`.
5. Select framework preset: **Next.js**.
6. Click **"Deploy"**. Vercel will automatically build and publish your site with SSL, global CDN distribution, and optimized asset delivery.

---

## 🔒 License & Copyright
© Yawar Abbas. All rights reserved. Professional Portfolio Site.
