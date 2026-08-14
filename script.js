const starsEl = document.getElementById('stars');
const starCount = 46;

for (let i = 0; i < starCount; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 70 + '%';
  s.style.width = s.style.height = (Math.random() * 1.6 + 1) + 'px';
  s.style.animationDelay = (Math.random() * 4) + 's';
  s.style.animationDuration = (3 + Math.random() * 3) + 's';
  starsEl.appendChild(s);
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

setTimeout(() => shedPetals(2), 3400);
roseWrap.addEventListener('click', () => shedPetals(6));
