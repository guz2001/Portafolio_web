/*
 * ============================================================
 *  MAIN.JS — Portafolio Juan David Guzmán
 *  Lógica principal: cursor, navbar scroll, typing effect
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
   * 🔵 CURSOR PERSONALIZADO
   * ===================================================== */
  const cursorDot  = document.querySelector('.cursor__dot');
  const cursorRing = document.querySelector('.cursor__ring');
  const cursor     = document.querySelector('.cursor');

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  // Actualiza posición del punto (instantáneo)
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top  = `${mouseY}px`;
  });

  // Anillo sigue con delay suave (lerp = interpolación lineal)
  function lerpCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top  = `${ringY}px`;
    requestAnimationFrame(lerpCursor);
  }
  lerpCursor();

  // El anillo se expande al pasar sobre elementos interactivos
  const hoverTargets = document.querySelectorAll('a, button, .navbar__link, .badge, .btn');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
  });

  // Oculta el cursor al salir de la ventana
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });


  /* =====================================================
   * 🧭 NAVBAR — Efecto al hacer scroll
   * ===================================================== */
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true }); // passive: true → mejor performance


  /* =====================================================
   * 🍔 HAMBURGER — Menú móvil
   * ===================================================== */
  const hamburger = document.querySelector('.navbar__hamburger');
  const menu      = document.querySelector('.navbar__menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en un link
    document.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }


  /* =====================================================
   * ⌨️ TYPING EFFECT — Efecto de escritura en el hero
   * ===================================================== */
  const typingEl = document.querySelector('.hero__typing-text');

  // Textos que van apareciendo uno tras otro
  const phrases = [
    'Ingeniero de Sistemas',
    'Desarrollador Fullstack',
    'Java Developer',
    'Linux Enthusiast',
  ];

  let phraseIndex = 0;   // ¿En qué frase estamos?
  let charIndex   = 0;   // ¿En qué carácter estamos?
  let isDeleting  = false;

  function typeEffect() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      // Borrando: quita el último carácter
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Escribiendo: agrega el siguiente carácter
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    // Velocidades: escribir más lento que borrar
    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
      // Terminó de escribir → espera 2s y luego borra
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Terminó de borrar → pasa a la siguiente frase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  if (typingEl) {
    setTimeout(typeEffect, 1500); // Espera 1.5s antes de empezar
  }


  /* =====================================================
   * 🔗 SMOOTH SCROLL — Navegación suave
   * ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = target.offsetTop - parseInt(
          getComputedStyle(document.documentElement)
            .getPropertyValue('--navbar-height')
        ) * 10; // Convierte rem a px
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

});
