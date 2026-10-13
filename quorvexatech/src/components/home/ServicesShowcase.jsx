import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCheck, FiLock, FiGlobe, FiServer } from 'react-icons/fi';
import { services } from '../../data/services';
import { serviceShowcase } from '../../data/homeData';
import Reveal from './Reveal';

const tones = {
  blue: { bg: '#EEF2FF', accent: '#3867FF', ink: '#2B55E0' },
  coral: { bg: '#FFF0EC', accent: '#FF8066', ink: '#C94B33' },
  violet: { bg: '#F1EEFF', accent: '#8157F5', ink: '#5B3FD0' },
  mint: { bg: '#E8F8F1', accent: '#2FAE82', ink: '#1B7F5C' },
};

function StoreGraphic({ accent }) {
  return (
    <div aria-hidden="true" className="mt-6 grid grid-cols-4 gap-2.5">
      {[0.95, 0.6, 0.8, 0.45].map((o, i) => (
        <div key={i} className="rounded-xl bg-white p-2 shadow-sm">
          <i className="block aspect-[4/3] rounded-lg" style={{ background: accent, opacity: o }} />
          <i className="mt-2 block h-1.5 w-8/12 rounded bg-slate-200" />
          <i className="mt-1.5 block h-3.5 w-1/2 rounded-full bg-[#10172F]" />
        </div>
      ))}
    </div>
  );
}
function FunnelGraphic({ accent }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 70" className="mt-5 h-16 w-full max-w-[220px]">
      <path d="M4 6h192l-30 24H34z" fill={accent} opacity="0.35" />
      <path d="M34 36h132l-24 16H58z" fill={accent} opacity="0.6" />
      <path d="M58 56h84l-12 11H70z" fill={accent} />
    </svg>
  );
}
function LaunchGraphic({ accent }) {
  const nodes = [FiGlobe, FiServer, FiLock];
  return (
    <div aria-hidden="true" className="mt-5 flex items-center">
      {nodes.map((Icon, i) => (
        <div key={i} className="flex items-center">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg shadow-sm" style={{ color: accent }}><Icon /></span>
          {i < nodes.length - 1 && <i className="h-px w-6 border-t-2 border-dashed" style={{ borderColor: accent }} />}
        </div>
      ))}
    </div>
  );
}

export default function ServicesShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3867FF]">What we do</p>
          <h2 id="services-heading" className="mt-3 text-3xl font-extrabold leading-tight text-[#10172F] sm:text-5xl">Solutions for the way your business actually works.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5a6480]">Each service uses the technology that suits it. We will tell you which one fits, and why.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {serviceShowcase.map((s, i) => {
            const tone = tones[s.tone];
            const Icon = services.find((x) => x.slug === s.slug)?.icon;
            return (
              <Reveal key={s.slug} delay={(i % 3) * 100} className={s.span}>
                <article className="qx-card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#10172F]/10 p-7 hover:shadow-[0_30px_60px_-34px_rgba(16,23,47,0.5)]" style={{ background: tone.bg }}>
                  <span aria-hidden="true" className="absolute left-0 top-0 h-1.5 w-full" style={{ background: tone.accent }} />
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl shadow-sm" style={{ color: tone.accent }}>{Icon && <Icon aria-hidden="true" />}</span>
                    <FiArrowUpRight aria-hidden="true" className="text-xl text-[#10172F]/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#10172F]" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-[#10172F]">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#40486a]">{s.text}</p>
                  <p className="mt-4 flex items-start gap-2 text-sm font-semibold" style={{ color: tone.ink }}><FiCheck aria-hidden="true" className="mt-0.5 shrink-0" />{s.benefit}</p>
                  {s.big === 'store' && <StoreGraphic accent={tone.accent} />}
                  {s.big === 'funnel' && <FunnelGraphic accent={tone.accent} />}
                  {s.big === 'launch' && <LaunchGraphic accent={tone.accent} />}
                  <Link to={`/services#${s.slug}`} className="mt-auto inline-flex pt-6 text-sm font-bold text-[#10172F] underline-offset-4 after:absolute after:inset-0 hover:underline">
                    Explore Service<span className="sr-only">: {s.title}</span>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
