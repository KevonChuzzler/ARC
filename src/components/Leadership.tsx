import React from 'react';
import { UserCheck, ShieldCheck, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Leadership() {
  const profilePlaceholders = [
    {
      slot: 'Executive Leadership',
      role: 'Director & Indigenous Knowledge Scholar',
      email: 'leadership@AfricanRestorative.co.za',
    },
    {
      slot: 'Learning & Mind Development',
      role: 'Lead Facilitator — Resetting the Mind',
      email: 'programmes@AfricanRestorative.co.za',
    },
    {
      slot: 'Coaching & Family Restoration',
      role: 'Head of African Marriage & Family Guidance',
      email: 'counselling@AfricanRestorative.co.za',
    },
  ];

  return (
    <motion.section 
      id="leadership" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#F4EAE1]/40 border-t border-[#2F3E36]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Meet the People Behind ARC
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/85 font-normal leading-relaxed">
            The section will introduce ARC's leadership and the people contributing to its vision and work.
          </p>
        </div>

        {/* Client Protocol Notice Box */}
        <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#2F3E36]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#F4EAE1] text-[#C86452] shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2F3E36]">
                Awaiting Leadership CVs / Resumes and Photographs
              </h3>
              <p className="text-xs text-[#2F3E36]/75 mt-0.5 leading-relaxed">
                All biographies and photographs will be sent to the respective individuals for approval before publication.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#2F3E36]/10 text-[11px] font-semibold text-[#2F3E36] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C86452]" />
            <span>Individual ARC Approval Pending</span>
          </div>
        </div>

        {/* 3 Profile Specification Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {profilePlaceholders.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-white border border-[#2F3E36]/10 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                
                {/* Approved Photograph Placeholder */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#F4EAE1] text-[#C86452] flex items-center justify-center font-serif text-xl font-bold border border-[#2F3E36]/10 shrink-0">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#2F3E36]">
                      {p.slot}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C86452] mt-0.5">
                      {p.role}
                    </p>
                  </div>
                </div>

                {/* Profile Standards Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#2F3E36]/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60">
                    Each profile will include:
                  </p>
                  <ul className="text-xs text-[#2F3E36]/80 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C86452]" />
                      <span>Name and official position</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C86452]" />
                      <span>A professionally written biography</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C86452]" />
                      <span>Relevant experience, qualifications & contributions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C86452]" />
                      <span>An approved photograph</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C86452]" />
                      <span>Individual official ARC email contact</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Official Contact Footer */}
              <div className="pt-4 border-t border-[#2F3E36]/10 flex items-center justify-between text-xs text-[#2F3E36]/70">
                <div className="flex items-center gap-1.5 text-xs text-[#2F3E36]/80">
                  <Mail className="w-3.5 h-3.5 text-[#C86452]" />
                  <span className="font-medium">{p.email}</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#F3A83B]" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
