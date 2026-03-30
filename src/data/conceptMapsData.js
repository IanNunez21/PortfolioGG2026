// ============================================================
// DATOS DE MAPAS CONCEPTUALES
// Editá este archivo para actualizar imágenes, PDFs y descripciones
// ============================================================

export const conceptMaps = [
  {
    id: "mc1",
    level: "Nivel 1",
    title: "Fundamentos de la Gestión Organizacional",
    description:
      "Mapa conceptual grupal que integra los conceptos fundamentales trabajados en el primer nivel: organización, gestión, sistemas de información y su interrelación en el contexto empresarial moderno.",
    type: "group", // 'group' o 'individual'
    authors: ["Equipo Gestión Pomelo Rosado"],
    date: "Marzo 2026",
    imageUrl: null, // ← Reemplazá con ruta de imagen: "/assets/mapas/nivel1.png"
    pdfUrl: null,   // ← Reemplazá con ruta de PDF: "/assets/mapas/nivel1.pdf"
    externalUrl: "#",
    tags: ["Organización", "Gestión", "Sistemas de Información", "Conceptos Base"],
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "mc2",
    level: "Nivel 2",
    title: "Gestión del Conocimiento y Aprendizaje Organizacional",
    description:
      "Representación conceptual de las teorías de gestión del conocimiento, el aprendizaje organizacional y sus vínculos con la tecnología de la información. Incluye los modelos SECI, Balanced Scorecard y el concepto de organización que aprende.",
    type: "group",
    authors: ["Equipo Gestión Pomelo Rosado"],
    date: "Abril 2026",
    imageUrl: null,
    pdfUrl: null,
    externalUrl: "#",
    tags: ["Gestión del Conocimiento", "SECI", "Aprendizaje Organizacional", "KM"],
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "mc3",
    level: "Nivel 3",
    title: "Procesos, Automatización y Transformación Digital",
    description:
      "Mapa conceptual que conecta los conceptos de gestión por procesos, automatización con RPA, inteligencia de negocios y transformación digital. Muestra la cadena de valor tecnológica desde el proceso manual hasta la organización digital.",
    type: "group",
    authors: ["Equipo Gestión Pomelo Rosado"],
    date: "Mayo 2026",
    imageUrl: null,
    pdfUrl: null,
    externalUrl: "#",
    tags: ["BPM", "RPA", "Transformación Digital", "Business Intelligence"],
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/10",
  },
  {
    id: "mc4",
    level: "Nivel 4",
    title: "Integración Gerencial — Visión Sistémica",
    description:
      "Mapa conceptual integrador del curso completo. Muestra las relaciones entre todos los ejes conceptuales trabajados: gestión del conocimiento, procesos, datos, automatización, cultura y estrategia digital. Elaborado como síntesis final del equipo.",
    type: "group",
    authors: ["Equipo Gestión Pomelo Rosado"],
    date: "Junio 2026",
    imageUrl: null,
    pdfUrl: null,
    externalUrl: "#",
    tags: ["Visión Sistémica", "Integración", "Gestión Gerencial", "Síntesis"],
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
  },
];
