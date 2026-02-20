import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Buttons';

export function MetabolismSection() {
  return (
    <section className="relative w-full max-w-[75rem] mx-auto px-4">
      <div className="bg-accent-light grid items-center gap-10 md:grid-cols-2 p-5 rounded-3xl">
        <div className="grid grid-cols-2 gap-4 overflow-hidden">
          <div className="relative h-[25vh] w-full md:w-auto md:h-90 overflow-hidden rounded-2xl mt-8">
            <Image
              src="/images/setUSuF4LXmXJm1JrIxQ78A4dmg.png"
              alt="Weight loss result"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[25vh] w-full md:w-auto md:h-90 overflow-hidden rounded-2xl">
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
            <h2 className="font-display text-5xl text-[2.25rem] md:text-[2.75rem] font-medium">
              We will fix your broken metabolism.
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Traditional diets don&apos;t work because nearly 70% of weight is{' '}
              <strong className="text-primary  font-bold">
                genetically determined
              </strong>
              . With medication, you will work{' '}
              <strong className="text-primary">with your body</strong> rather
              than against it – to reach your goal weight and keep it that way.
            </p>
            <Button
              variant="dark"
              className="w-full py-3.5 md:w-fit md:px-10 font-bold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
