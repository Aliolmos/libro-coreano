
// Aparición suave de tarjetas al entrar en pantalla. Sin JS, todo queda visible.
(function(){
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
