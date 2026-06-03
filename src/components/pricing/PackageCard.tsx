'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Package } from '@/lib/types';
import content from '@/content/he.json';
import { getImagePath } from '@/lib/utils';

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const t = useTranslations('pricing');
  const [showDetails, setShowDetails] = useState(false);

  const formattedPrice = new Intl.NumberFormat('he-IL').format(pkg.price);

  const whatsappNumber = content.contact.whatsappNumber;
  const message = encodeURIComponent(`היי אשמח לשמוע פרטים על צילומי ${pkg.title.he}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="group h-full flex flex-col border border-border rounded-lg overflow-hidden bg-white
                    transition-all duration-500 ease-out
                    hover:shadow-2xl hover:shadow-black/10 sm:hover:-translate-y-2 hover:border-transparent">
      {/* Image - square on mobile, portrait on desktop */}
      <div className="relative aspect-square sm:aspect-[3/4] overflow-hidden flex-shrink-0">
        <Image
          src={getImagePath(pkg.image)}
          alt={pkg.title.he}
          fill
          className={`object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out ${pkg.imagePosition === 'top' ? 'object-top' : ''}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-5 text-center flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-sm sm:text-xl text-text-primary mb-0.5 sm:mb-1 leading-tight">
          {pkg.title.he}
        </h3>

        {/* Price */}
        <p className="text-base sm:text-2xl font-light text-accent mb-2 sm:mb-3">
          ₪{formattedPrice}
        </p>

        {/* Mobile: Expandable details */}
        <div className="sm:hidden text-center mb-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-text-light text-xs flex items-center justify-center gap-1 mx-auto"
          >
            מה כוללת החבילה?
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {showDetails && (
            <div className="text-xs text-text-secondary space-y-1 mt-2 mb-2">
              {pkg.description.he.map((item, index) => (
                <p key={index}>• {item}</p>
              ))}
              {pkg.extra?.he && (
                <p className="text-text-light mt-1">{pkg.extra.he}</p>
              )}
            </div>
          )}
        </div>

        {/* Desktop: Full content */}
        <div className="hidden sm:block flex-grow">
          {pkg.subtitle?.he && (
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {pkg.subtitle.he}
            </p>
          )}
          <ul className="text-text-light text-sm mb-4 space-y-1">
            {pkg.description.he.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
          {pkg.extra?.he && (
            <p className="text-text-light text-xs mb-5">
              {pkg.extra.he}
            </p>
          )}
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-text-primary text-text-primary
                     px-3 py-1.5 text-xs sm:px-6 sm:py-2.5 sm:text-sm rounded-full
                     hover:bg-text-primary hover:text-white transition-colors duration-300 mt-auto"
        >
          {t('cta')}
        </a>
      </div>
    </div>
  );
}
