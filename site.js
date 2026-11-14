// Stand-ins for Squarespace built-ins: mobile header menu (closes after a tap), and the demo (Accordion block + images).
const b=document.querySelector('.burger'),n=document.getElementById('nv');
if(b){b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('.qi>button').forEach(btn=>btn.addEventListener('click',()=>{
  const qi=btn.parentElement, wide=matchMedia('(min-width:901px)').matches, was=qi.classList.contains('on');
  document.querySelectorAll('.qi').forEach(x=>{x.classList.remove('on');x.firstElementChild.setAttribute('aria-expanded','false')});
  if(wide||!was){qi.classList.add('on');btn.setAttribute('aria-expanded','true')}
}));
// Offer buttons preselect the form's "I'm interested in" field
const sel=document.getElementById('ft');
document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>{if(sel)sel.value=a.dataset.interest}));
