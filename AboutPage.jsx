import React from 'react';
import { CheckCircle2, Target, Eye, Quote } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import InnerHero from '@/components/InnerHero';
import { SectionHeading, Counter, CtaBand, PrimaryButton } from '@/components/common';
import { IMAGES, STATS, VALUES, PROCESS } from '@/lib/data';
export default function AboutPage() {
  const trust = ['Fee transparency with zero hidden charges', 'Advice aligned to your goals, never to commissions', 'A written plan you fully understand', 'Regular, proactive portfolio reviews', 'Complete confidentiality of your information'];
  return <>
      <Seo title="About Us" description="Learn about Baby Investments — our story, mission, values and the philosophy behind trustworthy, goal-based financial advisory." />
      <InnerHero eyebrow="About Us" title="Building wealth, and trust, one family at a time" sub="For over 15 years we have guided Indian investors through every market cycle with honesty, discipline and genuine care." crumbs={[{
      label: 'About'
    }]} />

      <section className="py-20">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="reveal-l">
            <img src={IMAGES.couple} alt="A family planning their finances together" className="w-full rounded-3xl border border-border shadow-lg" loading="lazy" />
          </Reveal>
          <Reveal variant="reveal-r">
            <SectionHeading eyebrow="Our Story" title="Started with a simple belief" />
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>We were founded on a simple belief: that honest, personalised financial advice should be available to every Indian family — not just the ultra-wealthy.</p>
              <p>We saw too many investors sold products they did not understand, chasing returns instead of following a plan. So we built something different: an advisory practice that starts with your goals, explains everything in plain language, and stays with you for the long run.</p>
              <p>Today we are proud to guide thousands of families, professionals and business owners toward financial freedom — with transparency at the heart of everything we do.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(s => <Reveal key={s.label} className="text-center">
              <p className="font-display text-4xl font-700 text-gold" style={{
            fontWeight: 700
          }}><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </Reveal>)}
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <span className="grid h-12 w-12 place-items-center rounded-xl navy-gradient text-gold"><Target className="h-6 w-6" /></span>
            <h3 className="mt-5 text-xl font-700 text-navy" style={{
            fontWeight: 700
          }}>Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">To empower every client to invest with confidence through transparent, goal-based advice — helping them secure their family&apos;s future and achieve lasting financial freedom.</p>
          </Reveal>
          <Reveal delay={80} className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <span className="grid h-12 w-12 place-items-center rounded-xl gold-gradient text-navy"><Eye className="h-6 w-6" /></span>
            <h3 className="mt-5 text-xl font-700 text-navy" style={{
            fontWeight: 700
          }}>Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">To be India&apos;s most trusted wealth advisory partner — known not for selling products, but for building relationships and creating generational wealth.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide">
          <SectionHeading center eyebrow="Our Values" title="The principles we never compromise on" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => <Reveal key={v.title} delay={i * 60} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <span className="font-display text-3xl font-800 text-gold/40" style={{
              fontWeight: 800
            }}>0{i + 1}</span>
                <h3 className="mt-3 text-lg font-600 text-navy" style={{
              fontWeight: 600
            }}>{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="reveal-l" className="relative">
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-border bg-muted/40 shadow-lg">
              <span className="font-display text-lg font-500 text-muted-foreground/70" style={{
              fontWeight: 500
            }}>Directors Photo</span>
            </div>
          </Reveal>
          <Reveal variant="reveal-r">
            <span className="inline-flex items-center gap-2 text-xs font-600 uppercase tracking-[0.18em] text-royal" style={{ fontWeight: 600 }}>
              <span className="h-px w-6 bg-gold" />
              Director
            </span>
            <h2 className="mt-3 text-3xl font-700 leading-tight text-navy sm:text-4xl" style={{ fontWeight: 700 }}>
              A message from our director
            </h2>
            <Quote className="mt-5 h-10 w-10 text-gold/40" />
            <p className="mt-3 text-lg leading-relaxed text-navy">&ldquo;I believe wealth is not about beating the market — it is about achieving your life goals without stress. My promise to every client is simple: honest advice, complete transparency, and a partnership that lasts a lifetime.&rdquo;</p>
            <p className="mt-6 font-600 text-navy" style={{
            fontWeight: 600
          }}>Mr. Arvind Babulal Giri</p>
            <p className="text-sm text-muted-foreground">Director, AMFI Registered Financial Planner</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <Reveal variant="reveal-l">
            <SectionHeading eyebrow="Investment Philosophy" title="Why clients trust us" />
            <ul className="mt-6 space-y-4">
              {trust.map(t => <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                  <span className="text-muted-foreground">{t}</span>
                </li>)}
            </ul>
            <PrimaryButton to="/book" className="mt-8">Book a Free Consultation</PrimaryButton>
          </Reveal>
          <Reveal variant="reveal-r" className="space-y-4">
            {PROCESS.map(p => <div key={p.step} className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full gold-gradient font-display text-sm font-700 text-navy" style={{
              fontWeight: 700
            }}>{p.step}</span>
                <div>
                  <h4 className="font-600 text-navy" style={{
                fontWeight: 600
              }}>{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>)}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>;
}