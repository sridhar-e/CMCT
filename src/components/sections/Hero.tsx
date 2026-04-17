"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-charity');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl pointer-events-none">
        <div className="w-full h-full bg-primary rounded-full translate-x-1/2 -translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm">
            <Sparkles className="w-4 h-4 fill-primary" />
            <span>Spreading Love & Compassion Since 1974</span>
          </div>
          
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-tight text-foreground">
            Change made <br /> 
            <span className="text-accent underline decoration-primary/30 underline-offset-8">possible</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            When faced with something bigger than ourselves—like poverty—it’s natural to feel overwhelmed. And yet, as every single life impacted by the Christian Missions Charitable Trust shows, change is possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg font-bold shadow-xl hover:scale-105 transition-all">
              Be the change
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg font-bold group border-2">
              Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative shadow-sm">
                  <Image src={`https://picsum.photos/seed/face${i}/100/100`} alt="Supporter" fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              <span className="text-foreground font-bold">12k+</span> Supporters worldwide
            </p>
          </div>
        </div>

        <div className="relative animate-fade-in [animation-delay:200ms]">
          <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="glass p-6 rounded-2xl w-full">
                <p className="text-foreground font-bold text-lg italic">
                  "CMCT has changed my world. I now have a future I could never have imagined."
                </p>
                <p className="text-muted-foreground text-sm mt-2">— Sarah J., Program Beneficiary</p>
              </div>
            </div>
          </div>
          {/* Accent Element */}
          <div className="absolute -bottom-6 -left-6 bg-accent w-24 h-24 rounded-full -z-10" />
          <div className="absolute -top-6 -right-6 border-2 border-primary w-32 h-32 rounded-[2rem] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
