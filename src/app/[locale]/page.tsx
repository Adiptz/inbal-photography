'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      <div className="container-custom section-spacing">
        <h1 className="font-script text-logo-desktop text-text-primary">
          {t('hero.title')}
        </h1>
        <p className="font-sans text-body-small text-text-secondary tracking-logo uppercase">
          {t('hero.subtitle').split('').join(' ')}
        </p>
        <h2 className="font-serif text-h2 text-text-primary mt-8">
          {t('meta.description')}
        </h2>
        <p className="font-sans text-body text-text-secondary mt-4">
          {t('nav.home')} | {t('nav.galleries')} | {t('nav.about')} | {t('nav.pricing')}
        </p>
        <button className="mt-8 bg-accent hover:bg-accent-hover text-white font-sans font-medium text-body-small px-7 py-3.5 rounded-pill shadow-button transition-colors duration-200">
          {t('common.contact')}
        </button>
      </div>
    </main>
  );
}
