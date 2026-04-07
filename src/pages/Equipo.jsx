import { motion } from 'framer-motion';
import { team } from '../data/teamData';

export default function Equipo() {

  return (
    <section className="min-h-[calc(100dvh-5rem)] flex flex-col items-center justify-center p-6 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm/12 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 w-full max-w-4xl mx-auto mt-8 md:mt-0"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-gradient leading-normal tracking-tight pb-2">
          El Equipo
        </h1>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-6xl mx-auto">
          {[
            { nombre: "Denise Pujalte", desc: "Gestión y diseño", img: "/denisep.png" },
            { nombre: "Denise Martinez", desc: "Gestión y planificación", img: "/denisem.png" },
            { nombre: "Zaira Rosin", desc: "Análisis y diseño", img: "/zaira.png" },
            { nombre: "Ian Nuñez", desc: "Planificación y análisis", img: "/ian.png" },
            { nombre: "Amilcar Aguirre", desc: "Análisis estratégico", img: "/amilcar.png" },
          ].map((persona, index) => (

            <div key={index} className="group text-center">

              {/* NOMBRE ARRIBA */}
              <h2 className="font-semibold mb-2">{persona.nombre}</h2>

              <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-gray-300 group-hover:border-primary-500 transition-all duration-300">
                <img
                  src={persona.img}
                  alt={persona.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* DESCRIPCIÓN ABAJO (HOVER) */}
              <div className="h-8 mt-2">
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {persona.desc}
                </p>
              </div>

            </div>

          ))}

        </div>

        <a
          href="#presentacion-video"
          className="block text-3xl sm:text-4xl md:text-5xl font-bold mt-20 mb-6 text-gradient hover:opacity-80 transition-opacity duration-200"
        >
          Presentación
        </a>

        {/* Video de presentación del equipo */}
        <div
          id="presentacion-video"
          className="mt-8 sm:mt-8 w-full aspect-video rounded-3xl overflow-hidden bg-primary-1000 shadow-lg"
        >
          <iframe
            width="100%"
            height="100%"
            src={team.videoUrl}
            title="Presentación equipo Pomelo Rosado"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
