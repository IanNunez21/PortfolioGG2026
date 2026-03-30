import { motion } from 'framer-motion';
import Breadcrumbs from '../ui/Breadcrumbs';

/**
 * PageHeader — Header de páginas internas
 * Props:
 *   - title: string
 *   - subtitle: string (opcional)
 *   - badge: string (opcional)
 *   - breadcrumbs: Array<{ label, to? }> (opcional)
 *   - gradient: string (clases Tailwind para gradiente, ej: 'from-blue-500 to-cyan-500')
 *   - children: ReactNode (opcional — contenido extra bajo el subtitle)
 */
export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbs,
  gradient = 'from-accent to-success',
  children,
}) {
  return (
    <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${gradient} opacity-40`}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badge && (
            <span className="badge badge-blue mb-4 inline-flex">
              {badge}
            </span>
          )}
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent leading-tight`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-primary-300 text-lg sm:text-xl leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
