
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles } from 'lucide-react';

const AboutHero = () => {
  const bgImage = PlaceHolderImages.find(img => img.id === 'mission-focus');

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-20">
      {/* Background Image with optimized overlays */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt="About CMCT"
            fill
            className="object-cover scale-105"
            priority
            data-ai-hint="charity community"
          />
        )}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay for depth and focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Our Journey</span>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-headline font-black text-white leading-tight">
              A Legacy of <br />
              <span className="text-primary italic">Compassion.</span>
            </h1>
            <div className="h-2 w-24 bg-primary rounded-full" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed max-w-xl">
            For over six decades, we've been dedicated to transforming lives and fostering hope in the heart of our communities.
          </p>
        </div>
      </div>

      {/* Decorative Gradient Blend to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default AboutHero;
