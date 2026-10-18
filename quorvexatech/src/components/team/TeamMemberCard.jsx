import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';
import ImageWithFallback from '../ui/ImageWithFallback';
import { isConfigured } from '../../utils/links';
import { skills as skillCatalog } from '../../data/skills';

const linkMeta = {
  linkedin: { label: 'LinkedIn', Icon: FaLinkedinIn },
  github: { label: 'GitHub', Icon: FaGithub },
  fiverr: { label: 'Fiverr', Icon: SiFiverr },
  upwork: { label: 'Upwork', Icon: SiUpwork },
  portfolio: { label: 'Portfolio', Icon: FiGlobe },
};

const initials = (text) => text.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');

function Photo({ member, className }) {
  const label = member.name || member.role;
  return (
    <ImageWithFallback
      src={member.photo}
      alt={`Portrait of ${label}`}
      width={400}
      height={500}
      style={{ objectPosition: member.photoPosition || 'top' }}
      className={className}
      fallback={
        <div role="img" aria-label={`Portrait of ${label}`} className="grid h-full w-full place-items-center bg-gradient-to-br from-brand-600 to-navy-900 text-5xl font-extrabold text-white">
          {initials(label)}
        </div>
      }
    />
  );
}

function SkillChips({ skills }) {
  if (!skills?.length) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Skills">
      {skills.map((name) => {
        const Icon = skillCatalog.find((s) => s.name === name)?.icon;
        return (
          <li key={name} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-800">
            {Icon && <Icon aria-hidden="true" className="text-base" />}{name}
          </li>
        );
      })}
    </ul>
  );
}

function MemberLinks({ member }) {
  const shown = Object.entries(member.links || {}).filter(([key, url]) => linkMeta[key] && isConfigured(url));
  if (!shown.length) return null;
  const who = member.name || member.role;
  return (
    <ul className="flex flex-wrap gap-2" aria-label={`${who} on the web`}>
      {shown.map(([key, url]) => {
        const { label, Icon } = linkMeta[key];
        return (
          <li key={key}>
            <a href={url} target="_blank" rel="noopener noreferrer" title={label} className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-navy-800 transition hover:bg-brand-600 hover:text-white">
              <Icon aria-hidden="true" /><span className="sr-only">{who} on {label} (opens in a new tab)</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** variant="featured": large leader card.  variant="card" (default): grid card. */
export default function TeamMemberCard({ member, variant = 'card' }) {
  const { name, role, focus, bio = [], skills } = member;

  if (variant === 'featured') {
    return (
      <article className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-6 md:grid-cols-[minmax(0,340px)_1fr] lg:gap-12 lg:p-8">
        <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-slate-100 md:max-w-none">
          <Photo member={member} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="w-fit rounded-full bg-navy-900 px-3.5 py-1 text-sm font-semibold text-white">{role}</p>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{name || role}</h2>
          {focus && <p className="mt-2 text-lg text-brand-700">{focus}</p>}
          {bio.map((p) => <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-navy-600">{p}</p>)}
          {skills?.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-bold text-navy-900">Skills and technology</h3>
              <SkillChips skills={skills} />
            </div>
          )}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link to="/contact#consultation" className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Discuss your project <FiArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" />
            </Link>
            <MemberLinks member={member} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
      <div className="aspect-[4/5] overflow-hidden bg-slate-100">
        <Photo member={member} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {name && <p className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">{role}</p>}
        <h3 className={`text-xl font-bold text-navy-900 ${name ? 'mt-3' : ''}`}>{name || role}</h3>
        {focus && <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{focus}</p>}
        {skills?.length > 0 && <div className="mt-4"><SkillChips skills={skills} /></div>}
        <div className="mt-auto pt-5"><MemberLinks member={member} /></div>
      </div>
    </article>
  );
}
