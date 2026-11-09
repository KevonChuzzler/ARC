import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Globe, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const whatsappUrl = "https://wa.me/27785269500?text=Hello%20African%20Restorative%20Centre,%20I%20would%20like%20to%20enquire%20about%20your%20programmes%20and%20services.";

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-[#2F3E36]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title & Call to Action */}
        <div className="max-w-3xl space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Contact & Get Involved
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Connect with the African Restorative Centre
          </h2>
          <p className="text-lg sm:text-xl font-serif font-bold text-[#C86452] pt-1">
            Interested in our programmes or services? Get in touch with the African Restorative Centre to find out more.
          </p>
        </div>

        {/* Contact Details Grid (No Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 p-8 lg:p-10 rounded-3xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-8"
          >
            <h3 className="font-serif text-2xl font-bold text-[#2F3E36] border-b border-[#2F3E36]/10 pb-4">
              General Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#2F3E36]/90">
              
              {/* Telephone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#F4EAE1] text-[#C86452] shrink-0 border border-[#2F3E36]/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">
                    Telephone / WhatsApp
                  </span>
                  <a 
                    href="tel:0785269500" 
                    className="text-xl font-bold text-[#2F3E36] hover:text-[#C86452] transition-colors tabular-nums block"
                  >
                    078 526 9500
                  </a>
                  <p className="text-xs text-[#2F3E36]/70">
                    Public telephone & WhatsApp Business
                  </p>
                </div>
              </div>

              {/* General Enquiries Email */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#F4EAE1] text-[#C86452] shrink-0 border border-[#2F3E36]/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">
                    General Enquiries
                  </span>
                  <a 
                    href="mailto:info@AfricanRestorative.co.za" 
                    className="text-base font-bold text-[#2F3E36] hover:text-[#C86452] transition-colors break-all block"
                  >
                    info@AfricanRestorative.co.za
                  </a>
                  <p className="text-xs text-[#2F3E36]/70">
                    AfricanRestorative.co.za
                  </p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4 sm:col-span-2 pt-4 border-t border-[#2F3E36]/10">
                <div className="p-3.5 rounded-2xl bg-[#F4EAE1] text-[#C86452] shrink-0 border border-[#2F3E36]/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">
                    Physical Address
                  </span>
                  <p className="font-semibold text-[#2F3E36] leading-snug text-base">
                    398 Tobias Street, Heritage Manor Estate, Krugersdorp, 1740, South Africa
                  </p>
                </div>
              </div>

            </div>

            {/* Co-Directors Direct Contact Emails */}
            <div className="p-6 rounded-2xl bg-[#F4EAE1]/70 border border-[#2F3E36]/10 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C86452] block">
                Co-Directors Direct Contact
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-0.5">
                  <p className="font-bold text-[#2F3E36]">
                    Norman Mongalo Raphahlela (Senb)
                  </p>
                  <a href="mailto:senb@AfricanRestorative.co.za" className="text-[#C86452] hover:underline font-semibold block">
                    senb@AfricanRestorative.co.za
                  </a>
                </div>

                <div className="space-y-0.5">
                  <p className="font-bold text-[#2F3E36]">
                    Reverend Maphampha Rudolph Hlaka
                  </p>
                  <a href="mailto:hlaka@AfricanRestorative.co.za" className="text-[#C86452] hover:underline font-semibold block">
                    hlaka@AfricanRestorative.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="mailto:info@AfricanRestorative.co.za"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F3E36] hover:bg-[#23302a] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email General Enquiries</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Social Media Links (Above Map) & Location Map Viewport */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Official Social Media Links (Positioned Above Map with Platform Logos) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C86452] flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-[#C86452]" />
                  Follow ARC on Social Media
                </span>
                <p className="text-xs sm:text-sm text-[#2F3E36]/75 leading-relaxed font-normal">
                  Connect with the African Restorative Centre across our official platforms:
                </p>
              </div>

              {/* Platform Logo Links (No text buttons, using platform logos) */}
              <div className="flex items-center gap-3 pt-1">
                {/* Facebook Logo Link */}
                <a
                  href="https://www.facebook.com/profile.php?id=61596284974987"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ARC on Facebook"
                  title="Follow ARC on Facebook"
                  className="w-12 h-12 rounded-2xl bg-[#F4EAE1] hover:bg-[#1877F2] text-[#2F3E36] hover:text-white border border-[#2F3E36]/10 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center cursor-pointer group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram Logo Link */}
                <a
                  href="https://www.instagram.com/africanrestorative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ARC on Instagram"
                  title="Follow ARC on Instagram"
                  className="w-12 h-12 rounded-2xl bg-[#F4EAE1] hover:bg-[#E4405F] text-[#2F3E36] hover:text-white border border-[#2F3E36]/10 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center cursor-pointer group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok Logo Link */}
                <a
                  href="https://www.tiktok.com/@africanrestorative?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ARC on TikTok"
                  title="Follow ARC on TikTok"
                  className="w-12 h-12 rounded-2xl bg-[#F4EAE1] hover:bg-black text-[#2F3E36] hover:text-white border border-[#2F3E36]/10 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center cursor-pointer group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.28 8.28 0 0 0 4.8 1.54V6.59a4.83 4.83 0 0 1-1.03-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Maps Location Container (Below Social Links) */}
            <div className="rounded-3xl overflow-hidden border border-[#2F3E36]/12 shadow-sm bg-white">
              <div className="p-4 bg-[#2F3E36] text-white flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F3A83B]" />
                  ARC Physical Location
                </span>
                <span className="text-white/70">Krugersdorp, 1740</span>
              </div>
              <div className="relative w-full h-80 bg-[#F4EAE1]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3480.636113425104!2d27.751721325288727!3d-26.0897046271475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s398%20Tobias%20Street.%20Heritage%20manor%20estate.%20Krugersdorp%20%201740.!5e1!3m2!1sen!2sza!4v1794078214272!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ARC Location Map - 398 Tobias Street, Heritage Manor Estate, Krugersdorp"
                  className="w-full h-full"
                />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
