'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-surface py-10 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Copyright */}
          <p className="text-[12px] text-gray-400">
            {t('copyright', { year: currentYear })}
          </p>

          {/* Studio Credit */}
          <a
            href="https://wa.me/972542078372?text=היי%20עדי%2C%20הגעתי%20מהאתר%20של%20ענבל%20הצלמת.%20אשמח%20לדבר%20על%20פרויקט!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <span className="text-[14px] text-[#555] tracking-wide">ADI</span>
            <span className="text-[12px] text-[#666] mx-1.5">—</span>
            <span className="text-[12px] text-[#666] font-light">Architecting Digital Systems</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
