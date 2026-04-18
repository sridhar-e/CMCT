
"use client";

import React from 'react';
import { Heart, Star, ClipboardCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const goals = [
    {
      title: "We are Christ-centred",
      desc: "As an organization, we encourage staff to emulate Christ in selfless service. We reach out to all people with love and compassion, irrespective of their caste, creed, or religious preferences, with no strings attached.",
      icon: <Heart className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    },
    {
      title: "We pursue excellence",
      desc: "We uphold high standards of integrity and excellence in our professional lives. We encourage staff to keep abreast with industry-recognized best practices, so we can serve beneficiaries in the best possible way.",
      icon: <Star className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    },
    {
      title: "We are accountable",
      desc: "We seek to minimize our administrative overheads and ensure that every project gets adequate financial support. Our financial transactions are regularly audited and available for review.",
      icon: <ClipboardCheck className="w-8 h-8 text-accent" />,
      color: "bg-primary/10"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Our Story Header Section */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-24 items-start animate-fade-in">
          {/* Column 1: Headline */}
          <div className="space-y-6">
            <div className="inline-block bg-[#FFF9E6] text-[#D4AF37] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-accent/10">
              Our Story
            </div>
            <h3 className="text-5xl md:text-6xl font-headline font-black text-foreground leading-[1.1] tracking-tight">
              A movement <br />
              <span className="text-accent italic font-serif lowercase">born</span> in 1964.
            </h3>
            <div className="space-y-1">
              <p className="text-accent font-bold text-[10px] tracking-[0.2em] uppercase leading-tight">
                Registered under the Tamil Nadu
              </p>
              <p className="text-accent font-bold text-[10px] tracking-[0.2em] uppercase leading-tight">
                Societies Act
              </p>
            </div>
          </div>

          {/* Column 2: History & Vision */}
          <div className="space-y-8">
            <div className="relative">
              <span className="text-[80px] font-headline font-black text-accent float-left mr-4 mt-[-8px] leading-[1]">C</span>
              <p className="text-muted-foreground text-[16px] font-medium leading-relaxed">
                hristian Missions Charitable Trust (CMCT) was founded in 1964 by Dr. Colleen Redit with the vision of helping vulnerable young women become financially independent and self-reliant.
              </p>
            </div>
            <p className="text-muted-foreground text-[16px] font-medium leading-relaxed">
              Over the years, it has expanded into a full-fledged charitable organization that impacts thousands of lives. Our initiatives closely align with seven of the eight Millennium Development Goals.
            </p>
          </div>

          {/* Column 3: Impact & Funding */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-[16px] font-medium leading-relaxed">
              Almost every initiative from CMCT includes a training and education component. We strongly believe that by equipping the vulnerable with new skills, we empower them to lift themselves out of poverty and sustain their independence. We serve beneficiaries on a needs-basis irrespective of their caste, creed, or religious beliefs.
            </p>
            <p className="text-muted-foreground text-[16px] font-medium leading-relaxed">
              CMCT does not receive government funding. Our main source of funding is the generous contributions of individual donors like you. We are registered as a society under the Tamil Nadu Societies Act.
            </p>
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <Card key={idx} className="border-none shadow-md bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-10 space-y-6">
                <div className={`${goal.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  {goal.icon}
                </div>
                <h4 className="text-2xl font-headline font-bold leading-tight">{goal.title}</h4>
                <p className="text-muted-foreground leading-relaxed font-medium text-[15px]">
                  {goal.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
