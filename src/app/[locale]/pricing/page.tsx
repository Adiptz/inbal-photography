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

            {/* Packages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sortedPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
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
