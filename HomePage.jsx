import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Plus, Minus, ShieldCheck } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { PrimaryButton, GhostButton, SectionHeading, Eyebrow, Counter, CtaBand, TrustBar } from '@/components/common';
import { SipPreview } from '@/components/calculators';
import { IMAGES, WHY_CHOOSE, SERVICES, PROCESS, WHY_MF, STATS, TESTIMONIALS, FAQS, BLOGS, CALCULATORS } from '@/lib/data';
function Hero() {
  return <section className="relative min-h-[100dvh] overflow-hidden pt-[72px]">
      <div className="absolute inset-0 navy-gradient" />
      <div className="absolute inset-0 opacity-[0.15]" style={{
      backgroundImage: `url(${IMAGES.pattern})`,
      backgroundSize: 'cover'
    }} />
      <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-royal/30 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" />

      <div className="container-wide relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <Reveal variant="reveal-l">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-500 text-white/80" style={{
            fontWeight: 500
          }}><ShieldCheck className="h-4 w-4 text-gold" /> AMFI Registered · 10+ Years of Trust</span>
          </Reveal>
          <Reveal variant="reveal-l" delay={80}>
            <h1 className="mt-6 text-4xl font-800 leading-[1.08] text-white sm:text-5xl lg:text-6xl" style={{
            fontWeight: 800
          }}>
              Grow Wealth<br />with <span className="text-gold">Confidence.</span>
            </h1>
          </Reveal>
          <Reveal variant="reveal-l" delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              Personalised, transparent and goal-based investing for Indian families and professionals. Secure your family&apos;s future and achieve financial freedom — one confident step at a time.
            </p>
          </Reveal>
          <Reveal variant="reveal-l" delay={240} className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton to="/book">Book Free Consultation</PrimaryButton>
            <GhostButton to="/services" light>Start Your Investment Journey <ArrowRight className="h-4 w-4" /></GhostButton>
          </Reveal>
          <Reveal variant="reveal-l" delay={320} className="mt-10 flex flex-wrap gap-8">
            {STATS.slice(0, 3).map(s => <div key={s.label}>
                <p className="font-display text-3xl font-700 text-white" style={{
              fontWeight: 700
            }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-white/60">{s.label}</p>
              </div>)}
          </Reveal>
        </div>

        <Reveal variant="reveal-r" delay={120} className="relative">
          <div className="absolute inset-0 -m-6 rounded-[2rem] bg-white/5 blur-2xl" />
          <img src={IMAGES.hero} alt="Illustration of financial planning and wealth growth with charts and coins" className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl" loading="eager" />
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl glass border border-white/40 px-5 py-4 shadow-xl sm:block">
            <p className="text-xs text-muted-foreground">Portfolio Growth</p>
            <p className="font-display text-2xl font-700 text-royal" style={{
            fontWeight: 700
          }}>+ Compounding</p>
          </div>
        </Reveal>
      </div>
    </section>;
}
function WhyChoose() {
  return <section className="py-20">
      <div className="container-wide">
        <SectionHeading center eyebrow="Why Choose Us" title="Advice you can actually trust" sub="We are not product sellers. We are long-term partners who put your goals and interests first — every single time." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w, i) => <Reveal key={w.title} delay={i * 60} className="group rounded-2xl border border-border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-muted text-royal transition group-hover:gold-gradient group-hover:text-navy">
                <w.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-lg font-600 text-navy" style={{
            fontWeight: 600
          }}>{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </Reveal>)}
        </div>
      </div>
    </section>;
}
function Services() {
  return <section className="bg-muted/40 py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our Services" title="Solutions for every financial goal" sub="From your first SIP to comprehensive wealth management, we cover the full journey." />
          <GhostButton to="/services">View All Services <ArrowRight className="h-4 w-4" /></GhostButton>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 9).map((s, i) => <Reveal key={s.slug} delay={i % 3 * 60} className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
              <span className="grid h-12 w-12 place-items-center rounded-xl navy-gradient text-gold">
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-lg font-600 text-navy" style={{
            fontWeight: 600
          }}>{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-royal transition group-hover:gap-2.5" style={{
            fontWeight: 600
          }}>
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>)}
        </div>
      </div>
    </section>;
}
function Process() {
  return <section className="py-20">
      <div className="container-wide">
        <SectionHeading center eyebrow="Our Process" title="A simple, proven investment journey" sub="Five clear steps that turn your goals into a confident, well-managed portfolio." />
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {PROCESS.map((p, i) => <Reveal key={p.step} variant={i % 2 ? 'reveal-r' : 'reveal-l'} className={`relative flex items-start gap-6 md:w-1/2 ${i % 2 ? 'md:ml-auto md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                <span className="z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full gold-gradient font-display text-lg font-700 text-navy shadow-md md:absolute md:top-0" style={{
              fontWeight: 700,
              [i % 2 ? 'left' : 'right']: '-24px'
            }}>{p.step}</span>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-600 text-navy" style={{
                fontWeight: 600
              }}>{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>)}
          </div>
        </div>
      </div>
    </section>;
}
function WhyMF() {
  return <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 navy-gradient" />
      <div className="absolute inset-0 opacity-[0.1]" style={{
      backgroundImage: `url(${IMAGES.pattern})`,
      backgroundSize: 'cover'
    }} />
      <div className="container-wide relative">
        <SectionHeading center light eyebrow="Why Mutual Funds" title="A smarter way to grow your money" sub="Mutual funds combine professional expertise, diversification and compounding — the essentials of long-term wealth." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_MF.map((w, i) => <Reveal key={w.title} delay={i % 3 * 60} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
              <span className="grid h-11 w-11 place-items-center rounded-xl gold-gradient text-navy">
                <w.icon className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <h3 className="mt-4 text-base font-600 text-white" style={{
            fontWeight: 600
          }}>{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{w.text}</p>
            </Reveal>)}
        </div>
      </div>
    </section>;
}
function SipSection() {
  return <section className="py-20">
      <div className="container-wide">
        <SectionHeading center eyebrow="SIP Calculator" title="See your wealth grow" sub="Adjust the sliders and watch how a disciplined monthly SIP can transform into serious long-term wealth." />
        <div className="mx-auto mt-12 max-w-4xl">
          <SipPreview />
          <div className="mt-8 text-center">
            <PrimaryButton to="/calculators">Explore All Calculators <ArrowRight className="h-4 w-4" /></PrimaryButton>
          </div>
        </div>
      </div>
    </section>;
}
function CalcPreview() {
  return <section className="bg-muted/40 py-20">
      <div className="container-wide">
        <SectionHeading center eyebrow="Financial Calculators" title="Plan every goal with clarity" sub="Free, instant calculators to help you make confident financial decisions." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CALCULATORS.slice(0, 6).map((c, i) => <Reveal key={c.slug} delay={i % 3 * 60}>
              <Link to={`/calculators?c=${c.slug}`} className="group flex h-full items-center justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <div>
                  <h3 className="text-base font-600 text-navy" style={{
                fontWeight: 600
              }}>{c.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <ArrowRight className="ml-4 h-5 w-5 shrink-0 text-royal transition group-hover:translate-x-1" />
              </Link>
            </Reveal>)}
        </div>
      </div>
    </section>;
}
function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI(v => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setI(v => (v + 1) % TESTIMONIALS.length);
  return <section className="py-20">
      <div className="container-wide">
        <SectionHeading center eyebrow="Testimonials" title="Trusted by families across India" />
        <Reveal className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-white p-8 shadow-lg shadow-navy/5 sm:p-12">
          <div className="flex gap-1 text-gold">
            {Array.from({
            length: 5
          }).map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-navy sm:text-xl">&ldquo;{t.text}&rdquo;</p>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full navy-gradient font-display font-700 text-gold" style={{
              fontWeight: 700
            }}>
                {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </span>
              <div>
                <p className="font-600 text-navy" style={{
                fontWeight: 600
              }}>{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-muted"><ChevronLeft className="h-5 w-5" /></button>
              <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-muted"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>;
}
function FaqPreview() {
  const [open, setOpen] = useState(0);
  return <section className="bg-muted/40 py-20">
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading eyebrow="FAQs" title="Questions? We have answers." sub="Everything you want to know before you start investing with us." />
          <GhostButton to="/faq" className="mt-6">View All FAQs <ArrowRight className="h-4 w-4" /></GhostButton>
        </div>
        <div className="space-y-3">
          {FAQS.slice(0, 6).map((f, i) => <div key={i} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-600 text-navy" style={{
              fontWeight: 600
            }}>{f.q}</span>
                {open === i ? <Minus className="h-5 w-5 shrink-0 text-royal" /> : <Plus className="h-5 w-5 shrink-0 text-royal" />}
              </button>
              {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
            </div>)}
        </div>
      </div>
    </section>;
}
function BlogPreview() {
  return <section className="py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights" title="Learn to invest smarter" sub="Practical, jargon-free articles to help you make better money decisions." />
          <GhostButton to="/blogs">Read All Articles <ArrowRight className="h-4 w-4" /></GhostButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOGS.slice(0, 3).map((b, i) => <Reveal key={b.slug} delay={i * 70}>
              <Link to={`/blogs/${b.slug}`} className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-600 uppercase tracking-wider text-royal" style={{
                fontWeight: 600
              }}>{b.category}</span>
                  <h3 className="mt-2 text-lg font-600 leading-snug text-navy" style={{
                fontWeight: 600
              }}>{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{b.date} · {b.read} read</p>
                </div>
              </Link>
            </Reveal>)}
        </div>
      </div>
    </section>;
}
export default function HomePage() {
  return <>
      <Seo title="Grow Wealth with Confidence" description="Baby Investments — premium mutual fund distribution and financial advisory. Personalised, transparent, goal-based investing for Indian families." />
      <Hero />
      <TrustBar />
      <WhyChoose />
      <Services />
      <Process />
      <WhyMF />
      <SipSection />
      <CalcPreview />
      <Testimonials />
      <FaqPreview />
      <BlogPreview />
      <CtaBand />
    </>;
}