// ============================================================
// DATOS DE DESAFÍOS — D3 a D7
// Editá este archivo para actualizar el contenido de cada desafío
// ============================================================

export const challenges = [
  {
    id: "d3",
    number: "D3",
    title: "Portfolio (micrositio)",
    subtitle: "Gestión Gerencial · Desafío 3",
    summary:
      "Portfolio digital del equipo, alineado a los lineamientos de la materia: secciones claras, RPA, mapa conceptual y desafíos propuestos.",
    color: "from-accent to-warm",
    colorBg: "bg-accent/10",
    borderColor: "border-accent/30",
    tools: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion", "Lucide React"],
    problem:
      "Dar cuenta del proceso de aprendizaje del equipo en Gestión Gerencial con un portfolio digital accesible, navegable y alineado a los lineamientos de la materia (home, equipo, RPA, mapa conceptual y secciones por desafío).",
    solution:
      "Realizamos este micrositio desarrollado con React y Vite: una sola página principal con secciones claras y páginas adicionales para cada desafío, la sección de RPA, mapas conceptuales y presentación del equipo. La navegación es fluida gracias a React Router y las animaciones utilizan Framer Motion.",
    architecture: {
      description: "El micrositio está organizado en una estructura de carpetas clara y escalable:",
      structure: [
        { path: "src/", description: "Raíz del código fuente" },
        { path: "src/pages/", description: "Una página por ruta: Home, Equipo, Actividades, Rpa, Mapas, Desafios, Tpi" },
        { path: "src/components/", description: "Componentes reutilizables organizados por tipo (layout, sections, ui)" },
        { path: "src/data/", description: "Archivos de datos: teamData.js y challengesData.js" },
        { path: "src/assets/", description: "Imágenes y recursos estáticos" },
      ],
      routing: [
        { path: "/", label: "Home" },
        { path: "/equipo", label: "Equipo" },
        { path: "/actividades", label: "Actividades" },
        { path: "/actividades/investigacion-gerencia", label: "Investigación — La Gerencia" },
        { path: "/actividades/tests-liderazgo", label: "Perfiles de Liderazgo" },
        { path: "/rpa", label: "RPA" },
        { path: "/mapas", label: "Mapas Conceptuales" },
        { path: "/desafios", label: "Desafíos" },
        { path: "/desafios/:id", label: "Detalle de cada Desafío" },
        { path: "/tpi", label: "TPI" },
      ],
    },
    evidences: [
      {
        id: "e1",
        title: "Repositorio del código (GitHub)",
        type: "link",
        description: "Código fuente completo del micrositio",
        url: "https://github.com/IanNunez21/PortfolioGG2026.git",
        icon: "link",
      },
      {
        id: "e2",
        title: "Despliegue del sitio (Vercel)",
        type: "link",
        description: "Sitio desplegado y accesible públicamente",
        url: "https://portfolio-gpr.vercel.app/equipo",
        icon: "link",
      },
    ],
    reflection: {
      learned:
        "Aprendimos a estructurar un proyecto React de manera profesional, separando responsabilidades entre componentes, páginas y datos. La combinación de Tailwind CSS con Framer Motion nos permitió lograr una interfaz moderna y animada de forma eficiente.",
      difficulties:
        "El mayor desafío fue mantener coherencia visual en todas las páginas a medida que el proyecto crecía. También fue complejo definir la paleta de colores y el sistema de diseño antes de comenzar a codificar.",
      improvements:
        "Con más tiempo, incorporaríamos internacionalización (i18n), modo oscuro/claro alternativo, y pruebas automatizadas con Vitest para garantizar la calidad del código.",
      competencies: ["React", "Diseño de Interfaz", "Arquitectura de Software", "Trabajo en Equipo"],
    },
  },
];

// Helper para obtener un desafío por ID
export const getChallengeById = (id) => challenges.find((c) => c.id === id);