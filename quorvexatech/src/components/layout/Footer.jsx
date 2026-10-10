import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import siteConfig from '../../config/siteConfig';
import { navLinks } from '../../data/navigation';
import { services } from '../../data/services';
import { getEmailUrl, getWhatsAppUrl } from '../../utils/links';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

const linkClass = 'text-white/70 transition hover:text-white';

export default function Footer() {
  const emailUrl = getEmailUrl();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
          <SocialLinks variant="dark" className="mt-6" />
        </div>

        <nav aria-label="Footer quick links" className="lg:col-span-2">
          <h2 className="text-base font-bold">Quick links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map(({ label, to }) => (
              <li key={to}><Link to={to} className={linkClass}>{label}</Link></li>
            ))}
            <li><Link to="/privacy" className={linkClass}>Privacy Policy</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer services" className="lg:col-span-3">
          <h2 className="text-base font-bold">Main services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to={`/services#${s.slug}`} className={linkClass}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-base font-bold">Get in touch</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2.5 text-white/70">
              <FaEnvelope aria-hidden="true" className="shrink-0 text-brand-300" />
              {emailUrl ? <a href={emailUrl} className={linkClass}>{siteConfig.email}</a> : <span>Email address coming soon</span>}
            </li>
            <li className="flex items-center gap-2.5 text-white/70">
              <FaWhatsapp aria-hidden="true" className="shrink-0 text-brand-300" />
              {whatsappUrl ? (
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>Message us on WhatsApp</a>
              ) : (
                <span>WhatsApp number coming soon</span>
              )}
            </li>
          </ul>
          <Button to="/contact#consultation" className="mt-6 !py-2.5">Free Consultation</Button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
