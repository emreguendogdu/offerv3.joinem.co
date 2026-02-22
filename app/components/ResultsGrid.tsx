'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from './ui/Icons';
import { cn } from '@/lib/utils';
import { useRevealOnInView } from '@/lib/hooks/useRevealOnInView';

const PATIENTS = [
  { src: 'reviews/big-5.png', alt: 'Patient 1' },
  { src: 'reviews/avatar-1.png', alt: 'Patient 2' },
  { src: 'reviews/avatar-5.png', alt: 'Patient 3' },
  { src: 'reviews/big-6.png', alt: 'Patient 4' },
  { src: 'reviews/reviews-5.png', alt: 'Patient 5' },
  { src: 'reviews/reviews-6.png', alt: 'Patient 6' },
  { src: 'reviews/big-3.png', alt: 'Patient 7' },
];
const STAT_BADGES = [
  '6x more weight loss than exercise and diet alone',
  'Lose an average of 18% of your body weight',
  '93% kept the weight off for good',
];
const BADGE_DELAY_STEP_MS = 140;
const FOOTNOTE_DELAY_MS = STAT_BADGES.length * BADGE_DELAY_STEP_MS + 120;
const MOBILE_SAFE_HIDDEN_REVEAL_CLASS =
  'opacity-0 translate-y-8 md:translate-y-[150px] motion-reduce:opacity-100 motion-reduce:translate-y-0';
const FOOTNOTE_HIDDEN_REVEAL_CLASS =
  'opacity-0 translate-y-0 md:translate-y-[150px] motion-reduce:opacity-100 motion-reduce:translate-y-0';

export function ResultsGrid() {
  const { ref: statsRef, isVisible: areStatsVisible } =
    useRevealOnInView<HTMLDivElement>({
      hiddenClassName: MOBILE_SAFE_HIDDEN_REVEAL_CLASS,
    });

  const footnoteRevealClassName = areStatsVisible
    ? 'opacity-100 translate-y-0'
    : FOOTNOTE_HIDDEN_REVEAL_CLASS;

  return (
    <section className="bg-white overflow-hidden">
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
        <div className="mt-8 md:mt-10 md:mb-13.5 grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-3 w-[120%] mx-auto -translate-x-[10%] md:translate-x-0 h-auto aspect-472/350 md:aspect-auto md:h-[600px] md:w-fit overflow-x-hidden overflow-y-clip">
          {/* Column 1 */}
          <div className="flex flex-col gap-1 md:gap-3 mb-8 md:mb-0">
            <ImageWrapper className="h-1/3">
              <Image
                aria-hidden
                src={`/images/${PATIENTS[0].src}`}
                alt={PATIENTS[0].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
            <ImageWrapper className="h-2/3">
              <Image
                aria-hidden
                src={`/images/${PATIENTS[1].src}`}
                alt={PATIENTS[1].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-1 md:gap-3 mt-8 md:mt-0">
            <ImageWrapper className="h-full">
              <Image
                aria-hidden
                src={`/images/${PATIENTS[2].src}`}
                alt={PATIENTS[2].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
            <ImageWrapper className="h-full">
              <Image
                aria-hidden
                src={`/images/${PATIENTS[3].src}`}
                alt={PATIENTS[3].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
          </div>

          {/* Column 3 */}
          <ImageWrapper className="mb-8 md:mb-0 h-[calc(100%-2rem)] md:h-full">
            <Image
              aria-hidden
              src={`/images/${PATIENTS[4].src}`}
              alt={PATIENTS[4].alt}
              fill
              className="object-cover rounded-[inherit]"
            />
          </ImageWrapper>

          {/* Column 4 */}
          <div className="flex-col gap-3 hidden md:flex">
            <ImageWrapper className="h-2/3">
              <Image
                aria-hidden
                src={`/images/${PATIENTS[5].src}`}
                alt={PATIENTS[5].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
            <ImageWrapper className="h-1/3">
              <Image
                aria-hidden
                src={`/images/${PATIENTS[6].src}`}
                alt={PATIENTS[6].alt}
                fill
                className="object-cover rounded-[inherit]"
              />
            </ImageWrapper>
          </div>
        </div>

        {/* 3 stat badges */}
        <div className="flex flex-col w-full max-w-[70rem] gap-5 mx-auto">
          <div
            ref={statsRef}
            className="mt-10 flex flex-wrap items-center justify-start md:justify-center gap-6"
          >
            {STAT_BADGES.map((badge, index) => (
              <StatBadge
                key={badge}
                text={badge}
                index={index}
                isVisible={areStatsVisible}
              />
            ))}
          </div>
          {/* Text */}
          <div
            style={{ transitionDelay: `${FOOTNOTE_DELAY_MS}ms` }}
            className={`flex w-full items-start justify-start md:justify-center transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${footnoteRevealClassName}`}
          >
            <p className="text-xs text-[#38312C]">
              * Stat badge data based on Embody patients over their first 6
              months of treatment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBadge({
  text,
  index,
  isVisible,
}: {
  text: string;
  index: number;
  isVisible: boolean;
}) {
  const revealClassName = isVisible
    ? 'opacity-100 translate-y-0'
    : MOBILE_SAFE_HIDDEN_REVEAL_CLASS;

  return (
    <div
      style={{ transitionDelay: `${index * BADGE_DELAY_STEP_MS}ms` }}
      className={`flex items-center gap-2 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${revealClassName}`}
    >
      <Check />
      <span className="text-lg">
        {text}
        <sup className="ml-0.5 align-super text-[0.65em]">*</sup>
      </span>
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
        'relative aspect-305/295 w-full lg:w-[244px] md:max-w-none 2xl:w-[305px] overflow-hidden rounded-3xl md:rounded-[50px]',
        className,
      )}
    >
      {children}
    </div>
  );
};
