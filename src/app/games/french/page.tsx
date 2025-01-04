"use client";
import { useEffect } from 'react';

const FrenchPage = () => {
  useEffect(() => {
    window.location.href = "https://games.narutostorm.com";
  }, []);

  return null;
};

export default FrenchPage;