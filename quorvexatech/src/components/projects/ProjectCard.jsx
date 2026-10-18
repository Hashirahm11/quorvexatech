import { Link } from 'react-router-dom';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import ImageWithFallback from '../ui/ImageWithFallback';
import { getCategoryLabel } from '../../data/projects';

/**
 * Project card – modern layout used on the /projects page.
 * Every field except title/category is optional; missing fields simply do not render.
 */
export default function ProjectCard({ project }) {
  const {
    title,
    category,
    image,
    description,
    technologies = [],
    liveUrl,
    caseStudyUrl,
  } = project;

  const caseStudyIsExternal = caseStudyUrl && /^https?:/i.test(caseStudyUrl);
  const hasLinks = Boolean(liveUrl || caseStudyUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_24px_-8px_rgba(16,23,47,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#8157F5]/30 hover:shadow-[0_16px_40px_-12px_rgba(129,87,245,0.25)]">

      {/* ── Image / Browser Frame ─────────────────────────────── */}
      <div className="relative bg-[#10172F] p-3 pb-0">
        {/* Browser chrome dots */}
        <div className="mb-2 flex items-center gap-1.5 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>

        <div className="relative overflow-hidden rounded-t-lg">
          {image ? (
            <ImageWithFallback
              src={image}
              alt={`Screenshot of ${title}`}
              width={800}
              height={500}
              className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-105"
              fallback={
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-400">Preview loading…</span>
                </div>
              }
            />
          ) : (
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <span className="text-sm font-medium text-slate-400">No preview available</span>
            </div>
          )}

          {/* Hover overlay with "visit site" hint */}
          {liveUrl && (
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#10172F]/80 via-[#10172F]/10 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-xs font-semibold text-white/90">Click below to visit the live site →</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Category badge */}
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8157F5]">
          {getCategoryLabel(category)}
        </p>

        {/* Title */}
        <h3 className="mt-1.5 text-[1.05rem] font-bold leading-snug text-[#10172F]">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 line-clamp-3">
            {description}
          </p>
        )}

        {/* Tech tags */}
        {technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-[#F1EEFF] px-2.5 py-1 text-[11px] font-semibold text-[#5B3FD0]"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* ── CTA Buttons ──────────────────────────────────────── */}
        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#3867FF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2b55e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3867FF]/60"
            >
              View Live Site <FiExternalLink aria-hidden="true" />
              <span className="sr-only"> for {title} (opens in a new tab)</span>
            </a>
          )}

          {caseStudyUrl &&
            (caseStudyIsExternal ? (
              <a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#10172F] transition hover:border-[#8157F5] hover:text-[#8157F5]"
              >
                Project Details <FiArrowRight aria-hidden="true" />
                <span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            ) : (
              <Link
                to={caseStudyUrl}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#10172F] transition hover:border-[#8157F5] hover:text-[#8157F5]"
              >
                Project Details <FiArrowRight aria-hidden="true" />
                <span className="sr-only"> for {title}</span>
              </Link>
            ))}

          {!hasLinks && (
            <p className="text-xs text-slate-400">Live link coming soon.</p>
          )}
        </div>
      </div>
    </article>
  );
}
