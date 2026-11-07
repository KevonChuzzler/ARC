import React, { useState, useEffect } from 'react';

interface CookieConsentBannerProps {
  onOpenPrivacyPolicy: () => void;
}

export default function CookieConsentBanner({ onOpenPrivacyPolicy }: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('arc_cookie_consent');
      if (!consent) {
        // Small delay so it smoothly animates in after initial page load
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // If localStorage is unavailable, show banner
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('arc_cookie_consent', 'accepted');
    } catch {
      // ignore storage error
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('arc_cookie_consent', 'declined');
    } catch {
      // ignore storage error
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 bg-[#2F3E36] text-white p-5 rounded-2xl shadow-2xl border border-white/15 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F3A83B]">
            Cookies & Privacy Notice
          </p>
          <p className="text-xs text-white/85 leading-relaxed font-normal">
            We use essential cookies to provide you with a smooth browsing experience and to protect your privacy in line with South Africa&apos;s POPIA regulations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            type="button"
            className="px-4 py-2 bg-[#C86452] hover:bg-[#b05342] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Accept
          </button>
          
          <button
            onClick={handleDecline}
            type="button"
            className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
          >
            Essential Only
          </button>

          <button
            onClick={onOpenPrivacyPolicy}
            type="button"
            className="px-2 py-2 text-xs text-[#F3A83B] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            Read Policy
          </button>
        </div>
      </div>
    </div>
  );
}
