import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';

/**
 * RpaCard — Card expandible de Ruta Personal de Aprendizaje
 * Props:
 *   - rpa: objeto de rpaData.js
 *   - index: number
 */
export default function RpaCard({ rpa, index = 0 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`card border ${rpa.borderColor} transition-all duration-300`}
    >
      {/* Header — siempre visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-center justify-between gap-4 group"
        aria-expanded={expanded}
        aria-controls={`rpa-content-${rpa.id}`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${rpa.color} flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-105 transition-transform duration-300`}
            aria-hidden="true"
          >
            <span className="text-white font-bold text-sm">{rpa.initials}</span>
          </div>
          <div>
            <h3 className="font-semibold text-white text-base leading-snug group-hover:text-accent-light transition-colors">
              {rpa.memberName}
            </h3>
            <p className="text-primary-500 text-xs mt-0.5">Ver Ruta Personal de Aprendizaje</p>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-primary-400 flex-shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Progress mini — siempre visible */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {rpa.progress.slice(0, 2).map((p) => (
          <div key={p.area}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-primary-400">{p.area}</span>
              <span className="text-primary-300 font-medium">{p.value}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${p.value}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`rpa-content-${rpa.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-5 space-y-5 border-t border-primary-700 mt-5">
              {/* Objetivo personal */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-accent" aria-hidden="true" />
                  <h4 className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Objetivo Personal</h4>
                </div>
                <p className="text-primary-300 text-sm leading-relaxed">{rpa.personalGoal}</p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-gray text-xs">Inicial</span>
                  </div>
                  <ul className="space-y-1.5">
                    {rpa.initialSkills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-primary-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-green text-xs">Desarrolladas</span>
                  </div>
                  <ul className="space-y-1.5">
                    {rpa.developedSkills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-success-light">
                        <Sparkles className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progreso completo */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-success" aria-hidden="true" />
                  <h4 className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Progreso</h4>
                </div>
                <div className="space-y-2.5">
                  {rpa.progress.map((p) => (
                    <div key={p.area}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-primary-300">{p.area}</span>
                        <span className="text-white font-semibold">{p.value}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${p.value}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reflexión */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-accent-light" aria-hidden="true" />
                  <h4 className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Reflexión Personal</h4>
                </div>
                <blockquote className="border-l-2 border-accent/40 pl-4">
                  <p className="text-primary-400 text-sm leading-relaxed italic">{rpa.reflection}</p>
                </blockquote>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
