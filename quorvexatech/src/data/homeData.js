/**
 * HOMEPAGE CONTENT
 * ---------------------------------------------------------------
 * Everything the redesigned homepage shows lives here (plus data/projects.js for projects
 * and config/siteConfig.js for links). Add new reviews to the `reviews` array; the layout adapts.
 */

// Profile-level numbers: leave null until you have verified them on your profiles.
// They are only displayed when set, e.g. fiverr: { rating: 5.0, reviewCount: 12 }
export const platformStats = {
  fiverr: { rating: null, reviewCount: null },
  upwork: { rating: null, reviewCount: null, jobSuccess: null },
};

// Set to true to show each Fiverr order's price range and duration on the review cards.
export const SHOW_ORDER_META = false;

/**
 * REVIEWS (copied from the real public Fiverr / Upwork pages supplied by the owner).
 * platform: 'upwork' | 'fiverr'     featured: true = large card
 * rating: number or null (Upwork testimonials show no star count, so none is displayed)
 * reviewUrl / projectUrl: add the public links when available; buttons only appear when set.
 */
export const reviews = [
  {
    id: 'upwork-tayyab',
    platform: 'upwork',
    featured: true,
    name: 'Tayyab M.',
    role: 'Website owner',
    project: 'UK non-profit organization website',
    date: 'Jul 2026',
    verified: true,
    rating: null,
    text: 'I had the pleasure of working with Hashir on our UK non-profit website, and the experience was excellent. He delivered a well-structured, modern, and responsive website that met our requirements and exceeded expectations. Throughout the project, he communicated clearly, responded quickly to feedback, and implemented changes efficiently. His attention to detail, technical expertise, and commitment to quality made the entire process smooth and stress-free. I highly recommend Hashir to anyone looking for a reliable and skilled web developer.',
    reviewUrl: null,
    projectUrl: null,
  },
  {
    id: 'upwork-mabroor',
    platform: 'upwork',
    featured: true,
    name: 'Mabroor A.',
    role: 'Freelancer',
    project: 'Clothing e-commerce website',
    date: 'Jul 2026',
    verified: true,
    rating: null,
    text: "I had the pleasure of working with Hashir Mahmood on my Clothing E-commerce Website project, and I couldn't be happier with the results. From the beginning, he demonstrated excellent technical knowledge, strong problem-solving skills, and a professional attitude throughout the project. The final website exceeded my expectations in terms of design, functionality, and overall quality. Hashir paid close attention to every detail, communicated effectively, and delivered the project on time. His expertise in website development was evident in every aspect of the work. I highly recommend Hashir Mahmood to anyone looking for a skilled, reliable, and dedicated web developer. I would definitely work with him again on future projects.",
    reviewUrl: null,
    projectUrl: null,
  },
  {
    id: 'fiverr-samuelbuzatu',
    platform: 'fiverr',
    name: 'samuelbuzatu',
    country: 'Romania',
    rating: 5,
    text: 'A really knowledgeable person, proffesional and proactive. Highly recommend.',
    price: 'US$50', duration: '3 days',
    reviewUrl: null,
  },
  {
    id: 'fiverr-shfitseason-1',
    platform: 'fiverr',
    name: 'shfitseason',
    country: 'Canada',
    rating: 5,
    text: 'Brilliant work it was exactly as requested',
    price: 'US$50–US$100', duration: '7 days',
    reviewUrl: null,
  },
  {
    id: 'fiverr-shfitseason-2',
    platform: 'fiverr',
    name: 'shfitseason',
    country: 'Canada',
    rating: 5,
    text: 'Well put together and great design',
    price: 'US$50–US$100', duration: '6 weeks',
    reviewUrl: null,
  },
  {
    id: 'fiverr-hi_afghan',
    platform: 'fiverr',
    name: 'hi_afghan',
    country: 'Sweden',
    rating: 4,
    text: 'This guy is doing great job, have good skills in his profession, he deserves more than what he offers. Thank you.',
    price: 'US$50', duration: '12 days',
    reviewUrl: null,
  },
  {
    id: 'fiverr-shfitseason-3',
    platform: 'fiverr',
    name: 'shfitseason',
    country: 'Canada',
    rating: 5,
    text: 'Work well done',
    price: 'US$50–US$100', duration: '6 weeks',
    reviewUrl: null,
  },
];

// Services, explained in plain language. `slug` matches data/services.js so links point at real cards.
export const serviceShowcase = [
  { slug: 'business-website', tone: 'blue', title: 'Business websites', span: 'lg:col-span-3', text: 'A clear, professional home for your business that explains what you do and makes it easy to get in touch.', benefit: 'Customers understand you in seconds.' },
  { slug: 'wordpress-website', tone: 'blue', title: 'WordPress and Elementor', span: 'lg:col-span-3', text: 'Sites you can edit yourself, designed visually with Elementor and set up with only the plugins you need.', benefit: 'Update text and images without a developer.' },
  { slug: 'ecommerce-website', tone: 'coral', title: 'E-commerce and WooCommerce', span: 'lg:col-span-4', big: 'store', text: 'Online stores with product pages, cart, checkout and payments, built on WordPress and WooCommerce when you want full control.', benefit: 'Start selling on a platform you own.' },
  { slug: 'shopify-store', tone: 'coral', title: 'Shopify stores', span: 'lg:col-span-2', text: 'A hosted store configured with your products, branding and checkout.', benefit: 'Less to maintain, easy to manage.' },
  { slug: 'landing-page', tone: 'violet', title: 'Landing pages', span: 'lg:col-span-2', big: 'funnel', text: 'One focused page built around one goal: leads, an offer or a launch.', benefit: 'A clear path to one action.' },
  { slug: 'react-website', tone: 'blue', title: 'React.js websites', span: 'lg:col-span-2', text: 'Custom-coded sites and interfaces when a template is not flexible enough.', benefit: 'Exactly the behaviour you need.' },
  { slug: 'domain-hosting-setup', tone: 'mint', title: 'Domain, hosting, SSL and launch', span: 'lg:col-span-2', big: 'launch', text: 'Help choosing a domain and host, connecting DNS and switching on HTTPS.', benefit: 'A smooth, secure go-live.' },
];

export const buildTypes = [
  { id: 'business', label: 'Business website', slug: 'business-website', cta: 'Plan a business website', features: ['Home, About, Services and Contact pages', 'Mobile-friendly layout', 'Inquiry form and WhatsApp button', 'Basic on-page SEO setup'] },
  { id: 'store', label: 'Online store', slug: 'ecommerce-website', cta: 'Plan an online store', features: ['Product and category pages', 'Cart and checkout flow', 'Payment gateway setup', 'Order emails and store basics'] },
  { id: 'landing', label: 'Landing page', slug: 'landing-page', cta: 'Plan a landing page', features: ['One focused, high-clarity layout', 'Strong call to action', 'Lead or inquiry form', 'Lightweight, quick-loading build'] },
  { id: 'portfolio', label: 'Portfolio website', slug: 'portfolio-website', cta: 'Plan a portfolio', features: ['Project gallery with detail views', 'About and contact sections', 'Layout tuned for every screen', 'Easy to add new work later'] },
];

export const approachSteps = [
  { title: 'Discovery', text: 'We learn about your business, audience, goals and requirements.' },
  { title: 'Planning', text: 'We define scope, structure, technology and what content is needed.' },
  { title: 'Design and development', text: 'We build the site and share progress so you can review it.' },
  { title: 'Testing and refinement', text: 'We check responsiveness, usability and every form and link.' },
  { title: 'Launch and support', text: 'We help with deployment, domain, hosting, SSL and agreed after-launch help.' },
];

export const whyPoints = [
  { title: 'You talk to the person building it', text: 'Direct communication, no layers of account managers.' },
  { title: 'Clear scope before work starts', text: 'You know what is included, what is not, and what third-party costs may apply.' },
  { title: 'Built mobile-first', text: 'Layouts that feel right on a phone first, then scale up.' },
  { title: 'Usability and visual quality', text: 'Readable text, sensible navigation and careful spacing.' },
  { title: 'Practical platform advice', text: 'WordPress, Shopify or React.js, whichever fits your project and budget.' },
  { title: 'Launch help where agreed', text: 'Deployment, domain connection and HTTPS are part of the conversation, not an afterthought.' },
];

export const homeFaqs = [
  { question: 'Which types of websites do you build?', answer: 'Business websites, online stores, landing pages, portfolio websites and custom React.js sites. If your idea sits between those, tell us and we will suggest a sensible structure.' },
  { question: 'Can you redesign or improve an existing website?', answer: 'Yes. We can refresh the design, fix layouts that break on mobile, restructure content, solve bugs or add new sections without starting from scratch.' },
  { question: 'Do you work with WordPress, Shopify and React.js?', answer: 'Yes. We also work with Elementor and WooCommerce. We recommend the platform that suits your goals, how often you will update the site yourself, and your budget.' },
  { question: 'Can you help with domain, hosting, SSL and deployment?', answer: 'Yes. We can help you choose a domain and hosting plan, connect DNS, switch on HTTPS and publish the site. Domain, hosting, paid themes and premium plugins are usually separate costs paid to those providers.' },
  { question: 'How does the project process work?', answer: 'We start with discovery, agree the scope and plan, then design and build, test on different screens, and launch. You can review progress along the way.' },
  { question: 'How can I request a quote?', answer: 'Send a short project brief using the form on this page or the Contact page, or message us on WhatsApp. The final quote depends on your scope, features, platform and timeline.' },
];
