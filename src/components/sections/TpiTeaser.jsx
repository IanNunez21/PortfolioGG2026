import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { tpi } from '../../data/tpiData';

export default function TpiTeaser() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-primary-600 bg-gradient-to-br from-primary-800 to-surface"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-success/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Ícono */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-success flex items-center justify-center flex-shrink-0 shadow-glow-lg">
          <Lightbulb className="w-8 h-8 text-white" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <span className="badge badge-blue mb-3 inline-flex">Trabajo Práctico Integrador</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
            {tpi.title}
          </h3>
          <p className="text-primary-300 text-base leading-relaxed max-w-2xl mb-4">
            {tpi.objective}
          </p>
          <div className="flex flex-wrap gap-2">
            {tpi.tools.slice(0, 4).map((tool) => (
              <span key={tool.name} className="badge badge-gray text-xs">
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            to="/tpi"
            className="btn-primary whitespace-nowrap"
            id="tpi-teaser-cta"
          >
            Ver TPI completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
