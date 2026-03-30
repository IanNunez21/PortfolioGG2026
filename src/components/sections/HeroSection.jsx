import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Layers } from 'lucide-react';
import { team } from '../../data/teamData';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100dvh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Presentación del equipo"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="dot-bg opacity-20 absolute inset-0" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-success/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">


        {/* Logo / Ícono del equipo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
          aria-hidden="true"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent via-blue-400 to-success flex items-center justify-center shadow-glow-lg">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            {/* Aura */}
            <div className="absolute inset-0 w-24 h-24 rounded-3xl bg-gradient-to-br from-accent to-success opacity-20 blur-xl scale-125" />
          </div>
        </motion.div>

        {/* Nombre del equipo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Gestión </span>
          <span className="text-gradient">Pomelo Rosado</span>
        </motion.h1>



        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link to="/desafios" className="btn-primary text-base px-8 py-4" id="hero-cta-desafios">
            Ver desafíos
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/equipo" className="btn-secondary text-base px-8 py-4" id="hero-cta-equipo">
            <Users className="w-5 h-5" />
            Conocer el equipo
          </Link>
        </motion.div>


      </div>
    </section>
  );
}
