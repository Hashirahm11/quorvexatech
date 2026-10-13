import { useEffect, useRef, useState } from 'react';

/** Returns [ref, seen]: `seen` flips to true (once) when the element scrolls into view. */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) { setSeen(true); return undefined; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) { setSeen(true); io.disconnect(); }
    }, { threshold, rootMargin: '0px 0px -6% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

/** Fades and lifts its children in when scrolled into view. `delay` is in milliseconds. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag ref={ref} style={{ '--d': `${delay}ms` }} className={`qx-reveal ${seen ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
