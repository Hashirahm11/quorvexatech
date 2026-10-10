/**
 * PORTFOLIO DATA
 * ---------------------------------------------------------------
 * Add your real projects here. Only `id`, `title` and `category` are required.
 * Every other field is optional: missing fields simply do not render, so there
 * are never empty buttons or broken links.
 *
 *  id            unique string
 *  title         project name
 *  category      'wordpress' | 'ecommerce' | 'react' | 'landing'
 *  image         thumbnail URL or "/images/my-project.jpg" in /public  (optional)
 *  description   short summary                                         (optional)
 *  technologies  array of strings, only what was REALLY used            (optional)
 *  liveUrl       live website URL                                       (optional)
 *  caseStudyUrl  external URL or internal path such as "/projects/x"    (optional)
 *  featured      true = shown in "Featured projects" on the Home page   (optional)
 *  isPlaceholder true = shows a "Placeholder" badge. Delete this flag once real.
 *
 * The entries below are PLACEHOLDERS: no project details have been supplied yet.
 */
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'ecommerce', label: 'Shopify / E-commerce' },
  { id: 'react', label: 'React.js' },
  { id: 'landing', label: 'Landing Pages' },
];

const placeholderText = (kind) =>
  `Reserved slot for a ${kind} project. Replace this entry in src/data/projects.js with real project details.`;

export const projects = [
  { id: 'p1', title: 'WordPress business website', category: 'wordpress', description: placeholderText('WordPress'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, featured: true, isPlaceholder: true },
  { id: 'p2', title: 'Online store project', category: 'ecommerce', description: placeholderText('Shopify or e-commerce'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, featured: true, isPlaceholder: true },
  { id: 'p3', title: 'React.js website project', category: 'react', description: placeholderText('React.js'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, featured: true, isPlaceholder: true },
  { id: 'p4', title: 'Landing page project', category: 'landing', description: placeholderText('landing page'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, isPlaceholder: true },
  { id: 'p5', title: 'WordPress portfolio website', category: 'wordpress', description: placeholderText('WordPress'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, isPlaceholder: true },
  { id: 'p6', title: 'E-commerce store project', category: 'ecommerce', description: placeholderText('e-commerce'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, isPlaceholder: true },
  { id: 'p7', title: 'React.js web interface', category: 'react', description: placeholderText('React.js'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, isPlaceholder: true },
  { id: 'p8', title: 'Promotional landing page', category: 'landing', description: placeholderText('landing page'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, isPlaceholder: true },
  { id: 'p9', title: 'WordPress redesign project', category: 'wordpress', description: placeholderText('WordPress redesign'), technologies: [], liveUrl: null, caseStudyUrl: null, image: null, isPlaceholder: true },
];

export const getCategoryLabel = (id) => projectCategories.find((c) => c.id === id)?.label ?? id;
