
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { 
      name: 'Our Work', 
      href: '/#mission',
      children: [
        { name: 'Education', href: '/#education' },
        { name: 'Healthcare', href: '/#healthcare' },
        { name: 'Community Development', href: '/#community' },
      ]
    },
    { name: 'Stories of Hope', href: '/#stories' },
    { name: 'Our Campaigns', href: '/#impact' },
    { name: 'Contact Us', href: '/#footer' },
  ];

  return (
    <nav
      className={cn(
        'absolute top-0 left-0 right-0 z-50 px-6 md:px-12 bg-transparent py-4'
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
              link.children ? (
                mounted ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="flex items-center gap-1 font-bold text-foreground/80 hover:text-accent transition-colors text-[13px] uppercase tracking-[0.15em] outline-none">
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 bg-white rounded-xl shadow-2xl border-none p-2">
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild className="rounded-lg">
                          <Link
                            href={child.href}
                            className="w-full font-semibold text-foreground/70 hover:text-accent cursor-pointer py-3"
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div key={link.name} className="flex items-center gap-1 font-bold text-foreground/80 text-[13px] uppercase tracking-[0.15em] opacity-50">
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                )
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-bold text-foreground/80 hover:text-accent transition-colors text-[13px] uppercase tracking-[0.15em]"
                >
                  {link.name}
                </Link>
              )
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
      {mounted && mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b animate-fade-in p-10 shadow-2xl flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            {navLinks.map((link) => (
              link.children ? (
                <AccordionItem key={link.name} value={link.name} className="border-none">
                  <AccordionTrigger className="font-bold text-2xl text-foreground/80 hover:text-accent py-2 hover:no-underline">
                    {link.name}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 pl-4 pt-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="font-semibold text-xl text-foreground/60 hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={link.name} className="py-2">
                  <Link
                    href={link.href}
                    className="font-bold text-2xl text-foreground/80 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              )
            ))}
          </Accordion>
          <Button className="rounded-full w-full py-8 text-xl font-bold shadow-xl bg-accent text-foreground mt-4">
            Donate Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
