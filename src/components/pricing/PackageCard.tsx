'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import type { Package, Locale } from '@/lib/types';
import contentHe from '@/content/he.json';
import contentEn from '@/content/en.json';

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const t = useTranslations('pricing');
  const tWhatsapp = useTranslations('whatsapp');
  const locale = useLocale() as Locale;
  const content = locale === 'he' ? contentHe : contentEn;
  const isRTL = locale === 'he';

  const formattedPrice = new Intl.NumberFormat(locale === 'he' ? 'he-IL' : 'en-IL').format(pkg.price);

  const whatsappNumber = content.contact.whatsappNumber;
  const message = encodeURIComponent(tWhatsapp('message'));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="bg-white border border-border overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title[locale]}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-4">
          {pkg.title[locale]}
        </h3>

        {/* Description List */}
        <ul className={`space-y-2 mb-6 flex-1 ${isRTL ? 'list-disc list-inside mr-0' : 'list-disc list-inside ml-0'}`}>
          {pkg.description[locale].map((item, index) => (
            <li key={index} className="text-text-secondary text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        {/* Price */}
        <p className="text-2xl font-semibold text-text-primary mb-4">
          ₪{formattedPrice}
        </p>

        {/* CTA Button */}
        <Button href={whatsappUrl} variant="primary" className="w-full">
          {t('cta')}
        </Button>
      </div>
    </div>
  );
}
