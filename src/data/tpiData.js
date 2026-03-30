// ============================================================
// DATOS DEL TRABAJO PRÁCTICO INTEGRADOR (TPI)
// Editá este archivo para actualizar toda la información del TPI
// ============================================================

export const tpi = {
  title: "Sistema de Gestión de Turnos para Consultorio Médico",
  subtitle: "Trabajo Práctico Integrador — Gestión Gerencial 2026",
  description:
    "El TPI integra los conocimientos adquiridos durante la cursada mediante el diseño de una solución integral de gestión para una organización real. Abordamos la problemática de un consultorio médico de atención primaria que operaba con un sistema de turnos completamente manual, generando ineficiencias, demoras y pérdida de información.",
  objective:
    "Diseñar una propuesta de solución tecnológica-organizacional completa para la gestión de turnos médicos, que integre la mejora de procesos, automatización, inteligencia de negocios y gestión del cambio organizacional. La solución debe ser técnicamente viable, económicamente justificada y culturalmente adoptable por el equipo del consultorio.",
  problem:
    "El Consultorio Médico 'San Cayetano' (organización ficticia con base en casos reales) gestionaba su agenda de turnos mediante anotadores físicos y mensajes de WhatsApp dispersos. Esto generaba: superposición de turnos (promedio de 3 conflictos semanales), tiempos de espera superiores a 45 minutos, pérdida de datos de pacientes, imposibilidad de generar reportes de atención, y alta carga administrativa sobre el personal de recepción.",
  solution:
    "Propuesta integral en tres capas: (1) Rediseño del proceso de gestión de turnos con BPMN, eliminando actividades sin valor; (2) Sistema digitalizado de turnos vía web y WhatsApp con automatizaciones en Power Automate para confirmaciones y recordatorios; (3) Dashboard de control en Power BI para el seguimiento de métricas de atención: tasa de ausentismo, tiempo de espera promedio, demanda por especialidad y productividad por médico.",
  results: [
    "Reducción estimada del 85% en conflictos de turnos",
    "Reducción del tiempo de espera promedio de 45 a 12 minutos",
    "Automatización del 70% del proceso administrativo de recepción",
    "Generación automática de reportes mensuales de gestión",
    "Propuesta de implementación en 3 fases de 2 meses cada una",
  ],
  tools: [
    { name: "Power Automate", category: "Automatización" },
    { name: "Power BI", category: "Business Intelligence" },
    { name: "BPMN 2.0", category: "Modelado de Procesos" },
    { name: "Bizagi Modeler", category: "Herramienta BPM" },
    { name: "Google Forms", category: "Relevamiento" },
    { name: "Notion", category: "Documentación" },
    { name: "Miro", category: "Colaboración" },
    { name: "Balanced Scorecard", category: "Metodología" },
  ],
  evidences: [
    {
      id: "tpi-e1",
      title: "Informe Final TPI",
      type: "document",
      description: "Documento completo con diagnóstico, propuesta y plan de implementación",
      url: "#", // ← Reemplazá con URL real
      icon: "document",
    },
    {
      id: "tpi-e2",
      title: "Presentación Ejecutiva",
      type: "presentation",
      description: "Slides de presentación ante el tribunal evaluador",
      url: "#",
      icon: "presentation",
    },
    {
      id: "tpi-e3",
      title: "Diagrama de Proceso TO-BE",
      type: "image",
      description: "Modelo BPMN del proceso de gestión de turnos rediseñado",
      url: "#",
      icon: "image",
    },
    {
      id: "tpi-e4",
      title: "Dashboard de Control — Power BI",
      type: "image",
      description: "Captura del tablero de control gerencial desarrollado",
      url: "#",
      icon: "image",
    },
    {
      id: "tpi-e5",
      title: "Video de Demo",
      type: "video",
      description: "Demo del sistema de automatización de confirmaciones de turno",
      url: "#",
      icon: "video",
    },
  ],
  teamReflection:
    "El TPI fue el trabajo más desafiante y enriquecedor de la cursada. Nos obligó a integrar todos los conocimientos adquiridos en los desafíos previos y aplicarlos con coherencia en un proyecto real. La mayor lección fue que no existen soluciones tecnológicas sin contexto organizacional: cada herramienta que elegimos debió justificarse en función de la cultura, los recursos y las capacidades reales del consultorio. Salimos del proyecto con una visión más madura de lo que significa ser profesionales en sistemas de información.",
  phases: [
    {
      number: 1,
      title: "Relevamiento y Diagnóstico",
      duration: "2 meses",
      activities: ["Entrevistas con el personal", "Mapeo del proceso actual (AS-IS)", "Análisis de causas raíz", "Diagnóstico de madurez digital"],
    },
    {
      number: 2,
      title: "Diseño de la Solución",
      duration: "2 meses",
      activities: ["Modelado del proceso TO-BE", "Diseño del sistema de turnos", "Configuración de automatizaciones", "Diseño del dashboard"],
    },
    {
      number: 3,
      title: "Implementación y Validación",
      duration: "2 meses",
      activities: ["Plan de gestión del cambio", "Capacitación del personal", "Implementación piloto", "Medición de resultados"],
    },
  ],
};
