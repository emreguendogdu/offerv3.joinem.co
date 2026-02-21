'use client';

import React from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/brand';
import { useAppendSearchParams } from '@/lib/hooks/useAppendSearchParams';
import { Button } from '@/app/components/ui/Buttons';

const GOAL_OPTIONS = [
  'Losing 1-20 lbs',
  'Losing 21-50 lbs',
  'Losing 51+ lbs',
  'Not sure, I just want to lose the weight',
];

function OptionSelect({ text, href }: { text: string; href: string }) {
  const hrefWithQuery = useAppendSearchParams(href) || href;

  return (
    <Link
      href={hrefWithQuery}
      className="bg-white rounded-[10px] px-[1.5625rem] py-[1.6875rem] w-full text-sm md:text-base font-semibold text-black border border-gray-100"
    >
      {text}
    </Link>
  );
}

export function WeightLossGoalQuestion() {
  return (
    <section className="px-4 md:px-8 w-full">
      {/* Card */}
      <div className="flex items-center justify-center max-w-235 py-10 px-6 md:py-27.5 md:px-15  bg-accent-light rounded-[50px] mx-auto">
        {/* Content Wrapper */}
        <div className="relative w-full max-w-120">
          <h2 className="text-[1.875rem] font-semibold text-center mb-8 md:mb-12.5 text-black leading-tight">
            What&apos;s your weight loss goal?
          </h2>

          <div className="flex flex-col gap-4 w-full md:max-w-[600px] mb-8">
            {GOAL_OPTIONS.map((option, idx) => (
              <OptionSelect key={idx} text={option} href={BRAND.ctaUrl} />
            ))}
          </div>

          <Button
            href={BRAND.ctaUrl}
            className="px-[3.125rem] py-[1.375rem] text-[0.75rem] tracking-[0.075rem] font-medium md:w-full"
          >
            CONTINUE
          </Button>
        </div>
      </div>
    </section>
  );
}
