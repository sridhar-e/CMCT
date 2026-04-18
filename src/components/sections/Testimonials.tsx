
"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const reviews = [
    {
      name: "David Miller",
      role: "Philanthropist",
      quote: "CMCT operates with such transparency and heart. It's rare to see a trust so deeply rooted in the communities they serve. Their commitment to every individual is truly life-changing.",
      image: "https://picsum.photos/seed/p1/100/100"
    },
    {
      name: "Maria Rodriguez",
      role: "Volunteer",
      quote: "Spending time with the children in the education program showed me what true passion for change looks like. Simply inspiring to see the hope in their eyes.",
      image: "https://picsum.photos/seed/p2/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Testimonials</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
              Voices from <br />
              Our <span className="text-accent italic">Community</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md font-medium leading-relaxed">
            The stories of impact are best told by those who have witnessed the transformation firsthand. Your support makes these stories possible.
          </p>
        </div>

        {/* Right Side: Stacked Cards */}
        <div className="relative space-y-12 lg:space-y-0 lg:h-[600px] flex flex-col justify-center">
          {reviews.map((item, idx) => (
            <Card 
              key={idx} 
              className={cn(
                "border-none shadow-2xl rounded-[3rem] bg-white transition-all duration-500 hover:scale-[1.02] relative z-10",
                idx === 0 ? "lg:absolute lg:top-0 lg:left-0 lg:w-[90%]" : "lg:absolute lg:bottom-0 lg:right-0 lg:w-[90%]"
              )}
            >
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <Quote className="w-8 h-8 text-accent fill-accent" />
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg md:text-xl italic font-medium leading-relaxed">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-secondary">
                  <Avatar className="w-14 h-14 border-2 border-primary/20 p-0.5">
                    <AvatarImage src={item.image} alt={item.name} className="rounded-full object-cover" />
                    <AvatarFallback className="bg-primary text-white font-bold">{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-bold text-foreground text-lg">{item.name}</h5>
                    <p className="text-accent font-bold text-xs uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Decorative elements behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

    