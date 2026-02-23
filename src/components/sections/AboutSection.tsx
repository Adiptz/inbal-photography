'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import contentHe from '@/content/he.json';
import contentEn from '@/content/en.json';

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale();
  const content = locale === 'he' ? contentHe : contentEn;
  const isRTL = locale === 'he';

  // Split full text into paragraphs
  const paragraphs = content.about.fullText.split('\n\n');

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 lg:gap-16`}>
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
          <div className={`w-full md:w-1/2 ${isRTL ? 'text-right' : 'text-left'} flex flex-col justify-center`}>
            <h1 className="font-serif text-h1-mobile lg:text-h1 font-medium text-text-primary mb-8">
              {t('title')}
            </h1>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-secondary leading-relaxed text-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
