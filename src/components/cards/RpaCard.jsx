import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Sparkles, TrendingUp, MessageSquare, BookOpen } from 'lucide-react';

const getRomanNumeral = (num) => {
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  return roman[num - 1] || num;
};

/**
 * RpaCard — Card expandible de Ruta Personal de Aprendizaje
 * Props:
 *   - rpa: objeto de rpaData.js
 *   - index: number
 */
export default function RpaCard({ rpa, index = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const [activeUnitNum, setActiveUnitNum] = useState(1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`card border ${rpa.borderColor} bg-white transition-all duration-300`}
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
            <h3 className="font-semibold text-primary-800 text-base leading-snug group-hover:text-accent transition-colors">
              {rpa.memberName}
            </h3>
            <p className="text-primary-500 text-xs mt-0.5">Ver Ruta Personal de Aprendizaje</p>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-primary-500 flex-shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Progress mini — siempre visible */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {rpa.progress.slice(0, 2).map((p) => (
          <div key={p.area}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-primary-500">{p.area}</span>
              <span className="text-primary-700 font-semibold">{p.value}%</span>
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
            <div className="pt-5 space-y-5 border-t border-primary-200 mt-5">
              {/* Objetivo personal */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-accent" aria-hidden="true" />
                  <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Objetivo Personal</h4>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">{rpa.personalGoal}</p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-gray text-xs">Inicial</span>
                  </div>
                  <ul className="space-y-1.5">
                    {rpa.initialSkills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-primary-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-success/15 text-success-dark border border-success-light/20">Desarrolladas</span>
                  </div>
                  <ul className="space-y-1.5">
                    {rpa.developedSkills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-success-dark">
                        <Sparkles className="w-3 h-3 text-success flex-shrink-0" aria-hidden="true" />
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
                  <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Progreso</h4>
                </div>
                <div className="space-y-2.5">
                  {rpa.progress.map((p) => (
                    <div key={p.area}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-primary-600">{p.area}</span>
                        <span className="text-primary-800 font-bold">{p.value}%</span>
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
                  <MessageSquare className="w-4 h-4 text-accent" aria-hidden="true" />
                  <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Reflexión Personal</h4>
                </div>
                <blockquote className="border-l-2 border-accent/40 pl-4">
                  <p className="text-primary-700 text-sm leading-relaxed italic">{rpa.reflection}</p>
                </blockquote>
              </div>

              {/* Ruta Detallada por Unidades */}
              {rpa.units && rpa.units.length > 0 && (
                <div className="pt-5 border-t border-primary-200 mt-5">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-accent" aria-hidden="true" />
                    <h4 className="text-xs font-semibold text-primary-500 uppercase tracking-wider">
                      Ruta por Unidades (I - VII)
                    </h4>
                  </div>
                  
                  {/* Selector de Unidades */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {rpa.units.map((unit) => {
                      const isActive = activeUnitNum === unit.number;
                      return (
                        <button
                          key={unit.number}
                          onClick={() => setActiveUnitNum(unit.number)}
                          className={`w-9 h-9 rounded-xl text-xs font-extrabold transition-all duration-200 hover:scale-105 active:scale-95 ${
                            isActive
                              ? `bg-gradient-to-br ${rpa.color} text-white shadow-glow`
                              : 'bg-primary-100 text-primary-600 hover:bg-primary-200 border border-primary-200'
                          }`}
                        >
                          {getRomanNumeral(unit.number)}
                        </button>
                      );
                    })}
                  </div>

                  {/* Detalle de la Unidad con AnimatePresence para animaciones suaves */}
                  <div className="bg-primary-50/50 border border-primary-200/60 rounded-2xl p-4 min-h-[140px] shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                    {rpa.units.map((unit) => {
                      if (unit.number !== activeUnitNum) return null;
                      return (
                        <motion.div
                          key={unit.number}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-3"
                        >
                          <h5 className="font-bold text-sm text-primary-800 leading-snug">
                            {unit.title}
                          </h5>

                          {/* Conceptos nuevos */}
                          <div>
                            <span className="text-[10px] font-bold text-primary-400 uppercase tracking-wider block mb-1.5">
                              Conceptos Clave Adquiridos
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {unit.acquiredConcepts.map((concept) => (
                                <span
                                  key={concept}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] bg-white text-primary-700 border border-primary-200 font-semibold shadow-sm hover:border-primary-300 transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  {concept}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Reflexión personal de la unidad */}
                          <div>
                            <span className="text-[10px] font-bold text-primary-400 uppercase tracking-wider block mb-1">
                              Reflexión de la Unidad
                            </span>
                            <blockquote className="border-l-2 border-accent/40 pl-3 py-0.5">
                              <p className="text-xs text-primary-600 leading-relaxed italic">
                                "{unit.reflection}"
                              </p>
                            </blockquote>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
