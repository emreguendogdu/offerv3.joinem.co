import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { src: 'U48qcpkacQKAyJbYT82Eg0BVM.png', alt: 'Forbes', w: 100 },
  { src: 'fd3XdCFVeQySyIiCXrlczGl4tIs.png', alt: 'The New York Times', w: 180 },
  { src: 'PAhgK3RUegOS8Mc9SJTTtcY3tp0.png', alt: 'WebMD', w: 110 },
  { src: 'NgTZQOUiAvlr5e289SRKWMCBk2A.png', alt: 'Healthline', w: 150 },
  { src: '350xFQNKQZgsZEX9KIvtISDHdAw.png', alt: 'Fortune', w: 110 },
  { src: 'kjvSCI55yxrVfZIkJdop0opiEw.png', alt: 'Bloomberg', w: 135 },
];

export function LogoBar() {
  return (
    <section className="border-y border-[#F3F4F6] bg-white py-12">
      <div className="mx-auto max-w-[77.625rem] px-4">
        <div className="flex overflow-x-auto md:overflow-x-visible items-center justify-between gap-8 md:gap-12 grayscale opacity-50 pb-4 md:pb-0 snap-x snap-mandatory px-4 -mx-4 md:px-0 md:mx-0">
          {LOGOS.map((logo, i) => (
            <div
              key={i}
              className="relative h-6 md:h-8 w-auto min-w-[100px] shrink-0 flex items-center justify-center snap-center"
            >
              <Image
                src={`/images/${logo.src}`}
                alt={logo.alt}
                width={logo.w}
                height={32}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
