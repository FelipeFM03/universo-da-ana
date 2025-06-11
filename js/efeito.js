const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revelado');
    }
  });
});

document.querySelectorAll('.revelar').forEach(el => observer.observe(el));

setTimeout(() => {
  const bigbang = document.getElementById('bigbang');
  if (bigbang) bigbang.remove();
}, 5000);

document.addEventListener('click', function (e) {
  const heart = document.createElement('span');
  heart.innerText = '💖';
  heart.classList.add('heart');
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Executa o efeito apenas se o scroll desceu
  if (currentScroll > lastScrollTop) {
    const heart = document.createElement('span');
    heart.innerText = '💖';
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${window.scrollY + window.innerHeight / 2}px`;
    heart.style.fontSize = '24px';
    heart.style.opacity = 1;
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    heart.style.zIndex = 9999;

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = 'translateY(-100px) scale(1.5)';
      heart.style.opacity = 0;
    });

    setTimeout(() => heart.remove(), 1000);
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Previni valores negativos
});

let ultimaPosY = window.scrollY;

window.addEventListener('scroll', () => {
  const novaPosY = window.scrollY;
  if (Math.abs(novaPosY - ultimaPosY) > 40) { // só gera coração com scroll mais perceptível
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerText = '💖';

    // Posição aleatória horizontal
    const x = Math.random() * window.innerWidth;
    const y = novaPosY + window.innerHeight / 2;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = 'translateY(-100px) scale(1.5)';
      heart.style.opacity = 0;
    });

    setTimeout(() => heart.remove(), 1000);

    ultimaPosY = novaPosY;
  }
});

document.addEventListener('touchmove', function (e) {
  const touch = e.touches[0];

  const heart = document.createElement('span');
  heart.innerText = '💖';
  heart.style.position = 'absolute';
  heart.style.left = `${touch.pageX}px`;
  heart.style.top = `${touch.pageY}px`;
  heart.style.fontSize = '24px';
  heart.style.opacity = 1;
  heart.style.pointerEvents = 'none';
  heart.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
  heart.style.zIndex = 9999;

  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = 'translateY(-100px) scale(1.5)';
    heart.style.opacity = 0;
  });

  setTimeout(() => heart.remove(), 1000);
});
