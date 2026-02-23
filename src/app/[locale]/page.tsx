'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import GalleryPreview from '@/components/sections/GalleryPreview';
import AboutPreview from '@/components/sections/AboutPreview';

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
        <Hero />
        <GalleryPreview />
        <AboutPreview />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
