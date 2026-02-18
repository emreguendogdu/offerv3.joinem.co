import React from 'react';
import Image from 'next/image';
import { Stars } from './ui/Icons';
import { Button } from './ui/Buttons';
import { Marquee } from './ui/Marquee';

export function ReviewsSection() {
  const topMarquee = [
    {
      type: 'image',
      src: 'https://framerusercontent.com/images/PXqJ2sfwTMLRdk9LZr7XAMQinYc.png',
      alt: 'Result 1',
    },
    {
      type: 'review',
      name: 'Jamie K.',
      avatar:
        'https://framerusercontent.com/images/YKzoGJpfFFf1BdjjaSowMezQ8.png',
      text: 'The whole process was way easier than I thought. The questions made sense, and when I had concerns, they actually responded quickly (like, same day!). My prescription arrived on time and the support has been amazing. Wish I started sooner!',
    },
    {
      type: 'image',
      src: 'https://framerusercontent.com/images/J9q5bVSoP1ItX7IQ3rtRNrPDWA.png',
      alt: 'Result 2',
    },
    {
      type: 'review',
      name: 'Terika S.',
      avatar:
        'https://framerusercontent.com/images/8jMaqpfuydUeRcai6qscNossfPY.png',
      text: "I've tried so many things before this - diets, gym memberships, you name it. Nothing worked. But my provider here? She actually gets it. Felt like talking to a friend who happens to be a doctor. I'm finally seeing real results!",
    },
    {
      type: 'image',
      src: 'https://framerusercontent.com/images/eKEZ1mlvVbuQYZZFRP2HGWM52Y.png',
      alt: 'Result 3',
    },
    {
      type: 'review',
      name: 'Billy M.',
      avatar:
        'https://framerusercontent.com/images/LJga7ZjWTOSDuC5dyBzOgGSZYfs.png',
      text: "Honestly, I was skeptical at first. But Ms. Gonzalez really took the time to listen to me. She explained everything about the medication and what to expect. No judgment, just real help. I'm down 28 pounds in 3 months and feeling like myself again!",
    },
  ];

  const botMarquee = [
    {
      type: 'review',
      name: 'Lou-Ann T.',
      text: "I'm 13 pounds away from my goal weight! Can you believe it? The doctors and staff have been so supportive through this whole journey. I asked to stay on maintenance for a bit to get used to my new routine, and they totally understood. This is the real deal!",
    },
    {
      type: 'image',
      src: 'https://framerusercontent.com/images/jCpumbS2hmf0bTV4rn63Ex5o.png',
      alt: 'Result 4',
    },
    {
      type: 'review',
      name: 'Elizabeth R.',
      avatar:
        'https://framerusercontent.com/images/AD7wBSbBjaoJEY2kpZy640pME.png',
      text: "My clinician walked me through everything step by step. No medical jargon, just straight talk about what to expect, when I'd see changes, and how to adjust if needed. It's been 4 months and I've lost 22 pounds. My energy is through the roof!",
    },
    {
      type: 'image',
      src: 'https://framerusercontent.com/images/YDTDeNWqw3fWa6r7VeFWgpXIiDw.png',
      alt: 'Result 5',
    },
    {
      type: 'review',
      name: 'Dan P.',
      avatar:
        'https://framerusercontent.com/images/qYFgJk4MbvlC8LvC0cove7Yoi84.png',
      text: "Dolores was awesome - super friendly and answered all my questions without making me feel rushed. I was nervous about starting, but she made it easy. Just got my first shipment and I'm actually excited about this journey for once!",
    },
    {
      type: 'image',
      src: 'https://framerusercontent.com/images/HVBXeD99wX7b2PnjNTPHMR0Kgw.png',
      alt: 'Result 6',
    },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] px-4 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-[#2F2A25] font-display text-[36px] md:text-[45px] font-medium leading-[1.1] tracking-tight lg:max-w-[500px]">
            There&apos;s a reason people are <br />
            <span className="text-[#FB923C]">raving about us.</span>
          </h2>
          <div className="flex flex-col gap-6 lg:max-w-[420px]">
            <p className="text-[#2F2A25] text-base md:text-[17px] leading-[1.6] opacity-90">
              Join the thousands of people who have trusted TrimRx to help
              change their lives, achieving significant,{' '}
              <span className="text-[#FB923C] font-semibold">
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

      <div className="flex flex-col gap-6 w-full">
        {/* Top Marquee */}
        <Marquee pauseOnHover className="[--duration:60s]" duration="60s">
          {topMarquee.map((item, index) => (
            <MarqueeItem key={`top-${index}`} item={item} />
          ))}
        </Marquee>

        {/* Bottom Marquee */}
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:60s]"
          duration="60s"
        >
          {botMarquee.map((item, index) => (
            <MarqueeItem key={`bot-${index}`} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function MarqueeItem({ item }: { item: any }) {
  if (item.type === 'image') {
    return (
      <div className="relative h-[320px] w-[500px] shrink-0 rounded-[24px] overflow-hidden bg-[#F8F9FA]">
        <Image
          src={item.src}
          alt={item.alt || ''}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-[400px] bg-[#F8F9FA] rounded-[24px] p-8 flex flex-col gap-6 shrink-0 h-[320px] justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {item.avatar ? (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-100">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          ) : null}
          <span className="text-[#2F2A25] font-bold text-base">
            {item.name}
          </span>
        </div>
        <Stars />
      </div>
      <p className="text-[#2F2A25] text-[15px] leading-[1.6] opacity-80 overflow-y-auto custom-scrollbar">
        {item.text}
      </p>
    </div>
  );
}
