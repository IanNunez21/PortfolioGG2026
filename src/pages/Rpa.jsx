import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, MessageSquare } from 'lucide-react';
import { rpaData } from '../data/rpaData';

const getRomanNumeral = (num) => {
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  return roman[num - 1] || num;
};

const defaultUnits = [
  {
    number: 1,
    title: "Unidad I: La Organización como Sistema y el Rol Gerencial",
    reflection: "Texto de ejemplo para la reflexión personal de la Unidad I. Aquí se detalla el análisis de la organización desde una perspectiva sistémica y el rol del gerente en la toma de decisiones estratégicas.",
    acquiredConcepts: [
      "Teoría General de Sistemas (TGS) aplicada a empresas",
      "Niveles de decisión y jerarquías organizacionales",
      "Habilidades gerenciales fundamentales (conceptuales, humanas y técnicas)"
    ]
  },
  {
    number: 2,
    title: "Unidad II: Planeamiento Estratégico y Toma de Decisiones",
    reflection: "Texto de ejemplo para la reflexión personal de la Unidad II. Evaluación de las metodologías empleadas para definir la estrategia de negocio y la planificación formal de metas a largo plazo.",
    acquiredConcepts: [
      "Definición y alineación de Misión, Visión y Valores",
      "Matrices de análisis situacional (PESTEL, FODA)",
      "Estrategias genéricas de Porter y matriz de crecimiento de Ansoff"
    ]
  },
  {
    number: 3,
    title: "Unidad III: Estructura, Procesos y Diseño Organizacional",
    reflection: "Texto de ejemplo para la reflexión personal de la Unidad III. Comprensión del modelado de procesos de negocio como pilar básico para estructurar equipos eficientes.",
    acquiredConcepts: [
      "Tipos de organigramas y modelos estructurales",
      "Gestión de Procesos de Negocio (BPM) y simbología BPMN",
      "Cadena de valor interna y mapeo de interacciones clave"
    ]
  },
  {
    number: 4,
    title: "Unidad IV: Sistemas de Información y Transformación Digital",
    reflection: "Texto de ejemplo para la reflexión personal de la Unidad IV. Análisis del rol clave de las tecnologías de información para agilizar la operación y sustentar la toma de decisiones basadas en datos.",
    acquiredConcepts: [
      "Sistemas empresariales de gestión (ERP, CRM, SCM)",
      "Sistemas de soporte a la decisión (DSS) y Business Intelligence (BI)",
      "Modelos y niveles de madurez digital en empresas modernas"
    ]
  },
  {
    number: 5,
    title: "Unidad V: Dirección, Liderazgo y Comportamiento Humano",
    reflection: "Texto de ejemplo para la reflexión personal de la Unidad V. Estudio de los distintos estilos de liderazgo y cómo motivar al capital humano durante los procesos de transformación.",
    acquiredConcepts: [
      "Modelos de liderazgo (liderazgo transformacional y situacional)",
      "Teorías motivacionales aplicadas al ámbito laboral",
      "Gestión del cambio y técnicas para reducir la resistencia"
    ]
  },
  {
    number: 6,
    title: "Unidad VI: Control de Gestión y Cuadro de Mando Integral",
    reflection: "Texto de ejemplo para la reflexión personal de la Unidad VI. Enfoque metodológico para el control del desempeño corporativo mediante indicadores estratégicos.",
    acquiredConcepts: [
      "Estructura del Balanced Scorecard (perspectivas financiera, cliente, interna y aprendizaje)",
      "Formulación e implementación de KPIs específicos",
      "Cascada de objetivos y tableros de control ejecutivos"
    ]
  },
  {
    number: 7,
    title: "Unidad VII: Tecnologías Emergentes y Automatización (RPA/IA)",
    reflection: "Texto de ejemplo para la reflexión personal de la Unidad VII. Análisis de las ventajas, riesgos y cálculo de retorno de automatizar procesos de negocio repetitivos.",
    acquiredConcepts: [
      "Conceptos fundamentales de Automatización Robótica de Procesos (RPA)",
      "Inteligencia Artificial (IA) y automatización cognitiva",
      "Criterios de viabilidad para iniciativas de automatización de procesos"
    ]
  }
];

export default function Rpa() {
  const { id } = useParams();
  const member = rpaData.find((m) => m.id === parseInt(id));
  const [activeUnitNum, setActiveUnitNum] = useState(1);

  if (!member) {
    return (
      <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-bold text-primary-800">Integrante no encontrado</h2>
          <p className="text-primary-500 mt-2">La ruta personal de aprendizaje solicitada no existe.</p>
          <Link to="/equipo" className="btn-primary mt-6">
            Volver al Equipo
          </Link>
        </div>
      </section>
    );
  }

  // Ian Nuñez tiene unidades cargadas, otros usarán la plantilla por defecto temporalmente
  const units = member.units || defaultUnits;

  return (
    <section className="min-h-[calc(100dvh-5rem)] px-4 sm:px-6 lg:px-8 py-16 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Botón Volver */}
        <Link
          to="/equipo"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-accent font-semibold mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Equipo
        </Link>

        {/* Encabezado del Integrante */}
        <div className="mb-12 text-center sm:text-left">
          <span className="badge badge-purple mb-2">Ruta Personal de Aprendizaje</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-900 leading-tight">
            {member.memberName}
          </h1>
        </div>

        {/* Globos Interactivos por Unidad */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 mb-8">
          {units.map((unit) => {
            const isActive = activeUnitNum === unit.number;
            return (
              <button
                key={unit.number}
                onClick={() => setActiveUnitNum(unit.number)}
                className={`w-12 h-12 rounded-2xl text-xs font-extrabold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center ${
                  isActive
                    ? `bg-gradient-to-br ${member.color} text-white shadow-glow scale-110`
                    : 'bg-white text-primary-600 hover:bg-primary-100 border border-primary-200 hover:border-primary-300'
                }`}
                aria-label={`Ver Unidad ${unit.number}`}
              >
                {getRomanNumeral(unit.number)}
              </button>
            );
          })}
        </div>

        {/* Contenido por Unidad (Únicamente Conceptos y Reflexión) */}
        <div className="bg-white/80 backdrop-blur-md border border-primary-200 rounded-3xl p-6 sm:p-8 shadow-card relative overflow-hidden min-h-[280px]">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-[0.03] rounded-full blur-2xl pointer-events-none`} />
          <AnimatePresence mode="wait">
            {units.map((unit) => {
              if (unit.number !== activeUnitNum) return null;
              return (
                <motion.div
                  key={unit.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                      Unidad {getRomanNumeral(unit.number)}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900 leading-snug">
                      {unit.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                    {/* Conceptos nuevos adquiridos */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <h3 className="text-xs font-extrabold text-primary-800 uppercase tracking-wider">
                          Conceptos Adquiridos
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {unit.acquiredConcepts.map((concept, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-primary-700 text-sm leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{concept}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Reflexión personal */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-accent" />
                        <h3 className="text-xs font-extrabold text-primary-800 uppercase tracking-wider">
                          Reflexión Personal
                        </h3>
                      </div>
                      <blockquote className="bg-primary-50/50 border-l-4 border-accent p-4 rounded-r-2xl">
                        <p className="text-primary-700 text-sm leading-relaxed italic">
                          "{unit.reflection}"
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}