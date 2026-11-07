import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgrammeModal, { ProgrammeData } from './ProgrammeModal';

export default function Programmes() {
  const [selectedProgramme, setSelectedProgramme] = useState<ProgrammeData | null>(null);

  const featuredProgrammes: ProgrammeData[] = [
    {
      title: 'Resetting the Mind',
      description:
        'This programme explores how to liberate the mind from intergenerational trauma systems associated with colonialism, capitalism, discrimination and evangelisation.',
      type: 'featured',
      topics: [
        'What is the Mind?',
        'What is the Will and its Role?',
        'Why do people engage in Negative Behaviour?',
        'Interactions of the Brain',
        'Ideas on Behaviour in Ancient Africa',
        'Living in Darkness',
        'Aspirations of the Spirit',
        'Birthing of the New Self',
      ],
    },
    {
      title: 'God and the Human Mind',
      description:
        'This programme aims to reset and empower people’s minds on the existence of God and the whole of Creation.',
      type: 'featured',
      topics: [
        'The Causality of God',
        'The Wholeness of Creation',
        'Mind and Body',
        'Space, Time and Eternity',
        'The Mechanics of Sense Perception',
        'The Dependency of Visual Perception',
      ],
    },
    {
      title: 'The South African Townships: A Place of Non-Beings',
      description:
        'This programme examines the township experience and the systems and influences that have shaped township life.',
      type: 'featured',
      topics: [
        'Origins and Purpose of the Township',
        'The Township Education System',
        'The Township Economy',
        'The Cultivation of Self-Hate',
        'The Township and Religion',
        'Sound (Music) as Sonic Weapon',
      ],
    },
  ];

  const additionalProgrammes: ProgrammeData[] = [
    {
      title: 'Knowing the Neter and Neterets (god & goddesses) of Kemet',
      description:
        'Participants gain knowledge of the interconnectedness, interrelatedness and interdependence of all created things and the elements of creation.',
      type: 'additional',
    },
    {
      title: 'The African Tree of Life',
      description:
        'This programme develops knowledge and understanding of the spiritual world and the different kinds and types of spirits at play in life, helping participants navigate their lives while balancing the natural spirits in the universe.',
      type: 'additional',
    },
    {
      title: 'African Cosmologies',
      description:
        'Explores ancient African cosmologies and worldviews as natural blueprints for personal and collective awakening, awareness and transformation.',
      type: 'additional',
    },
    {
      title: 'African Sciences of Time',
      description:
        'Explores the months and seasons of the African year as seen and practised by the ancients according to calendars and astronomy.',
      type: 'additional',
    },
    {
      title: 'Conscious Breathing',
      description:
        'Explores how breathing works and how poor breathing can negatively affect one’s life.',
      type: 'additional',
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
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Learning Programmes
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Featured & Additional Learning Curriculum
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/80 font-normal pt-1">
            Grounding mind liberation and cultural awakening in rigorous, ageless African indigenous knowledge systems. Tap any programme to view details.
          </p>
        </div>

        {/* 1. THREE FEATURED PROGRAMMES (No Image Containers) */}
        <div className="space-y-6">
          <div className="border-b border-[#2F3E36]/10 pb-3 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#2F3E36]">
              Featured Learning Programmes
            </h3>
            <span className="text-xs text-[#2F3E36]/60 font-medium">
              Click any programme to view full details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {featuredProgrammes.map((prog, index) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProgramme(prog)}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#2F3E36]/12 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer p-8 space-y-6"
              >
                {/* Title & Short Description */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block">
                    Featured Programme
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#2F3E36] group-hover:text-[#C86452] transition-colors leading-snug">
                    {prog.title}
                  </h4>
                  <p className="text-sm font-normal text-[#2F3E36]/80 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                {/* Card Tap Link */}
                <div className="pt-4 border-t border-[#2F3E36]/10">
                  <div className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#2F3E36] bg-[#F4EAE1] group-hover:bg-[#C86452] group-hover:text-white rounded-lg transition-colors text-center">
                    Click to View Programme Details
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. ADDITIONAL PROGRAMMES SECTION */}
        <div className="pt-8 border-t border-[#2F3E36]/15 space-y-8">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
              Expanded Curriculum
            </h3>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#2F3E36]">
              Additional Programmes
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {additionalProgrammes.map((addProg, idx) => (
              <motion.div
                key={addProg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProgramme(addProg)}
                className="p-6 rounded-2xl bg-white border border-[#2F3E36]/10 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#C86452]/40 transition-colors cursor-pointer group"
              >
                <div className="space-y-2">
                  <h4 className="font-serif text-xl font-bold text-[#2F3E36] group-hover:text-[#C86452] transition-colors">
                    {addProg.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2F3E36]/80 leading-relaxed font-normal">
                    {addProg.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2F3E36]/10 text-xs font-semibold uppercase tracking-wider text-[#C86452]">
                  Click to View Details
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Programme Modal Dialog */}
      <ProgrammeModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
      />
    </motion.section>
  );
}
