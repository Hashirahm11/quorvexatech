import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

/**
 * Shared "Show more / Show less" control.
 * Pass `expanded` to switch to the "less" state; the parent controls what is visible.
 */
export default function ShowMoreButton({ onClick, label = 'Show More', remaining, expanded = false }) {
  return (
    <div className="mt-10 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={expanded}
        className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-brand-500 hover:text-brand-700 sm:text-base"
      >
        {expanded ? 'Show Less' : label}
        {!expanded && typeof remaining === 'number' && (
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700">{remaining} more</span>
        )}
        {expanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
      </button>
    </div>
  );
}
