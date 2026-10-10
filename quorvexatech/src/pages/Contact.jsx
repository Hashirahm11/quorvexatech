import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import usePageMeta from '../hooks/usePageMeta';
import siteConfig from '../config/siteConfig';
import { images } from '../config/images';
import { getEmailUrl, getWhatsAppUrl } from '../utils/links';
import { serviceOptions } from '../data/services';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import SocialLinks from '../components/ui/SocialLinks';
import MapEmbed from '../components/ui/MapEmbed';
import ContactForm from '../components/contact/ContactForm';
import ProjectBudget from '../components/contact/ProjectBudget';

export default function Contact() {
  usePageMeta('Contact', 'Contact QuorvexaTech to discuss your website project or book a free consultation. Reach us by form, WhatsApp or email.');
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service');

  // Only accept a service value that exists in our own list
  const [prefill, setPrefill] = useState(() =>
    requestedService && serviceOptions.includes(requestedService) ? { service: requestedService } : null,
  );

  const scrollToForm = () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const requestConsultation = () => {
    setPrefill({ service: 'Free Consultation', _nonce: Date.now() });
    scrollToForm();
  };

  const applyBudget = useCallback((data) => {
    setPrefill(data);
    scrollToForm();
  }, []);

  const whatsapp = getWhatsAppUrl();
  const email = getEmailUrl();

  return (
    <>
      <PageHero
        title="Let's talk about your website"
        description="Tell us what you are planning, and we will reply with honest advice and a clear next step. Everyone is welcome, from first-time site owners to teams replacing an old website."
        primaryCta={{ label: 'Request a Free Consultation', onClick: requestConsultation }}
        secondaryCta={whatsapp ? { label: 'Chat on WhatsApp', href: whatsapp } : undefined}
        image={images.contact}
        imageAlt="Two people discussing a project over a laptop"
      />

      <section id="consultation" className="container-page scroll-mt-24 section-y" aria-labelledby="consultation-heading">
        <div className="grid items-center gap-8 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-soft lg:grid-cols-[1fr_auto] lg:p-12">
          <div>
            <h2 id="consultation-heading" className="text-3xl font-extrabold text-navy-900">Free consultation</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-navy-600">
              Not sure where to start? Book a free consultation. We will talk through your goals, suggest a suitable platform and explain what a realistic scope and budget could look like. There is no obligation.
            </p>
          </div>
          <Button onClick={requestConsultation}><FiCalendar aria-hidden="true" /> Request a Free Consultation</Button>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-20 lg:pb-24" aria-label="Contact form and details">
        <div className="grid gap-10 lg:grid-cols-5">
          <div id="contact-form" className="scroll-mt-28 lg:col-span-3">
            <ContactForm prefill={prefill} />
          </div>

          <aside className="space-y-6 lg:col-span-2" aria-label="Other ways to reach us">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
              <h2 className="text-xl font-bold text-navy-900">Prefer to chat?</h2>
              <div className="mt-5 space-y-3">
                {whatsapp ? (
                  <Button href={whatsapp} variant="whatsapp" className="w-full"><FaWhatsapp aria-hidden="true" /> Chat on WhatsApp</Button>
                ) : (
                  <p className="rounded-xl bg-slate-50 p-4 text-sm text-navy-600">WhatsApp contact coming soon. Add your number in <code className="rounded bg-white px-1 text-xs">siteConfig.js</code>.</p>
                )}
                {email ? (
                  <Button href={email} variant="secondary" className="w-full"><FaEnvelope aria-hidden="true" /> {siteConfig.email}</Button>
                ) : (
                  <p className="rounded-xl bg-slate-50 p-4 text-sm text-navy-600">Email address coming soon.</p>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
              <h2 className="text-xl font-bold text-navy-900">Find us online</h2>
              <p className="mt-2 text-sm text-navy-600">Social profiles and freelancing pages.</p>
              <SocialLinks variant="light" className="mt-4" />
            </div>
          </aside>
        </div>
      </section>

      <ProjectBudget onApply={applyBudget} />
      <MapEmbed />
    </>
  );
}
