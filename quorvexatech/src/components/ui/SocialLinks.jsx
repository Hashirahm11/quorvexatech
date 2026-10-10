import {
  FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope,
} from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { getSocialItems } from '../../utils/links';

const icons = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  fiverr: SiFiverr,
  upwork: SiUpwork,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
};

const styles = {
  bar: {
    link: 'h-8 w-8 text-white/75 hover:bg-white/10 hover:text-white',
    off: 'h-8 w-8 text-white/30',
  },
  light: {
    link: 'h-10 w-10 bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white',
    off: 'h-10 w-10 bg-slate-100 text-slate-400',
  },
  dark: {
    link: 'h-10 w-10 bg-white/10 text-white hover:bg-brand-500',
    off: 'h-10 w-10 bg-white/5 text-white/35',
  },
};

/**
 * All social icons come from siteConfig via getSocialItems(), so every placement
 * on the site stays in sync. Unconfigured profiles render as disabled icons.
 * `compactOnMobile` hides the non-primary icons on small screens.
 */
export default function SocialLinks({ variant = 'light', compactOnMobile = false, className = '' }) {
  const s = styles[variant];
  return (
    <ul className={`flex flex-wrap items-center gap-1.5 ${className}`} aria-label="Social media and professional profiles">
      {getSocialItems().map((item) => {
        const Icon = icons[item.id];
        const hide = compactOnMobile && !item.primary ? 'hidden sm:inline-flex' : 'inline-flex';
        const shared = `${hide} items-center justify-center rounded-full text-[15px] transition`;
        const isExternal = item.id !== 'email';
        return (
          <li key={item.id}>
            {item.url ? (
              <a
                href={item.url}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={isExternal ? `${item.label} (opens in a new tab)` : 'Send us an email'}
                title={item.label}
                className={`${shared} ${s.link}`}
              >
                <Icon aria-hidden="true" />
              </a>
            ) : (
              <span
                role="img"
                aria-label={`${item.label} link not configured yet`}
                title={`${item.label}: add the link in src/config/siteConfig.js`}
                className={`${shared} ${s.off} cursor-not-allowed`}
              >
                <Icon aria-hidden="true" />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
