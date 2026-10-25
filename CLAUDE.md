# therapy-web

Website for **Branka Gajic, LCSW** — a private therapy practice based in Atlanta, GA offering individual therapy in person and via telehealth.

## Tech Stack

- **React 18** + **Vite 5** — component-based SPA
- **CSS Modules** (per-component `.css` files, no framework)
- Custom **Coolors** palette
  - Cerulean `#0081a7` · Tropical Teal `#00afb9` · Light Yellow `#fdfcdc` · Soft Apricot `#fed9b7` · Vibrant Coral `#f07167`
- Fonts: **Cormorant Garamond** (headings) + **Jost** (body) via Google Fonts

## Project Structure

```
branka/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx / Nav.css        # Fixed nav, mobile hamburger
│   │   ├── Hero.jsx / Hero.css      # Full-height landing section
│   │   ├── About.jsx / About.css    # Bio, credentials, quote
│   │   ├── Services.jsx / Services.css  # 6-card services grid
│   │   ├── Philosophy.jsx / Philosophy.css  # Approach + process steps
│   │   ├── Contact.jsx / Contact.css    # Contact form + details
│   │   └── Footer.jsx / Footer.css
│   ├── App.jsx                      # Root — renders the active tab page + scroll reveal
│   ├── usePage.js                   # Hash-based tab router (#/about, #/services, ...)
│   ├── main.jsx
│   └── index.css                    # CSS variables + global styles
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

```bash
# Install dependencies (must include devDependencies)
npm install --include=dev

# Start dev server (localhost)
npm run dev

# Start dev server (expose to local network / iPhone)
npm run dev -- --host

# Build for production
npm run build
```

## Viewing on iPhone

1. Ensure your iPhone is on the same WiFi as your Mac
2. Run `npm run dev -- --host`
3. Open `http://<your-mac-ip>:5173` in Safari

Your Mac's local IP: run `ipconfig getifaddr en0` to find it.

## Content Notes

- **Branka Gajic** is a Licensed Clinical Social Worker (LCSW) licensed in Georgia
- Former Staff Clinician at Emory University's Center for Counseling and Wellbeing
- Offers sessions **in person** (Atlanta, GA) and via **telehealth**
- Contact: (470) 567-6082

## Deployment

Recommended: [Netlify](https://netlify.com) or [Vercel](https://vercel.com)

```bash
npm run build
# Deploy the generated dist/ folder
```

## To-Do / Next Steps

- [ ] Add Branka's professional photo (replace `BG` placeholder in About)
- [ ] Connect contact form to backend (e.g. [Formspree](https://formspree.io) or EmailJS)
- [ ] Update contact email once private practice address is confirmed
- [ ] Add SEO meta tags / Open Graph image
- [ ] Set up custom domain
