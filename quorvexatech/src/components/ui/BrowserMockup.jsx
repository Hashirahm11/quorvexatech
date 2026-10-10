/** Inline SVG illustration used as a reliable fallback for photos. No network needed. */
export default function BrowserMockup({ className = '', label = 'Illustration of a website layout in a browser window' }) {
  return (
    <svg viewBox="0 0 640 440" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f1b3d" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="bm-hero" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="1" stopColor="#eff6ff" />
        </linearGradient>
      </defs>
      <rect width="640" height="440" fill="url(#bm-bg)" />
      <circle cx="560" cy="60" r="120" fill="#60a5fa" opacity="0.18" />
      <circle cx="70" cy="400" r="150" fill="#3b82f6" opacity="0.16" />
      <rect x="64" y="52" width="512" height="336" rx="18" fill="#fff" />
      <path d="M64 70a18 18 0 0 1 18-18h476a18 18 0 0 1 18 18v28H64z" fill="#e2e8f0" />
      <circle cx="92" cy="75" r="6" fill="#f87171" />
      <circle cx="112" cy="75" r="6" fill="#fbbf24" />
      <circle cx="132" cy="75" r="6" fill="#34d399" />
      <rect x="160" y="66" width="260" height="18" rx="9" fill="#fff" />
      <rect x="88" y="120" width="330" height="22" rx="8" fill="#0f1b3d" />
      <rect x="88" y="152" width="250" height="22" rx="8" fill="#0f1b3d" />
      <rect x="88" y="190" width="300" height="9" rx="4.5" fill="#94a3b8" />
      <rect x="88" y="208" width="270" height="9" rx="4.5" fill="#cbd5e1" />
      <rect x="88" y="236" width="104" height="34" rx="17" fill="#2563eb" />
      <rect x="204" y="236" width="104" height="34" rx="17" fill="#e2e8f0" />
      <rect x="440" y="118" width="116" height="152" rx="14" fill="url(#bm-hero)" />
      <path d="M470 232l24-34 18 22 14-16 30 28z" fill="#60a5fa" opacity="0.7" />
      <circle cx="476" cy="152" r="12" fill="#2563eb" opacity="0.8" />
      <rect x="88" y="296" width="148" height="70" rx="12" fill="#eff6ff" />
      <rect x="250" y="296" width="148" height="70" rx="12" fill="#eff6ff" />
      <rect x="412" y="296" width="144" height="70" rx="12" fill="#eff6ff" />
      <rect x="102" y="312" width="60" height="8" rx="4" fill="#2563eb" />
      <rect x="102" y="330" width="100" height="7" rx="3.5" fill="#cbd5e1" />
      <rect x="264" y="312" width="60" height="8" rx="4" fill="#2563eb" />
      <rect x="264" y="330" width="100" height="7" rx="3.5" fill="#cbd5e1" />
      <rect x="426" y="312" width="60" height="8" rx="4" fill="#2563eb" />
      <rect x="426" y="330" width="100" height="7" rx="3.5" fill="#cbd5e1" />
    </svg>
  );
}
