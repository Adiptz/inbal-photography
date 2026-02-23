'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import galleries from '@/data/galleries.json';
import type { Gallery } from '@/lib/types';

export default function GalleriesPage() {
  const t = useTranslations('galleries');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="pt-20">
        <section className="section-spacing">
          <div className="container-custom">
            <h1 className="section-title">{t('title')}</h1>
            <GalleryGrid galleries={galleries as Gallery[]} />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
