# Kevin J T — Portfolio Website

A modern, responsive QA / Software Test Engineer portfolio built with **React 18**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ (check with `node -v`)
- npm v9+ or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere.

---

## 📁 Project Structure

```
kevin-portfolio/
├── public/
│   └── favicon.svg               # Custom bug-icon favicon
├── src/
│   ├── App.jsx                   # Root component — assembles all sections
│   ├── main.jsx                  # React DOM entry point
│   ├── index.css                 # Global styles, Tailwind imports, keyframes
│   ├── data/
│   │   └── portfolioData.js      # ★ All your content lives here — edit this!
│   ├── hooks/
│   │   └── useScrollReveal.js    # IntersectionObserver scroll animations
│   └── components/
│       ├── Navbar.jsx            # Sticky nav, active-section highlight, mobile menu
│       ├── Hero.jsx              # Typewriter tagline, stats, CTAs, social links
│       ├── About.jsx             # Summary, terminal card, highlights grid
│       ├── Skills.jsx            # Grouped skill badges + Currently Learning
│       ├── Projects.jsx          # Expandable project cards with metrics
│       ├── Timeline.jsx          # Vertical experience / education timeline
│       ├── Certifications.jsx    # Certification cards
│       ├── Contact.jsx           # Contact links + mailto form
│       └── Footer.jsx            # Footer with social links
├── index.html                    # HTML shell with meta tags + Google Fonts
├── package.json
├── tailwind.config.js            # Custom colors, fonts, animations
├── postcss.config.js
└── vite.config.js
```

---

## ✏️ Customising Your Content

**All portfolio content is stored in one file:**

```
src/data/portfolioData.js
```

Edit the following exported objects to update the site:

| Export | What it controls |
|---|---|
| `personalInfo` | Name, tagline, email, links, stats |
| `skillGroups` | Skill categories and badge lists |
| `projects` | Project cards, contributions, metrics |
| `timeline` | Experience / education timeline entries |
| `certifications` | Certification cards |
| `learningItems` | "Currently Learning" section |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#060C18` | Page background |
| `surface` | `#0B1221` | Section alternates |
| `card` | `#0F1A2E` | Card backgrounds |
| `border` | `#1A2840` | Card borders |
| `accent` | `#00E5A0` | Primary accent (electric mint) |
| `cyan` | `#22D3EE` | Secondary accent |
| `amber` | `#F59E0B` | Warning / certification |
| `heading` | `#E2E8F0` | Page headings |
| `body` | `#94A3B8` | Body text |
| `muted` | `#4A5A7A` | Subdued labels |

### Fonts

- **Space Mono** — monospace headings, labels, badges
- **Plus Jakarta Sans** — body text, descriptions

Both loaded from Google Fonts in `index.html`.

---

## 🌐 Deployment

### Vercel (Recommended — free)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### GitHub Pages

1. Install gh-pages: `npm i -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Add to `vite.config.js`: `base: '/your-repo-name/'`
4. Run: `npm run build && npm run deploy`

---

## 📋 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navbar with active section highlight
- ✅ Typewriter hero tagline animation
- ✅ Scroll-triggered reveal animations (IntersectionObserver)
- ✅ Expandable project cards with problem / solution / contributions
- ✅ Visual vertical timeline
- ✅ Dot-grid + gradient blob background textures
- ✅ Glowing accent borders and hover effects
- ✅ "Currently Learning: Playwright" section
- ✅ Mailto-powered contact form (no backend needed)
- ✅ SEO meta tags + Open Graph
- ✅ Custom SVG favicon
- ✅ Smooth scroll between all sections
- ✅ Custom scrollbar styling

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| Tailwind CSS | 3.4 | Utility-first styling |
| Vite | 5.4 | Build tool + dev server |
| Lucide React | 0.383 | Icon library |
| Framer Motion | 11 | (installed, extend as needed) |

---

## 📬 Contact

**Kevin J T** · kevinjt2004@gmail.com · [LinkedIn](https://linkedin.com/in/kevinjt2004)
