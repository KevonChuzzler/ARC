import React, { useState, useEffect } from 'react';

interface BackToTopProps {
  isModalOpen?: boolean;
}

export default function BackToTop({ isModalOpen = false }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 280px
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Hide button if not scrolled down or if a full-screen modal is currently active
  if (!isVisible || isModalOpen) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll back to top"
      className="fixed bottom-24 right-6 z-40 flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#2F3E36] hover:bg-[#C86452] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 border border-white/15 cursor-pointer animate-in fade-in slide-in-from-bottom-2 select-none"
    >
      <span className="text-sm font-bold leading-none" aria-hidden="true">↑</span>
      <span>Top</span>
    </button>
  );
}
