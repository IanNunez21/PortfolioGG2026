import { motion } from 'framer-motion';
import { BookOpen, Users, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const actividades = [
  {
    id: 'investigacion-gerencia',
    title: 'Actividad de Investigación Teórica - La Gerencia',
    description: 'Análisis profundo sobre los conceptos fundamentales de la gerencia, sus roles y evolución en el tiempo.',
    date: '20 de abril de 2026',
    icon: BookOpen,
    color: 'text-accent',
    bgColor: 'bg-blush-100',
    borderColor: 'border-accent/20',
    link: '/actividades/investigacion-gerencia'
  },
  {
    id: 'tests-liderazgo',
    title: 'Perfiles de Liderazgo: ¿Quiénes somos?',
    description: 'Resultados y análisis de los tests de liderazgo realizados por los miembros del equipo.',
    date: '20 de abril de 2026',
    icon: Users,
    color: 'text-warm',
    bgColor: 'bg-warm/10',
    borderColor: 'border-warm/20',
    link: '/actividades/tests-liderazgo'
  }
];

export default function Actividades() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] py-12 px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {actividades.map((actividad, index) => {
            const Icon = actividad.icon;
            return (
              <motion.div
                key={actividad.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  to={actividad.link}
                  className={`block h-full p-8 rounded-3xl bg-white/90 backdrop-blur-sm border ${actividad.borderColor} shadow-card hover:shadow-glow transition-all duration-300 group flex flex-col`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${actividad.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${actividad.color}`} />
                    </div>
                    <div className="flex items-center text-primary-500 text-sm bg-surface-raised px-3 py-1.5 rounded-full border border-primary-200 shadow-sm">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary-400" />
                      <span className="font-medium">{actividad.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-800 mb-3 group-hover:text-accent transition-colors">
                    {actividad.title}
                  </h3>
                  
                  <p className="text-primary-600 mb-8 flex-grow">
                    {actividad.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-accent">
                    <span>Ver actividad</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
