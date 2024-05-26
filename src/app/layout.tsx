import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import ReactQueryProvider from '@/providers/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vehicle Data List',
  description: 'Realtime vehicle data list with Next.js and React Query',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <Suspense>{children}</Suspense>
          </main>
          <div id="modal-root"></div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
