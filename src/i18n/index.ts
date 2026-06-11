import type { Locale, Translation } from './types';
import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import { SITE_URL } from '@/data/site';

const translations: Record<Locale, Translation> = { pt, en, es };

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}

export function getAllLocales(): Locale[] {
  return ['pt', 'en', 'es'];
}

export function getLocalePath(locale: Locale): string {
  return translations[locale].path;
}

export interface AlternateUrl {
  locale: Locale;
  langTag: string;
  url: string;
  path: string;
}

export function getAlternateUrls(currentLocale: Locale): AlternateUrl[] {
  return getAllLocales().map((locale) => ({
    locale,
    langTag: translations[locale].langTag,
    url: `${SITE_URL}${translations[locale].path === '/' ? '' : translations[locale].path.replace(/\/$/, '')}`,
    path: translations[locale].path,
  }));
}

export function getCanonicalUrl(locale: Locale): string {
  const path = translations[locale].path;
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path.replace(/\/$/, '')}`;
}

export { type Locale, type Translation };
