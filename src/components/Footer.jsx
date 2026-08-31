import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { CONTACT, SERVICES, DISCLAIMER } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="max-w-xs text-sm leading-relaxed">
            Trusted financial guidance for Indian families and professionals. We help you invest with confidence and build lasting wealth.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social link" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-navy">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-600 uppercase tracking-wider text-white" style={{ fontWeight: 600 }}>Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[['About Us', '/about'], ['Calculators', '/calculators'], ['Blogs', '/blogs'], ['FAQ', '/faq'], ['Book Appointment', '/book']].map(([l, t]) => (
              <li key={t}><Link to={t} className="transition hover:text-gold">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-600 uppercase tracking-wider text-white" style={{ fontWeight: 600 }}>Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="transition hover:text-gold">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-600 uppercase tracking-wider text-white" style={{ fontWeight: 600 }}>Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.8} /><span>{CONTACT.address}</span></li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.8} /><a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-gold">{CONTACT.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.8} /><a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a></li>
          </ul>
          <p className="mt-4 text-xs">{CONTACT.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <p className="text-xs leading-relaxed text-white/50">
            <span className="font-600 text-white/70" style={{ fontWeight: 600 }}>Disclaimer: </span>{DISCLAIMER}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p>© {year} All rights reserved. AMFI Registered Mutual Fund Distributor.</p>
          <div className="flex gap-5">
            <Link to="/faq" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-gold">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
