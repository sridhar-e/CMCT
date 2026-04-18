
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { HandHeart, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-foreground text-background rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-primary font-semibold text-sm">
              <HandHeart className="w-4 h-4" />
              <span>Join the Movement</span>
            </div>
            <h2 className="text-4xl md:text-[54px] font-headline font-bold leading-tight">
              Ready to make a <br /> 
              <span className="text-primary italic">Difference?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Your contribution goes directly to the field, helping us provide life-changing resources to those who need them most.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-lg hover:scale-105 transition-all bg-accent text-foreground hover:bg-accent/90">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-12 h-16 text-lg font-bold border-white/20 hover:bg-white/10 text-white">
              <Mail className="mr-2" /> Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
