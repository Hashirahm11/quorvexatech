import { getServiceTitle } from './services';

/**
 * EDITABLE budget brackets. These are starting points for a conversation,
 * NOT guaranteed prices. Change labels or add items here and the form,
 * estimator and Services preview all update automatically.
 */
export const budgetOptions = [
  { id: 'under-150', label: 'Under $150', hint: 'Very small tasks, fixes or one simple page' },
  { id: '150-300', label: '$150–$300', hint: 'Small websites or focused landing pages' },
  { id: '300-600', label: '$300–$600', hint: 'Business sites with several pages' },
  { id: '600-1000', label: '$600–$1,000', hint: 'Larger sites or small online stores' },
  { id: '1000-plus', label: '$1,000+', hint: 'Bigger stores, custom features or React.js builds' },
  { id: 'not-sure', label: 'Not sure — recommend a suitable budget', hint: 'We will suggest a range after hearing your needs' },
  { id: 'custom', label: 'Custom budget / Other requirements', hint: 'Describe what you need for a personalised quote', isCustom: true },
];

export const websiteTypes = [
  { id: 'business', label: 'Business website', service: getServiceTitle('business-website') },
  { id: 'ecommerce', label: 'Online store', service: getServiceTitle('ecommerce-website') },
  { id: 'landing', label: 'Landing page', service: getServiceTitle('landing-page') },
  { id: 'portfolio', label: 'Portfolio website', service: getServiceTitle('portfolio-website') },
  { id: 'redesign', label: 'Redesign of an existing site', service: getServiceTitle('website-redesign') },
  { id: 'react', label: 'Custom React.js website', service: getServiceTitle('react-website') },
  { id: 'other', label: 'Something else', service: 'Other / Not sure' },
];

export const estimatorServices = [
  'Website design',
  'Website development',
  'Online store setup',
  'Domain and hosting setup',
  'SSL / HTTPS setup',
  'Content and image setup',
  'Ongoing maintenance',
];

export const pageCountOptions = ['1 page', '2–5 pages', '6–10 pages', '10+ pages', 'Not sure yet'];

export const timelineOptions = [
  'As soon as possible',
  'Within 2 weeks',
  'Within 1 month',
  '1–3 months',
  'Flexible / not sure',
];
