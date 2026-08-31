import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import InnerHero from '@/components/InnerHero';
import { PrimaryButton, GhostButton, SectionHeading, CtaBand } from '@/components/common';
import { SERVICES, FAQS, DISCLAIMER } from '@/lib/data';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const [open, setOpen] = useState(0);
  if (!service) return <Navigate to="/services" replace />;

  const benefits = [
    'Advice tailored precisely to your goals and risk profile',
    'Complete transparency — you always know what you own and why',
    'Professional, research-backed selection and monitoring',
    'Regular reviews to keep you on track as life changes',
  ];
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const faqs = FAQS.slice(0, 5);

  return (
    <>
      <Seo title={service.title} description={service.short} />
      <InnerHero eyebrow={service.tag} title={service.title} sub={service.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]} />

      <section className="py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Overview" title={`What is ${service.title}?`} />
              <p className="mt-5 leading-relaxed text-muted-foreground">{service.what}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-xl font-700 text-navy" style={{ fontWeight: 700 }}>Key Benefits</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12 rounded-2xl border border-border bg-muted/40 p-7">
              <h3 className="text-xl font-700 text-navy" style={{ fontWeight: 700 }}>Who should consider this?</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.who}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="text-xl font-700 text-navy" style={{ fontWeight: 700 }}>Why choose us</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We combine 15+ years of experience with genuine, goal-first advice. There are no hidden agendas — only a transparent, personalised plan built around your life. From your first conversation to every review, we stay by your side.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="mb-5 text-xl font-700 text-navy" style={{ fontWeight: 700 }}>Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                    <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                      <span className="font-600 text-navy" style={{ fontWeight: 600 }}>{f.q}</span>
                      {open === i ? <Minus className="h-5 w-5 shrink-0 text-royal" /> : <Plus className="h-5 w-5 shrink-0 text-royal" />}
                    </button>
                    {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl navy-gradient p-8 text-white shadow-xl">
              <ShieldCheck className="h-10 w-10 text-gold" />
              <h3 className="mt-4 text-xl font-700" style={{ fontWeight: 700 }}>Ready to get started?</h3>
              <p className="mt-2 text-sm text-white/70">Book a free consultation and let us build a plan around {service.title.toLowerCase()} for you.</p>
              <PrimaryButton to="/book" className="mt-6 w-full">Book Free Consultation</PrimaryButton>
              <GhostButton to="/contact" light className="mt-3 w-full">Request a Callback</GhostButton>
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-white p-6">
              <h4 className="font-600 text-navy" style={{ fontWeight: 600 }}>Explore related services</h4>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/services/${r.slug}`} className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-royal">
                      {r.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{DISCLAIMER}</p>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
