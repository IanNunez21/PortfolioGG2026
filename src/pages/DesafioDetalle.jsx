import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Wrench, BookOpen, AlertCircle, Lightbulb, Star } from 'lucide-react';
import { getChallengeById } from '../data/challengesData';
 
const iconMap = {
  link: ExternalLink,
  image: BookOpen,
  document: BookOpen,
  video: BookOpen,
  presentation: BookOpen,
};
 
function Section({ icon: Icon, title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white/70 border border-primary-200 rounded-2xl p-6 shadow-card"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blush-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-accent" />
        </div>
        <h2 className="text-lg font-bold text-primary-800">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
 
export default function DesafioDetalle() {
  const { id } = useParams();
  const challenge = getChallengeById(id);
 
  if (!challenge) return <Navigate to="/desafios" replace />;
 
  return (
    <div className="min-h-[calc(100dvh-5rem)] px-4 sm:px-6 lg:px-8 py-10 relative">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/10 rounded-full blur-3xl pointer-events-none" />
 
      <div className="max-w-3xl mx-auto relative z-10">
 
        {/* Volver */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            to="/desafios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-accent transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Desafíos
          </Link>
        </motion.div>
 
        {/* Header card con gradiente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 mb-6 shadow-card border border-primary-200 overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #FEF9F5 0%, #FAE8D8 60%, #FDF6F0 100%)',
          }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-citrus/20 to-transparent rounded-bl-full" />
          <div className="relative z-10">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
              Gestión Gerencial · {challenge.number}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-900 mb-3 leading-tight">
              {challenge.title}
            </h1>
            <p className="text-primary-600 text-base leading-relaxed">
              {challenge.summary}
            </p>
          </div>
        </motion.div>
 
        <div className="flex flex-col gap-4">
 
          {/* Problema abordado */}
          <Section icon={AlertCircle} title="Problema abordado" delay={0.1}>
            <p className="text-primary-600 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: challenge.problem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          </Section>
 
          {/* Solución propuesta */}
          <Section icon={Lightbulb} title="Solución propuesta" delay={0.15}>
            <p className="text-primary-600 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: challenge.solution.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          </Section>
 
          {/* Arquitectura (solo D3) */}
          {challenge.architecture && (
            <Section icon={BookOpen} title="Arquitectura del proyecto" delay={0.2}>
              <p className="text-primary-600 text-sm mb-4">{challenge.architecture.description}</p>
 
              {/* Estructura de carpetas */}
              <div className="bg-primary-100/60 rounded-xl p-4 mb-4 font-mono text-xs text-primary-700 space-y-1.5">
                {challenge.architecture.structure.map((item) => (
                  <div key={item.path} className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0">{item.path}</span>
                    <span className="text-primary-500">{item.description}</span>
                  </div>
                ))}
              </div>
 
              {/* Rutas */}
              <p className="text-sm font-semibold text-primary-700 mb-2">Rutas del sitio</p>
              <div className="flex flex-wrap gap-2">
                {challenge.architecture.routing.map((r) => (
                  <div key={r.path} className="flex items-center gap-1.5 bg-white border border-primary-200 rounded-lg px-3 py-1.5 text-xs">
                    <code className="text-accent font-mono">{r.path}</code>
                    <span className="text-primary-400">→</span>
                    <span className="text-primary-600 font-medium">{r.label}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}
 
          {/* Evidencias */}
          <Section icon={ExternalLink} title="Evidencias" delay={0.25}>
            <ul className="space-y-2">
              {challenge.evidences.map((ev) => (
                <li key={ev.id}>
                  <a
                    href={ev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent-dark font-medium transition-colors duration-200 group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    {ev.title}
                  </a>
                  {ev.description && (
                    <p className="text-xs text-primary-400 ml-5 mt-0.5">{ev.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </Section>
 
          {/* Herramientas */}
          <Section icon={Wrench} title="Herramientas utilizadas" delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {challenge.tools.map((tool) => (
                <span key={tool} className="badge badge-gray text-xs">{tool}</span>
              ))}
            </div>
          </Section>
 
          {/* Reflexión */}
          <Section icon={Star} title="Reflexión del equipo" delay={0.35}>
            <p className="text-primary-600 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: challenge.reflection.learned.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
 
            {/* Competencias */}
            {challenge.reflection.competencies && (
              <div className="mt-4 pt-4 border-t border-primary-200">
                <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Competencias desarrolladas</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.reflection.competencies.map((c) => (
                    <span key={c} className="badge badge-blue text-xs">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </Section>
 
        </div>
      </div>
    </div>
  );
}