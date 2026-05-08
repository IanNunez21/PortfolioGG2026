import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { challenges } from '../data/challengesData';
 
export default function Desafios() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />
 
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-gradient">Desafíos</h1>
          <p className="text-primary-600 text-lg">Gestión Gerencial · UTN FRRe · 2026</p>
        </motion.div>
 
        <div className="flex flex-col gap-4">
          {challenges.map((challenge, i) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                to={`/desafios/${challenge.id}`}
                className="group block bg-white/70 hover:bg-white border border-primary-200 hover:border-accent/40 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="badge badge-blue text-xs font-bold">{challenge.number}</span>
                      <span className="text-xs text-primary-400 font-medium">Gestión Gerencial</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-primary-800 mb-1 group-hover:text-accent transition-colors duration-200">
                      {challenge.title}
                    </h2>
                    <p className="text-primary-500 text-sm leading-relaxed line-clamp-2">
                      {challenge.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {challenge.tools.slice(0, 4).map((tool) => (
                        <span key={tool} className="badge badge-gray">{tool}</span>
                      ))}
                      {challenge.tools.length > 4 && (
                        <span className="badge badge-gray">+{challenge.tools.length - 4}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blush-100 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-200 text-accent">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}