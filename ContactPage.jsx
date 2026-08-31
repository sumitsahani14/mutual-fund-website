import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/Seo';
import InnerHero from '@/components/InnerHero';
import { Field } from '@/components/Field';
import { CONTACT } from '@/lib/data';

const TIMES = ['Morning (9:30 AM - 12 PM)', 'Afternoon (12 - 4 PM)', 'Evening (4 - 7 PM)'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', date: '', time: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone)) er.phone = 'Enter a valid phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email.';
    if (!form.message.trim()) er.message = 'Please add a short message.';
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  return (
    <>
      <Seo title="Contact Us" description="Get in touch with Baby Investments. Call, WhatsApp, email or send us a message — we're here to help you invest with confidence." />
      <InnerHero eyebrow="Contact" title="Let's start a conversation"
        sub="Have a question or ready to begin? Reach out and our team will get back to you promptly."
        crumbs={[{ label: 'Contact' }]} />

      <section className="py-16">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {[
              { icon: Phone, label: 'Call Us', value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', href: `https://wa.me/${CONTACT.phoneRaw}` },
              { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-xl navy-gradient text-gold"><c.icon className="h-6 w-6" strokeWidth={1.8} /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="font-600 text-navy" style={{ fontWeight: 600 }}>{c.value}</p>
                </div>
              </a>
            ))}
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-muted text-royal"><MapPin className="h-6 w-6" strokeWidth={1.8} /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Office</p>
                  <p className="font-600 text-navy" style={{ fontWeight: 600 }}>{CONTACT.address}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-4 w-4" /> {CONTACT.hours}</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe title="Office location" className="h-56 w-full" loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.86%2C19.06%2C72.88%2C19.08&layer=mapnik" />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            {sent ? (
              <div className="grid h-full place-items-center py-16 text-center">
                <div>
                  <CheckCircle2 className="mx-auto h-16 w-16 text-royal" />
                  <h3 className="mt-5 text-2xl font-700 text-navy" style={{ fontWeight: 700 }}>Message sent!</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">Thank you, {form.name.split(' ')[0]}. Our team will get back to you within one business day.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="text-2xl font-700 text-navy" style={{ fontWeight: 700 }}>Send us a message</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" value={form.name} onChange={change} error={errors.name} required />
                  <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={change} error={errors.phone} required />
                </div>
                <Field label="Email" name="email" type="email" value={form.email} onChange={change} error={errors.email} required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Preferred Date" name="date" type="date" value={form.date} onChange={change} />
                  <Field label="Preferred Time" name="time" type="select" options={TIMES} value={form.time} onChange={change} />
                </div>
                <Field label="Message" name="message" type="textarea" value={form.message} onChange={change} error={errors.message} required placeholder="How can we help you?" />
                <button type="submit" className="w-full rounded-full gold-gradient py-3.5 text-sm font-600 text-navy shadow-md transition hover:brightness-105 active:scale-[0.99]" style={{ fontWeight: 600 }}>
                  Send Message
                </button>
                <p className="text-center text-xs text-muted-foreground">Your information is kept strictly confidential.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
