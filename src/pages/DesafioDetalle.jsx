import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Wrench, BookOpen, AlertCircle, Lightbulb, Star } from 'lucide-react';
import { useState } from 'react';
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

function formatCompactNumber(value) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1).replace('.0', '')} M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace('.0', '')} k`;
  }
  return `${Math.round(value)}`;
}

function formatMoney(value) {
  return `$${Math.round(value).toLocaleString('es-AR')}`;
}

function BreakEvenChart({ config }) {
  const { p, cvu, cf, maxQ, xLabel } = config;
  const [hoverQ, setHoverQ] = useState(null);

  const peQ = cf / (p - cvu);
  const maxY = Math.max(maxQ * p, cf + maxQ * cvu) * 1.08;

  const width = 760;
  const height = 300;
  const padLeft = 56;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 44;
  const innerW = width - padLeft - padRight;
  const innerH = height - padTop - padBottom;

  const x = (q) => padLeft + (q / maxQ) * innerW;
  const y = (amount) => padTop + innerH - (amount / maxY) * innerH;

  const ingresosLine = `${x(0)},${y(0)} ${x(maxQ)},${y(maxQ * p)}`;
  const cvLine = `${x(0)},${y(0)} ${x(maxQ)},${y(maxQ * cvu)}`;
  const ctLine = `${x(0)},${y(cf)} ${x(maxQ)},${y(cf + maxQ * cvu)}`;
  const peX = x(Math.min(peQ, maxQ));
  const peY = y(Math.min(peQ * p, maxY));
  const tooltipX = x(Math.min(hoverQ ?? 0, maxQ));
  const hoverIncome = (hoverQ ?? 0) * p;
  const hoverCV = (hoverQ ?? 0) * cvu;
  const hoverCT = cf + hoverCV;
  const safeHoverIncomeY = y(Math.min(hoverIncome, maxY));
  const safeHoverCVY = y(Math.min(hoverCV, maxY));
  const safeHoverCTY = y(Math.min(hoverCT, maxY));
  const tooltipY = Math.max(26, Math.min(safeHoverCTY - 14, height - 84));

  const xTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
    const value = maxQ * ratio;
    return { value, label: formatCompactNumber(value) };
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const scaleX = width / rect.width;
    const localX = (event.clientX - rect.left) * scaleX;
    const q = ((localX - padLeft) / innerW) * maxQ;
    const clampedQ = Math.min(maxQ, Math.max(0, q));
    setHoverQ(clampedQ);
  };

  return (
    <div className="rounded-xl border border-primary-200 bg-white p-3 mt-3">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <rect x={padLeft} y={padTop} width={innerW} height={innerH} fill="#FDF6F0" />

        {xTicks.map((tick) => (
          <g key={tick.value}>
            <line x1={x(tick.value)} y1={padTop} x2={x(tick.value)} y2={padTop + innerH} stroke="#E6D7CA" strokeWidth="1" />
            <text x={x(tick.value)} y={height - 18} textAnchor="middle" fontSize="11" fill="#7A3018">
              {tick.label}
            </text>
          </g>
        ))}

        <line x1={padLeft} y1={padTop + innerH} x2={padLeft + innerW} y2={padTop + innerH} stroke="#BFA996" strokeWidth="1.5" />
        <line x1={padLeft} y1={padTop} x2={padLeft} y2={padTop + innerH} stroke="#BFA996" strokeWidth="1.5" />

        <polyline points={ingresosLine} fill="none" stroke="#F4B000" strokeWidth="2.6" />
        <polyline points={cvLine} fill="none" stroke="#009A7A" strokeWidth="2.6" />
        <polyline points={ctLine} fill="none" stroke="#D81B60" strokeWidth="2.6" />
        <line x1={padLeft} y1={y(cf)} x2={padLeft + innerW} y2={y(cf)} stroke="#47208D" strokeDasharray="7 5" strokeWidth="2" />

        <circle cx={peX} cy={peY} r="5" fill="#4338CA" />
        <text x={peX + 8} y={peY - 8} fontSize="11" fill="#1F1B4D">PE</text>

        <rect
          x={padLeft}
          y={padTop}
          width={innerW}
          height={innerH}
          fill="transparent"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverQ(null)}
        />

        {hoverQ !== null && (
          <>
            <line x1={tooltipX} y1={padTop} x2={tooltipX} y2={padTop + innerH} stroke="#7A3018" strokeDasharray="4 4" strokeWidth="1.5" />
            <circle cx={tooltipX} cy={safeHoverIncomeY} r="4" fill="#F4B000" />
            <circle cx={tooltipX} cy={safeHoverCVY} r="4" fill="#009A7A" />
            <circle cx={tooltipX} cy={safeHoverCTY} r="4" fill="#D81B60" />
            <circle cx={tooltipX} cy={y(cf)} r="4" fill="#47208D" />

            <g transform={`translate(${Math.min(tooltipX + 10, width - 182)}, ${tooltipY})`}>
              <rect width="172" height="74" rx="8" fill="#FFFFFF" stroke="#E6D7CA" />
              <text x="8" y="14" fontSize="10.5" fill="#4A1C0C">Q: {formatCompactNumber(hoverQ)}</text>
              <text x="8" y="28" fontSize="10.5" fill="#4A1C0C">Ingresos: {formatMoney(hoverIncome)}</text>
              <text x="8" y="42" fontSize="10.5" fill="#4A1C0C">CV: {formatMoney(hoverCV)}</text>
              <text x="8" y="56" fontSize="10.5" fill="#4A1C0C">CT: {formatMoney(hoverCT)}</text>
              <text x="8" y="70" fontSize="10.5" fill="#4A1C0C">CF: {formatMoney(cf)}</text>
            </g>
          </>
        )}

        <text x={width / 2} y={height - 2} textAnchor="middle" fontSize="12" fill="#4A1C0C">{xLabel}</text>
      </svg>

      <div className="flex flex-wrap gap-2 text-xs mt-2 text-primary-600">
        <span className="badge badge-gray">Ventas / ingresos</span>
        <span className="badge badge-gray">Costo variable total (CV)</span>
        <span className="badge badge-gray">Costo total</span>
        <span className="badge badge-gray">Costo fijo</span>
        <span className="badge badge-blue">Punto de equilibrio</span>
      </div>
    </div>
  );
}
 
export default function DesafioDetalle() {
  const { id } = useParams();
  const challenge = getChallengeById(id);
  const comingSoonById = {
    d5: { number: "D5", title: "Desafío en construcción" },
    d6: { number: "D6", title: "Desafío en construcción" },
    d7: { number: "D7", title: "Desafío en construcción" },
  };
  const comingSoon = comingSoonById[id];
 
  if (!challenge && !comingSoon) return <Navigate to="/desafios" replace />;

  if (!challenge && comingSoon) {
    return (
      <div className="min-h-[calc(100dvh-5rem)] px-4 sm:px-6 lg:px-8 py-10 relative">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="max-w-3xl mx-auto relative z-10">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl p-8 shadow-card border border-primary-200 bg-white/70"
          >
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
              Gestión Gerencial · {comingSoon.number}
            </p>
            <h1 className="text-3xl font-extrabold text-primary-900 mb-3">{comingSoon.title}</h1>
            <p className="text-primary-600 leading-relaxed">
              Esta sección está reservada para la próxima entrega. El espacio ya quedó creado en el portfolio
              y será completado cuando carguen el contenido del desafío.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
 
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
          {challenge.evidences?.length > 0 && (
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
          )}

          {/* Secciones específicas D4 */}
          {challenge.breakEven && (
            <>
              <Section icon={BookOpen} title="Glosario de siglas" delay={0.27}>
                <ul className="space-y-2 text-sm text-primary-700">
                  {challenge.breakEven.glossary.map((item) => (
                    <li key={item.term}>
                      <span className="font-extrabold text-primary-900">{item.term}</span>
                      <span className="text-primary-500"> — {item.definition}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section icon={BookOpen} title="Fórmulas utilizadas" delay={0.28}>
                <ul className="space-y-2 text-sm text-primary-700">
                  {challenge.breakEven.formulas.map((formula) => (
                    <li key={formula} className="font-medium">{formula}</li>
                  ))}
                </ul>
              </Section>

              <Section icon={Lightbulb} title="Resolución de ejercicios" delay={0.29}>
                <div className="space-y-5">
                  {challenge.breakEven.exercises.map((exercise) => (
                    <article key={exercise.id} className="rounded-xl border border-primary-200 bg-primary-100/40 p-4">
                      <h3 className="text-base font-extrabold text-primary-900 mb-2">{exercise.title}</h3>
                      <p className="text-sm text-primary-600 mb-3">{exercise.statement}</p>

                      {exercise.data && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {exercise.data.map((datum) => (
                            <span key={datum} className="badge badge-gray">{datum}</span>
                          ))}
                        </div>
                      )}

                      {exercise.steps && (
                        <div className="space-y-3">
                          {exercise.steps.map((step) => (
                            <div key={step.title} className="rounded-lg border-l-4 border-accent bg-white/80 p-3">
                              <p className="text-xs font-extrabold tracking-widest uppercase text-blush-500 mb-1">{step.title}</p>
                              <p className="text-sm text-primary-700">{step.formula}</p>
                              <p className="text-sm font-bold text-primary-900 mt-1">{step.result}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {exercise.table && (
                        <div className="mt-4 overflow-x-auto">
                          <table className="w-full text-sm border border-primary-200 rounded-lg overflow-hidden">
                            <thead className="bg-primary-200/60">
                              <tr>
                                {exercise.table.headers.map((header) => (
                                  <th key={header} className="text-left p-2 text-primary-700">{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {exercise.table.rows.map((row, rowIndex) => (
                                <tr key={`${exercise.id}-${rowIndex}`} className={rowIndex % 2 ? "bg-white" : "bg-primary-100/30"}>
                                  {row.map((cell, cellIndex) => (
                                    <td key={`${exercise.id}-${rowIndex}-${cellIndex}`} className="p-2 text-primary-700">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {exercise.chart && <BreakEvenChart config={exercise.chart} />}

                      {exercise.scenarios && (
                        <div className="grid md:grid-cols-3 gap-3 mt-3">
                          {exercise.scenarios.map((scenario) => (
                            <div key={scenario.name} className="rounded-lg border border-primary-200 bg-white p-3">
                              <h4 className="font-bold text-primary-800 mb-2">{scenario.name}</h4>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {scenario.data.map((datum) => (
                                  <span key={datum} className="badge badge-gray">{datum}</span>
                                ))}
                              </div>
                              <p className="text-sm text-primary-700">{scenario.result}</p>
                              <BreakEvenChart config={scenario.chart} />
                            </div>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </Section>

              <Section icon={Star} title="Conclusiones" delay={0.295}>
                <ul className="space-y-2 text-sm text-primary-700">
                  {challenge.breakEven.conclusions.map((item) => (
                    <li key={item} className="leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </Section>

              <Section icon={Wrench} title="Herramientas de análisis" delay={0.297}>
                <p className="text-sm text-primary-700 leading-relaxed">{challenge.breakEven.supportTools}</p>
              </Section>
            </>
          )}
 
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