import { FaWordpress, FaShopify, FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiAstra, SiElementor, SiExpress, SiNextdotjs, SiNodedotjs, SiPhp, SiWoocommerce, SiYoast } from 'react-icons/si';
import { FiDatabase, FiSmartphone } from 'react-icons/fi';

export const skills = [
  { name: 'WordPress', icon: FaWordpress, note: 'Business sites and blogs you can edit yourself' },
  { name: 'Elementor', icon: SiElementor, note: 'Visual page building and custom layouts' },
  { name: 'WooCommerce', icon: SiWoocommerce, note: 'Online stores on WordPress' },
  { name: 'Yoast', icon: SiYoast, note: 'Search engine optimization for WordPress' },
  { name: 'Astra', icon: SiAstra, note: 'WordPress theme customization' },
  { name: 'Shopify', icon: FaShopify, note: 'Hosted stores with built-in checkout' },
  { name: 'React.js', icon: FaReact, note: 'Custom, component-based websites' },
  { name: 'Next.js', icon: SiNextdotjs, note: 'React framework for full-stack web applications' },
  { name: 'Node.js', icon: SiNodedotjs, note: 'JavaScript runtime for server-side applications' },
  { name: 'Database', icon: FiDatabase, note: 'Application data storage and management' },
  { name: 'PHP', icon: SiPhp, note: 'Server-side application development' },
  { name: 'Express.js', icon: SiExpress, note: 'Web framework for Node.js applications' },
  { name: 'JavaScript', icon: FaJs, note: 'Interactivity and dynamic features' },
  { name: 'HTML', icon: FaHtml5, note: 'Semantic, accessible markup' },
  { name: 'CSS', icon: FaCss3Alt, note: 'Clean, modern styling' },
  { name: 'Responsive design', icon: FiSmartphone, note: 'Layouts that work on every screen' },
];
