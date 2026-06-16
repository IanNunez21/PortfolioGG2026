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
  {
    id: "d4",
    number: "D4",
    title: "Punto de equilibrio",
    subtitle: "Gestión Gerencial · Desafío 4",
    summary:
      "Aplicación del análisis de costos fijos y variables para calcular y graficar el punto de equilibrio en distintos escenarios.",
    color: "from-accent to-warm",
    colorBg: "bg-accent/10",
    borderColor: "border-accent/30",
    tools: ["Álgebra de costos", "Tablas de cálculo", "Análisis de sensibilidad", "Representación gráfica"],
    problem:
      "Resolver los ejercicios del **Desafío 4** identificando costos fijos y variables, calculando margen de contribución y determinando el punto de equilibrio en unidades y en pesos.",
    solution:
      "Estructuramos la resolución con una guía teórica (conceptos y fórmulas), desarrollo matemático por ejercicio, validación con tablas y lectura del cruce entre **ingresos** y **costo total** en gráficos.",
    evidences: [],
    breakEven: {
      glossary: [
        { term: "PE", definition: "Punto de equilibrio." },
        { term: "PEu", definition: "Punto de equilibrio expresado en unidades." },
        { term: "PE$", definition: "Punto de equilibrio expresado en pesos (importe de ingresos)." },
        { term: "CF", definition: "Costo fijo." },
        { term: "CVU", definition: "Costo variable unitario." },
        { term: "P", definition: "Precio por unidad." },
        { term: "MC", definition: "Margen de contribución unitario." },
        { term: "CV", definition: "Costo variable total." },
        { term: "CT", definition: "Costo total." },
        { term: "Q", definition: "Cantidad de unidades (o servicios)." },
      ],
      formulas: [
        "Margen de contribución: MC = P - CVU",
        "Punto de equilibrio en unidades: PEu = CF / (P - CVU)",
        "Punto de equilibrio en pesos: PE$ = CF / (1 - CVU / P)",
        "Ingresos por ventas: Ventas = Q x P",
        "Costo variable total: CV = Q x CVU",
        "Costo total: CT = CF + CV",
      ],
      exercises: [
        {
          id: "e1",
          title: "Ejercicio 1",
          statement:
            "Completar la tabla con P = $0,50, CVU = $0,30 y CF = $200.000. Luego calcular el punto de equilibrio y graficar.",
          data: ["P = $0,50", "CVU = $0,30", "CF = $200.000", "MC = $0,20"],
          steps: [
            {
              title: "Cálculo — Punto de equilibrio en unidades",
              formula: "PEu = 200.000 / (0,50 - 0,30) = 200.000 / 0,20",
              result: "PEu = 1.000.000 unidades",
            },
            {
              title: "Cálculo — Punto de equilibrio en pesos",
              formula: "PE$ = 200.000 / (1 - 0,30 / 0,50) = 200.000 / 0,40",
              result: "PE$ = $500.000",
            },
          ],
          table: {
            headers: ["Unidades", "Ventas", "CV", "CF", "CT"],
            rows: [
              ["0", "$0", "$0", "$200.000", "$200.000"],
              ["500.000", "$250.000", "$150.000", "$200.000", "$350.000"],
              ["1.000.000", "$500.000", "$300.000", "$200.000", "$500.000"],
              ["2.500.000", "$1.250.000", "$750.000", "$200.000", "$950.000"],
            ],
          },
          chart: { p: 0.5, cvu: 0.3, cf: 200000, maxQ: 2500000, xLabel: "Unidades producidas" },
        },
        {
          id: "e2",
          title: "Ejercicio 2",
          statement:
            "Con CF = $150.000, CVU = $500 y P = $2.000, calcular el punto de equilibrio en unidades y en pesos y representar el cruce.",
          data: ["CF = $150.000", "CVU = $500", "P = $2.000", "MC = $1.500"],
          steps: [
            {
              title: "Cálculo — Punto de equilibrio en unidades",
              formula: "PEu = 150.000 / (2.000 - 500) = 150.000 / 1.500",
              result: "PEu = 100 unidades",
            },
            {
              title: "Cálculo — Punto de equilibrio en pesos",
              formula: "PE$ = 150.000 / (1 - 500 / 2.000) = 150.000 / 0,75",
              result: "PE$ = $200.000",
            },
          ],
          chart: { p: 2000, cvu: 500, cf: 150000, maxQ: 200, xLabel: "Unidades" },
        },
        {
          id: "e3",
          title: "Ejercicio 3",
          statement:
            "Empresa de lavado: separar costos, calcular margen de contribución y obtener PE en unidades y en pesos.",
          data: ["P = $100", "CVU = $60", "CF = $3.950", "MC = $40"],
          steps: [
            {
              title: "Costos variables por servicio",
              formula: "$20 + $30 + $5 + $2 + $3",
              result: "CVU = $60",
            },
            {
              title: "Costos fijos mensuales",
              formula: "Alquiler + socios + recepcionista",
              result: "CF = $3.950",
            },
            {
              title: "Margen de contribución",
              formula: "MC = 100 - 60",
              result: "MC = $40",
            },
            {
              title: "Punto de equilibrio en unidades",
              formula: "PEu = 3.950 / 40",
              result: "PEu = 98,75 servicios (≈ 99)",
            },
            {
              title: "Punto de equilibrio en pesos",
              formula: "PE$ = 3.950 / (1 - 60/100) = 3.950 / 0,40",
              result: "PE$ ≈ $9.875",
            },
          ],
          chart: { p: 100, cvu: 60, cf: 3950, maxQ: 130, xLabel: "Servicios / lavados" },
        },
        {
          id: "e4",
          title: "Ejercicio 4 (análisis de escenarios)",
          statement:
            "Para Bolsas Familiares: situación base, incremento de CF y aumento de precio con nuevo CF. Comparar el efecto sobre el PE.",
          scenarios: [
            {
              name: "a) Situación base",
              data: ["P = $15", "CVU = $8", "CF = $660"],
              result: "PEu = 660 / (15 - 8) = 94,28 bolsas (≈ 95) | Ingresos en PE ≈ $1.414",
              chart: { p: 15, cvu: 8, cf: 660, maxQ: 180, xLabel: "Bolsas" },
            },
            {
              name: "b) Incremento de CF (+$100)",
              data: ["P = $15", "CVU = $8", "CF = $760"],
              result: "PEu = 760 / (15 - 8) = 108,57 bolsas (≈ 109) | Ingresos en PE ≈ $1.629",
              note: "Debo vender 15 unidades más.",
              chart: { p: 15, cvu: 8, cf: 760, maxQ: 180, xLabel: "Bolsas" },
            },
            {
              name: "c) Precio +15% y CF = $6.500",
              data: ["P = $17,25", "CVU = $8", "CF = $6.500"],
              result: "PEu = 6.500 / (17,25 - 8) = 702,7 bolsas (≈ 703) | Ingresos en PE ≈ $12.122",
              note: "Debo vender 594 unidades más.",
              chart: { p: 17.25, cvu: 8, cf: 6500, maxQ: 1000, xLabel: "Bolsas" },
            },
          ],
        },
      ],
      conclusions: [
        "El punto de equilibrio depende del margen de contribución y del nivel de costos fijos.",
        "Cuando aumenta solo el costo fijo, el PE sube en unidades aunque el precio no cambie.",
        "Un aumento de precio mejora el margen, pero si el costo fijo crece mucho, igual puede exigir un volumen muy alto para equilibrar.",
      ],
      supportTools:
        "Usamos álgebra de costos, tablas de sensibilidad y representación gráfica del cruce entre ingresos y costo total para validar resultados.",
    },
    reflection: {
      learned:
        "En este desafío fortalecimos el análisis numérico y la interpretación de escenarios: no alcanza con calcular fórmulas, también hay que justificar qué cambia y por qué cambia el equilibrio.",
      competencies: ["Análisis de costos", "Resolución cuantitativa", "Interpretación de gráficos", "Comunicación técnica"],
    },
  },
  {
    id: "d6",
    number: "D6",
    title: "Gestión del Cambio",
    subtitle: "Gestión Gerencial · Desafío 6",
    summary:
      "Análisis del caso Almacenes del Norte S.A. para diagnosticar fuerzas de cambio, resistencias humanas y proponer un plan de acción basado en modelos de gestión del cambio.",
    color: "from-accent to-warm",
    colorBg: "bg-accent/10",
    borderColor: "border-accent/30",
    tools: ["Modelo de Kotter", "Modelo ADKAR", "Análisis de fuerzas", "Gestión del cambio"],
    problem:
      "Analizar el caso de Almacenes del Norte S.A., identificar qué falló en la implementación del sistema WMS y proponer un plan concreto de gestión del cambio para revertir la resistencia del personal.",
    solution:
      "Asumimos el rol de consultores de gestión del cambio: diagnosticamos las fuerzas internas y externas, analizamos las causas humanas de la resistencia y diseñamos un plan de acción escalonado basado en el modelo de 8 pasos de Kotter complementado con ADKAR.",
    gestionCambio: {
      actividad1: {
        title: "Actividad 1 — Caso Almacenes del Norte S.A.",
        contexto:
          "Almacenes del Norte S.A. es una empresa familiar de 40 años dedicada a la distribución de consumo masivo. Cuenta con 250 empleados y tres centros de distribución. El 60% del personal operativo lleva más de 15 años en la compañía. Los procesos de inventario eran semi-manuales: planillas de papel, Excel y conteos físicos mensuales.",
        diagnostico: {
          title: "1. Diagnóstico del Cambio",
          fuerzasExternas: [
            {
              titulo: "Ingreso de un nuevo competidor de e-commerce",
              descripcion:
                "Un gigante del comercio electrónico entró al mercado ofreciendo entregas en 24 horas a los mismos clientes de Almacenes del Norte, representando una amenaza directa a su posición competitiva y obligando a repensar su velocidad y eficiencia logística.",
            },
            {
              titulo: "Exigencias de los clientes corporativos",
              descripcion:
                "Los clientes comenzaron a demandar una plataforma web para visualizar el stock en tiempo real y realizar pedidos automáticos. La tecnología dejó de ser una ventaja diferencial para convertirse en un requisito mínimo de permanencia.",
            },
          ],
          fuerzasInternas: [
            {
              titulo: "Pérdidas crecientes por errores de inventario manual",
              descripcion:
                "En el último año, las pérdidas vinculadas a errores en el registro manual aumentaron un 15%. Este dato cuantificable evidenciaba que el sistema existente era ineficiente y económicamente insostenible a mediano plazo.",
            },
            {
              titulo: "Cultura organizacional resistente al cambio digital",
              descripcion:
                "El supervisor asumía que la tecnología 'roba trabajos', los operarios evitaban los escáneres y los choferes rechazaban las tablets. Esto demuestra una cultura muy arraigada en sus métodos que no reconocía el valor real de la tecnología.",
            },
          ],
          tipoCambio: {
            pregunta: "¿El cambio fue planeado (proactivo) o no planeado (reactivo)?",
            respuesta:
              "El cambio fue predominantemente reactivo. Si bien existió una decisión formal del Directorio con aprobación de presupuesto y contratación de una consultora tecnológica, la naturaleza del cambio fue esencialmente una respuesta a presiones externas e internas ya instaladas: la empresa no anticipó la digitalización del mercado, sino que reaccionó cuando la amenaza competitiva y las pérdidas operativas ya eran evidentes y urgentes. La señal más clara fue el anuncio por correo electrónico avisando que en dos semanas el sistema antiguo dejaría de funcionar. No hubo diagnóstico cultural previo, ni participación de los empleados, ni período de transición.",
            badge: "Reactivo",
          },
          velocidadCambio: {
            pregunta: "¿El cambio fue brusco o evolutivo? ¿Cuál fue el impacto?",
            respuesta:
              "El cambio fue claramente brusco y abrupto. La empresa pasó de un sistema semi-manual con 40 años de historia a uno completamente digitalizado en dos semanas, sin preparación previa del personal.",
            badge: "Brusco",
            impactos: [
              "La productividad cayó un 30% en el primer mes, generando retrasos en pedidos y quejas de clientes clave.",
              "Se desencadenó una resistencia generalizada: rumores de despidos, sabotaje pasivo (escáneres sin cargar, cuadernos paralelos), negativa de los choferes a usar tablets.",
              "Don Roberto, el referente informal más respetado, escaló el conflicto al sindicato.",
              "Se generó un clima de desconfianza y estrés laboral.",
            ],
            conclusion:
              "Un cambio de esta magnitud requería un proceso evolutivo de al menos 3 a 6 meses con etapas claras. La velocidad paralizó a la empresa en vez de ayudarla.",
          },
        },
        resistencia: {
          title: "2. Análisis de la Resistencia",
          causasHumanas: [
            {
              titulo: "Miedo a la pérdida del trabajo",
              descripcion:
                "Cuando una empresa con 40 años de historia automatiza procesos manuales, el miedo al despido es una reacción comprensible. Nadie de la dirección desmintió ese rumor con claridad ni con garantías concretas.",
            },
            {
              titulo: "Pérdida de identidad y valor percibido",
              descripcion:
                "El personal veterano construyó su valor profesional durante más de 15 años sobre el conocimiento empírico y la experiencia. El nuevo sistema, implícitamente, les decía que ese conocimiento ya no valía. Esto generó una herida en su identidad laboral.",
            },
            {
              titulo: "Falta total de información y participación",
              descripcion:
                "Nadie les explicó el por qué del cambio, los beneficios para ellos, ni el futuro de sus puestos. Solo recibieron un correo masivo anunciando el fin del sistema en dos semanas. La ausencia de información genera incertidumbre, y la incertidumbre genera resistencia.",
            },
            {
              titulo: "Incapacidad técnica percibida y real",
              descripcion:
                "Los operarios no habían recibido capacitación efectiva. Los choferes admitieron no saber usar las tablets. Introducir un sistema sin capacitación previa es un error grave que alimenta la narrativa de que 'el sistema no funciona'.",
            },
            {
              titulo: "Ausencia de liderazgo contenedor",
              descripcion:
                "Don Roberto, al no ser incluido como agente de cambio, se convirtió en agente de resistencia. En organizaciones con cultura fuerte y personal antiguo, los líderes informales tienen más influencia que los jerárquicos. Ignorarlo fue un error estratégico grave.",
            },
          ],
          erroresValeria: [
            {
              titulo: "Confundió implementación tecnológica con gestión del cambio",
              descripcion:
                "Instaló un nuevo sistema sin diseñar ningún proceso de gestión del cambio humano. Trató a las personas como variables técnicas, no como seres complejos que necesitan acompañamiento.",
            },
            {
              titulo: "Comunicación unilateral, tardía e impersonal",
              descripcion:
                "Anunciar un cambio de esta magnitud mediante un correo masivo, sin reuniones previas ni espacios de escucha, fue un error crítico. La comunicación del cambio debe ser bidireccional, anticipada y personalizada según los grupos afectados.",
            },
            {
              titulo: "Plazos imposibles e irrespetuosos",
              descripcion:
                "Dar dos semanas para abandonar un sistema de 40 años no es gestión del cambio, es imposición. No contempló el tiempo necesario para el aprendizaje, la adaptación emocional ni la transición operativa.",
            },
            {
              titulo: "No involucró a los líderes informales",
              descripcion:
                "Don Roberto era el supervisor más antiguo y respetado. Debió haber sido el primer aliado del cambio, no el primer opositor.",
            },
            {
              titulo: "No capacitó antes de implementar",
              descripcion:
                "El sistema se lanzó sin que los empleados supieran usarlo, lo que alimentó la narrativa de que 'el sistema no funciona' y generó caos operativo desde el primer día.",
            },
            {
              titulo: "No gestionó los miedos ni las expectativas",
              descripcion:
                "No comunicó que no habría despidos, ni reconoció el valor del personal veterano. El nuevo sistema nunca fue explicado en términos que el personal operativo pudiera identificar como beneficios propios.",
            },
          ],
        },
        propuesta: {
          title: "3. Propuesta de Solución — Plan de Acción",
          acciones: [
            {
              fase: "Acciones inmediatas",
              plazo: "Primeras 2 semanas",
              badge: "Urgente",
              items: [
                "Pausar la implementación forzada: definir un período de transición donde ambos sistemas coexistan para reducir la presión y el caos operativo.",
                "Reunión directa con Don Roberto: explicarle lo que realmente implica el cambio y el rol que ocuparán los operarios en la nueva organización.",
                "Garantizar que no habrá despidos: comunicado oficial firmado por el Directorio con compromisos claros y verificables.",
              ],
            },
            {
              fase: "Acciones de mediano plazo",
              plazo: "1 a 3 meses",
              badge: "Mediano plazo",
              items: [
                "Programa de capacitación escalonado y práctico: talleres pequeños por grupos, con lenguaje accesible, donde los empleados practiquen con los dispositivos.",
                "Crear agentes de cambio internos: identificar operarios jóvenes con disposición tecnológica y formarlos como multiplicadores dentro de sus grupos.",
                "Espacios de escucha y feedback: reuniones periódicas donde el personal reporte problemas reales del sistema.",
              ],
            },
            {
              fase: "Acciones de largo plazo",
              plazo: "3 a 6 meses",
              badge: "Largo plazo",
              items: [
                "Definir KPIs para medir los beneficios del cambio: porcentaje de errores de inventario, satisfacción de clientes, tasa de adopción del sistema.",
                "Realizar ajustes al sistema según el feedback de los usuarios: esto mejora el sistema técnicamente y fortalece el compromiso del personal al sentirse escuchados.",
              ],
            },
          ],
          modeloKotter: {
            title: "Modelo de gestión del cambio aplicado",
            descripcion:
              "Consideramos que el modelo más adecuado para este caso es el Modelo de 8 Pasos de John Kotter, complementado con elementos del Modelo ADKAR.",
            pasos: [
              { numero: 1, titulo: "Crear sentido de urgencia", descripcion: "Mostrar al personal los datos reales (pérdidas de inventario, amenaza competitiva) para que comprendan por qué el cambio es necesario." },
              { numero: 2, titulo: "Formar una coalición guía", descripcion: "Incluir a líderes formales e informales como Don Roberto como parte del equipo impulsor del cambio." },
              { numero: 3, titulo: "Desarrollar una visión clara", descripcion: "Comunicar hacia dónde va la empresa y qué lugar tienen ellos en ese futuro." },
              { numero: 4, titulo: "Comunicar la visión", descripcion: "De forma sostenida, en múltiples formatos y espacios, no en un solo correo masivo." },
              { numero: 5, titulo: "Eliminar obstáculos", descripcion: "Resolver los problemas técnicos reales del sistema y capacitar adecuadamente." },
              { numero: 6, titulo: "Generar victorias a corto plazo", descripcion: "Mostrar resultados parciales positivos para sostener la motivación del equipo." },
              { numero: 7, titulo: "Consolidar mejoras", descripcion: "Ir ampliando el uso del sistema a medida que se consolida la adopción." },
              { numero: 8, titulo: "Anclar el cambio en la cultura", descripcion: "Insertar el nuevo sistema WMS como un estándar en la organización." },
            ],
          },
          estrategiaComunicacion: {
            title: "Estrategia de comunicación y capacitación previa al lanzamiento",
            fases: [
              {
                fase: "Fase 1",
                titulo: "Comunicación inicial",
                items: [
                  "Reunión general con todos los empleados presentada por el Directorio, explicando las razones del cambio con datos concretos y honestos.",
                  "Comunicación explícita y documentada de que no habrá despidos por la implementación.",
                  "Presentación del cronograma de transición con período de convivencia entre sistemas.",
                  "Apertura de canales de consulta y preguntas.",
                ],
              },
              {
                fase: "Fase 2",
                titulo: "Involucramiento de líderes informales",
                items: [
                  "Reuniones específicas con Don Roberto y supervisores veteranos para escuchar sus preocupaciones e incorporar sus sugerencias.",
                  "Designación oficial de 'embajadores del cambio' entre el personal, con reconocimiento visible.",
                ],
              },
              {
                fase: "Fase 3",
                titulo: "Capacitación escalonada",
                items: [
                  "Talleres prácticos por grupos pequeños (máximo 10 personas), diferenciados por rol: operarios, choferes, supervisores.",
                  "Instancias de práctica libre con los dispositivos antes de usarlos en producción.",
                  "Manual simplificado en papel como soporte de transición.",
                  "Evaluación del nivel de adopción antes de avanzar al siguiente grupo.",
                ],
              },
              {
                fase: "Fase 4",
                titulo: "Lanzamiento progresivo",
                items: [
                  "Implementar el sistema primero en un solo centro de distribución como piloto.",
                  "Evaluar resultados, ajustar problemas y sistematizar aprendizajes antes de replicar en los demás centros.",
                ],
              },
            ],
          },
          transformacionDigital: {
            pregunta: "¿El proyecto de Valeria es una transformación digital?",
            respuesta: "Sí",
            justificacion:
              "El proyecto de Valeria constituye una transformación digital, aunque fue ejecutada de manera incompleta y deficiente en su dimensión humana y cultural. La transformación digital no se define únicamente por la incorporación de tecnología, sino por el cambio profundo en la forma en que una organización opera, genera valor y se relaciona con sus clientes a través de lo digital.",
            criterios: [
              "Cambio en los procesos centrales del negocio: el WMS transforma radicalmente el proceso de inventario, de semi-manual a automatizado en tiempo real.",
              "Cambio en la cultura organizacional: implica pasar de una cultura basada en 'experiencia y memoria' a una basada en 'datos y tecnología'.",
              "Cambio en la propuesta de valor al cliente: la plataforma web cambia la forma en que la empresa se relaciona con sus clientes corporativos.",
              "Respuesta a disrupciones del entorno digital: impulsado directamente por la aparición de un competidor digital.",
            ],
            advertencia:
              "Para que sea una transformación digital exitosa y completa, debe incluir también la dimensión humana y cultural. Una transformación digital que no transforma la cultura organizacional está condenada a fracasar operativamente.",
          },
        },
      },
      actividad2: {
        title: "Actividad 2 — Para Reflexionar",
        preguntas: [
          {
            id: "r1",
            pregunta: "¿Por qué las personas suelen resistirse al cambio?",
            respuesta:
              "Las personas son seres de costumbres. El cambio es percibido frecuentemente como una amenaza al estado de comodidad y seguridad que construyeron a lo largo del tiempo. Todo cambio implica abandonar lo conocido y enfrentarse a una nueva realidad sobre la que no se tiene control ni certeza, lo que naturalmente genera miedo e incertidumbre.",
          },
          {
            id: "r2",
            pregunta: "¿Todos los cambios organizacionales son positivos?",
            respuesta:
              "No. Como quedó evidenciado en el caso de la Actividad 1, un cambio mal gestionado puede generar más problemas de los que resuelve. La positividad de un cambio debe evaluarse en múltiples dimensiones: resultados económicos, clima organizacional y bienestar del personal. Un cambio técnicamente correcto pero humanamente destructivo puede ser, en términos netos, negativo para la organización.",
          },
          {
            id: "r3",
            pregunta: "¿Qué ocurre cuando una organización no se adapta?",
            respuesta:
              "El entorno de toda organización es cambiante. Cuando una organización falla en adaptarse a las nuevas necesidades del mercado, deja progresivamente de ser útil y competitiva, lo que puede derivar en pérdidas económicas sostenidas e incluso en su desaparición.",
          },
          {
            id: "r4",
            pregunta: "¿La tecnología siempre mejora el trabajo?",
            respuesta:
              "La tecnología es una herramienta y, como tal, puede tanto potenciar como disrumpir el trabajo dependiendo del contexto. No toda operación se vuelve más eficiente al digitalizarse. La tecnología mejora el trabajo cuando responde a una necesidad real, cuando las personas están capacitadas para usarla y cuando su implementación contempla los procesos y la cultura organizacional existente.",
          },
          {
            id: "r5",
            pregunta: "¿Qué papel tiene el liderazgo en el cambio?",
            respuesta:
              "El liderazgo es el factor más determinante en el éxito o fracaso de cualquier proceso de cambio organizacional. Un líder competente no solo comunica la visión con claridad, sino que acompaña a las personas en el proceso, contiene la incertidumbre, escucha las resistencias y las transforma en insumos para mejorar. Sin líderes que cumplan ese rol de manera efectiva, ningún cambio sustancial puede sostenerse en el tiempo.",
          },
        ],
      },
    },
    evidences: [],
    reflection: {
      learned:
        "Aprendimos que la gestión del cambio no es un problema técnico sino humano. El caso de Almacenes del Norte demuestra que la mejor tecnología fracasa si no se gestiona el factor humano con la misma rigurosidad que los aspectos técnicos. Identificar a los líderes informales y convertirlos en aliados es tan importante como elegir el software correcto.",
      difficulties:
        "El mayor desafío fue distinguir entre las causas superficiales de la resistencia (los escáneres fallan, las tablets son difíciles) y las causas profundas (miedo al despido, pérdida de identidad laboral). Las primeras son síntomas; las segundas son el verdadero problema a resolver.",
      improvements:
        "Con más tiempo, profundizaríamos en el análisis comparativo de modelos de gestión del cambio (Lewin, McKinsey 7-S, Prosci) para argumentar con mayor precisión por qué Kotter + ADKAR es la combinación más adecuada para este caso específico.",
      competencies: [
        "Diagnóstico organizacional",
        "Gestión del cambio",
        "Análisis de resistencia",
        "Pensamiento estratégico",
        "Liderazgo",
      ],
    },
  },
    {
    id: "d7",
    number: "D7",
    title: "Diagrama de Ishikawa",
    subtitle: "Gestión Gerencial · Desafío 7",
    summary:
      "Análisis de causa y efecto aplicando el Diagrama de Ishikawa (6M) para identificar las raíces de un problema de retrasos en el embarque. Se realizó una conexión directa al TPI del equipo realizando el mismo análisis.",
    color: "from-accent to-warm",
    colorBg: "bg-accent/10",
    borderColor: "border-accent/30",
    tools: ["Diagrama de Ishikawa", "Análisis de causa-efecto", "6M", "Canva"],
    problem:
      "Identificar las causas raíz de los problemas, organizando los factores en las 6 categorías (6M) del Diagrama de Ishikawa y determinando la M más crítica.",
    solution:
      "Construimos un Diagrama de Ishikawa con seis ramas (Personas, Políticas y Procedimientos, Materiales, Máquinas y Equipos, Medio Ambiente/Entorno y Medición), identificando como causa raíz sistémica la rama de Políticas y Procedimientos, ya que actúa como amplificador de todos los demás problemas.",
    canvasLink: "https://canva.link/rm8esi4kox5pk36",
    ishikawa: {
      effect: "Demasiados vuelos con retraso en el embarque",
      criticalM: {
        name: "Políticas y Procedimientos",
        justification:
          "Esta rama es la raíz sistémica. Todos los demás problemas —el comportamiento del personal, el uso inadecuado de los equipos, los errores de datos— son consecuencia o se amplifican por la falta de procedimientos claros, protocolos de contingencia y sistemas de asignación bien definidos. Los horarios mal diseñados amplían el impacto de los retrasos de equipaje, las fallas mecánicas y los problemas de tripulación. Sin márgenes de tolerancia en la planificación, cualquier incidente menor en otra M se convierte automáticamente en un retraso de embarque.",
      },
      branches: [
        {
          id: "m1",
          name: "Personas",
          causes: [
            "Personal desmotivado con bajo sentido de pertenencia.",
            "Falta de capacitación en procedimientos de embarque y gestión de listas de espera.",
            "Actitud negativa hacia el cliente que ralentiza la atención en mostrador.",
            "Comunicación deficiente entre tripulación y personal en tierra.",
          ],
        },
        {
          id: "m2",
          name: "Políticas y Procedimientos",
          causes: [
            "Horarios de tripulación mal diseñados sin margen para imprevistos.",
            "Ausencia de protocolos de contingencia ante retrasos encadenados.",
            "Asignación de tareas ambigua entre áreas (mostrador, puerta, equipaje).",
            "Captación y entrada de datos inexacta que genera inconsistencias en listas de pasajeros.",
            "Equipaje mal etiquetado desde el origen que retrasa la carga.",
            "Sin procedimiento estandarizado para el manejo de equipaje entre líneas.",
            "Comidas programadas que llegan fuera de tiempo a la aeronave.",
          ],
        },
        {
          id: "m3",
          name: "Materiales",
          causes: [
            "Equipaje de origen retrasado.",
            "Equipaje entre líneas aéreas retrasado.",
            "Insumos de cocina de baja calidad que generan reprocesos y demoras en el servicio de comidas.",
          ],
        },
        {
          id: "m4",
          name: "Máquinas y Equipos",
          causes: [
            "Sistemas de check-in y asignación de asientos obsoletos.",
            "Software de gestión de turnos que no contempla retrasos previos.",
            "Aeronaves con mayor tiempo de servicio que requieren más tiempo de inspección mecánica.",
            "Computadoras lentas en mostradores que alargan el proceso de cada pasajero.",
          ],
        },
        {
          id: "m5",
          name: "Medio Ambiente / Entorno",
          causes: [
            "Espacio reducido en cabina para equipaje de mano que obliga a detener el embarque.",
            "Desperdicios en cocinas que generan costos adicionales y demoras logísticas.",
            "Condiciones climáticas adversas no incorporadas en los planes de contingencia.",
            "Terminal saturada por tráfico simultáneo de vuelos.",
          ],
        },
        {
          id: "m6",
          name: "Medición",
          causes: [
            "Datos de entrada inexactos que impiden proyectar tiempos reales de embarque.",
            "Ausencia de KPIs monitoreados en tiempo real (tiempo por pasajero, estado de equipaje, etc.).",
          ],
        },
      ],
    },
    tpiConnection: {
      organization: "S&M Servicios y Materiales",
      fishHead: {
        title: "La Cabeza del Pescado del TPI",
        problem:
          "El problema central es la ausencia de un sistema digitalizado de gestión de pedidos y administración en S&M Servicios y Materiales.",
        isProblemOrSymptom: "Problema organizacional medible",
        metrics: [
          "Al menos 24 horas semanales dedicadas a tareas administrativas manuales.",
          "Los presupuestos tardan entre 48 y 72 horas en confeccionarse.",
          "El seguimiento de cada pedido depende de la memoria del socio.",
          "Capacidad máxima de producción simultánea de 5 a 6 proyectos sin posibilidad de escalar.",
        ],
        symptoms: [
          "Posibles demoras en la entrega de productos por falta de seguimiento del avance en taller.",
          "Pedidos a proveedores con materiales o herrajes incorrectos.",
          "Olvidos de encargos de insumos.",
          "Desconocimiento del stock real disponible de la línea Camilo.",
          "Presupuestos que demoran más de lo esperado.",
        ],
      },
      ishikawaTPI: {
        effect: "Ausencia de sistema de gestión de pedidos y administración",
        criticalM: {
          name: "Métodos",
          justification:
            "Los procesos hechos de memoria son la causa original: la empresa nunca formalizó sus flujos de trabajo porque el volumen actual lo permitía y la coordinación oral entre cinco personas funcionaba. Esa cultura de procesos informales es lo que después hace imposible implementar cualquier herramienta tecnológica, porque no hay nada estructurado que digitalizar.",
        },
        branches: [
          {
            id: "tpi-m1",
            name: "Mano de Obra",
            causes: [
              "Gerencia resistente al cambio digital.",
              "Socios sobrecargados (ventas, diseño, compras y atención al cliente).",
              "Riesgo de pérdida de empleados capacitados que abren negocios propios.",
            ],
          },
          {
            id: "tpi-m2",
            name: "Métodos",
            causes: [
              "Consultas y pedidos gestionados por WhatsApp sin registro centralizado.",
              "Trazabilidad de pedidos hecha a mano mediante planillas.",
              "Presupuestación con demora de 48 a 72 hs sin historial de versiones.",
              "Presencia obligatoria de un socio en cada etapa del proceso.",
              "Conocimiento de diseño concentrado en un único socio.",
            ],
          },
          {
            id: "tpi-m3",
            name: "Materiales",
            causes: [
              "Gestión de compras en papel y planillas sin integración.",
              "Sin seguimiento de órdenes a proveedores.",
              "Proveedores notifican faltantes de stock con demora.",
            ],
          },
          {
            id: "tpi-m4",
            name: "Máquina / Software",
            causes: [
              "Sin software de gestión de pedidos.",
              "Sin software administrativo ni contable.",
              "Brecha tecnológica: diseño digitalizado pero administración 100% manual.",
            ],
          },
          {
            id: "tpi-m5",
            name: "Medio Ambiente",
            causes: [
              "Sector altamente competitivo con nuevos actores 100% digitales.",
              "Contexto económico adverso que desincentiva la inversión en tecnología.",
            ],
          },
          {
            id: "tpi-m6",
            name: "Medición",
            causes: [
              "Rentabilidad desconocida por línea de negocio.",
              "Sin cuantificación de pérdidas por retrasos o errores de fabricación.",
              "Sin metas formales de ventas ni producción.",
              "Sin indicadores de rendimiento (KPIs) de ningún tipo.",
            ],
          },
        ],
        missingKPIs: [
          "Rentabilidad por línea de negocio (muebles a medida, línea Camilo, venta de insumos).",
          "Tiempo real de producción por proyecto para detectar desvíos antes de incumplir plazos.",
          "Tasa de conversión de consultas a ventas.",
          "Tiempo entre consulta del cliente y entrega del presupuesto.",
        ],
        informalProcesses: [
          "Captación de consultas sin flujo definido: llega por WhatsApp y queda en el historial sin registro estructurado.",
          "Elaboración de presupuestos con planilla Excel sin versiones ni historial de cambios.",
          "Seguimiento del estado de producción por supervisión visual diaria del socio, sin registro escrito.",
          "Coordinación con proveedores por conversación, sin registro formal.",
          "Cierre contable mensual sin registros diarios de ingresos y egresos.",
        ],
        techGap:
          "La empresa usa AutoCAD, SketchUp, software de render e IA para el diseño (herramientas avanzadas), pero toda la gestión operativa corre por WhatsApp y planillas Excel. El propio WhatsApp genera trabas al mezclar comunicación comercial con coordinación interna.",
        proposedSolution:
          "La propuesta que realmente ataca la raíz debe hacer dos cosas en simultáneo: primero documentar y estandarizar los procesos clave (captación de consultas, seguimiento de producción, compras a proveedores), y recién entonces implementar una herramienta simple y de bajo costo que los soporte.",
      },
    },
    evidences: [],
    resolucionIndividual: {
      alumna: "Zaira Antonella Rosin",
      escenario: {
        id: "D",
        empresa: "Hamburguesería BurgerClick",
        efecto: "Delivery frío y papas quemadas — caída de calificación de 4,8 a 3,2 estrellas",
        descripcion:
          "Disminución de la calidad del servicio de delivery, evidenciada por la entrega de alimentos fríos, aceitosos o mal cocidos, lo que provocó una caída de la calificación de los clientes de 4,8 a 3,2 estrellas.",
      },
      ishikawa: {
        effect: "Delivery frío y papas quemadas",
        criticalM: {
          name: "Maquinaria",
          justification:
            "La freidora automática no calibrada es el origen técnico directo del problema. Su falla se amplifica porque no existe ningún método que la amortigüe: no hay control de ticket al retirar, no hay bolsa térmica, no hay protocolo de espera. Si la Maquinaria fallara con métodos robustos, el impacto sería contenido; si los Métodos fueran sólidos pero la freidora sigue sin calibrar, el problema persiste igual. La interacción entre ambas M crea un ciclo de refuerzo negativo: la cocina produce mal → el método de despacho no detecta el error → el repartidor retira igual → el cliente recibe mala calidad.",
        },
        branches: [
          {
            id: "ri-m1",
            name: "Maquinaria",
            causes: [
              "Freidora sin calibrar.",
              "No hay mantenimiento preventivo.",
              "Falla con volumen alto de pedidos.",
            ],
          },
          {
            id: "ri-m2",
            name: "Métodos",
            causes: [
              "No hay protocolo de control de calidad antes de despachar.",
              "Sin control de ticket al retirar el pedido.",
              "No existe gestión de tiempos máximos de espera.",
            ],
          },
          {
            id: "ri-m3",
            name: "Mano de Obra",
            causes: [
              "Repartidor no controla ticket y cancela viaje por espera.",
              "Cocineros sin protocolo de cocción.",
            ],
          },
          {
            id: "ri-m4",
            name: "Materiales",
            causes: [
              "Bolsa de papel sin aislación térmica.",
              "Papas/hamburguesa sin papel térmico durante la espera.",
              "Mochila del repartidor no térmica.",
            ],
          },
          {
            id: "ri-m5",
            name: "Medio Ambiente",
            causes: [
              "Sin área de espera para repartidores.",
              "Mesa de despacho expuesta.",
              "Flujo desordenado de retiro de pedidos.",
            ],
          },
          {
            id: "ri-m6",
            name: "Medición",
            causes: [
              "Sin KPI de tiempo de entrega.",
              "Sin registro de tiempos en mesa.",
              "Sin trazabilidad por pedido.",
            ],
          },
        ],
      },
      planAccion: [
        {
          fase: "Inmediato",
          plazo: "Semana 1",
          items: [
            "Calibrar la freidora con el proveedor o técnico, establecer tiempos por volumen (pico vs normal).",
            "Ninguna otra mejora tiene sentido hasta que el producto salga bien de la cocina.",
          ],
        },
        {
          fase: "Corto plazo",
          plazo: "Semana 2",
          items: [
            "Implementar bolsas térmicas con compartimento separado para papas.",
            "Instalar un punto de espera para repartidores con ticket de retiro obligatorio.",
            "El repartidor solo puede retirar si el ticket coincide con el pedido en pantalla.",
          ],
        },
        {
          fase: "Seguimiento",
          plazo: "Semana 3+",
          items: [
            "Registrar temperatura de entrega por pedido una semana después de la implementación.",
            "Comparar calificaciones en app. Si las quejas de papas bajan, confirma que Maquinaria era la causa raíz.",
          ],
        },
      ],
      comparacion: {
        equipoRef: "Equipo LML Gestión",
        filas: [
          { m: "Máquina", texto: "Similares. Ambas resoluciones consideran que la freidora es una causa importante del problema." },
          { m: "Materiales", texto: "Similares. Ambas vinculan la pérdida de temperatura con deficiencias en el packaging." },
          { m: "Mano de Obra", texto: "Similares. Ambos apuntan a errores humanos asociados al control y supervisión del proceso." },
          { m: "Método", texto: "Similares, aunque LML pone más énfasis en los riesgos de automatizar sin controles." },
          { m: "Medición", texto: "Similares. Ambos equipos encuentran falta de métricas para monitorear el desempeño." },
          { m: "Medio Ambiente", texto: "Diferencia principal. Este análisis lo trata como causa relevante; LML lo considera la causa raíz más importante (gestión de espera de repartidores)." },
        ],
        conclusion:
          "En ambas resoluciones se identificaron prácticamente las mismas causas dentro de las 6M. La principal diferencia aparece en la valoración de la importancia relativa: este análisis pone mayor énfasis en los problemas operativos y tecnológicos de la freidora, mientras que LML Gestión ubica el punto de apalancamiento sistémico en el Medio Ambiente.",
      },
      tpiZaira: {
        cabezaPescado: {
          problema:
            "Ausencia de un sistema integrado de gestión de pedidos y administración en S&M Servicios y Materiales.",
          esProblemaOSintoma: "Problema organizacional medible",
          evidencias: [
            "Los socios dedican 24 horas semanales a tareas administrativas manuales.",
            "No existe trazabilidad del estado de cada pedido.",
            "No se puede calcular la rentabilidad por línea de negocio.",
          ],
        },
        mapeado6M: [
          {
            m: "Medición (Sistemas e Información)",
            contenido:
              "A S&M le faltan casi todos los KPIs básicos: tasa de conversión de consultas en pedidos, tiempo promedio entre consulta y presupuesto, rentabilidad por línea de negocio (a medida vs Camilo vs insumos) y porcentaje de cumplimiento de plazos. Estos datos existen implícitamente en los chats de WhatsApp y remitos, pero nadie los extrae ni analiza. El problema no se detecta temprano porque no hay un indicador que lo vuelva visible antes de que colapse por volumen.",
          },
          {
            m: "Métodos (Procesos)",
            contenido:
              "Prácticamente todo el proceso de gestión de pedidos se hace de memoria: agenda de visitas domiciliarias, seguimiento de producción, control de stock de la línea Camilo. El único proceso con alguna formalización es la planilla Excel de presupuestación. Todo lo demás es tácito y no transferible.",
          },
          {
            m: "Maquinaria (Software/Tecnología)",
            contenido:
              "Hay una brecha enorme entre el nivel tecnológico del área de diseño (AutoCAD, SketchUp, IA) y el de la administración (WhatsApp + Excel fragmentado). WhatsApp mezcla comunicación comercial con coordinación interna y no permite búsqueda estructurada ni estados de pedido. No genera trabas hoy porque el volumen es manejable, pero ante un incremento de demanda el sistema colapsa.",
          },
        ],
        raizYPropuesta: {
          raiz: "Métodos",
          justificacion:
            "Aunque la ausencia de tecnología es visible, el problema principal no es la falta de software. La empresa posee información, registros y herramientas tecnológicas para diseño, lo que no posee son procesos formalizados para gestionar esa información de manera integrada. Si instalaran un ERP sin modificar los procesos, seguirían dependiendo de los socios, registrando información de forma incompleta y manteniendo la misma resistencia al cambio.",
          atacaRaiz: true,
          explicacion:
            "La propuesta sí ataca la raíz porque no consiste únicamente en incorporar tecnología. El sistema de información es la herramienta, pero el verdadero objetivo es transformar la forma en que la empresa administra sus procesos. Desde la perspectiva sistémica, la palanca de cambio no es el software en sí, sino la formalización y estandarización de los procesos organizacionales.",
        },
      },
    },
    reflection: {
      learned:
        "Aprendimos que un diagrama de causa-efecto no sirve solo para listar problemas: lo más valioso es identificar cuál de las 6M actúa como causa raíz sistémica. En el caso de la aerolínea, los Políticas y Procedimientos amplifican todas las demás fallas. Al aplicarlo al TPI de S&M, confirmamos que la raíz está en la informalidad de los Métodos, y que implementar software sin antes documentar procesos sería una solución superficial.",
      difficulties:
        "El mayor desafío fue distinguir entre síntomas y causas reales. Al principio tendíamos a listar efectos visibles (demoras, olvidos) en lugar de las causas estructurales que los generan.",
      improvements:
        "Con más tiempo, cuantificaríamos el impacto económico de cada causa para priorizar cuáles atacar primero y construir un plan de mejora escalonado.",
      competencies: [
        "Análisis sistémico",
        "Pensamiento crítico",
        "Diagnóstico organizacional",
        "Conexión teoría-práctica",
      ],
    },
  },
  {
    id: "d8",
    number: "D8",
    title: "Devlights como Sistema Sociotécnico",
    subtitle: "Gestión Gerencial · Desafío 8",
    summary:
      "Análisis de Devlights desde la perspectiva de sistemas sociotécnicos, sistemas de información y gestión del cambio frente a la disrupción de la IA.",
    color: "from-accent to-warm",
    colorBg: "bg-accent/10",
    borderColor: "border-accent/30",
    tools: ["Teoría General de Sistemas", "Sistemas de Información", "Gestión del Cambio", "Análisis organizacional"],
    problem:
      "Analizar a Devlights como sistema sociotécnico abierto, identificar sus factores críticos de éxito, las problemáticas que enfrenta y proponer aportes desde el rol de futuros profesionales.",
    solution:
      "Desarrollamos un análisis integral de Devlights considerando su estructura como sistema sociotécnico, sus sistemas de información desde la perspectiva de negocios, sus FCE, las problemáticas actuales y una síntesis integradora.",
    devlights: {
      actividades: [
        {
          id: "a1",
          numero: "1",
          titulo: "Devlights como sistema sociotécnico",
          contenido:
            "Devlights es una empresa argentina del sector tecnológico dedicada al desarrollo de software y consultoría informática. Desde la perspectiva de la Teoría General de Sistemas, puede considerarse un sistema sociotécnico, ya que su funcionamiento depende de la interacción entre componentes sociales y tecnológicos que trabajan de manera integrada para alcanzar objetivos organizacionales.",
          subsecciones: [
            {
              titulo: "Componente social",
              descripcion:
                "Conformado por desarrolladores, analistas, diseñadores, líderes de proyecto, directivos y clientes. Estos actores colaboran, toman decisiones y aportan conocimientos especializados que permiten llevar adelante los distintos proyectos.",
              color: "border-blue-400 bg-blue-50",
              badgeColor: "bg-blue-100 text-blue-800",
            },
            {
              titulo: "Componente técnico",
              descripcion:
                "Comprende las herramientas informáticas, plataformas de desarrollo, sistemas de gestión, servicios en la nube y metodologías ágiles utilizadas para diseñar e implementar soluciones tecnológicas.",
              color: "border-teal-400 bg-teal-50",
              badgeColor: "bg-teal-100 text-teal-800",
            },
            {
              titulo: "Sistema abierto",
              descripcion:
                "Devlights mantiene una interacción constante con su entorno, recibiendo entradas como requerimientos de clientes, nuevas tecnologías y demandas del mercado, transformándolas en productos y servicios de valor. La retroalimentación de clientes y usuarios le permite mejorar continuamente sus procesos.",
              color: "border-purple-400 bg-purple-50",
              badgeColor: "bg-purple-100 text-purple-800",
            },
          ],
        },
        {
          id: "a2",
          numero: "2",
          titulo: "Sistema de información desde la perspectiva de negocios",
          contenido:
            "Desde la perspectiva de negocios, Devlights utiliza los sistemas de información como una herramienta estratégica para gestionar proyectos, coordinar equipos y mantener la relación con sus clientes. Mediante plataformas de gestión, herramientas de colaboración y servicios en la nube, la empresa administra información clave para el desarrollo de software y la toma de decisiones.",
          cierre:
            "Estos sistemas permiten mejorar la eficiencia operativa, controlar el avance de los proyectos y ofrecer soluciones tecnológicas adaptadas a las necesidades del mercado. De esta manera, la información se convierte en un recurso fundamental para generar valor y mantener la competitividad de la organización.",
          subsecciones: [],
        },
        {
          id: "a3",
          numero: "3",
          titulo: "Características clave y Factores Críticos de Éxito (FCE)",
          contenido:
            "Devlights se destaca por ser una empresa tecnológica orientada al desarrollo de software a medida y la consultoría informática, trabajando con clientes tanto nacionales como internacionales. Una de sus principales características es su enfoque en la innovación, el aprendizaje continuo y el trabajo colaborativo mediante equipos multidisciplinarios. Además, impulsa la formación de talento a través de bootcamps y capacitaciones.",
          fce: [
            "Disponibilidad de personal altamente capacitado.",
            "Actualización constante frente a los cambios tecnológicos.",
            "Capacidad de adaptarse rápidamente a las necesidades de los clientes y del mercado.",
            "Calidad de los servicios ofrecidos.",
            "Uso de metodologías ágiles para garantizar la satisfacción del cliente.",
          ],
          subsecciones: [],
        },
        {
          id: "a4",
          numero: "4",
          titulo: "Problemáticas y gestión del cambio",
          contenido: "",
          problematicas: [
            {
              titulo: "Disrupción por IA",
              descripcion:
                "Necesidad de controlar errores y alucinaciones en tareas críticas como migraciones de bases de datos.",
              color: "border-red-400 bg-red-50",
              badgeColor: "bg-red-100 text-red-800",
            },
            {
              titulo: "Multiempleo e Infidelidad Laboral (Overemployment)",
              descripcion:
                "Casos de desarrolladores que usan la IA para cubrir de forma oculta dos o más trabajos en paralelo, afectando la ética y la seguridad.",
              color: "border-orange-400 bg-orange-50",
              badgeColor: "bg-orange-100 text-orange-800",
            },
            {
              titulo: "Pérdida de Competitividad Cambiaria",
              descripcion:
                "Argentina se ha vuelto costosa en dólares, dificultando la competencia directa por precio contra mercados de bajo costo.",
              color: "border-yellow-400 bg-yellow-50",
              badgeColor: "bg-yellow-100 text-yellow-800",
            },
            {
              titulo: "Supervisión del Rendimiento",
              descripcion:
                "Complejidad para medir la productividad y calidad del código en un entorno agéntico donde producir volumen es fácil.",
              color: "border-pink-400 bg-pink-50",
              badgeColor: "bg-pink-100 text-pink-800",
            },
          ],
          gestionCambio:
            "Devlights creó un área transversal que unifica Datos, Infraestructura y DevOps para estandarizar los procesos mediante templates bajo el enfoque Cloud-first. Esto automatiza el control de calidad arquitectónica y optimiza costos. Además, gestionan el cambio promoviendo la IA como una herramienta de inversión que potencia el ingenio del ingeniero, manteniendo una política de total transparencia con los clientes ante desvíos éticos.",
          subsecciones: [],
        },
        {
          id: "a5",
          numero: "5",
          titulo: "Propuesta desde el rol de futuros profesionales",
          contenido: "",
          aportes: [
            "El aporte principal no es escribir código línea por línea, sino saber guiar las herramientas tecnológicas y entender el negocio del cliente.",
            "Ser responsables y honestos: explicar claramente qué se necesita y qué no. Muchas veces los clientes piden IA solo por moda, y el trabajo del profesional es demostrar que un sistema de reglas simple puede resolver el problema de forma más barata y rápida.",
            "Estructurar muy bien la información y dejar la documentación ordenada para que los asistentes de programación trabajen bien y no cometan errores graves.",
            "Armar planes de trabajo claros, supervisar lo que hace la tecnología y no dejar todo automatizado a ciegas.",
            "El mayor valor está en el lado humano: hablar un buen inglés, saber comunicarse con personas no técnicas usando pantallas de prueba o dibujos sencillos, y tener el compromiso de entregar un trabajo bien hecho.",
          ],
          subsecciones: [],
        },
        {
          id: "a6",
          numero: "6",
          titulo: "Síntesis integradora",
          contenido:
            "Devlights es un sistema sociotécnico abierto que ha consolidado un modelo de exportación de software (staff augmentation) hacia EE. UU. basándose en la horizontalidad de su cultura, el talento regional y ventajas competitivas como el solapamiento horario y el inglés técnico. Frente a la crisis y disrupción de la IA agéntica, la empresa se reinventa estandarizando pipelines de desarrollo Cloud-first y potenciando el rol estratégico de sus ingenieros. El futuro profesional del área debe liderar esta transición, enfocándose en la arquitectura, la optimización de recursos y la comunicación asertiva, demostrando que la sostenibilidad tecnológica requiere un equilibrio entre la eficiencia automatizada y la confianza humana.",
          subsecciones: [],
        },
      ],
    },
    evidences: [
      {
        id: "e1",
        title: "Informe completo (Google Docs)",
        type: "link",
        description: "Documento completo de la actividad grupal sobre Devlights",
        url: "https://docs.google.com/document/d/1K5dx6qX7JCBgV3hYkGZdamZNteZXm8Bg3HkihUHkEms/edit?tab=t.0",
        icon: "link",
      },
    ],
    reflection: {
      learned:
        "Aprendimos que una empresa tecnológica como Devlights no es solo código y servidores: es un sistema vivo donde las personas, los procesos y la tecnología se influyen mutuamente. El análisis como sistema sociotécnico nos permitió ver que los mayores desafíos no son técnicos sino humanos: la ética del overemployment, la confianza del cliente y la capacidad de adaptarse al cambio.",
      difficulties:
        "El mayor desafío fue sintetizar la charla en conceptos académicos sin perder la riqueza de lo que se compartió. Conectar la teoría de sistemas con una empresa real y actual requirió un esfuerzo de abstracción importante.",
      improvements:
        "Con más tiempo, profundizaríamos en el análisis comparativo con otras empresas del sector para identificar qué hace a Devlights diferente y qué podría replicarse en otras organizaciones tecnológicas argentinas.",
      competencies: [
        "Pensamiento sistémico",
        "Análisis organizacional",
        "Gestión del cambio",
        "Visión estratégica",
        "Comunicación técnica",
      ],
    },
  },
];

// Helper para obtener un desafío por ID
export const getChallengeById = (id) => challenges.find((c) => c.id === id);