// ============================================================
// DATOS DE DESAFÍOS — D3 a D7
// Editá este archivo para actualizar el contenido de cada desafío
// ============================================================

export const challenges = [
  {
    id: "d3",
    number: "D3",
    title: "Gestión del Conocimiento Organizacional",
    subtitle: "Aplicación de herramientas digitales para la captura y transferencia del conocimiento",
    summary:
      "Análisis de las prácticas de gestión del conocimiento en una organización seleccionada, identificando brechas y proponiendo un modelo de transferencia del capital intelectual apoyado en herramientas colaborativas.",
    color: "from-blue-500 to-cyan-500",
    colorBg: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    tools: ["Notion", "Miro", "Lucidchart", "Google Workspace"],
    problem:
      "Las organizaciones modernas enfrentan el desafío de retener y transferir el conocimiento tácito de sus colaboradores clave. En el caso analizado, se detectó una dependencia crítica del conocimiento individual no documentado, lo que generaba ineficiencias, errores en procesos repetitivos y alto costo de incorporación de nuevos integrantes. La ausencia de una estrategia de gestión del conocimiento formal representaba un riesgo operativo significativo.",
    solution:
      "El equipo propuso un modelo de gestión del conocimiento basado en tres pilares: captura estructurada (wikis y bases de conocimiento en Notion), transferencia colaborativa (sesiones de co-diseño en Miro) y mejora continua (ciclos de retroalimentación periódica). Se diseñó un mapa de conocimientos críticos y un protocolo de onboarding documentado, reduciendo la dependencia del conocimiento individual.",
    evidences: [
      {
        id: "e1",
        title: "Presentación del Desafío D3",
        type: "presentation",
        description: "Slides con la propuesta completa y el modelo de gestión del conocimiento",
        url: "#", // ← Reemplazá con URL real
        icon: "presentation",
      },
      {
        id: "e2",
        title: "Mapa de Conocimientos Críticos",
        type: "image",
        description: "Diagrama visual de las áreas de conocimiento relevadas",
        url: "#",
        icon: "image",
      },
      {
        id: "e3",
        title: "Protocolo de Onboarding",
        type: "document",
        description: "Documento con el proceso de incorporación de nuevos integrantes",
        url: "#",
        icon: "document",
      },
    ],
    reflection: {
      learned:
        "Comprendimos que el conocimiento organizacional es un activo estratégico que debe gestionarse activamente. La diferencia entre conocimiento tácito y explícito, y las estrategias para convertir uno en otro, fue uno de los aprendizajes más valiosos.",
      difficulties:
        "La principal dificultad fue acceder a información real de una organización concreta y lograr que los entrevistados expresaran procesos que consideraban 'naturales'. También resultó complejo priorizar qué conocimiento documentar primero.",
      improvements:
        "Con más tiempo, hubiéramos incluido una fase piloto de implementación de la plataforma Notion en la organización, con métricas de adopción y una encuesta de satisfacción posterior.",
      competencies: ["Gestión del Conocimiento", "Pensamiento Sistémico", "Comunicación Organizacional", "Herramientas Colaborativas"],
    },
  },
  {
    id: "d4",
    number: "D4",
    title: "Análisis y Mejora de Procesos Organizacionales",
    subtitle: "Modelado, diagnóstico y rediseño de procesos con enfoque BPM",
    summary:
      "Relevamiento, modelado y análisis crítico de los procesos clave de una organización real, identificando ineficiencias y proponiendo un rediseño basado en metodología BPM y herramientas de automatización.",
    color: "from-emerald-500 to-teal-500",
    colorBg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    tools: ["Bizagi Modeler", "BPMN 2.0", "Lucidchart", "Microsoft Visio"],
    problem:
      "Se identificó una organización con procesos críticos no documentados, ejecutados de forma heterogénea según el criterio de cada operador. Esto generaba inconsistencias en los resultados, demoras evitables y dificultades para detectar cuellos de botella. La falta de visibilidad sobre el flujo real de trabajo impedía tomar decisiones de mejora fundamentadas.",
    solution:
      "Se relevaron y modelaron los procesos AS-IS utilizando notación BPMN 2.0 en Bizagi Modeler. A partir del análisis de valor agregado y la detección de actividades no productivas, se diseñó el modelo TO-BE con simplificaciones, automatizaciones puntuales y controles de calidad integrados. Se documentó un manual de procesos como entregable final.",
    evidences: [
      {
        id: "e1",
        title: "Diagrama AS-IS del Proceso Principal",
        type: "image",
        description: "Modelo BPM del proceso actual relevado en la organización",
        url: "#",
        icon: "image",
      },
      {
        id: "e2",
        title: "Diagrama TO-BE — Proceso Rediseñado",
        type: "image",
        description: "Propuesta de mejora con automatizaciones y controles integrados",
        url: "#",
        icon: "image",
      },
      {
        id: "e3",
        title: "Manual de Procesos",
        type: "document",
        description: "Documentación completa de los procesos relevados y rediseñados",
        url: "#",
        icon: "document",
      },
      {
        id: "e4",
        title: "Presentación D4",
        type: "presentation",
        description: "Presentación con el análisis completo y las recomendaciones",
        url: "#",
        icon: "presentation",
      },
    ],
    reflection: {
      learned:
        "El análisis de procesos nos enseñó que la primera versión del relevamiento raramente es completa. Entender el proceso real requiere múltiples iteraciones con los actores involucrados. BPMN como lenguaje de modelado demostró ser poderoso para comunicar flujos complejos de forma visual y precisa.",
      difficulties:
        "El mayor desafío fue identificar las actividades que realmente agregan valor y distinguirlas de las que son hábitos culturales de la organización. Además, lograr el compromiso de los informantes durante el relevamiento requirió esfuerzo adicional.",
      improvements:
        "Implementaríamos indicadores de desempeño (KPIs) para cada proceso modelado, permitiendo medir objetivamente el impacto del rediseño. También agregaríamos una revisión jurídica de los procesos para asegurar el cumplimiento normativo.",
      competencies: ["Modelado de Procesos", "Análisis Crítico", "BPM / BPMN", "Pensamiento Analítico"],
    },
  },
  {
    id: "d5",
    number: "D5",
    title: "Automatización de Procesos con RPA",
    subtitle: "Diseño e implementación de robots de software para la optimización operativa",
    summary:
      "Identificación de procesos susceptibles de automatización mediante tecnología RPA (Robotic Process Automation), diseño de los flujos automatizados y evaluación del impacto en tiempos, costos y calidad.",
    color: "from-violet-500 to-purple-500",
    colorBg: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    tools: ["UiPath", "Power Automate", "Excel", "Google Sheets API"],
    problem:
      "La organización analizada ejecutaba semanalmente tareas repetitivas de consolidación de datos, generación de reportes y envío de notificaciones de forma completamente manual. Estos procesos consumían aproximadamente 12 horas-hombre semanales y presentaban alta tasa de errores humanos (estimada en el 8% de los registros procesados).",
    solution:
      "Se diseñaron tres robots de software utilizando UiPath Community Edition: el primero automatiza la extracción y consolidación de datos desde múltiples planillas Excel; el segundo genera reportes estandarizados en PDF; el tercero envía notificaciones por email a los destinatarios correspondientes. La implementación redujo el tiempo de procesamiento de 12 horas a 45 minutos semanales.",
    evidences: [
      {
        id: "e1",
        title: "Video demo — Robot de consolidación de datos",
        type: "video",
        description: "Grabación del robot en ejecución procesando datos reales (datos anonimizados)",
        url: "#",
        icon: "video",
      },
      {
        id: "e2",
        title: "Flujo de automatización — UiPath",
        type: "image",
        description: "Captura del diagrama de flujo del bot desarrollado en UiPath Studio",
        url: "#",
        icon: "image",
      },
      {
        id: "e3",
        title: "Informe de impacto y ROI",
        type: "document",
        description: "Análisis de retorno de inversión y beneficios cuantificables de la automatización",
        url: "#",
        icon: "document",
      },
    ],
    reflection: {
      learned:
        "La tecnología RPA nos demostró que la automatización no debe confundirse con complejidad técnica: su mayor valor radica en identificar correctamente qué automatizar. Aprendimos a evaluar la 'automatizabilidad' de un proceso y a justificar la inversión con métricas concretas.",
      difficulties:
        "La curva de aprendizaje de UiPath fue más pronunciada de lo esperado, especialmente para el manejo de excepciones y errores en tiempo de ejecución. También fue desafiante trabajar con datos sensibles de la organización manteniendo la confidencialidad.",
      improvements:
        "Incorporaríamos un panel de monitoreo en tiempo real del estado de los robots y alertas automáticas ante fallos. También exploraríamos la integración con herramientas de inteligencia artificial para el procesamiento de documentos no estructurados.",
      competencies: ["RPA / Automatización", "UiPath", "Análisis de ROI", "Gestión de Errores"],
    },
  },
  {
    id: "d6",
    number: "D6",
    title: "Inteligencia de Negocios y Toma de Decisiones",
    subtitle: "Diseño de un tablero de control gerencial para la toma de decisiones basada en datos",
    summary:
      "Relevamiento de necesidades de información gerencial, diseño de indicadores clave de desempeño (KPIs) y construcción de un dashboard interactivo que centraliza los datos relevantes para la toma de decisiones estratégicas.",
    color: "from-orange-500 to-amber-500",
    colorBg: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    tools: ["Power BI", "Excel", "Google Data Studio", "SQL básico"],
    problem:
      "La dirección de la organización tomaba decisiones basadas en reportes estáticos elaborados manualmente una vez por mes, con información desactualizada al momento de ser presentada. La ausencia de indicadores definidos y de un sistema de seguimiento en tiempo real limitaba significativamente la capacidad de respuesta ante variaciones del negocio.",
    solution:
      "Se definió un conjunto de 12 KPIs estratégicos en colaboración con la dirección, organizados en cuatro perspectivas: financiera, clientes, procesos internos y aprendizaje (siguiendo el esquema del Balanced Scorecard). Se desarrolló un tablero de control en Power BI con actualización automatizada, filtros por período y alertas configurables ante desvíos.",
    evidences: [
      {
        id: "e1",
        title: "Dashboard Power BI — Vista Gerencial",
        type: "image",
        description: "Captura del tablero de control desarrollado con los KPIs principales",
        url: "#",
        icon: "image",
      },
      {
        id: "e2",
        title: "Diccionario de KPIs",
        type: "document",
        description: "Documentación de cada indicador: definición, fórmula, fuente y responsable",
        url: "#",
        icon: "document",
      },
      {
        id: "e3",
        title: "Presentación ejecutiva",
        type: "presentation",
        description: "Presentación ante la dirección con el diseño del tablero y sus beneficios",
        url: "#",
        icon: "presentation",
      },
    ],
    reflection: {
      learned:
        "Comprendimos que los datos no generan valor por sí solos: el verdadero desafío está en traducirlos en información accionable para quien toma decisiones. El diseño del tablero nos obligó a ponernos en el lugar del usuario gerencial y pensar en la comunicación visual como herramienta estratégica.",
      difficulties:
        "La mayor dificultad fue acordar con los directivos cuáles son los indicadores verdaderamente relevantes. Cada área proponía sus métricas propias y fue necesaria una negociación para priorizar. También el acceso y la calidad de los datos fuente presentaron obstáculos.",
      improvements:
        "Agregaríamos módulos de análisis predictivo basados en series históricas para anticipar tendencias. También implementaríamos un proceso de gobierno de datos que garantice la calidad de la información en origen.",
      competencies: ["Business Intelligence", "Power BI", "Balanced Scorecard", "Visualización de Datos"],
    },
  },
  {
    id: "d7",
    number: "D7",
    title: "Transformación Digital y Cultura Organizacional",
    subtitle: "Diagnóstico de madurez digital y diseño de una hoja de ruta de transformación",
    summary:
      "Evaluación del nivel de madurez digital de una organización mediante un modelo de diagnóstico estructurado, identificando brechas críticas y proponiendo una hoja de ruta de transformación digital priorizada y factible.",
    color: "from-rose-500 to-pink-500",
    colorBg: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    tools: ["Modelo CMMI Digital", "Canvas de Transformación", "Miro", "Google Forms"],
    problem:
      "La organización evaluada presentaba una imagen de modernidad tecnológica superficial (uso de correo electrónico y redes sociales) pero carecía de una estrategia digital coherente. Sus sistemas internos eran mayormente manuales, los datos no se explotaban para la toma de decisiones y la cultura organizacional mostraba resistencia a la adopción de nuevas tecnologías.",
    solution:
      "Se aplicó un modelo de diagnóstico de madurez digital en 5 dimensiones: estrategia, cultura, procesos, tecnología y datos. El diagnóstico se realizó mediante encuestas estructuradas y entrevistas a directivos y empleados. A partir de los resultados, se diseñó una hoja de ruta de 18 meses con iniciativas priorizadas según impacto y viabilidad.",
    evidences: [
      {
        id: "e1",
        title: "Radar de Madurez Digital",
        type: "image",
        description: "Visualización gráfica del nivel de madurez en cada dimensión evaluada",
        url: "#",
        icon: "image",
      },
      {
        id: "e2",
        title: "Hoja de Ruta de Transformación Digital",
        type: "presentation",
        description: "Roadmap de 18 meses con iniciativas, responsables y métricas de éxito",
        url: "#",
        icon: "presentation",
      },
      {
        id: "e3",
        title: "Informe de Diagnóstico Completo",
        type: "document",
        description: "Documento con el análisis detallado por dimensión y las recomendaciones",
        url: "#",
        icon: "document",
      },
    ],
    reflection: {
      learned:
        "La transformación digital no es un proyecto tecnológico: es un proceso de cambio cultural. Aprendimos que la resistencia al cambio es el factor más crítico a gestionar, y que las herramientas son solo habilitadoras de un proceso que debe ser liderado por las personas.",
      difficulties:
        "Fue difícil mantener la objetividad en el diagnóstico cuando algunos directivos preferían no ver ciertas áreas de debilidad. La gestión de expectativas sobre lo que puede lograrse en el corto plazo también fue un desafío constante.",
      improvements:
        "Incorporaríamos un plan de gestión del cambio más detallado, con estrategias específicas de comunicación interna y capacitación. También estableceríamos un comité de seguimiento con métricas claras para medir el avance de la transformación.",
      competencies: ["Transformación Digital", "Gestión del Cambio", "Diagnóstico Organizacional", "Planificación Estratégica"],
    },
  },
];

// Helper para obtener un desafío por ID
export const getChallengeById = (id) => challenges.find((c) => c.id === id);
