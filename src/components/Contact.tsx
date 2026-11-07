import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Resetting the Mind',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappUrl = "https://wa.me/27785269500?text=Hello%20African%20Restorative%20Centre,%20I%20would%20like%20to%20enquire%20about%20your%20programmes%20and%20gatherings.";

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
        
        {/* Section Title */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452]">
            Contact & Get Involved
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F3E36] text-balance">
            Connect with African Restorative Centre
          </h2>
          <p className="text-base sm:text-lg text-[#2F3E36]/85 font-normal leading-relaxed">
            Interested in our learning programmes, African knowledge gatherings, coaching and counselling or other opportunities?
          </p>
          <p className="text-sm text-[#2F3E36]/75">
            Get in touch with ARC. We welcome enquiries from individuals, couples, young people, families and community members interested in learning and personal growth.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Contact Channels */}
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
                Official Contact Channels
              </h3>

              <div className="space-y-6 text-sm text-[#2F3E36]/90">
                
                {/* Telephone & WhatsApp Business */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-[#C86452] shrink-0 border border-[#2F3E36]/10 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/60 block">
                      Telephone & WhatsApp Business
                    </span>
                    <a 
                      href="tel:0785269500" 
                      className="text-lg font-bold text-[#2F3E36] hover:text-[#C86452] transition-colors tabular-nums block"
                    >
                      078 526 9500
                    </a>
                    <p className="text-xs text-[#2F3E36]/70">
                      Public telephone & official WhatsApp business line
                    </p>
                  </div>
                </div>

                {/* General Enquiries Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-[#C86452] shrink-0 border border-[#2F3E36]/10 shadow-xs">
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
                      Website domain: AfricanRestorative.co.za
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp Callout Button */}
                <div className="p-4 rounded-xl bg-white border border-[#2F3E36]/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F3E36]">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Direct</span>
                  </div>
                  <p className="text-xs text-[#2F3E36]/80 leading-relaxed">
                    A direct WhatsApp link allows visitors to start a conversation with ARC.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Follow ARC Social Media Placeholder */}
              <div className="pt-6 border-t border-[#2F3E36]/15 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/70 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-[#C86452]" />
                  Follow ARC
                </span>
                <p className="text-xs text-[#2F3E36]/70 leading-relaxed">
                  Links to ARC's approved social media platforms will be included here as confirmed.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {['Facebook', 'YouTube', 'Instagram', 'LinkedIn'].map((network) => (
                    <span
                      key={network}
                      className="px-3 py-1.5 rounded-md bg-white border border-[#2F3E36]/10 text-xs font-semibold text-[#2F3E36]/60 shadow-xs"
                    >
                      {network} (Pending)
                    </span>
                  ))}
                </div>
              </div>

              {/* Leadership Contacts Note */}
              <div className="pt-4 border-t border-[#2F3E36]/15 text-xs text-[#2F3E36]/70">
                <p className="font-semibold text-[#2F3E36]">Leadership Contacts:</p>
                <p className="mt-0.5">
                  Individual official email addresses will appear alongside the respective leadership profiles upon approval.
                </p>
              </div>

            </div>

            {/* Content & Contact Setup Notes Info Box */}
            <div className="p-6 rounded-2xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-3 text-xs text-[#2F3E36]/80">
              <h4 className="font-serif text-base font-bold text-[#2F3E36] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C86452]" />
                Website Content & Verification Status
              </h4>
              <ul className="space-y-1.5 text-xs">
                <li>• <strong>Organisation Name:</strong> African Restorative Centre (ARC)</li>
                <li>• <strong>Website Domain:</strong> AfricanRestorative.co.za</li>
                <li>• <strong>Structure:</strong> One-page Starter Website</li>
                <li>• <strong>Working Draft:</strong> Content and leadership profiles must be approved by ARC before publication</li>
              </ul>
              <p className="text-[11px] text-[#2F3E36]/60 pt-2 border-t border-[#2F3E36]/10">
                Prepared by: Upside Digital Marketing & Branding · Small Business Digital Growth Partner
              </p>
            </div>

          </motion.div>

          {/* Right Column: Interactive Enquiries Form */}
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
                  Send ARC an Enquiry
                </h3>
                <p className="text-sm text-[#2F3E36]/75 mt-1 leading-relaxed">
                  We welcome enquiries regarding our learning programmes, knowledge gatherings, or coaching sessions.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#F4EAE1] border border-[#C86452]/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#C86452] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2F3E36]">
                    Thank You for Your Enquiry
                  </h4>
                  <p className="text-sm text-[#2F3E36]/80 max-w-md mx-auto leading-relaxed">
                    Your enquiry regarding <strong>{formData.service}</strong> has been received. Our team will contact you at <strong>{formData.email}</strong> or via <strong>{formData.phone || 'phone'}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Resetting the Mind', message: '' });
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
                        placeholder="e.g. Sipho Moyo"
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
                        placeholder="e.g. sipho@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Dropdown Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 078 123 4567"
                        className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                        Area of Interest <span className="text-[#C86452]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#2F3E36]/20 focus:border-[#C86452] text-sm text-[#2F3E36] bg-[#FBF9F5] focus:bg-white transition-all outline-none"
                      >
                        <option value="Resetting the Mind">Resetting the Mind (Learning Programme)</option>
                        <option value="God and the Human Mind">God and the Human Mind (Learning Programme)</option>
                        <option value="African Knowledge Gatherings">African Knowledge Gatherings / Sessions</option>
                        <option value="African Marriage Preparation">African Marriage Preparation (Coaching)</option>
                        <option value="Other Coaching & Counselling">Other Coaching & Counselling Support</option>
                        <option value="Other Learning Programmes">Other Learning Programmes</option>
                        <option value="General Enquiry">General Enquiry / Community Collaboration</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36] mb-1.5">
                      Your Message or Inquiry <span className="text-[#C86452]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share your questions, specific needs, or programme participation interests..."
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
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry to ARC</span>
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
