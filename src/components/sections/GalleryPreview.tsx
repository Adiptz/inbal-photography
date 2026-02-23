'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import galleries from '@/data/galleries.json';
import type { Gallery, Locale } from '@/lib/types';

export default function GalleryPreview() {
  const t = useTranslations('galleries');
  const locale = useLocale() as Locale;

  // Show first 3 galleries
  const previewGalleries = (galleries as Gallery[])
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);

  return (
    <section id="galleries-preview" className="section-spacing bg-white">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="section-title">{t('title')}</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {previewGalleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={`/galleries/${gallery.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-surface"
            >
              <Image
                src={gallery.coverImage}
                alt={gallery.title[locale]}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="font-serif text-lg md:text-xl text-white">
                  {gallery.title[locale]}
                </h3>
                {gallery.subtitle?.[locale] && (
                  <p className="text-white/80 text-sm mt-1">
                    {gallery.subtitle[locale]}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <Button href="/galleries" variant="secondary">
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}
