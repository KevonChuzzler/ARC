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

        {/* Who We Are & Vision / Mission Overview */}
        <div className="space-y-10">
          
          {/* Who We Are Card */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#2F3E36]/10 shadow-sm space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block">
              Core Identity
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F3E36]">
              Who We Are
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-[#2F3E36]/85 font-normal leading-relaxed max-w-4xl">
              The African Restorative Centre is a learning and development initiative grounded in African indigenous knowledge and self-knowledge. The Centre seeks to create opportunities for individuals and communities to explore African knowledge systems, deepen their understanding of self and contribute to more flourishing ways of living.
            </p>
          </div>

          {/* Vision & Mission Two-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#2F3E36]/10 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block">
                  Our Vision
                </span>
                <h4 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F3E36]">
                  Ancient Future Reclaimed.
                </h4>
              </div>
              <p className="text-sm text-[#2F3E36]/75 leading-relaxed pt-2">
                Reconnecting with foundational African thought systems to forge empowered pathways for the future.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#2F3E36]/10 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block">
                  Our Mission
                </span>
                <p className="text-sm sm:text-base text-[#2F3E36]/85 leading-relaxed font-normal">
                  To provide accessible, high-quality learning experiences grounded in African indigenous knowledge and self-knowledge, supporting personal restoration, critical thinking, creativity and the development of flourishing individuals and communities.
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C86452] pt-2">
                Accessible · Restorative · Life-Affirming
              </p>
            </div>

          </div>
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
