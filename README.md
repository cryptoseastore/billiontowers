# Billion Towers Website

Frontend-only static website for [billiontowers.com](https://billiontowers.com), built with Next.js 14 and Tailwind CSS.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about/` | About Us & Team |
| `/contact/` | Contact form |
| `/for-investors/` | Invest |
| `/for-developers/` | Developers |
| `/for-partners/` | Partners |
| `/bt-usd/` | BT-USD stablecoin |
| `/roadmap/` | Product roadmap |
| `/privacy-policy/` | Privacy & disclaimer |

**Note:** News/Blog (`/insights/`) is intentionally excluded.

## Tech Stack

- Next.js 14 (App Router, static export)
- TypeScript
- Tailwind CSS
- Formspree (contact form)

## Getting Started

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_FORMSPREE_ID in .env.local
npm run dev
```

## Contact Form Setup

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form with recipient `info@billiontowers.com`
3. Copy the form ID into `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID`

The form includes client-side validation and a honeypot spam field.

## Download Images

Images are stored in `/public/images/`. To re-download from source:

```bash
node scripts/download-images.mjs
```

## Build & Deploy

```bash
npm run build    # outputs to /out — deploy to Vercel, Netlify, or Cloudflare Pages
```

For Vercel, connect the repo — no special config needed. For static hosts, deploy the `out/` folder.

## Rebranding

All content uses Billion Towers branding:
- Open Clear Capital → Billion Towers
- OCC → BT
- OCC-USD → BT-USD
- OCC Vault → BT Vault
- OCC Launchpad → BT Launchpad
