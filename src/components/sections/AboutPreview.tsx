'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import contentHe from '@/content/he.json';
import contentEn from '@/content/en.json';

export default function AboutPreview() {
  const t = useTranslations('about');
  const locale = useLocale();
  const content = locale === 'he' ? contentHe : contentEn;
  const isRTL = locale === 'he';

  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <div className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 lg:gap-16 items-center`}>
          {/* Photo */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about/inbal-portrait.jpg"
                alt="Inbal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className={`w-full md:w-1/2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="font-serif text-h2-mobile lg:text-h2 font-medium text-text-primary mb-6">
              {t('title')}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {content.about.shortText}
            </p>
            <Button href="/about" variant="secondary">
              {t('readMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
