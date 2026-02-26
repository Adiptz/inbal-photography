'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
