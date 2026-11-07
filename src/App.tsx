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
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import CookieConsentBanner from './components/CookieConsentBanner';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
        <Programmes />

        {/* Section 04: Other Services */}
        <OtherServices />

        {/* Section 05: Leadership */}
        <Leadership />

        {/* Section 06: Contact & Get Involved */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacyPolicy={() => setIsPrivacyOpen(true)} />

      {/* Persistent WhatsApp Floating Widget */}
      <WhatsAppWidget />

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

