
"use client";

import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const goals = [
    {
      title: "Our Mission",
      desc: "To manifest God's love through practical service to the poor, irrespective of religion, caste or creed.",
      icon: <Target className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    },
    {
      title: "Our Vision",
      desc: "A world where every individual has the opportunity to live a life of dignity, health, and purpose.",
      icon: <Eye className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    },
    {
      title: "Our Values",
      desc: "Compassion, integrity, accountability, and excellence in everything we do to serve humanity.",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm">About CMCT</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground">A Legacy of Care and Commitment</h3>
          <p className="text-muted-foreground text-lg">
            Founded in 1974, Christian Missions Charitable Trust (CMCT) has been a beacon of hope for thousands. We believe that small acts of kindness can lead to monumental shifts in community well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <Card key={idx} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className={`${goal.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {goal.icon}
                </div>
                <h4 className="text-2xl font-headline font-bold">{goal.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {goal.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
