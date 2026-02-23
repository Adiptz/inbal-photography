'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PhotoGrid from '@/components/gallery/PhotoGrid';
import Lightbox from '@/components/gallery/Lightbox';
import type { Gallery, Locale } from '@/lib/types';

interface GalleryDetailContentProps {
  gallery: Gallery;
}

export default function GalleryDetailContent({ gallery }: GalleryDetailContentProps) {
  const t = useTranslations('galleries');
  const locale = useLocale() as Locale;
  const isRTL = locale === 'he';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < gallery.images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

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
            {/* Back link with arrow */}
            <Link
              href="/galleries"
              className={`inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span>{t('back')}</span>
            </Link>

            {/* Gallery Title */}
            <h1 className="font-serif text-h1-mobile lg:text-h1 font-medium text-text-primary mb-2">
              {gallery.title[locale]}
            </h1>
            {gallery.subtitle?.[locale] && (
              <p className="text-text-secondary mb-8">
                {gallery.subtitle[locale]}
              </p>
            )}

            {/* Photo Grid */}
            <PhotoGrid
              images={gallery.images}
              onImageClick={handleImageClick}
              galleryTitle={gallery.title[locale]}
            />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={gallery.images}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          galleryTitle={gallery.title[locale]}
        />
      )}
    </>
  );
}
