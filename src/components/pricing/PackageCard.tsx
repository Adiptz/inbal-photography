'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import type { Package } from '@/lib/types';
import content from '@/content/he.json';
import { getImagePath } from '@/lib/utils';

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const t = useTranslations('pricing');

  const formattedPrice = new Intl.NumberFormat('he-IL').format(pkg.price);

  const whatsappNumber = content.contact.whatsappNumber;
  const message = encodeURIComponent(`היי אשמח לשמוע פרטים על ${pkg.title.he}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="group bg-white border border-border overflow-hidden flex flex-col h-full
                    rounded-3xl shadow-sm
                    transition-all duration-300 ease-out
                    hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-3 hover:border-accent/40">
      {/* Image - shorter on mobile to keep price visible */}
      <div className="relative aspect-[3/1] sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-t-3xl">
        <Image
          src={getImagePath(pkg.image)}
          alt={pkg.title.he}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-1 text-right">
        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl text-text-primary mb-2 sm:mb-4">
          {pkg.title.he}
        </h3>

        {/* Description List */}
        <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-1 list-disc list-inside mr-0">
          {pkg.description.he.map((item, index) => (
            <li key={index} className="text-text-secondary text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        {/* Price */}
        <p className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4 text-center
                      transition-colors duration-300 group-hover:text-accent">
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
