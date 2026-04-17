
"use client";

import React from 'react';
import { Heart, Utensils, GraduationCap, Globe, Users, UserCheck, Stethoscope } from 'lucide-react';

const Impact = () => {
  const stats = [
    { label: "Donors' Countries", value: "25+", icon: <Globe className="w-8 h-8" /> },
    { label: "Children Supported", value: "5,400+", icon: <Users className="w-8 h-8" /> },
    { label: "Meals Served Daily", value: "2,000+", icon: <Utensils className="w-8 h-8" /> },
    { label: "Children Educated", value: "2,700+", icon: <GraduationCap className="w-8 h-8" /> },
    { label: "Women Empowered", value: "680+", icon: <UserCheck className="w-8 h-8" /> },
    { label: "Patients Served", value: "300+", icon: <Stethoscope className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 yellow-gradient text-accent-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-accent-foreground font-black uppercase tracking-widest text-sm">Global Impact</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-black text-accent-foreground leading-tight">
            Our numbers tell a story of <span className="italic">Hope.</span>
          </h3>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto font-medium">
            Our donors across 25+ countries support over 5400+ children, making a tangible difference in every life we touch.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30 hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl md:text-4xl font-headline font-black tracking-tight">{stat.value}</h4>
                <p className="font-bold text-accent-foreground/70 uppercase text-[10px] md:text-xs tracking-widest leading-tight">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
