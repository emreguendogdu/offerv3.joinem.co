import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import Script from 'next/script';
import PlausibleProvider from 'next-plausible';
import LandingViewedTracker from './components/LandingViewedEvent';

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
        {/* GTM */}
        <Script id="gtm" strategy="beforeInteractive">{`
          ;((function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TXLL9VGZ'));
        `}</Script>

        {/* Everflow */}
        <Script
          id="everflow-main"
          strategy="beforeInteractive"
          src="https://www.mnbvpo8trk.com/scripts/main.js"
        />
        <Script id="everflow-click" strategy="beforeInteractive">{`
          EF.click({
            offer_id: EF.urlParameter('oid'),
            affiliate_id: EF.urlParameter('affid'),
            source_id: EF.urlParameter('source_id'),
            sub1: EF.urlParameter('sub1'),
            sub2: EF.urlParameter('sub2'),
            sub3: EF.urlParameter('sub3'),
            sub4: EF.urlParameter('sub4'),
            sub5: EF.urlParameter('sub5'),
            uid: EF.urlParameter('uid'),
            transaction_id: EF.urlParameter('_ef_transaction_id'),
          });
        `}</Script>

        {/* Katalys */}
        <Script
          id="katalys"
          strategy="afterInteractive"
          src="https://db.revoffers.com/js/KA-8ZYJMB2WQ4.js"
        />
        <PlausibleProvider domain="joinem.co" />
      </head>
      <body
        className={`${helveticaPro.variable} ${quincy.variable} antialiased`}
      >
        <LandingViewedTracker />
        {/* GTM NoScript */}
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
