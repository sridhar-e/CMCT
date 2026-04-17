
"use client";

import React from 'react';
import { Handshake, Users, RefreshCcw, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowWeDoIt = () => {
  const pillars = [
    {
      title: "Effective partnerships and networking",
      desc: "We work alongside a committed network of volunteers, like-minded NGOs and corporate houses to amplify our impact.",
      icon: <Handshake className="w-10 h-10 text-accent" />,
      delay: "0ms"
    },
    {
      title: "Larger local donor base",
      desc: "We constantly seek to engage and expand our donor base by innovating through technology, collaborating with multiple stakeholders and investing in need-of-the-hour community projects.",
      icon: <Users className="w-10 h-10 text-accent" />,
      delay: "100ms"
    },
    {
      title: "Building long-term sustainable models",
      desc: "We believe that true development lies in the hands of empowered beneficiaries. Most projects include a revenue-generation component that helps beneficiaries support themselves.",
      icon: <RefreshCcw className="w-10 h-10 text-accent" />,
      delay: "200ms"
    }
  ];

  return (
    <section id="how-we-do-it" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
          <div className="lg:w-2/3 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-accent-foreground font-bold text-sm shadow-sm border">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="uppercase tracking-wider">Our Strategy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-foreground leading-tight">
              How we <br />
              <span className="text-accent italic">do it.</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our approach is built on collaboration, technological innovation, and a commitment to long-term self-reliance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <Card 
              key={idx} 
              className="group border-none shadow-none bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: pillar.delay }}
            >
              <CardContent className="p-10 space-y-8">
                <div className="w-20 h-20 bg-primary/10 rounded-[1.5rem] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {pillar.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-headline font-bold leading-snug group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="w-12 h-1.5 bg-primary/30 rounded-full group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
