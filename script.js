document.documentElement.classList.add('js');
(function(){
  var root=document.documentElement;
  try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')root.setAttribute('data-theme',t);}catch(e){}
  document.getElementById('theme').addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);
    var n=dark?'light':'dark';root.setAttribute('data-theme',n);
    try{localStorage.setItem('theme',n);}catch(e){}
  });
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el);});
  document.querySelectorAll('.more').forEach(function(b){b.addEventListener('click',function(){
    var open=b.getAttribute('aria-expanded')==='true';
    b.setAttribute('aria-expanded',String(!open));
    document.getElementById(b.getAttribute('aria-controls')).classList.toggle('open',!open);
  });});
  var bar=document.getElementById('bar');
  function onScroll(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?scrollY/h:0)+')';}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  var links=document.querySelectorAll('nav a');
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id);});}});},{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('section[id]').forEach(function(s){so.observe(s);});
})();
