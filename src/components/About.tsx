import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const objectives = [
    {
      num: '1',
      text: 'Heal people’s minds from intergenerational trauma systems brought by colonialism, capitalism, discrimination and evangelisation.',
    },
    {
      num: '2',
      text: 'Methodologically examine Africa’s ageless, timeless sciences of self-knowledge to address the crisis of identity and self-knowledge dented by intergenerational trauma systems.',
    },
    {
      num: '3',
      text: 'Create space and time for the re-emergence of a free uMuntu/Motho who is self-knowing, authentic, prosperous and self-actualised.',
    },
    {
      num: '4',
      text: 'Facilitate the practical application of Africa’s ageless, timeless indigenous knowledge systems for the development of flourishing societies.',
    },
  ];

  const values = [
    'Excellence',
    'Inclusivity',
    'Innovation',
    'Integrity',
    'Community',
    'Lifelong Learning',
  ];

  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#F4EAE1]/60 border-y border-[#2F3E36]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            About the Centre
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Grounded in African Indigenous Knowledge
          </h2>
        </div>

        {/* Two Column Grid: Who We Are & Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Who We Are + Vision + Mission */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#2F3E36]">
                Who We Are
              </h3>
              <p className="text-base sm:text-lg text-[#2F3E36]/85 font-normal leading-relaxed">
                The African Restorative Centre is a learning and development initiative grounded in African indigenous knowledge and self-knowledge. The Centre seeks to create opportunities for individuals and communities to explore African knowledge systems, deepen their understanding of self and contribute to more flourishing ways of living.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              
              {/* Vision */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#2F3E36]/10 shadow-sm space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C86452]">
                  Vision
                </h4>
                <p className="font-serif text-2xl font-bold text-[#2F3E36]">
                  Ancient Future Reclaimed.
                </p>
              </div>

              {/* Mission */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#2F3E36]/10 shadow-sm space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C86452]">
                  Mission
                </h4>
                <p className="text-xs sm:text-sm text-[#2F3E36]/85 leading-relaxed font-normal">
                  To provide accessible, high-quality learning experiences grounded in African indigenous knowledge and self-knowledge, supporting personal restoration, critical thinking, creativity and the development of flourishing individuals and communities.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-28 space-y-6">
              
              {/* Image Placeholder Container */}
              <div className="w-full h-[360px] lg:h-[400px] rounded-2xl bg-[#F4EAE1] border border-[#2F3E36]/15 flex flex-col items-center justify-center gap-3 p-8 text-center shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#2F3E36]/70">
                  Image goes here
                </span>
                <span className="text-xs text-[#2F3E36]/50">
                  African Restorative Centre — Learning & Development
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Section: Purpose and Objectives */}
        <div className="pt-8 border-t border-[#2F3E36]/15 space-y-8">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Strategic Foundations
            </h3>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#2F3E36]">
              Purpose and Objectives
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, idx) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-[#2F3E36]/10 shadow-sm hover:border-[#C86452]/40 transition-colors flex items-start gap-4"
              >
                <span className="font-serif text-2xl font-bold text-[#C86452] tabular-nums shrink-0">
                  {obj.num}.
                </span>
                <p className="text-sm sm:text-base text-[#2F3E36]/85 font-normal leading-relaxed">
                  {obj.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: Values */}
        <div className="pt-8 border-t border-[#2F3E36]/15 space-y-6">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Guiding Principles
            </h3>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#2F3E36]">
              Values
            </h4>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#2F3E36]/10 shadow-xs flex flex-wrap items-center justify-around gap-6 text-center">
            {values.map((v, idx) => (
              <div key={v} className="flex items-center gap-3">
                {idx > 0 && <span className="text-[#C86452] font-serif text-lg">•</span>}
                <span className="font-serif text-lg sm:text-xl font-bold text-[#2F3E36]">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
