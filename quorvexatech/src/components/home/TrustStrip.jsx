import { FaStar } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import siteConfig from '../../config/siteConfig';
import { isConfigured } from '../../utils/links';
import { skills } from '../../data/skills';
import { reviews, platformStats } from '../../data/homeData';

function PlatformChip({ name, Icon, url, count, stats, color }) {
  const inner = (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-full text-lg text-white" style={{ background: color }}><Icon aria-hidden="true" /></span>
      <span className="text-left">
        <span className="block text-sm font-bold text-[#10172F]">{name}</span>
        <span className="block text-xs text-[#5a6480]">
          {stats.rating != null && <><FaStar aria-hidden="true" className="mr-1 inline text-[#FF8066]" />{stats.rating} · </>}
          {stats.reviewCount != null ? `${stats.reviewCount} reviews` : `${count} review${count === 1 ? '' : 's'} featured below`}
        </span>
      </span>
    </>
  );
  const base = 'inline-flex items-center gap-3 rounded-full border border-[#10172F]/10 bg-white py-2 pl-2 pr-5 transition';
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${base} hover:border-[#3867FF] hover:shadow-md`}>
      {inner}<span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <span className={`${base} opacity-70`} title={`Add your ${name} link in src/config/siteConfig.js`}>{inner}</span>
  );
}

/** Compact trust band: marketplace profiles, what is featured below, and technologies. */
export default function TrustStrip() {
  const fiverrUrl = isConfigured(siteConfig.freelancing.fiverr) ? siteConfig.freelancing.fiverr : null;
  const upworkUrl = isConfigured(siteConfig.freelancing.upwork) ? siteConfig.freelancing.upwork : null;
  const count = (p) => reviews.filter((r) => r.platform === p).length;

  return (
    <section className="border-y border-[#10172F]/10 bg-white" aria-label="Credibility">
      <div className="container-page flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <p className="max-w-[11rem] text-sm font-semibold leading-snug text-[#10172F]">Work and reviews you can check yourself</p>
          <div className="flex flex-wrap gap-3 sm:flex-nowrap">
            <PlatformChip name="Fiverr" Icon={SiFiverr} url={fiverrUrl} count={count('fiverr')} stats={platformStats.fiverr} color="#1DBF73" />
            <PlatformChip name="Upwork" Icon={SiUpwork} url={upworkUrl} count={count('upwork')} stats={platformStats.upwork} color="#14A800" />
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end" aria-label="Technologies">
          {skills.filter((s) => ['WordPress', 'Elementor', 'WooCommerce', 'Shopify', 'React.js'].includes(s.name)).map(({ name, icon: Icon }) => (
            <li key={name} className="inline-flex items-center gap-2 text-sm font-medium text-[#5a6480]"><Icon aria-hidden="true" className="text-lg text-[#10172F]" />{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
