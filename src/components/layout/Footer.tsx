
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
        {/* Column 1: Brand & Socials */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16 overflow-hidden rounded-lg bg-white p-2">
              <Image 
                src={logo?.imageUrl || '/cmct-logo.png'} 
                alt={logo?.description || 'CMCT Logo'} 
                fill 
                className="object-contain"
                data-ai-hint={logo?.imageHint}
              />
            </div>
          </Link>
          <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
            Transforming lives through compassion and practical service since 1964. A globally recognized charitable trust.
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

        {/* Column 2: Reach Us (Primary Office) */}
        <div>
          <h4 className="font-headline font-bold text-lg mb-8 text-primary uppercase tracking-wider">Reach Us</h4>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="font-bold text-background leading-tight">CHRISTIAN MISSIONS CHARITABLE TRUST</p>
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>
                New No : 72 Old No : 59<br />
                Spur Tank Road, Chetpet,<br />
                Chennai - 600031,<br />
                Tamil Nadu, India.
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <div className="flex flex-col">
                <span>044-69182300</span>
                <span>044-69182340</span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span className="hover:text-primary transition-colors">info@cmctindia.in</span>
            </div>
          </div>
        </div>

        {/* Column 3: Bethany & Know Us Better */}
        <div className="space-y-10">
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-primary uppercase tracking-wider">Bethany Health Care</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <span>044 69182355</span>
                  <span>9841277796</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="hover:text-primary transition-colors">cmctbethany@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm mb-4 text-background uppercase">Know us better</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Our history', 'See our financials', 'Contributions report', 'Bethany BMWG report', 'Meet our team'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors inline-block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 4: Connect & Get Involved */}
        <div className="space-y-10">
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-primary uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Contact us', 'Request a speaker', 'Shop and support', 'Visit our camp center', 'Sitemap'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors inline-block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm mb-4 text-background uppercase">Get involved</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="text-primary font-bold hover:underline transition-all">Donate Now</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Sponsor a child</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Policies & Copyright */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {['Terms and Conditions', 'Privacy Policy', 'Refund Policy', 'Donation FAQ', 'Cookies Policy'].map((policy) => (
              <Link key={policy} href="#" className="hover:text-white transition-colors">
                {policy}
              </Link>
            ))}
          </div>
          <div className="text-center md:text-right space-y-1">
            <p>Copyright © 2026 - CMCT- All rights reserved.</p>
            <p className="text-[10px] opacity-50">Powered by WEZIGNS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
