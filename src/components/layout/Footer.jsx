import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { team } from '../../data/teamData';

const footerLinks = [
  {
    heading: 'Secciones',
    links: [
      { label: 'Inicio', to: '/' },
      { label: 'Equipo', to: '/equipo' },
      { label: 'RPA', to: '/rpa' },
      { label: 'Mapas Conceptuales', to: '/mapas' },
      { label: 'TPI', to: '/tpi' },
    ],
  },
  {
    heading: 'Desafíos',
    links: [
      { label: 'D3 — Gestión del Conocimiento', to: '/desafios/d3' },
      { label: 'D4 — Análisis de Procesos', to: '/desafios/d4' },
      { label: 'D5 — Automatización RPA', to: '/desafios/d5' },
      { label: 'D6 — Business Intelligence', to: '/desafios/d6' },
      { label: 'D7 — Transformación Digital', to: '/desafios/d7' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-primary-700/50 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-success flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">{team.name}</span>
            </Link>
            <p className="text-primary-400 text-sm leading-relaxed max-w-sm mb-4">
              {team.tagline}
            </p>
            <p className="text-primary-500 text-xs leading-relaxed max-w-sm">
              Portfolio digital académico desarrollado como parte de la cursada de Gestión Gerencial.
              Todos los contenidos son de carácter académico y educativo.
            </p>
            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              {['React', 'Vite', 'Tailwind CSS', 'React Router'].map((tech) => (
                <span key={tech} className="badge badge-gray text-xs">{tech}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-accent flex-shrink-0"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-500 text-xs text-center sm:text-left">
            © {currentYear} · {team.name} · UTN FRRe · Ingeniería en Sistemas de Información
          </p>
          <p className="text-primary-600 text-xs">
            Portfolio académico — Gestión Gerencial 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
