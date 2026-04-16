
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Gallery = () => {
  const galleryItems = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Visual Journey</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Snapshots of Hope</h3>
          <p className="text-muted-foreground text-lg">
            See the direct impact of your contributions through the faces and lives of our community.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-[2rem] group cursor-pointer shadow-lg break-inside-avoid"
            >
              <Image 
                src={item.imageUrl} 
                alt={item.description} 
                width={800} 
                height={800} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                data-ai-hint={item.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-white font-headline font-semibold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
