import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import InnerHero from '@/components/InnerHero';
import { CtaBand } from '@/components/common';
import { SERVICES } from '@/lib/data';

const TAGS = ['All', 'Investing', 'Advisory', 'Wealth', 'Protection'];

export default function ServicesPage() {
  const [tag, setTag] = useState('All');
  const list = tag === 'All' ? SERVICES : SERVICES.filter((s) => s.tag === tag);
  return (
    <>
      <Seo title="Our Services" description="Explore Baby Investments' full range of financial services — mutual funds, SIP, PMS, retirement, tax saving, insurance and more." />
      <InnerHero eyebrow="Our Services" title="Comprehensive solutions for your financial life"
        sub="Whatever stage you are at, we have a tailored solution to help you invest with confidence and grow your wealth."
        crumbs={[{ label: 'Services' }]} />

      <section className="py-16">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button key={t} onClick={() => setTag(t)}
                className={`rounded-full px-5 py-2 text-sm font-500 transition ${tag === t ? 'gold-gradient text-navy shadow-md' : 'border border-border bg-white text-navy/70 hover:border-royal hover:text-royal'}`}
                style={{ fontWeight: 500 }}>{t}</button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60}
                className="group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl navy-gradient text-gold"><s.icon className="h-6 w-6" strokeWidth={1.8} /></span>
                <span className="mt-4 text-xs font-600 uppercase tracking-wider text-muted-foreground" style={{ fontWeight: 600 }}>{s.tag}</span>
                <h3 className="mt-1 text-lg font-600 text-navy" style={{ fontWeight: 600 }}>{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-royal transition group-hover:gap-2.5" style={{ fontWeight: 600 }}>
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
