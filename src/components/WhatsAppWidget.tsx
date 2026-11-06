import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  // WhatsApp quick connect link
  const whatsappUrl = "https://wa.me/27710000000?text=Hello%20African%20Restoration%20Centre,%20I%20would%20like%20to%20enquire%20about%20your%20programmes.";

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
              src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_09.37.16_9133e983.jpeg"
              alt="ARC WhatsApp Avatar"
              className="w-9 h-9 rounded-full object-cover border border-[#2F3E36]/15 shrink-0"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[#2F3E36]">ARC Support</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-[#2F3E36]/80 leading-snug">
                Have questions about our programmes? Chat directly with us on WhatsApp!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ARC on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn"
      >
        <MessageCircle className="w-6 h-6 fill-current shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block pr-1">
          Chat on WhatsApp
        </span>
      </a>

    </aside>
  );
}
