import React from 'react';

export default function Footer() {
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
                src="/assets/aistudio/ONLY_ARC_LOGO_WITH_NO_SLOGAN_PNG_a5baf575.png"
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
            </ul>

            <div className="pt-4 border-t border-white/10 text-xs text-white/60 space-y-1">
              <p className="font-semibold text-white/80">Co-Directors:</p>
              <p>Norman Mongalo Raphahlela (Senb) · Reverend Maphampha Rudolph Hlaka</p>
            </div>
          </div>

          {/* Back to Top Button (Text only) */}
          <div className="md:col-span-3 flex md:justify-end">
            <a
              href="#"
              aria-label="Back to top"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#C86452] text-xs font-semibold uppercase tracking-wider text-white transition-all border border-white/10"
            >
              Back to Top
            </a>
          </div>

        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} African Restorative Centre (ARC). All rights reserved.</p>
          <p>AfricanRestorative.co.za</p>
        </div>

      </div>
    </footer>
  );
}
