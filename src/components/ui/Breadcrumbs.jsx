import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumbs — Navegación contextual
 * Props:
 *   - items: Array<{ label: string, to?: string }>
 *     El último ítem no necesita 'to' (es la página actual)
 */
export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-primary-400 hover:text-white transition-colors duration-200"
            aria-label="Inicio"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5 text-primary-600" aria-hidden="true" />
              {isLast || !item.to ? (
                <span
                  className={`${isLast ? 'text-white font-medium' : 'text-primary-400'}`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-primary-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
