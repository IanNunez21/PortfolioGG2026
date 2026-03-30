/**
 * ToolBadge — Badge pill para herramienta, tecnología o metodología
 * Props:
 *   - name: string
 *   - variant: 'blue' | 'green' | 'purple' | 'gray' (default: 'blue')
 *   - size: 'sm' | 'md' (default: 'md')
 */
export default function ToolBadge({ name, variant = 'blue', size = 'md' }) {
  const variantClasses = {
    blue: 'bg-accent/15 text-accent-light border border-accent/20',
    green: 'bg-success/15 text-success-light border border-success/20',
    purple: 'bg-purple-500/15 text-purple-300 border border-purple-500/20',
    gray: 'bg-primary-800 text-primary-300 border border-primary-700',
    amber: 'bg-amber-500/15 text-amber-300 border border-amber-500/20',
    rose: 'bg-rose-500/15 text-rose-300 border border-rose-500/20',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${variantClasses[variant] || variantClasses.blue} ${sizeClasses[size]}`}
    >
      {name}
    </span>
  );
}
