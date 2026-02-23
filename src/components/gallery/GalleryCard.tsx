'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import type { Gallery, Locale } from '@/lib/types';

interface GalleryCardProps {
  gallery: Gallery;
}

export default function GalleryCard({ gallery }: GalleryCardProps) {
  const locale = useLocale() as Locale;

  return (
    <Link
      href={`/galleries/${gallery.slug}`}
      className="group block relative aspect-[4/5] overflow-hidden bg-surface"
    >
      <Image
        src={gallery.coverImage}
        alt={gallery.title[locale]}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/60 to-transparent">
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
  );
}
