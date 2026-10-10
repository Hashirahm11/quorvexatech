import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div id="mobile-menu" className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
      <nav aria-label="Mobile navigation" className="container-page py-4">
        <ul className="space-y-1">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-semibold transition ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-navy-800 hover:bg-slate-50'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
          <Button to="/contact#consultation" onClick={onClose} className="w-full">Free Consultation</Button>
          <SocialLinks variant="light" className="justify-center" />
        </div>
      </nav>
    </div>
  );
}
