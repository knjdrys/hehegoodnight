const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const starsEl = document.getElementById('stars');
const starCount = 46;
for (let i = 0; i < starCount; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = (Math.random() * 1.6 + 1);
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 70 + '%';
  s.style.width = size + 'px';
  s.style.height = size + 'px';
  s.style.animationDelay = (Math.random() * 4) + 's';
  s.style.animationDuration = (3 + Math.random() * 3) + 's';
  starsEl.appendChild(s);
}

const firefliesEl = document.getElementById('fireflies');
if (!prefersReduced) {
  const fireflyCount = 7;
  for (let i = 0; i < fireflyCount; i++) {
    const f = document.createElement('div');
    f.className = 'firefly';
    f.style.left = (10 + Math.random() * 80) + '%';
    f.style.top = (35 + Math.random() * 55) + '%';
    f.style.setProperty('--fx', (Math.random() * 40 - 20) + 'px');
    f.style.setProperty('--fy', (20 + Math.random() * 30) + 'px');
    f.style.animationDelay = (Math.random() * 6) + 's, ' + (Math.random() * 3) + 's';
    f.style.animationDuration = (7 + Math.random() * 5) + 's, ' + (2 + Math.random() * 2) + 's';
    firefliesEl.appendChild(f);
  }
}

const petalField = document.getElementById('petalField');
const roseWrap = document.getElementById('roseWrap');

function shedPetals(count) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'petal-fall';

    const startX = 70 + Math.random() * 40;
    const dx = (Math.random() - 0.5) * 90;
    const dr = (Math.random() > 0.5 ? 1 : -1) * (120 + Math.random() * 160);

    p.style.left = startX + 'px';
    p.style.setProperty('--dx', dx + 'px');
    p.style.setProperty('--dr', dr + 'deg');
    p.style.animationDelay = (Math.random() * 0.6) + 's';
    p.style.animationDuration = (2.6 + Math.random() * 1.4) + 's';

    petalField.appendChild(p);
    requestAnimationFrame(() => p.classList.add('show'));
    setTimeout(() => p.remove(), 4600);
  }
}

setTimeout(() => shedPetals(2), 3600);
roseWrap.addEventListener('click', () => shedPetals(6));

const moon = document.getElementById('moon');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (canHover && !prefersReduced) {
  document.addEventListener('mousemove', (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5);
    const ny = (e.clientY / window.innerHeight - 0.5);
    moon.style.transform = `translate(${nx * -10}px, ${ny * -8}px)`;
  });
}
