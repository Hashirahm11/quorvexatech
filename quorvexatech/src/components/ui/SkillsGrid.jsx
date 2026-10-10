import { skills } from '../../data/skills';

/** `detailed` shows the one-line note under each skill (About page). */
export default function SkillsGrid({ detailed = false }) {
  return (
    <ul className={`grid gap-4 ${detailed ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-9'}`}>
      {skills.map(({ name, icon: Icon, note }) => (
        <li
          key={name}
          className={`rounded-2xl border border-slate-200 bg-white shadow-soft ${
            detailed ? 'flex items-start gap-4 p-5' : 'flex flex-col items-center gap-3 p-4 text-center'
          }`}
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl text-brand-700">
            <Icon aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold text-navy-900">{name}</p>
            {detailed && <p className="mt-1 text-sm leading-relaxed text-navy-600">{note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
