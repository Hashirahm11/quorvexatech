import { Link } from 'react-router-dom';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import ImageWithFallback from '../ui/ImageWithFallback';
import BrowserMockup from '../ui/BrowserMockup';
import { getCategoryLabel } from '../../data/projects';

/** Every field except title/category is optional; missing fields simply do not render. */
export default function ProjectCard({ project }) {
  const { title, category, image, description, technologies = [], liveUrl, caseStudyUrl, isPlaceholder } = project;
  const caseStudyIsExternal = caseStudyUrl && /^https?:/i.test(caseStudyUrl);
  const hasLinks = Boolean(liveUrl || caseStudyUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden bg-navy-900">
        <ImageWithFallback
          src={image}
          alt={`Screenshot of ${title}`}
          width={800}
          height={550}
          className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-105"
          fallback={<BrowserMockup className="aspect-[16/11] w-full" label={`Preview placeholder for ${title}`} />}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-800 shadow">
          {getCategoryLabel(category)}
        </span>
        {isPlaceholder && (
          <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 shadow">
            Placeholder
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy-900">{title}</h3>
        {description && <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>}

        {technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-800">{tech}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Visit Live Site <FiExternalLink aria-hidden="true" />
              <span className="sr-only"> for {title} (opens in a new tab)</span>
            </a>
          )}
          {caseStudyUrl &&
            (caseStudyIsExternal ? (
              <a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-brand-500 hover:text-brand-700"
              >
                Project Details <FiArrowRight aria-hidden="true" />
                <span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            ) : (
              <Link
                to={caseStudyUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-brand-500 hover:text-brand-700"
              >
                Project Details <FiArrowRight aria-hidden="true" />
                <span className="sr-only"> for {title}</span>
              </Link>
            ))}
          {!hasLinks && <p className="text-sm text-navy-500">Links will be added soon.</p>}
        </div>
      </div>
    </article>
  );
}
