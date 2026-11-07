import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#2F3E36]/15 shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-[#2F3E36]/10 bg-[#F4EAE1]/60 flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block mb-1">
                Legal & Compliance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2F3E36]">
                Cookie & Privacy Policy
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#2F3E36]/60 hover:text-[#2F3E36] hover:bg-white rounded-full transition-colors font-bold text-lg leading-none shrink-0 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-sm text-[#2F3E36]/85 leading-relaxed font-normal">
            
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#2F3E36]">
                1. Introduction
              </h4>
              <p>
                The African Restorative Centre (ARC) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your personal information and respecting your privacy in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#2F3E36]">
                2. Information We Collect
              </h4>
              <p>
                When you interact with our website (AfricanRestorative.co.za) or contact us via telephone, WhatsApp, or email, we may collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Personal identification details (e.g. name, email address, phone number).</li>
                <li>Programme inquiries and communication history.</li>
                <li>Technical data such as browser type, operating system, and anonymous usage patterns.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#2F3E36]">
                3. Cookie Policy
              </h4>
              <p>
                Our website uses essential and functional cookies to ensure proper operation, enhance performance, remember your cookie preferences, and provide an optimal browsing experience. We do not sell or trade your data to third-party advertising brokers.
              </p>
              <p className="text-xs text-[#2F3E36]/70">
                You can configure your browser to block or alert you about these cookies, though some features of the site may be impaired.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#2F3E36]">
                4. How We Use Your Information
              </h4>
              <p>
                Your information is used strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Respond to your inquiries regarding our learning programmes, gatherings, and coaching services.</li>
                <li>Facilitate participation in African marriage preparation and mentorship sessions.</li>
                <li>Improve our website&apos;s accessibility, content, and user experience.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#2F3E36]">
                5. Contact & Data Rights
              </h4>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data. For any questions or data requests, contact us at:
              </p>
              <div className="p-4 rounded-xl bg-[#F4EAE1]/80 text-xs space-y-1">
                <p><strong>Email:</strong> info@AfricanRestorative.co.za</p>
                <p><strong>Telephone / WhatsApp:</strong> 078 526 9500</p>
                <p><strong>Physical Address:</strong> 398 Tobias Street, Heritage Manor Estate, Krugersdorp, 1740</p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 border-t border-[#2F3E36]/10 bg-[#FBF9F5] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#2F3E36]/65">
              African Restorative Centre · POPIA Compliant
            </span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-lg transition-colors cursor-pointer text-center"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
