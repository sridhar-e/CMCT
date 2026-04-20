'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-2xl transition-all duration-300 bg-accent text-foreground hover:bg-accent/90 border-none',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      )}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </Button>
  );
}
