import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiInfo } from 'react-icons/fi';
import {
  budgetOptions, websiteTypes, estimatorServices, pageCountOptions, timelineOptions,
} from '../../data/budgetOptions';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const disclaimer =
  'These ranges are starting points for a conversation, not fixed prices or guarantees. Your final quote depends on the project scope, features, platform and timeline. Domain, hosting, paid themes and premium plugins may be separate costs.';

function Group({ legend, children }) {
  return (
    <fieldset>
      <legend className="mb-3 text-base font-bold text-navy-900">{legend}</legend>
      {children}
    </fieldset>
  );
}

function Compact() {
  return (
    <section className="container-page section-y" aria-labelledby="budget-preview-heading">
      <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 sm:p-12">
        <SectionHeading
          id="budget-preview-heading"
          title="Not sure what to budget?"
          description="Choose a starting range and tell us what you need. We will come back with a personalised quote."
        />
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {budgetOptions.filter((b) => !b.isCustom && b.id !== 'not-sure').map((b) => (
            <li key={b.id} className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800">{b.label}</li>
          ))}
        </ul>
        <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-navy-600">
          <FiInfo aria-hidden="true" className="mt-0.5 shrink-0" /> {disclaimer}
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/contact#budget">Plan Your Project Budget</Button>
        </div>
      </div>
    </section>
  );
}

/**
 * Project budget planner.
 * - compact: small preview used on the Services page (links to the full planner on /contact#budget)
 * - full: interactive planner. "onApply" receives values for the contact form.
 */
export default function ProjectBudget({ compact = false, onApply }) {
  const [typeId, setTypeId] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [pages, setPages] = useState('');
  const [budgetId, setBudgetId] = useState('');
  const [timeline, setTimeline] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  if (compact) return <Compact />;

  const budget = budgetOptions.find((b) => b.id === budgetId);
  const type = websiteTypes.find((t) => t.id === typeId);

  const toggleService = (name) =>
    setSelectedServices((cur) => (cur.includes(name) ? cur.filter((s) => s !== name) : [...cur, name]));

  const discussCustom = () => {
    setBudgetId('custom');
    setTimeout(() => document.getElementById('budget-custom-notes')?.focus(), 50);
  };

  const apply = () => {
    if (!type || !budget) {
      setMessage({ type: 'error', text: 'Please choose a type of website and a budget option first.' });
      return;
    }
    if (budget.isCustom && customNotes.trim().length < 10) {
      setMessage({ type: 'error', text: 'Please describe your custom requirements so we can prepare a personalised quote.' });
      document.getElementById('budget-custom-notes')?.focus();
      return;
    }
    const lines = [
      `Type of website: ${type.label}`,
      selectedServices.length ? `Services needed: ${selectedServices.join(', ')}` : null,
      pages ? `Approximate pages: ${pages}` : null,
      `Budget: ${budget.label}`,
      timeline ? `Timeline: ${timeline}` : null,
      budget.isCustom ? `Custom requirements: ${customNotes.trim()}` : null,
    ].filter(Boolean);

    onApply?.({
      service: type.service,
      budget: budget.label,
      timeline: timeline || '',
      description: lines.join('\n'),
      _nonce: Date.now(),
    });
    setMessage({ type: 'success', text: 'Your choices have been added to the contact form above. Review them and send when ready.' });
  };

  return (
    <section id="budget" className="section-y scroll-mt-24 bg-slate-50" aria-labelledby="budget-heading">
      <div className="container-page">
        <SectionHeading
          id="budget-heading"
          title="Plan your project budget"
          description="Answer a few quick questions and we will add them to your inquiry. This is not an instant quote: every project is priced after we understand your needs."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-10">
          <Group legend="What type of website do you need?">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {websiteTypes.map((t) => (
                <label key={t.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-500 ${typeId === t.id ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-navy-800 hover:border-brand-300'}`}>
                  <input type="radio" name="websiteType" value={t.id} checked={typeId === t.id} onChange={() => setTypeId(t.id)} className="h-4 w-4 accent-brand-600" />
                  {t.label}
                </label>
              ))}
            </div>
          </Group>

          <Group legend="Which services do you need? (choose any)">
            <div className="grid gap-3 sm:grid-cols-2">
              {estimatorServices.map((s) => (
                <label key={s} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-500 ${selectedServices.includes(s) ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-200 text-navy-800 hover:border-brand-300'}`}>
                  <input type="checkbox" checked={selectedServices.includes(s)} onChange={() => toggleService(s)} className="h-4 w-4 accent-brand-600" />
                  {s}
                  {selectedServices.includes(s) && <FiCheck aria-hidden="true" className="ml-auto" />}
                </label>
              ))}
            </div>
          </Group>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="budget-pages" className="mb-3 block text-base font-bold text-navy-900">Approximate number of pages</label>
              <select id="budget-pages" value={pages} onChange={(e) => setPages(e.target.value)} className="field-input">
                <option value="">Select</option>
                {pageCountOptions.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="budget-timeline" className="mb-3 block text-base font-bold text-navy-900">Expected timeline</label>
              <select id="budget-timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} className="field-input">
                <option value="">Select</option>
                {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <Group legend="Preferred budget">
            <div className="grid gap-3 sm:grid-cols-2">
              {budgetOptions.map((b) => (
                <label key={b.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-500 ${budgetId === b.id ? 'border-brand-600 bg-brand-50' : 'border-slate-200 hover:border-brand-300'}`}>
                  <input type="radio" name="budget" value={b.id} checked={budgetId === b.id} onChange={() => setBudgetId(b.id)} className="mt-1 h-4 w-4 accent-brand-600" />
                  <span>
                    <span className="block text-sm font-bold text-navy-900">{b.label}</span>
                    <span className="mt-0.5 block text-sm text-navy-600">{b.hint}</span>
                  </span>
                </label>
              ))}
            </div>

            {budget?.isCustom && (
              <div className="mt-4">
                <label htmlFor="budget-custom-notes" className="mb-1.5 block text-sm font-semibold text-navy-900">Describe your custom project</label>
                <textarea
                  id="budget-custom-notes"
                  rows={4}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Tell us your goals, required features, budget and anything else that matters."
                  className="field-input resize-y"
                />
              </div>
            )}
          </Group>

          <p className="flex items-start gap-2.5 rounded-2xl bg-brand-50 p-4 text-sm leading-relaxed text-navy-700">
            <FiInfo aria-hidden="true" className="mt-0.5 shrink-0 text-brand-600" /> {disclaimer}
          </p>

          {message.text && (
            <p role={message.type === 'error' ? 'alert' : 'status'} className={`rounded-xl px-4 py-3 text-sm font-medium ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-800'}`}>
              {message.text}{' '}
              {message.type === 'success' && <Link to="#contact-form" className="font-semibold underline">Go to the form</Link>}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={apply}>Add these details to my inquiry</Button>
            <Button variant="secondary" onClick={discussCustom}>Discuss a Custom Project</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
