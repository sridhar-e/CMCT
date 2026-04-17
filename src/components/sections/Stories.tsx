
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Stories = () => {
  const stories = [
    {
      id: "story-1",
      category: "Education",
      date: "Oct 12, 2023",
      title: "Dreams Beyond the Slums: Ananya's Academic Triumph",
      desc: "How a small scholarship changed the trajectory of a young girl's life in Chennai.",
      image: PlaceHolderImages.find(img => img.id === 'story-1')?.imageUrl || "https://picsum.photos/seed/story1/800/600",
      hint: "child education"
    },
    {
      id: "story-2",
      category: "Empowerment",
      date: "Nov 05, 2023",
      title: "The Loom of Hope: Women Reviving Traditional Crafts",
      desc: "Our vocational program helps 50+ women achieve financial independence through hand-weaving.",
      image: PlaceHolderImages.find(img => img.id === 'story-2')?.imageUrl || "https://picsum.photos/seed/story2/800/600",
      hint: "women empowerment"
    },
    {
      id: "story-3",
      category: "Healthcare",
      date: "Dec 20, 2023",
      title: "Healing Remote Corners: The Mobile Clinic Impact",
      desc: "Reaching the unreachable with specialized medical care and life-saving treatments.",
      image: PlaceHolderImages.find(img => img.id === 'story-3')?.imageUrl || "https://picsum.photos/seed/story3/800/600",
      hint: "medical camp"
    }
  ];

  return (
    <section id="stories" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary/20 -skew-y-3 origin-top-left -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Real Impact</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-black text-foreground leading-tight">
              Latest <span className="text-accent italic">Stories</span>
            </h3>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Witness the transformation through the eyes of those whose lives have been changed by your generosity.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8 h-12 font-bold border-2 hover:bg-accent hover:text-foreground hover:border-accent transition-all">
            Read All Stories
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {stories.map((story, idx) => (
            <Card 
              key={idx} 
              className="group border-none shadow-none bg-transparent overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-0 space-y-6">
                <div className="aspect-[4/3] relative rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white group-hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={story.hint}
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/90 backdrop-blur-sm text-foreground hover:bg-white px-4 py-1.5 rounded-full font-bold shadow-md">
                      {story.category}
                    </Badge>
                  </div>
                </div>

                <div className="px-2 space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold">
                    <Calendar className="w-4 h-4 text-accent" />
                    {story.date}
                  </div>
                  <h4 className="text-2xl font-headline font-bold leading-tight group-hover:text-accent transition-colors">
                    {story.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {story.desc}
                  </p>
                  <Button variant="link" className="p-0 h-auto font-black text-accent group/btn items-center flex gap-1">
                    Read Story <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
