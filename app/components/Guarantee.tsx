import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Buttons';

export function Guarantee() {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] bg-[#FBF6F0] rounded-[60px] md:rounded-[80px] p-8 md:p-20 relative overflow-hidden">
        <div className="grid items-center gap-12 lg:grid-cols-2 relative z-10">
          <div className="relative aspect-square w-full max-w-[440px] mx-auto lg:mx-0 overflow-hidden rounded-[40px]">
            <Image
              src="/images/USsnYE6lbhf51vjxPNzwCQYGzsM.png"
              alt="Confident patient"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-[#FB923C] font-semibold text-lg">
              TrimRx Guarantee
            </span>
            <h2 className="text-[#2F2A25] font-display text-[32px] sm:text-[40px] font-medium leading-[1.1] tracking-tight">
              The only thing you&apos;ll <br />
              lose is extra weight.
            </h2>
            <p className="text-[#2F2A25] text-base sm:text-[17px] leading-[1.6] opacity-90 max-w-[480px]">
              We&apos;re so confident in our personalized program, we guarantee
              you&apos;ll lose weight or your money back. It&apos;s that simple.
            </p>
            <div className="mt-4">
              <Button className="bg-gradient-to-r from-[#F59E0B] to-[#EAB308] text-white px-10 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase hover:opacity-90 transition-opacity border-none shadow-lg">
                CONTINUE WITH CONFIDENCE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
