import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileImage, FileText, ExternalLink, X, ZoomIn } from 'lucide-react';

/**
 * ConceptMapCard — Card para mapa conceptual con preview e imagen/PDF/enlace
 * Props:
 *   - map: objeto de conceptMapsData.js
 *   - index: number
 */
export default function ConceptMapCard({ map, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  const hasImage = !!map.imageUrl;
  const hasPdf = !!map.pdfUrl;
  const hasExternal = map.externalUrl && map.externalUrl !== '#';

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className={`card border ${map.borderColor} group hover:-translate-y-1 transition-all duration-300`}
      >
        {/* Preview area */}
        <div
          className={`w-full h-40 rounded-xl ${map.bgColor} border ${map.borderColor} flex items-center justify-center mb-5 relative overflow-hidden`}
          role={hasImage ? 'button' : 'img'}
          onClick={hasImage ? () => setModalOpen(true) : undefined}
          style={{ cursor: hasImage ? 'pointer' : 'default' }}
          aria-label={hasImage ? `Ver mapa conceptual: ${map.title}` : map.title}
        >
          {hasImage ? (
            <>
              <img
                src={map.imageUrl}
                alt={`Vista previa: ${map.title}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </>
          ) : (
            <div className="text-center px-4">
              <FileImage className={`w-12 h-12 mx-auto mb-2 opacity-30 bg-gradient-to-br ${map.color} bg-clip-text text-transparent`} />
              <p className="text-primary-500 text-xs">Imagen pendiente de carga</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`badge text-xs bg-gradient-to-r ${map.color} text-white border-0`}>
            {map.level}
          </span>
          <span className="badge badge-gray text-xs">{map.type === 'group' ? 'Grupal' : 'Individual'}</span>
        </div>

        <h3 className="font-semibold text-white text-base mb-2 leading-snug group-hover:text-accent-light transition-colors">
          {map.title}
        </h3>
        <p className="text-primary-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {map.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {map.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="badge badge-gray text-xs">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          {hasImage && (
            <button
              onClick={() => setModalOpen(true)}
              className="btn-secondary text-xs py-1.5 px-3"
              aria-label={`Ampliar imagen: ${map.title}`}
            >
              <ZoomIn className="w-3.5 h-3.5" />
              Ver imagen
            </button>
          )}
          {hasPdf && (
            <a
              href={map.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-1.5 px-3"
              aria-label={`Abrir PDF: ${map.title}`}
            >
              <FileText className="w-3.5 h-3.5" />
              PDF
            </a>
          )}
          {hasExternal && (
            <a
              href={map.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-1.5 px-3"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Abrir
            </a>
          )}
          {!hasImage && !hasPdf && !hasExternal && (
            <span className="text-xs text-primary-500 italic">Contenido pendiente de carga</span>
          )}
        </div>

        <p className="text-primary-600 text-xs mt-3">{map.date}</p>
      </motion.article>

      {/* Modal de imagen */}
      <AnimatePresence>
        {modalOpen && hasImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Mapa conceptual: ${map.title}`}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-primary-300 transition-colors"
                aria-label="Cerrar imagen"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={map.imageUrl}
                alt={map.title}
                className="w-full rounded-2xl shadow-card"
              />
              <p className="text-center text-primary-400 text-sm mt-3">{map.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
