import { defineRouting } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

const routingConfig = {
  locales: ['en', 'de', 'fr'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/' ,
    '/pathnames': {
      en: '/pathnames',
      de: '/pfadnamen',
      fr: '/noms-de-route'
    }
  }
};

export const routing = defineRouting(routingConfig);

const navigation = createLocalizedPathnamesNavigation(routing);

export const { Link, getPathname, redirect, usePathname, useRouter } = navigation;