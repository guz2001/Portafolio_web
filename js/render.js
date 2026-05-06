/**
 * ============================================================
 *  RENDER.JS — Portafolio Juan David Guzmán
 *  Renderiza dinámicamente los proyectos desde data.js
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
   * 🚀 PROYECTOS — Renderizado dinámico
   *
   * En lugar de escribir el HTML de cada proyecto a mano,
   * leemos los datos de data.js y generamos las tarjetas
   * automáticamente con JavaScript.
   * ===================================================== */

  const grid          = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.projects__filter-btn');

  // Si no existe el grid en la página, salimos
  if (!grid) return;

  /**
   * Genera el HTML de una tarjeta de proyecto
   * @param {Object} project - Objeto del array PROJECTS
   * @returns {string} - HTML de la tarjeta como string
   */
  function createProjectCard(project) {
    // Genera los badges de tecnologías
    const tagsHTML = project.tags
      .map(tag => `<span class="badge">${tag}</span>`)
      .join('');

    // Genera los botones de links (GitHub / Demo)
    const linksHTML = `
      ${project.github
        ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer"
              class="project-card__link" aria-label="Ver código en GitHub">
              <span aria-hidden="true">🔗</span> GitHub
           </a>`
        : ''}
      ${project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer"
              class="project-card__link project-card__link--demo" aria-label="Ver demo en vivo">
              <span aria-hidden="true">🚀</span> Demo
           </a>`
        : ''}
    `;

    // Badge de "destacado"
    const featuredBadge = project.featured
      ? `<span class="project-card__featured">⭐ Destacado</span>`
      : '';

    return `
      <article
        class="project-card"
        data-category="${project.category}"
        data-id="${project.id}"
      >
        ${featuredBadge}

        <!-- Icono / preview del proyecto -->
        <div class="project-card__icon" aria-hidden="true">
          ${project.icon}
        </div>

        <!-- Contenido -->
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${project.description}</p>
        </div>

        <!-- Tags de tecnologías -->
        <div class="project-card__tags">
          ${tagsHTML}
        </div>

        <!-- Links -->
        <div class="project-card__links">
          ${linksHTML}
        </div>
      </article>
    `;
  }

  /**
   * Renderiza los proyectos en el grid
   * @param {string} filter - 'all' o el id de categoría
   */
  function renderProjects(filter = 'all') {
    // Filtra el array según la categoría seleccionada
    const filtered = filter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filter);

    // Añade clase de salida para animar
    grid.classList.add('is-filtering');

    setTimeout(() => {
      // Genera el HTML de todas las tarjetas y lo inserta
      grid.innerHTML = filtered
        .map(project => createProjectCard(project))
        .join('');

      // Quita la clase de salida → las tarjetas aparecen
      grid.classList.remove('is-filtering');
    }, 200);
  }

  // ─── Render inicial ───
  renderProjects('all');

  // ─── Filtros ───
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Quita activo de todos los botones
      filterButtons.forEach(b => b.classList.remove('active'));
      // Pone activo en el clickeado
      btn.classList.add('active');
      // Renderiza con el filtro seleccionado
      renderProjects(btn.dataset.filter);
    });
  });

});
