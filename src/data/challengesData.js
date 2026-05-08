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
];

// Helper para obtener un desafío por ID
export const getChallengeById = (id) => challenges.find((c) => c.id === id);