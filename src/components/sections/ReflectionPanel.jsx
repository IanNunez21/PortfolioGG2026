import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, AlertTriangle, TrendingUp, Award, ChevronRight } from 'lucide-react';

const tabs = [
  {
    id: 'learned',
    label: 'Aprendizajes',
    icon: Lightbulb,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgColor: 'bg-amber-500/10',
  },
  {
    id: 'difficulties',
    label: 'Dificultades',
    icon: AlertTriangle,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/40',
    bgColor: 'bg-rose-500/10',
  },
  {
    id: 'improvements',
    label: 'Mejoras',
    icon: TrendingUp,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-500/10',
  },
  {
    id: 'competencies',
    label: 'Competencias',
    icon: Award,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    bgColor: 'bg-blue-500/10',
  },
];

/**
 * ReflectionPanel — Panel con tabs para la reflexión del equipo
 * Props:
 *   - reflection: objeto { learned, difficulties, improvements, competencies }
 */
export default function ReflectionPanel({ reflection }) {
  const [activeTab, setActiveTab] = useState('learned');

  const activeConfig = tabs.find((t) => t.id === activeTab);
  const content = reflection[activeTab];

  return (
    <div className="card border border-primary-600">
      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-6"
        role="tablist"
        aria-label="Secciones de reflexión"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? `${tab.bgColor} ${tab.color} border ${tab.borderColor}`
                  : 'text-primary-400 hover:text-white hover:bg-primary-800'
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Panel content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
          className={`rounded-xl p-5 border ${activeConfig.borderColor} ${activeConfig.bgColor}`}
        >
          {activeTab === 'competencies' && Array.isArray(content) ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white"
                >
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${activeConfig.color}`} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className={`text-sm leading-relaxed ${activeConfig.color.replace('text-', 'text-').replace('-400', '-100')}`}>
              {content}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
