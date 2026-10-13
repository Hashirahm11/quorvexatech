import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl } from '../../utils/links';
import Reveal from './Reveal';

export default function FinalCTA() {
  const whatsapp = getWhatsAppUrl();
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#10172F] via-[#2A2470] to-[#8157F5] py-20 text-white sm:py-24 lg:py-32" aria-labelledby="final-heading">
      <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full opacity-60" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" fill="none">
        <circle cx="1020" cy="110" r="190" stroke="#8FE3C0" strokeOpacity="0.35" className="qx-dash" />
        <circle cx="1020" cy="110" r="120" stroke="#FF8066" strokeOpacity="0.5" />
        <rect x="90" y="300" width="150" height="150" rx="34" stroke="#FFFFFF" strokeOpacity="0.2" transform="rotate(18 165 375)" />
        <path d="M0 440 C 250 360, 420 500, 700 420 S 1050 330, 1200 380" stroke="#FF8066" strokeOpacity="0.4" className="qx-dash" />
        <circle cx="700" cy="420" r="6" fill="#8FE3C0" /><circle cx="250" cy="395" r="5" fill="#FF8066" />
      </svg>
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <h2 id="final-heading" className="text-4xl font-extrabold leading-[1.08] sm:text-6xl">Your next website should do more than <span className="text-[#8FE3C0]">exist.</span></h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">Tell us about your goals and we will help you find the right solution, whether that is a first website, a store or a rebuild.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact#consultation" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#10172F] transition hover:bg-[#8FE3C0]">
              Start a Project <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
            </Link>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10">
                <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
