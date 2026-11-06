import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2F3E36] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_09.37.16_9133e983.jpeg"
                alt="ARC Logo"
                className="w-12 h-12 rounded-full border border-white/20 object-cover"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  African Restoration Centre
                </h3>
                <p className="text-xs tracking-widest uppercase text-[#F3A83B] font-semibold">
                  People · Roots · Restoration
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-normal">
              Dedicated to cultural preservation, holistic learning, and relational restoration for families and communities across Africa and the global diaspora.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F3A83B]">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-white/80 font-medium">
              <li>
                <a href="#about" className="hover:text-[#C86452] transition-colors">
                  About ARC
                </a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-[#C86452] transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#C86452] transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C86452] transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:justify-end">
            <a
              href="#"
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#C86452] text-xs font-semibold uppercase tracking-wider text-white transition-all border border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Unboxed Metadata */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} African Restoration Centre. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Heritage Education</span>
            <span aria-hidden="true">·</span>
            <span>Family Restoration</span>
            <span aria-hidden="true">·</span>
            <span>Community Capacity</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
