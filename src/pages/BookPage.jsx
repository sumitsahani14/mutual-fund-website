import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import Seo from '@/components/Seo';
import InnerHero from '@/components/InnerHero';
import { Field } from '@/components/Field';
import { SERVICES } from '@/lib/data';

const TIMES = ['Morning (9:30 AM - 12 PM)', 'Afternoon (12 - 4 PM)', 'Evening (4 - 7 PM)'];
const AMOUNTS = ['Under ₹5 Lakh', '₹5 - 25 Lakh', '₹25 - 50 Lakh', '₹50 Lakh - 1 Cr', 'Above ₹1 Cr'];
const PURPOSES = ['Start investing / SIP', ...SERVICES.map((s) => s.title), 'General financial advice'];

export default function BookPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', amount: '', purpose: '', time: '', date: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone)) er.phone = 'Enter a valid phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email.';
    if (!form.purpose) er.purpose = 'Please select a purpose.';
    if (!form.date) er.date = 'Please choose a date.';
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const perks = [
    { icon: ShieldCheck, t: '100% Free & No Obligation', d: 'Your first consultation is completely free with zero pressure to invest.' },
    { icon: UserCheck, t: 'Personalised Advice', d: 'A qualified advisor reviews your goals and builds a plan around you.' },
    { icon: Clock, t: 'Quick Response', d: 'We confirm your appointment within one business day.' },
  ];

  return (
    <>
      <Seo title="Book a Free Consultation" description="Book a free, no-obligation consultation with Baby Investments. Personalised, goal-based financial advice for your future." />
      <InnerHero eyebrow="Book Appointment" title="Book your free consultation"
        sub="Take the first step toward financial freedom. Tell us about yourself and we'll take it from there."
        crumbs={[{ label: 'Book Appointment' }]} />

      <section className="py-16">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {perks.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-xl gold-gradient text-navy"><p.icon className="h-5 w-5" strokeWidth={1.9} /></span>
                <h3 className="mt-4 font-600 text-navy" style={{ fontWeight: 600 }}>{p.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            {sent ? (
              <div className="grid h-full place-items-center py-16 text-center">
                <div>
                  <CheckCircle2 className="mx-auto h-16 w-16 text-royal" />
                  <h3 className="mt-5 text-2xl font-700 text-navy" style={{ fontWeight: 700 }}>You&apos;re all set!</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">Thank you, {form.name.split(' ')[0]}. We&apos;ve received your request and will confirm your appointment shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="text-2xl font-700 text-navy" style={{ fontWeight: 700 }}>Appointment details</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" value={form.name} onChange={change} error={errors.name} required />
                  <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={change} error={errors.phone} required />
                </div>
                <Field label="Email" name="email" type="email" value={form.email} onChange={change} error={errors.email} required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Investment Amount" name="amount" type="select" options={AMOUNTS} value={form.amount} onChange={change} />
                  <Field label="Purpose" name="purpose" type="select" options={PURPOSES} value={form.purpose} onChange={change} error={errors.purpose} required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Preferred Date" name="date" type="date" value={form.date} onChange={change} error={errors.date} required />
                  <Field label="Preferred Time" name="time" type="select" options={TIMES} value={form.time} onChange={change} />
                </div>
                <button type="submit" className="w-full rounded-full gold-gradient py-3.5 text-sm font-600 text-navy shadow-md transition hover:brightness-105 active:scale-[0.99]" style={{ fontWeight: 600 }}>
                  Book My Free Consultation
                </button>
                <p className="text-center text-xs text-muted-foreground">Investments are subject to market risks. Read all scheme documents carefully.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
