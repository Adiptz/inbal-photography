import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['he'],
  defaultLocale: 'he',
  localePrefix: 'never'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
