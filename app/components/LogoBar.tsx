import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { src: 'U48qcpkacQKAyJbYT82Eg0BVM.png', alt: 'Forbes', w: 90 },
  { src: 'fd3XdCFVeQySyIiCXrlczGl4tIs.png', alt: 'The New York Times', w: 170 },
  { src: 'PAhgK3RUegOS8Mc9SJTTtcY3tp0.png', alt: 'WebMD', w: 100 },
  { src: 'NgTZQOUiAvlr5e289SRKWMCBk2A.png', alt: 'Healthline', w: 140 },
  { src: '350xFQNKQZgsZEX9KIvtISDHdAw.png', alt: 'Fortune', w: 100 },
  { src: 'kjvSCI55yxrVfZIkJdop0opiEw.png', alt: 'Bloomberg', w: 125 },
  { src: 'AMSBsVCTimHLSKGCcjuWndth51U.png', alt: 'Fast Company', w: 140 },
  { src: 'U48qcpkacQKAyJbYT82Eg0BVM.png', alt: 'Forbes', w: 90 },
  { src: 'fd3XdCFVeQySyIiCXrlczGl4tIs.png', alt: 'The New York Times', w: 170 },
  { src: 'PAhgK3RUegOS8Mc9SJTTtcY3tp0.png', alt: 'WebMD', w: 100 },
  { src: 'NgTZQOUiAvlr5e289SRKWMCBk2A.png', alt: 'Healthline', w: 140 },
  { src: '350xFQNKQZgsZEX9KIvtISDHdAw.png', alt: 'Fortune', w: 100 },
  { src: 'kjvSCI55yxrVfZIkJdop0opiEw.png', alt: 'Bloomberg', w: 125 },
  { src: 'AMSBsVCTimHLSKGCcjuWndth51U.png', alt: 'Fast Company', w: 140 },
];

export function LogoBar() {
  return (
    <section className="border-y border-[#ebebeb] bg-white py-12.75 px-10">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent" />
        <div className="logo-ticker flex items-center gap-14 px-4">
          {LOGOS.map((logo, i) => (
            <Image
              key={i}
              src={`/images/${logo.src}`}
              alt={logo.alt}
              width={logo.w}
              height={25}
              className="h-5 w-auto shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
