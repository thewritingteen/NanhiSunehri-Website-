# Nanhi Sunehri - Prelaunch Site

A golden start for every child's big moments.

Prelaunch landing page for **Nanhi Sunehri**, built by **ARSAGI INDIA PRIVATE LIMITED**
(CIN U66190OD2026PTC052539 - GSTIN 21ABECA8824G1ZW), founded by Arpan Agrawal.
The app is in development; this site explains the idea honestly and collects a launch list.

## Tech stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) 18
- [Tailwind CSS](https://tailwindcss.com) 3
- [Formspree](https://formspree.io) for the launch-list form (no backend needed)

## Theme

The site ships with two themes - the original cinematic dark, and a warm ivory
light theme. A small sun/moon toggle in the top-right of the nav switches
between them; the choice is remembered in the visitor's browser. Dark is the
default. To lock one theme for launch, remove the toggle button in
`src/components/Nav.jsx` and hard-code the choice in `src/App.jsx`.

## Project structure

```
src/
  App.jsx                  page composition, loader + scroll-reveal wiring
  index.css                Tailwind + the gold-on-dark design system
  components/
    Loader.jsx             shimmer intro loader
    Ambient.jsx            drifting glow orbs + grain
    Nav.jsx                fixed top nav
    Hero.jsx               hero with floating coins
    Problem.jsx            "why we're building this" cards
    Features.jsx           what it will do (all features tagged COMING) + concept-preview keepsake
    HowItWorks.jsx         the three steps
    About.jsx              company facts (CIN, GSTIN, founder, contact)
    LaunchForm.jsx         launch-list capture (name, email, phone, who you're saving for)
    Footer.jsx             contact + compliance footer
```

## Local development

```bash
npm install
npm run dev
```

Then open the printed URL (usually http://localhost:5173).

## Launch-list form (Formspree)

The form posts to a Formspree endpoint so submissions land in your inbox - no server required.

1. Create a free form at https://formspree.io (point it at director@nanhisunehri.com).
2. Copy `.env.example` to `.env` and paste your form URL:

   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-real-id
   ```

3. Restart `npm run dev`.

If the variable is unset, the form gracefully asks visitors to email
director@nanhisunehri.com instead of failing.

## Build

```bash
npm run build     # outputs static files to dist/
npm run preview   # serve the production build locally
```

## Deploy on Vercel

1. Push this repo to GitHub (already done if you're reading this there).
2. In Vercel: **Add New > Project > Import** this repository.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist` - the defaults are correct.
4. Add the environment variable **VITE_FORMSPREE_ENDPOINT** with your Formspree form URL
   (Project Settings > Environment Variables).
5. Deploy, then attach your domain (nanhisunehri.com) under Project Settings > Domains.

## A note on content

Everything on this page is deliberately true of a prelaunch company: no partner logos,
no testimonials, no insurance or custodian claims, no live gold rates. Features are
tagged COMING and the keepsake card is labeled a concept preview. Keep it that way
until each claim is real - it's the strongest trust signal the page has.

### Brand assets

The navigation and footer use the supplied baby-mobile artwork. `public/logo-light.png` and `public/logo-dark.png` are transparent 524 x 588 PNGs prepared from the supplied 232 x 169 JPEG; the dark variant recolors the dark ink to warm ivory while retaining gold details. `public/favicon-light.png` and `public/favicon-dark.png` are transparent 64 x 64 favicons. The theme toggle switches the visible brand image and favicon. Because the supplied JPEG is small and compressed, enlargement does not restore vector-sharp edges. Replace these PNGs with exports from original vector artwork if it becomes available.
