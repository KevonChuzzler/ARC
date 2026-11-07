import React from 'react';
import { motion } from 'framer-motion';

export default function OtherServices() {
  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#F4EAE1]/50 border-y border-[#2F3E36]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Other Services & Activities
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Gatherings, Coaching & Personal Guidance
          </h2>
        </div>

        {/* 1. AFRICAN KNOWLEDGE GATHERINGS */}
        <div className="p-8 lg:p-10 rounded-3xl bg-white border border-[#2F3E36]/12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Cultural Shared Learning
            </h4>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2F3E36]">
              African Knowledge Gatherings
            </h3>
            <p className="text-base text-[#2F3E36]/85 leading-relaxed font-normal">
              African Knowledge Gatherings are sessions that create space for people to engage with African knowledge, including gatherings that may incorporate drums and other cultural elements. Sessions typically run for approximately one to two hours and are open to youth, young adults, community members and anyone interested in learning.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#2F3E36]/75 font-medium">
              <span>Open to Youth & Community</span>
              <span>•</span>
              <span>1 to 2 Hours Duration</span>
              <span>•</span>
              <span>Cultural Elements & Drums</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-xl transition-all shadow-md shrink-0 w-full sm:w-auto text-center"
            >
              Enquire About Gatherings
            </a>
          </div>

        </div>

        {/* 2. COACHING & COUNSELLING — Solving People’s Problems the African Way */}
        <div className="space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Personal & Relational Guidance
            </h3>
            <h4 className="text-3xl sm:text-4xl font-serif font-bold text-[#2F3E36]">
              Coaching & Counselling
            </h4>
            <p className="text-xl font-serif font-bold text-[#C86452] pt-1">
              Solving People’s Problems the African Way
            </p>
            <p className="text-base text-[#2F3E36]/85 leading-relaxed">
              ARC offers guidance and support informed by African knowledge and approaches to personal and relationship growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Featured Service: African Marriage Preparation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#C86452]">
                  Featured Service
                </h5>
                <h4 className="font-serif text-2xl font-bold text-[#2F3E36]">
                  African Marriage Preparation
                </h4>
                <p className="text-sm sm:text-base text-[#2F3E36]/85 leading-relaxed">
                  Marriage preparation support for individuals and couples preparing for marriage.
                </p>
              </div>

              <div className="pt-4 border-t border-[#2F3E36]/10">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#C86452] hover:text-[#b05342] transition-colors"
                >
                  Enquire for Marriage Preparation
                </a>
              </div>
            </motion.div>

            {/* General Growth & Counselling Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#2F3E36]/70">
                  Personal & Relational Support
                </h5>
                <h4 className="font-serif text-2xl font-bold text-[#2F3E36]">
                  Personal & Relationship Growth
                </h4>
                <p className="text-sm sm:text-base text-[#2F3E36]/85 leading-relaxed">
                  ARC also welcomes enquiries from individuals seeking guidance and support with other personal growth and relationship growth matters. Contact the Centre to discuss your needs and find out what support is available.
                </p>
              </div>

              <div className="pt-4 border-t border-[#2F3E36]/10">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#C86452] hover:text-[#b05342] transition-colors"
                >
                  Contact Centre to Discuss Support
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}
