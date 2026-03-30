import { motion } from 'framer-motion';
import { FileText, Image, Video, Presentation, Link as LinkIcon, ExternalLink } from 'lucide-react';

const iconMap = {
  document: FileText,
  image: Image,
  video: Video,
  presentation: Presentation,
  link: LinkIcon,
};

const colorMap = {
  document: 'from-blue-500 to-blue-600',
  image: 'from-emerald-500 to-teal-600',
  video: 'from-rose-500 to-pink-600',
  presentation: 'from-violet-500 to-purple-600',
  link: 'from-amber-500 to-orange-600',
};

const labelMap = {
  document: 'Documento',
  image: 'Imagen',
  video: 'Video',
  presentation: 'Presentación',
  link: 'Enlace',
};

/**
 * EvidenceCard — Card de evidencia con tipo, ícono y botón
 * Props:
 *   - evidence: objeto { id, title, type, description, url, icon }
 *   - index: number
 */
export default function EvidenceCard({ evidence, index = 0 }) {
  const Icon = iconMap[evidence.icon] || FileText;
  const color = colorMap[evidence.icon] || colorMap.document;
  const typeLabel = labelMap[evidence.type] || 'Evidencia';
  const isPlaceholder = !evidence.url || evidence.url === '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="card group hover:border-primary-500 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-glow`}
          aria-hidden="true"
        >
          <Icon className="w-4 h-4 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Type badge */}
          <span className="badge badge-gray text-xs mb-2">{typeLabel}</span>

          <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-accent-light transition-colors">
            {evidence.title}
          </h4>
          {evidence.description && (
            <p className="text-primary-400 text-xs leading-relaxed mb-3">
              {evidence.description}
            </p>
          )}

          {/* CTA */}
          {isPlaceholder ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-primary-500 italic">
              Evidencia pendiente de carga
            </span>
          ) : (
            <a
              href={evidence.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
              aria-label={`Ver evidencia: ${evidence.title}`}
            >
              Ver evidencia
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
