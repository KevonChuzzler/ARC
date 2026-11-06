import React from 'react';
import { BookOpen, HeartHandshake, Laptop, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Programmes() {
  const services = [
    {
      id: 'learning-sessions',
      title: 'Learning Sessions',
      subtitle: 'Cultural & Academic Enrichment',
      icon: BookOpen,
      image: '/src/assets/images/programme_learning_1793799020035.jpg',
      description:
        'Structured community workshops and educational seminars exploring African history, leadership development, cultural literature, and practical life skills.',
      highlights: [
        'Weekly community discussion circles',
        'Youth & adult literacy workshops',
        'Heritage and history seminars',
      ],
    },
    {
      id: 'marriage-preparation',
      title: 'Marriage Preparation',
      subtitle: 'Relational & Family Foundations',
      icon: HeartHandshake,
      image: '/src/assets/images/programme_marriage_1793799018012.jpg',
      description:
        'Comprehensive pre-marital counseling and family alignment programs grounded in African relational wisdom, effective communication, and long-term partnership values.',
      highlights: [
        'Pre-marital counseling sessions',
        'Couples relationship alignment',
        'Family communication frameworks',
      ],
    },
    {
      id: 'online-activities',
      title: 'Online Activities',
      subtitle: 'Digital Community & Virtual Learning',
      icon: Laptop,
      image: '/src/assets/images/programme_online_1793799032424.jpg',
      description:
        'Interactive online lectures, virtual mentorship circles, and digital resources enabling members of the diaspora and broader community to engage anywhere.',
      highlights: [
        'Live interactive virtual workshops',
        'Digital repository of cultural lectures',
        'Global community mentorship',
      ],
    },
  ];

  return (
    <motion.section 
      id="programmes" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FBF9F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Programmes & Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Empowering Individuals & Families Across Generations
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/80 font-normal">
            Explore our core service offerings tailored for personal growth, relational strength, and cultural learning.
          </p>
        </div>

        {/* 3 Identically Sized CSS Grid Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#2F3E36]/12 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Image Container with Hover Zoom */}
                  <div className="relative h-56 overflow-hidden bg-[#F4EAE1]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 text-[#C86452] backdrop-blur-md shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#F3A83B] block">
                        {service.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-[#2F3E36]/80 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="pt-2 border-t border-[#2F3E36]/10 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/70">
                        Key Features:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#2F3E36]/85">
                        {service.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C86452] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Link: Direct Smooth Scroll to Contact Section */}
                <div className="p-6 pt-0">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#2F3E36] bg-[#F4EAE1] hover:bg-[#C86452] hover:text-white rounded-lg transition-colors group/btn"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
