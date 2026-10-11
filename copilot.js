const input = document.getElementById('assumptionInput');
const challengeButton = document.getElementById('challengeButton');
const intro = document.getElementById('intro');
const workspace = document.getElementById('workspace');
const charCount = document.getElementById('charCount');
const evidenceInput = document.getElementById('evidenceInput');
const evidenceReview = document.getElementById('evidenceReview');
const experimentStage = document.getElementById('experimentStage');
const reframeStage = document.getElementById('reframeStage');
const evidenceGate = document.getElementById('evidenceGate');
let currentAssumption = '';
let evidenceType = '';
let evidenceScore = 0;
let selectedExperiment = null;

const generic = {
  headline: 'You may be treating a plausible story as a proven cause.',
  copy: 'Your assumption connects a user behavior to one explanation. That may be right — but a roadmap decision needs evidence that separates that explanation from other credible causes.',
  assumptions: [
    'The observed behavior is caused by the issue you named, not simply correlated with it.',
    'The affected users are valuable enough — and numerous enough — to justify the investment.',
    'Changing this factor will materially change behavior rather than just sentiment.'
  ],
  alternatives: [
    'A different step in the journey may be creating the friction you are attributing here.',
    'The users who struggle may not be the same users who drive the business outcome.',
    'Expectation, trust, pricing, or timing may explain the behavior better than the proposed cause.'
  ]
};

function buildChallenge(text){
  const t = text.toLowerCase();
  const result = JSON.parse(JSON.stringify(generic));
  if(/abandon|drop|conversion|checkout|verification|funnel/.test(t)){
    result.headline = 'You are jumping from a funnel drop to a root cause.';
    result.copy = 'A drop-off near verification is a useful signal, but location in the funnel does not prove causality. The question is whether verification itself creates abandonment — or merely happens to be where uncertain users finally leave.';
    result.assumptions = [
      'Users who exit at this step would continue if verification friction were reduced.',
      'The measured delay or complexity is meaningfully worse than the user expects.',
      'Reducing verification friction will not create a trust, fraud, or compliance trade-off.'
    ];
    result.alternatives = [
      'Users may have low purchase intent before verification and simply exit at the first commitment point.',
      'Unexpected price, payment failure, or account requirements may be the real trigger.',
      'Verification may feel slow because the UI provides poor feedback, even if raw latency is acceptable.'
    ];
  } else if(/ai|assistant|copilot|llm|agent/.test(t)){
    result.headline = 'You are assuming “AI” is the value proposition instead of a mechanism.';
    result.copy = 'Adding an assistant can make a demo feel impressive without changing the underlying job-to-be-done. Start by proving what decision or task becomes meaningfully better — and for whom.';
    result.assumptions = [
      'The target task is frequent and painful enough that users will change behavior for assistance.',
      'Generative output is more useful than better defaults, search, automation, or workflow design.',
      'Users will trust the assistant enough to act on its recommendations.'
    ];
    result.alternatives = [
      'Usage may be low because the core workflow is not valuable, not because it lacks an assistant.',
      'A rules-based automation or better information architecture may solve the task more reliably.',
      'The highest-value user may need confidence, auditability, or integration more than conversational UX.'
    ];
  } else if(/churn|retention|onboard|onboarding|enterprise|client/.test(t)){
    result.headline = 'You are collapsing a retention problem into one onboarding explanation.';
    result.copy = 'Enterprise churn is usually multi-causal and delayed. A painful onboarding experience can matter, but you need to connect it to activation, time-to-value, adoption depth, and renewal behavior before prioritizing a rebuild.';
    result.assumptions = [
      'Accounts experiencing slower onboarding are measurably more likely to churn later.',
      'Manual work is creating customer pain rather than simply internal operating cost.',
      'Faster onboarding would increase activation or value realization enough to affect renewal.'
    ];
    result.alternatives = [
      'Clients may churn because adoption stalls after onboarding, not during it.',
      'Poor implementation fit, missing integrations, or weak executive sponsorship may dominate retention.',
      'Manual onboarding may actually be compensating for product gaps that automation would expose.'
    ];
  }
  return result;
}

function renderInsights(id, items){
  document.getElementById(id).innerHTML = items.map((item,i)=>`<div class="insight"><b>${i+1}</b><p>${item}</p></div>`).join('');
}

function startChallenge(){
  const text = input.value.trim();
  if(text.length < 18){
    input.focus();
    input.style.borderColor = 'rgba(239,155,125,.75)';
    return;
  }
  input.style.borderColor = '';
  currentAssumption = text;
  const c = buildChallenge(text);
  document.getElementById('workspaceAssumption').textContent = `“${text}”`;
  document.getElementById('challengeHeadline').textContent = c.headline;
  document.getElementById('challengeCopy').textContent = c.copy;
  renderInsights('assumptionList', c.assumptions);
  renderInsights('hypothesisList', c.alternatives);
  intro.hidden = true;
  workspace.hidden = false;
  window.scrollTo({top:0,behavior:'smooth'});
}

function setStage(n){
  document.querySelectorAll('.stage-item').forEach((el,i)=>{
    const stage = i+1;
    el.classList.toggle('is-active',stage===n);
    el.classList.toggle('is-complete',stage<n);
    if(stage<=n) el.disabled=false;
  });
}

function scoreEvidence(text){
  const t = text.toLowerCase();
  let score = Math.min(36, Math.round(text.length/10));
  const tags=[];
  if(/data|analytics|funnel|cohort|metric|rate|%|drop|conversion/.test(t)){score+=18;tags.push('behavioral data')}
  if(/interview|research|user|customer|session|usability/.test(t)){score+=16;tags.push('qualitative signal')}
  if(/test|experiment|a\/b|pilot|control|variant/.test(t)){score+=22;tags.push('causal evidence')}
  if(/7\/10|\d+%|\d+ users|\d+ customers|sample/.test(t)){score+=8;tags.push('specificity')}
  if(/think|feel|believe|heard|sales said/.test(t)){score-=8;tags.push('anecdotal risk')}
  if(evidenceType==='experiment') score+=12;
  if(evidenceType==='analytics') score+=7;
  if(evidenceType==='research') score+=6;
  if(evidenceType==='anecdote') score-=8;
  score=Math.max(18,Math.min(96,score));
  return {score,tags:[...new Set(tags)]};
}

function reviewEvidence(){
  const text=evidenceInput.value.trim();
  if(text.length<20){evidenceInput.focus();return}
  const result=scoreEvidence(text); evidenceScore=result.score;
  const scoreEl=document.getElementById('evidenceScore');
  scoreEl.textContent=result.score;
  document.getElementById('scoreBar').style.width=`${result.score}%`;
  let headline,copy;
  if(result.score>=78){
    headline='Strong signal. Now protect against confirmation bias.';
    copy='You have more than a story: there is observable evidence supporting the hypothesis. The remaining question is whether the evidence isolates the cause well enough to justify scale.';
  } else if(result.score>=55){
    headline='Promising, but still directional.';
    copy='This is enough to justify a focused test — not enough to lock a roadmap. You have signal, but causality and segment impact are still under-specified.';
  } else {
    headline='This is still mostly a narrative.';
    copy='The evidence may explain why the assumption feels believable, but it does not yet separate it from credible alternatives. Invest in learning before investing in build.';
  }
  document.getElementById('reviewHeadline').textContent=headline;
  document.getElementById('reviewCopy').textContent=copy;
  document.getElementById('reviewTags').innerHTML=(result.tags.length?result.tags:['needs stronger evidence']).map(t=>`<span>${t}</span>`).join('');
  evidenceReview.hidden=false;
  renderExperiments();
  experimentStage.hidden=false;
  setStage(3);
  experimentStage.scrollIntoView({behavior:'smooth',block:'center'});
}

function renderExperiments(){
  const t=currentAssumption.toLowerCase();
  let experiments=[
    {name:'Instrument before building',type:'LOWEST COST',copy:'Add event-level instrumentation or observation to quantify where the behavior changes and for which segment.'},
    {name:'Prototype the mechanism',type:'FAST TEST',copy:'Test the proposed experience with a small cohort before changing the production workflow.'},
    {name:'Run a controlled pilot',type:'BEST CAUSAL SIGNAL',copy:'Expose a defined segment to the change and compare the target behavior against a control.'}
  ];
  if(/ai|assistant|copilot|llm|agent/.test(t)) experiments=[
    {name:'Concierge the job first',type:'LEARN THE JOB',copy:'Have humans perform the proposed assistance manually and measure whether users act on it before automating with AI.'},
    {name:'Prototype vs. better UX',type:'COMPARE MECHANISMS',copy:'Test an AI-assisted flow against a simpler non-AI workflow to prove the model adds incremental value.'},
    {name:'Pilot with trust telemetry',type:'HIGHER FIDELITY',copy:'Ship to a small cohort and measure acceptance, edits, overrides, task success, and repeat usage.'}
  ];
  document.getElementById('experimentGrid').innerHTML=experiments.map((e,i)=>`<button class="experiment-card" data-exp="${i}"><span>${e.type}</span><strong>${e.name}</strong><p>${e.copy}</p></button>`).join('');
  document.querySelectorAll('.experiment-card').forEach(btn=>btn.addEventListener('click',()=>selectExperiment(btn,experiments[+btn.dataset.exp])));
}

function selectExperiment(button,exp){
  document.querySelectorAll('.experiment-card').forEach(b=>b.classList.remove('is-selected'));
  button.classList.add('is-selected'); selectedExperiment=exp;
  setTimeout(showReframe,260);
}

function showReframe(){
  if(!selectedExperiment)return;
  const causal = /because|due to|causes|causing/.test(currentAssumption.toLowerCase());
  const reframed = causal
    ? `We have a testable hypothesis — not a fact — that ${currentAssumption.replace(/\.$/,'').replace(/^./,c=>c.toLowerCase())}`
    : `We believe ${currentAssumption.replace(/\.$/,'').replace(/^./,c=>c.toLowerCase())}, but the mechanism still needs to be proven.`;
  document.getElementById('reframedStatement').textContent=reframed;
  document.getElementById('reframeRationale').textContent=`Your evidence scored ${evidenceScore}/100. That is enough to choose the next learning step, not enough to skip it.`;
  document.getElementById('originalBelief').textContent=currentAssumption;
  document.getElementById('whatChanged').textContent=evidenceScore>=70?'The assumption is now bounded by evidence and competing explanations instead of being treated as established truth.':'The claim has been downgraded from conclusion to hypothesis, with explicit uncertainty.';
  document.getElementById('nextEvidence').textContent=`${selectedExperiment.name}: ${selectedExperiment.copy}`;
  reframeStage.hidden=false;
  setStage(4);
  reframeStage.scrollIntoView({behavior:'smooth',block:'start'});
}

function resetAll(){
  currentAssumption=''; evidenceType=''; evidenceScore=0; selectedExperiment=null;
  input.value=''; evidenceInput.value=''; charCount.textContent='0';
  evidenceReview.hidden=true; experimentStage.hidden=true; reframeStage.hidden=true;
  document.querySelectorAll('.evidence-types button').forEach(b=>b.classList.remove('is-selected'));
  workspace.hidden=true; intro.hidden=false; setStage(1);
  window.scrollTo({top:0,behavior:'smooth'}); setTimeout(()=>input.focus(),300);
}

input.addEventListener('input',()=>charCount.textContent=input.value.length);
document.querySelectorAll('[data-example]').forEach(btn=>btn.addEventListener('click',()=>{input.value=btn.dataset.example;charCount.textContent=input.value.length;input.focus()}));
challengeButton.addEventListener('click',startChallenge);
input.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='Enter')startChallenge()});
document.querySelectorAll('[data-evidence-type]').forEach(btn=>btn.addEventListener('click',()=>{evidenceType=btn.dataset.evidenceType;document.querySelectorAll('[data-evidence-type]').forEach(b=>b.classList.toggle('is-selected',b===btn))}));
document.getElementById('submitEvidence').addEventListener('click',reviewEvidence);
document.getElementById('startOver').addEventListener('click',resetAll);
document.getElementById('tryAnother').addEventListener('click',resetAll);
