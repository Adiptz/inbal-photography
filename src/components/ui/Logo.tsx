'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'default' | 'large';
  linkToHome?: boolean;
}

export default function Logo({
  variant = 'dark',
  size = 'default',
  linkToHome = true
}: LogoProps) {
  const locale = useLocale();

  // Logo text - always English
  const mainText = 'INBAL PERETZ';
  const subtitleText = 'photography';

  // Color based on variant
  const textColor = variant === 'light' ? 'text-white' : 'text-text-primary';
  const subtitleColor = variant === 'light' ? 'text-white/80' : 'text-text-secondary';

  // Size classes
  const mainSize = size === 'large'
    ? 'text-[36px] md:text-[48px]'
    : 'text-[28px] md:text-[36px]';
  const subtitleSize = size === 'large'
    ? 'text-[14px] md:text-[16px]'
    : 'text-[12px] md:text-[14px]';

  const logoContent = (
    <div className="flex flex-col items-center">
      {/* Main logo text */}
      <span
        className={`font-sans font-light ${mainSize} ${textColor} leading-tight tracking-[0.15em]`}
        style={{
          textShadow: variant === 'light' ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        {mainText}
      </span>

      {/* Subtitle with letter-spacing */}
      <span
        className={`font-sans font-light ${subtitleSize} ${subtitleColor} tracking-[0.3em]`}
        style={{
          textShadow: variant === 'light' ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        {subtitleText}
      </span>
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        href={`/${locale}`}
        className="inline-block hover:opacity-80 transition-opacity duration-200"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
