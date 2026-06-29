import { motion } from 'framer-motion';
import { Download, Maximize2 } from 'lucide-react';

export default function Mapa() {
  const handleOpenFullscreen = () => {
    window.open('/mapa-conceptual.jpg', '_blank');
  };

  return (
    <section className="min-h-[calc(100dvh-5rem)] px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-85 h-85 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-85 h-85 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-10 w-full">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="badge badge-purple mb-3">Gestión del Conocimiento</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-primary-800 leading-tight tracking-tight drop-shadow-sm font-display">
            Mapa Conceptual
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-accent/30 rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-accent to-warm animate-pulse"></div>
            <div className="w-12 h-1 bg-warm/30 rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary-600 max-w-3xl leading-relaxed mx-auto font-medium">
            Visualización integrada de los conceptos clave de la materia y sus interrelaciones sistémicas.
          </p>
        </motion.div>

        {/* Contenedor del Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-4 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 relative group overflow-hidden"
        >
          {/* Barra de Acciones */}
          <div className="flex justify-end gap-3 mb-4">
            <button
              onClick={handleOpenFullscreen}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-primary-50 text-primary-700 hover:text-primary-900 border border-primary-200 hover:border-primary-300 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              title="Ver en pantalla completa"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Pantalla Completa</span>
            </button>
            
            <a
              href="/mapa-conceptual.jpg"
              download="Mapa Conceptual - Gestion Gerencial.jpg"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-citrus hover:bg-citrus-dark text-primary-950 border border-citrus-dark/25 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              title="Descargar imagen"
            >
              <Download className="w-4 h-4" />
              <span>Descargar</span>
            </a>
          </div>

          {/* Imagen del Mapa */}
          <div className="w-full rounded-2xl overflow-hidden border border-primary-100/60 shadow-inner bg-primary-50/20 relative">
            <img
              src="/mapa-conceptual.jpg"
              alt="Mapa Conceptual de Gestión Gerencial"
              className="w-full h-auto object-contain max-h-[75vh] mx-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}