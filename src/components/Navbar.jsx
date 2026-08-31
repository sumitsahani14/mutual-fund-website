import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from './Logo';
import { SERVICES } from '@/lib/data';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', dropdown: true },
  { to: '/calculators', label: 'Calculators' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setSvcOpen(false); }, [loc.pathname]);

  const isHome = loc.pathname === '/';
  const solid = true;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'glass border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <nav className="container-wide flex h-[72px] items-center justify-between">
        <div className={solid ? '' : 'brightness-0 invert-0'}>
          <Logo light={!solid} />
        </div>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.to} className="relative"
                onMouseEnter={() => item.dropdown && setSvcOpen(true)}
                onMouseLeave={() => item.dropdown && setSvcOpen(false)}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-500 transition-colors ${
                    solid
                      ? isActive ? 'text-royal' : 'text-navy/80 hover:text-royal'
                      : isActive ? 'text-gold' : 'text-white/90 hover:text-white'
                  }`
                }
                style={{ fontWeight: 500 }}
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </NavLink>
              {item.dropdown && svcOpen && (
                <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-white p-3 shadow-xl shadow-navy/10">
                    {SERVICES.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-muted">
                        <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-royal" strokeWidth={1.8} />
                        <span className="text-sm font-500 text-navy" style={{ fontWeight: 500 }}>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/book" className="rounded-full gold-gradient px-5 py-2.5 text-sm font-600 text-navy shadow-md shadow-amber-900/10 transition hover:brightness-105 active:scale-[0.98]" style={{ fontWeight: 600 }}>
            Book Consultation
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className={solid ? 'text-navy' : 'text-white'} /> : <Menu className={solid ? 'text-navy' : 'text-white'} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="container-wide flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.to}>
                {item.dropdown ? (
                  <div>
                    <button onClick={() => setSvcOpen((v) => !v)} className="flex w-full items-center justify-between py-3 text-navy font-500" style={{ fontWeight: 500 }}>
                      Services <ChevronDown className={`h-4 w-4 transition ${svcOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {svcOpen && (
                      <div className="grid grid-cols-1 gap-0.5 pb-2 pl-1">
                        <Link to="/services" className="py-2 text-sm font-600 text-royal">All Services</Link>
                        {SERVICES.map((s) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className="py-2 text-sm text-muted-foreground">{s.title}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink to={item.to} className="block py-3 text-navy font-500" style={{ fontWeight: 500 }}>{item.label}</NavLink>
                )}
              </li>
            ))}
            <Link to="/book" className="mt-3 rounded-full gold-gradient px-5 py-3 text-center text-sm font-600 text-navy" style={{ fontWeight: 600 }}>Book Consultation</Link>
          </ul>
        </div>
      )}
    </header>
  );
}
