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
 *  image         thumbnail URL or "/images/projects/my-project.jpg" in /public  (optional)
 *  description   short summary                                                   (optional)
 *  technologies  array of strings, only what was REALLY used                     (optional)
 *  liveUrl       live website URL                                                 (optional)
 *  caseStudyUrl  external URL or internal path such as "/projects/x"             (optional)
 *  featured      true = shown in "Featured projects" on the Home page            (optional)
 */
export const projectCategories = [
  { id: 'all',       label: 'All Projects' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'ecommerce', label: 'Shopify / E-commerce' },
  { id: 'react',     label: 'React.js' },
  { id: 'landing',   label: 'Landing Pages' },
];

export const projects = [
  {
    id: '90nine',
    title: '90NINE — Brand Approvals Platform',
    category: 'wordpress',
    image: '/images/projects/90nine.jpg',
    description:
      'A multi-page WordPress e-commerce and brand-approvals portal for a UK company. The site showcases curated branded products (Garmin, Haier, Oura and more) across five major categories, with full user account management, wishlist, cart and 24/7 customer support integrations.',
    technologies: ['WordPress', 'WooCommerce', 'Custom Theme'],
    liveUrl: 'https://www.90nine.co.uk/',
    featured: true,
  },
  {
    id: 'reachandserve',
    title: 'Reach & Serve Foundation',
    category: 'wordpress',
    image: '/images/projects/reachandserve.jpg',
    description:
      'A charity website for a registered Canadian non-profit combating food scarcity. The site features clear pathways for volunteers, donors and people seeking help, an online donation integration, and a discreet dignity-first approach that sets it apart from traditional food bank sites.',
    technologies: ['WordPress', 'Elementor'],
    liveUrl: 'https://reachandserve.com/',
    featured: true,
  },
  {
    id: 'youpam',
    title: 'YouPAM — Telemedicine Web App',
    category: 'react',
    image: '/images/projects/youpam.jpg',
    description:
      'Frontend UI work and bug fixing on a digital healthcare platform that connects patients with health professionals via secure video consultations. Features include Stripe payment integration, a personal health document vault (PAM Drive), and a local health events directory.',
    technologies: ['React.js', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://youpam.com/',
    featured: true,
  },
  {
    id: 'oddsmask',
    title: 'OddsMask — Sports Betting Tips',
    category: 'react',
    image: '/images/projects/oddsmask.jpg',
    description:
      'A React.js sports betting tips and predictions platform covering Football, Cricket, Tennis, UFC, Horse Racing and more. Built to deliver daily expert picks, value accumulators and live in-play guidance, with a Telegram community integration for real-time alerts.',
    technologies: ['React.js'],
    liveUrl: 'https://oddsmask.com/',
    featured: false,
  },
  {
    id: 'uniquessupply',
    title: 'Unique Supplies — Retail Fixtures Store',
    category: 'ecommerce',
    image: '/images/projects/uniquessupply.jpg',
    description:
      'A B2B and B2C e-commerce store for a Canadian business specialising in retail display fixtures, mannequins, packaging and store equipment. Built on Wix with a full product catalogue, shopping cart and category browsing aimed at boutiques and commercial retailers across Canada.',
    technologies: ['Wix'],
    liveUrl: 'https://www.uniquessupply.com/',
    featured: false,
  },
  {
    id: 'kingdomalignment',
    title: 'Kingdom Alignment Ministries',
    category: 'wordpress',
    image: '/images/projects/kingdomalignment.jpg',
    description:
      'A WordPress church and ministry website for a registered non-profit in Ontario, Canada. The site drives online giving, service attendance, prayer requests and discipleship sign-ups, and also showcases the Reach & Serve Foundation community outreach programme.',
    technologies: ['WordPress', 'Elementor'],
    liveUrl: 'https://kingdomalignmentministries.com/',
    featured: false,
  },
];

export const getCategoryLabel = (id) => projectCategories.find((c) => c.id === id)?.label ?? id;
