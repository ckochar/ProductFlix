from pathlib import Path

p = Path('styles.css')
css = p.read_text()
marker = '/* FEATURED_WORK_FINAL_POLISH_V3 */'
if marker not in css:
    css += '''

/* FEATURED_WORK_FINAL_POLISH_V3 */
#work.section{
  padding-top:24px;
  padding-bottom:0;
  background:radial-gradient(circle at 92% 4%,rgba(157,108,37,.09),transparent 26%);
}
#work .section-heading{
  margin-bottom:10px;
  align-items:flex-end;
}
#work .section-heading .text-button{
  position:relative;
  top:5px;
  margin-right:2px;
  color:#aab0b8;
}
#work .section-heading .text-button:hover{color:var(--gold)}
.poster-row-tall{
  gap:14px;
  padding-top:3px;
  padding-bottom:14px;
}
.poster-row-tall .featured-poster{
  flex:0 0 clamp(315px,29.4vw,418px);
  aspect-ratio:1.58;
}
.poster-row-tall .featured-poster-art{
  inset:0 0 46px;
  border-radius:12px;
  box-shadow:0 13px 34px rgba(0,0,0,.22);
}
.poster-row-tall .featured-poster .poster-caption{
  height:38px;
  padding:4px 4px 0;
  gap:3px;
}
.poster-row-tall .featured-poster .poster-caption strong{
  font-size:12.5px;
  line-height:1.15;
}
.poster-row-tall .featured-poster .poster-caption span{
  font-size:9.5px;
  line-height:1.25;
  color:#989fa8;
}
.poster-row-tall .featured-poster:hover,
.poster-row-tall .featured-poster:focus-visible{
  transform:translateY(-3px) scale(1.012);
}
.poster-row-tall .featured-poster:hover .featured-poster-art,
.poster-row-tall .featured-poster:focus-visible .featured-poster-art{
  border-color:rgba(242,198,109,.46);
  box-shadow:0 18px 46px rgba(0,0,0,.38),0 0 0 1px rgba(242,198,109,.07);
}
.poster-row-tall .featured-poster:hover img,
.poster-row-tall .featured-poster:focus-visible img{
  transform:scale(1.012);
  filter:brightness(1.025);
}
@media(max-width:900px){
  #work.section{padding-top:22px}
  .poster-row-tall .featured-poster{flex-basis:min(75vw,390px)}
}
@media(max-width:620px){
  #work.section{padding-top:20px}
  #work .section-heading{margin-bottom:9px}
  .poster-row-tall{gap:11px;padding-bottom:12px}
  .poster-row-tall .featured-poster{
    flex-basis:86vw;
    max-width:390px;
    aspect-ratio:1.55;
  }
  .poster-row-tall .featured-poster-art{inset:0 0 44px}
  .poster-row-tall .featured-poster .poster-caption{height:36px}
}
'''
    p.write_text(css)
