import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "hi i'm alfred.",
  description: "Alfred Liu's personal website.",
  metadataBase: new URL('https://alfred-liu-minimal.alfredliu9.chatgpt.site'),
  openGraph: {
    title: "hi i'm alfred.",
    description: "Alfred Liu's personal website.",
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "hi i'm alfred.",
    description: "Alfred Liu's personal website.",
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
