import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

export default function Desafios() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 flex flex-col items-center"
      >
        <div className="w-20 h-20 rounded-full bg-primary-800/50 flex items-center justify-center mb-6 border border-primary-700/50 shadow-glow">
          <Hammer className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
          Desafíos
        </h1>
        <span className="badge badge-blue mb-4">En construcción</span>
        <p className="text-primary-300 text-lg sm:text-xl max-w-md mx-auto">
          Estamos trabajando en el contenido de esta sección. ¡Próximamente estará disponible!
        </p>
      </motion.div>
    </section>
  );
}
