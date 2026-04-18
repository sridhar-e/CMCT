
"use client";

import React from 'react';
import { Heart, Star, ClipboardCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const goals = [
    {
      title: "We are Christ-centred",
      desc: "As an organization, we encourage staff to emulate Christ in selfless service. We reach out to all people with love and compassion, irrespective of their caste, creed, or religious preferences, with no strings attached.",
      icon: <Heart className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    },
    {
      title: "We pursue excellence",
      desc: "We uphold high standards of integrity and excellence in our professional lives. We encourage staff to keep abreast with industry-recognized best practices, so we can serve beneficiaries in the best possible way.",
      icon: <Star className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    },
    {
      title: "We are accountable",
      desc: "We seek to minimize our administrative overheads and ensure that every project gets adequate financial support. Our financial transactions are regularly audited and available for review.",
      icon: <ClipboardCheck className="w-8 h-8 text-accent" />,
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
            Founded in 1964, Christian Missions Charitable Trust (CMCT) has been a beacon of hope for thousands. We believe that small acts of kindness can lead to monumental shifts in community well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <Card key={idx} className="border-none shadow-md bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className={`${goal.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {goal.icon}
                </div>
                <h4 className="text-2xl font-headline font-bold leading-tight">{goal.title}</h4>
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
