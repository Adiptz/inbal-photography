'use client';

import { useEffect, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import Logo from '@/components/ui/Logo';
import { useScrollSpy, scrollToSection } from '@/hooks/useScrollSpy';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type NavItem = {
  id: string;
  label: string;
  type: 'scroll' | 'route';
  href?: string;
  sectionId?: string;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isRTL = locale === 'he';
  const isHomePage = pathname === '/';

  // Scroll spy for home page sections
  const activeSection = useScrollSpy({
    sectionIds: ['hero', 'about'],
    offset: 80,
  });

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

  // Navigation items in display order: דף הבית, מי אני, תיק עבודות, מחירון
  const navItems: NavItem[] = [
    { id: 'home', label: t('home'), type: 'scroll', sectionId: 'hero' },
    { id: 'about', label: t('about'), type: 'route', href: '/about' },
    { id: 'portfolio', label: t('portfolio'), type: 'route', href: '/portfolio' },
    { id: 'pricing', label: t('pricing'), type: 'route', href: '/pricing' },
  ];

  const handleNavClick = useCallback(
    (item: NavItem) => {
      onClose();

      if (item.type === 'scroll' && item.sectionId) {
        if (isHomePage) {
          // Already on home, just scroll after menu closes
          setTimeout(() => {
            scrollToSection(item.sectionId!, 0);
          }, 300);
        } else {
          // Navigate to home with scroll target
          router.push(`/?scrollTo=${item.sectionId}`);
        }
      }
      // For 'route' type, navigation handled by Link
    },
    [isHomePage, router, onClose]
  );

  const isActiveItem = (item: NavItem): boolean => {
    if (item.type === 'scroll') {
      if (!isHomePage) return false;

      if (item.sectionId === 'hero') {
        return activeSection === 'hero' || activeSection === null;
      }
      return activeSection === item.sectionId;
    }

    // Special case: highlight "מי אני" when about section is visible on home page
    if (item.id === 'about' && isHomePage && activeSection === 'about') {
      return true;
    }

    if (item.href === '/') {
      return pathname === '/' && !activeSection;
    }
    return pathname.startsWith(item.href || '');
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
          <div className="relative pt-14 pb-5 px-5 border-b border-border">
            <div className="flex justify-center">
              <Logo variant="dark" size="default" linkToHome={false} />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-primary hover:text-accent transition-colors"
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
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.type === 'route' ? (
                    <Link
                      href={item.href || '/'}
                      onClick={onClose}
                      className={`block px-6 py-3 font-sans text-lg transition-colors ${
                        isActiveItem(item)
                          ? 'text-accent bg-surface'
                          : 'text-text-primary hover:text-accent hover:bg-surface'
                      } ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`block w-full px-6 py-3 font-sans text-lg transition-colors ${
                        isActiveItem(item)
                          ? 'text-accent bg-surface'
                          : 'text-text-primary hover:text-accent hover:bg-surface'
                      } ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
