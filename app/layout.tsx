import type { Metadata } from 'next';
import { Caveat } from 'next/font/google';
import './globals.css';

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'alfred liu',
  description: "alfred liu's projects and marketing work",
  metadataBase: new URL('https://alfredliu.ca'),
  openGraph: {
    title: "hi i'm alfred.",
    description: "alfred liu's projects and marketing work",
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "hi i'm alfred.",
    description: "alfred liu's projects and marketing work",
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={caveat.variable}>{children}</body>
    </html>
  );
}
