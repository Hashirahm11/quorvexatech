import { FiMapPin } from 'react-icons/fi';
import siteConfig from '../../config/siteConfig';

const allowedEmbed = /^https:\/\/(www\.google\.com\/maps\/embed|www\.openstreetmap\.org\/export\/embed\.html|maps\.google\.com\/maps)/i;

/** Shows a map only when a genuine embed URL is configured; otherwise a clear placeholder. */
export default function MapEmbed() {
  const { mapEmbedUrl, address, label } = siteConfig.location;
  const valid = allowedEmbed.test(mapEmbedUrl || '');

  return (
    <section className="container-page section-y" aria-labelledby="map-heading">
      <h2 id="map-heading" className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Find us</h2>
      {address && <p className="mt-2 text-navy-600">{label ? `${label}: ` : ''}{address}</p>}
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
        {valid ? (
          <iframe
            title={`Map showing ${label || 'our location'}`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-80 w-full sm:h-96"
          />
        ) : (
          <div className="grid h-72 place-items-center bg-gradient-to-br from-brand-50 to-slate-50 px-6 text-center">
            <div className="max-w-md">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-xl text-brand-600 shadow-soft">
                <FiMapPin aria-hidden="true" />
              </span>
              <p className="mt-4 font-semibold text-navy-900">Map coming soon</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-600">
                A location has not been configured yet. Add a verified address and embed URL in
                <code className="mx-1 rounded bg-white px-1.5 py-0.5 text-xs">src/config/siteConfig.js</code>
                and the map will appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
