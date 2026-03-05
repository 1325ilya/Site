import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'ATELIER NØIR',
  description: 'Minimalist fashion storefront',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
