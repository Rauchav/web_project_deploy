# Image Replacement Guide

Images to generate in [Magnific](https://magnific.com) for the AI automation agency repositioning.

**How to replace:** every file listed already exists in the project. Generate the image, then overwrite the file **with the exact same name and extension**. No code changes needed.

Files marked **NEW** are temporary copies of other images (so the site builds). Until replaced, some visuals appear duplicated.

---

## Style suffixes

**Style suffix A**: append to every prompt marked **A**:

> pure #000000 black background, no gradient, subject centered with generous empty black negative space so the edges fade into black, cinematic neon glow in cyan, magenta and golden yellow #fcb514, subtle starfield, ultra-detailed 3D render, no text, no logos, no watermark

**Style suffix B**: append to every service-button prompt:

> glossy 3D clay-style icon, golden yellow #fcb514 body with matte black and light grey details, three-quarter isometric view, soft studio lighting, isolated on a plain background, no text

After generating a **B** image, remove the background (the current buttons are transparent PNGs).

---

## 1. Home page service sections

Folder: `src/assets/images/elements/`. Size: 960×1080 (portrait, use 4:5). Used in `src/pages/Home.jsx`.

| File | Section | Prompt |
|---|---|---|
| `digital-marketing.png` | AI Marketing Automation | A glowing holographic AI agent core floating in space, with neon data streams pulling lead cards, email envelopes, chat bubbles and ad icons into a funnel that ends in a glowing calendar booking. **A** |
| `ai-ecommerce.png` **NEW** | AI E-commerce Automation | A futuristic glowing shopping cart made of light circuits, with product boxes floating into it on neon conveyor beams, a holographic checkout screen and small robotic arms packing parcels. **A** |
| `content-creation.png` | AI Content Creation | A floating AI creative engine: one glowing prism splitting a beam of light into a photo frame, a film clapperboard, a sound waveform, an animation keyframe strip and a wireframe 3D cube. **A** |
| `web-development.png` | Custom AI Web Products | A sleek laptop and smartphone projecting a holographic web app interface with dashboards, connected by glowing circuit lines to small AI node icons, and a tiny rocket launching from the screen. **A** |

---

## 2. Services page menu buttons

Folder: `src/assets/images/elements/`. Size: landscape 3:2 (current files are 3456×2234). Used in `src/pages/Services.jsx`.

| File | Button | Prompt |
|---|---|---|
| `digital-marketing-button.png` | AI Marketing Automation | A megaphone merged with a small robot head and chat bubbles. **B** |
| `ai-ecommerce-button.png` **NEW** | AI E-commerce Automation | A shopping bag with a glowing AI chip badge and a small sparkle. **B** |
| `content-creation-button.png` | AI Content Creation | A camera, a music note and a 3D cube stacked together, with an AI sparkle. **B** |
| `web-development-button.png` | Custom AI Web Products | A laptop showing code brackets, with a small AI chip plugged into the side. **B** |

---

## 3. Services page tabs

Folder: `src/assets/images/services/`. Size: landscape 3:2. Use suffix **A** on every prompt. Used in `src/data/servicesData.js`.

### AI Marketing Automation

| File | Tab | Prompt |
|---|---|---|
| `digital-marketing/ai-automtions.png` | AI Lead & Sales Agents | A friendly holographic AI agent avatar answering several floating chat windows (WhatsApp-style, Instagram-style, email) at once, with a lead score meter rising. **A** |
| `digital-marketing/paid-ads.png` | AI-Powered Paid Ads | Floating ad creatives in grid formation, with a neon AI optimizer beam boosting the winning ad upward while others dim, and rising ROAS graph lines. **A** |
| `digital-marketing/email-marketing.png` | AI Email Marketing | Glowing envelopes flying along branching neon automation paths, with each branch personalizing the envelope color. **A** |
| `digital-marketing/crm-management.png` | CRM & Pipeline Automation | A holographic CRM pipeline board with deal cards moving automatically between columns, and robotic light threads updating contacts. **A** |
| `digital-marketing/seo-aeo.png` | SEO, AEO & GEO | A glowing search bar and an AI chat answer bubble side by side, both pointing to one highlighted website card at the top. **A** |

### AI E-commerce Automation

| File | Tab | Prompt |
|---|---|---|
| `ai-ecommerce/ai-store-development.png` | AI-Ready Store Development | A holographic online storefront with product cards and a checkout button, built from glowing modular blocks. **A** |
| `ai-ecommerce/ai-shopping-assistant.png` **NEW** | AI Shopping Assistants & Support | An AI assistant orb inside a phone chat recommending three floating product cards to a shopper's hand. **A** |
| `ai-ecommerce/catalog-automation.png` **NEW** | Product Catalog Automation | Endless rows of product cards being written and photographed by beams of light from an AI core, flowing out to marketplace icons. **A** |
| `ai-ecommerce/cart-recovery.png` **NEW** | Cart Recovery & Retention | An abandoned shopping cart being pulled back toward a checkout portal by a glowing notification tether. **A** |
| `ai-ecommerce/order-automation.png` **NEW** | Order & Inventory Automation | Automated neon conveyor belts with parcels, an inventory shelf, invoice sheets and a delivery truck, all connected by a glowing workflow line. **A** |

### AI Content Creation

| File | Tab | Prompt |
|---|---|---|
| `content-creation/graphic-design.png` | AI Images & Ad Creatives | An AI brush made of light painting multiple ad creatives and product photos at once on floating canvases. **A** |
| `content-creation/video-production.png` | AI Video Production | A holographic video timeline with vertical short-form clips playing, and an AI spark generating new frames. **A** |
| `content-creation/ai-voice-audio.png` **NEW** | AI Voice & Audio | A glowing studio microphone emitting colorful multilingual sound waves that turn into speech bubbles. **A** |
| `content-creation/animation.png` | AI Animation & Motion | A character silhouette in successive motion keyframes, connected by neon motion paths and bezier curves. **A** |
| `content-creation/3d-modeling.png` | AI 3D Modeling | A sneaker turning from a 2D photo into a wireframe, then into a photoreal 3D model, across three stages. **A** |

### Custom AI Web Products

| File | Tab | Prompt |
|---|---|---|
| `web-development/uiux-design.png` | AI-Ready Websites | A high-converting website on a floating monitor, with a small AI chat widget glowing in the corner. **A** |
| `web-development/webapp-dev.jpeg` | Web & Mobile Apps | A laptop, tablet and phone showing the same app interface with AI search and recommendation panels. **A** Save as `.jpeg`. |
| `web-development/custom-software.png` | Custom AI Tools & SaaS | A glowing AI copilot sidebar beside a business document, a quote generator and a knowledge base. **A** |
| `web-development/dashboards-portals.png` **NEW** | Dashboards & Client Portals | A large holographic dashboard with live charts, KPIs and a client portal login panel. **A** |
| `web-development/ai-integrations.png` **NEW** | AI Integrations & Workflows | Tool icons as glowing nodes (CRM, store, email, spreadsheet) linked by neon workflow lines to a central AI brain chip. **A** |

---

## 4. Optional

| File | Purpose | Prompt |
|---|---|---|
| `public/og-image.png` (1200×630) | Preview shown when the site is shared | The Deploy Studio logo in space, with the headline "AI Automation Agency". **A** (this one may contain text). |

## Unused images (safe to delete)

- `src/assets/images/services/content-creation/digital-illustration.png`
- `src/assets/images/services/web-development/e-commerce.png`

## Checklist

- [ ] Home sections (4)
- [ ] Service buttons (4)
- [ ] AI Marketing tabs (5)
- [ ] AI E-commerce tabs (5)
- [ ] AI Content tabs (5)
- [ ] Custom Web tabs (5)
- [ ] OG image (optional)
- [ ] Run `npm run build` to confirm everything still builds
