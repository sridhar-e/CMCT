
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#mission' },
    { name: 'Stories of Hope', href: '#stories' },
    { name: 'Our Campaigns', href: '#impact' },
    { name: 'Contact Us', href: '#footer' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-black/5' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center group relative z-10 mt-[-26px]">
          <div className="relative w-[160px] h-[160px] group-hover:scale-105 transition-transform duration-500 overflow-hidden">
            <Image 
              src={logo?.imageUrl || '/cmct-logo.png'} 
              alt={logo?.description || 'CMCT Logo'} 
              fill 
              className="object-contain"
              priority
              data-ai-hint={logo?.imageHint}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 mt-[-75px]">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-bold text-foreground/80 hover:text-accent transition-colors text-[13px] uppercase tracking-[0.15em]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button className="rounded-full px-8 h-12 font-bold shadow-xl hover:scale-105 transition-all bg-accent text-foreground hover:bg-accent/90 border-none">
            Donate
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="lg:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b animate-fade-in p-10 shadow-2xl flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold text-2xl text-foreground/80 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="rounded-full w-full py-8 text-xl font-bold shadow-xl bg-accent text-foreground mt-4">
            Donate Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
