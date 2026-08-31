import React, { useMemo, useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';
import Seo from '@/components/Seo';
import InnerHero from '@/components/InnerHero';
import { CtaBand } from '@/components/common';
import { FAQS } from '@/lib/data';

const EXTRA = [
  { q: 'Can I invest in mutual funds online?', a: 'Yes. We help you set up fully paperless, online investing so you can transact and track your portfolio from anywhere.' },
  { q: 'What documents do I need to start?', a: 'Typically your PAN card, Aadhaar, a cancelled cheque and a passport-size photo. We guide you through the entire KYC process.' },
  { q: 'Do you help with existing investments?', a: 'Absolutely. We review your current portfolio, identify gaps or overlaps, and suggest improvements — with no pressure to switch.' },
  { q: 'What is rupee-cost averaging?', a: 'By investing a fixed amount regularly, you automatically buy more units when prices are low and fewer when high, averaging your cost over time.' },
  { q: 'How is my risk profile determined?', a: 'Through a structured questionnaire covering your goals, time horizon, income stability and comfort with market ups and downs.' },
  { q: 'Are the returns on this website guaranteed?', a: 'No. We never guarantee returns. All illustrations assume constant rates for education only. Investments are subject to market risks.' },
  { q: 'Can I change my SIP amount later?', a: 'Yes, you can increase, decrease, pause or stop your SIP at any time. We also offer step-up SIPs that grow with your income.' },
  { q: 'What is asset allocation?', a: 'It is the mix of equity, debt and other assets in your portfolio, chosen to balance growth and stability for your specific goals.' },
  { q: 'How do you get paid?', a: 'As an AMFI-registered distributor, we may earn a distribution commission from fund houses, which we disclose transparently. Your first consultation is always free.' },
  { q: 'Is there a lock-in on my investments?', a: 'Most funds have no lock-in. ELSS tax-saving funds have a 3-year lock-in. We always tell you upfront.' },
  { q: 'What happens to my investment if I need money urgently?', a: 'Most open-ended funds allow redemption within 1-3 working days. We also help you build an emergency fund for exactly such situations.' },
  { q: 'Do you offer estate and succession planning?', a: 'Yes, as part of our wealth management service we help with nominations, will guidance and smooth succession of your investments.' },
  { q: 'Can I track my portfolio myself?', a: 'Yes. We provide access to consolidated portfolio reports and can set up a client login for real-time tracking.' },
  { q: 'Is my data secure?', a: 'We follow strict confidentiality practices and never share your information without consent. Security and privacy are core to how we work.' },
  { q: 'How often will you contact me?', a: 'We schedule periodic reviews and are always reachable for questions. We respect your time and never spam.' },
];

const ALL = [...FAQS, ...EXTRA];

export default function FaqPage() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(0);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL;
    return ALL.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Seo title="Frequently Asked Questions" description="Answers to 30+ common questions about mutual funds, SIP, insurance, taxes and investing with Baby Investments." />
      <InnerHero eyebrow="FAQ" title="Everything you want to know"
        sub="Clear answers to the questions we hear most often. Still curious? Just reach out."
        crumbs={[{ label: 'FAQ' }]} />

      <section className="py-16">
        <div className="container-narrow">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => { setQuery(e.target.value); setOpen(-1); }}
              placeholder="Search questions..."
              className="w-full rounded-full border border-border bg-white py-3.5 pl-12 pr-4 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20" />
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">No questions match your search. Try a different keyword.</p>
          ) : (
            <div className="space-y-3">
              {filtered.map((f, i) => (
                <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-600 text-navy" style={{ fontWeight: 600 }}>{f.q}</span>
                    {open === i ? <Minus className="h-5 w-5 shrink-0 text-royal" /> : <Plus className="h-5 w-5 shrink-0 text-royal" />}
                  </button>
                  {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
