import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale)) notFound();

  const messages = await (locale === 'en'
    ? import('../../messages/en.json')
    : import(`../../messages/${locale}.json`));

  return {
    messages: messages.default
  };
});