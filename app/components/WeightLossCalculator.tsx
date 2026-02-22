'use client';

import { useState } from 'react';
import { Button } from './ui/Buttons';
import { useRevealOnInView } from '@/lib/hooks/useRevealOnInView';

export function WeightLossCalculator() {
  const [weight, setWeight] = useState(200);
  const { ref: sectionRef, revealClassName } = useRevealOnInView<HTMLElement>();

  const minWeight = 140;
  const maxWeight = 400;
  const lossPotentialPercentage = 0.235; // Based on 47/200

  const weightLossPotential = Math.round(weight * lossPotentialPercentage);
  const percentage = ((weight - minWeight) / (maxWeight - minWeight)) * 100;

  return (
    <section
      ref={sectionRef}
      className={`px-4 max-w-315 mx-auto md:px-7.5 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${revealClassName}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left */}
        <div className="w-full md:w-[40%]">
          <h2 className="font-display text-3xl font-bold leading-snug">
            Want to <strong className="text-primary ">reach your goal</strong>{' '}
            weight fast?
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            It&apos;s not magic—it&apos;s{' '}
            <strong className="text-primary ">metabolic science</strong>. GLP-1
            is a naturally occurring hormone that regulates appetite and blood
            sugar,{' '}
            <strong className="text-primary ">improving your metabolism</strong>{' '}
            and knocking out cravings.
          </p>
          <div className="mt-6">
            <Button variant="dark" className="px-10 py-3 w-fit">
              Get Started
            </Button>
          </div>
        </div>
        {/* Right */}
        <div className="rounded-2xl bg-accent-light p-8 md:px-15 md:pb-10 w-full md:w-[60%] shadow-sm">
          <p className="text-base font-medium text-gray-600">
            Select your current weight:
          </p>
          <p className="mt-2 text-right text-4xl font-light text-brand-dark">
            {weight} <span className="text-lg">lbs</span>
          </p>

          <div className="relative mt-6 h-7 w-full">
            {/* Range Track Background */}
            <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-[200px] bg-[hsl(0,0%,90%)]" />

            {/* Range Progress Bar */}
            <div
              className="absolute top-1/2 h-2 -translate-y-1/2 rounded-[200px] bg-accent"
              style={{ width: `${percentage}%` }}
            />

            {/* Range Thumb Handle */}
            <div
              className="pointer-events-none absolute top-1/2 z-10 h-7 w-7 -translate-y-1/2 rounded-full border-[5px] border-accent bg-white shadow-[0_0_4px_0_#E4D8D8]"
              style={{ left: `calc(${percentage}% - 0.875rem)` }}
            />

            <input
              type="range"
              min={minWeight}
              max={maxWeight}
              step="1"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value))}
              aria-label="Current weight in pounds"
              className="relative z-20 m-0 h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
            />
          </div>

          <div className="mt-8 flex items-center justify-between w-full gap-4">
            <p className="text-base font-medium text-gray-600">
              Weight loss potential:
            </p>
            <p className="text-right text-[3.125rem] md:text-[4.375rem] tracking-[0] font-light text-brand-dark inline-flex gap-2 items-end leading-none">
              <strong className="font-bold">{weightLossPotential}</strong>{' '}
              <span className="mb-4 md:mb-2 text-2xl">lbs</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
