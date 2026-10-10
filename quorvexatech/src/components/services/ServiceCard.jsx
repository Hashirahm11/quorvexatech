import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

/**
 * compact = overview version for the Home page (3 features, links to the Services page).
 * Full version includes all deliverables and a quote button that pre-selects the service in the contact form.
 */
export default function ServiceCard({ service, compact = false }) {
  const { slug, title, description, features, icon: Icon } = service;
  const shownFeatures = compact ? features.slice(0, 3) : features;

  return (
    <article
      id={slug}
      className="group flex h-full scroll-mt-32 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-xl text-white shadow-md">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-bold leading-snug text-navy-900">{title}</h3>
      <p className="mt-3 leading-relaxed text-navy-600">{description}</p>

      <ul className="mt-5 space-y-2.5">
        {shownFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-navy-700">
            <FiCheck aria-hidden="true" className="mt-0.5 shrink-0 text-brand-600" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        {compact ? (
          <Link to={`/services#${slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800 hover:underline">
            See details<span className="sr-only"> about {title}</span>
          </Link>
        ) : (
          <Link
            to={`/contact?service=${encodeURIComponent(title)}#contact-form`}
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white"
          >
            Get a Quote<span className="sr-only"> for {title}</span>
          </Link>
        )}
      </div>
    </article>
  );
}
