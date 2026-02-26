'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useScrollSpy, scrollToSection } from '@/hooks/useScrollSpy';
import content from '@/content/he.json';

interface HeaderProps {
  onMenuOpen: () => void;
}

type NavItem = {
  id: string;
  label: string;
  type: 'scroll' | 'route';
  href?: string;
  sectionId?: string;
};

export default function Header({ onMenuOpen }: HeaderProps) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isRTL = locale === 'he';
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll spy for home page sections
  const activeSection = useScrollSpy({
    sectionIds: ['hero', 'about'],
    offset: 80,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items in correct order for RTL display
  // Array is reversed in RTL, so we define in visual order: דף הבית, מי אני, תיק עבודות, מחירון
  const navItems: NavItem[] = [
    { id: 'pricing', label: t('pricing'), type: 'route', href: '/pricing' },
    { id: 'portfolio', label: t('portfolio'), type: 'route', href: '/portfolio' },
    { id: 'about', label: t('about'), type: 'route', href: '/about' },
    { id: 'home', label: t('home'), type: 'scroll', sectionId: 'hero' },
  ];

  const handleNavClick = useCallback(
    (item: NavItem, e: React.MouseEvent) => {
      if (item.type === 'scroll' && item.sectionId) {
        e.preventDefault();

        if (isHomePage) {
          // Already on home, just scroll
          scrollToSection(item.sectionId, 0);
        } else {
          // Navigate to home with scroll target
          router.push(`/?scrollTo=${item.sectionId}`);
        }
      }
      // For 'route' type, let the Link handle it naturally
    },
    [isHomePage, router]
  );

  const isActiveItem = (item: NavItem): boolean => {
    if (item.type === 'scroll') {
      if (!isHomePage) return false;

      // On home page, check scroll spy
      if (item.sectionId === 'hero') {
        return activeSection === 'hero' || activeSection === null;
      }
      return activeSection === item.sectionId;
    }

    // For route items
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <nav className={`flex items-center justify-end h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Instagram - Far left (visually far right in RTL) */}
            <a
              href={content.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-text-primary hover:text-accent transition-colors duration-200 flex items-center pt-[2px]"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100" />
            </a>

            {/* Nav Links */}
            <ul className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.type === 'route' ? (
                    <Link
                      href={item.href || '/'}
                      className={`group relative font-sans text-[17px] transition-colors duration-200 ${
                        isActiveItem(item)
                          ? 'text-accent'
                          : 'text-text-primary hover:text-accent'
                      }`}
                    >
                      {item.label}
                      {/* Animated underline */}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent
                                   transition-transform duration-300 origin-center
                                   ${isActiveItem(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                      />
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className={`group relative font-sans text-[17px] transition-colors duration-200 ${
                        isActiveItem(item)
                          ? 'text-accent'
                          : 'text-text-primary hover:text-accent'
                      }`}
                    >
                      {item.label}
                      {/* Animated underline */}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent
                                   transition-transform duration-300 origin-center
                                   ${isActiveItem(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                      />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuOpen}
            className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
            aria-label="Open menu"
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
