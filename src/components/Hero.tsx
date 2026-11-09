import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden bg-[#163A30] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#2F3E36]/20"
    >
      {/* Subtle ambient light glow matching the artwork's golden moon */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#E6CA7E]/10 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: ARC Emblem, Headline, Description, Buttons, Underline */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7 z-10"
          >
            {/* Circular ARC Logo Badge with Slogan */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FBF9F5] p-2 flex items-center justify-center shadow-xl ring-2 ring-white/10 shrink-0">
              <img
                src="/assets/aistudio/ARC_LOGO_WITH_SLOGAN_PNG_b899204a.png"
                alt="African Restorative Centre Emblem - People, Roots, Restoration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Italic Golden Tagline */}
            <div className="space-y-2">
              <span className="font-serif italic text-base sm:text-lg text-[#E6CA7E] tracking-wide block">
                Ancient Future Reclaimed.
              </span>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.12] tracking-tight text-balance">
                Reclaiming African Knowledge. Restoring the Self. Building Flourishing Communities.
              </h1>
            </div>

            {/* Paragraph Subtitle */}
            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed max-w-xl">
              The African Restorative Centre explores and applies Africa&apos;s indigenous knowledge systems to support self-knowledge, personal growth and community development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 text-center"
              >
                Explore Our Programmes
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-white/40 hover:border-white rounded-lg transition-all active:scale-95 text-center"
              >
                Contact ARC
              </a>
            </div>

            {/* Terracotta Accent Line Underneath Buttons */}
            <div className="pt-2">
              <div className="w-20 h-1 bg-[#C86452] rounded-full" />
            </div>

          </motion.div>

          {/* Right Column: Hero Illustration Graphic from client design */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#163A30]">
              <img
                src="/assets/aistudio/hero_illustration_clean.png"
                alt="African Restorative Centre Gathering & Tree of Life Illustration"
                className="w-full h-auto max-h-[540px] object-cover object-bottom"
              />
              {/* Subtle edge blend overlay to seamlessly blend with the deep evergreen background */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#163A30] to-transparent hidden lg:block" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
