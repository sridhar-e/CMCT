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
    <footer className="bg-[#404040] text-background pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Column 1: Brand & Socials */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-28 h-28 overflow-hidden rounded-lg bg-white p-2">
              <Image 
                src={logo?.imageUrl || '/cmct-logo.png'} 
                alt={logo?.description || 'CMCT Logo'} 
                fill 
                className="object-contain"
                data-ai-hint={logo?.imageHint}
              />
            </div>
          </Link>
          <p className="text-muted-foreground leading-relaxed text-[16px] max-w-xs">
            Transforming lives through compassion and practical service since 1964. A globally recognized charitable trust, driven by purpose and committed to lasting impact.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-primary hover:text-foreground transition-all rounded-full flex items-center justify-center"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Know us better */}
        <div>
          <div className="mb-8">
            <h4 className="font-headline font-bold text-xl text-primary inline-block">Know us better</h4>
            <div className="h-0.5 w-12 bg-primary mt-1"></div>
          </div>
          <ul className="space-y-4 text-sm text-muted-foreground">
            {['Our history', 'See our financials', 'Contributions report', 'Bethany BMWG report', 'Meet our team'].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-primary transition-colors inline-block">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect & Get involved */}
        <div className="space-y-12">
          <div>
            <div className="mb-8">
              <h4 className="font-headline font-bold text-xl text-primary inline-block">Connect</h4>
              <div className="h-0.5 w-12 bg-primary mt-1"></div>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {['Contact us', 'Request a speaker', 'Shop and support', 'Visit our camp center', 'Sitemap'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors inline-block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h4 className="font-headline font-bold text-xl text-primary inline-block">Get involved</h4>
              <div className="h-0.5 w-12 bg-primary mt-1"></div>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors inline-block">Donate</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors inline-block">Sponsor a child</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Reach Us (Combined CMCT & Bethany) */}
        <div className="space-y-8">
          <div>
            <div className="mb-8">
              <h4 className="font-headline font-bold text-xl text-primary inline-block">Reach Us</h4>
              <div className="h-0.5 w-12 bg-primary mt-1"></div>
            </div>
            
            <div className="space-y-5 text-sm">
              <p className="font-bold text-lg text-white leading-tight uppercase tracking-tight">
                CHRISTIAN MISSIONS<br />CHARITABLE TRUST
              </p>
              
              <div className="flex gap-3 items-start text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  New No : 72 Old No : 59, Spur Tank Road,<br />
                  Chetpet, Chennai - 600031,<br />
                  Tamil Nadu, India.
                </span>
              </div>
              
              <div className="flex gap-3 items-center text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>044-69182300 / 044-69182340</span>
              </div>
              
              <div className="flex gap-3 items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="hover:text-primary transition-colors cursor-pointer">info@cmctindia.in</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="font-bold text-lg text-white mb-5 uppercase tracking-tight">Bethany Health Care Centre</p>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-center text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>044 69182355 / 9841277796</span>
              </div>
              <div className="flex gap-3 items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="hover:text-primary transition-colors cursor-pointer">cmctbethany@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Policies & Copyright */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
          <div className="text-center md:text-left space-y-1">
            <p className="font-medium">Copyright © 2026 - CMCT - All rights reserved. <span className="opacity-50 ml-2">Powered by WEZIGNS</span></p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
            {['Terms and Conditions', 'Privacy Policy', 'Refund Policy', 'Donation FAQ', 'Cookies Policy'].map((policy, i) => (
              <React.Fragment key={policy}>
                <Link href="#" className="hover:text-white transition-colors">
                  {policy}
                </Link>
                {i < 4 && <span className="opacity-30">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;