import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-600 uppercase tracking-[0.18em] text-royal" style={{ fontWeight: 600 }}>
      <span className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, sub, center, light }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-3 text-3xl font-700 leading-tight sm:text-4xl ${light ? 'text-white' : 'text-navy'}`} style={{ fontWeight: 700 }}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-muted-foreground'}`}>{sub}</p>}
    </div>
  );
}

export function PrimaryButton({ to, href, children, className = '', ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-6 py-3 text-sm font-600 text-navy shadow-md shadow-amber-900/10 transition hover:brightness-105 hover:-translate-y-0.5 active:scale-[0.98] ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  return <a href={href} className={cls} {...rest}>{children}</a>;
}

export function GhostButton({ to, href, children, className = '', light, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-600 transition hover:-translate-y-0.5 active:scale-[0.98] ${light ? 'border-white/30 text-white hover:bg-white/10' : 'border-navy/20 text-navy hover:bg-navy hover:text-white'} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  return <a href={href} className={cls} {...rest}>{children}</a>;
}

export function Counter({ value, suffix = '', duration = 1600 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 navy-gradient" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(42 72% 60%) 0, transparent 40%), radial-gradient(circle at 85% 70%, hsl(222 74% 55%) 0, transparent 45%)' }} />
      <Reveal className="container-wide relative text-center">
        <Eyebrow>Start Today</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-700 leading-tight text-white sm:text-4xl" style={{ fontWeight: 700 }}>
          Ready to Build Your Wealth?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Book a free, no-obligation consultation. Let us understand your goals and craft a plan that helps you invest with confidence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton to="/book">Book Free Consultation</PrimaryButton>
          <GhostButton to="/contact" light>Request a Callback</GhostButton>
        </div>
      </Reveal>
    </section>
  );
}

export function TrustBar() {
  const items = ['SEBI / AMFI Compliant', '100% Personalised Advice', 'Client Confidentiality', 'Secure Consultation', 'Trusted Financial Guidance'];
  return (
    <div className="border-y border-border bg-muted/40">
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-xs font-500 text-muted-foreground sm:text-sm" style={{ fontWeight: 500 }}>
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />{t}
          </span>
        ))}
      </div>
    </div>
  );
}
