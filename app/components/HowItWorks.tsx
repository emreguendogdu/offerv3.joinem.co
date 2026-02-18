import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Buttons';

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
  return (
    <section className="bg-white py-24 px-4 max-w-[77.625rem] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        <div className="flex flex-col gap-6 w-full lg:max-w-[40%]">
          <h2 className="text-[#2F2A25] font-display text-[32px] sm:text-[36px] font-medium leading-[1.2] tracking-tight">
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
            <Button className="bg-[#38312C] text-white px-8 py-4 rounded-full font-bold text-[13px] tracking-wider uppercase hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex-1 space-y-16 pl-10 sm:pl-16">
          <div className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[1px] bg-blue-400 opacity-30" />

          {STEPS.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[32px] sm:-left-[44px] top-1.5 w-6 h-6 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              </div>
              <h3 className="text-[22px] font-semibold text-[#38312C] leading-snug">
                {step.title}
              </h3>
              <p className="mt-3 leading-[1.6] text-[#2F2A25] opacity-80 text-base">
                {step.description}
              </p>
              <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-[40px] shadow-sm border border-gray-100">
                <Image
                  src={`/images/${step.img}`}
                  alt={step.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
