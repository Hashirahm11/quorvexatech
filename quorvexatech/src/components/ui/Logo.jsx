import { Link } from 'react-router-dom';
import siteConfig from '../../config/siteConfig';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-navy-900 text-lg font-extrabold text-white shadow-md"
      >
        Q
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        Quorvexa<span className={light ? 'text-brand-300' : 'text-brand-600'}>Tech</span>
      </span>
    </Link>
  );
}
