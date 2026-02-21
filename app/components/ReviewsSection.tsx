import React from 'react';
import Image from 'next/image';
import { Stars } from './ui/Icons';
import { Button } from './ui/Buttons';
import { Marquee } from './ui/Marquee';

// ... (imports remain)

type ImageItem = {
  type: 'image';
  src: string;
  alt?: string;
};

type ReviewItem = {
  type: 'review';
  name: string;
  location: string;
  avatar?: string;
  text: string;
};

type MarqueeContentItem = ImageItem | ReviewItem;

export function ReviewsSection() {
  const topMarquee: MarqueeContentItem[] = [
    {
      type: 'image',
      src: '/images/reviews/PXqJ2sfwTMLRdk9LZr7XAMQinYc.png',
      alt: 'Result 1',
    },
    {
      type: 'review',
      name: 'Lauren M.',
      location: 'Scottsdale, AZ',
      avatar: '/images/reviews/YKzoGJpfFFf1BdjjaSowMezQ8.png',
      text: "I've tried every diet and workout plan out there, but nothing stuck. With Embody, I'm down 37 lbs and for the first time, I don't feel like I'm fighting my own body.",
    },
    {
      type: 'image',
      src: '/images/reviews/J9q5bVSoP1ItX7IQ3rtRNrPDWA.png',
      alt: 'Result 2',
    },
    {
      type: 'review',
      name: 'Nicole S.',
      location: 'Tampa, FL',
      avatar: '/images/reviews/AD7wBSbBjaoJEY2kpZy640pME.png',
      text: "I was nervous to start GLP-1s online, but the process was so simple and the doctor support has been amazing. I'm already down 42 lbs in 4 months.",
    },
    {
      type: 'image',
      src: '/images/reviews/eKEZ1mlvVbuQYZZFRP2HGWM52Y.png',
      alt: 'Result 3',
    },
    {
      type: 'review',
      name: 'Danielle R.',
      location: 'Nashville, TN',
      avatar: '/images/reviews/LJga7ZjWTOSDuC5dyBzOgGSZYfs.png',
      text: "Life Changing. The constant food cravings are finally gone. I feel in control again and I'm down 61 pounds since getting started.",
    },
  ];

  const botMarquee: MarqueeContentItem[] = [
    {
      type: 'review',
      name: 'Erin T.',
      location: 'Denver, CO',
      avatar: '/images/reviews/N51YbqCRIIzwwYPH36B7N9lcGUo.jpg',
      text: "I completed the intake in just a few minutes and had my medication delivered to my door the same week. I'm down 38 lbs and still going... Embody made it truly easy and was so affordable",
    },
    {
      type: 'image',
      src: '/images/reviews/jCpumbS2hmf0bTV4rn63Ex5o.png',
      alt: 'Result 4',
    },
    {
      type: 'review',
      name: 'Tim H.',
      location: 'Austin, TX',
      avatar: '/images/reviews/8jMaqpfuydUeRcai6qscNossfPY.png',
      text: "I've lost over 50 pounds so far and my energy levels are higher than they've been in years. I only wish I started sooner.",
    },
    {
      type: 'image',
      src: '/images/reviews/YDTDeNWqw3fWa6r7VeFWgpXIiDw.png',
      alt: 'Result 5',
    },
    {
      type: 'review',
      name: 'Ashley C.',
      location: 'Charlotte, NC',
      avatar: '/images/reviews/qYFgJk4MbvlC8LvC0cove7Yoi84.png',
      text: "I tried to do it on my own for years. Having a provider guide me through this process made all the difference. I'm down 42 lbs.",
    },
    {
      type: 'image',
      src: '/images/reviews/HVBXeD99wX7b2PnjNTPHMR0Kgw.png',
      alt: 'Result 6',
    },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-4">
          <h2 className="text-[#2F2A25] font-display text-[36px] md:text-[45px] font-medium leading-[1.1] tracking-tight lg:max-w-[500px]">
            There&apos;s a reason people are{' '}
            <span className="text-primary">raving about us.</span>
          </h2>
          <div className="flex flex-col gap-6 lg:max-w-[420px]">
            <p className="text-[#2F2A25] text-base md:text-lg leading-[1.6] opacity-90">
              Join the thousands of people who have trusted Embody to help
              change their lives, achieving significant,{' '}
              <span className="text-primary font-semibold">
                lasting weight loss
              </span>
              .
            </p>
            <div>
              <Button className="bg-[#2D2925] text-white px-10 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase hover:opacity-90 transition-opacity">
                I&apos;M READY, LET&apos;S GO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Layout for All Breakpoints */}
      <div
        className="flex w-full flex-col gap-6"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 12.5%, black 87.5%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 12.5%, black 87.5%, transparent)',
        }}
      >
        {/* Top Marquee */}
        <Marquee className="[--duration:60s]" duration="60s">
          {topMarquee.map((item, index) => (
            <MarqueeItem
              key={`top-${index}`}
              item={item}
              reviewBgClass="bg-[#FFF4E6]"
            />
          ))}
        </Marquee>

        {/* Bottom Marquee */}
        <Marquee reverse className="[--duration:60s]" duration="60s">
          {botMarquee.map((item, index) => (
            <MarqueeItem key={`bot-${index}`} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function MarqueeItem({
  item,
  className,
  reviewBgClass = 'bg-[#F8F9FA]',
}: {
  item: MarqueeContentItem;
  className?: string;
  reviewBgClass?: string;
}) {
  const sizeClasses = className ? '' : 'h-[200px] w-[384px] h-[220px]';
  const reviewSizeClasses = className ? '' : 'w-[384px] h-[220px]';

  if (item.type === 'image') {
    return (
      <div
        className={`relative shrink-0 rounded-[24px] overflow-hidden bg-[#F8F9FA] ${sizeClasses} ${className || ''}`}
      >
        <Image
          src={item.src}
          alt={item.alt || ''}
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      className={`${reviewBgClass} rounded-[24px] p-8 flex flex-col gap-6 shrink-0 justify-between ${reviewSizeClasses} ${className || ''}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {item.avatar ? (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-100">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
                aria-hidden
              />
            </div>
          ) : null}
          <div className="flex flex-col">
            <span className="text-[#2F2A25] font-bold text-base leading-tight">
              {item.name}
            </span>
            <span className="text-[#6B7280] text-[0.625rem] md:text-[0.75rem] leading-tight">
              {item.location}
            </span>
          </div>
        </div>
        <Stars />
      </div>
      <p className="text-[#2F2A25] text-sm opacity-80 leading-[1.6] md:overflow-y-auto custom-scrollbar">
        {item.text}
      </p>
    </div>
  );
}
