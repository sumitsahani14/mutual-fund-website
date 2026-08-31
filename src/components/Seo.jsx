import React from 'react';
import { Helmet } from 'react-helmet';

export default function Seo({ title, description }) {
  const full = title ? title : 'Grow Wealth with Confidence';
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description || 'Premium mutual fund distribution and financial advisory. Personalised, transparent, goal-based investing for Indian families and professionals.'} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description || 'Grow your wealth with confidence.'} />
    </Helmet>
  );
}
