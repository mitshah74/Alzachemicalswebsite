import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alza Chemicals',
  description: 'Laboratory chemicals and research supplies for Indian industries.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
