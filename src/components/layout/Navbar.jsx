import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { team } from '../../data/teamData';
import pomeroLogo from '../../assets/pomelo_rosado.png';

const navLinks = [
  { label: 'Equipo', to: '/equipo' },
  {
    label: 'Desafíos',
    to: '/desafios',
    children: [
      { label: 'Desafío 3', to: '/desafios/d3' },
      { label: 'Desafío 4', to: '/desafios/d4' },
      { label: 'Desafío 5', to: '/desafios/d5' },
      { label: 'Desafío 6', to: '/desafios/d6' },
      { label: 'Desafío 7', to: '/desafios/d7' },
    ],
  },
  { label: 'RPA', to: '/rpa' },
  { label: 'Mapas', to: '/mapas' },
  { label: 'TPI', to: '/tpi' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-primary-200 shadow-navbar'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group z-10"
            aria-label="Ir al inicio"
          >
            <div className="flex-shrink-0 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300 group-hover:scale-105">
              <img
                src={pomeroLogo}
                alt="Pomelo Rosado Logo"
                className="w-14 h-14 object-contain"
              />
            </div>
            <span className="font-bold text-lg text-primary-800 hidden sm:block leading-tight tracking-tight">
              {team.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className={`nav-link text-base flex items-center gap-1.5 px-4 ${
                      location.pathname.startsWith('/desafios') ? 'nav-link-active' : ''
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white border border-primary-200 rounded-xl shadow-card overflow-hidden"
                        role="menu"
                      >
                        <div className="p-1">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 text-sm rounded-lg transition-colors duration-150 font-medium ${
                                  isActive
                                    ? 'bg-blush-100 text-accent'
                                    : 'text-primary-600 hover:text-primary-900 hover:bg-surface-raised'
                                }`
                              }
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav-link text-base px-4 ${isActive ? 'nav-link-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-primary-500 hover:text-primary-800 hover:bg-surface-overlay transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-primary-200"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Menú móvil">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-blush-100 text-accent'
                          : 'text-primary-600 hover:text-primary-900 hover:bg-surface-overlay'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-primary-300 pl-4">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block py-2 text-xs font-medium transition-colors ${
                              isActive ? 'text-accent' : 'text-primary-400 hover:text-primary-700'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
