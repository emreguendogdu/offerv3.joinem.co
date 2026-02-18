import React from 'react';
import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="overflow-hidden rounded-3xl bg-brand-cream px-8 py-10 text-center">
          <div className="relative mx-auto h-40 w-56">
            <Image
              src="/images/USsnYE6lbhf51vjxPNzwCQYGzsM.png"
              alt="Happy woman celebrating"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4  font-medium text-primary">TrimRx Guarantee</p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            The only thing you&apos;ll lose is extra weight.
          </h2>
          <p className="mx-auto mt-3 max-w-md  text-gray-600">
            We&apos;re so confident in our personalized program, we guarantee
            you&apos;ll lose weight or your money back. It&apos;s that simple.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-yellow-400 px-8 py-3.5  font-bold uppercase tracking-wider text-white transition-all hover:shadow-lg"
            >
              Continue With Confidence
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
