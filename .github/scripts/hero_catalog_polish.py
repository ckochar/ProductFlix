from pathlib import Path

# Homepage visual polish after personalization V1.
idx = Path('index.html')
html = idx.read_text()

# Make mode-bar label non-duplicative while preserving activeModeLabel for JS/accessibility.
html = html.replace(
    '<div class="mode-bar-label"><span>Viewing as</span><strong id="activeModeLabel">Hiring Chirag</strong></div>',
    '<div class="mode-bar-label"><span>Viewing as:</span><strong id="activeModeLabel" class="sr-mode-label">Hiring Chirag</strong></div>'
)

# Enrich Just Explore tiles with lightweight visual layers; no new assets needed except existing Life image.
html = html.replace(
    '<div class="explore-tile explore-work"><span>WORK</span><strong>Products</strong></div>',
    '<div class="explore-tile explore-work"><div class="explore-viz explore-viz-work"><i></i><i></i><i></i><b></b></div><span>WORK</span><strong>Products</strong><small>Shipped systems & impact</small></div>'
)
html = html.replace(
    '<div class="explore-tile explore-think"><span>THINK</span><strong>Decisions</strong></div>',
    '<div class="explore-tile explore-think"><div class="explore-viz explore-viz-think"><i></i><i></i><i></i><b></b></div><span>THINK</span><strong>Decisions</strong><small>Trade-offs & product judgment</small></div>'
)
html = html.replace(
    '<div class="explore-tile explore-build"><span>BUILD</span><strong>Experiments</strong></div>',
    '<div class="explore-tile explore-build"><div class="explore-viz explore-viz-build"><i></i><i></i><i></i><b></b></div><span>BUILD</span><strong>Experiments</strong><small>Prototypes & live ideas</small></div>'
)
html = html.replace(
    '<div class="explore-tile explore-life" style="--explore-image:url(\'assets/photos/boats-sunset-leaves.jpg\')"><span>LIFE</span><strong>Stories</strong></div>',
    '<div class="explore-tile explore-life" style="--explore-image:url(\'assets/photos/boats-sunset-leaves.jpg\')"><div class="explore-life-shade"></div><span>LIFE</span><strong>Stories</strong><small>Travel, photography & everything else</small></div>'
)
idx.write_text(html)

css = Path('styles.css')
s = css.read_text()
marker = '/* HERO + CATALOG POLISH V3 */'
if marker in s:
    s = s[:s.index(marker)].rstrip() + '\n'

s += r'''

/* HERO + CATALOG POLISH V3 */
/* Bring proof into the first viewport sooner. */
.hero.mode-hero{min-height:490px;padding-top:54px;padding-bottom:34px}
.hero.mode-hero h1{font-size:clamp(50px,5.35vw,84px);margin-top:15px;margin-bottom:9px}
.hero.mode-hero .hero-description{font-size:clamp(15px,1.28vw,19px);line-height:1.42;margin-bottom:14px}
.hero.mode-hero .hero-actions{margin-top:20px;margin-bottom:13px}
.hero.mode-hero .mode-visual-stage{min-height:365px}

/* The mode control should read as one compact viewing preference, not a second navigation bar. */
.mode-bar{border-bottom:1px solid rgba(255,255,255,.06);background:rgba(8,10,13,.72)}
.mode-bar-inner{min-height:58px!important;padding-top:8px!important;padding-bottom:8px!important;display:flex!important;align-items:center!important;gap:18px!important}
.mode-bar-label{display:flex;align-items:center;gap:5px;white-space:nowrap;color:#777f89;font-size:9px;text-transform:uppercase;letter-spacing:.09em;font-weight:800}
.mode-bar-label .sr-mode-label{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
.mode-tabs{display:flex;gap:7px;align-items:center;flex:1;overflow-x:auto;scrollbar-width:none}
.mode-tabs::-webkit-scrollbar{display:none}
.mode-tab{padding:7px 12px!important;min-height:0!important;font-size:10px!important;white-space:nowrap}
.mode-bar-copy{margin:0 0 0 auto!important;max-width:360px;text-align:right;font-size:9px!important;line-height:1.35;color:#757d87!important}

/* Explore mode: make the four quadrants feel like real catalog previews rather than empty placeholders. */
.explore-grid{gap:10px!important}
.explore-tile{position:relative!important;overflow:hidden!important;isolation:isolate!important;padding:18px!important;display:flex!important;flex-direction:column!important;justify-content:flex-end!important;min-height:135px!important;background:#101720!important;border-color:rgba(255,255,255,.11)!important;transition:transform .25s,border-color .25s,box-shadow .25s}
.explore-tile::before{content:"";position:absolute;inset:0;z-index:-3;background:linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,.0) 45%,rgba(4,7,10,.78))}
.explore-tile::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,transparent 30%,rgba(6,9,12,.05) 50%,rgba(6,9,12,.82) 100%)}
.explore-tile span{position:relative;z-index:4;color:var(--gold)!important;font-size:8px!important;font-weight:900;letter-spacing:.1em;margin-bottom:3px}
.explore-tile strong{position:relative;z-index:4;font:700 16px/1.05 "Manrope",sans-serif!important;color:#f5f0e7}
.explore-tile small{position:relative;z-index:4;color:#8f98a4;font-size:8px;margin-top:3px}
.explore-viz{position:absolute;z-index:-2;inset:0;opacity:.9}

/* WORK: gold scale bars + trajectory line */
.explore-work{background:radial-gradient(circle at 74% 22%,rgba(242,198,109,.15),transparent 30%),#11161d!important}
.explore-viz-work i{position:absolute;bottom:36%;width:8%;border-radius:3px 3px 0 0;background:linear-gradient(180deg,#f3cf7d,#9e6f2b);box-shadow:0 0 18px rgba(242,198,109,.12)}
.explore-viz-work i:nth-child(1){right:28%;height:18%}.explore-viz-work i:nth-child(2){right:18%;height:31%}.explore-viz-work i:nth-child(3){right:8%;height:46%}
.explore-viz-work b{position:absolute;width:43%;height:2px;right:7%;top:35%;background:linear-gradient(90deg,rgba(139,186,248,.2),#72b9ff);transform:rotate(-17deg);box-shadow:0 0 18px rgba(83,157,235,.45)}

/* THINK: decision nodes and paths */
.explore-think{background:radial-gradient(circle at 62% 38%,rgba(87,139,201,.16),transparent 36%),#101720!important}
.explore-viz-think i{position:absolute;width:34px;height:34px;border-radius:50%;border:1px solid rgba(139,186,248,.48);background:rgba(15,27,39,.85);box-shadow:0 0 25px rgba(92,147,211,.12)}
.explore-viz-think i:nth-child(1){right:35%;top:19%}.explore-viz-think i:nth-child(2){right:15%;top:35%;border-color:rgba(242,198,109,.45)}.explore-viz-think i:nth-child(3){right:41%;top:50%;border-color:rgba(98,216,155,.4)}
.explore-viz-think b{position:absolute;width:34%;height:1px;right:15%;top:42%;background:linear-gradient(90deg,rgba(139,186,248,.55),rgba(242,198,109,.35));transform:rotate(14deg)}

/* BUILD: a compact prototype browser */
.explore-build{background:radial-gradient(circle at 64% 26%,rgba(133,92,190,.12),transparent 32%),#11151d!important}
.explore-viz-build{left:36%;top:14%;right:8%;bottom:30%;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:rgba(8,12,17,.75);box-shadow:0 16px 35px rgba(0,0,0,.28)}
.explore-viz-build::before{content:"";position:absolute;left:0;right:0;top:0;height:17px;border-bottom:1px solid rgba(255,255,255,.08);background:linear-gradient(90deg,rgba(242,198,109,.15),transparent)}
.explore-viz-build i{position:absolute;left:11%;right:11%;height:7px;border-radius:4px;background:#192330;border:1px solid rgba(139,186,248,.10)}
.explore-viz-build i:nth-child(1){top:31%}.explore-viz-build i:nth-child(2){top:51%;right:26%}.explore-viz-build i:nth-child(3){top:71%;right:42%}
.explore-viz-build b{position:absolute;width:5px;height:5px;border-radius:50%;right:9px;top:6px;background:var(--green);box-shadow:0 0 10px rgba(98,216,155,.5)}

/* LIFE: let the real image carry the quadrant. */
.explore-life{background-image:var(--explore-image)!important;background-size:cover!important;background-position:center!important}
.explore-life::before{background:linear-gradient(180deg,rgba(7,10,14,.03),rgba(7,10,14,.18) 45%,rgba(7,10,14,.86))!important}
.explore-life-shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(6,9,12,.12),transparent 55%)}

.explore-center{box-shadow:0 12px 34px rgba(0,0,0,.48)!important;border-color:rgba(242,198,109,.26)!important;background:rgba(9,12,16,.92)!important}

/* Hiring: more editorial, less dashboard. Keep proof, but let the portrait dominate. */
body[data-mode="hiring"] .hiring-portrait{right:6%;width:51%;height:96%;top:0;border-radius:16px}
body[data-mode="hiring"] .hiring-card{background:rgba(9,13,18,.74);border-color:rgba(255,255,255,.10);box-shadow:0 16px 40px rgba(0,0,0,.28)}
body[data-mode="hiring"] .hiring-card-a{left:3%;top:14%;width:196px}
body[data-mode="hiring"] .hiring-card-b{left:0;top:45%;width:222px}
body[data-mode="hiring"] .hiring-card-c{left:8%;bottom:8%;width:180px}
body[data-mode="hiring"] .hiring-card strong{font-size:16px}

@media(max-width:900px){
  .hero.mode-hero{min-height:auto;padding-top:42px;padding-bottom:28px}
  .hero.mode-hero .mode-visual-stage{min-height:320px}
  .mode-bar-inner{align-items:flex-start!important;flex-wrap:wrap!important;gap:8px 12px!important}
  .mode-tabs{order:3;flex-basis:100%;padding-bottom:2px}
  .mode-bar-copy{margin-left:auto!important;max-width:55%;text-align:right}
}
@media(max-width:650px){
  .hero.mode-hero{padding-top:34px;padding-bottom:24px}
  .hero.mode-hero h1{font-size:clamp(43px,14vw,62px)}
  .hero.mode-hero .mode-visual-stage{min-height:285px}
  .mode-bar{position:relative}
  .mode-bar-copy{display:none}
  .mode-bar-inner{min-height:54px!important;padding-left:3.5vw!important;padding-right:3.5vw!important}
  .mode-tabs{gap:6px}
  .mode-tab{padding:7px 10px!important}
  .explore-tile{min-height:110px!important;padding:13px!important}
  .explore-tile small{display:none}
}
'''
css.write_text(s)
