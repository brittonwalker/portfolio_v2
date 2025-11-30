import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

import { PageWrapper } from '@/components/page-wrapper';

const neueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/PP-Neue-Montreal/PPNeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PP-Neue-Montreal/PPNeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
});

const radioGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/PP-Radio-Grotesk/PPRadioGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-radio-grotesk',
});

export const metadata: Metadata = {
  title: 'Britton Walker',
  description: 'Portfolio of Britton Walker, a software engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} ${radioGrotesk.variable} antialiased transition-colors duration-300 bg-foreground text-background`}
        style={
          {
            '--background': '#0a0a0a',
            '--foreground': '#f5f5f5',
            '--accent-color': '#ff6f61',
          } as React.CSSProperties
        }
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
