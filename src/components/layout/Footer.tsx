'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-surface py-4 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-center">
          <p className="text-[12px] text-gray-400">
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
