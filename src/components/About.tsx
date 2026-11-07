import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2, Award, Users, HeartHandshake, BookOpen, Lightbulb, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const objectives = [
    {
      num: '01',
      text: 'To support the healing of minds from intergenerational trauma systems associated with colonialism, capitalism, discrimination and evangelisation.',
    },
    {
      num: '02',
      text: "To examine Africa's indigenous sciences of self-knowledge in response to challenges of identity and self-understanding.",
    },
    {
      num: '03',
      text: 'To create space for the emergence of a free, self-knowing, authentic, prosperous and self-actualised uMuntu/Motho.',
    },
    {
      num: '04',
      text: 'To facilitate the practical application of African indigenous knowledge systems towards the development of flourishing societies.',
    },
  ];

  const values = [
    { name: 'Excellence', desc: 'Highest standard in cultural research, teaching, and community stewardship.' },
    { name: 'Inclusivity', desc: 'Welcoming young people, adults, and families across all cultural walks.' },
    { name: 'Innovation', desc: 'Bridging timeless ancient wisdom with contemporary psychological understanding.' },
    { name: 'Integrity', desc: 'Authentic preservation, ethical engagement, and deep respect for traditions.' },
    { name: 'Community', desc: 'Collective participation, shared learning circles, and mutual empowerment.' },
    { name: 'Lifelong Learning', desc: 'Continuous inquiry, mind liberation, and holistic personal evolution.' },
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
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            About African Restorative Centre
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Who We Are
          </h2>
        </div>

        {/* Two Column Grid: Who We Are & Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Who We Are Narrative + Vision + Mission */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-lg text-[#2F3E36]/85 space-y-5 font-normal leading-relaxed">
              <p className="text-lg sm:text-xl font-medium text-[#2F3E36] leading-relaxed">
                African Restorative Centre (ARC) is an organisation committed to the exploration, preservation and practical application of Africa's ageless and timeless indigenous knowledge systems.
              </p>
              <p>
                ARC seeks to address challenges of identity and self-knowledge by creating opportunities for people to examine the mind, understand themselves and reconnect with African knowledge and perspectives.
              </p>
              <p>
                The Centre aims to support the emergence of a self-knowing, authentic, prosperous and self-actualised uMuntu/Motho, while contributing to the development of flourishing individuals and communities.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              
              {/* Vision */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#2F3E36]/10 shadow-sm space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C86452]">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2F3E36]">
                  Ancient Future Reclaimed.
                </h3>
              </div>

              {/* Mission */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#2F3E36]/10 shadow-sm space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C86452]">
                  <Compass className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-sm text-[#2F3E36]/85 leading-relaxed font-normal">
                  To provide accessible, high-quality learning experiences grounded in African indigenous knowledge and self-knowledge, supporting personal restoration, critical thinking, creativity and the development of flourishing individuals and communities.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Cultural Image & Identity Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-28 space-y-6">
              
              {/* Image Box */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#2F3E36]/15 bg-white">
                <img
                  src="/src/assets/images/about_heritage_1793799018066.jpg"
                  alt="African cultural heritage library and learning center"
                  className="w-full h-[380px] lg:h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E36]/85 via-transparent to-transparent opacity-85" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#F3A83B]">
                    uMuntu / Motho
                  </span>
                  <p className="font-serif text-xl font-bold">
                    "Supporting the emergence of a self-knowing, authentic, prosperous and self-actualised person."
                  </p>
                </div>
              </div>

              {/* Tagline Card */}
              <div className="p-6 rounded-xl bg-[#2F3E36] text-white shadow-md flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#F3A83B] font-semibold uppercase tracking-wider">
                    Official Positioning
                  </p>
                  <p className="font-serif text-lg font-bold mt-0.5">
                    Ancient Future Reclaimed
                  </p>
                </div>
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_09.37.17_4d6df73c.jpeg"
                  alt="ARC Logo Emblem"
                  className="w-12 h-12 rounded-full border border-white/20 object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>

        {/* Section: Our Purpose (Guided by 4 Central Objectives) */}
        <div className="pt-8 border-t border-[#2F3E36]/15 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Strategic Foundations
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2F3E36]">
              Our Purpose: Four Central Objectives
            </h3>
            <p className="text-sm text-[#2F3E36]/75">
              ARC's work is guided by four foundational objectives dedicated to healing, self-discovery, and flourishing societies:
            </p>
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
                  {obj.num}
                </span>
                <p className="text-sm sm:text-base text-[#2F3E36]/85 font-normal leading-relaxed">
                  {obj.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: Our Values */}
        <div className="pt-8 border-t border-[#2F3E36]/15 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2F3E36]">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((v, idx) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-xl bg-white border border-[#2F3E36]/10 text-center shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#F4EAE1] text-[#C86452] flex items-center justify-center mx-auto mb-3 font-serif font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#2F3E36] mb-1">
                    {v.name}
                  </h4>
                  <p className="text-xs text-[#2F3E36]/70 leading-snug">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
