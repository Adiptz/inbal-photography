'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'small' | 'large';
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant styles
  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-[0_2px_8px_rgba(0,0,0,0.1)] focus:ring-accent',
    secondary: 'bg-transparent border border-text-primary text-text-primary hover:bg-text-primary hover:text-white focus:ring-text-primary',
    ghost: 'bg-transparent text-text-primary hover:text-accent focus:ring-accent',
  };

  // Size styles
  const sizeStyles = {
    small: 'text-[13px] px-5 py-2',
    default: 'text-[14px] px-7 py-3.5',
    large: 'text-[15px] px-8 py-4',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
