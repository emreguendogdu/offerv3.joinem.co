import Image from 'next/image';
import { Stars, Check } from './ui/Icons';
import { Button } from './ui/Buttons';

const HERO_FEATURES = [
  {
    mobileText: (
      <>100% online medical visit. Injections and oral options available.</>
    ),
    desktopText: (
      <>
        <strong>100% online</strong> medical review with licensed U.S. providers
      </>
    ),
  },
  {
    mobileText: (
      <>
        <strong>LIMITED TIME Sale.</strong> Save $150 or more instantly.
      </>
    ),
    desktopText: (
      <>
        <strong>LIMITED TIME Sale.</strong> Save $150 or more instantly.
      </>
    ),
  },
  {
    mobileText: (
      <>Prescription & telemed visits included. No insurance required.</>
    ),
    desktopText: (
      <>
        <strong>No insurance required</strong>{' '}
        <span className="mx-1 opacity-35">·</span> Simple monthly plan
      </>
    ),
  },
  {
    mobileText: <>Free shipping. Arrives in 1–2 days.</>,
    desktopText: (
      <>
        <strong>Free shipping.</strong> Arrives in 1–2 days.
      </>
    ),
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full mx-auto max-w-259 flex flex-col items-center gap-8 md:gap-5"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center pt-2 pb-7 gap-6">
          {/* Trust bar */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 text-brand-brown">
            <Stars />
            <span className="inline-flex justify-center gap-2.5 items-center flex-wrap">
              <span className="w-fit">
                <strong>4.9</strong> Excellent Rating
              </span>
              <span className="opacity-30 w-fit">•</span>
              <span className="w-fit">
                <strong>350,000+</strong> happy patients
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-extrabold leading-none text-[2.8125rem] md:text-5xl text-center h-[65px] md:h-auto">
            Lose <span className="text-primary">1–2 lbs</span> per week!
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-xl text-brand-brown pt-1 pb-2 -tracking-[0.02em]">
            The proven way to lose 15% of your body weight fast!
          </p>

          {/* Pricing line */}
          <p className="text-lg text-center pt-1 pb-2">
            Starting at{' '}
            <span className="font-display text-[1.5625rem] md:text-3xl font-black text-primary">
              $99
            </span>{' '}
            – Compounded GLP-1 &amp; GLP-1 + GIP in stock
          </p>

          {/* Feature checklist */}
          <div className="space-y-4.5 pt-2 text-left">
            {HERO_FEATURES.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check />
                <span className="text-lg">
                  <span className="inline-block md:hidden">
                    {feature.mobileText}
                  </span>
                  <span className="hidden md:inline-block">
                    {feature.desktopText}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button
          variant="orange"
          className="w-full capitalize font-bold text-lg"
        >
          Am I Qualified?
        </Button>
      </div>

      {/* Photo collage */}
      <div className="relative w-full aspect-[1364/790] md:aspect-auto md:h-[649px]">
        <Image
          src="/images/hero-photo-collage.png"
          alt="Happy patients"
          fill
          className="object-cover md:object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          priority
        />
      </div>
    </section>
  );
}
