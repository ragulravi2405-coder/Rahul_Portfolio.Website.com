/* ==========================================================================
   Rahul R Portfolio - Core Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileToggle.querySelector('i')) {
          mobileToggle.querySelector('i').className = 'fas fa-bars';
        }
      });
    });
  }

  // Active Link Highlight based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .bottom-nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Image Lightbox Modal Handler
  const modalBackdrop = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCloseBtn = document.querySelector('.modal-close');

  window.openImageModal = (imageSrc, altText = 'Preview Image') => {
    if (modalBackdrop && modalImage) {
      modalImage.src = imageSrc;
      modalImage.alt = altText;
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeImageModal = () => {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeImageModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeImageModal();
      }
    });
  }

  // Navbar Background Scroll Shadow
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      navbar.style.background = 'rgba(11, 15, 25, 0.95)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.background = 'var(--bg-glass)';
    }
  });
});
