import { motion } from 'framer-motion';
import { team } from '../data/teamData';

export default function Equipo() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] flex flex-col items-center justify-center p-6 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 w-full max-w-4xl mx-auto mt-8 md:mt-0"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-gradient leading-tight tracking-tight">
          El Equipo
        </h1>

        {/* Espacio reservado para el video */}
        <div className="mt-16 sm:mt-20 w-full aspect-video rounded-3xl border border-dashed border-primary-300 bg-primary-200/40 flex flex-col gap-3 items-center justify-center hover:bg-primary-200/60 transition-colors">
          <svg className="w-10 h-10 text-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-warm-dark font-medium text-lg">Espacio reservado para Canva / YouTube</p>
          <p className="text-primary-500 text-sm">Podés insertar tu código de embed (iframe) aquí mismo más adelante.</p>
        </div>
      </motion.div>
    </section>
  );
} 