import { projectCategories } from '../../data/projects';

export default function ProjectFilters({ active, onChange, counts = {} }) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-2">
      {projectCategories.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-pressed={isActive}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              isActive
                ? 'border-brand-600 bg-brand-600 text-white shadow-md shadow-brand-600/25'
                : 'border-slate-300 bg-white text-navy-700 hover:border-brand-400 hover:text-brand-700'
            }`}
          >
            {label}
            {typeof counts[id] === 'number' && (
              <span className={`ml-2 text-xs ${isActive ? 'text-white/80' : 'text-navy-500'}`}>{counts[id]}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
