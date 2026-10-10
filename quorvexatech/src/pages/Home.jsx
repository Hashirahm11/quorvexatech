import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import usePageMeta from '../hooks/usePageMeta';
import { images } from '../config/images';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { whyChoose } from '../data/process';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import SkillsGrid from '../components/ui/SkillsGrid';
import ProcessSteps from '../components/ui/ProcessSteps';
import ConsultationCTA from '../components/ui/ConsultationCTA';
import ServiceCard from '../components/services/ServiceCard';
import ProjectCard from '../components/projects/ProjectCard';

export default function Home() {
  usePageMeta(
    null,
    'QuorvexaTech builds professional, responsive websites for businesses: WordPress, Shopify, e-commerce, landing pages and custom React.js sites.',
  );
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <PageHero
        tall
        title="Professional websites that help your business grow online"
        description="QuorvexaTech designs and builds fast, responsive websites and online stores for businesses that want a clear, trustworthy presence on the web."
        primaryCta={{ label: 'Get a Free Consultation', to: '/contact#consultation' }}
        secondaryCta={{ label: 'Explore Our Projects', to: '/projects' }}
        chips={['WordPress', 'Shopify & e-commerce', 'React.js', 'Responsive design']}
        image={images.home}
        imageAlt="Developer writing website code on a laptop"
      />

      <section className="container-page py-14" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-center text-lg font-bold text-navy-700">
          Platforms and skills we work with
        </h2>
        <div className="mt-8"><SkillsGrid /></div>
      </section>

      <section className="section-y bg-slate-50" aria-labelledby="services-heading">
        <div className="container-page">
          <SectionHeading
            id="services-heading"
            title="Services built around your goals"
            description="From a single landing page to a full online store, here is how we can help."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} compact />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
              View all services <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y" aria-labelledby="featured-heading">
        <div className="container-page">
          <SectionHeading
            id="featured-heading"
            title="Featured projects"
            description="A selection of our work. Project details are managed in one data file, so this section updates as new work is added."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
              See the full portfolio <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-900 text-white" aria-labelledby="why-heading">
        <div className="container-page">
          <SectionHeading
            light
            id="why-heading"
            title="Why work with QuorvexaTech"
            description="We are a growing studio, and we earn trust through clear communication and careful work."
          />
          <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <li key={item.title} className="flex gap-4">
                <FiCheckCircle aria-hidden="true" className="mt-1 shrink-0 text-2xl text-brand-300" />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps tinted={false} />
      <ConsultationCTA />
    </>
  );
}
