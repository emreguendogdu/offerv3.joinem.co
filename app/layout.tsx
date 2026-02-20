import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Personalized Weight Loss Programs That Work | Embody',
  description:
    'Start your weight loss journey with Embody. FDA-regulated GLP-1 medications, licensed providers, no insurance required. Starting at $149/month.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
