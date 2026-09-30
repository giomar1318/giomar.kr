document.querySelector('.menu-toggle').addEventListener('click',e=>{const b=e.currentTarget;const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}));
const dialog=document.querySelector('#art-dialog');
document.querySelectorAll('.art-open').forEach(button=>button.addEventListener('click',()=>{const d=button.dataset;document.querySelector('#dialog-image').src=d.fullSrc||`assets/${d.image}.webp`;document.querySelector('#dialog-image').alt=d.title;document.querySelector('#dialog-title').textContent=d.title;document.querySelector('#dialog-category').textContent=d.category;document.querySelector('#dialog-description').textContent=d.description;dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
const videos=[...document.querySelectorAll('video')];videos.forEach(v=>v.addEventListener('play',()=>videos.forEach(other=>{if(other!==v)other.pause()})));
document.addEventListener('visibilitychange',()=>{if(document.hidden)videos.forEach(v=>v.pause())});
const config=window.GIOMAR_CONTACT||{};const safeURL=value=>{try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href:null}catch{return null}};
for(const key of ['instagram','kakao']){const url=safeURL(config[key]);if(url){const a=document.querySelector(`[data-contact="${key}"]`);a.href=url;a.target='_blank';a.rel='noopener noreferrer'}}
const inquiry=document.querySelector('[data-contact="inquiry"]');if(config.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)){inquiry.href=`mailto:${encodeURIComponent(config.email)}?subject=${encodeURIComponent('GIOMAR 강의·협업 문의')}`;inquiry.removeAttribute('target');inquiry.querySelector('.inquiry-label').textContent='강의 · 협업 문의'}else if(safeURL(config.instagram)){inquiry.href=safeURL(config.instagram)}
for(const key of ['youtube','blog']){const url=safeURL(config[key]);if(url){const a=document.createElement('a');a.href=url;a.textContent=key.toUpperCase()+' ↗';a.target='_blank';a.rel='noopener noreferrer';document.querySelector('#extra-contacts').append(a)}}
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.section-head,.artwork,.create-grid article').forEach(el=>{el.classList.add('reveal');observer.observe(el)})}

const motionPlayer=document.querySelector('#motion-player');
document.querySelectorAll('.motion-choice').forEach(button=>button.addEventListener('click',()=>{if(button.getAttribute('aria-pressed')==='true')return;motionPlayer.pause();const d=button.dataset;motionPlayer.poster=`assets/${d.film}-poster.webp`;motionPlayer.querySelector('source').src=`assets/${d.film}.mp4`;motionPlayer.setAttribute('aria-label',d.title);motionPlayer.load();document.querySelector('#motion-title').textContent=d.title;document.querySelector('#motion-copy').textContent=d.description;document.querySelectorAll('.motion-choice').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))}));
document.querySelector('.archive-works')?.addEventListener('toggle',e=>{if(e.currentTarget.open)e.currentTarget.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))});


document.querySelectorAll("details").forEach(d=>d.addEventListener("toggle",()=>{if(d.open)d.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"))}));

const projectDialog=document.querySelector('#project-video-dialog');
const projectVideo=document.querySelector('#project-video');
document.querySelector('.project-video-open').addEventListener('click',()=>{const source=projectVideo.querySelector('source');if(!source.src){source.src=source.dataset.src;projectVideo.load()}projectDialog.showModal();document.body.classList.add('modal-open');projectVideo.play().catch(()=>{})});
document.querySelector('.project-video-close').addEventListener('click',()=>projectDialog.close());
projectDialog.addEventListener('close',()=>{projectVideo.pause();document.body.classList.remove('modal-open')});
projectDialog.addEventListener('click',e=>{if(e.target===projectDialog){const r=projectDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)projectDialog.close()}});
