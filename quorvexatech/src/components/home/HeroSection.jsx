import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const tags = [
  { label: 'WordPress', dot: 'bg-[#3867FF]' },
  { label: 'Shopify', dot: 'bg-[#FF8066]' },
  { label: 'React.js', dot: 'bg-[#8157F5]' },
  { label: 'Custom Websites', dot: 'bg-[#8FE3C0]' },
];

/** Decorative "digital workspace": browser window, phone, code card and floating chips (pure HTML/CSS, no images). */
function Workspace() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[380px] w-full max-w-[560px] sm:h-[470px] lg:h-[540px] lg:max-w-none">
      <div className="qx-orb absolute -right-6 top-4 h-56 w-56 rounded-full bg-[#8157F5]/30 blur-3xl" />
      <div className="qx-orb absolute bottom-4 left-4 h-52 w-52 rounded-full bg-[#3867FF]/25 blur-3xl [animation-delay:-6s]" />
      <div className="qx-orb absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-[#FF8066]/25 blur-3xl [animation-delay:-3s]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 540" preserveAspectRatio="none" fill="none">
        <path className="qx-dash" d="M120 70 C 200 40, 250 120, 300 150" stroke="#8157F5" strokeWidth="1.6" />
        <path className="qx-dash" d="M110 470 C 160 380, 230 360, 290 330" stroke="#FF8066" strokeWidth="1.6" />
        <circle cx="120" cy="70" r="5" fill="#8157F5" />
        <circle cx="300" cy="150" r="5" fill="#3867FF" />
        <circle cx="110" cy="470" r="5" fill="#FF8066" />
      </svg>

      {/* main browser window */}
      <div className="qx-depth absolute right-0 top-[13%] w-[80%]" style={{ '--k': 12 }}>
        <div className="qx-float">
          <div className="overflow-hidden rounded-2xl border border-[#10172F]/10 bg-white shadow-[0_44px_80px_-32px_rgba(56,103,255,0.5)]">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF8066]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8FE3C0]" />
              <span className="ml-3 flex-1 rounded-full bg-white px-3 py-1 text-[10px] text-[#5a6480] shadow-sm">yourbusiness.com</span>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <span className="h-5 w-5 rounded-md bg-gradient-to-br from-[#3867FF] to-[#8157F5]" />
                <span className="flex gap-2"><i className="h-1.5 w-8 rounded bg-slate-200" /><i className="h-1.5 w-8 rounded bg-slate-200" /><i className="h-1.5 w-8 rounded bg-slate-200" /></span>
                <span className="h-5 w-14 rounded-full bg-[#10172F]" />
              </div>
              <div className="mt-5 grid grid-cols-5 gap-4">
                <div className="col-span-3 space-y-2.5">
                  <i className="block h-3.5 w-11/12 rounded bg-[#10172F]" />
                  <i className="block h-3.5 w-8/12 rounded bg-gradient-to-r from-[#3867FF] to-[#8157F5]" />
                  <i className="mt-3 block h-1.5 w-full rounded bg-slate-200" />
                  <i className="block h-1.5 w-10/12 rounded bg-slate-200" />
                  <div className="flex gap-2 pt-3"><i className="h-6 w-20 rounded-full bg-[#3867FF]" /><i className="h-6 w-16 rounded-full border border-slate-300" /></div>
                </div>
                <div className="relative col-span-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#10172F] to-[#3867FF]">
                  <i className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-[#8157F5]/70" />
                  <i className="absolute bottom-2 left-2 h-8 w-8 rounded-lg bg-[#FF8066]" />
                  <i className="absolute bottom-4 right-3 h-3 w-10 rounded bg-[#8FE3C0]" />
                  <div className="aspect-[4/5]" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {['#EEF2FF', '#FFF0EC', '#E8F8F1'].map((bg, i) => (
                  <div key={bg} className="rounded-lg p-2.5" style={{ background: bg }}>
                    <i className={`block h-1.5 w-6 rounded ${['bg-[#3867FF]', 'bg-[#FF8066]', 'bg-[#2FAE82]'][i]}`} />
                    <i className="mt-2 block h-1.5 w-full rounded bg-white/90" />
                    <i className="mt-1 block h-1.5 w-8/12 rounded bg-white/90" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* phone: store */}
      <div className="qx-depth absolute bottom-0 left-[2%] w-[31%] max-w-[170px]" style={{ '--k': -18 }}>
        <div className="qx-float" style={{ '--fd': '-2.6s' }}>
          <div className="rounded-[1.6rem] border-[5px] border-[#10172F] bg-white p-2 shadow-[0_30px_60px_-24px_rgba(129,87,245,0.6)]">
            <div className="mx-auto h-1 w-8 rounded-full bg-[#10172F]/80" />
            <div className="mt-2 flex items-center justify-between"><i className="h-2 w-8 rounded bg-[#10172F]" /><i className="h-3 w-3 rounded-full bg-[#FF8066]" /></div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {['#FF8066', '#8157F5', '#8FE3C0', '#3867FF'].map((c) => (
                <div key={c}><i className="block aspect-square rounded-md" style={{ background: c, opacity: 0.9 }} /><i className="mt-1 block h-1 w-8 rounded bg-slate-300" /></div>
              ))}
            </div>
            <i className="mt-2.5 block h-5 rounded-full bg-[#10172F]" />
          </div>
        </div>
      </div>

      {/* code card */}
      <div className="qx-depth absolute left-0 top-0 hidden w-[38%] sm:block" style={{ '--k': -8 }}>
        <div className="qx-float" style={{ '--fd': '-4.2s' }}>
          <div className="rounded-xl bg-[#10172F] p-3.5 font-mono text-[10px] leading-relaxed text-slate-300 shadow-[0_28px_50px_-24px_rgba(16,23,47,0.8)] lg:text-[11px]">
            <p><span className="text-[#8157F5]">const</span> <span className="text-[#8FE3C0]">site</span> = {'{'}</p>
            <p className="pl-3">design: <span className="text-[#FF8066]">'clear'</span>,</p>
            <p className="pl-3">mobile: <span className="text-[#FF8066]">true</span>,</p>
            <p className="pl-3">goal: <span className="text-[#FF8066]">'grow'</span></p>
            <p>{'}'};</p>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="qx-depth absolute right-[4%] top-0 hidden sm:block" style={{ '--k': 22 }}>
        <div className="qx-float" style={{ '--fd': '-1.4s' }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-[#10172F] shadow-lg"><i className="h-2 w-2 rounded-full bg-[#2FAE82]" />Responsive layouts</span>
        </div>
      </div>
      <div className="qx-depth absolute bottom-[8%] right-[2%]" style={{ '--k': 16 }}>
        <div className="qx-float" style={{ '--fd': '-3.4s' }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#10172F] px-3.5 py-2 text-xs font-semibold text-white shadow-lg"><i className="h-2 w-2 rounded-full bg-[#FF8066]" />Built to be edited</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const hero = useRef(null);

  // Cursor-responsive depth: desktop pointers only, and never with reduced motion.
  useEffect(() => {
    const el = hero.current;
    if (!el) return undefined;
    const canMove = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canMove) return undefined;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
      });
    };
    const reset = () => { el.style.setProperty('--mx', '0'); el.style.setProperty('--my', '0'); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', reset);
    return () => { cancelAnimationFrame(frame); el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', reset); };
  }, []);

  return (
    <section ref={hero} className="relative isolate bg-[#F8F8F5]" aria-labelledby="hero-heading">
      <div aria-hidden="true" className="qx-grid-bg absolute inset-0 -z-10" />
      <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-24">
        <div>
          <p className="qx-rise inline-flex items-center gap-2.5 rounded-full border border-[#10172F]/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#10172F] shadow-sm sm:text-xs">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8FE3C0] opacity-80 motion-reduce:hidden" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#2FAE82]" /></span>
            Independent digital studio · Available for projects
          </p>
          <h1 id="hero-heading" className="qx-rise mt-6 text-[2.5rem] font-extrabold leading-[1.06] text-[#10172F] sm:text-6xl lg:text-[3.3rem] xl:text-[3.9rem]" style={{ '--d': '120ms' }}>
            We build <span className="qx-grad-text">digital experiences</span> that <span className="qx-underline">move businesses</span> forward.
          </h1>
          <p className="qx-rise mt-6 max-w-xl text-lg leading-relaxed text-[#5a6480]" style={{ '--d': '240ms' }}>
            QuorvexaTech designs and develops fast, responsive websites and online stores with WordPress, Shopify and React.js, so your business looks credible and is easy to contact.
          </p>
          <div className="qx-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ '--d': '360ms' }}>
            <Link to="/contact#consultation" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3867FF] px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_36px_-14px_rgba(56,103,255,0.8)] transition hover:bg-[#2b55e0] hover:shadow-[0_22px_40px_-14px_rgba(56,103,255,0.9)]">
              Get a Free Consultation <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-[#10172F]/20 bg-white/70 px-7 py-3.5 text-base font-semibold text-[#10172F] transition hover:border-[#8157F5] hover:text-[#8157F5]">
              Explore Our Work
            </Link>
          </div>
          <ul className="qx-rise mt-9 flex flex-wrap gap-2.5" style={{ '--d': '480ms' }} aria-label="What we work with">
            {tags.map((t) => (
              <li key={t.label} className="inline-flex items-center gap-2 rounded-full border border-[#10172F]/10 bg-white px-3.5 py-1.5 text-sm font-medium text-[#10172F]">
                <i className={`h-2 w-2 rounded-full ${t.dot}`} />{t.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="qx-rise" style={{ '--d': '300ms' }}><Workspace /></div>
      </div>
    </section>
  );
}
