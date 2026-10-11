const projects = {
  "product-journey": {
    title: "My Product Journey",
    meta: "Career Story · Systems → AI",
    summary: "A visual story of how implementation, operations, transactions and enterprise platforms shaped the way I build AI products today.",
    metrics: [["8.5+ yrs", "career arc"], ["4", "industry chapters"], ["Systems → AI", "through-line"]],
    problem: "A chronological resume shows where I worked. It does not explain how each chapter changed the way I think about products.",
    role: "The connective tissue across my career: systems thinking, transactions, platform design and intelligent automation.",
    accent: "gold"
  },
  "reservation-system": {
    title: "Reservation System — Travel & Hospitality",
    meta: "Publicis Sapient · Travel · Transaction Platform",
    summary: "Reservation and transaction workflows for a large travel platform, connecting booking journeys, checkout, payments and reliability.",
    metrics: [["Travel", "platform"], ["26K", "users"], ["Checkout", "& payments"]],
    problem: "Reservation experiences break when availability, checkout, payment and operational states fall out of sync.",
    role: "Product management across transaction journeys, integrations, payment reliability and traveler experience.",
    accent: "blue"
  },
  "digital-manufacturing": {
    title: "Digital Manufacturing / IIoT",
    meta: "Capgemini · Leading FMCG · Enterprise Operations",
    summary: "Digital manufacturing and MES transformation across 50+ plants, connecting shop-floor execution with standardized enterprise operations.",
    metrics: [["50+", "plants"], ["MES", "platform"], ["IIoT", "operations"]],
    problem: "Global manufacturing needs standard processes without ignoring local plant realities, legacy systems and operational constraints.",
    role: "Implementation and transformation leadership spanning plant systems, rollout coordination, process standardization and enterprise adoption.",
    accent: "blue"
  },
  "doc-verify": {
    title: "Document Verification",
    meta: "2026 · Enterprise AI · Regulated Operations · In Production",
    summary: "AI-assisted verification that combines deterministic rules, document intelligence and human review to reduce repetitive manual QC in a regulated workflow.",
    metrics: [["Rules-first", "deterministic checks"], ["AI-assisted", "interpretation"], ["Human review", "exceptions"]],
    problem: "High-volume verification required people to repeatedly locate evidence before making decisions, even when many conditions could be handled more systematically.",
    role: "Product lead across discovery, workflow design, governance, human-in-the-loop controls and cross-functional execution.",
    accent: "gold"
  },
  "title-automation": {
    title: "Title Workflow Automation",
    meta: "2026 · Enterprise Automation · In Build",
    summary: "A configurable workflow platform connecting external data sources, automated retrieval, structured extraction, exception routing and human review.",
    metrics: [["0→1", "platform"], ["Rules + AI", "orchestration"], ["Human review", "exceptions"]],
    problem: "A fragmented production workflow relied on repeated search, document retrieval, data interpretation and manual handoffs.",
    role: "Product strategy, workflow architecture, integration design, automation roadmap and exception-model ownership.",
    accent: "blue"
  },
  "accounting-payments": {
    title: "Accounting & Vendor Payments",
    meta: "Financial Infrastructure · Enterprise · Shipped",
    summary: "Accounting, reconciliation and vendor-payment workflows supporting high-value enterprise financial operations.",
    metrics: [["$180M+", "annual transaction scale"], ["−30%", "reconciliation effort · realized"], ["−23%", "payment cycle · realized"]],
    problem: "High-volume disbursements created reconciliation friction, payment failures, vendor-cycle delays and revenue leakage across distributed operational workflows.",
    role: "Platform product leadership spanning accounting flows, reconciliation, payment operations, controls and measurable operational outcomes.",
    accent: "gold"
  },
  "assay": {
    title: "Assay",
    meta: "Personal Build · AI · 0→1",
    summary: "An AI-assisted post-execution document QC product for mortgage and regulated lending operations, built as a hands-on product portfolio project.",
    metrics: [["1–2 min", "target review"], ["AI + rules", "hybrid validation"], ["HITL", "governance"]],
    problem: "Regulated document packages are expensive to review manually, but full automation introduces accuracy and governance risks.",
    role: "Concept, product design, AI workflow, prototype, QA, governance design and deployment.",
    accent: "blue"
  },
  "payments-checkout": {
    title: "Payments & Checkout",
    meta: "Fintech · Consumer · Shipped",
    summary: "Checkout and payment reliability improvements for a large travel platform, focused on authorization, failure reduction and transaction experience.",
    metrics: [["26K", "users"], ["Payments", "platform"], ["Conversion", "focus"]],
    problem: "Payment failures and transaction friction were directly affecting conversion, support load and traveler trust.",
    role: "Product management across payment flows, integrations, reliability and checkout experience.",
    accent: "blue"
  },
  "client-platform": {
    title: "Client Platform",
    meta: "B2B · Enterprise Platform · Shipped",
    summary: "A client-facing platform experience for mortgage servicing workflows, visibility and operational coordination.",
    metrics: [["B2B", "platform"], ["Workflow", "visibility"], ["CX", "focus"]],
    problem: "Clients needed clearer visibility into high-friction operational workflows without depending on fragmented communication.",
    role: "Product ownership across client experience, workflow visibility and platform modernization.",
    accent: "blue"
  },
  "decision-simulator": {
    title: "You're the PM — Decision Simulator",
    meta: "Interactive · Product Judgment · Prototype",
    summary: "A choose-your-own-product-adventure that forces trade-offs across accuracy, cost, automation and human review.",
    metrics: [["4 rounds", "decisions"], ["Trade-offs", "not trivia"], ["Interactive", "experience"]],
    problem: "Most PM portfolios describe decisions after the fact. This lets visitors make the decision themselves — and then compare their reasoning with mine.",
    role: "Concept, scenario design, product logic and interaction model.",
    accent: "gold"
  },
  "ai-product-copilot": {
    title: "AI Product Copilot",
    meta: "CK Labs · AI Agent · Prototype",
    summary: "A product-thinking partner designed to challenge assumptions, surface alternative hypotheses, identify risks and demand evidence — instead of simply writing PRDs.",
    metrics: [["Challenge", "assumptions"], ["Surface", "alternatives"], ["Push for", "evidence"]],
    problem: "Generic AI PM tools optimize document creation. The harder problem is improving the quality of product judgment before the document is written.",
    role: "Product concept, agent behavior, prompt architecture, interaction design and evaluation framework.",
    accent: "gold"
  },
  "if-i-were-pm": {
    title: "If I Were PM For...",
    meta: "Product Strategy Series · Editorial",
    summary: "Short, opinionated strategy cases on products I use — from ChatGPT Memory to LinkedIn Jobs and Google Maps road trips.",
    metrics: [["3–5 min", "reads"], ["Problem", "→ bet"], ["Trade-offs", "included"]],
    problem: "Resume bullets show what I have shipped. This series shows how I reason in categories and products outside my day job.",
    role: "Research, problem framing, strategy, experience concepts and success metrics.",
    accent: "gold"
  },
  "product-teardowns": {
    title: "Product Teardowns",
    meta: "Editorial · Product Design · Series",
    summary: "Deconstructing why products work: behavior, information architecture, trust, friction and product choices — starting with Netflix and financial UX.",
    metrics: [["Why", "it works"], ["UX", "mechanics"], ["PM", "lessons"]],
    problem: "Most teardowns stop at screenshots. I want to connect interaction design back to product strategy and behavioral outcomes.",
    role: "Research, analysis, storytelling and product synthesis.",
    accent: "gold"
  },
  "through-my-lens": {
    title: "Through My Lens",
    meta: "Photography · Personal",
    summary: "A visual collection of places, light, people and moments — a quieter part of Productflix that shows how I see the world outside product work.",
    metrics: [["Cities", "& roads"], ["Light", "& moments"], ["Stories", "without slides"]],
    problem: "Not everything interesting about a person belongs in a resume.",
    role: "Photographer, traveler and editor.",
    accent: "blue"
  },
  "passport-mode": {
    title: "Passport Mode",
    meta: "Travel · Personal",
    summary: "Trips, detours, road stories and places I would happily revisit — designed like travel episodes, not a checklist of destinations.",
    metrics: [["Roads", "over routes"], ["Detours", "welcome"], ["Stories", "first"]],
    problem: "Travel is more memorable as a story than as a list of countries.",
    role: "Traveler, planner and storyteller.",
    accent: "blue"
  },
  "game-on": {
    title: "Game On",
    meta: "Sports · Badminton · Personal",
    summary: "The competitive side of life outside product — badminton, sport and the joy of getting a little too invested in the score.",
    metrics: [["Badminton", "regularly"], ["Compete", "for fun"], ["Move", "often"]],
    problem: "A portfolio should reveal energy, not only experience.",
    role: "Player and occasional over-competitor.",
    accent: "green"
  },
  "worth-calories": {
    title: "Worth the Calories",
    meta: "Food · Personal",
    summary: "Food worth remembering — restaurants, home cooking, Indian comfort food and meals that justify the detour.",
    metrics: [["Chai", "always"], ["Indian", "vegetarian"], ["Good food", "> trends"]],
    problem: "Some decisions deserve a different prioritization framework.",
    role: "Eater, cook and enthusiastic reviewer.",
    accent: "gold"
  },
  "in-front-lens": {
    title: "In Front of the Lens",
    meta: "Style · Personal",
    summary: "Selected portraits and style moments — a small visual counterweight to all the systems diagrams and product metrics.",
    metrics: [["Style", "editorial"], ["Portraits", "selected"], ["Off clock", "fully"]],
    problem: "Professional identity is only one part of identity.",
    role: "Subject, stylist and collaborator.",
    accent: "gold"
  },
  "cross-doc": {
    title: "Cross-Document Intelligence",
    meta: "CK Labs · Experiment",
    summary: "An experiment in detecting contradictions and mismatches across multiple related lending documents rather than validating one page at a time.",
    metrics: [["Multi-doc", "reasoning"], ["Conflicts", "detected"], ["Eval", "first"]],
    problem: "Important document errors often emerge only when two otherwise-valid documents disagree.",
    role: "Experiment design and evaluation concept.",
    accent: "blue"
  },
  "productflix-search": {
    title: "Productflix AI Search",
    meta: "CK Labs · Idea",
    summary: "A semantic portfolio navigator that answers questions like: 'Show me Chirag's work involving AI and financial operations.'",
    metrics: [["Natural", "language"], ["Portfolio", "retrieval"], ["V2", "idea"]],
    problem: "A growing portfolio becomes difficult to browse when visitors know what they care about but not where it lives.",
    role: "Concept and planned prototype.",
    accent: "blue"
  }
};

const shelfOrderByMode = {
  recruiter: ["work", "metrics", "think", "build", "life"],
  product: ["think", "work", "build", "metrics", "life"],
  builder: ["build", "think", "work", "metrics", "life"],
  life: ["life", "think", "work", "build", "metrics"]
};
const modeCopy = {
  recruiter: "Prioritizing shipped products, outcomes, career story and credibility.",
  product: "Prioritizing product decisions, AI work and how I think.",
  builder: "Prioritizing prototypes, experiments and things under construction.",
  life: "Prioritizing photography, travel, sport and the human side."
};

const shelfContainer = document.getElementById("shelfContainer");
const shelfSections = [...document.querySelectorAll("[data-shelf]")];
const visitorCards = [...document.querySelectorAll(".visitor-card")];

visitorCards.forEach(card => {
  card.addEventListener("click", () => {
    visitorCards.forEach(c => c.classList.toggle("is-active", c === card));
    const mode = card.dataset.mode;
    document.getElementById("modeDescription").textContent = modeCopy[mode];
    const anchor = shelfContainer.querySelector(".final-cta");
    shelfOrderByMode[mode].forEach(key => {
      const section = shelfSections.find(s => s.dataset.shelf === key);
      if (section) shelfContainer.insertBefore(section, anchor);
    });
    shelfSections.forEach((section, i) => {
      section.animate([
        { opacity: .25, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ], { duration: 350 + i * 55, easing: "cubic-bezier(.2,.8,.2,1)" });
    });
  });
});

document.querySelectorAll("[data-scroll-row]").forEach(button => {
  button.addEventListener("click", () => {
    const row = document.getElementById(button.dataset.scrollRow);
    row?.scrollBy({ left: row.clientWidth * .72, behavior: "smooth" });
  });
});

const modal = document.getElementById("quickModal");
const backdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

function openModal(id) {
  const p = projects[id];
  if (!p) return;
  document.getElementById("modalMeta").textContent = p.meta;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalSummary").textContent = p.summary;
  document.getElementById("modalProblem").textContent = p.problem;
  document.getElementById("modalRole").textContent = p.role;
  document.getElementById("modalMetrics").innerHTML = p.metrics.map(([a,b]) => `<div class="modal-metric"><strong>${a}</strong><span>${b}</span></div>`).join("");
  const hero = document.getElementById("modalHero");
  hero.style.background = p.accent === "blue"
    ? "radial-gradient(circle at 70% 40%,rgba(78,136,204,.35),transparent 32%),linear-gradient(145deg,#101921,#11151a)"
    : p.accent === "green"
    ? "radial-gradient(circle at 70% 40%,rgba(68,193,133,.30),transparent 32%),linear-gradient(145deg,#0e1a15,#11151a)"
    : "radial-gradient(circle at 70% 40%,rgba(244,176,70,.35),transparent 32%),linear-gradient(145deg,#1b1711,#111820)";
  modal.hidden = false; backdrop.hidden = false; document.body.classList.add("body-locked");
  document.getElementById("modalSecondary").textContent = "Back to Browsing";
  document.getElementById("modalSecondary").dataset.id = id;
  document.getElementById("modalPrimary").textContent = id === "decision-simulator" ? "▶ Play Scenario" : id === "ai-product-copilot" ? "✦ Challenge an Assumption" : id === "if-i-were-pm" ? "Read Episode 01" : id === "product-teardowns" ? "Read Teardown" : id === "accounting-payments" ? "Explore Case Study" : id === "title-automation" ? "Explore Case Study" : id === "product-journey" ? "View Journey" : id === "reservation-system" ? "Explore Episode" : id === "digital-manufacturing" ? "Explore Episode" : id === "assay" ? "View Build Story" : id === "through-my-lens" ? "Open Gallery" : id === "passport-mode" ? "Enter Passport Mode" : id === "game-on" ? "Game On" : id === "worth-calories" ? "Open Food Stories" : id === "in-front-lens" ? "View Portraits" : "Explore Story";
  modalClose.focus();
}
function closeModal(){ modal.hidden=true;backdrop.hidden=true;document.body.classList.remove("body-locked"); }
modalClose.addEventListener("click",closeModal);backdrop.addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeSearch();}});
document.querySelectorAll("[data-open]").forEach(el=>el.addEventListener("click",()=>openModal(el.dataset.open)));
document.querySelectorAll("[data-id]").forEach(el=>{
  el.addEventListener("click",()=>openModal(el.dataset.id));
  el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openModal(el.dataset.id)}});
});
document.getElementById("modalSecondary").addEventListener("click", closeModal);
document.getElementById("modalPrimary").addEventListener("click",()=>{
  const id = document.getElementById("modalSecondary").dataset.id;
  if (id === "doc-verify") {
    window.location.href = "doc-verify.html";
    return;
  }
  if (id === "accounting-payments") {
    window.location.href = "accounting-payments.html";
    return;
  }
  if (id === "title-automation") {
    window.location.href = "title-automation.html";
    return;
  }
  if (id === "product-journey") {
    window.location.href = "product-journey.html";
    return;
  }
  if (id === "reservation-system") {
    window.location.href = "publicis-reservation.html";
    return;
  }
  if (id === "digital-manufacturing") {
    window.location.href = "capgemini-iiot.html";
    return;
  }
  if (id === "assay") {
    window.location.href = "assay.html";
    return;
  }
  if (id === "decision-simulator") {
    window.location.href = "decision-simulator.html";
    return;
  }
  if (id === "ai-product-copilot") {
    window.location.href = "ai-product-copilot.html";
    return;
  }
  if (id === "if-i-were-pm") {
    window.location.href = "if-i-were-pm-chatgpt-memory.html";
    return;
  }
  if (id === "product-teardowns") {
    window.location.href = "netflix-teardown.html";
    return;
  }
  if (id === "through-my-lens") {
    window.location.href = "through-my-lens.html";
    return;
  }
  if (id === "passport-mode") {
    window.location.href = "passport-mode.html";
    return;
  }
  if (id === "game-on") {
    window.location.href = "game-on.html";
    return;
  }
  if (id === "worth-calories") {
    window.location.href = "worth-the-calories.html";
    return;
  }
  if (id === "in-front-lens") {
    window.location.href = "in-front-of-the-lens.html";
    return;
  }
  const existing = document.querySelector(".modal-coming-soon");
  if (!existing) document.getElementById("modalSummary").insertAdjacentHTML("afterend","<p class='modal-summary modal-coming-soon' style='color:#f2c66d'>This concept is still in the lab. Browse the live case studies and interactive experiences for the finished work.</p>");
});

document.getElementById("surpriseMe").addEventListener("click",()=>{
  const liveIds = ["title-automation","doc-verify","accounting-payments","assay","decision-simulator","ai-product-copilot","if-i-were-pm","product-teardowns","product-journey","reservation-system","digital-manufacturing","through-my-lens","passport-mode","game-on","worth-calories","in-front-lens"];
  openModal(liveIds[Math.floor(Math.random()*liveIds.length)]);
});

const searchOverlay=document.getElementById("searchOverlay");
const searchInput=document.getElementById("searchInput");
const searchResults=document.getElementById("searchResults");
function openSearch(){searchOverlay.hidden=false;document.body.classList.add("body-locked");setTimeout(()=>searchInput.focus(),50);renderResults("");}
function closeSearch(){if(!searchOverlay.hidden){searchOverlay.hidden=true;document.body.classList.remove("body-locked");}}
document.getElementById("searchButton").addEventListener("click",openSearch);
document.getElementById("searchClose").addEventListener("click",closeSearch);
document.getElementById("profileButton").addEventListener("click",()=>document.querySelector(".visitor-section").scrollIntoView({behavior:"smooth",block:"start"}));
function renderResults(query){
  const q=query.toLowerCase().trim();
  const entries=Object.entries(projects).filter(([id,p])=>!q||`${id} ${p.title} ${p.meta} ${p.summary}`.toLowerCase().includes(q)).slice(0,9);
  searchResults.innerHTML=entries.length?entries.map(([id,p])=>`<button class="search-result" data-search-open="${id}"><strong>${p.title}</strong><span>${p.meta}</span></button>`).join(""):`<div class="search-empty">No product-market fit found. Try another search.</div>`;
  document.querySelectorAll("[data-search-open]").forEach(b=>b.addEventListener("click",()=>{closeSearch();openModal(b.dataset.searchOpen)}));
}
searchInput.addEventListener("input",()=>renderResults(searchInput.value));
document.querySelectorAll("[data-query]").forEach(b=>b.addEventListener("click",()=>{searchInput.value=b.dataset.query;renderResults(b.dataset.query)}));

const navLinks=[...document.querySelectorAll(".nav-link")];
const observed=[...document.querySelectorAll("main section[id]")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")===`#${entry.target.id}`));}})
},{rootMargin:"-25% 0px -65% 0px",threshold:.01});
observed.forEach(s=>observer.observe(s));
