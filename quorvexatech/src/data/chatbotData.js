import { services, getServiceTitle } from './services';
import { approachSteps } from './homeData';

/**
 * CHATBOT CONTENT
 * ---------------------------------------------------------------
 * The bot is a guided FAQ: every answer below is written by you, nothing is generated.
 * Edit the text freely. To add a topic, add an object to `topics` and (optionally) its id to `mainMenu`.
 *
 * Topic fields
 *   id        unique key
 *   label     the question shown as a tappable button
 *   keywords  words that make typed questions match this topic (lower case)
 *   text      the answer (line breaks are kept)
 *   actions   buttons under the answer. Types:
 *             { type: 'link', label, to }   internal page, e.g. '/services'
 *             { type: 'whatsapp', label }   hidden until your WhatsApp number is set in siteConfig.js
 *             { type: 'email', label }      hidden until your email is set
 *             { type: 'fiverr' | 'upwork', label }  hidden until that profile link is set
 *   next      ids of follow-up questions offered after the answer
 */
const coreServices = services.slice(0, 7).map((s) => `• ${s.title}`).join('\n');

export const topics = [
  {
    id: 'services',
    label: 'What services do you offer?',
    keywords: ['service', 'offer', 'build', 'what do you do', 'website types', 'develop'],
    text: `We build business websites, online stores, landing pages, portfolio sites and custom React.js websites. For example:\n${coreServices}\n\nWe also help with domains, hosting, SSL, redesigns and maintenance.`,
    actions: [{ type: 'link', label: 'See all services', to: '/services' }],
    next: ['pricing', 'platforms', 'quote'],
  },
  {
    id: 'pricing',
    label: 'How much does a website cost?',
    keywords: ['price', 'cost', 'how much', 'budget', 'cheap', 'rate', 'charge', 'fee', 'afford', 'expensive'],
    text: 'There is no single price: it depends on the number of pages, features, platform and timeline, so we do not give instant quotes. The budget planner on the Contact page shows starting ranges and lets you describe what you need.\n\nDomain, hosting, paid themes and premium plugins are usually separate costs paid to those providers.',
    actions: [
      { type: 'link', label: 'Open the budget planner', to: '/contact#budget' },
      { type: 'link', label: 'Free consultation', to: '/contact#consultation' },
    ],
    next: ['quote', 'timeline'],
  },
  {
    id: 'timeline',
    label: 'How long does a project take?',
    keywords: ['how long', 'time', 'timeline', 'deadline', 'days', 'weeks', 'fast', 'urgent', 'delivery', 'deliver', 'when'],
    text: 'It depends on the size of the project and how quickly content and feedback arrive. A landing page is much quicker than a full online store. We give you a realistic timeline once the scope is clear.',
    actions: [],
    next: ['process', 'quote'],
  },
  {
    id: 'process',
    label: 'How does the process work?',
    keywords: ['process', 'steps', 'how do you work', 'workflow', 'procedure', 'stages', 'how it works'],
    text: approachSteps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join('\n'),
    actions: [],
    next: ['timeline', 'quote'],
  },
  {
    id: 'platforms',
    label: 'WordPress, Shopify or React.js?',
    keywords: ['wordpress', 'shopify', 'react', 'woocommerce', 'elementor', 'platform', 'which', 'cms', 'wix', 'squarespace'],
    text: 'WordPress (with Elementor or WooCommerce) suits sites you want to edit yourself. Shopify suits stores that want a hosted, low-maintenance setup. React.js suits custom-built sites that need special behaviour.\n\nTell us your goals and we will recommend the best fit.',
    actions: [{ type: 'link', label: 'Ask for a recommendation', to: '/contact#contact-form' }],
    next: ['services', 'pricing'],
  },
  {
    id: 'redesign',
    label: 'Can you improve my existing website?',
    keywords: ['redesign', 'existing', 'old', 'improve', 'fix', 'bug', 'revamp', 'update', 'maintenance', 'broken', 'mobile'],
    text: 'Yes. We can refresh the design, fix layouts that break on phones, solve bugs, add sections or help with ongoing maintenance, without rebuilding from scratch.',
    actions: [{ type: 'link', label: 'Request a redesign quote', to: `/contact?service=${encodeURIComponent(getServiceTitle('website-redesign'))}#contact-form` }],
    next: ['pricing', 'quote'],
  },
  {
    id: 'hosting',
    label: 'Do you help with domain, hosting and SSL?',
    keywords: ['domain', 'hosting', 'host', 'ssl', 'https', 'dns', 'deploy', 'launch', 'namecheap', 'certificate', 'publish'],
    text: 'Yes. We can help you choose a domain and hosting plan, connect DNS, switch on HTTPS and publish your site. The domain and hosting fees themselves are paid to those providers.',
    actions: [{ type: 'link', label: 'See launch services', to: '/services#domain-hosting-setup' }],
    next: ['pricing', 'quote'],
  },
  {
    id: 'work',
    label: 'Can I see your work and reviews?',
    keywords: ['portfolio', 'work', 'example', 'review', 'testimonial', 'project', 'client', 'fiverr', 'upwork', 'proof', 'trust'],
    text: 'You can read client reviews from Fiverr and Upwork on our homepage, and browse our projects on the Projects page.',
    actions: [
      { type: 'link', label: 'Read client reviews', to: '/#reviews' },
      { type: 'link', label: 'Browse projects', to: '/projects' },
      { type: 'fiverr', label: 'Fiverr profile' },
      { type: 'upwork', label: 'Upwork profile' },
    ],
    next: ['quote', 'services'],
  },
  {
    id: 'quote',
    label: 'How do I get a quote?',
    keywords: ['quote', 'estimate', 'proposal', 'hire', 'order', 'start project', 'get started', 'begin'],
    text: 'Send a short project brief using the form on the Contact page, or message us on WhatsApp. We reply with advice and next steps, and the final quote depends on your scope.',
    actions: [
      { type: 'link', label: 'Send a project brief', to: '/contact#contact-form' },
      { type: 'whatsapp', label: 'Message on WhatsApp' },
    ],
    next: ['pricing', 'process'],
  },
  {
    id: 'contact',
    label: 'How can I contact you?',
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'call', 'reach', 'talk', 'human', 'person', 'speak', 'support', 'help', 'agent'],
    text: 'The quickest way is WhatsApp. You can also use the contact form or send an email, and we will get back to you.',
    actions: [
      { type: 'whatsapp', label: 'Chat on WhatsApp' },
      { type: 'email', label: 'Send an email' },
      { type: 'link', label: 'Open the contact page', to: '/contact' },
    ],
    next: ['quote', 'pricing'],
  },
];

export const mainMenu = ['services', 'pricing', 'quote', 'work', 'process', 'contact'];
export const moreMenu = ['timeline', 'platforms', 'redesign', 'hosting'];

export const greeting =
  'Hi! I am the QuorvexaTech guide, an automated assistant. Tap a question below, or type a keyword like "price" or "WordPress". For anything specific, I can connect you with the team.';

export const fallbackText =
  'I am a simple guide, so I may not have an answer to that one. Pick a topic below, or talk to the team directly and they will help.';

/** Finds the best topic for typed text by counting keyword matches. Returns null when nothing matches. */
export function findTopic(input) {
  const q = input.toLowerCase();
  let best = null;
  let bestScore = 0;
  topics.forEach((t) => {
    const score = t.keywords.reduce((n, k) => n + (q.includes(k) ? 1 : 0), 0);
    if (score > bestScore) { best = t; bestScore = score; }
  });
  return best;
}
