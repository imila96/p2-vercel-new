import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Index 101: Your Commerce Platform to Sell Online & In Person',
  description: 'Dream big, build fast, and grow far on Index 101. The one commerce platform behind it all.',
  openGraph: {
    title: 'Index 101: Your Commerce Platform to Sell Online & In Person',
    description: 'Dream big, build fast, and grow far on Index 101.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
