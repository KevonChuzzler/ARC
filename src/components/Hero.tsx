import React from 'react';
import { ArrowRight, Mail, Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FBF9F5]"
    >
      {/* Soft warm sun background accent */}
      <div 
        aria-hidden="true" 
        className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#F3A83B]/10 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >

            {/* Brand Vision Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EAE1] border border-[#2F3E36]/10 text-xs font-semibold text-[#2F3E36] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C86452]" />
              <span>Ancient Future Reclaimed</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2F3E36] leading-[1.15] text-balance">
              Reclaiming African Knowledge. Restoring the Self. Building Flourishing Communities.
            </h1>

            {/* Paragraph 1 */}
            <p className="text-lg sm:text-xl text-[#2F3E36]/85 font-normal leading-relaxed max-w-2xl">
              African Restorative Centre (ARC) is dedicated to exploring and applying Africa's indigenous knowledge systems to support self-knowledge, personal growth and community development.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base text-[#2F3E36]/75 font-normal leading-relaxed max-w-2xl">
              Through learning programmes, African knowledge gatherings, coaching and counselling, ARC creates opportunities for people to reconnect with knowledge, identity and ways of understanding themselves and the world around them.
            </p>

            {/* Supporting line */}
            <div className="p-4 rounded-xl bg-[#F4EAE1]/70 border border-[#2F3E36]/10 text-sm text-[#2F3E36] font-medium flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#C86452] shrink-0" />
              <span>
                Discover learning experiences and guidance grounded in African knowledge and perspectives.
              </span>
            </div>

            {/* Primary website buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Our Programmes
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#2F3E36] bg-[#F4EAE1] hover:bg-[#e8dad0] border border-[#2F3E36]/15 rounded-md transition-all hover:border-[#2F3E36]/30"
              >
                <Mail className="w-4 h-4 text-[#C86452]" />
                Contact ARC
              </a>
            </div>

            {/* Brand Positioning Note */}
            <div className="pt-6 border-t border-[#2F3E36]/10 flex flex-wrap items-center gap-6 text-xs text-[#2F3E36]/70">
              <span className="font-semibold uppercase tracking-wider text-[#C86452]">Positioning:</span>
              <span>African Knowledge</span>
              <span aria-hidden="true">·</span>
              <span>Self-Understanding</span>
              <span aria-hidden="true">·</span>
              <span>Personal Restoration</span>
            </div>

          </motion.div>

          {/* Right Column: High-Res Image Banner Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Terracotta Frame */}
              <div className="absolute -inset-3 bg-[#F4EAE1] rounded-2xl border border-[#2F3E36]/10 transform rotate-1" />
              
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#2F3E36]/15 bg-white group">
                <img
                  src="/src/assets/images/hero_banner_1793799017332.jpg"
                  alt="African community gathering under acacia tree"
                  className="w-full h-[440px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Image Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E36]/85 via-transparent to-transparent opacity-90" />

                {/* Overlaid Logo & Caption */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#F3A83B] font-semibold block mb-1">
                      African Restorative Centre
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-snug">
                      Ancient Future Reclaimed
                    </h3>
                    <p className="text-xs text-white/80 mt-1">
                      Indigenous Knowledge · Mind Liberation · Community Flourishing
                    </p>
                  </div>

                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_09.37.16_9133e983.jpeg"
                    alt="ARC Logo Emblem"
                    className="w-12 h-12 rounded-full border-2 border-[#F3A83B] object-cover shrink-0 shadow-md"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
