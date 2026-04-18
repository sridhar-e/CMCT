
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutHero = () => {
  const bgImage = PlaceHolderImages.find(img => img.id === 'mission-focus');

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt="About CMCT"
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint="charity work"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white space-y-6">
        <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tight">
          About <span className="text-primary italic">CMCT</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-white/90 leading-relaxed">
          Driven by compassion, fueled by hope. Discover our legacy of transforming lives since 1964.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
