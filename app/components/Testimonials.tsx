'use client';

import React from 'react';
import Image from 'next/image';
import { Stars, Check } from './ui/Icons';
import { Button } from './ui/Buttons';
import { cn } from '@/lib/utils';
import { useRevealOnInView } from '@/lib/hooks/useRevealOnInView';

const QUOTE_HIDDEN_CLASS =
  'opacity-0 translate-y-[9.375rem] motion-reduce:opacity-10 motion-reduce:translate-y-0';
const QUOTE_VISIBLE_CLASS = 'opacity-10 translate-y-0';

export function Testimonials() {
  const { ref: bigTestimonialRef, revealClassName: bigTestimonialRevealClass } =
    useRevealOnInView<HTMLDivElement>();

  return (
    <section className="bg-white px-4">
      <div className="mx-auto max-w-[75rem]">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <h2 className="font-display text-3xl leading-snug">
            The results speak for themselves.
          </h2>
          <div>
            <p className="text-xl leading-relaxed text-gray-600">
              Sometimes you have to see it to believe it. GLP-1 medication can
              be{' '}
              <strong className="font-bold text-primary">life-changing</strong>{' '}
              and improves mood, sleep, energy and longevity. Photos,
              testimonials and results are from Embody patients.
            </p>
            <div className="mt-5">
              <Button
                variant="dark"
                className="bg-brand-brown hover:bg-black tracking-[0.08rem] w-full md:w-fit py-2.5"
              >
                I&apos;m Ready, Let&apos;s Go
              </Button>
            </div>
          </div>
        </div>

        {/* Big testimonial */}
        <div
          ref={bigTestimonialRef}
          className={`pt-12 md:pt-24 text-center w-fit mx-auto transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${bigTestimonialRevealClass}`}
        >
          <p className=" text-gray-500">10,000+ Patients Agree</p>
          <div className="mt-2 flex justify-center">
            <Stars starClassName="w-12 h-18 text-[#E1CAA0]" />
          </div>
          <h3 className="mt-4 font-display text-3xl text-[2rem] md:text-4xl">
            &ldquo;When nothing else worked,{' '}
            <strong className="text-primary">Embody did</strong>
            &rdquo;
          </h3>
          <div className="mt-2 text-sm flex items-center justify-center md:justify-end gap-1.5  text-gray-500">
            <Check /> Verified Embody Customer
          </div>
        </div>

        {/* Floating testimonials around vial */}
        <div className="relative flex items-center justify-center pt-20 pb-10 h-full min-h-[620px] md:min-h-[700px] overflow-visible">
          {/* Center vial */}
          <div className="relative z-10 h-[350px] w-[220px] md:h-full md:w-[440px] aspect-732/1096 perspective-distant md:-translate-x-[12.5%]">
            <div className="relative h-full w-full transform-gpu origin-bottom transform-[rotateZ(10deg)_rotateY(-12deg)] md:transform-[rotateZ(10deg)_rotateY(-5deg)]">
              <div className="relative h-full w-full animate-float">
                <Image
                  src="/images/products/inj_tirz.webp"
                  alt="Embody GLP-1+GIP Tirzepatide vial"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Floating quotes */}
          <div>
            {/* Left side */}
            <TestimonialItem
              align="right"
              text="The intake only took a couple minutes."
              className="top-[4%] -left-[2%] max-w-[170px] md:top-[5%] md:left-[6%] md:max-w-[360px]"
            />
            <TestimonialItem
              align="right"
              text="I’m eating normal portions again. I wish I did this sooner."
              className="top-[24%] left-[0%] max-w-[190px] md:top-[30%] md:right-[15%] md:max-w-[520px]"
              delayMs={110}
            />
            <TestimonialItem
              align="right"
              text="I didn’t expect it to feel this manageable!"
              className="top-[52%] -left-[1%] max-w-[170px] md:top-[55%] md:left-[0%] md:max-w-[360px]"
            />
            {/* Right side */}
            <TestimonialItem
              text="Support has been really responsive!"
              className="top-[10%] -right-[3%] max-w-[180px] md:top-[20%] md:-right-[0%] md:max-w-[360px]"
              align="center"
            />
            <TestimonialItem
              text="Getting started was surprisingly simple."
              className="top-[38%] -right-[2%] max-w-[180px] md:top-[40%] md:-right-[4%] md:max-w-[360px]"
              align="center"
            />
            <TestimonialItem
              text="It just fits into my routine."
              className="top-[74%] right-[1%] max-w-[165px] md:top-[65%] md:right-[7.5%] md:max-w-[360px]"
              align="center"
            />
          </div>
        </div>

        {/* HSA/FSA bar */}
        <div className="pt-8 md:pt-12  flex items-center justify-center gap-2 text-[1.5rem] md:text-[2rem] md:text-[2.5rem] font-bold text-[#2F2A25]">
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src="/images/HpMphmT9reZWKHyliNJuwSGqX0.png"
              alt="HSA/FSA"
              fill
              className="object-contain"
            />
          </div>
          HSA/FSA <span className="font-normal">Eligible</span>
        </div>
      </div>
    </section>
  );
}

interface TestimonialItemProps {
  text: React.ReactNode;
  className?: string;
  align?: 'left' | 'right' | 'center';
  delayMs?: number;
}

const TestimonialItem = ({
  text,
  className,
  align = 'left',
  delayMs = 0,
}: TestimonialItemProps) => {
  const { ref: itemRef, revealClassName } = useRevealOnInView<HTMLDivElement>({
    hiddenClassName: QUOTE_HIDDEN_CLASS,
    visibleClassName: QUOTE_VISIBLE_CLASS,
  });

  return (
    <div
      ref={itemRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        'absolute max-w-[240px] md:max-w-[360px] transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none',
        revealClassName,
        align === 'left'
          ? 'text-left'
          : align === 'center'
            ? 'text-left'
            : align === 'right'
              ? 'text-right'
              : null,
        className,
      )}
    >
      <p className="text-[1rem] md:text-[2rem] font-semibold leading-[1.2]">
        {text}
      </p>
      <p
        className={cn(
          'mt-2 md:mt-3 flex items-center gap-2 text-[0.75rem] md:text-[0.875rem] font-normal',
          align === 'left'
            ? 'justify-start'
            : align === 'center'
              ? 'justify-center'
              : align === 'right'
                ? 'justify-end'
                : null,
        )}
      >
        <Check className="w-4 h-4 md:w-5 md:h-5" /> Verified Embody Customer
      </p>
    </div>
  );
};
