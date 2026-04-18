
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Footer = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/cmctindia.org" },
    { icon: Twitter, href: "https://x.com/cmctindia_org" },
    { icon: Instagram, href: "https://www.instagram.com/cmctindia/" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCSkgoQX123-7X-_UMyxeHaw" },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 overflow-hidden rounded-lg">
              <Image 
                src={logo?.imageUrl || '/cmct-logo.png'} 
                alt={logo?.description || 'CMCT Logo'} 
                fill 
                className="object-contain"
                data-ai-hint={logo?.imageHint}
              />
            </div>
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            Transforming lives through compassion and practical service since 1964. A globally recognized charitable trust.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-primary hover:text-foreground transition-all rounded-full flex items-center justify-center"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold text-xl mb-8">Quick Links</h4>
          <ul className="space-y-4">
            {['About Us', 'Our Programs', 'Photo Gallery', 'How to Help', 'Privacy Policy'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-xl mb-8">Programs</h4>
          <ul className="space-y-4">
            {['Child Education', 'Healthcare Aid', 'Vocational Training', 'Nutrition Relief', 'Women Empowerment'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-xl mb-8">Get In Touch</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-accent shrink-0" />
              <span className="text-muted-foreground">123 Mercy Lane, Mission Heights, IN 456789</span>
            </li>
            <li className="flex gap-4 items-center">
              <Phone className="w-6 h-6 text-accent shrink-0" />
              <span className="text-muted-foreground">+91 44 1234 5678</span>
            </li>
            <li className="flex gap-4 items-center">
              <Mail className="w-6 h-6 text-accent shrink-0" />
              <span className="text-muted-foreground">hello@cmctcompass.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <p>© 2024 CMCT Compass. All rights reserved.</p>
        <p>Made with ❤️ for the community.</p>
      </div>
    </footer>
  );
};

export default Footer;
