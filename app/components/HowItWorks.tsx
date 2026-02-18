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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(
              entry.target.getAttribute('data-step') || '0',
            );
            setActiveStep(stepIndex);
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.3 },
    );

    const steps = document.querySelectorAll('.how-it-works-step');
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        <div className="flex flex-col gap-6 w-full lg:max-w-[420px]">
          <h2 className="text-[#2F2A25] font-display text-[32px] sm:text-[40px] font-medium leading-[1.1] tracking-tight">
            Begin your weight loss journey with TrimRX.
          </h2>
          <p className="leading-[1.6] text-[#2F2A25] text-base sm:text-[17px] opacity-90">
            Start your transformation today with TrimRx it&apos;s easy,
            personalized process for accessing GLP-1 medications. Designed with
            your convenience in mind, our streamlined approach ensures
            you&apos;re supported every step of the way, from approval to
            receiving your prescription.
          </p>
          <div className="mt-4">
            <Button className="bg-[#111111] text-white px-10 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex-1 space-y-16 pl-4 md:pl-20">
          {/* Track Line */}
          <div className="absolute left-[20px] md:left-[24px] top-4 bottom-4 w-[1px] bg-[#F1F5F9]" />

          {/* Progress Line */}
          <div
            className="absolute left-[20px] md:left-[24px] top-4 w-[1.5px] bg-[#FB923C] transition-all duration-700 ease-out"
            style={{ height: `${(activeStep / (STEPS.length - 1)) * 90}%` }}
          />

          {STEPS.map((step, index) => (
            <div
              key={index}
              data-step={index}
              className="how-it-works-step relative transition-all duration-1000 opacity-0 translate-y-10"
            >
              <div
                className={cn(
                  'absolute -left-[28px] md:-left-[44px] top-1.5 w-6 h-6 rounded-full border-2 transition-colors duration-500 bg-white flex items-center justify-center z-10',
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
