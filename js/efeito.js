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