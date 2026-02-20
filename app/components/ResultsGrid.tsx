'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from './ui/Icons';
import { cn } from '@/lib/utils';
import { useRevealOnInView } from '@/lib/hooks/useRevealOnInView';

const PATIENTS = [
  { src: 'cuZhgpBjeSSAKoMvYFHYO1l4.jpg', alt: 'Patient 1' },
  { src: 'NQqOmeOq8ThEBIlN3sKga1O7QQ0.jpg', alt: 'Patient 2' },
  { src: 'slE7NDw3RqftarmJJbMWWCs0to.jpg', alt: 'Patient 3' },
  { src: 'N51YbqCRIIzwwYPH36B7N9lcGUo.jpg', alt: 'Patient 4' },
  { src: 'mWUMueuLzdw3Ay1FvGSNFxHaWLs.jpg', alt: 'Patient 5' },
  { src: 'RBa6kItPw3GCYCh5RaBEaw8IA.jpg', alt: 'Patient 6' },
  { src: 'eKEZ1mlvVbuQYZZFRP2HGWM52Y.png', alt: 'Patient 7' },
  { src: '6EcuoAeEA3spcOOzKTuXbA5UHAg.jpg', alt: 'Patient 8' },
];
const STAT_BADGES = [
  '6x more weight loss than exercise and diet alone',
  'Lose an average of 18% of your body weight',
  '93% kept the weight off for good',
];
const BADGE_DELAY_STEP_MS = 140;
const FOOTNOTE_DELAY_MS = STAT_BADGES.length * BADGE_DELAY_STEP_MS + 120;

export function ResultsGrid() {
  const { ref: footnoteRef, revealClassName: footnoteRevealClassName } =
    useRevealOnInView<HTMLDivElement>();

  return (
    <section className="bg-white py-16">
      <div className="w-full mx-auto md:max-w-[81rem] px-4 text-left md:text-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl md:text-5xl text-left md:text-center font-medium">
            The change we&apos;ve all been waiting for.
          </h2>
          <p className="text-left md:text-center text-lg">
            Join the over{' '}
            <span className="text-primary font-bold">100,000</span> Embody
            patients and we&apos;ll help you finally get real, lasting results.
          </p>
        </div>

        {/* People photo grid */}
        <div className="mt-8 md:mt-10 md:mb-13.5 grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-3 w-[120%] mx-auto -translate-x-[10%] md:translate-x-0 h-auto aspect-472/350 md:aspect-auto md:h-[600px] md:w-fit overflow-x-clip">
          {/* Column 1 */}
          <div className="flex flex-col gap-1 md:gap-3 mb-8 md:mb-0">
            <ImageWrapper className="h-1/3">
              <Image
                src={`/images/${PATIENTS[0].src}`}
                alt={PATIENTS[0].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
            <ImageWrapper className="h-2/3">
              <Image
                src={`/images/${PATIENTS[4].src}`}
                alt={PATIENTS[4].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-1 md:gap-3 mt-8 md:mt-0">
            <ImageWrapper className="h-full">
              <Image
                src={`/images/${PATIENTS[1].src}`}
                alt={PATIENTS[1].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
            <ImageWrapper className="h-full">
              <Image
                src={`/images/${PATIENTS[2].src}`}
                alt={PATIENTS[2].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
          </div>

          {/* Column 3 */}
          <ImageWrapper className="mb-8 md:mb-0 h-[calc(100%-2rem)] md:h-full">
            <Image
              src={`/images/${PATIENTS[5].src}`}
              alt={PATIENTS[5].alt}
              fill
              className="object-cover rounded-[inherit]"
            />
          </ImageWrapper>

          {/* Column 4 */}
          <div className="flex-col gap-3 hidden md:flex">
            <ImageWrapper className="h-2/3">
              <Image
                src={`/images/${PATIENTS[3].src}`}
                alt={PATIENTS[3].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
            <ImageWrapper className="h-1/3">
              <Image
                src={`/images/${PATIENTS[7].src}`}
                alt={PATIENTS[7].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
          </div>
        </div>

        {/* 3 stat badges */}
        <div className="flex flex-col w-fit gap-5 mx-auto">
          <div className="mt-10 flex flex-wrap items-center justify-start md:justify-center gap-6">
            {STAT_BADGES.map((badge, index) => (
              <StatBadge key={badge} text={badge} index={index} />
            ))}
          </div>
          {/* Text */}
          <div
            ref={footnoteRef}
            style={{ transitionDelay: `${FOOTNOTE_DELAY_MS}ms` }}
            className={`flex w-full items-start transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${footnoteRevealClassName}`}
          >
            <p className="text-xs text-[#38312C]">
              * Data based on Embody patients over their first 6 months of
              treatment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBadge({ text, index }: { text: string; index: number }) {
  const { ref: badgeRef, revealClassName } =
    useRevealOnInView<HTMLDivElement>();

  return (
    <div
      ref={badgeRef}
      style={{ transitionDelay: `${index * BADGE_DELAY_STEP_MS}ms` }}
      className={`flex items-center gap-2 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${revealClassName}`}
    >
      <Check />
      <span className="text-lg">{text}</span>
    </div>
  );
}

const ImageWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative aspect-305/295 w-full max-w-[151px] md:w-[244px] md:max-w-none 2xl:w-[305px] overflow-hidden rounded-3xl md:rounded-[50px]',
        className,
      )}
    >
      {children}
    </div>
  );
};
