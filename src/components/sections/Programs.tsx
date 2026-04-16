
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GraduationCap, Stethoscope, Utensils, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Programs = () => {
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
    <section id="programs" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Our Impact Programs</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground">How We Serve</h3>
            <p className="text-muted-foreground text-lg">
              Through focused initiatives, we tackle the most pressing challenges faced by our communities.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8 hidden md:flex border-2">View All Programs</Button>
        </div>

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
};

export default Programs;
