import { useEffect, useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import siteConfig from '../../config/siteConfig';
import { serviceOptions } from '../../data/services';
import { budgetOptions, timelineOptions } from '../../data/budgetOptions';
import { getEmailUrl, getWhatsAppUrl } from '../../utils/links';

const emptyValues = {
  name: '', email: '', phone: '', service: '', description: '', budget: '', timeline: '', 'bot-field': '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+()\d\s-]{7,20}$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!emailPattern.test(v.email.trim())) e.email = 'That email address does not look right. Example: name@company.com';
  if (v.phone.trim() && !phonePattern.test(v.phone.trim())) e.phone = 'Use digits, spaces, + or - only (7 to 20 characters), or leave this empty.';
  if (!v.service) e.service = 'Please choose the service you need.';
  if (v.description.trim().length < 20) e.description = 'Please describe your project in at least 20 characters so we can reply usefully.';
  if (!v.budget) e.budget = 'Please choose a budget range. "Not sure" is fine.';
  if (!v.timeline) e.timeline = 'Please choose a preferred timeline.';
  return e;
}

const encode = (data) =>
  Object.entries(data).map(([k, val]) => `${encodeURIComponent(k)}=${encodeURIComponent(val)}`).join('&');

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label} {required ? <span className="text-red-600" aria-hidden="true">*</span> : <span className="font-normal text-navy-500">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-navy-500">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}

/**
 * Contact form with client-side validation.
 * `prefill` lets other components (budget planner, service cards) fill fields.
 * Submission: Formspree if VITE_FORMSPREE_ENDPOINT is set, otherwise Netlify Forms.
 */
export default function ContactForm({ prefill }) {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!prefill) return;
    const { _nonce, ...fields } = prefill;
    setValues((current) => ({ ...current, ...fields }));
    setErrors({});
    setStatus('idle');
  }, [prefill]);

  const set = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const fieldProps = (name) => ({
    id: `field-${name}`,
    name,
    value: values[name],
    onChange: set(name),
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `field-${name}-error` : `field-${name}-hint`,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus();
      return;
    }
    if (values['bot-field']) return; // honeypot filled: silently ignore bots

    const { 'bot-field': _bot, ...payload } = values;
    const { formspreeEndpoint, netlifyFormName } = siteConfig.form;

    // Local dev has no form backend; say so honestly instead of faking success.
    if (!formspreeEndpoint && import.meta.env.DEV) {
      setErrorMessage(
        'Form delivery is not available while running locally. Netlify Forms starts working after you deploy to Netlify. To test locally, set VITE_FORMSPREE_ENDPOINT in a .env file.',
      );
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const response = formspreeEndpoint
        ? await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
          })
        : await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': netlifyFormName, ...payload }),
          });

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setValues(emptyValues);
      setStatus('success');
    } catch {
      setErrorMessage('Your message could not be sent. Please try again, or contact us directly using the options below.');
      setStatus('error');
    }
  }

  const whatsapp = getWhatsAppUrl();
  const email = getEmailUrl();

  if (status === 'success') {
    return (
      <div role="status" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <FiCheckCircle aria-hidden="true" className="mx-auto text-4xl text-emerald-600" />
        <h3 className="mt-4 text-2xl font-bold text-navy-900">Message sent</h3>
        <p className="mt-2 text-navy-700">Thank you. We have received your project details and will get back to you by email.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-full border border-navy-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 hover:border-brand-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-2xl font-bold text-navy-900">Tell us about your project</h3>

      {/* Honeypot field: hidden from people, bots tend to fill it in */}
      <p className="hidden" aria-hidden="true">
        <label>Do not fill this out <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" value={values['bot-field']} onChange={set('bot-field')} /></label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="field-name" label="Full name" required error={errors.name}>
          <input type="text" autoComplete="name" className="field-input" {...fieldProps('name')} />
        </Field>
        <Field id="field-email" label="Email address" required error={errors.email}>
          <input type="email" autoComplete="email" className="field-input" {...fieldProps('email')} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="field-phone" label="WhatsApp or phone number" error={errors.phone} hint="Include your country code.">
          <input type="tel" autoComplete="tel" className="field-input" {...fieldProps('phone')} />
        </Field>
        <Field id="field-service" label="Service required" required error={errors.service}>
          <select className="field-input" {...fieldProps('service')}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <Field id="field-description" label="Short project description" required error={errors.description} hint="What is your business, what do you need, and any websites you like?">
        <textarea rows={5} className="field-input resize-y" {...fieldProps('description')} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="field-budget" label="Expected budget" required error={errors.budget} hint="A starting point only. The final quote depends on scope.">
          <select className="field-input" {...fieldProps('budget')}>
            <option value="">Select a budget range</option>
            {budgetOptions.map((b) => <option key={b.id} value={b.label}>{b.label}</option>)}
          </select>
        </Field>
        <Field id="field-timeline" label="Preferred timeline" required error={errors.timeline}>
          <select className="field-input" {...fieldProps('timeline')}>
            <option value="">Select a timeline</option>
            {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </div>

      {status === 'error' && (
        <div role="alert" className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <FiAlertCircle aria-hidden="true" className="mt-0.5 shrink-0 text-lg" />
          <div>
            <p>{errorMessage}</p>
            {(whatsapp || email) && (
              <p className="mt-2 font-semibold">
                {whatsapp && <a className="underline" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
                {whatsapp && email && ' · '}
                {email && <a className="underline" href={email}>Email</a>}
              </p>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
      <p className="text-center text-sm text-navy-500">We only use your details to reply to this inquiry.</p>
    </form>
  );
}
