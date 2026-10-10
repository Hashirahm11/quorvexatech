import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

export default function FAQSection({ faqs, title = 'Frequently asked questions', description }) {
  const [openIndex, setOpenIndex] = useState(0);
  if (!faqs?.length) return null;

  return (
    <section className="section-y bg-slate-50" aria-labelledby="faq-heading">
      <div className="container-page">
        <SectionHeading id="faq-heading" title={title} description={description} />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-navy-900 transition hover:text-brand-700 sm:px-6"
                  >
                    {faq.question}
                    <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                      {open ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!open}
                  className="px-5 pb-6 text-navy-600 sm:px-6"
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
