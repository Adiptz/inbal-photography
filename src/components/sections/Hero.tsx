'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Logo from '@/components/ui/Logo';
import { getImagePath } from '@/lib/utils';

// Set to true to use video background, false for image
const USE_VIDEO = false;

export default function Hero() {
  const t = useTranslations('common');

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const top = aboutSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        {USE_VIDEO ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover grayscale"
          >
            <source src={getImagePath("/images/hero/hero-video.mp4")} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={getImagePath("/images/hero/hero-main.jpg")}
            alt="Hero background"
            fill
            priority
            className="object-cover grayscale object-[35%_center] md:object-[center_20%] scale-[1.02]"
            sizes="100vw"
          />
        )}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5">
        <Logo variant="light" size="large" linkToHome={false} />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
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
