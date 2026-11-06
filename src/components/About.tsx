import React from 'react';
import { Users, Trees, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      title: 'People',
      icon: Users,
      description: 'Strengthening individual capacity, fostering authentic relationships, and building supportive family and community structures.',
    },
    {
      title: 'Roots',
      icon: Trees,
      description: 'Honouring indigenous wisdom, preserving cultural heritage, and grounding modern educational growth in historical identity.',
    },
    {
      title: 'Restoration',
      icon: RefreshCw,
      description: 'Facilitating relational healing, pre-marital alignment, and ongoing holistic development across generations.',
    },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            About ARC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Rooted in African Heritage, Dedicated to Community Restoration
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Purpose, History & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-lg text-[#2F3E36]/85 space-y-5 font-normal leading-relaxed">
              <p>
                The <strong>African Restoration Centre (ARC)</strong> was founded with a singular commitment: to provide spaces where African individuals, families, and communities can reconnect with their cultural heritage and access holistic learning.
              </p>
              <p>
                Over the years, ARC has grown from a grassroots educational initiative into a structured resource centre for relational guidance, cultural preservation, and continuous learning. We believe that true community progress begins when individuals rediscover their roots and build on strong foundational values.
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="pt-4 space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#2F3E36] flex items-center gap-2">
                Our Core Pillars
              </h3>

              <div className="space-y-4">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="p-5 rounded-xl bg-[#FBF9F5] border border-[#2F3E36]/10 shadow-sm flex items-start gap-4 hover:border-[#C86452]/40 transition-colors"
                    >
                      <div className="p-2.5 rounded-lg bg-[#F4EAE1] text-[#C86452] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#2F3E36] flex items-center gap-2">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-[#2F3E36]/80 mt-1 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Image & Decorative Frame */}
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
                  className="w-full h-[400px] lg:h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E36]/85 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#F3A83B]">
                    Cultural Preservation
                  </span>
                  <p className="font-serif text-xl font-bold mt-1">
                    "A people without knowledge of their past history, origin and culture is like a tree without roots."
                  </p>
                </div>
              </div>

              {/* Tagline Card */}
              <div className="p-6 rounded-xl bg-[#2F3E36] text-white shadow-md flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#F3A83B] font-semibold uppercase tracking-wider">
                    Our Foundation
                  </p>
                  <p className="font-serif text-lg font-bold mt-0.5">
                    People · Roots · Restoration
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
      </div>
    </motion.section>
  );
}
