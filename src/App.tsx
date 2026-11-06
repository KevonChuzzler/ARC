import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programmes from './components/Programmes';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2F3E36] antialiased selection:bg-[#C86452] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About ARC */}
        <About />

        {/* Section 3: Programmes & Services */}
        <Programmes />

        {/* Section 4: Leadership */}
        <Leadership />

        {/* Section 5: Contact & Get Involved */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Widget */}
      <WhatsAppWidget />
    </div>
  );
}
