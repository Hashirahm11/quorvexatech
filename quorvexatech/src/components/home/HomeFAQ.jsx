import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { homeFaqs } from '../../data/homeData';
import Reveal from './Reveal';

export default function HomeFAQ() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8157F5]">Questions</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-extrabold leading-tight text-[#10172F] sm:text-5xl">Things clients usually ask first.</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-[#10172F]/10 border-y border-[#10172F]/10">
            {homeFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.question}>
                  <h3>
                    <button type="button" id={`hfaq-btn-${i}`} aria-expanded={isOpen} aria-controls={`hfaq-panel-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-[#10172F] transition hover:text-[#3867FF]">
                      {f.question}
                      <span aria-hidden="true" className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition ${isOpen ? 'border-[#3867FF] bg-[#3867FF] text-white' : 'border-[#10172F]/20 text-[#10172F]'}`}>{isOpen ? <FiMinus /> : <FiPlus />}</span>
                    </button>
                  </h3>
                  <div id={`hfaq-panel-${i}`} role="region" aria-labelledby={`hfaq-btn-${i}`} hidden={!isOpen} className="pb-6 pr-12 leading-relaxed text-[#5a6480]"><p>{f.answer}</p></div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
