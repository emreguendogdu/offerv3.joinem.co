'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/Buttons';
import { cn } from '@/lib/utils';

const STEPS = [
  {
    title: 'Get Approved',
    description:
      'Complete a quick online evaluation to determine if GLP-1 medication is right for you. Our team of licensed professionals will review your information and provide approval in no time.',
    img: '5V0tR6dKBzzKJCldCXqDXysUWdg.jpg',
    alt: 'Online assessment',
  },
  {
    title: 'Get Prescribed',
    description:
      "Once approved, you'll receive personalized care and a prescription to support your weight loss and health goals. Your care plan is designed to help you achieve lasting results safely and effectively.",
    img: 'Kl7MsdwNQwZeXVL0GnHCt5LDh0.jpg',
    alt: 'Doctor prescribing',
  },
  {
    title: 'Receive your Rx',
    description:
      'Your medication will be shipped directly to your door for maximum convenience. With TrimRx, starting your treatment is as simple as opening your package and following our easy-to-use instructions.',
    img: 'CyWffU05zZuh5zYROmchHedwLUI.jpg',
    alt: 'Package delivery',
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
    <section className="bg-white py-8 md:py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        <div className="flex flex-col gap-6 w-full lg:max-w-[420px]">
          <h2 className="text-[#2F2A25] font-display text-[36px] md:text-[40px] font-medium leading-[1.1] md:tracking-tight">
            Begin your weight loss journey with TrimRX.
          </h2>
          <p className="leading-[1.6] text-[#2F2A25] text-base md:text-[17px] opacity-90">
            Start your transformation today with TrimRx it&apos;s easy,
            personalized process for accessing GLP-1 medications. Designed with
            your convenience in mind, our streamlined approach ensures
            you&apos;re supported every step of the way, from approval to
            receiving your prescription.
          </p>
          <div className="mt-4">
            <Button className="bg-[#111111] text-white px-10 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase hover:opacity-90 transition-opacity w-full md:w-fit">
              Get Started
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={containerRef}
          className="relative flex-1 space-y-16 pl-16 md:pl-20"
        >
          {/* Track Line */}
          <div className="absolute left-[32px] md:left-[40px] top-4 bottom-4 w-[1px] bg-[#F1F5F9]" />

          {/* Progress Line */}
          <div
            ref={lineRef}
            className="absolute left-[32px] md:left-[40px] top-4 w-[1.5px] bg-[#FB923C]"
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
                  'absolute -left-[44px] md:-left-[52px] top-1.5 w-6 h-6 rounded-full border-2 transition-colors duration-500 bg-white flex items-center justify-center z-10',
                  activeStep >= index ? 'border-[#FB923C]' : 'border-[#F1F5F9]',
                )}
              >
                <div
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-colors duration-500',
                    activeStep >= index ? 'bg-[#FB923C]' : 'bg-[#F1F5F9]',
                  )}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-[24px] font-bold text-[#2F2A25] leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="leading-[1.6] text-[#2F2A25] opacity-70 text-base">
                    {step.description}
                  </p>
                </div>
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-[40px] shadow-sm border border-gray-100">
                  <Image
                    src={`/images/${step.img}`}
                    alt={step.alt}
                    fill
                    className="object-cover"
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
