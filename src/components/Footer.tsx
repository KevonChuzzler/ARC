import React from 'react';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
}

export default function Footer({ onOpenPrivacyPolicy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2F3E36] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/arc_logo_emblem_only.png"
                alt="African Restorative Centre Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  African Restorative Centre
                </h3>
                <p className="text-xs tracking-widest uppercase text-[#F3A83B] font-semibold">
                  Ancient Future Reclaimed.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/75 max-w-sm leading-relaxed font-normal">
              Exploring and applying Africa's indigenous knowledge systems to support self-knowledge, personal restoration and the development of flourishing individuals and communities.
            </p>

            <div className="space-y-1.5 text-xs text-white/80 pt-1">
              <p>
                <a href="tel:0785269500" className="hover:text-[#F3A83B] transition-colors tabular-nums">
                  078 526 9500 (Tel / WhatsApp)
                </a>
              </p>
              <p>
                <a href="mailto:info@AfricanRestorative.co.za" className="hover:text-[#F3A83B] transition-colors">
                  info@AfricanRestorative.co.za
                </a>
              </p>
              <p className="text-white/70">
                398 Tobias Street, Heritage Manor Estate, Krugersdorp, 1740
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F3A83B]">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-white/80 font-medium">
              <li>
                <a href="#about" className="hover:text-[#F3A83B] transition-colors">
                  About the Centre
                </a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-[#F3A83B] transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3A83B] transition-colors">
                  Other Services
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#F3A83B] transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3A83B] transition-colors">
                  Contact ARC
                </a>
              </li>
              {onOpenPrivacyPolicy && (
                <li>
                  <button
                    onClick={onOpenPrivacyPolicy}
                    type="button"
                    className="hover:text-[#F3A83B] transition-colors text-left cursor-pointer"
                  >
                    Privacy & Cookies
                  </button>
                </li>
              )}
            </ul>

            <div className="pt-4 border-t border-white/10 text-xs text-white/60 space-y-1">
              <p className="font-semibold text-white/80">Co-Directors:</p>
              <p>Norman Mongalo Raphahlela (Senb) · Reverend Maphampha Rudolph Hlaka</p>
            </div>
          </div>

          {/* Back to Top & Social Media Links */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-6">
            <a
              href="#"
              aria-label="Back to top"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#C86452] text-xs font-semibold uppercase tracking-wider text-white transition-all border border-white/10 w-fit"
            >
              Back to Top
            </a>

            <div className="space-y-2 md:text-right">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F3A83B] block">
                Follow ARC
              </span>
              <div className="flex items-center md:justify-end gap-2.5">
                <a
                  href="https://www.facebook.com/profile.php?id=61596284974987"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ARC on Facebook"
                  title="Follow ARC on Facebook"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/africanrestorative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ARC on Instagram"
                  title="Follow ARC on Instagram"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@africanrestorative?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ARC on TikTok"
                  title="Follow ARC on TikTok"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-black text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.28 8.28 0 0 0 4.8 1.54V6.59a4.83 4.83 0 0 1-1.03-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} African Restorative Centre (ARC). All rights reserved.</p>
          <div className="flex items-center gap-6">
            {onOpenPrivacyPolicy && (
              <button
                onClick={onOpenPrivacyPolicy}
                type="button"
                className="hover:text-[#F3A83B] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Cookie & Privacy Policy
              </button>
            )}
            <p>AfricanRestorative.co.za</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
