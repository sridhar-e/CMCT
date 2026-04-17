
"use client";

import React from 'react';
import Image from 'next/image';
import { Handshake, Users, RefreshCcw, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HowWeDoIt = () => {
  const steps = [
    {
      title: "Effective partnerships and networking",
      desc: "We work alongside a committed network of volunteers, like-minded NGOs and corporate houses to amplify our impact.",
      icon: <Handshake className="w-8 h-8 text-accent" />,
      image: PlaceHolderImages.find(img => img.id === 'strategy-1')?.imageUrl || "https://picsum.photos/seed/strat1/800/500",
    },
    {
      title: "Large local donor base",
      desc: "We constantly seek to engage and expand our donor base by innovating through technology and collaborating with multiple stakeholders.",
      icon: <Users className="w-8 h-8 text-accent" />,
      image: PlaceHolderImages.find(img => img.id === 'strategy-2')?.imageUrl || "https://picsum.photos/seed/strat2/800/500",
    },
    {
      title: "Building long-term sustainable models",
      desc: "We believe that true development lies in the hands of empowered beneficiaries. Projects include revenue-generation components.",
      icon: <RefreshCcw className="w-8 h-8 text-accent" />,
      image: PlaceHolderImages.find(img => img.id === 'strategy-3')?.imageUrl || "https://picsum.photos/seed/strat3/800/500",
    }
  ];

  const watermark = PlaceHolderImages.find(img => img.id === 'strategy-bg')?.imageUrl;

  return (
    <section id="how-we-do-it" className="py-24 bg-[#faf9f4] relative overflow-hidden">
      {/* Background Watermark Image */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        {watermark && (
          <Image 
            src={watermark} 
            alt="Background" 
            fill 
            className="object-cover" 
            priority
          />
        )}
      </div>

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="space-y-4">
            <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Our Strategy</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-accent/30" />
              <Heart className="w-5 h-5 text-accent fill-accent" />
              <div className="h-px w-12 bg-accent/30" />
            </div>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-headline font-black text-foreground relative inline-block">
            How we <span className="text-accent italic">do it.</span>
            <svg className="absolute -bottom-4 left-0 w-full h-4 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q25 0 50 5 T100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </h3>
          
          <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed pt-4">
            Our approach is built on collaboration, technological innovation, and a commitment to long-term self-reliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <Card className="border-none shadow-xl rounded-[3rem] bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 ring-1 ring-black/5">
                <div className="h-2 w-1/3 bg-accent mx-auto rounded-b-full opacity-80" />
                <CardContent className="p-8 md:p-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-[#fff9e6] rounded-full flex items-center justify-center shadow-inner">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-headline font-bold leading-tight min-h-[4rem]">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-lg mt-6">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-6 bg-white pl-2 pr-8 py-2 rounded-full shadow-xl hover:shadow-2xl transition-all group border border-black/5">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <span className="font-bold text-foreground">Learn more about our approach</span>
            <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
