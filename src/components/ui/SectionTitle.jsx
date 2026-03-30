import { motion } from 'framer-motion';

/**
 * SectionTitle — Título de sección con línea decorativa y subtítulo opcional
 * Props:
 *   - title: string (requerido)
 *   - subtitle: string (opcional)
 *   - badge: string (opcional — texto del badge sobre el título)
 *   - align: 'left' | 'center' (default: 'left')
 *   - className: string (opcional — clases adicionales)
 */
export default function SectionTitle({ title, subtitle, badge, align = 'left', className = '' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${isCenter ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span className="badge badge-blue mb-4 inline-flex">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {/* Decorative line */}
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
        <div className="h-0.5 w-12 bg-gradient-to-r from-accent to-success rounded-full" />
        <div className="h-0.5 w-4 bg-primary-700 rounded-full" />
      </div>
      {subtitle && (
        <p className="text-primary-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
