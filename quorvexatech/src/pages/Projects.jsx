import { useMemo, useState } from 'react';
import { FiFolder } from 'react-icons/fi';
import usePageMeta from '../hooks/usePageMeta';
import { images } from '../config/images';
import { projects, projectCategories } from '../data/projects';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ShowMoreButton from '../components/ui/ShowMoreButton';
import ConsultationCTA from '../components/ui/ConsultationCTA';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilters from '../components/projects/ProjectFilters';

const INITIAL = 6;
const STEP = 6;

export default function Projects() {
  usePageMeta('Projects', 'Browse QuorvexaTech website projects across WordPress, Shopify and e-commerce, React.js and landing pages.');
  const [category, setCategory] = useState('all');
  const [visible, setVisible] = useState(INITIAL);

  const counts = useMemo(() => {
    const result = {};
    projectCategories.forEach(({ id }) => {
      result[id] = id === 'all' ? projects.length : projects.filter((p) => p.category === id).length;
    });
    return result;
  }, []);

  const filtered = category === 'all' ? projects : projects.filter((p) => p.category === category);
  const remaining = filtered.length - visible;

  const changeCategory = (id) => {
    setCategory(id);
    setVisible(INITIAL); // reset pagination when the filter changes
  };

  return (
    <>
      <PageHero
        title="Our projects and portfolio"
        description="A look at the websites and stores we build. Filter by category to find work similar to what you have in mind."
        primaryCta={{ label: 'Start Your Project', to: '/contact#consultation' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
        image={images.projects}
        imageAlt="Analytics dashboard and design work on a desk"
      />

      <section className="section-y" aria-labelledby="portfolio-heading">
        <div className="container-page">
          <SectionHeading id="portfolio-heading" title="Selected work" description="Showing editable portfolio entries. Entries marked Placeholder are waiting for real project details." />
          <div className="mt-10"><ProjectFilters active={category} onChange={changeCategory} counts={counts} /></div>

          <div className="mt-12" aria-live="polite">
            {filtered.length === 0 ? (
              <div className="mx-auto max-w-md rounded-3xl border border-dashed border-slate-300 p-10 text-center">
                <FiFolder aria-hidden="true" className="mx-auto text-4xl text-brand-400" />
                <p className="mt-4 font-semibold text-navy-900">No projects in this category yet</p>
                <p className="mt-1 text-sm text-navy-600">Try another category, or tell us about the project you have in mind.</p>
              </div>
            ) : (
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.slice(0, visible).map((project) => (
                  <li key={project.id}><ProjectCard project={project} /></li>
                ))}
              </ul>
            )}
          </div>

          {remaining > 0 && (
            <ShowMoreButton label="Show More Projects" remaining={remaining} onClick={() => setVisible((v) => v + STEP)} />
          )}
          {remaining <= 0 && filtered.length > INITIAL && (
            <ShowMoreButton expanded onClick={() => setVisible(INITIAL)} />
          )}
        </div>
      </section>

      <ConsultationCTA title="Want a website like these?" description="Tell us about your idea and we will suggest the best platform, scope and next steps." />
    </>
  );
}
