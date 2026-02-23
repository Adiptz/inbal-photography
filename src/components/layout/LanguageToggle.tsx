'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'he' ? 'en' : 'he';
    router.replace(pathname, { locale: newLocale });
  };

  // Show the opposite language as the toggle option
  const toggleLabel = locale === 'he' ? 'EN' : 'עב';

  return (
    <button
      onClick={toggleLanguage}
      className="font-sans text-[15px] text-text-secondary hover:text-accent transition-colors duration-200 px-2 py-1"
      aria-label={locale === 'he' ? 'Switch to English' : 'החלף לעברית'}
    >
      {toggleLabel}
    </button>
  );
}
