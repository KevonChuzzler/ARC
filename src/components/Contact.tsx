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

          {/* Right Column: Location Map Viewport & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Google Maps Location Container */}
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

            {/* Official Social Media Links */}
            <div className="p-6 rounded-2xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/70 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#C86452]" />
                Follow ARC on Social Media
              </span>
              <p className="text-xs text-[#2F3E36]/75 leading-relaxed">
                Connect with the African Restorative Centre on our official social media channels:
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61596284974987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4EAE1] hover:bg-[#C86452] hover:text-white border border-[#2F3E36]/10 text-xs font-semibold text-[#2F3E36] transition-colors"
                >
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/africanrestorative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4EAE1] hover:bg-[#C86452] hover:text-white border border-[#2F3E36]/10 text-xs font-semibold text-[#2F3E36] transition-colors"
                >
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@africanrestorative?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F4EAE1] hover:bg-[#C86452] hover:text-white border border-[#2F3E36]/10 text-xs font-semibold text-[#2F3E36] transition-colors"
                >
                  <span>TikTok</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
