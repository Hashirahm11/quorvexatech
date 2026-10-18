import usePageMeta from '../hooks/usePageMeta';
import { team } from '../data/team';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ConsultationCTA from '../components/ui/ConsultationCTA';
import TeamMemberCard from '../components/team/TeamMemberCard';

export default function Team() {
  usePageMeta('Our Team', 'Meet the QuorvexaTech team: the people who design, build and launch your website.');
  const [leader, ...members] = team;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl animate-rise">
            <h1 className="text-4xl font-extrabold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.4rem]">Meet the team behind QuorvexaTech</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
              A small team of developers who plan, design, build and launch your website together, so you always know who is working on it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact#consultation">Work with us</Button>
              <Button to="/projects" variant="secondary">See our projects</Button>
            </div>
          </div>
        </div>
      </section>

      {leader && (
        <section className="container-page pb-16 sm:pb-20" aria-label="Leadership">
          <TeamMemberCard member={leader} variant="featured" />
        </section>
      )}

      {members.length > 0 && (
        <section className="section-y bg-slate-50" aria-labelledby="team-heading">
          <div className="container-page">
            <SectionHeading id="team-heading" title="The people who build your project" description="Each project is handled by the right mix of skills, from interface design to servers and APIs." />
            <ul className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-6">
              {members.map((m) => <li key={m.id} className="w-full max-w-sm sm:w-[calc(50%-12px)] sm:max-w-none lg:w-[calc(33.333%-16px)]"><TeamMemberCard member={m} /></li>)}
            </ul>
          </div>
        </section>
      )}

      <div className={members.length > 0 ? 'pt-16 sm:pt-20 lg:pt-24' : ''}><ConsultationCTA title="Want to work with us?" description="Tell us about your project and we will suggest the right approach and the right people for it." /></div>
    </>
  );
}
