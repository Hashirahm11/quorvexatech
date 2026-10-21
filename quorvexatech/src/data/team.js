import siteConfig from '../config/siteConfig';

/**
 * TEAM DATA
 * ---------------------------------------------------------------
 * The first person is shown large as the leader; everyone after that appears in the team grid.
 * To add someone later: copy one object, add their photo to /public/images/team/ and push to GitHub.
 *
 *  name      full name. If left empty, the card shows only the role as its heading.
 *  role      job title shown on the card
 *  focus     one short line about what they do (keep it factual)
 *  bio       optional paragraphs (used on the large leader card)
 *  skills    ONLY skills this person genuinely has. Leave [] to hide the skills block.
 *  photo     "/images/team/file.webp"  (portrait, about 4:5, at least 400px wide is best)
 *  photoPosition  optional CSS object-position, default "top"
 *  links     linkedin, github, fiverr, upwork, portfolio: only filled-in links are shown
 */
export const team = [
  {
    id: 'hashir-mahmood',
    name: 'Hashir Mahmood',
    role: 'Founder & CEO',
    focus: 'Leads QuorvexaTech and builds client websites from first conversation to launch.',
    bio: [
      'Hashir started QuorvexaTech to build clear, responsive websites for businesses, charities and communities. He leads each project personally, from understanding your goals to launching the finished site.',
      'He works across WordPress, Shopify and React.js, and recommends the platform that fits your project and budget rather than the one that is trendy.',
    ],
    skills: ['WordPress', 'Elementor', 'WooCommerce', 'Shopify', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive design'],
    photo: '/images/team/hashir-mahmood.webp',
    links: {
      linkedin: siteConfig.socials.linkedin,
      github: siteConfig.socials.github,
      fiverr: siteConfig.freelancing.fiverr,
      upwork: siteConfig.freelancing.upwork,
      portfolio: siteConfig.developerPortfolio.url,
    },
  },
  {
    id: 'frontend-ui-developer',
    name: '', // add the full name here
    role: 'Frontend UI Developer',
    focus: 'Turns designs into clean, responsive user interfaces.',
    skills: [], // add real skills, e.g. ['HTML', 'CSS', 'JavaScript', 'React.js']
    photo: '/images/team/frontend-ui-developer.webp',
    links: {},
  },
  {
    id: 'mabroor-ahmad',
    name: 'Mabroor Ahmad',
    role: 'Backend Developer',
    focus: 'Handles server-side logic, APIs and integrations.',
    skills: [], // add real skills
    photo: '/images/team/mabroor-ahmad.jpeg',
    links: {},
  },
];
