import usePageMeta from '../hooks/usePageMeta';
import Button from '../components/ui/Button';

export default function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for does not exist.');
  return (
    <section className="container-page grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="text-7xl font-extrabold text-brand-600" aria-hidden="true">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">This page does not exist</h1>
        <p className="mx-auto mt-3 max-w-md text-navy-600">The link may be broken or the page may have moved. Head back home or pick one of the pages below.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button to="/services" variant="secondary">View Services</Button>
          <Button to="/contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
