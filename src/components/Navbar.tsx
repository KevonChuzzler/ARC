import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About ARC', href: '#about' },
    { name: 'Programmes', href: '#programmes' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#2F3E36]/10 transition-all">
      {/* Thin Top Scroll Progress Indicator */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#C86452] via-[#F3A83B] to-[#C86452] transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single Brand Wordmark & Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img 
              src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_09.37.16_9133e983.jpeg" 
              alt="ARC Logo" 
              className="w-11 h-11 rounded-full object-cover border border-[#2F3E36]/15 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2F3E36] whitespace-nowrap">
                African Restoration Centre
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C86452] font-semibold -mt-1 hidden sm:block">
                People • Roots • Restoration
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2F3E36]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#C86452] transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C86452] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-md transition-all shadow-sm hover:shadow-md shrink-0 active:scale-95"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2F3E36] hover:text-[#C86452] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4EAE1] border-b border-[#2F3E36]/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#2F3E36] hover:text-[#C86452] hover:bg-[#FBF9F5] rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86452] rounded-md shadow-sm mt-4"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
