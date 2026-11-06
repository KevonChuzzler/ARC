import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Learning Sessions',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission handler
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-[#2F3E36]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Connect with the African Restoration Centre
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/80">
            We welcome inquiries from individuals, families, educational partners, and community leaders.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Google Maps Embed Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-2xl bg-[#F4EAE1]/80 border border-[#2F3E36]/12 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#2F3E36]">
                Contact Information
              </h3>

              <div className="space-y-5 text-sm text-[#2F3E36]/90">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white text-[#C86452] shrink-0 border border-[#2F3E36]/10 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">Phone</span>
                    <a href="tel:+27710000000" className="font-medium hover:text-[#C86452] transition-colors">
                      +27 71 000 0000 / +27 11 234 5678
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white text-[#C86452] shrink-0 border border-[#2F3E36]/10 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">Email</span>
                    <a href="mailto:info@africanrestorationcentre.org" className="font-medium hover:text-[#C86452] transition-colors">
                      info@africanrestorationcentre.org
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white text-[#C86452] shrink-0 border border-[#2F3E36]/10 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">Physical Address</span>
                    <p className="font-medium leading-snug">
                      14 Cultural Heritage Way, Community Centre Precinct,<br />
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white text-[#C86452] shrink-0 border border-[#2F3E36]/10 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">Operating Hours</span>
                    <p className="font-medium">Monday – Friday: 08:30 – 17:00</p>
                    <p className="text-xs text-[#2F3E36]/70">Saturday Workshops: 09:00 – 13:00</p>
                  </div>
                </div>

              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-[#2F3E36]/15 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/70 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-[#C86452]" />
                  Follow ARC Online
                </span>
                <div className="flex items-center gap-3">
                  {['Facebook', 'Instagram', 'YouTube', 'X (Twitter)'].map((network) => (
                    <a
                      key={network}
                      href="#contact"
                      className="px-3 py-1.5 rounded-md bg-white border border-[#2F3E36]/10 text-xs font-semibold text-[#2F3E36] hover:bg-[#C86452] hover:text-white hover:border-[#C86452] transition-all shadow-xs"
                    >
                      {network}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Embed Placeholder Box */}
            <div className="rounded-2xl overflow-hidden border border-[#2F3E36]/12 shadow-sm bg-white">
              <div className="p-4 bg-[#2F3E36] text-white flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F3A83B]" />
                  ARC Location Map
                </span>
                <span className="text-white/60">Johannesburg, SA</span>
              </div>
              <div className="relative h-64 bg-[#EBE6DF] flex flex-col items-center justify-center p-6 text-center space-y-3">
                {/* Stylized Map Viewport */}
                <div className="w-12 h-12 rounded-full bg-[#C86452] text-white flex items-center justify-center shadow-md animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-lg font-bold text-[#2F3E36]">
                    African Restoration Centre
                  </p>
                  <p className="text-xs text-[#2F3E36]/70">
                    14 Cultural Heritage Way, Johannesburg
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#2F3E36]/20 rounded-md text-xs font-semibold text-[#2F3E36] hover:bg-[#F4EAE1] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C86452]" />
                  Open in Google Maps
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Functional Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-6">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2F3E36]">
                  Send Us a Message
                </h3>
                <p className="text-sm text-[#2F3E36]/70 mt-1">
                  Fill out the form below and an ARC team representative will respond within 24 business hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#F4EAE1] border border-[#C86452]/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#C86452] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2F3E36]">
                    Thank You for Reaching Out
                  </h4>
                  <p className="text-sm text-[#2F3E36]/80 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong>{formData.service}</strong> has been received. Our team will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Learning Sessions', message: '' });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2F3E36] bg-white border border-[#2F3E36]/20 rounded-md hover:bg-[#2F3E36] hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                        Full Name <span className="text-[#C86452]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Lerato Molefe"
                        className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                        Email Address <span className="text-[#C86452]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. lerato@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Dropdown Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +27 82 123 4567"
                        className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                        Service of Interest <span className="text-[#C86452]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none"
                      >
                        <option value="Learning Sessions">Learning Sessions</option>
                        <option value="Marriage Preparation">Marriage Preparation</option>
                        <option value="Online Activities">Online Activities</option>
                        <option value="General Inquiry / Support">General Inquiry / Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                      Your Message <span className="text-[#C86452]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details about your inquiry or programme interest..."
                      className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86452] hover:bg-[#b05342] rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
