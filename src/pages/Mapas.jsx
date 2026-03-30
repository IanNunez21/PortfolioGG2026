import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import ConceptMapCard from '../components/cards/ConceptMapCard';
import { conceptMaps } from '../data/conceptMapsData';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export default function Mapas() {
  return (
    <>
      <PageHeader
        title="Mapas Conceptuales"
        subtitle="Representaciones visuales de los conceptos trabajados en cada nivel de la cursada. Elaborados grupalmente como actividad de síntesis y reflexión."
        badge="Por Nivel"
        gradient="from-violet-400 to-purple-500"
      />

      <div className="section pt-0">
        <div className="container-content space-y-12">
          {/* Nota informativa */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20"
            role="note"
          >
            <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-primary-300 text-sm leading-relaxed">
              Los mapas conceptuales son elaboraciones grupales del equipo Gestión Pomelo Rosado.
              Podés verlos haciendo clic en cada tarjeta. Para agregar imágenes o PDFs, actualizá los datos en{' '}
              <code className="text-accent font-mono text-xs bg-primary-800 px-1.5 py-0.5 rounded">
                src/data/conceptMapsData.js
              </code>
            </p>
          </motion.div>

          {/* Grid de mapas */}
          <div>
            <SectionTitle
              title="Mapas por Nivel"
              subtitle={`${conceptMaps.length} mapas conceptuales elaborados a lo largo de la cursada.`}
              badge="Actividad grupal"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {conceptMaps.map((map, i) => (
                <ConceptMapCard key={map.id} map={map} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
