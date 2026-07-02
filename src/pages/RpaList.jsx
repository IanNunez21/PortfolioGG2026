import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const rpaMembers = [
  { id: 1, name: "Ian Nuñez" },
  { id: 2, name: "Zaira Rosin" },
  { id: 3, name: "Denise Pujalte" },
  { id: 4, name: "Denise Martinez" },
  { id: 5, name: "Amilcar Aguirre" },
];

export default function RpaList() {
  return (
    <div className="min-h-[calc(100dvh-5rem)] pt-6 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-warm/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-primary-800 leading-tight tracking-tight drop-shadow-sm font-display">
            Rutas Personales de Aprendizaje
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-accent/30 rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-accent to-warm"></div>
            <div className="w-12 h-1 bg-warm/30 rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary-600 max-w-3xl leading-relaxed mx-auto font-medium">
            El recorrido individual de cada integrante a lo largo de Gestión Gerencial.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {rpaMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between items-center text-center h-full group relative overflow-hidden">
                <div className="py-2 w-full flex flex-col items-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-850 tracking-tight group-hover:text-accent transition-colors duration-200 font-display">
                    {member.name}
                  </h2>
                  
                  {[1, 2, 3, 4].includes(member.id) && (
                    <>
                      {/* Vista previa especial de la infografía */}
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-primary-100 bg-primary-50/50 my-4 group-hover:border-primary-300 transition-all duration-300">
                        <img
                          src={
                            member.id === 1
                              ? "/rpa-infografia-ian.png"
                              : member.id === 2
                              ? "/rpa-infografia-zaira.png"
                              : member.id === 3
                              ? "/rpa-infografia-denise.png"
                              : "/rpa-infografia-martinez.jpg"
                          }
                          alt={`Previsualización RPA de ${member.name}`}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                      {/* Breve texto que resume la RPA */}
                      <p className="text-primary-650 text-sm leading-relaxed mb-4 text-center">
                        {member.id === 1 
                          ? "Fortalecer competencias de gestión de proyectos tecnológicos, la incorporación de metodologías ágiles y herramientas de planificación estratégica."
                          : member.id === 2
                          ? "Desarrollar expertise en diseño de experiencias de usuario y modelado de procesos, integrando la visión humana con la tecnología."
                          : member.id === 3
                          ? "Mejorar capacidades de gestión del conocimiento organizacional y producción de documentación técnica de alto nivel como evidencia del trabajo del equipo."
                          : "Consolidar una visión integral del rol del Ingeniero en Sistemas, vinculando la ingeniería con la dimensión humana, ética y gerencial."}
                      </p>
                    </>
                  )}
                </div>

                {/* Yellow Button */}
                <div className="w-full pt-4 mt-auto">
                  <Link
                    to={`/rpa/${member.id}`}
                    className="w-full justify-center inline-flex items-center gap-2 px-5 py-3.5 bg-citrus hover:bg-citrus-dark text-primary-950 font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-center cursor-pointer border border-citrus-dark/20 text-sm sm:text-base animate-in"
                  >
                    <span>{[1, 2, 3, 4].includes(member.id) ? 'Ver RPA' : 'Ver documento'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
