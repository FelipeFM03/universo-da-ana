const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revelado');
    }
  });
});

document.querySelectorAll('.revelar').forEach(el => observer.observe(el));
