document.addEventListener('DOMContentLoaded',()=>{const menu=document.querySelector('.menu-button'),links=document.querySelector('.links');menu?.addEventListener('click',()=>{let open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));const cards=[...document.querySelectorAll('.flip')],need=document.querySelector('#need');for(const card of cards){const b=card.querySelector('.flip-button');b?.addEventListener('click',()=>{const flip=!card.classList.contains('is-flipped');cards.forEach(c=>{c.classList.remove('is-flipped');c.querySelector('.flip-button')?.setAttribute('aria-pressed','false')});card.classList.toggle('is-flipped',flip);b.setAttribute('aria-pressed',String(flip));});const link=card.querySelector('a[data-need]');link?.addEventListener('click',()=>{if(need){need.value=link.dataset.need;need.dispatchEvent(new Event('change'));}});}const other=document.querySelector('#other-wrap');need?.addEventListener('change',()=>{const show=need.value==='other';other?.classList.toggle('hidden',!show);const input=other?.querySelector('textarea');if(input)input.required=show;});document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const msg=document.querySelector('#form-msg');if(msg){msg.hidden=false;msg.focus();}});});
// V5.1: optional form; the calendar remains the primary contact option.
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('form-toggle');
  const panel = document.getElementById('form-reveal');
  trigger?.addEventListener('click', () => {
    if (!panel) return;
    const isOpening = panel.hasAttribute('hidden');
    if (isOpening) panel.removeAttribute('hidden'); else panel.setAttribute('hidden', '');
    trigger.setAttribute('aria-expanded', String(isOpening));
    trigger.textContent = isOpening ? (document.documentElement.lang.startsWith('fr') ? 'Masquer le formulaire' : 'Hide the form') : (document.documentElement.lang.startsWith('fr') ? 'Remplir le formulaire' : 'Fill out the form');
    if (isOpening) panel.querySelector('input')?.focus({preventScroll:true});
  });
});
