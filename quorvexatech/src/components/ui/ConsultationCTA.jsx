import { FaWhatsapp } from 'react-icons/fa';
import Button from './Button';
import { getWhatsAppUrl } from '../../utils/links';

export default function ConsultationCTA({
  title = 'Ready to talk about your website?',
  description = 'Tell us about your business and what you need. We will reply with honest advice and suggest the best way to move forward. No obligation.',
}) {
  const whatsapp = getWhatsAppUrl();
  return (
    <section className="container-page pb-16 sm:pb-20 lg:pb-24" aria-labelledby="cta-heading">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-800 px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 id="cta-heading" className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contact#consultation" variant="light">Get a Free Consultation</Button>
            {whatsapp && (
              <Button href={whatsapp} variant="outlineLight">
                <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
