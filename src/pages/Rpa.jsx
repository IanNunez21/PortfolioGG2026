import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Target, Sparkles, TrendingUp, MessageSquare, Award, BookOpen, Brain, BookOpenCheck, Image } from 'lucide-react';
import { rpaData } from '../data/rpaData';

// Contenido completo del RPA de Ian Nuñez (RPA_completo.md)
const ianRpaContent = {
  units: [
    {
      number: 1,
      bloque: "Bloque I: Fundamentos Organizacionales y Dirección Estratégica",
      title: "UNIDAD I: Las Organizaciones y su Administración",
      qa: [
        {
          q: "Considerando que toda organización opera como un sistema abierto sujeto a la entropía y en constante búsqueda de la homeostasis, ¿de qué manera el diseño y la implementación de un Sistema de Información integral impactan en el equilibrio de las fuerzas internas y externas a largo plazo, y cuál es nuestra responsabilidad como ingenieros al momento de alinear esa arquitectura tecnológica con las estructuras orgánicas de la empresa?",
          a: "Las organizaciones, entendidas como sistemas abiertos, importan insumos y energía de su entorno para combatir la entropía natural que tiende a degradarlas. Un Sistema de Información (SI) integral actúa como el principal lazo de retroalimentación (feedback loop) indispensable para lograr la homeostasis, permitiendo capturar perturbaciones externas (volatilidad de mercado, cambios regulatorios) y desajustes internos (cuellos de botella, ineficiencias). Nuestra responsabilidad fundamental como ingenieros no consiste en empaquetar e imponer software genérico, sino en modelar una arquitectura técnica que respete y potencie la estructura orgánica de la empresa. Al alinear dinámicamente los flujos de datos con los procesos humanos reales, mitigamos la resistencia interna y garantizamos un acoplamiento estructural duradero que estabiliza las fuerzas de la organización frente al entorno a largo plazo."
        },
        {
          q: "Al analizar la evolución de los roles gerenciales y los modelos de administración, ¿cómo debemos adaptar nuestro liderazgo técnico y nuestras habilidades conceptuales para dejar de ser simples \"constructores de software\" y convertirnos en agentes de transformación que optimicen la toma de decisiones en un entorno de alta incertidumbre?",
          a: "La transición histórica desde modelos mecanicistas y rígidos hacia enfoques situacionales o de redes dinámicas exige que reformulemos nuestras habilidades conceptuales. Dejar atrás el rol plano de \"constructor de software\" implica entender que el código es solo un medio y no el fin. Debemos ejercer un liderazgo técnico transformacional que interprete la organización de manera holística, asimilando que los datos aislados carecen de valor estratégico si no están contextualizados. Nuestra meta es estructurar arquitecturas de información flexibles que rompan silos informativos y descentralicen el conocimiento, proveyendo a la gerencia de herramientas analíticas adaptativas que reduzcan la incertidumbre y optimicen de forma ágil la toma de decisiones complejas en tiempo real."
        }
      ]
    },
    {
      number: 2,
      bloque: "Bloque I: Fundamentos Organizacionales y Dirección Estratégica",
      title: "UNIDAD II: Estrategia Empresarial y Diagnóstico",
      qa: [
        {
          q: "La estrategia no solo responde a las conditions actuales del mercado, sino que moldea su futuro. En nuestra práctica profesional, ¿cómo podemos cruzar las herramientas de diagnóstico estratégico (como el análisis FODA y la Cadena de Valor), con la detección de vacíos de planificación tecnológica, para diseñar soluciones que no sólo resuelvan un problema operativo, sino que generen una ventaja competitiva sostenible y defendible en el tiempo?",
          a: "Las matrices de diagnóstico como el FODA y el mapeo de la Cadena de Valor adquieren un poder disruptivo cuando el ingeniero las cruza con la infraestructura de TI. Al diseccionar los eslabones de valor, no debemos buscar parches informáticos puntuales para agilizar una tarea aislada, sino identificar vacíos de planificación donde la tecnología pueda alterar la estructura del negocio. Por ejemplo, si el FODA evidencia una amenaza externa de competidores más ágiles, la solución técnica debe orientarse a robustecer las actividades primarias de la cadena mediante automatizaciones o análisis predictivos de datos. Al rellenar estos vacíos estratégicos con tecnología propia y escalable, diseñamos sistemas que erigen verdaderas barreras de entrada en el mercado, transformando la eficiencia de hoy en una ventaja competitiva defendible a largo plazo."
        },
        {
          q: "La implementación de cualquier estrategia exige un equilibrio sinérgico entre múltiples factores dinámicos (estructura, sistemas, estilo de dirección, etc.). Desde una visión sistémica, ¿por qué la introducción de una nueva tecnología transversal (como un ERP o un CRM) suele fracasar si no reconfiguramos simultáneamente la estructura y la cultura de la organización, y cómo evitamos este efecto \"cuello de botella\"?",
          a: "Conforme al marco de las 7-S de McKinsey, una organización es una red interdependiente donde los elementos duros (sistemas, estructura) están indisolublemente ligados a los blandos (cultura, personal). Tecnologías transversales como un ERP imponen flujos de trabajo estandarizados y transparentes que chocan de inmediato con culturas habituadas al manejo informal de la información o estructuras fragmentadas en feudos departamentales. El fracaso se origina por este desfase estructural: el software avanza a un ritmo que las pautas humanas y los esquemas de poder formales e informales rechazan activamente. Para mitigar este cuello de botella sistémico, el despliegue técnico debe acompañarse con un rediseño de procesos y una gestión de la cultura interna, garantizando que la mutación organizativa ocurra de manera simétrica."
        }
      ]
    },
    {
      number: 3,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD III: La Conducta Humana y el Talento 4.0",
      qa: [
        {
          q: "La transformación digital demanda lo que llamamos \"Talento 4.0\" (habilidades STEAM, autogestión, lifelong learning). Como futuros líderes de proyectos TI que introducirán herramientas disruptivas en las rutinas de trabajo, ¿de qué forma debemos gestionar la motivación humana y la inteligencia emocional para transformar el miedo a la obsolescencia en un compromiso proactivo hacia la innovación?",
          a: "La asimilación de innovaciones digitales altera las zonas de confort de los operarios, disparando mecanismos de defensa psicológicos por miedo a ser desplazados por la tecnología. Como líderes del proyecto TI, el pensamiento sistémico nos prohíbe reducir el problema a una simple falta de capacitación técnica. Debemos abordar la dimensión afectiva y los modelos mentales de las personas mediante una gestión empática, implementando metodologías participativas donde el usuario final co-diseñe la solución. Al alinear incentivos con el aprendizaje continuo (lifelong learning) y evidenciar que la automatización los libera de tareas monótonas para asumir roles de mayor valor, transmutamos el miedo en un sentido de pertenencia y compromiso proactivo con la innovación."
        },
        {
          q: "Al formar y dirigir equipos de alto desempeño (o superequipos) para el desarrollo de sistemas complejos, ¿cómo identificamos y neutralizamos las barreras de comunicación informales y los conflictos de poder intergrupal, para evitar que estas tensiones sistémicas se traduzcan en fallas en la arquitectura del software o en retrasos en las entregas?",
          a: "Existe una relación directa y circular entre la estructura social de los equipos y la arquitectura técnica del software que estos producen (Ley de Conway). Si existen fracturas políticas, rivalidades o barreras de comunicación informales entre las células de desarrollo, dichas fricciones se verán reflejadas de manera inevitable en el código en forma de interfaces mal diseñadas, dependencias acopladas de manera rígida o baches de integración. Para identificar estas anomalías tempranamente, debemos monitorear la fluidez del intercambio técnico y la transparencia en los repositorios compartidos. Neutralizamos estas tensiones mediante la instauración de una cultura de confianza mutua, clarificación de metas y canales transversales de gobernanza, blindando al producto técnico de los cortocircuitos humanos del grupo."
        }
      ]
    },
    {
      number: 4,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD IV: Modelos de Negocios",
      qa: [
        {
          q: "El Modelo Canvas evidencia que una propuesta de valor basada en tecnología carece de impacto si no está conectada orgánicamente con los canales, la relación con los clientes y la estructura de costos. Cuando modelamos una solución de software como servicio (SaaS), ¿cómo garantizamos que nuestra arquitectura técnica soporte genuinamente la propuesta de valor y haga factible el flujo de ingresos, en lugar de convertirse en una carga financiera pesada para la empresa?",
          a: "Una propuesta de valor SaaS enfocada en la flexibilidad, inmediatez y disponibilidad global entra en crisis si la arquitectura física de soporte es rígida o costosa de mantener. Para garantizar un modelo de negocios financieramente sustentable en el lienzo Canvas, debemos diseñar soluciones bajo conceptos de elasticidad y modularidad (mediante la contenedorización y entornos virtuales aislados). Esto permite que el aprovisionamiento de recursos de cómputo escale de manera estrictamente lineal con la adición de nuevos usuarios de pago. Al acoplar el costo técnico marginal directamente con la entrada de ingresos por suscripción, evitamos el sobredimensionamiento de infraestructura y aseguramos que la base técnica sea el motor, y no el lastre financiero, del negocio."
        },
        {
          q: "Al evaluar el bloque de \"Asociaciones Clave\" en empresas de base tecnológica (EBT), ¿cuáles son los impactos a largo plazo de decidir tercerizar (outsourcing) componentes críticos de nuestra infraestructura en lugar de desarrollarlos internamente, evaluando el equilibrio entre agilidad operativa y la fuga de \"core business\" intelectual?",
          a: "La tercerización de infraestructura o componentes de software clave plantea una clásica compensación sistémica (trade-off) entre velocidad presente y autonomía futura. A corto plazo, recurrir a un asociado clave de nube o software de terceros maximiza la agilidad operativa y acelera drásticamente el despliegue comercial. Sin embargo, la consecuencia de largo plazo de delegar elementos críticos es la pérdida de control de la hoja de ruta técnica y una erosión de nuestra propiedad intelectual. El pensador sistémico debe delimitar estrictamente las fronteras de su sistema: se externalizan las funciones genéricas o de soporte básico, pero se retienen, protegen y desarrollan de forma interna aquellos algoritmos y lógicas que constituyen la ventaja competitiva esencial (core business) de la firma."
        }
      ]
    },
    {
      number: 5,
      bloque: "Bloque III: Gestión de la Innovación, Procesos y Sostenibilidad",
      title: "UNIDAD V: Dinámica del Cambio y Reingeniería",
      qa: [
        {
          q: "La Reingeniería de Procesos (BPR), exige un rediseño radical partiendo casi desde cero, a menudo habilitado por nuevas infotecnologías. Frente a un proyecto de tal magnitud, ¿cómo debemos aplicar modelos integrales como las 7-S de McKinsey o los 8 pasos de Kotter para garantizar que la disrupción tecnológica no destruya el tejido social de la organización y logre el \"recongelamiento\" de la nueva cultura?",
          a: "La Reingeniería de Procesos (BPR) es una intervención disruptiva que rompe las inercias operativas instaladas para reconstruir los flujos de valor sobre pilares infotecnológicos. Debido a su carácter radical, altera sustancialmente el tejido de relaciones humanas. Para pilotar este cambio sin generar anomia o un rechazo violento del sistema, cruzamos la evaluación holística de McKinsey (garantizando que la nueva tecnología sintonice con el estilo directivo y las competencias del personal) con la secuencia de Kotter. No se instala el software de golpe; primero se construye un sentido de urgencia legítimo, se involucra a una coalición conductora y se capacita de manera continua. Solo integrando a las personas en el rediseño de sus propias tareas logramos estabilizar las nuevas prácticas operativas y fijar el \"recongelamiento\" cultural definitivo."
        },
        {
          q: "Sabemos que los mayores fracasos en la implementación de software se deben a la resistencia al cambio. Anticipándonos sistémicamente, ¿qué indicadores tempranos (señales débiles) debemos monitorear durante el ciclo de vida del desarrollo para convertir un cambio inducido (top-down) en un aprendizaje organizacional adaptativo donde el usuario final se sienta dueño del sistema?",
          a: "Las fallas catastróficas en la puesta en marcha de un sistema de información son el resultado acumulativo de fricciones humanas no resueltas que emitieron \"señales débiles\" a lo largo del ciclo de desarrollo. Síntomas sutiles como el ausentismo reiterado a los talleres, comentarios informales pasivo-agresivos, el mantenimiento deliberado de planillas de cálculo paralelas de respaldo o una baja tasa de interacción en las fases de prueba delatan un rechazo larvario. El ingeniero con visión sistémica lee estas señales no como quejas aisladas, sino como alarmas de desajuste del sistema. Al abrir canales de feedback inmediato e incorporar activamente los ajustes sugeridos por los operarios, disolvemos el carácter impositivo de la transición, transformando el proyecto en un aprendizaje adaptativo conjunto donde el usuario final adopta el sistema como propio."
        }
      ]
    },
    {
      number: 6,
      bloque: "Bloque III: Gestión de la Innovación, Procesos y Sostenibilidad",
      title: "UNIDAD VI: Innovación Tecnológica y Creatividad",
      qa: [
        {
          q: "La Vigilancia Tecnológica y la Inteligencia Competitiva son esenciales para no quedar marginados del mercado. Como ingenieros, ¿cómo debemos diseñar procesos sistemáticos para capturar información del entorno y aplicar técnicas de creatividad (Design Thinking, SCAMPER, etc.) que nos permitan pasar de la simple \"invención\" abstracta a una verdadera \"innovación\" que el mercado adopte y valore?",
          a: "La invención técnica se queda en un mero ejercicio de diseño abstracto si no encuentra un acoplamiento real con las necesidades de la sociedad o el mercado. Para transformar ideas creativas en innovaciones reales, estructuramos procesos de Vigilancia Tecnológica e Inteligencia Competitiva que operen como sensores estables del entorno organizacional, analizando patentes, movimientos competitivos y demandas de los usuarios. Sobre estos datos empíricos de entrada, aplicamos herramientas como SCAMPER o las etapas empáticas de Design Thinking para iterar y refinar soluciones de software. La innovación sistémica emerge en la intersección exacta de tres variables: viabilidad tecnológica, factibilidad financiera del negocio y deseabilidad real por parte de las personas."
        },
        {
          q: "Enfrentados a la decisión de adoptar estrategias de innovación abierta frente a esquemas de innovación cerrada, ¿cómo evaluamos las compensaciones sistémicas entre la protección de la propiedad intelectual, el tiempo de salida al mercado (time to market) y la sinergia que se obtiene al integrar conocimiento externo en nuestros diseños de sistemas?",
          a: "Elegir entre innovación abierta o cerrada configura un dilema sistémico clásico de balances dinámicos. Mantener un modelo cerrado blinda por completo la propiedad intelectual del software y retiene el control total del conocimiento dentro de los límites de la empresa, pero a costa de asumir ciclos de desarrollo más lentos y un alto riesgo de obsolescencia frente a la velocidad del entorno. Por el contrario, la innovación abierta diluye las fronteras corporativas, capturando el talento externo y acelerando de forma exponencial el tiempo de salida al mercado (time to market) gracias a la sinergia colectiva. La evaluación del ingeniero debe ponderar estas compensaciones: la arquitectura ideal suele ser híbrida, protegiendo con rigidez los algoritmos nucleares del negocio mientras abre APIs y colabora en ecosistemas externos para acelerar la innovación periférica."
        }
      ]
    },
    {
      number: 7,
      bloque: "Bloque III: Gestión de la Innovación, Procesos y Sostenibilidad",
      title: "UNIDAD VII: Responsabilidad Social, Sustentabilidad y Sostenibilidad Empresarial",
      qa: [
        {
          q: "En un contexto donde muchas organizaciones caen en el \"greenwashing\" (exagerando esfuerzos ecológicos o sociales sin aplicarlos realmente), ¿cómo debemos diseñar e implementar nuestros Sistemas de Información (por ejemplo, mediante herramientas de trazabilidad o cuadros de mando) para que permitan medir, auditar y transparentar el impacto real en los ámbitos económico, social y ambiental, forzando a la organización a internalizar la RSE como un compromiso ético a largo plazo y no como una mera táctica de marketing?",
          a: "El greenwashing prospera gracias a la asimetría informativa y la falta de auditorías objetivas sobre las prácticas corporativas. Como Ingenieros en Sistemas, tenemos la capacidad de diseñar e implementar plataformas de información éticas que actúen como la fuente única de verdad operativa de la empresa. Mediante el desarrollo de módulos de trazabilidad basados en datos inalterables y cuadros de mando integrales que capturen en tiempo real indicadores de triple impacto (emisiones, gestión de residuos, equidad de género, balances contables), dotamos al sistema de transparencia analítica. Al exponer métricas duras e indiscutibles tanto al control interno como al escrutinio público, desarmamos el maquillaje publicitario e internalizamos la Responsabilidad Social Empresaria (RSE) como un pilar de gestión real."
        },
        {
          q: "Entendiendo a la sostenibilidad como el equilibrio ineludible entre el crecimiento económico, el cuidado ambiental y la equidad social para no comprometer a las generaciones futuras, ¿de qué manera los Ingenieros en Sistemas podemos alinear la infraestructura tecnológica de una empresa con los Objetivos de Desarrollo Sostenible (ODS), asegurando que nuestros desarrollos actúen como catalizadores que mitiguen externalidades negativas (como el impacto del consumo energético o la basura electrónica) y fortalezcan la relación simbiótica entre la organización y su comunidad?",
          a: "El rol de la ingeniería de sistemas en la sostenibilidad radica en concebir la propia infraestructura de TI como un subsistema con un impacto ecológico directo. Alinearse genuinamente con los ODS (como Acción por el Clima o Industria, Innovación e Infraestructura) exige que apliquemos criterios de desarrollo sustentable: optimización de consultas de bases de datos para reducir ciclos de CPU, diseño de software eficiente que prolongue el ciclo de vida del hardware existente para retrasar la generación de basura electrónica, y selección de infraestructuras energéticamente eficientes o consolidadas mediante virtualización avanzada. Al convertir nuestras soluciones técnicas en catalizadores internos que reducen drásticamente las externalidades negativas de la informática, logramos que la relación entre la organización y su comunidad circundante deje de ser extractiva y pase a ser una simbiosis de beneficio mutuo a largo plazo."
        }
      ]
    }
  ],
  sintesis: {
    formulacion: "La elaboración de las catorce preguntas que vertebran esta Ruta Personal de Aprendizaje no nació de una transcripción espontánea ni lineal. Requirió un proceso de deconstrucción conceptual y relectura crítica de los contenidos de cada unidad de la asignatura, desafiando la tendencia natural a formular interrogantes fácticos o puramente memorísticos. La estrategia metodológica se dividió en tres momentos clave organizados en base al tiempo disponible: Fase de mapeo e interconexión (identificación de los núcleos conceptuales de la administración, la estrategia y el comportamiento humano para cruzarlos deliberadamente con las incumbencias de nuestra ingeniería), Fase de filtro crítico (sometimiento de cada enunciado a las restricciones explícitas de la cátedra, garantizando que operaran como preguntas completamente abiertas) y Fase de revisión temática (ajuste fino de la redacción para integrar en un único cuerpo argumentativo variables duras como arquitectura de TI, bases de datos y variables blandas como cultura y dinámicas de equipo).",
    habits: [
      {
        title: "Busca comprender el panorama general (Seeks to understand the big picture)",
        desc: "Este hábito se consolidó mediante la Actividad de Investigación de Gestión Gerencial y los desafíos D6/D7. Entendí que el éxito del software está supeditado a dinámicas globales de gobernanza y cultura. Asimismo, en el Foro de Reflexión sobre el Gemelo Digital Social en Argentina, debí aplicar este enfoque macro a nivel país para evaluar la interacción entre infraestructura de datos, privacidad, políticas públicas y el tejido socioeconómico general."
      },
      {
        title: "Cambia de perspectivas para aumentar la comprensión (Changes perspectives to increase understanding)",
        desc: "Desarrollé este hábito al realizar la actividad de Tests de Liderazgo. Tras completar las encuestas personales, tuve que distanciarme de mi propia percepción subjetiva y diseñar una representación visual de mi tipo de conducción. El ejercicio me obligó a realizar un quiebre de perspectiva drástico: dejé de mirarme únicamente como ejecutor técnico individual para analizar el rol desde la óptica de un observador externo, logrando comprender cómo mis habilidades conceptuales impactan directamente en el entorno de un equipo de trabajo."
      },
      {
        title: "Identifica la naturaleza circular de las relaciones complejas de causa y efecto (Identifies the circular nature of complex cause and effect relationships)",
        desc: "El desarrollo de este hábito lo viví de forma presencial en la Actividad de la Torre. Al construir la estructura con recursos limitados y asimétricos frente a otros equipos, cada decisión de diseño técnico causaba un impacto inmediato en la asignación de materiales y en la comunicación interna. A su vez, la retroalimentación del estado de la torre forzaba a cambiar la estrategia sobre la marcha en un bucle constante de causa y efecto."
      },
      {
        title: "Considera las consecuencias de las acciones tanto a corto como a largo plazo (Considers both short and long-term consequences of actions)",
        desc: "Se desarrolló al proyectar mi visión profesional en la Infografía de mi perfil Talento 4.0 en 2030. En este ejercicio, analicé cómo mis acciones formativas y decisiones de aprendizaje autónomo en el presente (como el desarrollo de habilidades STEAM o el dominio de nuevas tecnologías) construyen las competencias complejas necesarias para el futuro de mi carrera como profesional de sistemas. Aprendí que las decisiones inmediatas de arquitectura o la omisión del factor humano tienen impactos tardíos sobre la escalabilidad, la robustez y la sostenibilidad de las organizaciones."
      }
    ]
  },
  conclusion: "El mayor aprendizaje logrado en la elaboración de esta RPA es la certeza de que el ingeniero en sistemas moderno es, ante todo, un articulador estratégico. El proceso de empaquetar de forma reflexiva las respuestas a mis propias preguntas me permitió consolidar competencias críticas de síntesis, pensamiento de triple impacto y adaptabilidad. Esta ruta deja de ser un mero requisito de evaluación para constituirse en mi brújula profesional: un mapa que articula el conocimiento técnico con la visión sistémica, organizacional y humanista que exige la ingeniería del siglo XXI."
};

// Contenido completo del RPA de Denise Pujalte
const deniseRpaContent = {
  units: [
    {
      number: 1,
      bloque: "Bloque I: Las Organizaciones, la Administración y la Gestión Gerencial",
      title: "UNIDAD I: Las Organizaciones y su Administración",
      qa: [
        {
          globalNumber: 1,
          q: "Considerando que las organizaciones del siglo XXI operan en entornos de alta complejidad e incertidumbre, ¿cómo se redefine el rol gerencial de un Ingeniero en Sistemas al gestionar la frontera entre las demandas operativas y la infraestructura de SI/TI?",
          a: "El rol gerencial del Ingeniero en Sistemas deja de ser puramente técnico para convertirse en un nexo estratégico (traductor) dentro de la organización. Su función principal es asegurar que la infraestructura tecnológica soporte los objetivos del negocio en un entorno cambiante. Desde un enfoque sistémico, debe gestionar la \"frontera\" equilibrando la estabilidad operativa del día a día (procesos actuales) con la flexibilidad necesaria para implementar nuevas tecnologías que el mercado exige, evitando que el área de TI funcione como un silo aislado."
        },
        {
          globalNumber: 2,
          q: "Frente a la incertidumbre del entorno actual, ¿de qué manera el macroentorno y el microentorno condicionan el rumbo y la estructura de una empresa?",
          a: "Las organizaciones operan como sistemas abiertos que no pueden aislarse de su entorno. Las variables del macroentorno (políticas, económicas, tecnológicas) introducen un alto grado de incertidumbre y obligan a la empresa a cambiar su rumbo estratégico, mientras que el microentorno o ramo del negocio (clientes, proveedores, competidores) ejerce una presión directa en la operativa diaria. Para sobrevivir, la empresa debe adecuar su estructura interna, volviéndose más flexible o modificando sus procesos, para absorber estos impactos externos y responder de manera competitiva al mercado."
        }
      ]
    },
    {
      number: 2,
      bloque: "Bloque I: Las Organizaciones, la Administración y la Gestión Gerencial",
      title: "UNIDAD II: Estrategia Empresarial y Diagnóstico",
      qa: [
        {
          globalNumber: 3,
          q: "¿Cómo se vinculan las métricas técnicas e indicadores de un sistema de información con las perspectivas del Balanced Scorecard para evaluar si la tecnología realmente aporta al cumplimiento de los objetivos estratégicos de la empresa?",
          a: "Las métricas técnicas no deben medirse de forma aislada. Desde un enfoque sistémico, un indicador técnico se vincula con la perspectiva de Procesos Internos o Aprendizaje y Crecimiento del Balanced Scorecard. Si la infraestructura tecnológica mejora su rendimiento (métrica técnica), optimiza los tiempos de operación de la empresa, lo que impacta positivamente en la perspectiva del Cliente (satisfacción) y, finalmente, se traduce en mejores resultados en la perspectiva Financiera."
        },
        {
          globalNumber: 4,
          q: "¿Qué impacto tiene en la gestión gerencial el desalineamiento entre la planificación estratégica del negocio y la planificación de los sistemas de información de la empresa?",
          a: "El desalineamiento estratégico actúa como una falla de coordinación en un sistema cerrado, donde los componentes tiran en direcciones opuestas. Si la gerencia planifica una expansión de mercado pero el área de sistemas avanza hacia la rigidez de un software heredado no escalable, la tecnología se convierte en un cuello de botella en lugar de un habilitador. Esto genera pérdidas económicas, duplicación de esfuerzos, frustración en el capital humano y la incapacidad de la empresa para reaccionar a los cambios del entorno."
        },
        {
          globalNumber: 5,
          q: "Desde la perspectiva de las Organizaciones Ágiles, ¿cómo puede un Ingeniero en Sistemas equilibrar la rigidez de una visión estratégica a largo plazo con la flexibilidad que demandan los ciclos cortos de entrega de valor?",
          a: "El equilibrio se logra entendiendo la estrategia como un sistema dinámico y adaptativo, no como un plano estático. La visión a largo plazo define el \"norte estratégico\" (hacia dónde va la organización), mientras que las metodologías ágiles permiten recalibrar el camino mediante iteraciones cortas (Sprints). Como profesionales, implementamos arquitecturas flexibles y productos mínimos viables (MVP) que permiten captar el feedback continuo del cliente, ajustando la táctica operativa sin perder de vista el objetivo macro de la empresa."
        }
      ]
    },
    {
      number: 3,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD III: La Conducta Humana y el Talento 4.0",
      qa: [
        {
          globalNumber: 6,
          q: "¿Cuáles son las competencias clave (STEAM e interpersonales) que definen al Talento 4.0 y cómo transforman la cultura y las formas de trabajo en las organizaciones actuales?",
          a: "El Talento 4.0 combina el conocimiento técnico riguroso (ciencias, tecnología, ingeniería, matemáticas) con habilidades blandas como el pensamiento crítico, la resiliencia y la autogestión. En la era digital, estas competencias transforman la cultura organizacional al romper las jerarquías tradicionales. Los entornos de trabajo se vuelven más colaborativos, basados en la confianza, la experimentación constante y el aprendizaje continuo, desplazando los modelos basados en la repetición y el control estricto."
        },
        {
          globalNumber: 7,
          q: "Ante las nuevas demandas de flexibilidad y virtualidad de los trabajadores técnicos, ¿cómo debe cambiar la gestión gerencial para motivar y retener el talento digital sin recurrir al control tradicional?",
          a: "La gerencia debe migrar del control por presencia (horas silla) al control por resultados y objetivos (mecanismo sistémico de retroalimentación). El nuevo trabajador valora la autonomía y el equilibrio entre vida laboral y personal. Para retener este talento, los líderes de proyectos de sistemas deben construir una cultura de transparencia, ofrecer planes de carrera claros y desafíos técnicos motivadores, entendiendo que el espacio de trabajo actual es una red virtual e interconectada y no un lugar físico."
        }
      ]
    },
    {
      number: 4,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD IV: Trabajo en Equipo y Sinergia Organizacional",
      qa: [
        {
          globalNumber: 8,
          q: "¿Cómo se evidencia el concepto de sinergia empresarial y la complementariedad de roles (por ejemplo, los Roles de Belbin) cuando un equipo interdisciplinario debe resolver un problema complejo de software bajo metodologías ágiles?",
          a: "La sinergia se fundamenta en la premisa sistémica de que \"el todo es mayor que la suma de sus partes\". En el desarrollo de software, un problema complejo no lo resuelve un grupo de programadores idénticos, sino un equipo equilibrado. Al aplicar los Roles de Belbin, la complementariedad entre perfiles mentales (cerebro/analista), de acción (impulsor/implementador) y sociales (coordinador) permite que el equipo interactúe armónicamente, maximizando las fortalezas individuales y mitigando las debilidades en pos de un entregable común."
        },
        {
          globalNumber: 9,
          q: "A partir de dinámicas como la \"Torre de Papel\", ¿cómo influyen la comunicación asertiva y la gestión del error en tiempo real cuando un equipo debe reformular su estrategia ante el fracaso de la planificación inicial?",
          a: "La simulación demuestra que las estructuras rígidas fallan bajo presión externa. Cuando la planificación inicial fracasa (la torre se cae o es inestable), el equipo funciona como un sistema con lazo de retroalimentación rápida. La comunicación asertiva evita la búsqueda de culpables y enfoca los esfuerzos en la solución. La gestión del error en tiempo real permite capitalizar el fallo como un dato de entrada (input), reorganizar los roles de inmediato y adaptar el diseño de manera iterativa para lograr el objetivo."
        }
      ]
    },
    {
      number: 5,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD V: Modelos de Negocios y Viabilidad Económica",
      qa: [
        {
          globalNumber: 10,
          q: "¿Por qué la determinación matemática y gráfica del Punto de Equilibrio es una herramienta crítica antes de iniciar el desarrollo técnico de un nuevo producto de software?",
          a: "El desarrollo de software demanda altos costos fijos iniciales (horas de desarrollo, infraestructura). El análisis del Punto de Equilibrio permite modelar matemáticamente en qué momento los ingresos por ventas igualarán a la estructura de costos totales. Un Ingeniero en Sistemas utiliza esta herramienta gerencial para validar la viabilidad económica del proyecto antes de escribir la primera línea de código, asegurando que el esfuerzo técnico esté respaldado por un modelo financiero sostenible."
        },
        {
          globalNumber: 11,
          q: "Al diseñar un Modelo de Negocios, ¿por qué es insuficiente enfocarse solo en maximizar beneficios y reducir costos en el mercado actual?",
          a: "Los modelos de negocios tradicionales eran lineales y estáticos. Hoy en día, las organizaciones interactúan en ecosistemas complejos donde la ventaja competitiva radica en la propuesta de valor y en la experiencia del cliente. Enfocarse únicamente en recortar costos puede dañar la calidad del software o alienar al talento humano. Un enfoque sistémico moderno exige centrarse en cómo la empresa crea, entrega y captura valor de forma sostenible, adaptándose a las necesidades cambiantes del mercado y generando relaciones a largo plazo con los usuarios."
        }
      ]
    },
    {
      number: 6,
      bloque: "Bloque III: Gestión de la Innovación, Procesos y Sostenibilidad",
      title: "UNIDAD VI: Gestión y Modelos de Cambio Organizacional",
      qa: [
        {
          globalNumber: 12,
          q: "¿Por qué la implementación de un nuevo sistema de información suele fallar más por la resistencia humana al cambio que por fallas técnicas del software?",
          a: "Una organización es un sistema socio-técnico. La introducción de un nuevo software (como un ERP) altera los procesos establecidos, las dinámicas de poder, los hábitos diarios y los modelos mentales de los usuarios. Si las personas no entienden la necesidad del cambio, perciben la tecnología como una amenaza a su estabilidad laboral, generando una resistencia pasiva o activa que bloquea el uso del sistema, independientemente de lo perfecto que sea el código fuente."
        },
        {
          globalNumber: 13,
          q: "¿Qué herramientas y estrategias tiene un líder de proyecto para mitigar la incertidumbre de los usuarios ante un proceso de transformación digital?",
          a: "El líder de proyecto debe actuar como un agente de cambio utilizando herramientas metodológicas estructuradas. Las estrategias clave incluyen: la comunicación transparente y bidireccional desde el inicio para explicar el \"por qué\" del cambio, la creación de coaliciones de líderes informales dentro de las áreas de usuarios, y la capacitación continua y empoderamiento del personal. Al involucrar activamente a los usuarios en el diseño y en pruebas piloto, la incertidumbre se transforma en compromiso."
        }
      ]
    },
    {
      number: 7,
      bloque: "Bloque III: Gestión de la Innovación, Procesos y Sostenibilidad",
      title: "UNIDAD VII: Innovación Tecnológica y Responsabilidad Social",
      qa: [
        {
          globalNumber: 14,
          q: "Ante la irrupción de tecnologías emergentes (como IA o Blockchain), ¿cómo se puede estructurar una estrategia de innovación basada en I+D que resuelva problemas concretos del mercado en lugar de ser una simple moda tecnológica?",
          a: "La innovación tecnológica, según el Manual de Oslo, debe traducirse en mejoras significativas de resultados. Para evitar \"tecnologitis\" (usar una tecnología solo por ser novedosa), la estrategia de I+D debe partir de una necesidad real del cliente o del negocio. Se debe estructurar un proceso que alinee el radar tecnológico con la propuesta de valor de la empresa, validando hipótesis mediante prototipos rápidos y productos mínimos viables para asegurar que tecnologías como IA o Blockchain generen una verdadera ventaja competitiva sostenible."
        },
        {
          globalNumber: 15,
          q: "¿Cómo influye el diseño ético y sustentable de los sistemas de información en la relación de la empresa con sus grupos de interés (stakeholders)?",
          a: "El diseño ético de sistemas (que abarca la privacidad de datos por diseño, la accesibilidad, algoritmos transparentes y el uso eficiente de recursos de servidores) es una manifestación directa de la Responsabilidad Social Empresaria genuina. Al priorizar estos aspectos, la empresa fortalece la confianza con sus clientes, cumple proactivamente con las normativas legales del macroentorno y se posiciona positivamente ante la sociedad. Esto demuestra que los sistemas de información no son neutrales, sino herramientas con un fuerte impacto social y ambiental."
        }
      ]
    }
  ],
  sintesis: {
    formulacion: "El desarrollo de este RPA fue un ejercicio de síntesis clave para \"empaquetar\" el conocimiento gerencial. El proceso me exigió pasar de una lectura lineal a formular preguntas transversales que conectan la tecnología con el negocio y las personas, refinando los interrogantes mediante sucesivas relecturas para enfocar las preguntas directo a mis futuras incumbencias profesionales.",
    habits: [
      {
        title: "Busca comprender el panorama general (Seeks to understand the big picture)",
        desc: "Entendí que una organización es un sistema complejo donde el Ingeniero en Sistemas debe observar el panorama general para diseñar soluciones innovadoras, éticas y sustentables, comprendiendo cómo la estructura de un sistema genera y define su comportamiento."
      },
      {
        title: "Cambia de perspectivas para aumentar la comprensión (Changes perspectives to increase understanding)",
        desc: "A través de los desafíos prácticos del equipo, comprendí la importancia de la comunicación asertiva para evitar la búsqueda de culpables ante el error y centrarse en la solución, potenciando la complementariedad de roles."
      },
      {
        title: "Identifica la naturaleza circular de las relaciones complejas de causa y efecto",
        desc: "Las actividades prácticas como la 'Torre de Papel' actuaron como un cable a tierra para gestionar el error en tiempo real, capitalizando el fallo como un dato de entrada (input) para adaptar el diseño de manera iterativa."
      },
      {
        title: "Considera las consecuencias de las acciones tanto a corto como a largo plazo",
        desc: "Aprendí a leer patrones y tendencias en el tiempo para la toma de decisiones gerenciales eficientes, reconociendo que las decisiones de planificación y de TI tienen impactos directos sobre el desarrollo sustentable y la relación con los stakeholders."
      }
    ]
  },
  conclusion: "Este recorrido me permitió integrar conocimientos, experiencias y herramientas para comprender la gestión gerencial desde una mirada sistémica. Estoy preparado para enfrentar desafíos complejos y generar valor en las organizaciones del siglo XXI."
};

function RpaDenise({ member }) {
  const [activeTab, setActiveTab] = useState('preguntas'); // 'preguntas' | 'sintesis' | 'conclusion' | 'infografia'
  const [activeUnit, setActiveUnit] = useState(1);

  return (
    <div className="space-y-8">
      {/* Botones de Pestañas Principales */}
      <div className="flex flex-wrap gap-2.5 border-b border-primary-200 pb-3">
        <button
          onClick={() => setActiveTab('preguntas')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'preguntas'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Preguntas por Unidad
        </button>
        <button
          onClick={() => setActiveTab('sintesis')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'sintesis'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <Brain className="w-4 h-4" />
          Síntesis Reflexiva
        </button>
        <button
          onClick={() => setActiveTab('conclusion')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'conclusion'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <BookOpenCheck className="w-4 h-4" />
          Conclusión
        </button>
        <button
          onClick={() => setActiveTab('infografia')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'infografia'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <Image className="w-4 h-4" />
          Infografía
        </button>
      </div>

      {/* Renderizado de Pestañas */}
      <AnimatePresence mode="wait">
        {activeTab === 'preguntas' && (
          <motion.div
            key="preguntas-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Sub-tabs de Selección de Unidad */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {deniseRpaContent.units.map((unit) => (
                <button
                  key={unit.number}
                  onClick={() => setActiveUnit(unit.number)}
                  className={`w-11 h-11 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center ${
                    activeUnit === unit.number
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white scale-110 shadow-glow'
                      : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200'
                  }`}
                  aria-label={`Ver Unidad ${unit.number}`}
                >
                  U{unit.number}
                </button>
              ))}
            </div>

            {/* Contenido de la Unidad Activa */}
            {deniseRpaContent.units.map((unit) => {
              if (unit.number !== activeUnit) return null;
              return (
                <motion.div
                  key={unit.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Título de Unidad y Bloque */}
                  <div className="bg-gradient-to-r from-primary-50 to-transparent p-6 rounded-3xl border-l-4 border-emerald-500">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                      {unit.bloque}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900 leading-snug">
                      {unit.title}
                    </h2>
                  </div>

                  {/* Preguntas e hilos de respuesta */}
                  <div className="grid grid-cols-1 gap-6">
                    {unit.qa.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4 hover:border-primary-300 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-extrabold text-sm flex-shrink-0">
                            Q{item.globalNumber}
                          </span>
                          <h3 className="text-primary-850 font-bold leading-relaxed text-base sm:text-lg">
                            {item.q}
                          </h3>
                        </div>
                        <div className="pl-0 sm:pl-11 border-t border-primary-100 pt-4">
                          <div className="flex items-start gap-2.5 text-accent mb-2">
                            <MessageSquare className="w-4 h-4 mt-0.5" />
                            <span className="text-xs font-extrabold uppercase tracking-wider text-primary-800">
                              Respuesta y Reflexión Técnica
                            </span>
                          </div>
                          <p className="text-primary-700 text-sm sm:text-base leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'sintesis' && (
          <motion.div
            key="sintesis-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Formulación Metódica */}
            <div className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Target className="w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                  El proceso de formulación y construcción metódica
                </h2>
              </div>
              <p className="text-primary-700 text-sm sm:text-base leading-relaxed">
                {deniseRpaContent.sintesis.formulacion}
              </p>
            </div>

            {/* Hábitos del Pensador Sistémico */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-600 pl-2">
                <Brain className="w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-850 font-display">
                  Hábitos del Pensador Sistémico Experimentados
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deniseRpaContent.sintesis.habits.map((habit, idx) => {
                  const icons = [TrendingUp, Sparkles, Target, Award];
                  const Icon = icons[idx] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-primary-200 rounded-3xl p-6 shadow-card hover:border-primary-300 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5 text-accent">
                          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <h3 className="text-primary-850 font-bold text-sm tracking-tight leading-snug">
                            {habit.title}
                          </h3>
                        </div>
                        <p className="text-primary-650 text-xs sm:text-sm leading-relaxed">
                          {habit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'conclusion' && (
          <motion.div
            key="conclusion-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4"
          >
            <div className="flex items-center gap-2.5 text-emerald-600 mb-2">
              <Award className="w-6 h-6 animate-bounce" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                Conclusión y competencias adquiridas
              </h2>
            </div>
            <blockquote className="bg-primary-50/50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
              <p className="text-primary-750 text-sm sm:text-base leading-relaxed italic font-medium">
                "{deniseRpaContent.conclusion}"
              </p>
            </blockquote>
          </motion.div>
        )}

        {activeTab === 'infografia' && (
          <motion.div
            key="infografia-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-primary-200 rounded-3xl p-4 sm:p-6 shadow-card flex flex-col items-center"
          >
            <div className="flex items-center gap-2.5 text-accent mb-4 w-full justify-start pl-2">
              <Image className="w-5 h-5 animate-pulse" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                Infografía de la Ruta Personal de Aprendizaje
              </h2>
            </div>
            
            <div className="w-full rounded-2xl overflow-hidden border border-primary-100 shadow-sm max-w-4xl bg-primary-50/20">
              <img
                src="/rpa-infografia-denise.png"
                alt="Infografía RPA de Denise Pujalte"
                className="w-full h-auto object-contain max-h-[85vh] mx-auto rounded-xl shadow-inner"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Contenido completo del RPA de Zaira Rosin
const zairaRpaContent = {
  units: [
    {
      number: 1,
      bloque: "Bloque I: Fundamentos de la Administración y Estructura Organizacional",
      title: "UNIDAD I: Las Organizaciones y su Administración",
      qa: [
        {
          globalNumber: 1,
          q: "¿De qué manera la comprensión profunda de las etapas mecánicas y dinámicas del proceso administrativo influye en nuestra incumbencia profesional al momento de diseñar e implantar sistemas de información que realmente optimicen la eficiencia operativa de una empresa, evitando el error común de simplemente automatizar procesos burocráticos fallidos?",
          a: "Comprender las etapas mecánicas (Planificación y Organización) permite optimizar los procesos antes de codificar. Automatizar un flujo burocrático defectuoso solo acelera el caos operativo. El ingeniero debe intervenir en las etapas dinámicas (Dirección y Control) para asegurar que el software capture métricas reales de eficiencia alineadas con la estrategia de la organización."
        },
        {
          globalNumber: 2,
          q: "Frente a un diagnóstico de baja productividad o rentabilidad en una organización, ¿cómo debe articular el Ingeniero en Sistemas las habilidades conceptuales y los roles decisorios para determinar si el problema raíz se encuentra en la infraestructura tecnológica o en fallas del diseño organizativo?",
          a: "Las habilidades conceptuales permiten abstraer la organización como un sistema complejo para diagnosticar si las fallas provienen de la infraestructura técnica o de la estructura organizativa. Los roles decisorios sirvan para determinar si la baja rentabilidad se debe a obsolescencia tecnológica o a canales de comunicación deficientes y mala delimitación de funciones."
        }
      ]
    },
    {
      number: 2,
      bloque: "Bloque I: Fundamentos de la Administración y Estructura Organizacional",
      title: "UNIDAD II: Estrategia Empresarial y Planificación",
      qa: [
        {
          globalNumber: 3,
          q: "¿Cómo se interrelacionan los sistemas de información estratégicos con la formulación de la visión y los objetivos SMART de una corporación para asegurar que la infraestructura de datos sirva como una ventaja competitiva sostenible ante un macroentorno altamente incierto?",
          a: "Los sistemas de información estratégicos operacionalizan la visión traduciéndola en KPIs y metas SMART controlables. Ante un macroentorno incierto, la infraestructura de datos captura las variables del entorno en tiempo real, transformando la información analítica en una ventaja competitiva sostenible."
        },
        {
          globalNumber: 4,
          q: "¿Cuál es el valor metodológico de utilizar de forma secuencial la matriz FODA y la matriz CAME en el análisis estratégico, y cómo define este diagnóstico la elección entre estrategias ofensivas, defensivas, de reorientación o de supervivencia?",
          a: "El FODA aporta el diagnóstico estático interno y externo; la matriz CAME lo vuelve operativo definiendo acciones concretas (Corregir, Afrontar, Mantener, Explotar). Esta secuencia determina la elección de la estrategia (ofensiva, defensiva, reorientación o supervivencia) y prioriza los requerimientos técnicos del plan de sistemas de la firma."
        }
      ]
    },
    {
      number: 3,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD III: La Conducta Humana y Gestión del Talento 4.0",
      qa: [
        {
          globalNumber: 5,
          q: "Considerando la transición hacia la era del conocimiento y las exigencias de la Industria 4.0, ¿cuál es el rol estratégico del Ingeniero en Sistemas al diseñar herramientas de People Analytics o plataformas LMS para potenciar la autogestión y el desarrollo del Talento 4.0 sin caer en el presencialismo tradicional?",
          a: "El rol del ingeniero es diseñar herramientas de People Analytics o LMS enfocadas en medir el desempeño por objetivos, competencias y valor agregado. Esto elimina el control tradicional basado en el presencialismo físico y nutre directamente la perspectiva de aprendizaje y crecimiento del Balanced Scorecard."
        },
        {
          globalNumber: 6,
          q: "Frente a la necesidad de resolver un problema complejo, ¿cómo interactúan de forma interdependiente las \"5 C del trabajo en equipo\" y la distribución de los roles de Belbin para garantizar la sinergia colectiva y evitar el aislamiento o la falta de confianza?",
          a: "Ante problemas complejos, las \"5 C\" (Comunicación, Coordinación, Complementariedad, Confianza y Compromiso) estructuran la interacción del equipo. Integrar los roles de Belbin permite asignar tareas según las fortalezas conductuales de los ingenieros, garantizando la complementariedad humana y técnica para generar sinergia y mitigar conflictos."
        }
      ]
    },
    {
      number: 4,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD IV: Trabajo en Equipo y Sinergia Organizacional",
      qa: [
        {
          globalNumber: 7,
          q: "¿En qué medida el modelado visual mediante la metodología CANVAS permite a un Ingeniero en Sistemas alinear la arquitectura tecnológica y los recursos clave con la propuesta de valor y las necesidades explícitas de los segmentos de clientes?",
          a: "La metodología CANVAS funciona como un modelo visual que alinea la técnica con el negocio. Vincula los bloques de soporte (actividades, recursos y socios clave) con la \"Propuesta de Valor\", definiendo qué componentes arquitectónicos de software o servidores son indispensables para resolver las necesidades del segmento de clientes."
        },
        {
          globalNumber: 8,
          q: "Al diseñar un modelo de negocio digital (como SaaS o Freemium), ¿cómo deben integrarse estructuralmente los flujos de ingresos y la estructura de costes para asegurar la escalabilidad operativa y alcanzar de forma previsible el punto de equilibrio financiero?",
          a: "En modelos SaaS o Freemium, la estructura de costes (servidores, desarrollo) y los flujos de ingresos (suscripciones) deben integrarse en el sistema de información. Esto permite monitorear automáticamente la retención de usuarios y calcular de forma predictiva el punto de equilibrio financiero para garantizar la escalabilidad operativa."
        }
      ]
    },
    {
      number: 5,
      bloque: "Bloque II: Factor Humano, Modelado de Negocios e Infraestructura",
      title: "UNIDAD V: Gestión del Cambio y Transformación Digital",
      qa: [
        {
          globalNumber: 9,
          q: "Cuando una empresa tradicional decide dar el salto hacia una organización inteligente, ¿cómo debe estructurarse la gestión del cambio tecnológico para mitigar la resistencia al cambio y asegurar que herramientas de transformación como la reingeniería de procesos no fracasen por factores humanos?",
          a: "La gestión del cambio planifica la transición humana ante modificaciones estructurales o técnicas. Mitiga la resistencia al cambio (temor, inercia cultural) mediante planes de capacitación y comunicación transparente, asegurando que herramientas disruptivas como la reingeniería se implementen de forma participativa."
        },
        {
          globalNumber: 10,
          q: "¿Por qué la transformación digital desde la perspectiva de la ingeniería de sistemas no debe limitarse a la digitalización de documentación o tareas, sino a un rediseño completo de la estrategia empresarial y la cultura organizativa?",
          a: "Digitalizar es solo convertir tareas analógicas a soportes digitales sin alterar su fondo. La Transformación Digital es un cambio proactivo que rediseña la estrategia y la cultura hacia una Organización Inteligente. Sin este cambio cultural, la tecnología fracasa debido a la rigidez del modelo organizativo existente."
        }
      ]
    },
    {
      number: 6,
      bloque: "Bloque III: Gestión de la Innovación, Procesos y Sostenibilidad",
      title: "UNIDAD VI: Ecosistemas de Innovación y Startups",
      qa: [
        {
          globalNumber: 11,
          q: "Para que un proyecto o idea innovadora se consolide con éxito y sustentabilidad en el mercado, ¿cómo deben equilibrarse y validarse simultáneamente sus tres factores críticos: deseabilidad, viabilidad y factibilidad?",
          a: "Una innovación requiere validar simultáneamente tres factores críticos: Deseabilidad (el cliente necesita la solución), Factibilidad (es técnicamente realizable y escalable a nivel de ingeniería) y Viabilidad (el modelo de negocios es financieramente sostenible y rentable). El equilibrio de las tres garantiza el éxito y sustentabilidad en el mercado."
        },
        {
          globalNumber: 12,
          q: "Como ingenieros en formación dentro del enfoque STEAM, ¿de qué manera la integración del pensamiento crítico, la ciencia y el diseño nos capacita para liderar procesos de innovación disruptiva (intraemprendimiento) que redefinan los modelos de negocios tradicionales?",
          a: "El enfoque STEAM aporta pensamiento crítico, rigor científico y diseño centrado en el usuario. Esto capacita al ingeniero para liderar procesos de intraemprendimiento y Corporate Venturing, traduciendo la agilidad y tecnologías disruptivas de las Startups en unidades de negocio escalables dentro de empresas tradicionales."
        }
      ]
    },
    {
      number: 7,
      bloque: "Bloque III: Gestión de la Innovación, Procesos y Sostenibilidad",
      title: "UNIDAD VII: Responsabilidad Social Empresaria (RSE) y Universitaria (RSU)",
      qa: [
        {
          globalNumber: 13,
          q: "¿Cómo debe un Ingeniero en Sistemas de Información diseñar e implantar arquitecturas tecnológicas transparentes y sistemas de auditoría basados en criterios ESG e ISO 26000 para garantizar el comercio justo, la rendición de cuentas y la protección absoluta de la privacidad de los clientes?",
          a: "El ingeniero traduce los criterios ESG y éticos de la norma ISO 26000 en requerimientos de software. Se implementa mediante el diseño de sistemas con trazabilidad ética en la cadena de suministro, registros inmutables para la rendición de cuentas y protocolos avanzados que garanticen la privacidad de los datos de los clientes."
        },
        {
          globalNumber: 14,
          q: "¿De qué manera el desarrollo de proyectos de extensión e investigación tecnológica por parte de ingenieros en formación debe integrar de forma ética y eficaz los impactos sociales, económicos y ambientales para dar respuesta a las demandas reales de la comunidad y contribuir al desarrollo sustentable de la región, en alineación con los Objetivos de Desarrollo Sostenible (ODS) de la ONU?",
          a: "Los proyectos bajo los marcos de RSU y Compromiso Universitario Social (CUS) exigen evaluar el desarrollo tecnológico bajo el impacto social, económico y ambiental. Las soluciones deben nacer del \"saber hacer\" técnico para resolver demandas reales de la región, alineándose con los Objetivos de Desarrollo Sostenible (ODS) de la ONU."
        }
      ]
    }
  ],
  sintesis: {
    formulacion: "La construcción de esta Ruta de Aprendizaje (RPA) constituyó un proceso iterativo de abstracción y síntesis que permitió \"empaquetar\" el conocimiento de la cátedra bajo la perspectiva del perfil profesional en ingeniería. La formulación de preguntas abiertas demandó revisiones minuciosas de la bibliografía para evitar respuestas descriptivas o literales, forzando la integración transversal de las unidades.",
    habits: [
      {
        title: "Busca comprender el panorama general (Sees the big picture)",
        desc: "Este hábito se consolidó en la Unidad 1 al analizar la problemática de las 'organizaciones que fallan' (el hospital lento o el kiosco desorganizado), donde el análisis obligó a evaluar el diseño organizacional de forma global."
      },
      {
        title: "Reconoce que la estructura de un sistema genera su comportamiento",
        desc: "Desarrollado de manera práctica en la Unidad 3 mediante el desafío de 'La Torre de Papel', donde la estabilidad de la torre dependió directamente del acuerdo de normas claras, asignación de responsabilidades y roles de Belbin."
      },
      {
        title: "Identifica la naturaleza circular de las relaciones complejas de causa y efecto",
        desc: "Desarrollado al implementar el Diagrama de Ishikawa, que permitió superar el pensamiento lineal y comprender cómo múltiples causas raíz de diferentes categorías se interconectan y se alimentan de forma cíclica."
      },
      {
        title: "Cambia de perspectiva para incrementar la comprensión (Changes perspectives)",
        desc: "Puesto en práctica al modelar CANVAS de negocios (Netflix/Skype), donde fue indispensable salir de la perspectiva interna de la empresa y adoptar de manera empática la perspectiva del cliente externo."
      }
    ]
  },
  conclusion: "Aprendí que el diseño de procesos y el diseño de experiencias comparten una misma filosofía: entender profundamente al usuario antes de proponer soluciones. Los desafíos me ayudaron a conectar esas dos dimensiones. Mi mayor logro fue facilitar el taller de relevamiento de procesos del desafío D4."
};

function RpaZaira({ member }) {
  const [activeTab, setActiveTab] = useState('preguntas'); // 'preguntas' | 'sintesis' | 'conclusion' | 'infografia'
  const [activeUnit, setActiveUnit] = useState(1);

  return (
    <div className="space-y-8">
      {/* Botones de Pestañas Principales */}
      <div className="flex flex-wrap gap-2.5 border-b border-primary-200 pb-3">
        <button
          onClick={() => setActiveTab('preguntas')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'preguntas'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Preguntas por Unidad
        </button>
        <button
          onClick={() => setActiveTab('sintesis')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'sintesis'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <Brain className="w-4 h-4" />
          Síntesis Reflexiva
        </button>
        <button
          onClick={() => setActiveTab('conclusion')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'conclusion'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <BookOpenCheck className="w-4 h-4" />
          Conclusión
        </button>
        <button
          onClick={() => setActiveTab('infografia')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'infografia'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <Image className="w-4 h-4" />
          Infografía
        </button>
      </div>

      {/* Renderizado de Pestañas */}
      <AnimatePresence mode="wait">
        {activeTab === 'preguntas' && (
          <motion.div
            key="preguntas-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Sub-tabs de Selección de Unidad */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {zairaRpaContent.units.map((unit) => (
                <button
                  key={unit.number}
                  onClick={() => setActiveUnit(unit.number)}
                  className={`w-11 h-11 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center ${
                    activeUnit === unit.number
                      ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white scale-110 shadow-glow'
                      : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200'
                  }`}
                  aria-label={`Ver Unidad ${unit.number}`}
                >
                  U{unit.number}
                </button>
              ))}
            </div>

            {/* Contenido de la Unidad Activa */}
            {zairaRpaContent.units.map((unit) => {
              if (unit.number !== activeUnit) return null;
              return (
                <motion.div
                  key={unit.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Título de Unidad y Bloque */}
                  <div className="bg-gradient-to-r from-primary-50 to-transparent p-6 rounded-3xl border-l-4 border-pink-500">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                      {unit.bloque}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900 leading-snug">
                      {unit.title}
                    </h2>
                  </div>

                  {/* Preguntas e hilos de respuesta */}
                  <div className="grid grid-cols-1 gap-6">
                    {unit.qa.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4 hover:border-primary-300 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-pink-50 text-pink-600 font-extrabold text-sm flex-shrink-0">
                            Q{item.globalNumber}
                          </span>
                          <h3 className="text-primary-850 font-bold leading-relaxed text-base sm:text-lg">
                            {item.q}
                          </h3>
                        </div>
                        <div className="pl-0 sm:pl-11 border-t border-primary-100 pt-4">
                          <div className="flex items-start gap-2.5 text-accent mb-2">
                            <MessageSquare className="w-4 h-4 mt-0.5" />
                            <span className="text-xs font-extrabold uppercase tracking-wider text-primary-800">
                              Respuesta y Reflexión Técnica
                            </span>
                          </div>
                          <p className="text-primary-700 text-sm sm:text-base leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'sintesis' && (
          <motion.div
            key="sintesis-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Formulación Metódica */}
            <div className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Target className="w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                  El proceso de formulación y construcción metódica
                </h2>
              </div>
              <p className="text-primary-700 text-sm sm:text-base leading-relaxed">
                {zairaRpaContent.sintesis.formulacion}
              </p>
            </div>

            {/* Hábitos del Pensador Sistémico */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-600 pl-2">
                <Brain className="w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-850 font-display">
                  Hábitos del Pensador Sistémico Experimentados
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {zairaRpaContent.sintesis.habits.map((habit, idx) => {
                  const icons = [TrendingUp, Sparkles, Target, Award];
                  const Icon = icons[idx] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-primary-200 rounded-3xl p-6 shadow-card hover:border-primary-300 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5 text-accent">
                          <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <h3 className="text-primary-850 font-bold text-sm tracking-tight leading-snug">
                            {habit.title}
                          </h3>
                        </div>
                        <p className="text-primary-650 text-xs sm:text-sm leading-relaxed">
                          {habit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'conclusion' && (
          <motion.div
            key="conclusion-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4"
          >
            <div className="flex items-center gap-2.5 text-pink-600 mb-2">
              <Award className="w-6 h-6 animate-bounce" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                Conclusión y competencias adquiridas
              </h2>
            </div>
            <blockquote className="bg-primary-50/50 border-l-4 border-pink-500 p-6 rounded-r-2xl">
              <p className="text-primary-750 text-sm sm:text-base leading-relaxed italic font-medium">
                "{zairaRpaContent.conclusion}"
              </p>
            </blockquote>
          </motion.div>
        )}

        {activeTab === 'infografia' && (
          <motion.div
            key="infografia-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-primary-200 rounded-3xl p-4 sm:p-6 shadow-card flex flex-col items-center"
          >
            <div className="flex items-center gap-2.5 text-accent mb-4 w-full justify-start pl-2">
              <Image className="w-5 h-5 animate-pulse" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                Infografía de la Ruta Personal de Aprendizaje
              </h2>
            </div>
            
            <div className="w-full rounded-2xl overflow-hidden border border-primary-100 shadow-sm max-w-4xl bg-primary-50/20">
              <img
                src="/rpa-infografia-zaira.png"
                alt="Infografía RPA de Zaira Rosin"
                className="w-full h-auto object-contain max-h-[85vh] mx-auto rounded-xl shadow-inner"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RpaIan({ member }) {
  const [activeTab, setActiveTab] = useState('preguntas'); // 'preguntas' | 'sintesis' | 'conclusion'
  const [activeUnit, setActiveUnit] = useState(1);

  return (
    <div className="space-y-8">
      {/* Botones de Pestañas Principales */}
      <div className="flex flex-wrap gap-2.5 border-b border-primary-200 pb-3">
        <button
          onClick={() => setActiveTab('preguntas')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'preguntas'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Preguntas por Unidad
        </button>
        <button
          onClick={() => setActiveTab('sintesis')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'sintesis'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <Brain className="w-4 h-4" />
          Síntesis Reflexiva
        </button>
        <button
          onClick={() => setActiveTab('conclusion')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'conclusion'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <BookOpenCheck className="w-4 h-4" />
          Conclusión
        </button>
        <button
          onClick={() => setActiveTab('infografia')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeTab === 'infografia'
              ? 'bg-gradient-to-r from-primary-800 to-primary-950 text-white shadow-md'
              : 'bg-white hover:bg-primary-50 text-primary-650 border border-primary-200'
          }`}
        >
          <Image className="w-4 h-4" />
          Infografía
        </button>
      </div>

      {/* Renderizado de Pestañas */}
      <AnimatePresence mode="wait">
        {activeTab === 'preguntas' && (
          <motion.div
            key="preguntas-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Sub-tabs de Selección de Unidad */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {ianRpaContent.units.map((unit) => (
                <button
                  key={unit.number}
                  onClick={() => setActiveUnit(unit.number)}
                  className={`w-11 h-11 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center ${
                    activeUnit === unit.number
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white scale-110 shadow-glow'
                      : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200'
                  }`}
                  aria-label={`Ver Unidad ${unit.number}`}
                >
                  U{unit.number}
                </button>
              ))}
            </div>

            {/* Contenido de la Unidad Activa */}
            {ianRpaContent.units.map((unit) => {
              if (unit.number !== activeUnit) return null;
              return (
                <motion.div
                  key={unit.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Título de Unidad y Bloque */}
                  <div className="bg-gradient-to-r from-primary-50 to-transparent p-6 rounded-3xl border-l-4 border-cyan-500">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                      {unit.bloque}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900 leading-snug">
                      {unit.title}
                    </h2>
                  </div>

                  {/* Preguntas e hilos de respuesta */}
                  <div className="grid grid-cols-1 gap-6">
                    {unit.qa.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4 hover:border-primary-300 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 font-extrabold text-sm flex-shrink-0">
                            Q{idx + 1 + (unit.number - 1) * 2}
                          </span>
                          <h3 className="text-primary-850 font-bold leading-relaxed text-base sm:text-lg">
                            {item.q}
                          </h3>
                        </div>
                        <div className="pl-0 sm:pl-11 border-t border-primary-100 pt-4">
                          <div className="flex items-start gap-2.5 text-accent mb-2">
                            <MessageSquare className="w-4 h-4 mt-0.5" />
                            <span className="text-xs font-extrabold uppercase tracking-wider text-primary-800">
                              Respuesta y Reflexión Técnica
                            </span>
                          </div>
                          <p className="text-primary-700 text-sm sm:text-base leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'sintesis' && (
          <motion.div
            key="sintesis-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Formulación Metódica */}
            <div className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Target className="w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                  El proceso de formulación y construcción metódica
                </h2>
              </div>
              <p className="text-primary-700 text-sm sm:text-base leading-relaxed">
                {ianRpaContent.sintesis.formulacion}
              </p>
            </div>

            {/* Hábitos del Pensador Sistémico */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-600 pl-2">
                <Brain className="w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-850 font-display">
                  Hábitos del Pensador Sistémico Experimentados
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ianRpaContent.sintesis.habits.map((habit, idx) => {
                  const icons = [TrendingUp, Sparkles, Target, Award];
                  const Icon = icons[idx] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-primary-200 rounded-3xl p-6 shadow-card hover:border-primary-300 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5 text-accent">
                          <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <h3 className="text-primary-850 font-bold text-sm tracking-tight leading-snug">
                            {habit.title}
                          </h3>
                        </div>
                        <p className="text-primary-650 text-xs sm:text-sm leading-relaxed">
                          {habit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'conclusion' && (
          <motion.div
            key="conclusion-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-4"
          >
            <div className="flex items-center gap-2.5 text-cyan-600 mb-2">
              <Award className="w-6 h-6 animate-bounce" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                Conclusión y competencias adquiridas
              </h2>
            </div>
            <blockquote className="bg-primary-50/50 border-l-4 border-cyan-500 p-6 rounded-r-2xl">
              <p className="text-primary-750 text-sm sm:text-base leading-relaxed italic font-medium">
                "{ianRpaContent.conclusion}"
              </p>
            </blockquote>
          </motion.div>
        )}

        {activeTab === 'infografia' && (
          <motion.div
            key="infografia-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-primary-200 rounded-3xl p-4 sm:p-6 shadow-card flex flex-col items-center"
          >
            <div className="flex items-center gap-2.5 text-accent mb-4 w-full justify-start pl-2">
              <Image className="w-5 h-5 animate-pulse" />
              <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                Infografía de la Ruta Personal de Aprendizaje
              </h2>
            </div>
            
            <div className="w-full rounded-2xl overflow-hidden border border-primary-100 shadow-sm max-w-4xl bg-primary-50/20">
              <img
                src="/rpa-infografia-ian.png"
                alt="Infografía RPA de Ian Nuñez"
                className="w-full h-auto object-contain max-h-[85vh] mx-auto rounded-xl shadow-inner"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Rpa() {
  const { id } = useParams();
  const member = rpaData.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-bold text-primary-800">Integrante no encontrado</h2>
          <p className="text-primary-500 mt-2">La ruta personal de aprendizaje solicitada no existe.</p>
          <Link to="/rpa" className="btn-primary mt-6">
            Volver al Listado
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100dvh-5rem)] px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Botón Volver */}
        <Link
          to="/rpa"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-accent font-semibold mb-2 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a las RPAs
        </Link>

        {/* Encabezado del Integrante */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center sm:text-left"
        >
          <span className="badge badge-purple mb-3">Ruta Personal de Aprendizaje</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight font-display">
            {member.memberName}
          </h1>
        </motion.div>

        {/* Carga del componente específico de Ian Nuñez, Zaira Rosin, Denise Pujalte o la grilla genérica para otros */}
        {member.id === 1 ? (
          <RpaIan member={member} />
        ) : member.id === 2 ? (
          <RpaZaira member={member} />
        ) : member.id === 3 ? (
          <RpaDenise member={member} />
        ) : (
          <div className="grid grid-cols-1 gap-8">
            
            {/* 1. Objetivo Personal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card"
            >
              <div className="flex items-center gap-2.5 mb-4 text-accent">
                <Target className="w-6 h-6" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                  Objetivo Personal
                </h2>
              </div>
              <p className="text-primary-700 leading-relaxed text-base">
                {member.personalGoal}
              </p>
            </motion.div>

            {/* 2. Habilidades */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Habilidades Iniciales */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-primary-500">
                  <Award className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary-850">
                    Habilidades Iniciales
                  </h3>
                </div>
                <ul className="space-y-3">
                  {member.initialSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-primary-650 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Habilidades Desarrolladas */}
              <div className="space-y-4 md:border-l md:border-primary-200 md:pl-8">
                <div className="flex items-center gap-2.5 text-accent">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary-850">
                    Habilidades Desarrolladas
                  </h3>
                </div>
                <ul className="space-y-3">
                  {member.developedSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-primary-700 text-sm leading-relaxed font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 animate-pulse" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 3. Progreso de Competencias */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card"
            >
              <div className="flex items-center gap-2.5 mb-6 text-primary-600">
                <TrendingUp className="w-6 h-6" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                  Progreso de Competencias
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {member.progress.map((p) => (
                  <div key={p.area} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-700 font-semibold">{p.area}</span>
                      <span className="text-accent font-extrabold">{p.value}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${p.value}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="progress-fill" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. Reflexión General */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card"
            >
              <div className="flex items-center gap-2.5 mb-4 text-accent">
                <MessageSquare className="w-6 h-6" />
                <h2 className="text-lg font-bold uppercase tracking-wider text-primary-800">
                  Reflexión General
                </h2>
              </div>
              <blockquote className="bg-primary-50/50 border-l-4 border-accent p-6 rounded-r-2xl">
                <p className="text-primary-750 text-base leading-relaxed italic font-medium">
                  "{member.reflection}"
                </p>
              </blockquote>
            </motion.div>

          </div>
        )}
      </div>
    </section>
  );
}