import { Link } from 'react-router-dom';
import siteConfig from '../../config/siteConfig';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="inline-flex min-w-0 items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <img
        src={siteConfig.logo}
        onError={(event) => { event.currentTarget.src = '/favicon.svg'; }}
        alt=""
        aria-hidden="true"
        className="h-12 w-12 shrink-0 rounded-xl object-contain"
      />
      <span className={`whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-xl ${light ? 'text-white' : 'text-navy-900'}`}>
        Quorvexa<span className={light ? 'text-brand-300' : 'text-brand-600'}>Tech</span>
      </span>
    </Link>
  );
}
