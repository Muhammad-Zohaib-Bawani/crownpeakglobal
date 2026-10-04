# Crown Peak Global — Website Rules

Hard rules for this site. Any new page or component must follow them.

## 1. No physical address anywhere

- No street address, suite number, city, postal code, or office list.
- No "Our Offices" section, no map, no embedded Google Maps iframe.
- Countries may be mentioned only as *coverage* ("Serving clients across the United Kingdom"), never as an address.

## 2. One phone number, via `lib/site.js` only

- The only number is `site.phone` (+44 7400 759644), linked as `site.tel` / `site.whatsapp`.
- Allowed: footer, contact box, and one floating WhatsApp button (bottom-right, in `app/layout.jsx`).
- No phone field in any form. No fax, no Skype.

## 3. Contact happens through one contact box only

- The contact form is the primary channel; phone and WhatsApp (§2) are the only others.
- Fields: **Name**, **Email**, **Company** (optional), **Service** (select), **Message**. Nothing else.
- Submitting the form sends an email to the inbox in `CONTACT_TO_EMAIL`; the visitor's email is set as `reply_to`.
- Public email addresses are **not** printed on the page — the form is the entry point.
- Same form component is reused everywhere (home CTA + `/contact`). No second variant.

## 4. Design language

- Reference: kreativehive.ca — dark canvas, single amber accent, generous spacing, rounded cards.
- Palette: black `#08090A`, surface `#111214`, hairline borders `rgba(255,255,255,.08)`, accent `#F9B515`, muted text `#A0A3A8`.
- Font: Arimo. Headings tight and large; uppercase eyebrow labels above each section.
- One accent colour only. No second brand colour, no gradients competing with the accent.
- Every section: eyebrow → headline → sub copy → content. Keep that rhythm.
- Motion is subtle: fade + 16px rise on scroll, once. No parallax, no auto-playing video.

## 5. Content

- No invented client names, no fake counters, no unverifiable awards.
- No pricing tables — Crown Peak Global scopes per project, so the CTA is always the contact box.
- Copy stays first person plural ("we"), short sentences.

## 6. Accessibility & tech

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page.
- All interactive elements keyboard reachable; visible focus ring in accent colour.
- Images have `alt`; decorative visuals `aria-hidden`.
- Stack: Next.js App Router + Tailwind v4 + framer-motion. No jQuery, no legacy vendor CSS.

## 7. Secrets

- `RESEND_API_KEY` and `CONTACT_TO_EMAIL` live in `.env.local` only. Never in client components, never committed.
