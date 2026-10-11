const modes={
  wrong:{title:"Make correction the primary action.",copy:"When the context is wrong, the fastest trust repair is not an explanation — it’s a correction path that updates what the system uses next.",actions:["Correct this memory","Mark outdated","Show source"]},
  creepy:{title:"Explain provenance before asking for control.",copy:"Accuracy doesn’t remove surprise. A lightweight receipt should answer: what did the system use, where did it come from, and why was it relevant here?",actions:["Why this was used","Show source","Don’t use here"]},
  overreach:{title:"Add scope, not just delete.",copy:"The user may want a memory to exist without influencing every task. The missing control is often contextual suppression, not permanent forgetting.",actions:["Don’t use here","Use less often","Limit to this project"]}
};
const buttons=[...document.querySelectorAll('#challengeGrid button')];
const result=document.getElementById('challengeResult');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.toggle('is-active',b===btn));
  const data=modes[btn.dataset.mode];
  document.getElementById('resultTitle').textContent=data.title;
  document.getElementById('resultCopy').textContent=data.copy;
  document.getElementById('resultActions').innerHTML=data.actions.map(x=>`<span>${x}</span>`).join('');
  result.hidden=false;
  result.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'ease-out'});
}));
const receiptToggle=document.getElementById('receiptToggle');
const receiptPanel=document.getElementById('receiptPanel');
receiptToggle.addEventListener('click',()=>{receiptPanel.hidden=!receiptPanel.hidden;receiptToggle.textContent=receiptPanel.hidden?'✦ Personalized using 2 memories':'✦ Memory receipt open';});
document.getElementById('jumpChallenge').addEventListener('click',()=>document.getElementById('challenge').scrollIntoView({behavior:'smooth'}));
