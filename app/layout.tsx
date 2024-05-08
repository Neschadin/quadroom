import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import { ChakraProvider } from '@/src/providers';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QUADROOM - Web partner for developers',
  description:
    'A web solutions agency in the residential, commercial and mixed-use real estate industries, an industry leader and partner for medium and large businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
