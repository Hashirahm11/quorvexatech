import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import siteConfig from '../../config/siteConfig';
import { isConfigured } from '../../utils/links';
import { projects, getCategoryLabel } from '../../data/projects';
import { reviews } from '../../data/homeData';
import ImageWithFallback from '../ui/ImageWithFallback';
import BrowserMockup from '../ui/BrowserMockup';
import Reveal from './Reveal';

const spanPatterns = {
  1: ['lg:col-span-12'],
  2: ['lg:col-span-7', 'lg:col-span-5'],
  3: ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-12'],
  4: ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7'],
  5: ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4'],
  6: ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7', 'lg:col-span-6', 'lg:col-span-6'],
};

function ProjectTile({ project, index }) {
  const { title, category, image, description, technologies = [], liveUrl, caseStudyUrl } = project;
  const external = caseStudyUrl && /^https?:/i.test(caseStudyUrl);
  const big = index === 0;
  return (
    <article className="qx-card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-[#10172F]/10 bg-white shadow-[0_24px_50px_-32px_rgba(16,23,47,0.45)] hover:border-[#8157F5]/40 hover:shadow-[0_34px_60px_-30px_rgba(129,87,245,0.45)]">
      <div className="relative bg-[#10172F] p-3 pb-0 sm:p-4 sm:pb-0">
        <div className="overflow-hidden rounded-t-xl bg-white">
          <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-2">
            <i className="h-2 w-2 rounded-full bg-[#FF8066]" /><i className="h-2 w-2 rounded-full bg-[#FFD166]" /><i className="h-2 w-2 rounded-full bg-[#8FE3C0]" />
          </div>
          <div className="relative overflow-hidden">
            <ImageWithFallback
              src={image}
              alt={`Website preview of ${title}`}
              width={1000}
              height={650}
              className={`w-full object-cover object-top transition duration-700 group-hover:scale-105 ${big ? 'aspect-[16/10]' : 'aspect-[16/11]'}`}
              fallback={<div className="relative"><BrowserMockup className={`w-full ${big ? 'aspect-[16/10]' : 'aspect-[16/11]'}`} label={`Preview graphic for ${title}`} /><span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#10172F]">Preview graphic</span></div>}
            />
            {liveUrl && (
              <div className="pointer-events-none absolute inset-0 hidden items-end bg-gradient-to-t from-[#10172F]/85 via-[#10172F]/20 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100 sm:flex">
                <p className="text-sm font-semibold text-white">Visit the live website below</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8157F5]">{getCategoryLabel(category)}</p>
        <h3 className={`mt-2 font-extrabold text-[#10172F] ${big ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
        {description && <p className="mt-2 text-[15px] leading-relaxed text-[#5a6480]">{description}</p>}
        {technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {technologies.map((t) => <li key={t} className="rounded-full bg-[#F1EEFF] px-2.5 py-1 text-xs font-semibold text-[#5B3FD0]">{t}</li>)}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-[#3867FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b55e0]">View Live Site <FiExternalLink aria-hidden="true" /><span className="sr-only"> for {title} (opens in a new tab)</span></a>}
          {caseStudyUrl && (external
            ? <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-[#10172F]/20 px-5 py-2.5 text-sm font-semibold text-[#10172F] transition hover:border-[#8157F5] hover:text-[#8157F5]">Case study <FiArrowRight aria-hidden="true" /><span className="sr-only"> for {title} (opens in a new tab)</span></a>
            : <Link to={caseStudyUrl} className="inline-flex items-center gap-1.5 rounded-full border border-[#10172F]/20 px-5 py-2.5 text-sm font-semibold text-[#10172F] transition hover:border-[#8157F5] hover:text-[#8157F5]">Case study <FiArrowRight aria-hidden="true" /><span className="sr-only"> for {title}</span></Link>)}
        </div>
      </div>
    </article>
  );
}

/** Reads real projects (anything without isPlaceholder) from src/data/projects.js. */
export default function ProjectShowcase() {
  const real = projects.filter((p) => !p.isPlaceholder).slice(0, 6);
  const pattern = spanPatterns[real.length] || [];
  const delivered = reviews.filter((r) => r.project);
  const fiverrUrl = isConfigured(siteConfig.freelancing.fiverr) ? siteConfig.freelancing.fiverr : null;
  const upworkUrl = isConfigured(siteConfig.freelancing.upwork) ? siteConfig.freelancing.upwork : null;

  return (
    <section className="bg-[#F8F8F5] py-16 sm:py-20 lg:py-28" aria-labelledby="work-heading">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8157F5]">Selected work</p>
            <h2 id="work-heading" className="mt-3 text-3xl font-extrabold leading-tight text-[#10172F] sm:text-5xl">Selected projects and recent client work.</h2>
          </div>
          <Link to="/projects" className="group inline-flex items-center gap-2 self-start rounded-full border border-[#10172F]/20 px-6 py-3 font-semibold text-[#10172F] transition hover:border-[#8157F5] hover:text-[#8157F5] lg:self-auto">
            Explore All Projects <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {real.length > 0 ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {real.map((p, i) => <Reveal key={p.id} delay={(i % 2) * 120} className={pattern[i]}><ProjectTile project={p} index={i} /></Reveal>)}
          </div>
        ) : (
          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-3xl border border-[#10172F]/10 bg-white p-8 sm:p-12">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#8157F5]/10 blur-2xl" />
              <div className="relative grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#10172F]">Case studies are being added</h3>
                  <p className="mt-3 leading-relaxed text-[#5a6480]">We are adding live links and screenshots of finished websites. In the meantime, you can read client feedback above and see our delivered work on our marketplace profiles.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {fiverrUrl && <a href={fiverrUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#10172F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3867FF]">Fiverr profile<span className="sr-only"> (opens in a new tab)</span></a>}
                    {upworkUrl && <a href={upworkUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#10172F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3867FF]">Upwork profile<span className="sr-only"> (opens in a new tab)</span></a>}
                    <Link to="/projects" className="rounded-full border border-[#10172F]/20 px-5 py-2.5 text-sm font-semibold text-[#10172F] transition hover:border-[#8157F5] hover:text-[#8157F5]">Projects page</Link>
                  </div>
                </div>
                {delivered.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-[#10172F]">Recent client work, as described in verified reviews</p>
                    <ul className="mt-4 space-y-3">
                      {delivered.map((r) => (
                        <li key={r.id} className="flex items-center gap-3 rounded-2xl bg-[#F8F8F5] px-4 py-3 text-[15px] text-[#10172F]"><i className="h-2.5 w-2.5 rounded-full bg-[#2FAE82]" />{r.project}<span className="ml-auto text-xs text-[#5a6480]">{r.date}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
