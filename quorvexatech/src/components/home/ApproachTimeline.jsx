import { FiSearch, FiCompass, FiCode, FiCheckCircle, FiSend } from 'react-icons/fi';
import { approachSteps } from '../../data/homeData';
import Reveal, { useInView } from './Reveal';

const icons = [FiSearch, FiCompass, FiCode, FiCheckCircle, FiSend];
const colors = ['#3867FF', '#8157F5', '#FF8066', '#2FAE82', '#3867FF'];

export default function ApproachTimeline() {
  const [ref, seen] = useInView(0.2);
  return (
    <section className="bg-[#F8F8F5] py-16 sm:py-20 lg:py-28" aria-labelledby="approach-heading">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8157F5]">Our approach</p>
          <h2 id="approach-heading" className="mt-3 text-3xl font-extrabold leading-tight text-[#10172F] sm:text-5xl">From first conversation to launch day.</h2>
        </Reveal>

        <div ref={ref} className={`relative mt-14 ${seen ? 'is-visible' : ''}`}>
          <div aria-hidden="true" className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-0.5 bg-[#10172F]/10 lg:left-5 lg:top-5 lg:h-0.5 lg:w-[calc(100%-2.5rem)]">
            <div className="qx-tl-line h-full w-full bg-gradient-to-b from-[#3867FF] via-[#8157F5] to-[#FF8066] lg:bg-gradient-to-r" />
          </div>
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {approachSteps.map((s, i) => {
              const Icon = icons[i];
              return (
                <li key={s.title} className="qx-step relative pl-16 lg:pl-0 lg:pt-16" style={{ '--i': i }}>
                  <span aria-hidden="true" className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border-2 bg-white text-lg shadow-md" style={{ borderColor: colors[i], color: colors[i] }}><Icon /></span>
                  <h3 className="text-lg font-extrabold text-[#10172F]"><span className="sr-only">Step {i + 1}: </span>{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5a6480]">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
