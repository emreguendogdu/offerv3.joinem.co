'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/Buttons';
import { cn } from '@/lib/utils';

type Step = {
  title: string;
  description: string;
  img: string;
  alt: string;
  imageClassName?: string;
};

const STEPS: Step[] = [
  {
    title: 'Get Approved',
    description:
      'Complete a quick online evaluation to determine if GLP-1 medication is right for you. Our team of licensed professionals will review your information and provide approval in no time.',
    img: '/images/assessment-1.png',
    alt: "A hand holding a smartphone against a neutral gray background, displaying a mobile health app interface. The screen shows a personalized plan titled Amelia's plan for a GLP-1 injection, featuring a 3D render of a medical vial with a teal and navy logo. Above the phone, a large teal floating button with a white checkmark icon reads Recommended. The UI design is minimalist with teal accents and includes progress indicators for Approval, Shipping, and Payment.",
  },
  {
    title: 'Get Prescribed',
    description:
      "Once approved, you'll receive personalized care and a prescription to support your weight loss and health goals. Your care plan is designed to help you achieve lasting results safely and effectively.",
    img: '/images/doctors/alan_viglione.webp',
    alt: 'Close up photo of Dr. Alan Viglione, smiling',
    imageClassName: 'object-top',
  },
  {
    title: 'Receive your Rx',
    description:
      'Your medication will be shipped directly to your door for maximum convenience. With Embody, starting your treatment is as simple as opening your package and following our easy-to-use instructions.',
    img: '/images/assessment-3.webp',
    alt: 'Neatly packaged Embody delivery on a home',
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.2 },
    );

    const steps = document.querySelectorAll('.how-it-works-step');
    steps.forEach((step) => observer.observe(step));

    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.55; // Trigger slightly below center

      // Calculate progress relative to the container
      // The line starts at top-4 (16px).
      const relativeY = triggerPoint - rect.top;
      const startOffset = 16;
      const maxLineHeight = rect.height - 32; // approximate padding bottom

      let currentHeight = relativeY - startOffset;
      if (currentHeight < 0) currentHeight = 0;
      if (currentHeight > maxLineHeight) currentHeight = maxLineHeight;

      // Direct DOM update for seamless performance
      lineRef.current.style.height = `${currentHeight}px`;

      // Determine active step
      const stepElements =
        containerRef.current.querySelectorAll('.how-it-works-step');
      let currentActive = -1;

      stepElements.forEach((step, index) => {
        const stepDiv = step as HTMLDivElement;
        // Dot is at top 1.5 (6px)
        const dotY = stepDiv.offsetTop + 6;
        if (currentHeight >= dotY) {
          currentActive = index;
        }
      });

      if (currentActive !== -1) {
        setActiveStep(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(handleScroll); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-white px-4 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        <div className="flex flex-col gap-6 w-full lg:max-w-[420px]">
          <h2 className="text-(--color-text-dark) font-display text-[2.25rem] md:text-[2.5rem] font-medium leading-[1.1] md:tracking-tight">
            Begin your weight loss journey with Embody.
          </h2>
          <p className="leading-[1.6] text-(--color-text-dark) text-base md:text-lg opacity-90">
            Start your transformation today with Embody it&apos;s easy,
            personalized process for accessing GLP-1 medications. Designed with
            your convenience in mind, our streamlined approach ensures
            you&apos;re supported every step of the way, from approval to
            receiving your prescription.
          </p>
          <div className="mt-4">
            <Button className="bg-(--color-text-darkest) text-white px-10 py-4 rounded-full font-bold text-[0.875rem] tracking-widest uppercase hover:opacity-90 transition-opacity w-full md:w-fit">
              Get Started
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={containerRef}
          className="relative flex-1 space-y-16 pl-13 md:pl-32"
        >
          {/* Track Line */}

          <div className="absolute left-[0.75rem] md:left-[2.5rem] top-0 md:top-4 bottom-4 w-[1px] bg-(--color-bg-slate)" />
          {/* Progress Line */}
          <div
            ref={lineRef}
            className="absolute left-[0.75rem] md:left-[2.5rem] top-0 md:top-4 w-[1.5px] bg-accent-dark"
            style={{ height: '0px' }}
          />

          {STEPS.map((step, index) => (
            <div
              key={index}
              data-step={index}
              className="how-it-works-step relative transition-all duration-1000 opacity-0 translate-y-10"
            >
              <div
                className={cn(
                  'absolute -left-[3.25rem] md:-left-[6.25rem] top-0 md:top-1.5 w-6 h-6 rounded-full border-2 transition-colors duration-500 bg-white flex items-center justify-center z-10',
                  activeStep >= index
                    ? 'border-accent-dark'
                    : 'border-(--color-bg-slate)',
                )}
              >
                <div
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-colors duration-500',
                    activeStep >= index ? 'bg-accent-dark' : 'bg-(--color-bg-slate)',
                  )}
                />
              </div>
              <div className="flex flex-col gap-6 w-full lg:max-w-[29.125rem]">
                <div>
                  <h3 className="text-lg lg:text-[1.375rem] font-semibold text-(--color-text-dark) leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="leading-[1.6] text-(--color-text-dark) text-base md:text-lg opacity-90">
                    {step.description}
                  </p>
                </div>
                <div className="relative aspect-16/10 max-h-[220px] lg:max-h-none w-full overflow-hidden rounded-[40px] shadow-sm border border-gray-100">
                  <Image
                    src={step.img}
                    alt={step.alt}
                    fill
                    className={cn('object-cover', step.imageClassName)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
