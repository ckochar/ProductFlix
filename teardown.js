const principles = {
  rows: {
    kicker:'PRINCIPLE 01',
    title:'Rows turn a catalog into decisions.',
    body:'Instead of one giant ranked wall, a row gives every group a clear meaning. A visitor can judge the entire group quickly, skip it, or explore it deeply.',
    netflix:'“Because you watched…”', netflixBody:'A coherent reason to inspect a cluster.',
    productflix:'“How I Think”', productflixBody:'A coherent reason to inspect product judgment rather than work history.',
    lesson:'Structure the choice before optimizing the choice.'
  },
  ranking: {
    kicker:'PRINCIPLE 02',
    title:'Position is part of the recommendation.',
    body:'A relevant item is not useful if it is buried. Netflix ranks both rows and titles within rows, so presentation order becomes part of the product decision — not just a visual layer.',
    netflix:'Strongest titles start first', netflixBody:'The left edge carries disproportionate discovery value.',
    productflix:'Flagship work first', productflixBody:'Doc Verify, impact, and interactive thinking appear before supporting material.',
    lesson:'Information architecture and ranking cannot be separated from relevance.'
  },
  disclosure: {
    kicker:'PRINCIPLE 03',
    title:'Make each layer earn the next click.',
    body:'A poster does not explain the whole product. It creates enough curiosity for a preview. A preview creates enough confidence for a detail page. Each layer protects attention.',
    netflix:'Artwork → preview → title detail', netflixBody:'More information appears as intent becomes stronger.',
    productflix:'Poster → quick view → case study', productflixBody:'The homepage stays browsable while serious visitors can go deep.',
    lesson:'Progressive disclosure is not hiding information; it is sequencing decisions.'
  },
  personal: {
    kicker:'PRINCIPLE 04',
    title:'The best homepage reflects current intent.',
    body:'Netflix personalizes row choice, item choice, and ordering. The useful insight is not “use AI recommendations”; it is that the same catalog can be organized differently for different goals.',
    netflix:'Rows vary by viewer', netflixBody:'The page tries to match taste and current viewing intent.',
    productflix:'Visitor modes reorder shelves', productflixBody:'Hiring, Product & AI, Building, and Life create different entry paths.',
    lesson:'Personalization starts with understanding intent, not adding an algorithm.'
  },
  feedback: {
    kicker:'PRINCIPLE 05',
    title:'A browse surface should learn from behavior.',
    body:'Netflix uses interactions such as viewing and ratings as signals that continuously influence recommendations. The product surface gets better as the user reveals preference.',
    netflix:'Behavior updates recommendations', netflixBody:'Interaction becomes an input to the next experience.',
    productflix:'V1 uses explicit mode selection', productflixBody:'Future versions can use viewed cards to improve “Recommended for You” without pretending to know more than they do.',
    lesson:'Feedback loops are strongest when the signal clearly connects to the user outcome.'
  }
};

const detail = document.getElementById('principleDetail');
document.querySelectorAll('.principle-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.principle-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const p = principles[btn.dataset.principle];
    detail.animate([{opacity:.35,transform:'translateY(5px)'},{opacity:1,transform:'none'}],{duration:260,easing:'ease-out'});
    detail.innerHTML = `
      <div class="detail-kicker">${p.kicker}</div>
      <h3>${p.title}</h3>
      <p>${p.body}</p>
      <div class="compare-grid">
        <div><span>NETFLIX PATTERN</span><strong>${p.netflix}</strong><p>${p.netflixBody}</p></div>
        <div><span>PRODUCTFLIX ADAPTATION</span><strong>${p.productflix}</strong><p>${p.productflixBody}</p></div>
      </div>
      <div class="lesson"><b>PM lesson</b><span>${p.lesson}</span></div>`;
  });
});

document.getElementById('jumpProductflix').addEventListener('click',()=>document.getElementById('adaptation').scrollIntoView({behavior:'smooth'}));

const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
