import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import InnerHero from '@/components/InnerHero';
import { CtaBand } from '@/components/common';
import Calculator from '@/components/calculators';
import { CALCULATORS, DISCLAIMER } from '@/lib/data';

export default function CalculatorsPage() {
  const [params, setParams] = useSearchParams();
  const initial = CALCULATORS.find((c) => c.slug === params.get('c'))?.slug || 'sip';
  const [active, setActive] = useState(initial);
  const current = CALCULATORS.find((c) => c.slug === active);

  const select = (slug) => { setActive(slug); setParams({ c: slug }); };

  return (
    <>
      <Seo title="Financial Calculators" description="Free, instant financial calculators — SIP, lumpsum, SWP, retirement, EMI, goal, step-up SIP, education planner and more." />
      <InnerHero eyebrow="Calculators" title="Plan every goal with confidence"
        sub="Instant, easy-to-use calculators to help you make smarter financial decisions."
        crumbs={[{ label: 'Calculators' }]} />

      <section className="py-16">
        <div className="container-wide grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {CALCULATORS.map((c) => (
                <button key={c.slug} onClick={() => select(c.slug)}
                  className={`shrink-0 rounded-xl px-4 py-3 text-left text-sm font-500 transition lg:w-full ${active === c.slug ? 'navy-gradient text-white shadow-md' : 'border border-border bg-white text-navy/70 hover:border-royal hover:text-royal'}`}
                  style={{ fontWeight: 500 }}>{c.name}</button>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-700 text-navy" style={{ fontWeight: 700 }}>{current.name}</h2>
              <p className="mt-1 text-muted-foreground">{current.desc}</p>
            </div>
            <Calculator slug={active} />
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              These calculators are for illustration only and assume a constant rate of return. Actual results will vary. {DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
