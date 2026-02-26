'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import portfolioImages from '@/data/portfolio.json';

export default function PortfolioPreview() {
  const t = useTranslations('portfolio');

  // Show first 6 images for preview
  const previewImages = portfolioImages.slice(0, 6);

  return (
    <section id="portfolio-preview" className="section-spacing pt-24 bg-white">
      <div className="container-custom">
        {/* Section Title - Clickable with Animation */}
        <Link
          href="/portfolio"
          className="group block text-center mb-8 md:mb-12"
        >
          <h2 className="inline-block text-h2-mobile md:text-h2 font-medium text-text-primary
                         relative cursor-pointer
                         hover:text-accent transition-colors duration-300">
            {t('title')}
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent
                             scale-x-0 group-hover:scale-x-100
                             transition-transform duration-300 origin-center" />
          </h2>
        </Link>

        {/* Preview Grid - 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {previewImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/5] overflow-hidden bg-surface"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 ease-out
                  group-hover:scale-[1.02] group-hover:-translate-y-0.5"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />

              {/* Shadow effect on hover - more subtle */}
              <div className="absolute inset-x-2 -bottom-1 h-4 bg-gradient-to-t from-black/10 to-transparent
                opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
