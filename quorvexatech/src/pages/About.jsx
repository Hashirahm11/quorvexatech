import { FiTarget, FiEye, FiHeart, FiMessageCircle, FiAward, FiExternalLink } from 'react-icons/fi';
import usePageMeta from '../hooks/usePageMeta';
import siteConfig from '../config/siteConfig';
import { images } from '../config/images';
import { isConfigured } from '../utils/links';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import SkillsGrid from '../components/ui/SkillsGrid';
import SocialLinks from '../components/ui/SocialLinks';
import ProcessSteps from '../components/ui/ProcessSteps';
import ConsultationCTA from '../components/ui/ConsultationCTA';
import ImageWithFallback from '../components/ui/ImageWithFallback';
import BrowserMockup from '../components/ui/BrowserMockup';
import Button from '../components/ui/Button';

const values = [
  { icon: FiMessageCircle, title: 'Clear communication', text: 'Plain language, honest timelines and no surprises.' },
  { icon: FiAward, title: 'Quality craft', text: 'Clean code, tidy layouts and details that work on every device.' },
  { icon: FiHeart, title: 'Client-first thinking', text: 'We build for your customers and your goals, not for our portfolio.' },
  { icon: FiEye, title: 'Honesty', text: 'We tell you what is realistic, what costs extra and what you do not need.' },
];

export default function About() {
  usePageMeta('About', 'Learn about QuorvexaTech, a growing web development studio focused on modern, responsive websites built with WordPress, Shopify and React.js.');
  const portfolio = siteConfig.developerPortfolio;
  const portfolioReady = isConfigured(portfolio.url);

  return (
    <>
      <PageHero
        title="A web studio focused on modern, responsive websites"
        description="QuorvexaTech is a developing web development studio. We help businesses and individuals get online with websites that look professional and work well on every screen."
        primaryCta={{ label: 'Discuss Your Project', to: '/contact#consultation' }}
        secondaryCta={{ label: 'See Our Services', to: '/services' }}
        image={images.about}
        imageAlt="Web designer and developer collaborating at a desk"
      />

      <section className="section-y" aria-labelledby="intro-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 id="intro-heading" className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Who we are</h2>
            <p className="mt-5 leading-relaxed text-navy-600">
              QuorvexaTech is a web development and digital solutions studio. We build business websites, online stores, landing pages and custom React.js projects, using tools such as WordPress, Elementor, WooCommerce and Shopify where they make sense.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              We are a growing studio, and we like it that way: you work directly with the people building your site, and every project gets real attention.
            </p>
            <h3 className="mt-10 text-xl font-bold text-navy-900">Our story</h3>
            <p className="mt-3 leading-relaxed text-navy-600">
              Too many small business websites are slow, hard to use on a phone, or impossible to update. We started QuorvexaTech to build the opposite: modern, responsive websites that are clear for visitors and manageable for owners.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <ImageWithFallback
              src={images.story}
              alt="Laptop screen showing website code"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full object-cover"
              fallback={<BrowserMockup className="aspect-[3/2] w-full" />}
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50" aria-labelledby="mission-heading">
        <div className="container-page">
          <SectionHeading id="mission-heading" title="Mission and values" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <FiTarget aria-hidden="true" className="text-3xl text-brand-600" />
              <h3 className="mt-4 text-xl font-bold text-navy-900">Our mission</h3>
              <p className="mt-3 leading-relaxed text-navy-600">
                To help businesses build a professional online presence with websites that are fast, responsive and easy to trust.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <FiEye aria-hidden="true" className="text-3xl text-brand-600" />
              <h3 className="mt-4 text-xl font-bold text-navy-900">Our approach</h3>
              <p className="mt-3 leading-relaxed text-navy-600">
                Choose the right platform for the job, keep the scope clear, and build something you can confidently launch and manage.
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <Icon aria-hidden="true" className="text-2xl text-brand-600" />
                <h3 className="mt-3 font-bold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y" aria-labelledby="skills-heading">
        <div className="container-page">
          <SectionHeading id="skills-heading" title="Skills and technology stack" description="The tools we use to build and launch your website." />
          <div className="mt-12"><SkillsGrid detailed /></div>
        </div>
      </section>

      <ProcessSteps title="Our development process" />

      <section className="section-y" aria-labelledby="profiles-heading">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft sm:p-12">
            <SectionHeading id="profiles-heading" title="See the developer's work" description="Browse the developer portfolio and professional profiles for more examples and background." />
            <div className="mt-8 flex flex-col items-center gap-6">
              {portfolioReady ? (
                <Button href={portfolio.url}>{portfolio.label} <FiExternalLink aria-hidden="true" /></Button>
              ) : (
                <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-navy-600">
                  Portfolio link coming soon. Add it in <code className="rounded bg-white px-1.5 py-0.5 text-xs">src/config/siteConfig.js</code>.
                </p>
              )}
              <SocialLinks variant="light" className="justify-center" />
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA title="Have a project in mind?" description="Tell us what you are planning. We will give you honest advice on the best way to build it." />
    </>
  );
}
