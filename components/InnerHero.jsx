import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '@/lib/data';
import { Eyebrow } from './common';

export default function InnerHero({ eyebrow, title, sub, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="absolute inset-0 navy-gradient" />
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: `url(${IMAGES.pattern})`, backgroundSize: 'cover', mixBlendMode: 'luminosity' }} />
      <div className="container-wide relative py-16 sm:py-20">
        <nav className="mb-5 flex items-center gap-1.5 text-xs text-white/60">
          <Link to="/" className="hover:text-gold">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.to ? <Link to={c.to} className="hover:text-gold">{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-3 max-w-3xl text-4xl font-700 leading-tight text-white sm:text-5xl" style={{ fontWeight: 700 }}>{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-white/70">{sub}</p>}
      </div>
    </section>
  );
}
