document.addEventListener('DOMContentLoaded', function() {

  // =======================================================
  // FITUR 1: ANIMASI FADE-IN SAAT SCROLL (Kode lamamu)
  // =======================================================
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  const sectionsToAnimate = document.querySelectorAll('.content-box, .cv-download, .hero, .site-footer');
  sectionsToAnimate.forEach(section => {
    animationObserver.observe(section);
  });


  // =======================================================
  // FITUR 2: NAVIGASI AKTIF SAAT SCROLL (Scroll Spy)
  // =======================================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Hapus kelas 'active' dari semua link
        navLinks.forEach(link => {
          link.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke link yang sesuai
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, { 
    rootMargin: '-50% 0px -50% 0px' // Anggap section aktif jika berada di tengah layar
  });

  sections.forEach(section => {
    scrollSpyObserver.observe(section);
  });


  // =======================================================
  // FITUR 3: FUNGSI TOMBOL "SHOW MORE CERTIFICATES"
  // =======================================================
  const showMoreBtn = document.getElementById('show-more-btn');
  const hiddenCertificates = document.querySelectorAll('.hidden-cert');

  showMoreBtn.addEventListener('click', function() {
    // Tampilkan atau sembunyikan sertifikat tambahan
    hiddenCertificates.forEach(cert => {
      // Jika sertifikat sedang tersembunyi, tampilkan. Jika tidak, sembunyikan.
      if (cert.style.display === 'none' || cert.style.display === '') {
        cert.style.display = 'grid'; // 'grid' agar sesuai dengan layoutnya
      } else {
        cert.style.display = 'none';
      }
    });

    // Ubah teks tombol
    if (this.textContent.includes('Show More')) {
      this.innerHTML = 'Show Less Certificates ▲';
    } else {
      this.innerHTML = 'Show More Certificates ▼';
    }
  });

});