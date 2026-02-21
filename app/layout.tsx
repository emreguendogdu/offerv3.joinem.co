import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import Script from 'next/script';

const quincy = localFont({
  src: [
    {
      path: '../public/fonts/Quincy/Quincy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Quincy/Quincy-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-quincy',
  display: 'swap',
});

const helveticaPro = localFont({
  src: [
    {
      path: '../public/fonts/Helvetica-Pro/HelveticaProRoman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Helvetica-Pro/HelveticaProBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-pro',
  display: 'swap',
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
      <head>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TXLL9VGZ');
        `}</Script>
      </head>
      <body
        className={`${helveticaPro.variable} ${quincy.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXLL9VGZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
