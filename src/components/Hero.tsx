import React from 'react';
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
            className="lg:col-span-7 space-y-6"
          >

            {/* Vision Line Subheading (No icons or pill frames) */}
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Ancient Future Reclaimed.
            </h2>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2F3E36] leading-[1.15] text-balance">
              Reclaiming African Knowledge. Restoring the Self. Building Flourishing Communities.
            </h1>

            {/* Suggested Introductory Copy */}
            <p className="text-lg sm:text-xl text-[#2F3E36]/85 font-normal leading-relaxed max-w-2xl">
              The African Restorative Centre explores and applies Africa’s indigenous knowledge systems to support self-knowledge, personal restoration and the development of flourishing individuals and communities. Through learning programmes, knowledge gatherings and personal guidance, ARC creates opportunities for people to reconnect with knowledge, identity and a deeper understanding of themselves and the world around them.
            </p>

            {/* Suggested Buttons (No icons) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Our Programmes
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#2F3E36] bg-[#F4EAE1] hover:bg-[#e8dad0] border border-[#2F3E36]/15 rounded-md transition-all hover:border-[#2F3E36]/30"
              >
                Contact ARC
              </a>
            </div>

            {/* Values Strip */}
            <div className="pt-6 border-t border-[#2F3E36]/10 flex flex-wrap items-center gap-4 text-xs text-[#2F3E36]/75 font-medium">
              <span>Excellence</span>
              <span aria-hidden="true">·</span>
              <span>Inclusivity</span>
              <span aria-hidden="true">·</span>
              <span>Innovation</span>
              <span aria-hidden="true">·</span>
              <span>Integrity</span>
              <span aria-hidden="true">·</span>
              <span>Community</span>
              <span aria-hidden="true">·</span>
              <span>Lifelong Learning</span>
            </div>

          </motion.div>

          {/* Right Column: Image Placeholder Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Placeholder Box */}
              <div className="w-full h-[400px] lg:h-[460px] rounded-2xl bg-[#F4EAE1] border border-[#2F3E36]/15 flex flex-col items-center justify-center gap-3 p-8 text-center shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#2F3E36]/70">
                  Image goes here
                </span>
                <span className="text-xs text-[#2F3E36]/50">
                  African Restorative Centre — Ancient Future Reclaimed
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
