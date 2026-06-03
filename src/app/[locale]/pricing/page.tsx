'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PackageCard from '@/components/pricing/PackageCard';
import packages from '@/data/packages.json';
import type { Package } from '@/lib/types';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sortedPackages = [...(packages as Package[])].sort((a, b) => a.order - b.order);

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

            {/* Packages Grid - 2x2 on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-10">
              {sortedPackages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="opacity-0 animate-fade-up h-full"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
