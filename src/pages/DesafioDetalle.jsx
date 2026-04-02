import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getChallengeById } from '../data/challengesData';

export default function DesafioDetalle() {
  const { id } = useParams();
  const challenge = getChallengeById(id);

  if (!challenge) {
    return <Navigate to="/desafios" replace />;
  }

  const numero = challenge.number.replace('D', '');

  return (
    <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center p-6 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 w-full max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gradient leading-tight tracking-tight">
          Titulo de desafio {numero}
        </h1>
      </motion.div>
    </section>
  );
} 