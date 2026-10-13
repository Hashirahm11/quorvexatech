import { useRef } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FiCheckCircle, FiChevronLeft, FiChevronRight, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import siteConfig from '../../config/siteConfig';
import { isConfigured } from '../../utils/links';
import { reviews, SHOW_ORDER_META } from '../../data/homeData';
import Reveal from './Reveal';

function Stars({ rating }) {
  if (rating == null) return null;
  return (
    <span role="img" aria-label={`Rated ${rating} out of 5`} className="inline-flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} aria-hidden="true" className={n <= rating ? 'text-[#FF8066]' : 'text-white/20'} />)}
    </span>
  );
}

function PlatformBadge({ review }) {
  if (review.platform === 'upwork') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#14A800]/15 px-3 py-1 text-xs font-semibold text-[#9BE88F]">
        <SiUpwork aria-hidden="true" /> {review.verified ? <><FiCheckCircle aria-hidden="true" /> Verified on Upwork</> : 'Upwork'}
      </span>
    );
  }
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73]/15 px-3 py-1 text-xs font-semibold text-[#8EF0C2]"><SiFiverr aria-hidden="true" /> Fiverr review</span>;
}

function ReviewCard({ review, featured = false }) {
  const { name, role, country, project, date, text, rating, reviewUrl, projectUrl, price, duration } = review;
  const tones = ['#3867FF', '#8157F5', '#FF8066', '#2FAE82'];
  const tone = tones[name.charCodeAt(0) % tones.length];
  return (
    <article className={`qx-card-lift group relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_30px_60px_-30px_rgba(129,87,245,0.6)] ${featured ? 'sm:p-8' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <FaQuoteLeft aria-hidden="true" className={`${featured ? 'text-3xl' : 'text-xl'} text-[#8157F5]`} />
        <PlatformBadge review={review} />
      </div>
      <Stars rating={rating} />
      <blockquote className={`mt-4 flex-1 text-white/90 ${featured ? 'text-base leading-relaxed sm:text-[1.05rem]' : 'text-[15px] leading-relaxed'}`}>
        <p>{text}</p>
      </blockquote>
      <footer className="mt-6 border-t border-white/10 pt-5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-base font-bold text-white" style={{ background: tone }}>{name[0].toUpperCase()}</span>
          <div className="min-w-0">
            <p className="truncate font-semibold text-white">{name}</p>
            <p className="text-sm text-white/60">{[role, country].filter(Boolean).join(' · ')}{date ? ` · ${date}` : ''}</p>
          </div>
        </div>
        {project && <p className="mt-3 text-sm text-white/70"><span className="text-white/45">Project: </span>{project}</p>}
        {SHOW_ORDER_META && (price || duration) && <p className="mt-1 text-xs text-white/50">{[price, duration].filter(Boolean).join(' · ')}</p>}
        {(reviewUrl || projectUrl) && (
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            {reviewUrl && <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#8FE3C0] hover:underline">View Original Review <FiExternalLink aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
            {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#FF8066] hover:underline">View Live Project <FiExternalLink aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
          </div>
        )}
      </footer>
    </article>
  );
}

export default function ReviewsSection() {
  const track = useRef(null);
  const featured = reviews.filter((r) => r.featured).sort((a, b) => b.text.length - a.text.length);
  const rest = reviews.filter((r) => !r.featured);

  const scrollByCard = (dir) => {
    const el = track.current;
    if (!el) return;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * (el.firstElementChild?.getBoundingClientRect().width ?? 320) , behavior: smooth ? 'smooth' : 'auto' });
  };

  const fiverrUrl = isConfigured(siteConfig.freelancing.fiverr) ? siteConfig.freelancing.fiverr : null;
  const upworkUrl = isConfigured(siteConfig.freelancing.upwork) ? siteConfig.freelancing.upwork : null;
  const primary = fiverrUrl || upworkUrl;

  return (
    <section id="reviews" className="relative isolate overflow-hidden bg-[#10172F] py-16 text-white sm:py-20 lg:py-28" aria-labelledby="reviews-heading">
      <div aria-hidden="true" className="qx-grid-bg-dark absolute inset-0 -z-10" />
      <div aria-hidden="true" className="qx-orb absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#8157F5]/30 blur-3xl" />
      <div aria-hidden="true" className="qx-orb absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-[#3867FF]/25 blur-3xl [animation-delay:-7s]" />

      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8FE3C0]">Client feedback</p>
          <h2 id="reviews-heading" className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">Real Feedback. <span className="text-[#FF8066]">Real Partnerships.</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">What clients wrote on Fiverr and Upwork, shown as they wrote it.</p>
        </Reveal>

        {reviews.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-white/20 p-8 text-white/70">Review details to be added. Add entries in src/data/homeData.js.</p>
        ) : (
          <>
            {featured.length > 0 && (
              <div className="mt-12 grid gap-6 lg:grid-cols-12">
                {featured.map((r, i) => (
                  <Reveal key={r.id} delay={i * 120} className={featured.length === 1 ? 'lg:col-span-12' : i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}>
                    <ReviewCard review={r} featured />
                  </Reveal>
                ))}
              </div>
            )}

            {rest.length > 0 && (
              <Reveal className="mt-14">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-xl font-bold">More client reviews</h3>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous reviews" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-lg transition hover:border-[#8FE3C0] hover:text-[#8FE3C0]"><FiChevronLeft aria-hidden="true" /></button>
                    <button type="button" onClick={() => scrollByCard(1)} aria-label="Next reviews" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-lg transition hover:border-[#8FE3C0] hover:text-[#8FE3C0]"><FiChevronRight aria-hidden="true" /></button>
                  </div>
                </div>
                <div ref={track} tabIndex={0} role="region" aria-label="Client reviews, scroll horizontally" className="qx-snap -mx-4 mt-6 flex scroll-pl-4 gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:scroll-pl-0 sm:px-0">
                  {rest.map((r) => (
                    <div key={r.id} className="w-[86%] shrink-0 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"><ReviewCard review={r} /></div>
                  ))}
                </div>
              </Reveal>
            )}
          </>
        )}

        <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {primary ? (
            <a href={primary} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#10172F] transition hover:bg-[#8FE3C0]">
              Read More Client Reviews <FiArrowRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {fiverrUrl && upworkUrl && (
            <a href={upworkUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline">Or see our Upwork profile<span className="sr-only"> (opens in a new tab)</span></a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
