import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

export default function Mapas() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 flex flex-col items-center"
      >
        <div className="w-20 h-20 rounded-full bg-blush-100 flex items-center justify-center mb-6 border border-accent/20 shadow-glow">
          <Hammer className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
          Ruta Personal de Aprendizaje
        </h1>
        <span className="badge badge-blue mb-4">En construcción</span>
        <p className="text-primary-600 text-lg sm:text-xl max-w-md mx-auto">
          Estamos trabajando en el contenido de esta sección. ¡Próximamente estará disponible!
        </p>
      </motion.div>
    </section>
  );
} 