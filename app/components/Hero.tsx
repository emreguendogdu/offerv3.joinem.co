import React from 'react';
import Image from 'next/image';
import { Stars, Check } from './ui/Icons';
import { Button } from './ui/Buttons';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full mx-auto max-w-259 flex flex-col items-center gap-5"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center pt-2 pb-7 gap-6">
          {/* Trust bar */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 text-brand-brown">
            <Stars />
            <span className="inline-flex gap-2.5 items-center flex-wrap">
              <span>
                <strong>4.9</strong> Excellent Rating
              </span>
              <span className="opacity-30">•</span>
              <span>
                <strong>350,000+</strong> happy patients
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-extrabold leading-none text-[2.8125rem] md:text-5xl text-center">
            Lose <span className="text-primary">1–2lbs</span> per{' '}
            <br className="inline sm:hidden" />
            week!
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-xl text-brand-brown">
            The proven way to lose 15% of your body weight fast!
          </p>

          {/* Pricing line */}
          <p className="text-lg text-center">
            Starting at{' '}
            <span className="font-display text-[1.5625rem] sm:text-3xl font-black text-primary">
              $149
            </span>{' '}
            – Compounded GLP-1 &amp; GLP-1 + GIP in stock
          </p>

          {/* Feature checklist */}
          <div className="space-y-4 pt-2 text-left">
            <div className="flex items-start gap-3">
              <Check />
              <span className="text-lg">
                100% online medical review with licensed U.S. providers
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check />
              <span className="text-lg hidden sm:inline-block">
                <strong>No insurance required</strong>{' '}
                <span className="mx-1 opacity-35">·</span> Simple monthly plan
              </span>

              <span className="inline-block sm:hidden">
                <strong>Same price, every dose. No hidden fees.</strong>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check />
              <span className="text-lg
              ">
                Transparent pricing <span className="mx-1 opacity-35">·</span>{' '}
                No hidden fees
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check />
              <span className="text-lg">
                Discreet delivery <span className="mx-1 opacity-35">·</span>{' '}
                (where available)
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button variant="orange" className="w-full capitalize ">
          Am I Qualified?
        </Button>
      </div>

      {/* Photo collage */}
      <div className="relative w-full h-[649px]">
        <Image
          src="/images/hero-photo-collage.png"
          alt="Happy patients"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
