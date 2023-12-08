import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google';

export const fontBellefair = Bellefair({
  subsets: ['latin'],
  variable: '--font-bellefair',
  weight: ['400'],
  display: 'swap',
  adjustFontFallback: false,
});

export const fontBarlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

export const fontBarlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
});
