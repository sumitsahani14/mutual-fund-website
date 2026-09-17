import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CalendarCheck, ArrowUp } from 'lucide-react';
import { CONTACT } from '@/lib/data';

export default function FloatingButtons() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {top && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white shadow-lg transition hover:brightness-125 active:scale-95">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:brightness-105 active:scale-95">
        <MessageCircle className="h-6 w-6" />
      </a>
      <a href={`tel:${CONTACT.phoneRaw}`} aria-label="Call now"
        className="grid h-12 w-12 place-items-center rounded-full bg-royal text-white shadow-lg transition hover:brightness-110 active:scale-95">
        <Phone className="h-5 w-5" />
      </a>
      <Link to="/book" aria-label="Book appointment"
        className="grid h-12 w-12 place-items-center rounded-full gold-gradient text-navy shadow-lg transition hover:brightness-105 active:scale-95">
        <CalendarCheck className="h-5 w-5" />
      </Link>
    </div>
  );
}
