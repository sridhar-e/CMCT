
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Utensils, GraduationCap, UserCheck, Stethoscope } from 'lucide-react';

const Counter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLHeadingElement>(null);
  
  // Parse numeric value and suffix (like + or ,)
  const numericValue = parseInt(value.replace(/[,+]/g, ''));
  const hasPlus = value.includes('+');
  const hasComma = value.includes(',');

  useEffect(() => {
    let observer: IntersectionObserver;
    let animationStarted = false;

    const startAnimation = () => {
      if (animationStarted) return;
      animationStarted = true;
      
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds animation

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smoother finish
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentCount = Math.floor(easeOutQuad(progress) * numericValue);
        
        setCount(currentCount);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer?.disconnect();
  }, [numericValue]);

  const formattedCount = hasComma 
    ? count.toLocaleString() 
    : count.toString();

  return (
    <h4 ref={countRef} className="text-2xl md:text-3xl font-headline font-black tracking-tight">
      {formattedCount}{hasPlus ? '+' : ''}
    </h4>
  );
};

const Impact = () => {
  const stats = [
    { label: "Meals served everyday", value: "2,000+", icon: <Utensils className="w-10 h-10" /> },
    { label: "Women empowered", value: "680+", icon: <UserCheck className="w-10 h-10" /> },
    { label: "Children educated", value: "2,700+", icon: <GraduationCap className="w-10 h-10" /> },
    { label: "Patients served", value: "300+", icon: <Stethoscope className="w-10 h-10" /> },
  ];

  return (
    <section className="py-24 yellow-gradient text-accent-foreground relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Side: Header Content */}
        <div className="lg:w-2/5 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-accent-foreground/70 font-black uppercase tracking-[0.2em] text-xs">Global Impact</h2>
            <h3 className="text-[43px] font-headline font-black text-accent-foreground leading-[1.1]">
              Our numbers <br />
              tell a story of <span className="italic">Hope.</span>
            </h3>
          </div>
          <p className="text-accent-foreground/80 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
            Every statistic represents a life changed and a future brightened through our collective efforts.
          </p>
        </div>

        {/* Right Side: Stats Grid/Row */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-accent-foreground/80">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <Counter value={stat.value} />
                <p className="font-bold text-accent-foreground/70 text-[10px] md:text-xs tracking-wide leading-tight px-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
