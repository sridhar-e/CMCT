
"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const reviews = [
    {
      name: "David Miller",
      role: "Philanthropist",
      quote: "CMCT Compass operates with such transparency and heart. It's rare to see a trust so deeply rooted in the communities they serve.",
      image: "https://picsum.photos/seed/p1/100/100"
    },
    {
      name: "Maria Rodriguez",
      role: "Volunteer",
      quote: "Spending time with the children in the education program showed me what true passion for change looks like. Simply inspiring.",
      image: "https://picsum.photos/seed/p2/100/100"
    },
    {
      name: "Robert Chen",
      role: "Corporate Donor",
      quote: "Our partnership with CMCT has been one of our most rewarding CSR initiatives. Their reporting and impact are top-notch.",
      image: "https://picsum.photos/seed/p3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Words of Gratitude</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Voices from Our Community</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <Card key={idx} className="border-none shadow-sm rounded-[2rem] hover:shadow-xl transition-shadow overflow-hidden bg-white">
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Quote className="w-8 h-8 text-accent fill-accent" />
                </div>
                <p className="text-muted-foreground text-lg italic leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex flex-col items-center gap-3">
                  <Avatar className="w-16 h-16 border-2 border-primary">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-bold text-foreground">{item.name}</h5>
                    <p className="text-accent font-medium text-sm">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
