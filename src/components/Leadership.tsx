import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CoDirector {
  id: string;
  name: string;
  role: string;
  email: string;
  image?: string;
  firstParagraph: string;
  remainingParagraphs: string[];
}

export default function Leadership() {
  const [expandedProfiles, setExpandedProfiles] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedProfiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const leaders: CoDirector[] = [
    {
      id: 'senb',
      name: 'Norman Mongalo Raphahlela (also known as Senb)',
      role: 'Co-Director, African Restorative Centre',
      email: 'senb@AfricanRestorative.co.za',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_20.36.14__1__b27a6397.jpeg',
      firstParagraph:
        'Norman Mongalo Raphahlela, also known as Senb, is an experienced minister, educator, theological scholar and African indigenous knowledge practitioner. He has served for 38 years as a Supernumerary Methodist Minister and has held a range of leadership, teaching and chaplaincy roles.',
      remainingParagraphs: [
        'Born and raised in Alexandra Township, he obtained his first theological qualification from the Federal Theological Seminary of Southern Africa in Pietermaritzburg and pursued further studies at the University of Pretoria and the University of South Africa (UNISA). His current UNISA studies in the Department of Old Testament and Ancient Studies explore the reading of Exodus 20 in African Indigenous Knowledge Systems through the African principle of Ma’at.',
        'His ministry journey includes serving as Superintendent of several Methodist circuits, Director of the Education for Ministry and Mission Unit at the Methodist Connexional Office, Senior Lecturer and Dean of Chapel at Seth Mokitimi Methodist Seminary, and District Vice Chair in the former Kimberly Namibia Bloemfontein District, where he initiated the renaming to Mokala-Montle District.',
        'In police chaplaincy, he served as General Secretary of the African Police Chaplaincy Association (APCA), Deputy Chair of the Human Rights and Code of Conduct Programme of SARPCCO, and as an APCA delegate to the World Police Chaplains Conference. His studies at the Amen-Ra Institute include African Indigenous Sciences of Consciousness, African Ontology, Cosmology, Axiology, Epistemology, Teleology and Taxonomy.',
        'He is the Founding Director of the Know Thyself Institute, whose vision is “Reclaiming the Ancient Future”, and currently serves as Co-Director of the African Restorative Centre.',
      ],
    },
    {
      id: 'hlaka',
      name: 'Reverend Maphampha Rudolph Hlaka',
      role: 'Co-Director, African Restorative Centre',
      email: 'hlaka@AfricanRestorative.co.za',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-07_at_15.45.44__2__682fcbb0.jpeg',
      firstParagraph:
        'Reverend Maphampha Rudolph Hlaka is an educator, ordained minister, marriage officer and marriage coach with more than 24 years of experience in ministry, pastoral leadership and supporting individuals and families.',
      remainingParagraphs: [
        'He holds a Bachelor of Theology degree and a Higher Education Diploma from the University of Limpopo. He currently works as a teacher at Kagiso Secondary School, bringing his experience in education and personal development into his professional and community work.',
        'Before his current teaching role, Reverend Hlaka served the Department of Correctional Services for 15 years as a Spiritual Care Coordinator, providing spiritual guidance and support within the correctional environment.',
        'His ministry and leadership journey spans more than two decades. He has spent 14 years in church leadership, serving in pastoral roles, leading congregations and contributing to church administration. His leadership experience also includes serving as Chairperson of the Circuit.',
        'As a marriage officer and marriage coach, he brings additional experience in marriage preparation, relationship guidance and supporting individuals and couples.',
        'As Co-Director of the African Restorative Centre, Reverend Hlaka contributes his experience in education, ministry, spiritual care, pastoral leadership and relationship development to the Centre’s work and its vision of building flourishing individuals and communities.',
      ],
    },
  ];

  return (
    <motion.section 
      id="leadership" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-[#2F3E36]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Leadership
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Meet the People Behind ARC
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/85 font-normal leading-relaxed pt-1">
            Introducing ARC’s Co-Directors contributing to its vision of building flourishing individuals and communities. Click to expand full biographies.
          </p>
        </div>

        {/* 2 Equal Co-Director Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {leaders.map((leader, index) => {
            const isExpanded = !!expandedProfiles[leader.id];

            return (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 lg:p-10 rounded-3xl bg-white border border-[#2F3E36]/12 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  
                  {/* Photo Container */}
                  <div className="w-full h-64 sm:h-72 rounded-2xl bg-[#F4EAE1] border border-[#2F3E36]/15 overflow-hidden shadow-xs flex items-center justify-center">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-[center_15%]"
                      />
                    ) : (
                      <span className="text-sm font-serif font-bold text-[#2F3E36]/40 uppercase tracking-widest">
                        {leader.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Profile Header */}
                  <div className="space-y-2 pb-4 border-b border-[#2F3E36]/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C86452]">
                      {leader.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2F3E36] leading-tight">
                      {leader.name}
                    </h3>
                    
                    {/* Clickable Email */}
                    <a
                      href={`mailto:${leader.email}`}
                      className="block text-xs font-semibold text-[#2F3E36] hover:text-[#C86452] transition-colors pt-1"
                    >
                      {leader.email}
                    </a>
                  </div>

                  {/* 1st Paragraph Biography */}
                  <div className="space-y-4 text-xs sm:text-sm text-[#2F3E36]/85 leading-relaxed font-normal">
                    <p>{leader.firstParagraph}</p>

                    {/* Expanded Paragraphs */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="space-y-4 pt-2 overflow-hidden"
                        >
                          {leader.remainingParagraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Read Full Biography Toggle Button */}
                <div className="pt-4 border-t border-[#2F3E36]/10 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(leader.id)}
                    className="px-4 py-2.5 rounded-lg bg-[#F4EAE1] hover:bg-[#C86452] text-[#2F3E36] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    {isExpanded ? 'Collapse Biography' : 'Read Full Biography'}
                  </button>

                  <a
                    href={`mailto:${leader.email}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#C86452] hover:underline"
                  >
                    Email Co-Director
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
