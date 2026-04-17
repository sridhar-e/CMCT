
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import HowWeDoIt from '@/components/sections/HowWeDoIt';
import Impact from '@/components/sections/Impact';
import Stories from '@/components/sections/Stories';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <HowWeDoIt />
        <Impact />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}
