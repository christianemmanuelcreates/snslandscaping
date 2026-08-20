# S&S Landscaping

Premier landscaping & outdoor living in the San Francisco Metro Area.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (base-nova)
- **react-router-dom** (routing)
- **react-helmet-async** (SEO meta + JSON-LD)
- **next-themes** (dark mode)
- **lucide-react** (icons)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. The site is a static SPA — deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages).

## Project Structure

```
src/
├── components/       # Shell (Navbar, Footer, Layout, SEOHead, ThemeToggle) + ui/ (shadcn)
├── lib/              # Data layer (sns-data.ts, site.ts, utils.ts)
├── pages/            # 9 page templates (35 routes)
├── App.tsx           # All routes
├── index.css         # Theme tokens (green-earth, light + dark)
└── main.tsx          # Entry + ThemeProvider
public/
├── _redirects        # SPA fallback (Cloudflare/Netlify)
├── 404.html
├── sitemap.xml       # 35 routes
├── robots.txt
└── llms.txt          # AI/LLM discoverability (AEO)
```

## Pages (35 routes)

- **Global (6):** Home, Services, About, Gallery, Reviews, Contact
- **Services (5):** Landscaping & Planting, Hardscaping, Site Preparation, Irrigation & Drainage, Outdoor Amenities
- **Areas (6):** Saratoga, Palo Alto, Los Altos Hills, Atherton, Hillsborough, Belvedere
- **Matrix (18):** 3 core services × 6 areas (e.g. "Hardscaping in Saratoga, CA")

## SEO / AEO

- LocalBusiness + geo schema on all 6 area pages
- Service + `areaServed` schema on all 18 matrix pages
- Sitemap (35 routes), robots.txt (AI crawlers allowed), llms.txt

## Business

- **Name:** S&S Landscaping
- **License:** LIC 100-7487
- **Contact:** Samuel Delgado (209-979-6677) · Santos Gomez (408-391-1591)
- **Email:** services@snslandscaping.org