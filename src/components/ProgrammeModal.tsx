import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProgrammeData {
  title: string;
  description: string;
  topics?: string[];
  type: 'featured' | 'additional';
}

interface ProgrammeModalProps {
  programme: ProgrammeData | null;
  onClose: () => void;
}

export default function ProgrammeModal({ programme, onClose }: ProgrammeModalProps) {
  if (!programme) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2F3E36]/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#2F3E36]/15 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-[#2F3E36]/10 bg-[#F4EAE1]/60 flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block mb-1">
                {programme.type === 'featured' ? 'Featured Programme Details' : 'Programme Overview'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2F3E36]">
                {programme.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#2F3E36]/60 hover:text-[#2F3E36] hover:bg-white rounded-full transition-colors font-bold text-lg leading-none shrink-0"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-[#2F3E36]">
            
            {/* Overview Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C86452]">
                Overview & Focus
              </h4>
              <p className="text-base text-[#2F3E36]/85 leading-relaxed font-normal">
                {programme.description}
              </p>
            </div>

            {/* Topics List (If Featured Programme) */}
            {programme.topics && programme.topics.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[#2F3E36]/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C86452]">
                  Topics & Key Themes Covered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {programme.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FBF9F5] border border-[#2F3E36]/10 text-xs font-medium text-[#2F3E36]"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-[#2F3E36]/10 bg-[#FBF9F5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#2F3E36]/70">
              Interested in participating in this programme?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2F3E36] bg-white border border-[#2F3E36]/20 rounded-lg hover:bg-[#F4EAE1] transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-lg transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
