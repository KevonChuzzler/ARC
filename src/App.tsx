import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programmes from './components/Programmes';
import OtherServices from './components/OtherServices';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import BackToTop from './components/BackToTop';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import CookieConsentBanner from './components/CookieConsentBanner';
import type { EnquiryInterest, EnquiryPrefill } from './lib/enquiry';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isProgrammeOpen, setIsProgrammeOpen] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState<EnquiryPrefill | null>(null);

  const isAnyModalOpen = isPrivacyOpen || isProgrammeOpen;

  const handleSelectInterest = (interest: EnquiryInterest, programme?: string) => {
    setEnquiryPrefill({
      interest,
      programme,
      timestamp: Date.now(),
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2F3E36] antialiased selection:bg-[#C86452] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Section 01: Hero / Home */}
        <Hero />

        {/* Section 02: About the Centre */}
        <About />

        {/* Section 03: Programmes */}
        <Programmes
          onModalStateChange={setIsProgrammeOpen}
          onEnquireProgramme={(programmeTitle) =>
            handleSelectInterest('Learning Programmes', programmeTitle)
          }
        />

        {/* Section 04: Other Services */}
        <OtherServices onSelectInterest={(interest) => handleSelectInterest(interest)} />

        {/* Section 05: Leadership */}
        <Leadership />

        {/* Section 06: Contact & Get Involved */}
        <Contact
          enquiryPrefill={enquiryPrefill}
          onOpenPrivacyPolicy={() => setIsPrivacyOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacyPolicy={() => setIsPrivacyOpen(true)} />

      {/* Floating Back to Top Button */}
      <BackToTop isModalOpen={isAnyModalOpen} />

      {/* Persistent WhatsApp Floating Widget (elevated and positioned above modal when showing) */}
      <WhatsAppWidget isModalOpen={isAnyModalOpen} />

      {/* Cookie Consent Banner */}
      <CookieConsentBanner onOpenPrivacyPolicy={() => setIsPrivacyOpen(true)} />

      {/* Cookie & Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
