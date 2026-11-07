import React from 'react';
import { BookOpen, Sparkles, HeartHandshake, Compass, ArrowRight, MessageSquare, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Programmes() {
  const featuredProgrammes = [
    {
      id: 'resetting-the-mind',
      title: 'Resetting the Mind',
      tag: 'Featured Learning Programme',
      icon: Sparkles,
      image: '/src/assets/images/programme_learning_1793799020035.jpg',
      lead: 'A learning programme focused on understanding and liberating the mind from intergenerational trauma systems associated with colonialism, capitalism, discrimination and evangelisation.',
      details: 'The programme explores the mind, the role of the will, human behaviour, the brain, ancient African ideas about behaviour, spiritual aspirations and the development of a new self.',
    },
    {
      id: 'god-and-the-human-mind',
      title: 'God and the Human Mind',
      tag: 'Featured Learning Programme',
      icon: BookOpen,
      image: '/src/assets/images/about_heritage_1793799018066.jpg',
      lead: 'A learning programme exploring the existence of God, the wholeness of creation and the relationship between the human mind and the wider universe.',
      details: 'It examines themes including the causality of God, mind and body, space, time and eternity, and the mechanics of human sense perception.',
    },
    {
      id: 'african-knowledge-gatherings',
      title: 'African Knowledge Gatherings / Sessions',
      tag: 'Community Shared Learning',
      icon: Compass,
      image: '/src/assets/images/hero_banner_1793799017332.jpg',
      lead: 'Gatherings that create space for people to explore African knowledge, engage in shared learning and reconnect with cultural understanding.',
      details: 'Through discussions, the use of drums and collective participation, these sessions welcome young people, young adults and community members interested in learning and sharing.',
    },
  ];

  const coachingServices = [
    {
      id: 'african-marriage-prep',
      title: 'African Marriage Preparation',
      subtitle: 'Guided Preparation Experience',
      desc: 'A guided learning and preparation experience for couples preparing for marriage. It explores relationships, shared values, communication, family responsibilities and the foundations of building a life together through an African perspective.',
      badge: 'Couples & Family Alignment',
    },
    {
      id: 'other-coaching-support',
      title: 'Other Coaching & Counselling Support',
      subtitle: 'Personal & Relationship Growth',
      desc: "ARC also welcomes enquiries from individuals seeking guidance and support with other personal growth and relationship growth matters. Contact the Centre to discuss your needs and find out what support is available.",
      badge: 'Individual Guidance',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Programmes & Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Rooted in African Perspectives & Transformative Learning
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/80 font-normal">
            Discover our featured learning programmes, cultural knowledge gatherings, and specialized coaching and counselling.
          </p>
        </div>

        {/* 1. FEATURED LEARNING PROGRAMMES (3 Grid Cards) */}
        <div className="space-y-6">
          <div className="border-b border-[#2F3E36]/10 pb-3 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#2F3E36]">
              Featured Learning Programmes & Gatherings
            </h3>
            <span className="text-xs uppercase tracking-wider text-[#C86452] font-semibold">
              Currently Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {featuredProgrammes.map((prog, index) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col justify-between rounded-2xl bg-white border border-[#2F3E36]/12 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-56 overflow-hidden bg-[#F4EAE1]">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />
                      
                      <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 text-[#C86452] backdrop-blur-md shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#F3A83B] block">
                          {prog.tag}
                        </span>
                        <h4 className="font-serif text-2xl font-bold text-white mt-0.5">
                          {prog.title}
                        </h4>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-4">
                      <p className="text-sm font-medium text-[#2F3E36] leading-relaxed">
                        {prog.lead}
                      </p>
                      <p className="text-xs text-[#2F3E36]/75 leading-relaxed font-normal pt-2 border-t border-[#2F3E36]/10">
                        {prog.details}
                      </p>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="p-6 pt-0">
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#2F3E36] bg-[#F4EAE1] hover:bg-[#C86452] hover:text-white rounded-lg transition-colors group/btn"
                    >
                      <span>Enquire About Programme</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. COACHING & COUNSELLING — Solving People's Problems the African Way */}
        <div className="p-8 lg:p-12 rounded-3xl bg-[#F4EAE1]/70 border border-[#2F3E36]/12 space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Coaching & Counselling
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2F3E36]">
              Solving People's Problems the African Way
            </h3>
            <p className="text-base text-[#2F3E36]/85 leading-relaxed">
              ARC offers coaching and counselling support informed by African knowledge, values and perspectives. Through these experiences, individuals and couples can explore personal development, relationships and life's different stages through an African perspective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {coachingServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-white border border-[#2F3E36]/10 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#C86452]">
                      {service.badge}
                    </span>
                    <HeartHandshake className="w-5 h-5 text-[#F3A83B]" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2F3E36]">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#2F3E36]/80 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C86452] hover:text-[#b05342] transition-colors"
                >
                  <span>Contact ARC to Discuss Needs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>

        {/* 3. OTHER LEARNING PROGRAMMES (Callout Strip) */}
        <div className="p-8 rounded-2xl bg-[#2F3E36] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F3A83B]">
              <PlusCircle className="w-4 h-4" />
              <span>Expanding Curriculum</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-white">
              Other Learning Programmes
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              ARC offers additional learning opportunities beyond the featured programmes. Interested in exploring more? Contact ARC to enquire about additional programmes, learning opportunities and participation. Additional programme names and short descriptions will be added as ARC supplies them.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#2F3E36] bg-[#F4EAE1] hover:bg-white rounded-lg transition-all shrink-0 font-medium"
          >
            <MessageSquare className="w-4 h-4 text-[#C86452]" />
            <span>Enquire with ARC</span>
          </a>
        </div>

      </div>
    </motion.section>
  );
}
