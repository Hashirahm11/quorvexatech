import usePageMeta from '../hooks/usePageMeta';
import siteConfig from '../config/siteConfig';

export default function Privacy() {
  usePageMeta('Privacy Policy', 'How QuorvexaTech handles information submitted through its contact form.');
  return (
    <section className="container-page section-y">
      <article className="mx-auto max-w-3xl space-y-5 leading-relaxed text-navy-700">
        <h1 className="text-4xl font-extrabold text-navy-900">Privacy policy</h1>
        <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          This is a simple starter policy. Please review it and adapt it to your real data practices, and consider legal advice, before relying on it.
        </p>
        <h2 className="pt-4 text-2xl font-bold text-navy-900">What we collect</h2>
        <p>When you use our contact form, we receive the details you enter: your name, email address, optional phone number, the service you need, your project description, budget range and timeline.</p>
        <h2 className="pt-4 text-2xl font-bold text-navy-900">How we use it</h2>
        <p>We use these details only to reply to your inquiry and to discuss your project. We do not sell your information.</p>
        <h2 className="pt-4 text-2xl font-bold text-navy-900">Form processing</h2>
        <p>Form submissions are processed by our form provider (Netlify Forms or Formspree, depending on configuration), which handles the data under its own privacy terms.</p>
        <h2 className="pt-4 text-2xl font-bold text-navy-900">Third-party links</h2>
        <p>This website links to external platforms such as social networks and freelancing sites. Their privacy practices are their own.</p>
        <h2 className="pt-4 text-2xl font-bold text-navy-900">Contact</h2>
        <p>Questions about this policy? Contact us through the contact page of {siteConfig.domain}.</p>
      </article>
    </section>
  );
}
