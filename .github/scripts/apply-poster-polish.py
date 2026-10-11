from pathlib import Path
import re

# ---------- index.html ----------
p = Path('index.html')
html = p.read_text()

# Recruiter hero proof + cleaner CTA language
html = html.replace('<span>$180M+ transaction scale</span><i></i><span>8.5+ years</span><i></i><span>Enterprise → AI</span>', '<span>~9 years</span><i></i><span>$4.2M incremental bookings</span><i></i><span>0→1 AI products</span>')
html = html.replace('<span class="info">i</span> My Journey', '→ My Journey')
html = html.replace('Résumé', 'Resume')
html = html.replace('8.5+ years', '~9 years')
html = html.replace('8.5+ yrs', '~9 yrs')

# Hiring hero proof cards
html = html.replace('<div class="hiring-card hiring-card-a"><small>FINANCIAL PLATFORMS</small><strong>$180M+</strong><span>transaction scale</span></div>', '<div class="hiring-card hiring-card-a"><small>PRODUCT IMPACT</small><strong>$4.2M</strong><span>incremental bookings</span></div>')
html = html.replace('<div class="hiring-card hiring-card-c"><small>CAREER ARC</small><strong>Systems → AI</strong><span>8.5+ years</span></div>', '<div class="hiring-card hiring-card-c"><small>CAREER ARC</small><strong>Systems → AI</strong><span>~9 years</span></div>')

posters = {
    'accounting-payments': ('accounting-payments.webp', 'Accounting and vendor payments product poster', 'Accounting & Payments', 'Financial operations, reconciliation & payments'),
    'doc-verify': ('document-verification.webp', 'Document verification product poster', 'Document Verification', 'Rules, AI interpretation & human review'),
    'payments-checkout': ('payments-checkout.webp', 'Payments and checkout product poster', 'Payments & Checkout', '$4.2M incremental bookings · 40%→24% abandonment'),
    'title-automation': ('title-workflow-automation.webp', 'Title workflow automation product poster', 'Title Workflow Automation', 'One flow. Fewer handoffs.'),
    'assay': ('assay.webp', 'Assay AI document QC product poster', 'Assay', 'AI-assisted document QC · Live prototype'),
    'client-platform': ('client-platform.webp', 'Client platform product poster', 'Client Platform', 'Tracking, visibility & workflow clarity'),
}

for pid, (file, alt, title, sub) in posters.items():
    pattern = re.compile(r'<article class="poster[^>]*?data-id="' + re.escape(pid) + r'".*?</article>', re.S)
    match = pattern.search(html)
    if not match:
        raise RuntimeError(f'Poster card not found: {pid}')
    search_attr = re.search(r'data-search="([^"]*)"', match.group(0))
    search = search_attr.group(1) if search_attr else title
    replacement = f'''<article class="poster featured-poster" tabindex="0" data-id="{pid}" data-search="{search}">
            <div class="poster-art featured-poster-art"><img src="assets/posters/{file}" alt="{alt}" loading="lazy" decoding="async"></div>
            <div class="poster-caption"><strong>{title}</strong><span>{sub}</span></div>
          </article>'''
    html = html[:match.start()] + replacement + html[match.end():]

# Physically order the default recruiter shelf to avoid a pre-JS layout flash.
work_match = re.search(r'(<div class="poster-row poster-row-tall" id="workRow">)(.*?)(\n\s*</div>\n\s*</section>)', html, re.S)
if not work_match:
    raise RuntimeError('Featured Work row not found')
body = work_match.group(2)
order = ['accounting-payments','doc-verify','payments-checkout','title-automation','assay','client-platform']
cards = {}
for pid in order:
    m = re.search(r'<article class="poster featured-poster"[^>]*data-id="' + re.escape(pid) + r'".*?</article>', body, re.S)
    if not m:
        raise RuntimeError(f'Reordered card not found: {pid}')
    cards[pid] = m.group(0)
new_body = '\n          ' + '\n\n          '.join(cards[pid] for pid in order)
html = html[:work_match.start(2)] + new_body + html[work_match.end(2):]
p.write_text(html)

# ---------- app.js ----------
p = Path('app.js')
js = p.read_text()
js = js.replace('8.5+ yrs', '~9 yrs').replace('8.5+ years', '~9 years')
js = js.replace('metrics:["$180M+ transaction scale","~9 years","Enterprise → AI"]', 'metrics:["~9 years","$4.2M incremental bookings","0→1 AI products"]')
js = js.replace('secondary:["i My Journey","product-journey.html"]', 'secondary:["→ My Journey","product-journey.html"]')
js = js.replace('workOrder:["accounting-payments","doc-verify","title-automation","assay","payments-checkout","client-platform"]', 'workOrder:["accounting-payments","doc-verify","payments-checkout","title-automation","assay","client-platform"]', 1)
p.write_text(js)

# ---------- resume + journey ----------
for name in ['resume.html','product-journey.html']:
    p = Path(name)
    if p.exists():
        s = p.read_text().replace('Résumé','Resume').replace('8.5+ years','~9 years').replace('8.5+ yrs','~9 yrs')
        p.write_text(s)

# ---------- Featured Work visual system ----------
p = Path('styles.css')
css = p.read_text()
marker = '/* FEATURED_WORK_POSTERS_V2 */'
if marker not in css:
    css += r'''

/* FEATURED_WORK_POSTERS_V2 */
.poster-row-tall{gap:16px;padding-top:5px;padding-bottom:18px}
.poster-row-tall .featured-poster{
  flex:0 0 clamp(330px,31vw,440px);
  aspect-ratio:1.55;
  border-radius:14px;
  transition:transform .28s cubic-bezier(.2,.8,.2,1),z-index 0s .28s;
}
.poster-row-tall .featured-poster-art{
  inset:0 0 48px;
  border-radius:13px;
  border:1px solid rgba(255,255,255,.11);
  background:#0d1117;
  box-shadow:0 16px 42px rgba(0,0,0,.26);
}
.poster-row-tall .featured-poster-art::after{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  background:linear-gradient(180deg,rgba(5,7,10,.02) 45%,rgba(5,7,10,.18) 100%);
}
.poster-row-tall .featured-poster-art img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transition:transform .34s cubic-bezier(.2,.8,.2,1),filter .34s ease;
}
.poster-row-tall .featured-poster .poster-caption{
  height:40px;
  gap:2px;
  padding:1px 3px 0;
}
.poster-row-tall .featured-poster .poster-caption strong{font-size:13px;letter-spacing:-.01em}
.poster-row-tall .featured-poster .poster-caption span{font-size:10px;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.poster-row-tall .featured-poster:hover,.poster-row-tall .featured-poster:focus-visible{
  transform:translateY(-4px) scale(1.018);
  z-index:8;
  transition-delay:.03s;
}
.poster-row-tall .featured-poster:hover .featured-poster-art,.poster-row-tall .featured-poster:focus-visible .featured-poster-art{
  border-color:rgba(242,198,109,.52);
  box-shadow:0 22px 58px rgba(0,0,0,.44),0 0 0 1px rgba(242,198,109,.08);
}
.poster-row-tall .featured-poster:hover img,.poster-row-tall .featured-poster:focus-visible img{transform:scale(1.025);filter:brightness(1.035)}
@media(max-width:900px){.poster-row-tall .featured-poster{flex-basis:min(78vw,410px)}}
@media(max-width:620px){
  .poster-row-tall{gap:12px}
  .poster-row-tall .featured-poster{flex-basis:88vw;max-width:410px;aspect-ratio:1.5}
  .poster-row-tall .featured-poster-art{inset:0 0 46px}
}
'''
    p.write_text(css)

print('Poster + recruiter polish applied successfully.')
