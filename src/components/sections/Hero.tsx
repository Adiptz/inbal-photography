'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from '@/components/ui/Logo';

export default function Hero() {
  const t = useTranslations('common');

  const scrollToContent = () => {
    const nextSection = document.getElementById('galleries-preview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover grayscale"
          sizes="100vw"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5">
        <Logo variant="light" size="large" linkToHome={false} />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label={t('contact')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </section>
  );
}
