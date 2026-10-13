import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiShoppingCart } from 'react-icons/fi';
import { buildTypes } from '../../data/homeData';
import { getServiceTitle } from '../../data/services';
import Reveal from './Reveal';

const bar = (w, c = 'bg-slate-200', h = 'h-1.5') => <i className={`block ${h} ${w} rounded ${c}`} />;

function Nav({ cart }) {
  return (
    <div className="flex items-center justify-between">
      <span className="h-5 w-5 rounded-md bg-gradient-to-br from-[#3867FF] to-[#8157F5]" />
      <span className="flex gap-2">{bar('w-7')}{bar('w-7')}{bar('w-7')}</span>
      {cart ? <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FF8066] text-[11px] text-white"><FiShoppingCart /></span> : <i className="h-5 w-12 rounded-full bg-[#10172F]" />}
    </div>
  );
}

const mocks = {
  business: () => (
    <div className="space-y-4"><Nav />
      <div className="rounded-xl bg-gradient-to-br from-[#10172F] to-[#3867FF] p-5"><i className="block h-3 w-8/12 rounded bg-white" /><i className="mt-2 block h-3 w-5/12 rounded bg-white/70" /><i className="mt-4 block h-6 w-24 rounded-full bg-[#8FE3C0]" /></div>
      <div className="grid grid-cols-3 gap-3">{['#EEF2FF', '#F1EEFF', '#FFF0EC'].map((b) => <div key={b} className="rounded-lg p-3" style={{ background: b }}>{bar('w-6', 'bg-[#3867FF]')}<div className="mt-2 space-y-1">{bar('w-full', 'bg-white')}{bar('w-9/12', 'bg-white')}</div></div>)}</div>
      <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">{bar('w-24', 'bg-slate-300')}<i className="h-6 w-20 rounded-full bg-[#3867FF]" /></div>
    </div>),
  store: () => (
    <div className="space-y-4"><Nav cart />
      <div className="flex items-center justify-between rounded-xl bg-[#FFF0EC] p-4"><div className="space-y-2">{bar('w-28', 'bg-[#10172F]', 'h-3')}{bar('w-20', 'bg-[#FF8066]')}</div><i className="h-10 w-10 rounded-full bg-[#FF8066]" /></div>
      <div className="grid grid-cols-4 gap-3">{['#FF8066', '#8157F5', '#8FE3C0', '#3867FF'].map((c) => <div key={c}><i className="block aspect-square rounded-lg" style={{ background: c, opacity: 0.85 }} /><div className="mt-2 space-y-1">{bar('w-9/12')}<i className="block h-3 w-8 rounded-full bg-[#10172F]" /></div></div>)}</div>
      <div className="flex justify-end"><i className="h-7 w-28 rounded-full bg-[#10172F]" /></div>
    </div>),
  landing: () => (
    <div className="space-y-4 text-center"><div className="flex justify-center"><i className="h-5 w-5 rounded-md bg-gradient-to-br from-[#3867FF] to-[#8157F5]" /></div>
      <div className="mx-auto w-9/12 space-y-2"><i className="mx-auto block h-3.5 w-full rounded bg-[#10172F]" /><i className="mx-auto block h-3.5 w-7/12 rounded bg-[#8157F5]" /></div>
      <div className="mx-auto w-7/12 space-y-1.5">{bar('w-full')}{bar('w-10/12 mx-auto')}</div>
      <div className="mx-auto w-8/12 space-y-2 rounded-xl border border-slate-200 p-3"><i className="block h-6 rounded-md bg-slate-100" /><i className="block h-6 rounded-md bg-slate-100" /><i className="block h-7 rounded-full bg-[#8157F5]" /></div>
      <div className="flex justify-center gap-3">{['#8FE3C0', '#FF8066', '#3867FF'].map((c) => <span key={c} className="flex items-center gap-1.5">{<i className="h-2 w-2 rounded-full" style={{ background: c }} />}{bar('w-10')}</span>)}</div>
    </div>),
  portfolio: () => (
    <div className="space-y-4"><div className="flex items-center justify-between"><div className="space-y-1.5">{bar('w-24', 'bg-[#10172F]', 'h-2.5')}{bar('w-16')}</div><span className="flex gap-2">{bar('w-7')}{bar('w-7')}</span></div>
      <div className="grid grid-cols-3 gap-3">
        {[['#3867FF', 'h-24'], ['#FF8066', 'h-16'], ['#8157F5', 'h-20'], ['#8FE3C0', 'h-16'], ['#10172F', 'h-24'], ['#FF8066', 'h-14']].map(([c, h], i) => <i key={i} className={`block rounded-lg ${h}`} style={{ background: c, opacity: 0.9 }} />)}
      </div>
    </div>),
};

export default function BuildExplorer() {
  const [active, setActive] = useState(buildTypes[0].id);
  const tabRefs = useRef([]);
  const current = buildTypes.find((t) => t.id === active);
  const Mock = mocks[active];

  const onKeyDown = (e) => {
    const i = buildTypes.findIndex((t) => t.id === active);
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % buildTypes.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + buildTypes.length) % buildTypes.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = buildTypes.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(buildTypes[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#10172F] py-16 text-white sm:py-20 lg:py-28" aria-labelledby="build-heading">
      <div aria-hidden="true" className="qx-grid-bg-dark absolute inset-0 -z-10" />
      <div aria-hidden="true" className="qx-orb absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-[#3867FF]/25 blur-3xl" />
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8FE3C0]">What we can build</p>
          <h2 id="build-heading" className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">Pick a type of website and see what it usually includes.</h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div role="tablist" aria-label="Website types" onKeyDown={onKeyDown} className="flex flex-wrap gap-2.5">
              {buildTypes.map((t, i) => {
                const on = t.id === active;
                return (
                  <button key={t.id} ref={(el) => (tabRefs.current[i] = el)} role="tab" id={`tab-${t.id}`} aria-selected={on} aria-controls="build-panel" tabIndex={on ? 0 : -1} type="button" onClick={() => setActive(t.id)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${on ? 'border-transparent bg-white text-[#10172F]' : 'border-white/25 text-white/80 hover:border-white/60 hover:text-white'}`}>
                    {t.label}
                  </button>
                );
              })}
            </div>
            <div id="build-panel" role="tabpanel" aria-labelledby={`tab-${active}`} tabIndex={0} className="mt-8">
              <h3 className="text-xl font-bold">Typically included</h3>
              <ul className="mt-4 space-y-3">
                {current.features.map((f) => <li key={f} className="flex items-start gap-3 text-white/85"><FiCheck aria-hidden="true" className="mt-1 shrink-0 text-[#8FE3C0]" />{f}</li>)}
              </ul>
              <p className="mt-6 text-sm text-white/55">Scope varies by project. The final quote depends on your pages, features and platform.</p>
              <Link to={`/contact?service=${encodeURIComponent(getServiceTitle(current.slug))}#contact-form`} className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#3867FF] px-6 py-3 font-semibold text-white transition hover:bg-[#5580ff]">
                {current.cta} <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#8157F5]/40 to-[#3867FF]/20 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#FF8066]" /><i className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" /><i className="h-2.5 w-2.5 rounded-full bg-[#8FE3C0]" />
                  <span className="ml-3 flex-1 rounded-full bg-white px-3 py-1 text-[10px] text-[#5a6480] shadow-sm">yourbusiness.com</span>
                </div>
                <div key={active} className="qx-rise min-h-[300px] p-5 sm:min-h-[340px] sm:p-6"><Mock /></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
