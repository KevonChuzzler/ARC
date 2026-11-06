import React from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FBF9F5]">
      {/* Soft warm sun background accent */}
      <div 
        aria-hidden="true" 
        className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#F3A83B]/10 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4EAE1] border border-[#2F3E36]/10 text-xs font-semibold text-[#2F3E36] tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5 text-[#C86452]" />
              <span>People · Roots · Restoration</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2F3E36] leading-[1.15] text-balance">
              Reconnecting Communities with African Heritage & Learning
            </h1>

            {/* 1-2 Sentence Descriptive Hook */}
            <p className="text-lg sm:text-xl text-[#2F3E36]/80 font-normal leading-relaxed max-w-2xl">
              African Restoration Centre is dedicated to revitalising cultural identity, empowering families, and building resilient community networks grounded in African wisdom and heritage.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Our Programmes
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#2F3E36] bg-[#F4EAE1] hover:bg-[#e8dad0] border border-[#2F3E36]/15 rounded-md transition-all hover:border-[#2F3E36]/30"
              >
                <BookOpen className="w-4 h-4 text-[#C86452]" />
                Our Story & Mission
              </a>
            </div>

            {/* Quick Stats / Key Points */}
            <div className="pt-8 border-t border-[#2F3E36]/10 grid grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#2F3E36] tabular-nums">03</p>
                <p className="text-xs text-[#2F3E36]/70 uppercase tracking-wider mt-1 font-medium">Core Pillars</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#C86452] tabular-nums">100%</p>
                <p className="text-xs text-[#2F3E36]/70 uppercase tracking-wider mt-1 font-medium">Community Focused</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#F3A83B] tabular-nums">Weekly</p>
                <p className="text-xs text-[#2F3E36]/70 uppercase tracking-wider mt-1 font-medium">Learning Sessions</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Image Banner Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Terracotta Frame */}
              <div className="absolute -inset-3 bg-[#F4EAE1] rounded-2xl border border-[#2F3E36]/10 transform rotate-1" />
              
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#2F3E36]/15 bg-white group">
                <img
                  src="/src/assets/images/hero_banner_1793799017332.jpg"
                  alt="African community gathering under acacia tree"
                  className="w-full h-[420px] lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Image Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E36]/80 via-transparent to-transparent opacity-90" />

                {/* Overlaid Logo & Caption */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#F3A83B] font-semibold block mb-1">
                      Restoring Heritage
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-snug">
                      Connecting Generations Through Learning
                    </h3>
                  </div>

                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_09.37.16_9133e983.jpeg"
                    alt="ARC Badge"
                    className="w-12 h-12 rounded-full border-2 border-[#F3A83B] object-cover shrink-0 shadow-md"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
