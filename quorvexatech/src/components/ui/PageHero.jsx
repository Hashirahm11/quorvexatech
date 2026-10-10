import Button from './Button';
import ImageWithFallback from './ImageWithFallback';
import BrowserMockup from './BrowserMockup';

/**
 * Shared hero used by all five pages.
 * `primaryCta` / `secondaryCta`: { label, to?, href?, onClick? }
 * `chips`: small highlight labels shown over the image.
 */
export default function PageHero({ title, description, primaryCta, secondaryCta, image, imageAlt, chips = [], tall = false }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />

      <div className={`container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${tall ? 'py-16 sm:py-24 lg:py-28' : 'py-14 sm:py-20 lg:py-24'}`}>
        <div className="animate-rise">
          <h1 className="text-4xl font-extrabold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">{description}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta && <Button to={primaryCta.to} href={primaryCta.href} onClick={primaryCta.onClick}>{primaryCta.label}</Button>}
              {secondaryCta && <Button variant="secondary" to={secondaryCta.to} href={secondaryCta.href} onClick={secondaryCta.onClick}>{secondaryCta.label}</Button>}
            </div>
          )}

          {chips.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Highlights">
              {chips.map((chip) => (
                <li key={chip} className="rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-navy-700">
                  {chip}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative animate-rise [animation-delay:120ms]">
          <div className="animate-float overflow-hidden rounded-3xl border border-white bg-navy-900 shadow-lift">
            <ImageWithFallback
              src={image}
              alt={imageAlt}
              eager
              width={1200}
              height={825}
              className="aspect-[16/11] w-full object-cover"
              fallback={<BrowserMockup className="aspect-[16/11] w-full" label={imageAlt} />}
            />
          </div>
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-brand-200 to-brand-50" />
        </div>
      </div>
    </section>
  );
}
