import {
  FiMonitor, FiShoppingCart, FiTarget, FiShoppingBag, FiCode, FiUser,
  FiServer, FiLock, FiRefreshCw, FiSmartphone, FiTool, FiZap, FiLayout,
} from 'react-icons/fi';
import { FaWordpress, FaShopify } from 'react-icons/fa';

/**
 * Services data. Add, remove or reorder items freely; every page reads from here.
 * The first 12 are the core services; the rest appear after "Show More Services".
 */
export const services = [
  {
    slug: 'business-website',
    title: 'Business Website Development',
    icon: FiMonitor,
    description: 'A clear, professional website that explains what you do and makes it easy for customers to contact you.',
    features: ['Custom multi-page layout', 'Mobile-friendly design', 'Contact forms and inquiry buttons', 'Basic on-page SEO setup'],
  },
  {
    slug: 'ecommerce-website',
    title: 'E-commerce Website Development',
    icon: FiShoppingCart,
    description: 'An online store set up to showcase your products and take orders on the platform that suits your business.',
    features: ['Product catalog and categories', 'Cart and checkout setup', 'Payment gateway integration', 'Store pages tuned for mobile'],
  },
  {
    slug: 'landing-page',
    title: 'Landing Page Design and Development',
    icon: FiTarget,
    description: 'A focused single page built around one goal, such as collecting leads, promoting an offer or launching a product.',
    features: ['Conversion-focused layout', 'Clear calls to action', 'Lead or inquiry form', 'Fast, lightweight build'],
  },
  {
    slug: 'wordpress-website',
    title: 'WordPress Website Development',
    icon: FaWordpress,
    description: 'A WordPress site you can update yourself, built with a clean theme setup and sensible plugins.',
    features: ['Theme setup and customization', 'Elementor page building', 'Easy content editing', 'Essential plugin configuration'],
  },
  {
    slug: 'shopify-store',
    title: 'Shopify Store Development',
    icon: FaShopify,
    description: 'A Shopify store configured for your products, branding and checkout flow, ready for you to manage.',
    features: ['Theme setup and branding', 'Product and collection setup', 'Payments and shipping basics', 'Store walkthrough for you'],
  },
  {
    slug: 'react-website',
    title: 'React.js Website Development',
    icon: FiCode,
    description: 'A fast, custom-built website or web interface using React.js when you need more flexibility than a template.',
    features: ['Component-based architecture', 'Custom pages and interactions', 'Deployment-ready build', 'Clean, maintainable code'],
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website Development',
    icon: FiUser,
    description: 'A polished personal or creative portfolio that presents your work and gets you noticed.',
    features: ['Project gallery layout', 'About and contact sections', 'Responsive across devices', 'Easy to update later'],
  },
  {
    slug: 'domain-hosting-setup',
    title: 'Domain Registration Assistance and Hosting Setup',
    icon: FiServer,
    description: 'Help choosing a domain and a hosting plan, then connecting everything so your site goes live correctly.',
    features: ['Domain name guidance', 'Hosting plan recommendations', 'DNS and domain connection', 'Site deployment to hosting'],
  },
  {
    slug: 'ssl-https-setup',
    title: 'SSL Certificate Setup and HTTPS Configuration',
    icon: FiLock,
    description: 'Secure your site with HTTPS so visitors see the padlock and your pages load over an encrypted connection.',
    features: ['SSL certificate installation', 'HTTP to HTTPS redirects', 'Mixed-content fixes', 'Configuration check'],
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign and Customization',
    icon: FiRefreshCw,
    description: 'Give an outdated or hard-to-use website a fresh look and a better structure without starting from scratch.',
    features: ['Layout and visual refresh', 'Content restructuring', 'Custom sections and features', 'Improved navigation'],
  },
  {
    slug: 'responsive-ui',
    title: 'Responsive Design and UI Improvements',
    icon: FiSmartphone,
    description: 'Fix layouts that break on phones and tablets and improve spacing, typography and usability.',
    features: ['Mobile and tablet fixes', 'Spacing and typography polish', 'Button and form improvements', 'Cross-browser checks'],
  },
  {
    slug: 'maintenance-bug-fixes',
    title: 'Website Maintenance and Bug Fixes',
    icon: FiTool,
    description: 'Ongoing help keeping your website working: fixing issues, updating content and handling small changes.',
    features: ['Bug diagnosis and fixes', 'Content and plugin updates', 'Small feature changes', 'Issue-by-issue or ongoing support'],
  },
  // ---- Additional services (revealed by "Show More Services") ----
  {
    slug: 'woocommerce-store',
    title: 'WooCommerce Store Development',
    icon: FiShoppingBag,
    description: 'An online store built on WordPress with WooCommerce, ideal if you want full control over your shop.',
    features: ['Product and category setup', 'Checkout and payment setup', 'Shipping and tax basics', 'Store management handover'],
  },
  {
    slug: 'elementor-design',
    title: 'Elementor Page Design',
    icon: FiLayout,
    description: 'Custom pages designed with Elementor so you can edit sections visually after launch.',
    features: ['Custom page layouts', 'Reusable sections', 'Mobile layout tuning', 'Editing tips for your team'],
  },
  {
    slug: 'speed-optimization',
    title: 'Website Speed Improvements',
    icon: FiZap,
    description: 'Practical clean-up to help your pages load faster, such as image handling and unnecessary scripts.',
    features: ['Image optimization', 'Plugin and script review', 'Caching setup where supported', 'Before-and-after check'],
  },
];

export const getServiceTitle = (slug) => services.find((s) => s.slug === slug)?.title ?? 'Other / Not sure';

/** Options for the contact form "Service required" field. */
export const serviceOptions = ['Free Consultation', ...services.map((s) => s.title), 'Other / Not sure'];

export const serviceNotes =
  'Domain registration, hosting, paid themes, premium plugins and other third-party subscriptions are usually separate from development fees. Where they apply, they are discussed with you before anything is purchased.';
