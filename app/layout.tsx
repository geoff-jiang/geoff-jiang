import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';

import './globals.css';

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://geoff-jiang.khaedra.chatgpt.site'),
  title: 'Geoff Jiang — Software Developer',
  description: 'UBC computer science student building reliable applications, expressive web experiences, and AI-assisted developer tools.',
  openGraph: {
    title: 'Geoff Jiang — Software Developer',
    description: 'Reliable applications, expressive web experiences, and AI-assisted developer tools.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Geoff Jiang — Software Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geoff Jiang — Software Developer',
    description: 'Reliable applications, expressive web experiences, and AI-assisted developer tools.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
