import React from 'react';
import Image from 'next/image';
import { Stars, Check } from './ui/Icons';
import { Button } from './ui/Buttons';
import { cn } from '@/lib/utils';

export function Testimonials() {
  return (
    <section className="bg-white pt-16 px-4">
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
              testimonials and results are from TrimRX patients.
            </p>
            <div className="mt-5">
              <Button
                variant="dark"
                className="bg-brand-brown hover:bg-black tracking-[1.28px] w-full md:w-fit py-2.5"
              >
                I&apos;m Ready, Let&apos;s Go
              </Button>
            </div>
          </div>
        </div>

        {/* Big testimonial */}
        <div className="pt-50 text-center w-fit mx-auto">
          <p className=" text-gray-500">10,000+ Patients Agree</p>
          <div className="mt-2 flex justify-center">
            <Stars starClassName="w-12 h-18 text-[#E1CAA0]" />
          </div>
          <h3 className="mt-4 font-display text-3xl text-[2rem] md:text-4xl">
            &ldquo;When nothing else worked,{' '}
            <strong className="text-primary">TrimRx did</strong>
            &rdquo;
          </h3>
          <div className="mt-2 text-sm flex items-center justify-center md:justify-end gap-1.5  text-gray-500">
            <Check /> Verified TrimRx Customer
          </div>
        </div>

        {/* Floating testimonials around vial */}
        <div className="relative mt-20 flex items-center justify-center py-20 h-full min-h-[500px] md:min-h-[700px] overflow-visible">
          {/* Center vial */}
          <div className="relative z-10 h-[350px] w-[220px] md:h-full md:w-[440px] animate-float aspect-[732/1096]">
            <Image
              src="/images/oVR6o9ucEhQOGyxqILvggd8TuAc.png"
              alt="TrimRX GLP-1+GIP vial"
              fill
              className="object-contain"
            />
          </div>

          {/* Floating quotes */}
          <div>
            {/* Left side */}
            <TestimonialItem
              align="right"
              text={<>Very easy and convenient for a very busy working lady.</>}
              className="top-[7%] left-[2%] md:top-[5%] md:left-[6%]"
            />
            <TestimonialItem
              align="right"
              text={
                <>
                  Everyone I have come in contact with has been so kind a
                  helpful!
                </>
              }
              className="top-[42%] left-[5%] md:top-[30%] md:left-[17%] md:max-w-[520px]"
            />
            <TestimonialItem
              align="right"
              text={<>Very nice and informative Dr. Quick and easy!</>}
              className="top-[74%] left-[0%] md:top-[45%] md:left-[0%]"
            />
            {/* Right side */}
            <TestimonialItem
              text="...the weight vanished!"
              className="top-[28%] right-[0%] md:top-[20%] md:-right-[0%]"
              align="center"
            />
            <TestimonialItem
              text="Every person I have contact with shows compassion."
              className="top-[56%] right-[-1%] md:top-[40%] md:-right-[4%]"
              align="center"
            />
            <TestimonialItem
              text={<>NP was very helpful and friendly!</>}
              className="top-[91%] right-[2.5%] md:top-[65%] md:right-[7.5%]"
              align="center"
            />
          </div>
        </div>

        {/* HSA/FSA bar */}
        <div className="py-20 flex items-center justify-center gap-2 text-[24px] md:text-[32px] md:text-[40px] font-bold text-[#2F2A25]">
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
}

const TestimonialItem = ({
  text,
  className,
  align = 'left',
}: TestimonialItemProps) => {
  return (
    <div
      className={cn(
        'absolute max-w-[240px] md:max-w-[360px] opacity-10',
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
      <p className="text-[16px] md:text-[32px] font-semibold leading-[1.2]">
        {text}
      </p>
      <p
        className={cn(
          'mt-2 md:mt-3 flex items-center gap-2 text-[12px] md:text-[14px] font-normal',
          align === 'left'
            ? 'justify-start'
            : align === 'center'
              ? 'justify-center'
              : align === 'right'
                ? 'justify-end'
                : null,
        )}
      >
        <Check className="w-4 h-4 md:w-5 md:h-5" /> Verified TrimRx Customer
      </p>
    </div>
  );
};
