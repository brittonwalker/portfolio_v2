import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

import { PageWrapper } from '@/components/page-wrapper';
import { colors } from '@/lib/colors';
import { LoadingProvider } from '@/context/loading-context';
import { PageLoader } from '@/components/page-loader';

const neueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/PP-Neue-Montreal/PPNeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/PP-Neue-Montreal/PPNeueMontreal-Medium.woff2',
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
    <html
      lang="en"
      style={
        {
          '--background': '#0a0a0a',
          '--foreground': '#f5f5f5',
          '--accent': '#3dbd5d',
          '--safe': '#3dbd5d',
        } as React.CSSProperties
      }
    >
      <body
        className={`${neueMontreal.variable} ${radioGrotesk.variable} antialiased transition-colors duration-300 bg-background text-foreground`}
      >
        <LoadingProvider>
          {/* <PageLoader />  */}
          <PageWrapper>{children}</PageWrapper>
        </LoadingProvider>

        {/* <PageWrapper>{children}</PageWrapper> */}
      </body>
    </html>
  );
}
