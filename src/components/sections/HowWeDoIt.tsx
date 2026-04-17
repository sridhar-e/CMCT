
"use client";

import React from 'react';
import { Handshake, Users, RefreshCcw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowWeDoIt = () => {
  const steps = [
    {
      number: "01",
      title: "Effective partnerships and networking",
      desc: "We work alongside a committed network of volunteers, like-minded NGOs and corporate houses to amplify our impact.",
      icon: <Handshake className="w-8 h-8 text-accent" />,
    },
    {
      number: "02",
      title: "Large local donor base",
      desc: "We constantly seek to engage and expand our donor base by innovating through technology and collaborating with multiple stakeholders.",
      icon: <Users className="w-8 h-8 text-accent" />,
    },
    {
      number: "03",
      title: "Building long-term sustainable models",
      desc: "We believe that true development lies in the hands of empowered beneficiaries. Projects include revenue-generation components.",
      icon: <RefreshCcw className="w-8 h-8 text-accent" />,
    }
  ];

  return (
    <section id="how-we-do-it" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-muted/30 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-accent font-bold tracking-widest uppercase text-xs">Our Strategy</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-black text-foreground">
            How we <span className="text-accent italic">do it.</span>
          </h3>
          <p className="text-muted-foreground text-lg font-medium">
            Our approach is built on collaboration, technological innovation, and a commitment to long-term self-reliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[3rem] bg-white group-hover:-translate-y-2 overflow-hidden ring-1 ring-muted/20">
                <CardContent className="p-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 bg-secondary/50 rounded-[1.5rem] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-black text-muted/20 group-hover:text-accent/20 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-headline font-bold leading-tight group-hover:text-accent transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2">
                    <div className="h-1 w-12 bg-primary/30 rounded-full group-hover:bg-accent group-hover:w-24 transition-all duration-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
