'use client';

import { useState, useEffect } from 'react';

export function useResetOnScroll(threshold = 0.3) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // If we've scrolled back up significantly, reset animations
      if (scrollPosition < windowHeight * threshold && hasAnimated) {
        setShouldReset(true);
        setHasAnimated(false);
      }
      // If we've scrolled down significantly, mark as animated
      else if (scrollPosition > windowHeight * 0.5 && !hasAnimated) {
        setHasAnimated(true);
        setShouldReset(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, threshold]);

  return shouldReset;
}
