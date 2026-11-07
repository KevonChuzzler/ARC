import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppWidgetProps {
  isModalOpen?: boolean;
}

export default function WhatsAppWidget({ isModalOpen = false }: WhatsAppWidgetProps) {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  // Official public WhatsApp link
  const whatsappUrl = "https://wa.me/27785269500?text=Hello%20African%20Restorative%20Centre,%20I%20would%20like%20to%20enquire%20about%20your%20programmes%20and%20gatherings.";

  return (
    <aside
      aria-label="WhatsApp Quick Connect"
      className={`fixed right-6 transition-all duration-300 flex flex-col items-end gap-3 group ${
        isModalOpen
          ? 'bottom-24 z-[70] translate-y-0'
          : 'bottom-6 z-40'
      }`}
    >
      {/* Tooltip Card - only shown when modal is not active */}
      {!isModalOpen && tooltipVisible && (
        <div className="max-w-xs p-4 rounded-2xl bg-white border border-[#2F3E36]/15 shadow-xl relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setTooltipVisible(false)}
            className="absolute top-2 right-2 text-[#2F3E36]/40 hover:text-[#2F3E36] p-1 rounded-full transition-colors cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-start gap-3">
            <img
              src="/assets/aistudio/ARC_LOGO_WITH_NO_SLOGAN_PNG_33d0f5a3.png"
              alt="ARC WhatsApp Avatar"
              className="w-10 h-10 rounded-full object-cover border border-[#2F3E36]/15 shrink-0"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[#2F3E36]">ARC WhatsApp</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-[#2F3E36]/80 leading-snug">
                Connect directly with ARC on WhatsApp for learning programmes and session enquiries.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Logo Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ARC on WhatsApp"
        className="p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-current shrink-0" />
      </a>
    </aside>
  );
}
