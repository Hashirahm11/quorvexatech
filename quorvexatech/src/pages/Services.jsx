import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import usePageMeta from '../hooks/usePageMeta';
import { images } from '../config/images';
import { services, serviceNotes } from '../data/services';
import { serviceFaqs } from '../data/faqs';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ShowMoreButton from '../components/ui/ShowMoreButton';
import ProcessSteps from '../components/ui/ProcessSteps';
import FAQSection from '../components/ui/FAQSection';
import ConsultationCTA from '../components/ui/ConsultationCTA';
import ServiceCard from '../components/services/ServiceCard';
import ProjectBudget from '../components/contact/ProjectBudget';

const INITIAL = 6;
const STEP = 6;

export default function Services() {
  usePageMeta('Services', 'Business websites, e-commerce, landing pages, WordPress, Shopify, React.js, hosting and SSL setup, redesigns and maintenance from QuorvexaTech.');
  const [visible, setVisible] = useState(INITIAL);
  const total = services.length;
  const remaining = total - visible;

  return (
    <>
      <PageHero
        title="Website services for every stage of your business"
        description="Whether you need a first website, an online store or a fix for an existing site, we will recommend the right approach and build it properly."
        primaryCta={{ label: 'Get a Free Consultation', to: '/contact#consultation' }}
        secondaryCta={{ label: 'View Our Projects', to: '/projects' }}
        image={images.services}
        imageAlt="Code on a monitor representing website development services"
      />

      <section className="section-y" aria-labelledby="services-heading">
        <div className="container-page">
          <SectionHeading id="services-heading" title="What we can build and fix for you" />

          <p className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
            <FiInfo aria-hidden="true" className="mt-0.5 shrink-0 text-lg" />
            <span><strong>Good to know:</strong> {serviceNotes}</span>
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, visible).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {remaining > 0 && (
            <ShowMoreButton label="Show More Services" remaining={remaining} onClick={() => setVisible((v) => Math.min(v + STEP, total))} />
          )}
          {remaining <= 0 && total > INITIAL && (
            <ShowMoreButton expanded onClick={() => setVisible(INITIAL)} />
          )}
        </div>
      </section>

      <ProcessSteps title="How a project works" tinted />
      <ProjectBudget compact />
      <FAQSection faqs={serviceFaqs} description="Quick answers to common questions about working with us." />
      <div className="pt-16 sm:pt-20 lg:pt-24"><ConsultationCTA /></div>
    </>
  );
}
