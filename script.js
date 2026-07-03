const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  })
},{threshold:.18});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow = document.getElementById('cursorGlow');
window.addEventListener('pointermove', (e)=>{
  if(!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const scenes = document.querySelectorAll('[data-scene]');
const sceneObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.body.dataset.scene = [...scenes].indexOf(entry.target);
    }
  });
},{threshold:.45});
scenes.forEach(scene=>sceneObserver.observe(scene));
