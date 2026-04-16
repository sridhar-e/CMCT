
"use client";

import React from 'react';
import { Heart, Home, GraduationCap, Gift } from 'lucide-react';

const Impact = () => {
  const stats = [
    { label: "Children Educated", value: "15,000+", icon: <GraduationCap className="w-8 h-8" /> },
    { label: "Meals Served", value: "2.5M+", icon: <Gift className="w-8 h-8" /> },
    { label: "Families Supported", value: "10,000+", icon: <Home className="w-8 h-8" /> },
    { label: "Lives Transformed", value: "50,000+", icon: <Heart className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 yellow-gradient text-accent-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-4xl md:text-5xl font-headline font-black tracking-tight">{stat.value}</h4>
                <p className="font-medium text-accent-foreground/80 uppercase text-sm tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
