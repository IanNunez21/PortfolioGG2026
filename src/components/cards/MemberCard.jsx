import { motion } from 'framer-motion';

/**
 * MemberCard — Card de integrante del equipo
 * Props:
 *   - member: objeto de teamData.js
 *   - index: number (para delay de animación)
 *   - expanded: boolean (muestra más info si true)
 */
export default function MemberCard({ member, index = 0, expanded = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card group hover:-translate-y-1 hover:border-primary-600 transition-all duration-300"
    >
      {/* Avatar */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-105 transition-transform duration-300`}
          aria-hidden="true"
        >
          <span className="text-white font-bold text-sm">{member.initials}</span>
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-white text-base leading-snug">{member.name}</h3>
          <p className="text-accent text-xs font-medium mt-0.5">{member.role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-primary-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {member.bio}
      </p>

      {/* Skills */}
      {expanded && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {member.skills.map((skill) => (
            <span key={skill} className="badge badge-blue text-xs">{skill}</span>
          ))}
        </div>
      )}

      {!expanded && (
        <div className="flex flex-wrap gap-1.5">
          {member.skills.slice(0, 2).map((skill) => (
            <span key={skill} className="badge badge-gray text-xs">{skill}</span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
