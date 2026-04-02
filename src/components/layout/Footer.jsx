import { Link } from 'react-router-dom';
import { team } from '../../data/teamData';

// SVG logo de pomelo rosado (mismo que Navbar)
function GrapefruitLogo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="#F9C74F" />
      <circle cx="24" cy="24" r="18" fill="#F4A261" />
      <circle cx="24" cy="24" r="14" fill="#F07A95" />
      <g stroke="#FDF6F0" strokeWidth="1.2" strokeLinecap="round" opacity="0.9">
        <line x1="24" y1="10" x2="24" y2="38" />
        <line x1="10" y1="24" x2="38" y2="24" />
        <line x1="14.1" y1="14.1" x2="33.9" y2="33.9" />
        <line x1="33.9" y1="14.1" x2="14.1" y2="33.9" />
      </g>
      <circle cx="24" cy="24" r="3" fill="#E8547A" opacity="0.8" />
      <circle cx="24" cy="24" r="1.5" fill="#FDF6F0" opacity="0.9" />
      <ellipse cx="19" cy="17" rx="4" ry="2.5" fill="white" opacity="0.25" transform="rotate(-30 19 17)" />
    </svg>
  );
}

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
    <footer className="bg-primary-200 border-t border-primary-300/60 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <GrapefruitLogo size={36} />
              </div>
              <span className="font-bold text-primary-800 text-lg">{team.name}</span>
            </Link>
            <p className="text-primary-600 text-sm leading-relaxed max-w-sm mb-4">
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
              <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-500 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-warm/50 group-hover:bg-accent flex-shrink-0 transition-colors duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-500 text-xs text-center sm:text-left">
            © {currentYear} · {team.name} · UTN FRRe · Ingeniería en Sistemas de Información
          </p>
          <p className="text-primary-400 text-xs">
            Portfolio académico — Gestión Gerencial 2026
          </p>
        </div>
      </div>
    </footer>
  );
}