
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutHero = () => {
  const img1 = PlaceHolderImages.find(img => img.id === 'mission-focus');
  const img2 = PlaceHolderImages.find(img => img.id === 'gallery-1');

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 bg-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div className="space-y-10 animate-fade-in order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-full font-bold text-xs uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Discover Our Story</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-black text-foreground leading-[1.1]">
              A Journey of <br />
              <span className="text-accent italic">Purpose & Hope.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Since 1964, we've been more than just a charity. We're a global family dedicated to lifting the vulnerable and proving that compassion can change everything.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-xl hover:scale-105 transition-all">
              Join Our Mission
            </Button>
            <div className="flex items-center gap-4 bg-white px-6 py-2 rounded-full shadow-md border border-black/5">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/abt${i}/100/100`} alt="Supporter" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-muted-foreground">Loved by 12k+</span>
            </div>
          </div>
        </div>

        {/* Visual Column - Staggered Grid */}
        <div className="relative order-1 lg:order-2 animate-fade-in [animation-delay:200ms]">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              {img1 && (
                <Image
                  src={img1.imageUrl}
                  alt={img1.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="charity focus"
                />
              )}
            </div>

            {/* Floating Second Image */}
            <div className="absolute -bottom-10 -left-12 w-2/3 aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-white hidden md:block group">
              {img2 && (
                <Image
                  src={img2.imageUrl}
                  alt={img2.description}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint="community aid"
                />
              )}
            </div>

            {/* Decorative Badges */}
            <div className="absolute -top-6 -right-6 bg-accent p-6 rounded-3xl shadow-xl z-20 animate-bounce transition-all duration-3000">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            <div className="absolute bottom-1/4 -right-12 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-white/50 hidden lg:flex">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Active Volunteers</p>
                <p className="text-lg font-black text-foreground">500+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
