'use client';

import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Logo from '@/components/ui/Logo';
import LanguageToggle from './LanguageToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const isRTL = locale === 'he';

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/galleries', label: t('galleries') },
    { href: '/about', label: t('about') },
    { href: '/pricing', label: t('pricing') },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-[280px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen
            ? 'translate-x-0'
            : isRTL
            ? 'translate-x-full'
            : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className={`flex items-center justify-between p-5 border-b border-border ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Logo variant="dark" size="default" linkToHome={false} />
            <button
              onClick={onClose}
              className="p-2 text-text-primary hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block px-6 py-3 font-sans text-lg transition-colors ${
                      isActiveLink(link.href)
                        ? 'text-accent bg-surface'
                        : 'text-text-primary hover:text-accent hover:bg-surface'
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer with language toggle */}
          <div className={`p-5 border-t border-border ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center gap-2">
              <span className="text-text-secondary text-sm">
                {isRTL ? 'שפה:' : 'Language:'}
              </span>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
