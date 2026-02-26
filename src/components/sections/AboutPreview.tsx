'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import content from '@/content/he.json';

export default function AboutPreview() {
  const t = useTranslations('about');

  // Split full text into paragraphs
  const paragraphs = content.about.fullText.split('\n\n');

  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 lg:gap-16 items-center">
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
          <div className="w-full md:w-1/2 text-right">
            <h2 className="text-h2-mobile lg:text-h2 font-medium text-text-primary mb-6">
              {t('title')}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-secondary leading-relaxed"
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
