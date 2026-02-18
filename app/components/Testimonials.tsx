import React from 'react';
import Image from 'next/image';
import { Stars, Check } from './ui/Icons';
import { Button } from './ui/Buttons';

export function Testimonials() {
  return (
    <section className="bg-white pt-16">
      <div className="mx-auto max-w-[75rem]">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <h2 className="font-display text-3xl leading-snug">
            The results speak for themselves.
          </h2>
          <div>
            <p className="text-xl leading-relaxed text-gray-600">
              Sometimes you have to see it to believe it. GLP-1 medication can
              be{' '}
              <strong className="font-bold text-primary">life-changing</strong>{' '}
              and improves mood, sleep, energy and longevity. Photos,
              testimonials and results are from TrimRX patients.
            </p>
            <div className="mt-5">
              <Button
                variant="dark"
                className="bg-brand-brown hover:bg-black tracking-[1.28px]"
              >
                I&apos;m Ready, Let&apos;s Go
              </Button>
            </div>
          </div>
        </div>

        {/* Big testimonial */}
        <div className="pt-50 text-center w-fit mx-auto">
          <p className=" text-gray-500">10,000+ Patients Agree</p>
          <div className="mt-2 flex justify-center">
            <Stars starClassName="w-12 h-18 text-[#E1CAA0]" />
          </div>
          <h3 className="mt-4 font-display text-2xl md:text-4xl">
            &ldquo;When nothing else worked,{' '}
            <strong className="text-primary">TrimRx did</strong>
            &rdquo;
          </h3>
          <div className="mt-2 text-sm flex items-center justify-end gap-1.5  text-gray-500">
            <Check /> Verified TrimRx Customer
          </div>
        </div>

        {/* Floating testimonials around vial */}
        <div className="relative mt-20 flex items-center justify-center py-20 min-h-[700px] overflow-visible">
          {/* Center vial */}
          <div className="relative z-10 h-[500px] w-[300px] animate-float rotate-12">
            <Image
              src="/images/oVR6o9ucEhQOGyxqILvggd8TuAc.png"
              alt="TrimRX GLP-1+GIP vial"
              fill
              className="object-contain"
            />
          </div>

          {/* Floating quotes (No backgrounds, matching alignment and color from image) */}

          {/* LEFT SIDE (Right Aligned) */}
          <div
            className="absolute top-[5%] left-[5%] md:left-[15%] max-w-[280px] text-right animate-float"
            style={{ animationDelay: '0s' }}
          >
            <p className="text-2xl md:text-[32px] font-semibold leading-[1.1] text-[#B9B3AC]">
              Very easy and
              <br />
              convenient for a very
              <br />
              busy working lady.
            </p>
            <p className="mt-3 flex items-center justify-end gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
              <Check className="w-3 h-3 opacity-40 shrink-0" /> Verified TrimRx
              Customer
            </p>
          </div>

          <div
            className="absolute top-[35%] left-[2%] md:left-[8%] max-w-[320px] text-right animate-float"
            style={{ animationDelay: '1s' }}
          >
            <p className="text-2xl md:text-[32px] font-semibold leading-[1.1] text-[#B9B3AC]">
              Everyone I have come in
              <br />
              contact with has been so
              <br />
              kind a helpful!
            </p>
            <p className="mt-3 flex items-center justify-end gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
              <Check className="w-3 h-3 opacity-40 shrink-0" /> Verified TrimRx
              Customer
            </p>
          </div>

          <div
            className="absolute bottom-[10%] left-[5%] md:left-[12%] max-w-[280px] text-right animate-float"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="text-2xl md:text-[32px] font-semibold leading-[1.1] text-[#B9B3AC]">
              Very nice and
              <br />
              informative Dr. Quick
              <br />
              and easy!
            </p>
            <p className="mt-3 flex items-center justify-end gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
              <Check className="w-3 h-3 opacity-40 shrink-0" /> Verified TrimRx
              Customer
            </p>
          </div>

          {/* RIGHT SIDE (Left Aligned) */}
          <div
            className="absolute top-[18%] right-[5%] md:right-[15%] max-w-[260px] text-left animate-float"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-2xl md:text-[32px] font-semibold leading-[1.1] text-[#B9B3AC]">
              ...the weight vanished!
            </p>
            <p className="mt-3 flex items-center justify-start gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
              <Check className="w-3 h-3 opacity-40 shrink-0" /> Verified TrimRx
              Customer
            </p>
          </div>

          <div
            className="absolute top-[48%] right-[0%] md:right-[10%] max-w-[280px] text-left animate-float"
            style={{ animationDelay: '2s' }}
          >
            <p className="text-2xl md:text-[32px] font-semibold leading-[1.1] text-[#B9B3AC]">
              Every person I have
              <br />
              contact with shows
              <br />
              compassion.
            </p>
            <p className="mt-3 flex items-center justify-start gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
              <Check className="w-3 h-3 opacity-40 shrink-0" /> Verified TrimRx
              Customer
            </p>
          </div>

          <div
            className="absolute bottom-[2%] right-[8%] md:right-[18%] max-w-[240px] text-left animate-float"
            style={{ animationDelay: '1.2s' }}
          >
            <p className="text-2xl md:text-[32px] font-semibold leading-[1.1] text-[#B9B3AC]">
              NP was very helpful
              <br />
              and friendly!
            </p>
            <p className="mt-3 flex items-center justify-start gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
              <Check className="w-3 h-3 opacity-40 shrink-0" /> Verified TrimRx
              Customer
            </p>
          </div>
        </div>

        {/* HSA/FSA */}
        <div className="py-12 flex items-center justify-center gap-2 text-[2.5rem] font-bold">
          <div className="relative h-8 w-8">
            <Image
              src="/images/HpMphmT9reZWKHyliNJuwSGqX0.png"
              alt="Checkmark"
              width={32}
              height={32}
            />
          </div>
          HSA/FSA Eligible
        </div>
      </div>
    </section>
  );
}
