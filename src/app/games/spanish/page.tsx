"use client";
import { useEffect } from 'react';

const SpanishPage = () => {
  useEffect(() => {
    window.location.href = "https://games.narutostorm.com";
  }, []);

  return null;
};

export default SpanishPage;