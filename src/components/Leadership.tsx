import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Leadership() {
  const leaders = [
    {
      name: 'Dr. Sipho Khumalo',
      role: 'Executive Director & Cultural Scholar',
      icon: BookOpen,
      initials: 'SK',
      color: 'bg-[#C86452]',
      bio: 'Holds a Doctorate in African Cultural History with over 18 years of community development experience. Dr. Khumalo leads ARC’s strategic initiatives and heritage curriculum.',
      experience: '18+ Years Experience in Cultural Education',
    },
    {
      name: 'Thandiwe Ndebele',
      role: 'Head of Marriage & Family Restoration',
      icon: Heart,
      initials: 'TN',
      color: 'bg-[#2F3E36]',
      bio: 'A certified relational counselor and family mediator with a Master’s degree in Applied Psychology. Thandiwe specializes in pre-marital guidance and intergenerational communication.',
      experience: '14+ Years in Family Counseling',
    },
    {
      name: 'Mandla Dlamini',
      role: 'Director of Online & Community Outreach',
      icon: Award,
      initials: 'MD',
      color: 'bg-[#F3A83B]',
      bio: 'Pioneered digital community networks across Africa and the diaspora. Mandla holds qualifications in Educational Technology and oversees ARC’s global virtual programmes.',
      experience: '12+ Years in Educational Technology',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Leadership & Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Meet the People Behind ARC
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/80 font-normal">
            Our dedicated team brings decades of combined expertise in cultural research, relational counseling, and community development.
          </p>
        </div>

        {/* 3 Team Profile Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {leaders.map((leader, index) => {
            const Icon = leader.icon;
            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-2xl bg-white border border-[#2F3E36]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  
                  {/* Headshot Avatar Container */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-2xl ${leader.color} text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md border-2 border-white`}>
                        {leader.initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-[#FBF9F5] text-[#2F3E36] border border-[#2F3E36]/10 shadow-xs">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#2F3E36]">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#C86452] mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[#2F3E36]/85 leading-relaxed font-normal">
                    {leader.bio}
                  </p>

                </div>

                {/* Qualification Footer */}
                <div className="mt-6 pt-4 border-t border-[#2F3E36]/10 flex items-center justify-between text-xs text-[#2F3E36]/70">
                  <span className="font-medium">{leader.experience}</span>
                  <span className="w-2 h-2 rounded-full bg-[#F3A83B]" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
