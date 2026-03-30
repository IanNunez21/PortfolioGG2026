import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import RpaCard from '../components/cards/RpaCard';
import { rpaData } from '../data/rpaData';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Sparkles } from 'lucide-react';

export default function Rpa() {
  return (
    <>
      <PageHeader
        title="Rutas Personales de Aprendizaje"
        subtitle="El crecimiento individual de cada integrante a lo largo de la cursada de Gestión Gerencial."
        badge="RPA"
        gradient="from-emerald-400 to-teal-500"
      />

      <div className="section pt-0">
        <div className="container-content space-y-12">
          {/* Explicación del concepto */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: 'Objetivo Personal',
                desc: 'Cada integrante definió un objetivo de aprendizaje propio al inicio de la cursada.',
                color: 'text-accent',
              },
              {
                icon: Sparkles,
                title: 'Habilidades Desarrolladas',
                desc: 'A través de los desafíos prácticos, cada uno potenció sus competencias individuales.',
                color: 'text-success',
              },
              {
                icon: TrendingUp,
                title: 'Evolución y Reflexión',
                desc: 'Al final del recorrido, cada integrante reflexiona sobre su crecimiento y los próximos pasos.',
                color: 'text-amber-400',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card"
                >
                  <Icon className={`w-7 h-7 ${item.color} mb-3`} aria-hidden="true" />
                  <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-primary-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Cards de cada integrante */}
          <div>
            <SectionTitle
              title="RPA por Integrante"
              subtitle="Hacé clic en cada tarjeta para ver el detalle completo de cada ruta de aprendizaje."
              badge="5 integrantes"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {rpaData.map((rpa, i) => (
                <RpaCard key={rpa.id} rpa={rpa} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
