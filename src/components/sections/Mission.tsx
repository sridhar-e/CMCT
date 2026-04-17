
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles, Globe, HeartHandshake } from 'lucide-react';

const Mission = () => {
  const missionImage = PlaceHolderImages.find(img => img.id === 'mission-focus');

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
              {missionImage && (
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={missionImage.imageHint}
                />
              )}
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl" />
            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-accent p-6 rounded-3xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4 text-foreground">
                <Globe className="w-10 h-10" />
                <div>
                  <p className="text-2xl font-black">Global</p>
                  <p className="text-sm font-semibold opacity-70 uppercase tracking-wider">Alignment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-foreground font-bold text-sm tracking-wide">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>OUR CORE MISSION</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-foreground leading-tight">
                Commitment to <br />
                <span className="text-accent italic">Humanity.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                We are actively involved in realizing the millennium development goals. We seek to serve the most vulnerable sections of society through…
              </p>
              
              <div className="grid gap-6 pt-4">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-headline mb-2">Empowering the Vulnerable</h4>
                    <p className="text-muted-foreground">Focusing on those who are often left behind by traditional development systems.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-headline mb-2">Sustainable Development</h4>
                    <p className="text-muted-foreground">Aligning local grassroots efforts with international standards for lasting impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
