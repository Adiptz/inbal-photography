'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import portfolioImages from '@/data/portfolio.json';
import type { PortfolioImage } from '@/lib/types';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="pt-16">
        <section className="py-4 lg:py-6">
          <div className="container-custom">
            <h1 className="section-title">{t('title')}</h1>
            <PortfolioGrid images={portfolioImages as PortfolioImage[]} />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
