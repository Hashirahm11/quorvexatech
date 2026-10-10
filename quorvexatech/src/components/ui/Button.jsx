import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base';

const variants = {
  primary: 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-brand-700/30',
  secondary: 'border border-navy-900/15 bg-white text-navy-900 hover:border-brand-500 hover:text-brand-700',
  light: 'bg-white text-navy-900 hover:bg-brand-50',
  outlineLight: 'border border-white/30 text-white hover:bg-white/10',
  whatsapp: 'bg-emerald-600 text-white hover:bg-emerald-700',
};

/**
 * Renders a router <Link>, an external <a>, or a <button>
 * depending on the props passed (to / href / onClick).
 */
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>;
  if (href) {
    const external = /^https?:/i.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return <button type="button" className={classes} {...rest}>{children}</button>;
}
