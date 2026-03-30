import { Play, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { team } from '../../data/teamData';

/**
 * VideoEmbed — Bloque de video embebido
 * Props:
 *   - url: string (URL de YouTube embed, ej: https://www.youtube.com/embed/XXXX)
 *   - title: string
 *   - description: string (opcional)
 */
export default function VideoEmbed({
  url = team.videoUrl,
  title = 'Video presentación del equipo',
  description,
}) {
  const isPlaceholder = !url || url.includes('dQw4w9WgXcQ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {isPlaceholder ? (
        /* Placeholder cuando no hay video */
        <div className="relative w-full aspect-video rounded-2xl bg-surface border border-primary-700 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-30" aria-hidden="true" />
          <div className="text-center relative z-10 px-6">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-4">
              <Play className="w-7 h-7 text-accent ml-1" aria-hidden="true" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
            <p className="text-primary-400 text-sm max-w-sm mx-auto">
              El video del equipo se cargará aquí. Reemplazá la URL en{' '}
              <code className="text-accent font-mono text-xs bg-primary-800 px-1.5 py-0.5 rounded">
                teamData.js → videoUrl
              </code>
            </p>
            <span className="badge badge-gray text-xs mt-4 inline-flex">Video pendiente</span>
          </div>
        </div>
      ) : (
        /* Video embed real */
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-card-hover border border-primary-700">
          <iframe
            src={url}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      {description && (
        <p className="text-primary-400 text-sm text-center mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
