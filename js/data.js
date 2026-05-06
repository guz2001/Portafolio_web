/**
 * ============================================================
 *  DATA.JS — Portafolio Juan David Guzmán
 *  Datos de proyectos, tecnologías y experiencia
 *  ✏️  Edita este archivo para actualizar tu portafolio
 * ============================================================
 */

/**
 * PROYECTOS
 * Cada proyecto tiene:
 *  - id:          identificador único
 *  - title:       nombre del proyecto
 *  - description: descripción corta
 *  - category:    'backend' | 'web' | 'tools' | 'personal'
 *  - tags:        array de tecnologías usadas
 *  - github:      URL del repositorio (null si es privado)
 *  - demo:        URL de demo en vivo (null si no existe)
 *  - featured:    true si quieres destacarlo
 */
const PROJECTS = [
  {
    id: 1,
    title: "Portafolio Web",
    description:
      "Este mismo portafolio. Diseño futurista minimalista construido desde cero con HTML, CSS y JavaScript puro. Sin frameworks.",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JuanDavidGuzman",
    demo: null,
    featured: true,
    icon: "🌐",
  },
  {
    id: 2,
    title: "Sistema de Gestión",
    description:
      "Aplicación Java para la gestión de registros con interfaz de consola. Manejo de estructuras de datos y persistencia.",
    category: "backend",
    tags: ["Java", "OOP", "Collections"],
    github: "https://github.com/JuanDavidGuzman",
    demo: null,
    featured: true,
    icon: "☕",
  },
  {
    id: 3,
    title: "Scripts de Automatización",
    description:
      "Colección de scripts Bash para automatización de tareas en Linux: backups, monitoreo del sistema y procesos en lote.",
    category: "tools",
    tags: ["Bash", "Linux", "Shell"],
    github: "https://github.com/JuanDavidGuzman",
    demo: null,
    featured: false,
    icon: "🐧",
  },
  {
    id: 4,
    title: "CRUD con Java",
    description:
      "Aplicación de gestión de datos con operaciones CRUD completas, conexión a base de datos SQL y validación de formularios.",
    category: "backend",
    tags: ["Java", "SQL", "JDBC"],
    github: "https://github.com/JuanDavidGuzman",
    demo: null,
    featured: true,
    icon: "🗄️",
  },
  {
    id: 5,
    title: "Landing Page Estática",
    description:
      "Página web responsiva con diseño moderno, animaciones CSS y formulario de contacto funcional.",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JuanDavidGuzman",
    demo: null,
    featured: false,
    icon: "🎨",
  },
];


/**
 * FILTROS DE PROYECTOS
 * Define las categorías disponibles para filtrar
 */
const PROJECT_FILTERS = [
  { id: "all",     label: "Todos"      },
  { id: "backend", label: "Backend"    },
  { id: "web",     label: "Web"        },
  { id: "tools",   label: "Tools"      },
];


// Exporta los datos para que render.js los use
// (En un proyecto con módulos ES6 usaríamos export,
//  aquí los dejamos como variables globales)
