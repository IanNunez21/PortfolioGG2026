import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import EvidenceCard from '../components/cards/EvidenceCard';
import ToolBadge from '../components/ui/ToolBadge';
import { tpi } from '../data/tpiData';

export default function Tpi() {
  return (
    <>
      <PageHeader
        title={tpi.title}
        subtitle={tpi.subtitle}
        badge="TPI — Trabajo Práctico Integrador"
        gradient="from-amber-400 to-orange-500"
      />

      <div className="section pt-0">
        <div className="container-content space-y-16">

          {/* Descripción + Objetivo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card border-amber-500/20"
            >
              <span className="badge badge-gray mb-3 inline-flex text-xs">Descripción General</span>
              <p className="text-primary-300 text-base leading-relaxed">{tpi.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="card border-amber-500/20"
            >
              <span className="badge badge-blue mb-3 inline-flex text-xs">Objetivo del TPI</span>
              <p className="text-primary-300 text-base leading-relaxed">{tpi.objective}</p>
            </motion.div>
          </div>

          {/* Problema */}
          <section aria-labelledby="tpi-problema">
            <SectionTitle id="tpi-problema" title="Problema Abordado" badge="Contexto" />
            <div className="card border-rose-500/20 max-w-4xl">
              <p className="text-primary-300 text-base leading-relaxed">{tpi.problem}</p>
            </div>
          </section>

          {/* Solución */}
          <section aria-labelledby="tpi-solucion">
            <SectionTitle id="tpi-solucion" title="Propuesta de Solución" badge="Diseño" />
            <div className="card border-emerald-500/20 max-w-4xl">
              <p className="text-primary-300 text-base leading-relaxed">{tpi.solution}</p>
            </div>
          </section>

          {/* Fases de implementación */}
          <section aria-labelledby="tpi-fases">
            <SectionTitle id="tpi-fases" title="Plan de Implementación" badge={`${tpi.phases.length} fases`} />
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 to-transparent hidden sm:block" aria-hidden="true" />
              <div className="space-y-5 sm:pl-12">
                {tpi.phases.map((phase, i) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card relative"
                  >
                    {/* Punto en timeline */}
                    <div className="absolute -left-[2.85rem] top-6 w-4 h-4 rounded-full bg-amber-500 border-2 border-primary-900 hidden sm:block" aria-hidden="true" />

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{phase.number}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-base">{phase.title}</h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <Clock className="w-3.5 h-3.5 text-primary-500" aria-hidden="true" />
                            <span className="text-primary-500 text-xs">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="sm:ml-4 space-y-1.5 flex-1">
                        {phase.activities.map((activity) => (
                          <li key={activity} className="flex items-center gap-2 text-sm text-primary-300">
                            <ArrowRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Resultados */}
          <section aria-labelledby="tpi-resultados">
            <SectionTitle id="tpi-resultados" title="Resultados Esperados" badge="Impacto" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tpi.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="card flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-primary-300 text-sm leading-relaxed">{result}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Evidencias */}
          <section aria-labelledby="tpi-evidencias">
            <SectionTitle id="tpi-evidencias" title="Evidencias del TPI" badge={`${tpi.evidences.length}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tpi.evidences.map((evidence, i) => (
                <EvidenceCard key={evidence.id} evidence={evidence} index={i} />
              ))}
            </div>
          </section>

          {/* Herramientas */}
          <section aria-labelledby="tpi-herramientas">
            <SectionTitle id="tpi-herramientas" title="Herramientas Utilizadas" badge={`${tpi.tools.length}`} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tpi.tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="card text-center py-4"
                >
                  <p className="font-semibold text-white text-sm mb-1">{tool.name}</p>
                  <span className="badge badge-gray text-xs">{tool.category}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Reflexión final */}
          <section aria-labelledby="tpi-reflexion">
            <SectionTitle
              id="tpi-reflexion"
              title="Reflexión Final del Equipo"
              badge="Cierre"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative card border-amber-500/30 max-w-4xl"
            >
              {/* Decoración */}
              <div className="absolute top-4 left-4 text-6xl text-amber-500/10 font-serif select-none" aria-hidden="true">"</div>
              <blockquote className="relative z-10 pl-6">
                <p className="text-primary-200 text-lg leading-relaxed italic">
                  {tpi.teamReflection}
                </p>
                <footer className="mt-4">
                  <p className="text-primary-500 text-sm">— Equipo Gestión Pomelo Rosado</p>
                </footer>
              </blockquote>
            </motion.div>
          </section>

        </div>
      </div>
    </>
  );
}
