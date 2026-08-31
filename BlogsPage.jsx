import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import InnerHero from '@/components/InnerHero';
import { CtaBand } from '@/components/common';
import { BLOGS, BLOG_CATEGORIES } from '@/lib/data';

export default function BlogsPage() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? BLOGS : BLOGS.filter((b) => b.category === cat);
  return (
    <>
      <Seo title="Blogs & Insights" description="Practical, jargon-free articles on mutual funds, SIP, insurance, retirement, tax saving and personal finance from Baby Investments." />
      <InnerHero eyebrow="Insights" title="Learn to invest smarter"
        sub="Honest, easy-to-understand articles to help you make confident money decisions."
        crumbs={[{ label: 'Blogs' }]} />

      <section className="py-16">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap gap-2">
            {['All', ...BLOG_CATEGORIES].map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-500 transition ${cat === c ? 'gold-gradient text-navy shadow-md' : 'border border-border bg-white text-navy/70 hover:border-royal hover:text-royal'}`}
                style={{ fontWeight: 500 }}>{c}</button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">No articles in this category yet. Check back soon.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((b, i) => (
                <Reveal key={b.slug} delay={(i % 3) * 60}>
                  <Link to={`/blogs/${b.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-600 uppercase tracking-wider text-royal" style={{ fontWeight: 600 }}>{b.category}</span>
                      <h3 className="mt-2 text-lg font-600 leading-snug text-navy" style={{ fontWeight: 600 }}>{b.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{b.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{b.date} · {b.read}</p>
                        <ArrowRight className="h-4 w-4 text-royal transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
