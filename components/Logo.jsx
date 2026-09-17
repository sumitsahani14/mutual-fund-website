import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link to="/" aria-label="Home" />
  );
}
