import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import EvidenceCard from '../components/cards/EvidenceCard';
import ToolBadge from '../components/ui/ToolBadge';
import ReflectionPanel from '../components/sections/ReflectionPanel';
import { challenges, getChallengeById } from '../data/challengesData';

export default function DesafioDetalle() {
  const { id } = useParams();
  const challenge = getChallengeById(id);

  // Si el ID no existe, redirigir al índice
  if (!challenge) {
    return <Navigate to="/desafios" replace />;
  }

  // Navegación entre desafíos
  const currentIndex = challenges.findIndex((c) => c.id === id);
  const prevChallenge = challenges[currentIndex - 1];
  const nextChallenge = challenges[currentIndex + 1];

  return (
    <>
      <PageHeader
        title={challenge.title}
        subtitle={challenge.subtitle}
        badge={challenge.number}
        gradient={challenge.color}
        breadcrumbs={[
          { label: 'Desafíos', to: '/desafios' },
          { label: challenge.number },
        ]}
      >
        {/* Summary + Tools en el header */}
        <div className="space-y-4">
          <p className="text-primary-300 text-base leading-relaxed max-w-3xl">
            {challenge.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {challenge.tools.map((tool) => (
              <ToolBadge key={tool} name={tool} variant="blue" />
            ))}
          </div>
        </div>
      </PageHeader>

      <div className="section pt-0">
        <div className="container-content space-y-16">

          {/* 1. Problema abordado */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            aria-labelledby="problema-title"
          >
            <SectionTitle id="problema-title" title="Problema Abordado" badge="1" />
            <div className="card border-rose-500/20 max-w-4xl relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${challenge.color} opacity-70`} aria-hidden="true" />
              <p className="text-primary-300 text-base leading-relaxed pl-5">
                {challenge.problem}
              </p>
            </div>
          </motion.section>

          {/* 2. Solución propuesta */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            aria-labelledby="solucion-title"
          >
            <SectionTitle id="solucion-title" title="Solución Propuesta" badge="2" />
            <div className="card border-emerald-500/20 max-w-4xl">
              <p className="text-primary-300 text-base leading-relaxed">
                {challenge.solution}
              </p>
            </div>
          </motion.section>

          {/* 3. Evidencias */}
          <section aria-labelledby="evidencias-title">
            <SectionTitle id="evidencias-title" title="Evidencias" badge={`${challenge.evidences.length}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenge.evidences.map((evidence, i) => (
                <EvidenceCard key={evidence.id} evidence={evidence} index={i} />
              ))}
            </div>
          </section>

          {/* 4. Herramientas utilizadas */}
          <section aria-labelledby="herramientas-title">
            <SectionTitle id="herramientas-title" title="Herramientas Utilizadas" badge="4" />
            <div className="flex flex-wrap gap-3">
              {challenge.tools.map((tool) => (
                <ToolBadge key={tool} name={tool} variant="blue" size="lg" />
              ))}
            </div>
          </section>

          {/* 5. Reflexión del equipo */}
          <section aria-labelledby="reflexion-title">
            <SectionTitle
              id="reflexion-title"
              title="Reflexión del Equipo"
              subtitle="¿Qué aprendimos? ¿Qué fue difícil? ¿Qué haríamos diferente? ¿Qué competencias desarrollamos?"
              badge="5"
            />
            <ReflectionPanel reflection={challenge.reflection} />
          </section>

          {/* Navegación entre desafíos */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t border-primary-700">
            {prevChallenge ? (
              <Link
                to={`/desafios/${prevChallenge.id}`}
                className="btn-secondary flex-1 sm:flex-none"
                aria-label={`Ir a ${prevChallenge.title}`}
              >
                <ArrowLeft className="w-4 h-4" />
                {prevChallenge.number} — {prevChallenge.title.split('—')[0].trim()}
              </Link>
            ) : (
              <Link to="/desafios" className="btn-ghost">
                <ArrowLeft className="w-4 h-4" />
                Índice de desafíos
              </Link>
            )}
            {nextChallenge && (
              <Link
                to={`/desafios/${nextChallenge.id}`}
                className="btn-primary flex-1 sm:flex-none sm:ml-auto"
                aria-label={`Ir a ${nextChallenge.title}`}
              >
                {nextChallenge.number} — {nextChallenge.title.split('—')[0].trim()}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
