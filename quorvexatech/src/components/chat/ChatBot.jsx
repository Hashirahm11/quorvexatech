import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle, FiX, FiSend, FiRotateCcw } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import siteConfig from '../../config/siteConfig';
import { getWhatsAppUrl, getEmailUrl, isConfigured } from '../../utils/links';
import { topics, mainMenu, moreMenu, greeting, fallbackText, findTopic } from '../../data/chatbotData';

const byId = (id) => topics.find((t) => t.id === id);
const chipsFor = (ids) => ids.map(byId).filter(Boolean).map((t) => ({ id: t.id, label: t.label }));
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let counter = 0;
const nextId = () => `m${(counter += 1)}`;

const firstMessage = () => ({ id: nextId(), from: 'bot', text: greeting, actions: [], chips: chipsFor(mainMenu).concat([{ id: 'more', label: 'More topics' }]) });

/** Turns an action description from chatbotData.js into a real link, or null if it is not configured yet. */
function resolveAction(action, topicLabel) {
  switch (action.type) {
    case 'link': return { label: action.label, to: action.to };
    case 'whatsapp': {
      const href = getWhatsAppUrl(`Hello QuorvexaTech, I have a question about: ${topicLabel}`);
      return href ? { label: action.label, href, whatsapp: true } : null;
    }
    case 'email': { const href = getEmailUrl(); return href ? { label: action.label, href } : null; }
    case 'fiverr': return isConfigured(siteConfig.freelancing.fiverr) ? { label: action.label, href: siteConfig.freelancing.fiverr } : null;
    case 'upwork': return isConfigured(siteConfig.freelancing.upwork) ? { label: action.label, href: siteConfig.freelancing.upwork } : null;
    default: return null;
  }
}

const actionClass = 'inline-flex items-center gap-1.5 rounded-full border border-[#3867FF]/30 bg-white px-3.5 py-2 text-sm font-semibold text-[#2B55E0] transition hover:border-[#3867FF] hover:bg-[#EEF2FF]';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [firstMessage()]);
  const [thinking, setThinking] = useState(false);
  const [draft, setDraft] = useState('');
  const launcher = useRef(null);
  const title = useRef(null);
  const log = useRef(null);
  const timer = useRef(0);

  const close = useCallback(() => { setOpen(false); launcher.current?.focus(); }, []);

  // Escape closes the panel and returns focus to the launcher button
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  // Move focus to the panel when it opens (screen-reader and keyboard friendly)
  useEffect(() => { if (open) title.current?.focus(); }, [open]);

  // Keep the newest message in view
  useEffect(() => {
    const el = log.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }, [messages, thinking, open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const reply = (userText, buildBot) => {
    clearTimeout(timer.current);
    setMessages((m) => [...m, { id: nextId(), from: 'user', text: userText }]);
    setThinking(true);
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, buildBot()]);
      setThinking(false);
    }, reducedMotion() ? 0 : 550);
  };

  const topicMessage = (t) => ({
    id: nextId(), from: 'bot', text: t.text,
    actions: t.actions.map((a) => resolveAction(a, t.label)).filter(Boolean),
    chips: chipsFor(t.next).concat([{ id: 'menu', label: 'Main menu' }]),
  });

  const pickChip = (chip) => {
    if (chip.id === 'menu') return reply('Main menu', () => ({ id: nextId(), from: 'bot', text: 'Sure, what would you like to know?', actions: [], chips: chipsFor(mainMenu).concat([{ id: 'more', label: 'More topics' }]) }));
    if (chip.id === 'more') return reply('More topics', () => ({ id: nextId(), from: 'bot', text: 'Here are more topics:', actions: [], chips: chipsFor(moreMenu).concat([{ id: 'menu', label: 'Main menu' }]) }));
    const t = byId(chip.id);
    return t && reply(chip.label, () => topicMessage(t));
  };

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || thinking) return;
    setDraft('');
    const t = findTopic(text);
    reply(text, () => (t ? topicMessage(t) : {
      id: nextId(), from: 'bot', text: fallbackText,
      actions: [{ type: 'whatsapp', label: 'Talk to the team on WhatsApp' }, { type: 'link', label: 'Open the contact page', to: '/contact#contact-form' }]
        .map((a) => resolveAction(a, text)).filter(Boolean),
      chips: chipsFor(mainMenu).concat([{ id: 'more', label: 'More topics' }]),
    }));
  };

  const restart = () => { clearTimeout(timer.current); setThinking(false); setMessages([firstMessage()]); };

  const last = messages[messages.length - 1];

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="chatbot-title"
          id="chatbot-panel"
          className="animate-rise fixed inset-x-3 bottom-[9.25rem] z-50 flex max-h-[calc(100dvh-11.5rem)] flex-col overflow-hidden rounded-3xl border border-[#10172F]/10 bg-white shadow-[0_30px_80px_-20px_rgba(16,23,47,0.55)] sm:inset-x-auto sm:right-6 sm:w-[390px]"
        >
          <div className="flex items-center gap-3 bg-gradient-to-br from-[#10172F] via-[#2A2470] to-[#8157F5] px-5 py-4 text-white">
            <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 text-xl"><FiMessageCircle /></span>
            <div className="min-w-0 flex-1">
              <h2 id="chatbot-title" ref={title} tabIndex={-1} className="text-base font-bold leading-tight outline-none">QuorvexaTech Guide</h2>
              <p className="text-xs text-white/70">Automated assistant · instant answers</p>
            </div>
            <button type="button" onClick={restart} aria-label="Start the conversation over" title="Start over" className="grid h-9 w-9 place-items-center rounded-full text-lg text-white/80 transition hover:bg-white/15 hover:text-white"><FiRotateCcw aria-hidden="true" /></button>
            <button type="button" onClick={close} aria-label="Close chat" className="grid h-9 w-9 place-items-center rounded-full text-xl text-white/80 transition hover:bg-white/15 hover:text-white"><FiX aria-hidden="true" /></button>
          </div>

          <div ref={log} role="log" aria-live="polite" aria-label="Conversation" className="min-h-[220px] flex-1 space-y-3 overflow-y-auto bg-[#F8F8F5] px-4 py-4">
            {messages.map((m) => (
              <div key={m.id} className={m.from === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${m.from === 'user' ? 'rounded-br-md bg-[#3867FF] text-white' : 'rounded-bl-md bg-white text-[#10172F] shadow-sm'}`}>
                  <p>{m.text}</p>
                  {m.actions?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 whitespace-normal">
                      {m.actions.map((a) => (a.to
                        ? <Link key={a.label} to={a.to} onClick={() => setOpen(false)} className={actionClass}>{a.label}</Link>
                        : <a key={a.label} href={a.href} {...(a.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={actionClass}>{a.whatsapp && <FaWhatsapp aria-hidden="true" />}{a.label}{a.href.startsWith('http') && <span className="sr-only"> (opens in a new tab)</span>}</a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex justify-start" role="status" aria-label="The guide is typing">
                <div className="flex gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3.5 shadow-sm" aria-hidden="true">
                  {[0, 150, 300].map((d) => <i key={d} className="h-2 w-2 animate-bounce rounded-full bg-[#8157F5] motion-reduce:animate-none" style={{ animationDelay: `${d}ms` }} />)}
                </div>
              </div>
            )}
            {!thinking && last?.from === 'bot' && last.chips?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {last.chips.map((c) => (
                  <button key={c.id} type="button" onClick={() => pickChip(c)} className="rounded-full border border-[#8157F5]/30 bg-white px-3.5 py-2 text-left text-sm font-medium text-[#10172F] transition hover:border-[#8157F5] hover:bg-[#F1EEFF]">{c.label}</button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={send} className="border-t border-[#10172F]/10 bg-white p-3">
            <div className="flex items-center gap-2">
              <label htmlFor="chatbot-input" className="sr-only">Type a keyword or question</label>
              <input id="chatbot-input" value={draft} onChange={(e) => setDraft(e.target.value)} maxLength={200} autoComplete="off" placeholder="Type a keyword, e.g. price" className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-2.5 text-[15px] text-[#10172F] placeholder:text-slate-400 focus:border-[#3867FF] focus:outline-none focus:ring-4 focus:ring-[#3867FF]/15" />
              <button type="submit" disabled={!draft.trim() || thinking} aria-label="Send" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#3867FF] text-lg text-white transition hover:bg-[#2B55E0] disabled:opacity-40"><FiSend aria-hidden="true" /></button>
            </div>
            <p className="mt-2 px-1 text-center text-[11px] text-slate-500">Automated replies, not a live person. Do not share passwords or payment details.</p>
          </form>
        </div>
      )}

      <button
        ref={launcher}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="chatbot-panel"
        aria-label={open ? 'Close chat' : 'Open chat with the QuorvexaTech guide'}
        className="fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#3867FF] to-[#8157F5] text-2xl text-white shadow-[0_18px_40px_-10px_rgba(56,103,255,0.8)] transition hover:scale-105 sm:right-6"
      >
        {open ? <FiX aria-hidden="true" /> : <FiMessageCircle aria-hidden="true" />}
      </button>
    </>
  );
}
