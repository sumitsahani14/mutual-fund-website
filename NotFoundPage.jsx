import React from 'react';
import Seo from '@/components/Seo';
import { PrimaryButton, GhostButton } from '@/components/common';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" />
      <section className="grid min-h-[70vh] place-items-center pt-[72px]">
        <div className="container-narrow text-center">
          <p className="font-display text-7xl font-800 text-gold" style={{ fontWeight: 800 }}>404</p>
          <h1 className="mt-4 text-3xl font-700 text-navy" style={{ fontWeight: 700 }}>Page not found</h1>
          <p className="mt-3 text-muted-foreground">The page you are looking for doesn&apos;t exist or has moved.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/">Back to Home</PrimaryButton>
            <GhostButton to="/contact">Contact Us</GhostButton>
          </div>
        </div>
      </section>
    </>
  );
}
