import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Buttons';

export function MetabolismSection() {
  return (
    <section className="bg-brand-cream py-16 max-w-[75rem] mx-auto px-4">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-64 sm:h-90 overflow-hidden rounded-2xl mt-8">
            <Image
              src="/images/setUSuF4LXmXJm1JrIxQ78A4dmg.png"
              alt="Weight loss result"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 sm:h-90 overflow-hidden rounded-2xl">
            <Image
              src="/images/V0vJeyWRHjhriS71aKjPwkKIjAQ.png"
              alt="Measuring waist"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[3.5rem]">
              We will fix your broken metabolism.
            </h2>
            <p className="  leading-relaxed text-gray-600 text-lg">
              Traditional diets don&apos;t work because nearly 70% of weight is{' '}
              <strong className="text-primary  font-bold">
                genetically determined
              </strong>
              . With medication, you will work{' '}
              <strong className="text-primary ">with your body</strong> rather
              than against it – to reach your goal weight and keep it that way.
            </p>
            <Button
              variant="dark"
              className="w-fit sm:px-10 sm:py-3.5 font-bold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
