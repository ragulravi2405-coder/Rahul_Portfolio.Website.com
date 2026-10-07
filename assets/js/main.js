/* ==========================================================================
   Rahul R Portfolio - Core Interactive JavaScript & Scroll Animations
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

  // Esc key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeImageModal();
    }
  });

  // Navbar Background Scroll Shadow & Elevation
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Modern IntersectionObserver for Gentle Viewport Fade-Up (One-time, lightweight)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animElements = document.querySelectorAll(
      '.glass-card, .offer-card, .project-card, .section-header, .stat-item, .hero-content, .hero-avatar-wrapper'
    );

    animElements.forEach((el, index) => {
      el.classList.add('fade-in-up');
      // Subtle stagger delay for grid items
      if (el.classList.contains('glass-card') || el.classList.contains('offer-card') || el.classList.contains('stat-item')) {
        el.style.transitionDelay = `${(index % 3) * 0.08}s`;
      }
      animateOnScroll.observe(el);
    });
  }
});
