
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles, GraduationCap, Stethoscope, Utensils, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Mission = () => {
  const programs = [
    {
      title: "Education Support",
      desc: "Providing scholarships and school supplies to ensure every child gets the learning they deserve.",
      icon: <GraduationCap className="w-6 h-6" />,
      image: PlaceHolderImages.find(i => i.id === 'program-education')?.imageUrl,
      hint: "education classroom"
    },
    {
      title: "Healthcare Services",
      desc: "Operating mobile clinics and providing medical aid to remote villages lacking basic facilities.",
      icon: <Stethoscope className="w-6 h-6" />,
      image: PlaceHolderImages.find(i => i.id === 'program-health')?.imageUrl,
      hint: "medical healthcare"
    },
    {
      title: "Nutrition Programs",
      desc: "Ensuring no child goes to bed hungry through our community kitchens and nutritional supplements.",
      icon: <Utensils className="w-6 h-6" />,
      image: PlaceHolderImages.find(i => i.id === 'program-food')?.imageUrl,
      hint: "food relief"
    },
    {
      title: "Community Growth",
      desc: "Empowering adults through vocational training and self-help group initiatives.",
      icon: <Users className="w-6 h-6" />,
      image: "https://picsum.photos/seed/voca/600/400",
      hint: "community training"
    }
  ];

  return (
    <section id="mission" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-foreground font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>OUR CORE MISSION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-foreground leading-tight">
            Commitment to <br />
            <span className="text-accent italic">Humanity.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            We are actively involved in realizing the millennium development goals. We seek to serve the most vulnerable sections of society through…
          </p>
        </div>

        {/* How We Serve Cards Block */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                {program.image ? (
                  <Image 
                    src={program.image} 
                    alt={program.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={program.hint}
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-xs">Image unavailable</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                  {program.icon}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h4 className="text-xl font-headline font-bold group-hover:text-accent transition-colors">{program.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.desc}
                </p>
                <Button variant="link" className="p-0 h-auto font-bold text-accent">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
