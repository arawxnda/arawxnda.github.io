document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  const sectionsToAnimate = document.querySelectorAll('.content-box, .cv-download, .hero');
  sectionsToAnimate.forEach(section => {
    observer.observe(section);
  });
});