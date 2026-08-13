# Brand Analysis: CTK GmbH — ERP System Landing Page

> Analysis created 2026-08-13 for page remake project

## Source
- **Figma:** https://www.figma.com/design/Ni6CUXW0XxTWzbWwUBeiCd/CTK-GmbH---ERP-System?node-id=1846-3&m=dev
- **Screenshots:** public/references/{header,hero,challenges,solution,process,technical,whyctk,references,contact,footer}.png

## Remake Approach
- **Selected:** Same Brand, Fresh Build
- **Font Handling:** Match exactly — Inter is used throughout the design (weights 400–800)
- **Color Handling:** Match palette (blue / green / slate) — CSS variables carry the exact hex values
- **Layout Handling:** Preserve structure and content, but rebuild decorative elements (dot patterns, wavy line motifs) as simplified CSS/SVG rather than pixel-for-pixel vector recreation

## Brand Overview

### Inferred Business Type
CTK GmbH is an IT consultancy and certified mesonic WinLine implementation partner. They sell ERP consulting, customization, and long-term support to small/medium German businesses (Mittelstand), not the ERP software itself.

### Target Audience
Owners/decision-makers at German SMEs currently running fragmented systems (spreadsheets, disconnected tools, tribal knowledge) who need an ERP consolidation but don't want an off-the-shelf, one-size-fits-all vendor relationship.

### Brand Personality
- **Tone:** Formal, technical, consultative — direct German B2B copy, no fluff
- **Energy:** Calm, understated, competent
- **Feel:** Trustworthy, established, premium-but-accessible (not enterprise-cold)
- **Style:** Modern corporate — clean cards, soft shadows, rounded corners, generous whitespace

## Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Primary (brand blue) | `#006BB0` | Icons, links, tab underline |
| Primary dark | `#005B96` | Primary CTA buttons, dark section backgrounds |
| Ink / heading text | `#0F172A` | Slate-900, headings on light backgrounds |
| Body text | `#334155` / `#64748B` | Slate-600/500, paragraph copy |
| Border / divider | `#E2E8F0` | Slate-200, card borders |
| Surface alt | `#F8FAFC` / `#F1F5F9` | Slate-50/100, card backgrounds |
| Accent (CTK green) | `#96C11F` | Checkmarks, italic emphasis, highlighted cards, stat numbers |
| Accent green light | `#F5F9E9` / `#EAF3D2` | Highlighted card backgrounds |
| Accent green dark | `#3C4D0C` / `#536A11` | Green text-on-light contexts |
| Error/warning red | `#EF4444` | Challenge-card icon accents |
| Info sky blue | `#0EA5E9` / `#38BDF8` | Secondary icon accents (technical section) |
| White | `#FFFFFF` | Cards on dark backgrounds, text on dark |

### Color Notes
Two custom gradient tokens exist in the file ("CTK Verlauf Radial", "CTK Verlauf Linear", "CTK Verlauf light") used for the hero's radial glow and the dark section backgrounds (Challenges, Process, Technical Basis, Footer) — rebuilt as CSS gradients rather than exact Figma gradient stops.

## Typography

### Font
- **Family:** Inter (Google Font), weights 400/500/600/700/800
- **Headings:** Bold (700), tight tracking (e.g. 44px/-0.88 letter-spacing for H2, 24px/-0.48 for H3)
- **Body:** Regular (400)/Medium(500), generous line-height (~1.4–1.6)
- Emphasis spans within headlines use italic + brand green (e.g. hero's "nicht umgekehrt.")

### Hierarchy
- H1/H2: 44px bold, tight tracking
- H3: 24px bold
- H4/H5: 15–18px semibold/bold
- Eyebrow labels: 12–14px, uppercase, semibold, wide letter-spacing, often paired with a small colored vertical bar

## Section-by-Section Breakdown

### 1. Header Navigation
- Logo mark ("CTK" in blue circle) + wordmark "IT-Lösungen und Service"
- Nav: Herausforderungen · Vorteile · Vorgehen · mesonic WinLine · Warum CTK · Referenzen
- Light/dark mode toggle (sun/moon icon)
- Primary CTA: "Termin vereinbaren"

### 2. Hero Section
- Badge: "NEU · CTK BUSINESS SOFTWARE"
- H1: "ERP, das sich Ihren Prozessen anpasst – *nicht umgekehrt.*" (last clause italic, green)
- Subhead: "ERP-Beratung und Einführung für mittelständische Unternehmen"
- 3 checkmark trust points: Mehr Transparenz / Effizientere Abläufe / Weniger Aufwand
- CTAs: primary "Jetzt unverbindlich beraten lassen", secondary outline "Unser Vorgehen ansehen"
- Right: isometric laptop illustration with code/chart overlay
- Background: radial glow + dot pattern

### 3. Challenges Section
- Dark blue background
- Eyebrow: "HÄUFIGE HÜRDEN IM MITTELSTAND" · H2: "Kommen Ihnen diese Herausforderungen bekannt vor?"
- 6-card grid (5 problems + 1 highlighted insight):
  1. System-Wildwuchs
  2. Excel-Behelfslösungen
  3. Inselwissen
  4. Blinder Flug
  5. Systemgrenzen
  6. "Unsere Erfahrung:" (green-highlighted, no icon-red) — reframes the problem as CTK's insight

### 4. Solution / Benefits Section
- Eyebrow: "LÖSUNGSANSATZ & PHILOSOPHIE" · H2: "ERP mit Verständnis für Ihr Business"
- Left: team photo + intro paragraph
- Right: green-bordered card "Ihre Vorteile mit CTK" — 4 checked benefits (Individuelle Beratung statt Standard, Prozess- und Digitalisierungskompetenz, IT/Software & Entwicklung aus einer Hand, Persönliche Betreuung)

### 5. Process Section
- Eyebrow: "DER WEG ZUM ERFOLG" · H2: "Unser Vorgehen"
- 5-step vertical zigzag timeline alternating left/right around a center line: Verstehen → Konzipieren → Implementieren → Optimieren → Begleiten
- CTA button: "Unverbindliches Beratungsgespräch vereinbaren"

### 6. Technical Basis Section (mesonic WinLine)
- Dark background
- Eyebrow: "DIE TECHNISCHE BASIS" · H2: "mesonic WinLine"
- Intro paragraph naming mesonic WinLine as the core platform
- 7 module cards: Warenwirtschaft, Einkauf & Vertrieb, CRM, Produktion, Finanzbuchhaltung, Controlling, Dokumentenmanagement
- "mesonic Zertifizierter Partner" badge + dark "Individuelle Anpassung" callout box

### 7. Why CTK Section
- Eyebrow: "WARUM CTK?" · H2: "Darum sollten Sie uns kennenlernen"
- Left: copy — "Viele Anbieter verkaufen ERP-Systeme. Viele Entwickler programmieren individuelle Anpassungen. **Wir verbinden beides.**"
- Right: dark blue card "Das zeichnet uns aus:" — 4 items with icons (Langjährige ERP-Erfahrung, Eigene Entwicklungsabteilung, Persönliche Ansprechpartner, Langfristige Betreuung)

### 8. References Section
- Eyebrow: "KUNDENSTIMMEN & ERFOLGE" · H2: "Unternehmen, die auf CTK vertrauen"
- Tab menu: Gernert / XL Carwash / Geratherm (icon + label, underline active state)
- Active panel: italic testimonial quote, project label, company name, 2 stat tiles (-50% Auftragsbearbeitungszeit, 100% Datenkonsistenz)

### 9. Contact Section
- Eyebrow: "KONTAKT" · H2: "Lassen Sie uns über Ihre Prozesse sprechen"
- Form: Ihr Name*, Unternehmen*, E-Mail-Adresse*, Ihre Nachricht/Anforderungen (textarea), submit CTA
- Right: dark blue rep card — photo, "David Werner / Vertrieb Business Software", email, phone, address, "Antwort meist innerhalb 24h" badge

### 10. Footer
- Dark blue background, dot pattern
- Logo + "BUSINESS SOFTWARE" + one-line tagline
- 3 columns: Navigation / Über CTK / Rechtliches
- Copyright + mesonic trademark note

## Visual Elements

### Images
- One real team photo (4 people in CTK-branded polos), one rep headshot
- One isometric illustration (laptop with code/chart)

### Icons
- Consistent line-icon style (outline, ~20-24px) for checkmarks, module icons, contact icons
- Circular numbered badges (1–5) for the process timeline

### Decorative Elements
- Dot-grid patterns on light and dark hero/footer backgrounds
- Thin wavy line motifs on dark sections (Challenges, Why CTK)
- Soft radial glow behind hero copy

## Messaging Analysis

### Key Headlines
- "ERP, das sich Ihren Prozessen anpasst – nicht umgekehrt." — core positioning: adapt the software to the business, not vice versa
- "Viele Anbieter verkaufen ERP-Systeme. Viele Entwickler programmieren individuelle Anpassungen. Wir verbinden beides." — the differentiation claim (consulting + dev in-house)

### Value Propositions
1. Individual consulting instead of a standardized rollout
2. In-house IT/software/development — no vendor hand-off friction
3. One dedicated contact person from analysis through post-go-live

### CTA Patterns
- **Primary:** "Jetzt unverbindlich beraten lassen" / "Termin vereinbaren" (low-commitment consultation language, repeated 3×)
- **Secondary:** "Unser Vorgehen ansehen" (in-page scroll to process)

## Improvement Opportunities

### What Works Well
- Strong, specific differentiation message (not generic "digital transformation" copy)
- Concrete social proof (named clients + hard stats, not vague testimonials)
- Low-friction CTA language throughout

### Areas for Improvement
- Decorative background vectors are extremely complex in Figma (hundreds of path nodes) — not worth pixel-matching; simplified CSS equivalents preserve the feel at a fraction of the weight
- Add real focus states / keyboard nav to the reference tab menu and form for accessibility
- Confirm real client logos/testimonial quotes are approved for reuse before shipping publicly

---

*This analysis guides the remake. Reference it during each section build.*
