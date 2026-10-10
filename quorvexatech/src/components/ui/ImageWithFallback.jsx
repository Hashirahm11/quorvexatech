import { useState } from 'react';

/**
 * Shows an <img>; if the URL is missing or fails to load, shows `fallback`
 * (any React node) so the layout never contains a broken image.
 */
export default function ImageWithFallback({ src, alt, className = '', fallback = null, eager = false, width, height }) {
  const [failedSrc, setFailedSrc] = useState(null);
  if (!src || failedSrc === src) return fallback;
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailedSrc(src)}
      className={className}
    />
  );
}
