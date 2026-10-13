import siteConfig from '../../config/siteConfig';

const encode = (data) =>
  Object.entries(data).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');

/**
 * Sends the homepage brief through the SAME system as the Contact page form
 * (Formspree if VITE_FORMSPREE_ENDPOINT is set, otherwise the Netlify "contact" form).
 * Returns { ok: boolean, reason?: 'dev' }. Never reports success unless the server said OK.
 */
export default async function submitBrief(values) {
  const { formspreeEndpoint, netlifyFormName } = siteConfig.form;
  if (!formspreeEndpoint && import.meta.env.DEV) return { ok: false, reason: 'dev' };

  const payload = {
    name: values.name,
    email: values.email,
    phone: '',
    service: values.service,
    description: `[Homepage brief] ${values.description}`,
    budget: values.budget,
    timeline: 'Not specified',
  };
  try {
    const response = formspreeEndpoint
      ? await fetch(formspreeEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
      : await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encode({ 'form-name': netlifyFormName, ...payload }) });
    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}
