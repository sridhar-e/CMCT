
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Impact from '@/components/sections/Impact';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Impact />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
