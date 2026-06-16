import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Wrench, BookOpen, AlertCircle, Lightbulb, Star, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getChallengeById } from '../data/challengesData';
import IshikawaChart from '../components/ui/IshikawaChart';
 
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

function BreakEvenChart({ config, onExpand, expanded = false }) {
  const { p, cvu, cf, maxQ, xLabel } = config;
  const [hoverQ, setHoverQ] = useState(null);

  const peQ = cf / (p - cvu);
  const maxY = Math.max(maxQ * p, cf + maxQ * cvu) * 1.08;

  const width = expanded ? 1200 : 920;
  const height = expanded ? 520 : 380;
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
      {!expanded && onExpand && (
        <div className="flex justify-end mb-2">
          <button
            type="button"
            onClick={() => onExpand(config)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-accent transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Ampliar gráfica
          </button>
        </div>
      )}
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
 
function IshikawaSection({ ishikawa }) {
  const branchColors = {
    "m1": "border-pink-300 bg-pink-50",
    "m2": "border-purple-300 bg-purple-50",
    "m3": "border-orange-300 bg-orange-50",
    "m4": "border-teal-300 bg-teal-50",
    "m5": "border-blue-300 bg-blue-50",
    "m6": "border-amber-300 bg-amber-50",
    "tpi-m1": "border-pink-300 bg-pink-50",
    "tpi-m2": "border-purple-300 bg-purple-50",
    "tpi-m3": "border-orange-300 bg-orange-50",
    "tpi-m4": "border-teal-300 bg-teal-50",
    "tpi-m5": "border-blue-300 bg-blue-50",
    "tpi-m6": "border-amber-300 bg-amber-50",
  };

  const badgeColors = {
    "m1": "bg-pink-100 text-pink-800",
    "m2": "bg-purple-100 text-purple-800",
    "m3": "bg-orange-100 text-orange-800",
    "m4": "bg-teal-100 text-teal-800",
    "m5": "bg-blue-100 text-blue-800",
    "m6": "bg-amber-100 text-amber-800",
    "tpi-m1": "bg-pink-100 text-pink-800",
    "tpi-m2": "bg-purple-100 text-purple-800",
    "tpi-m3": "bg-orange-100 text-orange-800",
    "tpi-m4": "bg-teal-100 text-teal-800",
    "tpi-m5": "bg-blue-100 text-blue-800",
    "tpi-m6": "bg-amber-100 text-amber-800",
  };

  return (
    <div className="space-y-4">

      {/* Efecto / cabeza del pescado */}
      <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3 flex items-center gap-3">
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex-shrink-0">Efecto</span>
        <p className="text-sm font-extrabold text-red-800">{ishikawa.effect}</p>
      </div>

      {/* Ramas / 6M */}
      <div className="space-y-3">
        {ishikawa.branches.map((branch) => (
          <div
            key={branch.id}
            className={`rounded-xl border-l-4 p-4 ${branchColors[branch.id] ?? "border-primary-300 bg-primary-50"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[branch.id] ?? "bg-primary-100 text-primary-800"}`}>
                {branch.name}
                {branch.id === ishikawa.criticalM?.name?.toLowerCase().replace(/ /g, "-") && " ★"}
              </span>
              {ishikawa.criticalM && branch.name === ishikawa.criticalM.name && (
                <span className="text-xs font-bold text-red-500">★ M más crítica</span>
              )}
            </div>
            <ul className="space-y-1">
              {branch.causes.map((cause, i) => (
                <li key={i} className="text-sm text-primary-700 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-40" />
                  {cause}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* M más crítica — justificación */}
      {ishikawa.criticalM && (
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
          <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1">
            ★ M más crítica — {ishikawa.criticalM.name}
          </p>
          <p className="text-sm text-primary-700 leading-relaxed">{ishikawa.criticalM.justification}</p>
        </div>
      )}
    </div>
  );
}


export default function DesafioDetalle() {
  const { id } = useParams();
  const challenge = getChallengeById(id);
  const [expandedChartConfig, setExpandedChartConfig] = useState(null);
  const comingSoonById = {
    d5: { number: "D5", title: "Desafío en construcción" },
    d6: { number: "D6", title: "Desafío en construcción" },
    d7: { number: "D7", title: "Desafío en construcción" },
    d8: { number: "D8", title: "Desafío en construcción" },
  };
  const comingSoon = comingSoonById[id];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setExpandedChartConfig(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
 
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
          {challenge.gestionCambio && (
            <>
              {/* ── ACTIVIDAD 1 ── */}
              <Section icon={BookOpen} title={challenge.gestionCambio.actividad1.title} delay={0.2}>
                <p className="text-sm text-primary-600 leading-relaxed">
                  {challenge.gestionCambio.actividad1.contexto}
                </p>
              </Section>
          
              {/* Diagnóstico — Fuerzas */}
              <Section icon={AlertCircle} title={challenge.gestionCambio.actividad1.diagnostico.title} delay={0.22}>
                <div className="space-y-4">
          
                  {/* Fuerzas externas */}
                  <div>
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                      Fuerzas Externas
                    </p>
                    <div className="space-y-2">
                      {challenge.gestionCambio.actividad1.diagnostico.fuerzasExternas.map((f, i) => (
                        <div key={i} className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-3">
                          <p className="text-sm font-bold text-blue-800 mb-1">{f.titulo}</p>
                          <p className="text-sm text-primary-700">{f.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  {/* Fuerzas internas */}
                  <div>
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                      Fuerzas Internas
                    </p>
                    <div className="space-y-2">
                      {challenge.gestionCambio.actividad1.diagnostico.fuerzasInternas.map((f, i) => (
                        <div key={i} className="rounded-lg border-l-4 border-orange-400 bg-orange-50 p-3">
                          <p className="text-sm font-bold text-orange-800 mb-1">{f.titulo}</p>
                          <p className="text-sm text-primary-700">{f.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  {/* Tipo de cambio */}
                  <div className="rounded-xl border border-primary-200 bg-white/80 p-4">
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                      {challenge.gestionCambio.actividad1.diagnostico.tipoCambio.pregunta}
                    </p>
                    <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 mb-2">
                      {challenge.gestionCambio.actividad1.diagnostico.tipoCambio.badge}
                    </span>
                    <p className="text-sm text-primary-700 leading-relaxed">
                      {challenge.gestionCambio.actividad1.diagnostico.tipoCambio.respuesta}
                    </p>
                  </div>
          
                  {/* Velocidad del cambio */}
                  <div className="rounded-xl border border-primary-200 bg-white/80 p-4">
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                      {challenge.gestionCambio.actividad1.diagnostico.velocidadCambio.pregunta}
                    </p>
                    <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 mb-2">
                      {challenge.gestionCambio.actividad1.diagnostico.velocidadCambio.badge}
                    </span>
                    <p className="text-sm text-primary-700 leading-relaxed mb-3">
                      {challenge.gestionCambio.actividad1.diagnostico.velocidadCambio.respuesta}
                    </p>
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Impactos</p>
                    <ul className="space-y-1">
                      {challenge.gestionCambio.actividad1.diagnostico.velocidadCambio.impactos.map((imp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-primary-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                          {imp}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-bold text-primary-800 mt-3 border-t border-primary-200 pt-3">
                      {challenge.gestionCambio.actividad1.diagnostico.velocidadCambio.conclusion}
                    </p>
                  </div>
                </div>
              </Section>
          
              {/* Análisis de la resistencia */}
              <Section icon={AlertCircle} title={challenge.gestionCambio.actividad1.resistencia.title} delay={0.24}>
                <div className="space-y-4">
          
                  {/* Causas humanas */}
                  <div>
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                      Causas humanas y emocionales de la resistencia
                    </p>
                    <div className="space-y-2">
                      {challenge.gestionCambio.actividad1.resistencia.causasHumanas.map((c, i) => (
                        <div key={i} className="rounded-lg border-l-4 border-pink-400 bg-pink-50 p-3">
                          <p className="text-sm font-bold text-pink-800 mb-1">{c.titulo}</p>
                          <p className="text-sm text-primary-700">{c.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  {/* Errores de Valeria */}
                  <div>
                    <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                      Errores graves de Valeria
                    </p>
                    <div className="space-y-2">
                      {challenge.gestionCambio.actividad1.resistencia.erroresValeria.map((e, i) => (
                        <div key={i} className="rounded-lg border-l-4 border-red-400 bg-red-50 p-3">
                          <p className="text-sm font-bold text-red-800 mb-1">{e.titulo}</p>
                          <p className="text-sm text-primary-700">{e.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>
          
              {/* Plan de acción */}
              <Section icon={Lightbulb} title={challenge.gestionCambio.actividad1.propuesta.title} delay={0.26}>
                <div className="space-y-5">
          
                  {/* Acciones por fase */}
                  {challenge.gestionCambio.actividad1.propuesta.acciones.map((accion, i) => {
                    const badgeColors = ["bg-red-100 text-red-700", "bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800"];
                    const borderColors = ["border-red-300", "border-yellow-300", "border-green-300"];
                    return (
                      <div key={i} className={`rounded-xl border-l-4 p-4 bg-white/80 ${borderColors[i] ?? "border-primary-300"}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <p className="text-sm font-extrabold text-primary-900">{accion.fase}</p>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[i] ?? "bg-primary-100 text-primary-700"}`}>
                            {accion.plazo}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {accion.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-primary-700">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
          
                  {/* Modelo Kotter */}
                  <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                    <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1">
                      {challenge.gestionCambio.actividad1.propuesta.modeloKotter.title}
                    </p>
                    <p className="text-sm text-primary-700 leading-relaxed mb-4">
                      {challenge.gestionCambio.actividad1.propuesta.modeloKotter.descripcion}
                    </p>
                    <div className="space-y-2">
                      {challenge.gestionCambio.actividad1.propuesta.modeloKotter.pasos.map((paso) => (
                        <div key={paso.numero} className="flex items-start gap-3 bg-white/80 rounded-lg p-3 border border-purple-100">
                          <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {paso.numero}
                          </span>
                          <div>
                            <p className="text-sm font-bold text-primary-900">{paso.titulo}</p>
                            <p className="text-sm text-primary-600">{paso.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  {/* Estrategia de comunicación */}
                  <div className="rounded-xl border border-teal-200 bg-teal-50 p-4">
                    <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">
                      {challenge.gestionCambio.actividad1.propuesta.estrategiaComunicacion.title}
                    </p>
                    <div className="space-y-3">
                      {challenge.gestionCambio.actividad1.propuesta.estrategiaComunicacion.fases.map((fase, i) => (
                        <div key={i} className="bg-white/80 rounded-lg p-3 border border-teal-100">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-700">
                              {fase.fase}
                            </span>
                            <p className="text-sm font-bold text-primary-800">{fase.titulo}</p>
                          </div>
                          <ul className="space-y-1">
                            {fase.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-primary-700">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  {/* Transformación digital */}
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">
                      {challenge.gestionCambio.actividad1.propuesta.transformacionDigital.pregunta}
                    </p>
                    <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white mb-2">
                      {challenge.gestionCambio.actividad1.propuesta.transformacionDigital.respuesta}
                    </span>
                    <p className="text-sm text-primary-700 leading-relaxed mb-3">
                      {challenge.gestionCambio.actividad1.propuesta.transformacionDigital.justificacion}
                    </p>
                    <ul className="space-y-1 mb-3">
                      {challenge.gestionCambio.actividad1.propuesta.transformacionDigital.criterios.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-primary-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-bold text-blue-800 border-t border-blue-200 pt-3">
                      {challenge.gestionCambio.actividad1.propuesta.transformacionDigital.advertencia}
                    </p>
                  </div>
                </div>
              </Section>
          
              {/* ── ACTIVIDAD 2 ── */}
              <Section icon={Star} title={challenge.gestionCambio.actividad2.title} delay={0.3}>
                <div className="space-y-3">
                  {challenge.gestionCambio.actividad2.preguntas.map((item) => (
                    <div key={item.id} className="rounded-xl border border-primary-200 bg-white/80 p-4">
                      <p className="text-sm font-extrabold text-primary-900 mb-2">{item.pregunta}</p>
                      <p className="text-sm text-primary-700 leading-relaxed">{item.respuesta}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </>
          )}
          {challenge.ishikawa && (
            <>
              {/* Link al canvas de Canva */}
              {challenge.canvasLink && (
                <Section icon={ExternalLink} title="Diagrama en Canva" delay={0.22}>
                  <a
                    href={challenge.canvasLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark font-medium transition-colors duration-200 group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    Ver diagrama completo en Canva
                  </a>
                  <p className="text-xs text-primary-400 ml-5 mt-0.5">
                    Diagramas de Ishikawa elaborados por el equipo
                  </p>
                </Section>
              )}

              {/* Diagrama aerolínea */}
              <Section icon={BookOpen} title="Diagrama de Ishikawa — Aerolínea" delay={0.24}>
                <p className="text-sm text-primary-600 mb-4 leading-relaxed">
                  Análisis de causa y efecto aplicando las 6M para identificar las raíces del problema
                  de retrasos en embarque.
                </p>
                <IshikawaChart ishikawa={challenge.ishikawa} />
              </Section>

              {/* Reflexión TPI */}
              {challenge.tpiConnection && (
                <>
                  <Section icon={AlertCircle} title={`Conexión con TPI — ${challenge.tpiConnection.organization}`} delay={0.26}>

                    {/* Cabeza del pescado */}
                    <div className="space-y-3">
                      <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3">
                        <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
                          {challenge.tpiConnection.fishHead.title}
                        </p>
                        <p className="text-sm font-bold text-red-800 mb-2">
                          {challenge.tpiConnection.fishHead.problem}
                        </p>
                        <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                          {challenge.tpiConnection.fishHead.isProblemOrSymptom}
                        </span>
                      </div>

                      {/* Métricas del problema */}
                      <div>
                        <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                          Se puede medir porque...
                        </p>
                        <ul className="space-y-1">
                          {challenge.tpiConnection.fishHead.metrics.map((m, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-primary-700">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Síntomas */}
                      <div>
                        <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">
                          Síntomas visibles en la operación
                        </p>
                        <ul className="space-y-1">
                          {challenge.tpiConnection.fishHead.symptoms.map((s, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-primary-600 italic">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-300 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Section>

                  {/* Diagrama Ishikawa TPI */}
                  <Section icon={BookOpen} title={`Diagrama de Ishikawa — ${challenge.tpiConnection.organization}`} delay={0.28}>
                    <IshikawaChart ishikawa={challenge.tpiConnection.ishikawaTPI} />
                  </Section>

                  {/* KPIs faltantes */}
                  <Section icon={AlertCircle} title="KPIs que le faltan a S&M" delay={0.29}>
                    <ul className="space-y-2">
                      {challenge.tpiConnection.ishikawaTPI.missingKPIs.map((kpi, i) => (
                        <li key={i} className="rounded-lg border-l-4 border-accent bg-white/80 p-3 text-sm text-primary-700">
                          {kpi}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  {/* Procesos informales */}
                  <Section icon={Wrench} title="Procesos que se hacen de memoria" delay={0.30}>
                    <ul className="space-y-2">
                      {challenge.tpiConnection.ishikawaTPI.informalProcesses.map((proc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-primary-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                          {proc}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  {/* Brecha tecnológica */}
                  <Section icon={Lightbulb} title="Brecha tecnológica" delay={0.31}>
                    <p className="text-sm text-primary-700 leading-relaxed">
                      {challenge.tpiConnection.ishikawaTPI.techGap}
                    </p>
                  </Section>

                  {/* Propuesta de solución */}
                  <Section icon={Star} title="Propuesta que ataca la raíz" delay={0.32}>
                    <p className="text-sm text-primary-700 leading-relaxed font-medium">
                      {challenge.tpiConnection.ishikawaTPI.proposedSolution}
                    </p>
                  </Section>
                </>
              )}
            </>
          )}
          {/* Resolución individual — Zaira */}
          {challenge.resolucionIndividual && (() => {
            const ri = challenge.resolucionIndividual;
            const branchColors = {
              "ri-m1": "border-pink-300 bg-pink-50",
              "ri-m2": "border-purple-300 bg-purple-50",
              "ri-m3": "border-orange-300 bg-orange-50",
              "ri-m4": "border-teal-300 bg-teal-50",
              "ri-m5": "border-blue-300 bg-blue-50",
              "ri-m6": "border-amber-300 bg-amber-50",
            };
            const badgeColors = {
              "ri-m1": "bg-pink-100 text-pink-800",
              "ri-m2": "bg-purple-100 text-purple-800",
              "ri-m3": "bg-orange-100 text-orange-800",
              "ri-m4": "bg-teal-100 text-teal-800",
              "ri-m5": "bg-blue-100 text-blue-800",
              "ri-m6": "bg-amber-100 text-amber-800",
            };
            const planColors = ["border-red-300", "border-yellow-300", "border-green-300"];
            const planBadge = ["bg-red-100 text-red-700", "bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800"];

            return (
              <>
                {/* Header individual */}
                <Section icon={Star} title={`Resolución individual — ${ri.alumna}`} delay={0.33}>
                  <div className="rounded-xl border-2 border-accent/30 bg-blush-50 px-4 py-3 mb-3">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Escenario {ri.escenario.id}</p>
                    <p className="text-base font-extrabold text-primary-900 mb-1">{ri.escenario.empresa}</p>
                    <p className="text-sm text-primary-600">{ri.escenario.descripcion}</p>
                  </div>
                  <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Efecto — Cabeza del pescado</p>
                    <p className="text-sm font-extrabold text-red-800">{ri.ishikawa.effect}</p>
                  </div>
                </Section>

                {/* Ramas Ishikawa individual */}
                <Section icon={BookOpen} title="Diagrama de Ishikawa — BurgerClick" delay={0.34}>
                  <div className="space-y-3">
                    {ri.ishikawa.branches.map((branch) => (
                      <div key={branch.id} className={`rounded-xl border-l-4 p-4 ${branchColors[branch.id] ?? "border-primary-300 bg-primary-50"}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[branch.id] ?? "bg-primary-100 text-primary-800"}`}>
                            {branch.name}
                          </span>
                          {branch.name === ri.ishikawa.criticalM.name && (
                            <span className="text-xs font-bold text-red-500">★ M más crítica</span>
                          )}
                        </div>
                        <ul className="space-y-1">
                          {branch.causes.map((cause, i) => (
                            <li key={i} className="text-sm text-primary-700 flex items-start gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-40" />
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                      <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1">
                        ★ M más crítica — {ri.ishikawa.criticalM.name}
                      </p>
                      <p className="text-sm text-primary-700 leading-relaxed">{ri.ishikawa.criticalM.justification}</p>
                    </div>
                  </div>
                </Section>

                {/* Plan de acción */}
                <Section icon={Lightbulb} title="Plan de acción — atacando la M crítica" delay={0.35}>
                  <div className="space-y-3">
                    {ri.planAccion.map((paso, i) => (
                      <div key={i} className={`rounded-xl border-l-4 p-4 bg-white/80 ${planColors[i] ?? "border-primary-300"}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-sm font-extrabold text-primary-900">{paso.fase}</p>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${planBadge[i] ?? "bg-primary-100 text-primary-700"}`}>
                            {paso.plazo}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {paso.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-primary-700">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Comparación con LML */}
                <Section icon={AlertCircle} title={`Comparación con ${ri.comparacion.equipoRef}`} delay={0.36}>
                  <div className="overflow-x-auto mb-3">
                    <table className="w-full text-sm border border-primary-200 rounded-lg overflow-hidden">
                      <thead className="bg-primary-200/60">
                        <tr>
                          <th className="text-left p-2 text-primary-700 w-28">M</th>
                          <th className="text-left p-2 text-primary-700">Comparación</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ri.comparacion.filas.map((fila, i) => (
                          <tr key={i} className={i % 2 ? "bg-white" : "bg-primary-100/30"}>
                            <td className="p-2 font-bold text-primary-800">{fila.m}</td>
                            <td className="p-2 text-primary-700">{fila.texto}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-primary-600 leading-relaxed">{ri.comparacion.conclusion}</p>
                </Section>

                {/* TPI Zaira */}
                <Section icon={BookOpen} title="Conexión con TPI — Perspectiva individual" delay={0.37}>
                  <div className="space-y-4">
                    {/* Cabeza del pescado */}
                    <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3">
                      <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Cabeza del pescado</p>
                      <p className="text-sm font-bold text-red-800 mb-2">{ri.tpiZaira.cabezaPescado.problema}</p>
                      <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 mb-2">
                        {ri.tpiZaira.cabezaPescado.esProblemaOSintoma}
                      </span>
                      <ul className="space-y-1 mt-2">
                        {ri.tpiZaira.cabezaPescado.evidencias.map((e, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-primary-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mapeo 6M */}
                    <div>
                      <p className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Mapeo de las 6M en S&M</p>
                      <div className="space-y-2">
                        {ri.tpiZaira.mapeado6M.map((item, i) => (
                          <div key={i} className="rounded-lg border-l-4 border-accent bg-white/80 p-3">
                            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{item.m}</p>
                            <p className="text-sm text-primary-700 leading-relaxed">{item.contenido}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Raíz y propuesta */}
                    <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                      <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1">
                        ★ M raíz — {ri.tpiZaira.raizYPropuesta.raiz}
                      </p>
                      <p className="text-sm text-primary-700 leading-relaxed mb-3">{ri.tpiZaira.raizYPropuesta.justificacion}</p>
                      <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                        <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">
                          ¿La propuesta ataca la raíz? {ri.tpiZaira.raizYPropuesta.atacaRaiz ? "✓ Sí" : "✗ No"}
                        </p>
                        <p className="text-sm text-primary-700 leading-relaxed">{ri.tpiZaira.raizYPropuesta.explicacion}</p>
                      </div>
                    </div>
                  </div>
                </Section>
              </>
            );
          })()}

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

                      {exercise.chart && <BreakEvenChart config={exercise.chart} onExpand={setExpandedChartConfig} />}

                      {exercise.scenarios && (
                        <div className="space-y-3 mt-3">
                          {exercise.scenarios.map((scenario) => (
                            <div key={scenario.name} className="rounded-lg border border-primary-200 bg-white p-3">
                              <h4 className="font-bold text-primary-800 mb-2">{scenario.name}</h4>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {scenario.data.map((datum) => (
                                  <span key={datum} className="badge badge-gray">{datum}</span>
                                ))}
                              </div>
                              <p className="text-sm text-primary-700">{scenario.result}</p>
                              {scenario.note && (
                                <p className="text-sm font-bold text-primary-900 mt-1">{scenario.note}</p>
                              )}
                              <BreakEvenChart config={scenario.chart} onExpand={setExpandedChartConfig} />
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

      {expandedChartConfig && (
        <div className="fixed inset-0 z-[60] bg-primary-950/70 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center">
          <div className="w-full max-w-6xl bg-white rounded-2xl border border-primary-200 shadow-card p-3 sm:p-5 relative">
            <button
              type="button"
              onClick={() => setExpandedChartConfig(null)}
              className="absolute top-3 right-3 inline-flex items-center gap-1 text-primary-500 hover:text-accent"
              aria-label="Cerrar modal de gráfica"
            >
              <X className="w-5 h-5" />
            </button>
            <p className="text-sm font-bold text-primary-800 mb-2">Vista ampliada del gráfico</p>
            <BreakEvenChart config={expandedChartConfig} expanded />
          </div>
        </div>
      )}
    </div>
  );
}