import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'About the Centre', href: '#about' },
    { name: 'Programmes', href: '#programmes' },
    { name: 'Other Services', href: '#services' },
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
          
          {/* Zone 1: Brand Wordmark & Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img 
              src="/assets/aistudio/arc_logo_emblem_only.png" 
              alt="African Restorative Centre Logo" 
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2F3E36] whitespace-nowrap">
                African Restorative Centre
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C86452] font-semibold -mt-1 hidden sm:block">
                Ancient Future Reclaimed
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#2F3E36]/80">
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
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-md transition-all shadow-sm hover:shadow-md shrink-0 active:scale-95"
            >
              Contact ARC
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
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
        <div className="lg:hidden bg-[#F4EAE1] border-b border-[#2F3E36]/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
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
            Contact ARC
          </a>

          {/* Social Media Links below Contact ARC */}
          <div className="pt-4 mt-4 border-t border-[#2F3E36]/12 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/75">
              Follow ARC
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/profile.php?id=61596284974987"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ARC on Facebook"
                title="Follow ARC on Facebook"
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-xl bg-[#FBF9F5] hover:bg-[#1877F2] text-[#2F3E36] hover:text-white border border-[#2F3E36]/12 shadow-xs transition-all flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/africanrestorative/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ARC on Instagram"
                title="Follow ARC on Instagram"
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-xl bg-[#FBF9F5] hover:bg-[#E4405F] text-[#2F3E36] hover:text-white border border-[#2F3E36]/12 shadow-xs transition-all flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@africanrestorative?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ARC on TikTok"
                title="Follow ARC on TikTok"
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-xl bg-[#FBF9F5] hover:bg-black text-[#2F3E36] hover:text-white border border-[#2F3E36]/12 shadow-xs transition-all flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.28 8.28 0 0 0 4.8 1.54V6.59a4.83 4.83 0 0 1-1.03-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
