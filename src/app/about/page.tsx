
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import About from '@/components/sections/About';
import Impact from '@/components/sections/Impact';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <About />
        <Impact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
