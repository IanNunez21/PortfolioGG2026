import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import MemberCard from '../components/cards/MemberCard';
import { team, members } from '../data/teamData';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

export default function Equipo() {
  return (
    <>
      <PageHeader
        title="Nuestro Equipo"
        subtitle={team.tagline}
        badge="Gestión Pomelo Rosado"
        gradient="from-accent to-success"
      />

      <div className="section pt-0">
        <div className="container-content space-y-16">
          {/* Descripción del equipo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card border-accent/30 max-w-3xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-success flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-white text-lg mb-2">Sobre el equipo</h2>
                <p className="text-primary-300 text-base leading-relaxed">{team.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Cards de integrantes */}
          <div>
            <SectionTitle
              title="Integrantes"
              subtitle="Cinco estudiantes, cinco perspectivas, un objetivo en común."
              badge={`${members.length} integrantes`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, i) => (
                <MemberCard key={member.id} member={member} index={i} expanded />
              ))}
            </div>
          </div>

          {/* Info institucional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card border-primary-600 flex items-start gap-4"
            >
              <GraduationCap className="w-8 h-8 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white mb-1">Carrera</h3>
                <p className="text-primary-400 text-sm">Ingeniería en Sistemas de Información</p>
                <p className="text-primary-500 text-xs mt-1">UTN — Facultad Regional Resistencia</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="card border-primary-600 flex items-start gap-4"
            >
              <BookOpen className="w-8 h-8 text-success flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white mb-1">Materia</h3>
                <p className="text-primary-400 text-sm">Gestión Gerencial</p>
                <p className="text-primary-500 text-xs mt-1">Cursada 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
