import SectionHeading from './SectionHeading';
import { processSteps } from '../../data/process';

export default function ProcessSteps({
  title = 'How we work',
  description = 'A simple, transparent process from first conversation to launch day.',
  tinted = true,
}) {
  return (
    <section className={`section-y ${tinted ? 'bg-slate-50' : ''}`} aria-labelledby="process-heading">
      <div className="container-page">
        <SectionHeading id="process-heading" title={title} description={description} />
        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">
                <span className="sr-only">Step {i + 1}: </span>{step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
