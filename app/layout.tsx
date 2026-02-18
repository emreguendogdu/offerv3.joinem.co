import type { Metadata } from 'next';
import { Red_Hat_Display, Red_Hat_Text } from 'next/font/google';
import './globals.css';

const redHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Personalized Weight Loss Programs That Work | TrimRX',
  description:
    'Start your weight loss journey with TrimRX. FDA-regulated GLP-1 medications, licensed providers, no insurance required. Starting at $149/month.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${redHatText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
