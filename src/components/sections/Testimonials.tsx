
"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const reviews = [
    {
      name: "Padmavathy",
      role: "Senior staff member",
      quote: "CMCT expanded my horizons. I have been able to increase my skills through training programs for which I was sent. I began my career as a teacher, but CMCT gave me the opportunity to be a designer, a leader, and a mentor to women from difficult backgrounds.",
      image: "https://picsum.photos/seed/padmavathy/100/100"
    },
    {
      name: "Sheeba",
      role: "Ex-sponsored child and hostel inmate, now a Mathematics teacher",
      quote: "CMCT has given us so many opportunities. It has always been ‘home,’ not just a hostel. I think every sponsor with CMCT should know that thanks to their support, children are getting a chance to realize their fullest potential.",
      image: "https://picsum.photos/seed/sheeba/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground leading-tight">
              Voices from <br />
              Our <span className="text-accent italic">Community</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm font-medium leading-relaxed">
            The stories of impact are best told by those who have witnessed the transformation firsthand. Your support makes these stories possible.
          </p>
        </div>

        {/* Right Side: Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          {reviews.map((item, idx) => (
            <Card 
              key={idx} 
              className="border-none shadow-2xl rounded-[2.5rem] bg-white transition-all duration-500 hover:scale-[1.02]"
            >
              <CardContent className="p-10 md:p-12 flex flex-col items-center text-center space-y-8 h-full">
                {/* Quote Icon */}
                <div className="bg-[#FFF9E6] p-4 rounded-full">
                  <Quote className="w-6 h-6 text-accent fill-accent" />
                </div>
                
                {/* Quote Text */}
                <p className="text-muted-foreground text-[15px] italic font-medium leading-relaxed flex-grow">
                  "{item.quote}"
                </p>
                
                {/* Divider Line */}
                <div className="w-10 h-1 bg-accent rounded-full" />
                
                {/* User Info */}
                <div className="flex flex-col items-center space-y-4 pt-2">
                  <Avatar className="w-20 h-20 border-4 border-accent p-0.5">
                    <AvatarImage src={item.image} alt={item.name} className="rounded-full object-cover" />
                    <AvatarFallback className="bg-primary text-white font-bold">{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h5 className="font-headline font-bold text-foreground text-xl">{item.name}</h5>
                    <p className="text-accent font-bold text-xs tracking-wide uppercase max-w-[200px]">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Decorative Background Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
