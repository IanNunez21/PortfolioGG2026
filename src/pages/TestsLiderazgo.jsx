import { motion } from 'framer-motion';
import { ArrowLeft, User, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  { nombre: "Denise Pujalte", role: "Gestión y diseño", img: "/denisep.png", testImg: "/test-denisep.png", color: "text-rose-500 border-rose-200 bg-rose-50/50" },
  { nombre: "Denise Martinez", role: "Gestión y planificación", img: "/denisem.png", testImg: "/test-denisem.png", color: "text-orange-500 border-orange-200 bg-orange-50/50" },
  { nombre: "Zaira Rosin", role: "Análisis y diseño", img: "/zaira.png", testImg: "/test-zaira.png", color: "text-pink-500 border-pink-200 bg-pink-50/50" },
  { nombre: "Ian Nuñez", role: "Planificación y análisis", img: "/ian.png", testImg: "/test-ian.png", color: "text-red-500 border-red-200 bg-red-50/50" },
  { nombre: "Amilcar Aguirre", role: "Análisis estratégico", img: "/amilcar.png", testImg: "/test-amilcar.png", color: "text-amber-500 border-amber-200 bg-amber-50/50" },
];

export default function TestsLiderazgo() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] pt-6 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="w-full mb-8 -mt-2">
            <Link
              to="/actividades"
              className="inline-flex items-center text-primary-600 hover:text-accent font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a Actividades
            </Link>
          </div>
          <div className="flex flex-col items-center text-center relative z-10">
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-5 py-2 rounded-full bg-white shadow-sm border border-primary-100 mb-6"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-accent mr-3 animate-pulse"></span>
              <span className="text-xs font-black text-accent uppercase tracking-widest">El Equipo en Acción</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-800 leading-tight tracking-tight drop-shadow-sm">
              Perfiles de Liderazgo <br className="hidden sm:block"/>
              <span className="text-gradient">¿Quiénes somos?</span>
            </h1>
            
            {/* Aesthetic Divider */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-12 h-1 bg-accent/30 rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-accent to-warm"></div>
              <div className="w-12 h-1 bg-warm/30 rounded-full"></div>
            </div>
            
            <p className="text-lg md:text-xl text-primary-600 max-w-2xl leading-relaxed mx-auto font-medium">
              Exploramos nuestras capacidades para potenciar el éxito colectivo. Aquí presentamos el análisis de liderazgo de nuestro equipo.
            </p>
          </div>
        </motion.div>

        {/* Team Results Grid */}
        <div className="space-y-16 mt-16 pb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/60 shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Massive background text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-black text-primary-100/30 whitespace-nowrap pointer-events-none select-none z-0 transition-transform duration-1000 group-hover:scale-105">
                {member.nombre.split(' ')[0]}
              </div>

              {/* Accent shapes */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none transition-colors duration-700 group-hover:bg-accent/20" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-warm/15 rounded-full blur-3xl pointer-events-none transition-colors duration-700 group-hover:bg-warm/25" />

              {/* Profile Section */}
              <div className={`md:w-5/12 flex flex-col items-center text-center relative z-10 ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} w-full`}>
                <div className="relative mb-5">
                  {/* Decorator ring */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent to-warm rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 scale-110" />
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={member.img}
                      alt={member.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-800 mb-3 drop-shadow-sm leading-tight">
                  {member.nombre}
                </h3>
                <div className="inline-flex">
                  <span className={`px-5 py-2 rounded-2xl font-extrabold text-sm uppercase tracking-widest border shadow-sm ${member.color}`}>
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Test Result Section */}
              <div className="md:w-7/12 w-full flex justify-center items-center relative z-10">
                <div className={`relative transition-all duration-700 ease-out group-hover:rotate-0 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:scale-[1.03] group-hover:-translate-y-2`}>
                  {/* Floating effect shadow */}
                  <div className="absolute -inset-2 bg-black/10 rounded-[2rem] blur-xl -z-10 translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <img
                    src={member.testImg}
                    alt={`Resultados del test de liderazgo de ${member.nombre}`}
                    className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] h-auto object-contain rounded-2xl border-[6px] border-white shadow-2xl relative z-10 bg-primary-50"
                  />

                  {/* Small decorative pin/tape look - just an aesthetic detail */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm z-20 border border-white rotate-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
