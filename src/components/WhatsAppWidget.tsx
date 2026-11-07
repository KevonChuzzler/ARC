import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  // Official public WhatsApp link
  const whatsappUrl = "https://wa.me/27785269500?text=Hello%20African%20Restorative%20Centre,%20I%20would%20like%20to%20enquire%20about%20your%20programmes%20and%20gatherings.";

  return (
    <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
      
      {/* Tooltip Card */}
      {tooltipVisible && (
        <div className="max-w-xs p-4 rounded-2xl bg-white border border-[#2F3E36]/15 shadow-xl relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setTooltipVisible(false)}
            className="absolute top-2 right-2 text-[#2F3E36]/40 hover:text-[#2F3E36] p-1 rounded-full transition-colors"
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
        className="p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7 fill-current shrink-0" />
      </a>

    </aside>
  );
}
