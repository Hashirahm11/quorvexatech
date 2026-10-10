import { FaWordpress, FaShopify, FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiElementor, SiWoocommerce } from 'react-icons/si';
import { FiSmartphone } from 'react-icons/fi';

export const skills = [
  { name: 'WordPress', icon: FaWordpress, note: 'Business sites and blogs you can edit yourself' },
  { name: 'Elementor', icon: SiElementor, note: 'Visual page building and custom layouts' },
  { name: 'WooCommerce', icon: SiWoocommerce, note: 'Online stores on WordPress' },
  { name: 'Shopify', icon: FaShopify, note: 'Hosted stores with built-in checkout' },
  { name: 'React.js', icon: FaReact, note: 'Custom, component-based websites' },
  { name: 'JavaScript', icon: FaJs, note: 'Interactivity and dynamic features' },
  { name: 'HTML', icon: FaHtml5, note: 'Semantic, accessible markup' },
  { name: 'CSS', icon: FaCss3Alt, note: 'Clean, modern styling' },
  { name: 'Responsive design', icon: FiSmartphone, note: 'Layouts that work on every screen' },
];
