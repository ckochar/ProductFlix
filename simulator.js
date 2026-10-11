const rounds = [
  {
    kicker: "ROUND 01 · COST PRESSURE",
    title: "Where do you start?",
    scenario: "Finance wants a 40% cost reduction. Today every package receives both AI processing and a full human review. Ops says most failures are repetitive and predictable.",
    signals: ["68% of checks are deterministic", "Critical errors are rare but expensive", "Human review = largest cost driver"],
    choices: [
      {
        title: "Reduce human review immediately",
        desc: "Move from 100% review to a random 30% sample.", tradeoff: "Fast savings · highest control risk",
        delta: { accuracy:-4, cost:-0.08, human:-70, speed:.45, risk:3 }, score:{risk:0,systems:0,cost:4,experiment:2},
        result:"You hit the cost target fast — but you removed the control before understanding where errors concentrate.",
        detail:"Throughput jumps and operating cost falls sharply. Risk flags the rollout because sampling treats a low-risk typo and a critical compliance miss the same way."
      },
      {
        title: "Move deterministic checks into rules",
        desc: "Use rules for signatures, required fields and date logic before invoking AI.", tradeoff: "Moderate savings · cleaner architecture",
        delta: { accuracy:2, cost:-0.04, human:-15, speed:.18, risk:-1 }, score:{risk:2,systems:4,cost:2,experiment:1},
        result:"You remove expensive ambiguity from work that was never probabilistic.",
        detail:"Simple checks become cheaper, faster and more explainable. Humans still review most cases, so the immediate savings are modest — but you now have a cleaner foundation."
      },
      {
        title: "Swap to a smaller model",
        desc: "Route the entire workflow through a cheaper, faster model.", tradeoff: "Model savings · possible quality drop",
        delta: { accuracy:-2, cost:-0.05, human:0, speed:.16, risk:1 }, score:{risk:1,systems:1,cost:3,experiment:3},
        result:"Infrastructure cost improves, but human review remains untouched.",
        detail:"You save on inference, yet the biggest operating cost is still manual review. Accuracy slips slightly on nuanced cases and Risk asks for evidence before scaling."
      },
      {
        title: "Instrument first, optimize second",
        desc: "Spend two weeks classifying failure types, confidence and review outcomes.", tradeoff: "Slower start · better evidence",
        delta: { accuracy:1, cost:0, human:0, speed:0, risk:-1 }, score:{risk:3,systems:3,cost:0,experiment:4},
        result:"You delay savings, but gain a map of where automation is actually safe.",
        detail:"The data shows a small set of checks drive most review effort. Leadership is impatient, but your next decision can be targeted rather than intuitive."
      }
    ]
  },
  {
    kicker:"ROUND 02 · HUMAN-IN-THE-LOOP",
    title:"How do you redesign review?",
    scenario:"Your first change is live. Risk agrees that 100% human review is unnecessary — but only if critical exceptions remain controlled.",
    signals:["High-confidence passes are rarely overturned", "Critical rules ≠ cosmetic rules", "Reviewer capacity is the bottleneck"],
    choices:[
      {title:"Risk-tier the queue",desc:"Auto-clear low-risk/high-confidence cases; force review on critical or uncertain cases.",tradeoff:"Targeted control · strong savings",delta:{accuracy:1,cost:-0.05,human:-35,speed:.35,risk:-1},score:{risk:4,systems:4,cost:3,experiment:1},result:"Human attention becomes a scarce resource you allocate by risk.",detail:"Review volume falls substantially without removing oversight from critical cases. Ops likes the queue; Risk likes the explicit control logic."},
      {title:"Confidence threshold only",desc:"Auto-clear anything above 95% confidence regardless of rule type.",tradeoff:"Simple policy · hidden criticality",delta:{accuracy:-1,cost:-0.045,human:-32,speed:.3,risk:2},score:{risk:1,systems:2,cost:3,experiment:2},result:"The policy is easy to explain — but confidence is not the same as business risk.",detail:"A model can be very confident on the wrong field. You save review time, but criticality is still flattened into a single score."},
      {title:"Random QA sample",desc:"Auto-clear most cases and audit 10% at random.",tradeoff:"Maximum speed · weak detection",delta:{accuracy:-3,cost:-0.07,human:-50,speed:.5,risk:3},score:{risk:0,systems:0,cost:4,experiment:2},result:"Cost falls quickly, but your QA strategy is blind to where failure is most likely.",detail:"Random sampling tells you average quality. It does not guarantee coverage of the cases that matter most."},
      {title:"Keep 100% review for now",desc:"Improve tooling before changing the control model.",tradeoff:"Safest · misses cost objective",delta:{accuracy:1,cost:-0.01,human:0,speed:.05,risk:-1},score:{risk:4,systems:1,cost:0,experiment:0},result:"You preserve safety, but the operating model barely changes.",detail:"Risk is comfortable. Finance is not. The product gets incrementally better while the core cost structure remains intact."}
    ]
  },
  {
    kicker:"ROUND 03 · MODEL ROUTING",
    title:"One model for everything?",
    scenario:"Engineering finds that simple extraction and complex document reasoning are using the same expensive model. You can redesign model routing before the next release.",
    signals:["62% of calls are simple extraction", "Ambiguous cases drive most model errors", "Latency matters to operations"],
    choices:[
      {title:"Route by task complexity",desc:"Small model for extraction; stronger model only for ambiguity and reasoning.",tradeoff:"More orchestration · better unit economics",delta:{accuracy:1,cost:-0.035,human:-5,speed:.15,risk:0},score:{risk:2,systems:4,cost:3,experiment:2},result:"You stop paying premium-model prices for commodity work.",detail:"The architecture becomes more complex, but cost and latency improve while difficult cases retain stronger reasoning capability."},
      {title:"Use the cheapest model everywhere",desc:"Standardize on the smaller model and tune prompts aggressively.",tradeoff:"Simple stack · quality risk",delta:{accuracy:-3,cost:-0.055,human:5,speed:.22,risk:2},score:{risk:0,systems:1,cost:4,experiment:2},result:"Inference gets cheaper; exceptions get noisier.",detail:"More cases fall into review because the smaller model struggles on nuance. Some infrastructure savings return as operational cost."},
      {title:"Keep the strongest model everywhere",desc:"Prioritize accuracy and avoid orchestration complexity.",tradeoff:"Stable quality · expensive",delta:{accuracy:1,cost:0,human:-2,speed:-.03,risk:-1},score:{risk:3,systems:1,cost:0,experiment:0},result:"Quality is predictable, but you leave obvious unit-economics gains untouched.",detail:"The system remains simple and safe. Finance points out that model spend is now the easiest remaining savings lever."},
      {title:"A/B route 20% of traffic",desc:"Test smaller-model routing behind eval gates before scaling.",tradeoff:"Evidence first · slower savings",delta:{accuracy:0,cost:-0.015,human:-2,speed:.05,risk:-1},score:{risk:3,systems:2,cost:1,experiment:4},result:"You buy information before committing architecture.",detail:"Savings are modest this quarter, but you establish comparative quality data and a safe path to scale if the experiment holds."}
    ]
  },
  {
    kicker:"ROUND 04 · SCALE OR HOLD",
    title:"Leadership wants the win. Do you scale?",
    scenario:"The pilot is trending well. Finance wants enterprise rollout next month. Risk asks what evidence proves the new operating model will remain safe at 10× volume.",
    signals:["Pilot volume is still limited", "Override data is now available", "Edge cases increase with scale"],
    choices:[
      {title:"Scale behind eval gates",desc:"Expand by cohort with escape-rate thresholds, override telemetry and rollback criteria.",tradeoff:"Controlled scale · operational discipline",delta:{accuracy:1,cost:-0.015,human:-5,speed:.08,risk:-1},score:{risk:4,systems:4,cost:2,experiment:3},result:"You scale the product and the control system together.",detail:"Growth is slightly slower than a big-bang launch, but every cohort creates evidence. Rollback criteria make Risk a partner rather than a blocker."},
      {title:"Roll out everywhere",desc:"The pilot is good enough. Capture savings while momentum is high.",tradeoff:"Fastest value · weakest safety margin",delta:{accuracy:-2,cost:-0.025,human:-8,speed:.12,risk:2},score:{risk:0,systems:1,cost:4,experiment:1},result:"You maximize short-term value and inherit long-tail uncertainty.",detail:"The launch looks great until new document variants appear. Ops can absorb them, but the product now depends on reactive exception handling."},
      {title:"Hold until 99% accuracy",desc:"Delay rollout until aggregate model accuracy crosses a hard threshold.",tradeoff:"Conservative · metric may mislead",delta:{accuracy:1,cost:0,human:0,speed:0,risk:-1},score:{risk:4,systems:0,cost:0,experiment:1},result:"You optimize for a clean metric instead of the risk distribution underneath it.",detail:"Aggregate accuracy improves, but the threshold does not tell you whether the remaining 1% contains the errors that matter most."},
      {title:"Expand one workflow at a time",desc:"Prioritize the highest-volume, lowest-risk workflow and learn before broad rollout.",tradeoff:"Focused scale · slower breadth",delta:{accuracy:1,cost:-0.012,human:-4,speed:.06,risk:-1},score:{risk:3,systems:3,cost:1,experiment:4},result:"You turn rollout order into a product decision.",detail:"The business sees measurable value while the team learns on a bounded surface. Expansion becomes evidence-driven instead of calendar-driven."}
    ]
  }
];

const state = {round:0, accuracy:91, cost:.24, human:100, speed:1, risk:1, scores:{risk:0,systems:0,cost:0,experiment:0}, choices:[]};
let pendingChoice = null;
const $ = id => document.getElementById(id);

function clamp(v,min,max){return Math.max(min,Math.min(max,v))}
function money(v){return `$${v.toFixed(2)}`}
function pct(v){return `${Math.round(v)}%`}
function speed(v){return `${v.toFixed(2).replace(/0$/,'')}×`}
function savings(){return clamp((.24-state.cost)/.24*100,0,90)}

function resetState(){
  Object.assign(state,{round:0,accuracy:91,cost:.24,human:100,speed:1,risk:1,scores:{risk:0,systems:0,cost:0,experiment:0},choices:[]});
  pendingChoice=null;
}

function renderRound(){
  const r=rounds[state.round];
  $('roundLabel').textContent=`Decision ${state.round+1} of ${rounds.length}`;
  $('progressPercent').textContent=`${Math.round((state.round+1)/rounds.length*100)}%`;
  $('progressBar').style.width=`${(state.round+1)/rounds.length*100}%`;
  $('roundKicker').textContent=r.kicker;
  $('decisionTitle').textContent=r.title;
  $('scenarioCopy').textContent=r.scenario;
  $('signalStrip').innerHTML=r.signals.map(x=>`<span>${x}</span>`).join('');
  $('choiceGrid').innerHTML=r.choices.map((c,i)=>`<button class="choice-card" data-choice="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><strong>${c.title}</strong><p>${c.desc}</p><span class="tradeoff">${c.tradeoff}</span></button>`).join('');
  $('choiceGrid').hidden=false;$('consequence').hidden=true;
  document.querySelectorAll('[data-choice]').forEach(btn=>btn.addEventListener('click',()=>previewChoice(Number(btn.dataset.choice))));
  updateScoreboard();
}

function previewChoice(index){
  pendingChoice=index;
  const c=rounds[state.round].choices[index];
  $('choiceGrid').hidden=true;$('consequence').hidden=false;
  $('consequenceTitle').textContent=c.result;
  $('consequenceCopy').textContent=c.detail;
  const chips=[];
  const labels={accuracy:'accuracy',cost:'cost',human:'human review',speed:'throughput',risk:'risk'};
  Object.entries(c.delta).forEach(([k,v])=>{
    if(v===0)return;
    let text=''; let cls='neutral';
    if(k==='accuracy'||k==='human') text=`${v>0?'+':''}${v}${k==='accuracy'?' pts':' pts'} ${labels[k]}`;
    if(k==='cost') text=`${v>0?'+':''}$${v.toFixed(3)} ${labels[k]}`;
    if(k==='speed') text=`${v>0?'+':''}${v.toFixed(2)}× ${labels[k]}`;
    if(k==='risk') text=`${v>0?'+':''}${v} ${labels[k]}`;
    const beneficial=(k==='accuracy'||k==='speed')?v>0:(k==='cost'||k==='human'||k==='risk')?v<0:false;
    cls=beneficial?'good':'bad';chips.push(`<span class="${cls}">${text}</span>`);
  });
  $('impactChips').innerHTML=chips.join('');
}

function commitChoice(){
  if(pendingChoice===null)return;
  const c=rounds[state.round].choices[pendingChoice];
  const before={accuracy:state.accuracy,cost:state.cost,human:state.human,speed:state.speed,risk:state.risk};
  state.accuracy=clamp(state.accuracy+c.delta.accuracy,70,99);
  state.cost=clamp(state.cost+c.delta.cost,.07,.40);
  state.human=clamp(state.human+c.delta.human,5,100);
  state.speed=clamp(state.speed+c.delta.speed,.7,3);
  state.risk=clamp(state.risk+c.delta.risk,1,5);
  Object.keys(state.scores).forEach(k=>state.scores[k]+=c.score[k]||0);
  state.choices.push({round:state.round,title:c.title,result:c.result,detail:c.detail});
  updateScoreboard(before);
  pendingChoice=null;
  if(state.round===rounds.length-1){setTimeout(showResults,450)}else{state.round++;setTimeout(renderRound,300)}
}

function deltaText(current,old,format='num'){
  if(old===undefined)return '—'; const d=current-old;if(Math.abs(d)<.0001)return '—';
  if(format==='money')return `${d>0?'+':''}$${d.toFixed(2)}`;
  if(format==='speed')return `${d>0?'+':''}${d.toFixed(2)}×`;
  return `${d>0?'+':''}${Math.round(d)}`;
}
function updateScoreboard(before={}){
  $('accuracyValue').textContent=pct(state.accuracy);$('costValue').textContent=money(state.cost);$('humanValue').textContent=pct(state.human);$('speedValue').textContent=speed(state.speed);
  $('accuracyDelta').textContent=deltaText(state.accuracy,before.accuracy);$('costDelta').textContent=deltaText(state.cost,before.cost,'money');$('humanDelta').textContent=deltaText(state.human,before.human);$('speedDelta').textContent=deltaText(state.speed,before.speed,'speed');
  $('accuracyMeter').style.width=`${state.accuracy}%`;$('costMeter').style.width=`${clamp(state.cost/.30*100,10,100)}%`;$('humanMeter').style.width=`${state.human}%`;$('speedMeter').style.width=`${clamp(state.speed/2.2*100,10,100)}%`;
  const labels=['LOW','GUARDED','ELEVATED','HIGH','CRITICAL'];$('riskLabel').textContent=labels[state.risk-1];
  $('riskLabel').style.color=state.risk<=2?'var(--green)':state.risk===3?'var(--amber)':'var(--red)';
  [...$('riskDots').children].forEach((dot,i)=>{dot.className='';if(i<state.risk)dot.classList.add(state.risk<=2?'active':state.risk===3?'warn':'danger')});
  $('savingsValue').textContent=`${Math.round(savings())}%`;
}

function getArchetype(){
  const s=state.scores; const max=Math.max(...Object.values(s));
  if(s.systems===max)return ['Systems Thinker','You optimized the operating model, not just one metric. You tend to separate deterministic work, probabilistic judgment and human control before chasing scale.'];
  if(s.risk===max)return ['Risk Guardian','You protect trust and compliance first. You prefer evidence, explicit controls and reversible rollout over aggressive automation.'];
  if(s.cost===max)return ['Scale Optimizer','You aggressively pursue unit economics and throughput. You are comfortable trading architectural purity for measurable operating leverage.'];
  return ['Experiment-First PM','You buy information before making irreversible bets. You favor pilots, comparative evidence and staged learning over intuition.'];
}
function showResults(){
  $('game').hidden=true;$('results').hidden=false;window.scrollTo({top:0,behavior:'smooth'});
  const [name,summary]=getArchetype();$('archetypeName').textContent=name;$('archetypeSummary').textContent=summary;
  $('finalAccuracy').textContent=pct(state.accuracy);$('finalCost').textContent=money(state.cost);$('finalHuman').textContent=pct(state.human);$('finalSpeed').textContent=speed(state.speed);
  const save=Math.round(savings());const target=$('targetResult');
  if(save>=40&&state.risk<=2){target.className='target-result success';target.textContent=`Target achieved: ${save}% cost reduction with ${['LOW','GUARDED'][state.risk-1]} compliance risk.`}
  else if(save>=40){target.className='target-result partial';target.textContent=`Cost target achieved (${save}%), but compliance risk is ${['LOW','GUARDED','ELEVATED','HIGH','CRITICAL'][state.risk-1]}. The operating model needs stronger controls.`}
  else if(save>=25&&state.risk<=2){target.className='target-result partial';target.textContent=`Strong foundation: ${save}% cost reduction with controlled risk, but you missed the 40% quarter target.`}
  else{target.className='target-result fail';target.textContent=`You finished at ${save}% cost reduction. The strategy did not satisfy both the savings and control objectives.`}
  const maxScore=16;['risk','systems','cost','experiment'].forEach(k=>{$(`bar${k[0].toUpperCase()+k.slice(1)}`).style.width=`${clamp(state.scores[k]/maxScore*100,8,100)}%`});
  $('recapList').innerHTML=state.choices.map((c,i)=>`<div class="recap-item"><span>DECISION ${i+1}</span><strong>${c.title}</strong><p>${c.result}</p></div>`).join('');
}
function startGame(){resetState();$('intro').hidden=true;$('results').hidden=true;$('game').hidden=false;renderRound();window.scrollTo({top:0,behavior:'smooth'})}
function restart(){startGame()}

$('startButton').addEventListener('click',startGame);$('continueButton').addEventListener('click',commitChoice);$('changeChoice').addEventListener('click',()=>{$('choiceGrid').hidden=false;$('consequence').hidden=true;pendingChoice=null});$('restartTop').addEventListener('click',restart);$('playAgain').addEventListener('click',restart);
$('revealApproach').addEventListener('click',()=>{$('approachFlow').hidden=false;$('revealApproach').textContent='Approach revealed';$('revealApproach').disabled=true});
