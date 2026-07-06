/* ============================================================
   DEV BLUE TECH — Main JavaScript
   GSAP Animations, ScrollTrigger, Interactions
   ============================================================ */

// ===== REGISTER GSAP PLUGINS =====
gsap.registerPlugin(ScrollTrigger);

// ===== NAVBAR SCROLL EFFECT =====
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('is-scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const isOpen = menu.classList.toggle('is-open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const navHeight = document.getElementById('navbar').offsetHeight;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  });
});

// ===== GSAP — HERO ANIMATIONS =====
(function initHeroAnimations() {
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.hero__badge', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3
    })
    .from('.hero__title', {
      opacity: 0,
      y: 40,
      duration: 1,
    }, '-=0.4')
    .from('.hero__subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
    }, '-=0.5')
    .from('.hero__actions', {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, '-=0.4')
    .from('.hero__stats', {
      opacity: 0,
      y: 30,
      scale: 0.96,
      duration: 0.8,
    }, '-=0.3')
    .from('.hero__scroll-indicator', {
      opacity: 0,
      duration: 0.6,
    }, '-=0.2');
})();

// ===== GSAP — SECTION REVEAL ANIMATIONS =====
(function initScrollRevealAnimations() {
  // Generic section header reveals
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Service cards — staggered reveal
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.7,
      delay: (i % 4) * 0.1,
      ease: 'power3.out'
    });
  });

  // Why cards — staggered
  gsap.utils.toArray('.why-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: (i % 3) * 0.12,
      ease: 'power3.out'
    });
  });

  // Process steps — sequential
  gsap.utils.toArray('.process__step').forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -30,
      duration: 0.7,
      delay: i * 0.08,
      ease: 'power3.out'
    });
  });

  // Portfolio cards
  gsap.utils.toArray('.portfolio-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.7,
      delay: (i % 3) * 0.1,
      ease: 'power3.out'
    });
  });

  // Team cards
  gsap.utils.toArray('.team-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // Contact section
  gsap.from('.contact__info', {
    scrollTrigger: {
      trigger: '.contact__grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('.contact__form', {
    scrollTrigger: {
      trigger: '.contact__grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    x: 40,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });

  // CTA section
  gsap.from('.cta__title', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Testimonials
  gsap.from('.testimonials__slider', {
    scrollTrigger: {
      trigger: '.testimonials__slider',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Trusted / Marquee
  gsap.from('.trusted', {
    scrollTrigger: {
      trigger: '.trusted',
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Footer
  gsap.from('.footer__grid', {
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });
})();

// ===== COUNTER ANIMATION =====
(function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            const progress = this.progress();
            const currentVal = Math.floor(target * progress);
            counter.textContent = prefix + currentVal + suffix;
          },
          onComplete: function() {
            counter.textContent = prefix + target + suffix;
          }
        });
      }
    });
  });
})();

// ===== PARALLAX ON BG ORBS =====
(function initParallax() {
  const orbs = document.querySelectorAll('.bg-orb');
  
  window.addEventListener('mousemove', (e) => {
    const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
    
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 8;
      gsap.to(orb, {
        x: xPercent * speed,
        y: yPercent * speed,
        duration: 1.5,
        ease: 'power2.out'
      });
    });
  });
})();

// ===== SERVICE CARD HOVER TILT =====
(function initCardTilt() {
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

// ===== PORTFOLIO FILTER =====
(function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio__filter');
  const cards = document.querySelectorAll('.portfolio-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
            onStart: () => { card.style.display = ''; }
          });
        } else {
          gsap.to(card, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => { card.style.display = 'none'; }
          });
        }
      });
    });
  });
})();

// ===== CONTACT FORM → WHATSAPP =====
function submitContactForm() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const service = document.getElementById('contactService').value;
  const message = document.getElementById('contactMessage').value.trim();
  
  if (!name || !email) {
    // Highlight empty fields
    if (!name) document.getElementById('contactName').style.borderColor = '#EF4444';
    if (!email) document.getElementById('contactEmail').style.borderColor = '#EF4444';
    return;
  }
  
  const text = encodeURIComponent(
    `Hello Dev Blue Tech 👋\n━━━━━━━━━━━━━━\nName: ${name}\nEmail: ${email}\nService: ${service || 'Not specified'}\nMessage: ${message || 'No additional details'}\n━━━━━━━━━━━━━━\nSent from Dev Blue Tech Website`
  );
  
  window.open(`https://wa.me/201021858848?text=${text}`, '_blank');
}

// Reset field border on focus
document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
  input.addEventListener('focus', function() {
    this.style.borderColor = '';
  });
});

// ===== PAGE LOAD ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
(function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const navHeight = document.getElementById('navbar').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach(link => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  });
})();
