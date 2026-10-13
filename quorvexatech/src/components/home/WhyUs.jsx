import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { whyPoints } from '../../data/homeData';
import Reveal from './Reveal';

const dots = ['#3867FF', '#8157F5', '#FF8066', '#2FAE82'];

function Orbits() {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 320" className="mt-10 w-full max-w-[300px]">
      <defs><linearGradient id="why-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3867FF" /><stop offset="1" stopColor="#8157F5" /></linearGradient></defs>
      <circle cx="160" cy="160" r="140" fill="none" stroke="#10172F" strokeOpacity="0.12" strokeDasharray="3 8" className="qx-dash" />
      <circle cx="160" cy="160" r="98" fill="none" stroke="#10172F" strokeOpacity="0.12" />
      <circle cx="160" cy="160" r="56" fill="url(#why-g)" />
      <path d="M142 168l14 12 26-34" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="20" r="11" fill="#FF8066" /><circle cx="300" cy="160" r="9" fill="#8FE3C0" /><circle cx="62" cy="258" r="10" fill="#3867FF" />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF8066]">Why QuorvexaTech</p>
          <h2 id="why-heading" className="mt-3 text-3xl font-extrabold leading-tight text-[#10172F] sm:text-5xl">A small studio that answers your messages and explains its choices.</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5a6480]">You work directly with the developer, you know the scope before we start, and you get honest advice about what your project actually needs.</p>
          <Orbits />
          <Link to="/about" className="group mt-8 inline-flex items-center gap-2 font-bold text-[#10172F] underline-offset-4 hover:underline">
            More about our studio <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <ul className="lg:col-span-7">
          {whyPoints.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70} className="flex gap-5 border-t border-[#10172F]/10 py-6 first:border-t-0 first:pt-0">
              <span aria-hidden="true" className="mt-2 h-3 w-3 shrink-0 rounded-full" style={{ background: dots[i % dots.length] }} />
              <div>
                <h3 className="text-xl font-extrabold text-[#10172F]">{p.title}</h3>
                <p className="mt-1.5 leading-relaxed text-[#5a6480]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
