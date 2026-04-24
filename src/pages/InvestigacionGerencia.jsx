import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Brain, Users, Lightbulb, Target, Layers, Briefcase, Activity, Globe, Compass, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function InvestigacionGerencia() {
  return (
    <div className="min-h-[calc(100dvh-5rem)] pt-6 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-warm/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full space-y-24">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
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
          
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-primary-100 mb-6"
            >
              <BookOpen className="w-4 h-4 text-accent mr-2" />
              <span className="text-xs font-black text-accent uppercase tracking-widest">Actividad de Investigación</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-800 leading-tight tracking-tight drop-shadow-sm">
              La <span className="text-gradient">Gerencia</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-12 h-1 bg-accent/30 rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-accent to-warm"></div>
              <div className="w-12 h-1 bg-warm/30 rounded-full"></div>
            </div>
            
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl leading-relaxed mx-auto font-medium">
              Análisis teórico sobre los conceptos fundamentales de la gerencia, habilidades administrativas, roles y la evolución del liderazgo organizacional.
            </p>
          </div>
        </motion.div>

        {/* 1. Habilidades de Katz */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Habilidades Administrativas según Katz</h2>
            <p className="text-primary-600 max-w-2xl mx-auto">Tres habilidades fundamentales para el desempeño administrativo exitoso en los distintos niveles de la organización.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Técnicas", icon: Target, color: "text-blue-500", bg: "bg-blue-50", desc: "Capacidad para utilizar conocimientos, métodos y herramientas propias de un campo especializado. Relacionadas con el hacer y claves en niveles operativos." },
              { title: "Humanas", icon: Users, color: "text-accent", bg: "bg-blush-100", desc: "Capacidad para trabajar con personas, comprenderlas, motivarlas y guiarlas. Fundamentales en todos los niveles, especialmente en el nivel medio." },
              { title: "Conceptuales", icon: Brain, color: "text-warm", bg: "bg-warm/20", desc: "Capacidad para comprender la organización como un todo y tomar decisiones estratégicas. Predominan en la alta gerencia." }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-primary-100 shadow-card hover:shadow-glow transition-all duration-300">
                <div className={`w-14 h-14 ${skill.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <skill.icon className={`w-7 h-7 ${skill.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{skill.title}</h3>
                <p className="text-primary-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 2. Papeles de Mintzberg */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-[2.5rem] border border-primary-100 shadow-sm"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Layers className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-primary-800 mb-10 text-center">Papeles del Administrador según Mintzberg</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { category: "Interpersonales", icon: Users, items: ["Representación", "Liderazgo", "Enlace o vínculo"], desc: "Interacción con personas dentro y fuera de la organización." },
                { category: "Informativos", icon: Activity, items: ["Monitor", "Difusor", "Portavoz"], desc: "Búsqueda, procesamiento y transmisión de información relevante." },
                { category: "Decisorios", icon: Briefcase, items: ["Emprendedor", "Solucionador", "Asignador", "Negociador"], desc: "Toma de decisiones y resolución de conflictos." }
              ].map((role, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-primary-50 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-50 rounded-xl">
                      <role.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-800">{role.category}</h3>
                  </div>
                  <p className="text-sm text-primary-500 mb-5">{role.desc}</p>
                  <ul className="space-y-3">
                    {role.items.map((item, i) => (
                      <li key={i} className="flex items-center text-primary-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 3. Proceso Administrativo y Tipos de Gerentes */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm">
              <Compass className="w-4 h-4 mr-2" />
              Proceso Administrativo
            </div>
            <h2 className="text-3xl font-bold text-primary-800">La Actividad Gerencial</h2>
            <p className="text-primary-600 text-lg">
              El gerente coordina recursos mediante un proceso continuo y flexible, adaptándose a los cambios y tomando decisiones para alcanzar los objetivos organizacionales.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Planear', 'Organizar', 'Dirigir', 'Controlar'].map((step, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-primary-100 flex items-center justify-center font-bold text-primary-700">
                  {step}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-primary-100 shadow-card">
            <h3 className="text-2xl font-bold text-primary-800 mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-warm" />
              Tipos de Gerentes
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-primary-800 border-b border-primary-100 pb-2 mb-3">Según Nivel Administrativo</h4>
                <ul className="space-y-2 text-primary-600 text-sm">
                  <li><strong className="text-primary-700">Primera línea:</strong> Supervisan directamente a operativos.</li>
                  <li><strong className="text-primary-700">Medios:</strong> Enlace entre alta dirección y operativos.</li>
                  <li><strong className="text-primary-700">Alta gerencia:</strong> Conducción general y estratégica.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-800 border-b border-primary-100 pb-2 mb-3">Según Alcance</h4>
                <ul className="space-y-2 text-primary-600 text-sm">
                  <li><strong className="text-primary-700">Funcionales:</strong> Responsables de un área específica.</li>
                  <li><strong className="text-primary-700">Generales:</strong> Responsables de una unidad completa.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Liderazgo */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Teorías y Perspectivas del Liderazgo</h2>
            <p className="text-primary-600">El liderazgo es fundamental para conducir a las personas dentro de la organización, analizado desde distintas ópticas a lo largo del tiempo.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 border-t-4 border-t-rose-400">
              <h3 className="font-bold text-lg text-primary-800 mb-3">Teorías de Rasgos</h3>
              <p className="text-sm text-primary-600">El líder nace con características innatas (inteligencia, carisma). Criticada por no considerar el contexto ni el grupo.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 border-t-4 border-t-amber-400">
              <h3 className="font-bold text-lg text-primary-800 mb-3">Estilos de Liderazgo</h3>
              <p className="text-sm text-primary-600">Enfocada en el comportamiento: Autocrático (impone), Liberal/Laissez-faire (delega total) y Democrático (participativo).</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 border-t-4 border-t-emerald-400">
              <h3 className="font-bold text-lg text-primary-800 mb-3">Teorías Situacionales</h3>
              <p className="text-sm text-primary-600">No hay un estilo único eficaz. El liderazgo debe adaptarse al líder, los seguidores, la tarea y la situación específica.</p>
            </div>
          </div>
        </motion.section>

        {/* 5. Reflexiones */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-gradient-to-tr from-rose-50/50 via-white to-amber-50/50 rounded-[2.5rem] p-8 md:p-12 border border-primary-100 shadow-card overflow-hidden"
        >
          {/* Background patterns */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-warm/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-800 mb-4 tracking-tight">Reflexiones Clave</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-warm rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  q: "El administrador como agente de cambio", 
                  a: "En entornos dinámicos, el gerente no solo mantiene el funcionamiento, sino que debe identificar oportunidades, promover la innovación y adaptar la organización a nuevas condiciones para garantizar su crecimiento sostenible.",
                  icon: Lightbulb,
                  color: "text-amber-500",
                  bg: "bg-amber-100"
                },
                { 
                  q: "Valores y Ética", 
                  a: "Las decisiones gerenciales impactan en múltiples actores. Un gerente ético no solo busca resultados económicos, sino que considera el bienestar de las personas y la sociedad, generando confianza y cultura responsable.",
                  icon: Shield,
                  color: "text-blue-500",
                  bg: "bg-blue-100"
                },
                { 
                  q: "Desempeño Organizacional", 
                  a: "Un buen desempeño gerencial impulsa la eficiencia (uso óptimo de recursos), la eficacia (logro de objetivos) y, por ende, la efectividad global de la organización.",
                  icon: Award,
                  color: "text-emerald-500",
                  bg: "bg-emerald-100"
                },
                { 
                  q: "El gerente del siglo XXI", 
                  a: "Debe ser flexible, estratégico e innovador. Abandona el modelo puramente autoritario para centrarse en la comunicación, la empatía, la tecnología y la capacidad de liderar en el cambio constante.",
                  icon: Globe,
                  color: "text-rose-500",
                  bg: "bg-rose-100"
                }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-primary-50 shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 leading-tight">{item.q}</h3>
                  </div>
                  <p className="text-primary-600 leading-relaxed flex-grow">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
