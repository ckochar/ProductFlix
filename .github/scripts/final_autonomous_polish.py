from pathlib import Path
import re

ROOT = Path('.')


def replace(path, old, new, required=True):
    p = ROOT / path
    text = p.read_text(encoding='utf-8')
    if old not in text:
        if required:
            raise SystemExit(f'Missing expected text in {path}: {old[:80]!r}')
        return False
    p.write_text(text.replace(old, new), encoding='utf-8')
    return True

# Homepage: outcome-first proof, privacy-friendly location, and real Build visuals.
replace('index.html', 'Senior Product Manager <span>•</span> AI · Platforms · Payments <span>•</span> Plano, TX', 'Senior Product Manager <span>•</span> AI · Platforms · Payments <span>•</span> Dallas–Fort Worth, TX')

old_metrics = '''          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">◎</span><div><strong>$180M+</strong><span>Annual transaction flow · SCALE</span></div></button>\n          <button class="metric-card" data-open="payments-checkout"><span class="metric-icon">↗</span><div><strong>$4.2M</strong><span>Incremental bookings · REALIZED</span></div></button>\n          <button class="metric-card" data-open="payments-checkout"><span class="metric-icon">↘</span><div><strong>40%→24%</strong><span>Checkout abandonment · REALIZED</span></div></button>\n          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">◫</span><div><strong>$480K</strong><span>Revenue leakage addressed · REALIZED</span></div></button>\n          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">↘</span><div><strong>−30%</strong><span>Reconciliation effort · REALIZED</span></div></button>\n          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">◷</span><div><strong>−23%</strong><span>Vendor payment cycle · REALIZED</span></div></button>'''
new_metrics = '''          <button class="metric-card" data-open="payments-checkout"><span class="metric-icon">↗</span><div><strong>$4.2M</strong><span>Incremental bookings · REALIZED</span></div></button>\n          <button class="metric-card" data-open="payments-checkout"><span class="metric-icon">↘</span><div><strong>40%→24%</strong><span>Checkout abandonment · REALIZED</span></div></button>\n          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">↘</span><div><strong>−30%</strong><span>Reconciliation effort · REALIZED</span></div></button>\n          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">◷</span><div><strong>−23%</strong><span>Vendor payment cycle · REALIZED</span></div></button>\n          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">◫</span><div><strong>$480K</strong><span>Revenue leakage addressed · REALIZED</span></div></button>\n          <button class="metric-card" data-open="accounting-payments"><span class="metric-icon">◎</span><div><strong>$180M+</strong><span>Annual transaction flow · SCALE</span></div></button>'''
replace('index.html', old_metrics, new_metrics)

old_build = '''          <div><span class="section-kicker">Experimental shelf</span><h2>CK Labs</h2></div>\n          <span class="section-note">Building, testing and occasionally breaking things.</span>\n        </div>\n        <div class="lab-grid">\n          <a class="lab-card" href="assay.html"><span>LAB 001</span><strong>Assay</strong><small>LIVE PROTOTYPE</small></a>\n          <a class="lab-card" href="ai-product-copilot.html"><span>LAB 002</span><strong>AI Product Copilot</strong><small>PROTOTYPE</small></a>\n          <a class="lab-card" href="productflix-case-study.html"><span>LAB 003</span><strong>Productflix as a Product</strong><small>SHIPPED</small></a>'''
new_build = '''          <div><span class="section-kicker">Hands-on building</span><h2>Built, Not Just Managed</h2></div>\n          <span class="section-note">Prototypes and systems I designed, built and tested myself.</span>\n        </div>\n        <div class="lab-grid">\n          <a class="lab-card lab-card-assay" href="assay.html"><img class="lab-visual" src="assets/build/assay-build.svg" alt="Assay AI-assisted document quality-control interface" loading="lazy" decoding="async"><span>LAB 001</span><strong>Assay</strong><small>LIVE PROTOTYPE</small></a>\n          <a class="lab-card lab-card-copilot" href="ai-product-copilot.html"><img class="lab-visual" src="assets/build/copilot-build.svg" alt="AI Product Copilot decision-support interface" loading="lazy" decoding="async"><span>LAB 002</span><strong>AI Product Copilot</strong><small>PROTOTYPE</small></a>\n          <a class="lab-card lab-card-productflix" href="productflix-case-study.html"><img class="lab-visual" src="assets/build/productflix-build.svg" alt="ProductFlix portfolio-as-a-product catalog interface" loading="lazy" decoding="async"><span>LAB 003</span><strong>ProductFlix as a Product</strong><small>SHIPPED</small></a>'''
replace('index.html', old_build, new_build)
replace('index.html', '<img src="assets/photos/navy-blazer.jpg" alt="Chirag Kochar, Senior Product Manager">', '<img src="assets/photos/navy-blazer.jpg" alt="Chirag Kochar, Senior Product Manager" fetchpriority="high" decoding="async">')

# Personalization copy stays consistent with homepage and avoids hyper-specific location.
replace('app.js', 'Senior Product Manager • AI · Platforms · Payments • Plano, TX', 'Senior Product Manager • AI · Platforms · Payments • Dallas–Fort Worth, TX')
replace('app.js', 'headings:{work:"Featured Work",metrics:"Impact & Scale",career:"Across Industries",think:"How I Think",build:"CK Labs",life:"Beyond Product"}', 'headings:{work:"Featured Work",metrics:"Impact & Scale",career:"Across Industries",think:"How I Think",build:"Built, Not Just Managed",life:"Beyond Product"}')

# Brand casing consistency in user-visible source files.
for p in list(ROOT.glob('*.html')) + [ROOT/'app.js', ROOT/'README.md']:
    if not p.exists():
        continue
    t = p.read_text(encoding='utf-8')
    t = t.replace('Productflix', 'ProductFlix')
    p.write_text(t, encoding='utf-8')

# Final CSS overrides: actual visual art, lower-half rhythm, keyboard accessibility, motion safety.
css = ROOT/'styles.css'
text = css.read_text(encoding='utf-8')
marker = '/* AUTONOMOUS_FINAL_POLISH_V6 */'
if marker not in text:
    text += r'''

/* AUTONOMOUS_FINAL_POLISH_V6 */
/* Outcome-first metrics read better as recruiter proof; scale remains available at the end. */
.metrics-section{padding-top:42px;padding-bottom:18px}

/* Build shelf: product visuals carry the story; copy becomes supporting metadata. */
#build{padding-top:48px!important;padding-bottom:16px!important}
#build .section-heading{margin-bottom:14px!important}
#build .lab-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
#build .lab-card{min-height:0!important;aspect-ratio:1.48;padding:0!important;border-radius:14px;overflow:hidden;display:block;background:#0b1015;border:1px solid rgba(255,255,255,.09);box-shadow:0 18px 42px rgba(0,0,0,.22);isolation:isolate}
#build .lab-card::before,#build .lab-card::after{display:none!important}
#build .lab-visual{position:absolute;inset:0 0 56px;width:100%;height:calc(100% - 56px);object-fit:cover;display:block;transition:transform .35s cubic-bezier(.2,.8,.2,1),filter .35s ease}
#build .lab-card>span,#build .lab-card>strong,#build .lab-card>small{position:absolute!important;z-index:3;margin:0!important}
#build .lab-card>span{left:14px;bottom:35px;font:800 8px/1 Manrope,sans-serif;letter-spacing:.11em}
#build .lab-card>strong{left:14px;bottom:14px;font:700 15px/1 Manrope,sans-serif;color:#f2eee6}
#build .lab-card>small{right:14px;bottom:15px;font:800 8px/1 Manrope,sans-serif;letter-spacing:.08em}
#build .lab-card::selection{background:transparent}
#build .lab-card:hover{transform:translateY(-4px);box-shadow:0 23px 52px rgba(0,0,0,.32)}
#build .lab-card:hover .lab-visual,#build .lab-card:focus-visible .lab-visual{transform:scale(1.025);filter:brightness(1.04)}
#build .lab-card-assay{border-color:rgba(83,224,193,.22)}
#build .lab-card-assay>span,#build .lab-card-assay>small{color:#68ddc4}
#build .lab-card-copilot{border-color:rgba(105,139,255,.25)}
#build .lab-card-copilot>span,#build .lab-card-copilot>small{color:#8fb2ff}
#build .lab-card-productflix{border-color:rgba(242,198,109,.25)}
#build .lab-card-productflix>span,#build .lab-card-productflix>small{color:#f2c66d}

/* Pull credibility closer to the Build shelf so the lower half does not feel disconnected. */
.receipts-section{padding-top:38px!important;padding-bottom:54px!important}
#think{padding-bottom:18px!important}
#journey{padding-bottom:24px!important}

/* Strong keyboard navigation without changing mouse aesthetics. */
a:focus-visible,button:focus-visible,[tabindex]:focus-visible{outline:2px solid #f2c66d;outline-offset:4px}
.lab-card:focus-visible{border-color:rgba(242,198,109,.65);box-shadow:0 0 0 3px rgba(242,198,109,.10),0 20px 50px rgba(0,0,0,.35)}

/* Motion should never be required to understand the site. */
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}

@media(max-width:1000px){#build .lab-grid{grid-template-columns:repeat(2,minmax(0,1fr))}#build .lab-card-productflix{grid-column:1/-1;max-width:calc(50% - 8px)}}
@media(max-width:650px){#build{padding-top:34px!important}#build .lab-grid{grid-template-columns:1fr;gap:14px}#build .lab-card-productflix{grid-column:auto;max-width:none}#build .lab-card{aspect-ratio:1.55}.receipts-section{padding-top:30px!important}}
'''
    css.write_text(text, encoding='utf-8')

# Lightweight content/IP sanity checks. Fail rather than publish known-confidential strings.
for p in ROOT.glob('*.html'):
    s = p.read_text(encoding='utf-8')
    forbidden = ['79,200', '79.2K', '4.4 FTE', '184,800', '111%', '17.5 mo', 'EXOS Verify', '$1.5M']
    hits = [x for x in forbidden if x in s]
    if hits:
        raise SystemExit(f'Confidential/internal strings still present in {p}: {hits}')

# Remove temporary asset notes/placeholders and obsolete one-off automation to leave a clean repo.
for extra in [ROOT/'assets/build/README.txt', ROOT/'assets/build/asset-note.txt', ROOT/'assets/build/assay-build.b64.txt']:
    if extra.exists():
        extra.unlink()

# One-time workflows/scripts created during portfolio iteration are no longer needed.
workflow_dir = ROOT/'.github/workflows'
script_dir = ROOT/'.github/scripts'
for p in workflow_dir.glob('*.yml'):
    if p.name != 'final-autonomous-polish.yml':
        p.unlink()
for p in script_dir.iterdir():
    if p.is_file() and p.name != 'final_autonomous_polish.py':
        p.unlink()

print('Final autonomous polish applied successfully.')
