import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiAlertCircle, FiLock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { websiteTypes, budgetOptions } from '../../data/budgetOptions';
import { getWhatsAppUrl } from '../../utils/links';
import submitBrief from './submitBrief';
import Reveal from './Reveal';

const empty = { name: '', email: '', type: '', budget: '', description: '' };
const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!emailOk.test(v.email.trim())) e.email = 'Please enter a valid email, e.g. name@company.com';
  if (!v.type) e.type = 'Please choose a website type.';
  if (!v.budget) e.budget = 'Please choose a budget range ("Not sure" is fine).';
  if (v.description.trim().length < 15) e.description = 'Please add a short description (at least 15 characters).';
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#10172F]">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}

export default function ProjectStarter() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | dev
  const set = (k) => (e) => { setValues((v) => ({ ...v, [k]: e.target.value })); if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined })); };
  const props = (k) => ({ id: `brief-${k}`, value: values[k], onChange: set(k), 'aria-invalid': errors[k] ? 'true' : 'false', 'aria-describedby': errors[k] ? `brief-${k}-error` : undefined });

  const type = websiteTypes.find((t) => t.id === values.type);
  const waMessage = `Hello QuorvexaTech, I'd like to discuss a project.\nName: ${values.name}\nEmail: ${values.email}\nWebsite type: ${type?.label ?? '-'}\nBudget: ${values.budget || '-'}\nDetails: ${values.description}`;
  const whatsapp = getWhatsAppUrl(waMessage);

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) { document.getElementById(`brief-${first}`)?.focus(); return; }
    setStatus('sending');
    const result = await submitBrief({ ...values, service: type.service });
    if (result.ok) { setValues(empty); setStatus('success'); }
    else setStatus(result.reason === 'dev' ? 'dev' : 'error');
  }

  return (
    <section id="start" className="scroll-mt-24 bg-[#F8F8F5] py-16 sm:py-20 lg:py-28" aria-labelledby="start-heading">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3867FF]">Start a project</p>
          <h2 id="start-heading" className="mt-3 text-3xl font-extrabold leading-tight text-[#10172F] sm:text-5xl">Have a project in mind?</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5a6480]">Share a short brief and we will reply with honest advice and suggested next steps. A rough idea is enough.</p>
          <p className="mt-6 flex items-start gap-3 rounded-2xl border border-[#10172F]/10 bg-white p-4 text-sm leading-relaxed text-[#5a6480]">
            <FiLock aria-hidden="true" className="mt-0.5 shrink-0 text-[#2FAE82]" />
            <span>We only use your details to reply to this inquiry. Prefer to talk? Use the WhatsApp option, or the <Link to="/contact" className="font-semibold text-[#3867FF] underline">full contact page</Link>.</span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          {status === 'success' ? (
            <div role="status" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <FiCheckCircle aria-hidden="true" className="mx-auto text-4xl text-emerald-600" />
              <h3 className="mt-4 text-2xl font-extrabold text-[#10172F]">Brief sent</h3>
              <p className="mt-2 text-[#40486a]">Thank you. We have received your details and will reply by email.</p>
              <button type="button" onClick={() => setStatus('idle')} className="mt-6 rounded-full border border-[#10172F]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#10172F] hover:border-[#3867FF]">Send another brief</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-[#10172F]/10 bg-white p-6 shadow-[0_40px_70px_-40px_rgba(16,23,47,0.5)] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="brief-name" label="Name" error={errors.name}><input type="text" autoComplete="name" className="field-input" {...props('name')} /></Field>
                <Field id="brief-email" label="Email" error={errors.email}><input type="email" autoComplete="email" className="field-input" {...props('email')} /></Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="brief-type" label="Website type" error={errors.type}>
                  <select className="field-input" {...props('type')}><option value="">Select a type</option>{websiteTypes.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}</select>
                </Field>
                <Field id="brief-budget" label="Estimated budget" error={errors.budget}>
                  <select className="field-input" {...props('budget')}><option value="">Select a range</option>{budgetOptions.map((b) => <option key={b.id} value={b.label}>{b.label}</option>)}</select>
                </Field>
              </div>
              <Field id="brief-description" label="Brief project description" error={errors.description}>
                <textarea rows={4} className="field-input resize-y" {...props('description')} />
              </Field>

              {(status === 'error' || status === 'dev') && (
                <div role="alert" className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  <FiAlertCircle aria-hidden="true" className="mt-0.5 shrink-0 text-lg" />
                  <p>{status === 'dev' ? 'Form delivery is not available while running locally. It works after deploying to Netlify, or set VITE_FORMSPREE_ENDPOINT to test.' : 'Your brief could not be sent. Please try again, or use WhatsApp or the contact page.'}</p>
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" disabled={status === 'sending'} className="inline-flex flex-1 items-center justify-center rounded-full bg-[#3867FF] px-6 py-3.5 font-semibold text-white shadow-[0_16px_30px_-14px_rgba(56,103,255,0.8)] transition hover:bg-[#2b55e0] disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send my brief'}
                </button>
                {whatsapp && (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600 px-6 py-3.5 font-semibold text-emerald-700 transition hover:bg-emerald-50">
                    <FaWhatsapp aria-hidden="true" /> Use WhatsApp instead<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
