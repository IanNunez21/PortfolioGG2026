import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ToolBadge from '../ui/ToolBadge';

/**
 * ChallengeCard — Card de desafío para grids e índices
 * Props:
 *   - challenge: objeto de challengesData.js
 *   - index: number (para delay de animación)
 *   - compact: boolean (versión compacta para la Home)
 */
export default function ChallengeCard({ challenge, index = 0, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        to={`/desafios/${challenge.id}`}
        className={`group block card card-hover h-full ${challenge.borderColor} hover:border-opacity-60`}
        aria-label={`Ver ${challenge.title}`}
      >
        {/* Header con número y gradiente */}
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${challenge.color} mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-white font-bold text-sm">{challenge.number}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-light transition-colors duration-200 leading-snug">
          {challenge.title}
        </h3>

        <p className="text-primary-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {challenge.summary}
        </p>

        {/* Tools */}
        {!compact && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {challenge.tools.slice(0, 3).map((tool) => (
              <ToolBadge key={tool} name={tool} variant="gray" size="sm" />
            ))}
            {challenge.tools.length > 3 && (
              <span className="badge badge-gray text-xs">+{challenge.tools.length - 3}</span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 text-accent text-sm font-medium mt-auto">
          <span>Ver desafío</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </Link>
    </motion.article>
  );
}
