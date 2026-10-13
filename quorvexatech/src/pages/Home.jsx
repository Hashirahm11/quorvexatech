import usePageMeta from '../hooks/usePageMeta';
import '../components/home/home.css';
import HeroSection from '../components/home/HeroSection';
import ReviewsSection from '../components/home/ReviewsSection';
import ProjectShowcase from '../components/home/ProjectShowcase';
import ServicesShowcase from '../components/home/ServicesShowcase';
import BuildExplorer from '../components/home/BuildExplorer';
import ApproachTimeline from '../components/home/ApproachTimeline';
import WhyUs from '../components/home/WhyUs';
import ProjectStarter from '../components/home/ProjectStarter';
import HomeFAQ from '../components/home/HomeFAQ';
import FinalCTA from '../components/home/FinalCTA';

/**
 * Redesigned homepage. Header, footer and the other pages are untouched; they come from Layout.
 * Content lives in src/data/homeData.js (reviews, services, FAQs), src/data/projects.js (projects)
 * and src/config/siteConfig.js (links).
 */
export default function Home() {
  usePageMeta(
    null,
    'QuorvexaTech is an independent web studio building responsive business websites, online stores and landing pages with WordPress, Shopify and React.js.',
  );

  return (
    <div className="qx-home">
      <HeroSection />
      <ServicesShowcase />
      <BuildExplorer />
      <ReviewsSection />
      <ProjectShowcase />
      <ApproachTimeline />
      <WhyUs />
      <ProjectStarter />
      <HomeFAQ />
      <FinalCTA />
    </div>
  );
}
