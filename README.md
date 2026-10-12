# ProductFlix V1

Interactive personal portfolio prototype for Chirag Kochar.

## What's included
- Cinematic ProductFlix homepage
- Visitor-mode personalization that reorders shelves
- Search overlay
- Quick-view project modals
- "My List" interaction
- Responsive layout
- CK Labs and Beyond Product shelves
- Full Doc Verify case-study page with scroll storytelling, product strategy, conceptual product UI, rollout, and impact sections

## Run locally
Open `index.html` directly in a browser, or serve the folder with any static server.

Example:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Current routing
- `index.html` — ProductFlix homepage
- `doc-verify.html` — Doc Verify full case study

The other projects currently use quick-view modals and can be promoted into full case studies using the DOC page as the template.


## Decision Simulator
Open `decision-simulator.html` for the playable 4-round product strategy simulation. It is linked from the “You’re the PM” card and quick-view modal on the homepage.

## Interactive experiences
- `decision-simulator.html` — choose-your-own product strategy simulator.
- `ai-product-copilot.html` — assumption challenge prototype that interrogates evidence and forces a testable reframe. V1 uses a local heuristic engine and is explicitly labeled as such; it can later be swapped for a secure LLM-backed endpoint.


## New in this iteration
- Added **If I Were PM for ChatGPT Memory** as Episode 01 of the Product Strategy Series.
- Added an interactive trust challenge and a clickable **Memory Receipts** concept prototype.
- Wired the homepage “If I Were PM For…” card directly into the new strategy episode.


## Product Teardowns
- `netflix-teardown.html` — Episode 01: **Why We Keep Scrolling — and Why ProductFlix Works This Way**. Interactive teardown of rows, ranking, progressive disclosure, personalization, feedback loops, and the specific Netflix patterns ProductFlix borrows, adapts, or rejects.

## New in this release
- Added a full Accounting & Vendor Payments case study: `accounting-payments.html`
- Wired the `$180M MOVES HERE` homepage card and quick-view CTA into the new case study
- Added a distinct financial-infrastructure visual system via `accounting.css`

## Latest update — Title Automation
- Added `title-automation.html` as a full flagship case study.
- Updated projected annual savings to **$1.5M**, centered on search + keying automation.
- Promoted Title Automation to the homepage featured hero.
- Wired the Title Automation poster/modal to the new case study.
- Kept provider names, proprietary platforms, rules and sensitive implementation details abstracted for public portfolio use.


## New in this iteration
- Product Journey: Systems → Transactions → Platforms → AI
- Publicis Reservation System / Travel & Hospitality professional story
- Capgemini Digital Manufacturing / IIoT professional story
- The Receipts section for awards, certifications, and education

Award labels are intentionally conservative until exact public-facing award titles are finalized.

## Added: Earlier Chapters / Across Industries
- `publicis-reservation.html` — concise episode on reservation, checkout and payment journeys in Travel & Hospitality.
- `capgemini-iiot.html` — concise episode on MES, IIoT and global digital manufacturing transformation across 50+ plants.
- Homepage career shelf reframed as **Across Industries** so earlier experience reads as product breadth rather than a footnote.

- `assay.html` — Assay personal build story (hands-on 0→1 artifact)

## Receipts
`receipts.html` is the dedicated awards, certifications and education page. It names verified recognitions (PCG All Star, You Make It Happen, Customer Hero), keeps the third Publicis recognition explicitly unverified by title, and includes AWS Cloud Practitioner, SAFe POPM, Lean Six Sigma Green Belt, CMU, IIM Udaipur, and B.E. Mechanical Engineering.

## Beyond Product — personal layer
- `through-my-lens.html` — photography-first visual story; art-directed placeholders ready to be replaced with Chirag's photographs.
- `passport-mode.html` — travel philosophy and episode-style travel storytelling.
- `game-on.html` — badminton/sports personality story.
- `life.css` — shared visual system for the personal layer.


## Personal layer update
- Added `worth-the-calories.html` for food / chai / cooking stories.
- Added `in-front-of-the-lens.html` for portraits and style.
- Wired both homepage life cards into their pages.
- Reduced Publicis receipts to the two verified/currently selected awards.
- Personal pages are designed to accept curated Instagram/camera-roll assets later without layout changes.

## Personal media integration (Oct 2026)
The Beyond Product layer now uses Chirag's real photos and selected muted video loops instead of art-directed placeholders.

- Through My Lens: curated city, weather, horizon and in-transit photography.
- Passport Mode: real travel portraits plus Niagara and Pittsburgh motion loops.
- In Front of the Lens: curated portrait/editorial gallery.
- Worth the Calories: real food, chai and comfort-food photography.
- Game On: cycling/pool photography plus table-tennis and stadium motion clips.
- Homepage Beyond Product shelf and About section now use real media.

All video loops are muted and compressed for web use. Images remain local to the static site; there are no third-party media embeds.
