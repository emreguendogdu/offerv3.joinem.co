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
        <div className="relative mt-20 flex items-center justify-center py-20 min-h-[500px] md:min-h-[700px] overflow-visible">
          {/* Center vial */}
          <div className="relative z-10 h-[350px] w-[220px] md:h-[500px] md:w-[300px] animate-float rotate-12 transition-transform duration-1000 hover:rotate-0">
            <Image
              src="/images/oVR6o9ucEhQOGyxqILvggd8TuAc.png"
              alt="TrimRX GLP-1+GIP vial"
              fill
              className="object-contain"
            />
          </div>

          {/* Floating quotes */}
          <div className="hidden md:block">
            {/* Left side */}
            <div
              className="absolute top-[10%] left-[10%] max-w-[240px] text-right animate-float"
              style={{ animationDelay: '0s' }}
            >
              <p className="text-[28px] font-semibold leading-[1.1] text-[#B9B3AC]">
                Very easy and <br />
                convenient for a very <br />
                busy working lady.
              </p>
              <p className="mt-3 flex items-center justify-end gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
                <Check className="w-3 h-3 opacity-40" /> Verified TrimRx
                Customer
              </p>
            </div>
            <div
              className="absolute top-[45%] left-[5%] max-w-[280px] text-right animate-float"
              style={{ animationDelay: '1s' }}
            >
              <p className="text-[28px] font-semibold leading-[1.1] text-[#B9B3AC]">
                Everyone I have come in <br />
                contact with has been so <br />
                kind a helpful!
              </p>
              <p className="mt-3 flex items-center justify-end gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
                <Check className="w-3 h-3 opacity-40" /> Verified TrimRx
                Customer
              </p>
            </div>
            {/* Right side */}
            <div
              className="absolute top-[20%] right-[10%] max-w-[240px] text-left animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <p className="text-[28px] font-semibold leading-[1.1] text-[#B9B3AC]">
                ...the weight vanished!
              </p>
              <p className="mt-3 flex items-center justify-start gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
                <Check className="w-3 h-3 opacity-40" /> Verified TrimRx
                Customer
              </p>
            </div>
            <div
              className="absolute top-[55%] right-[5%] max-w-[280px] text-left animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <p className="text-[28px] font-semibold leading-[1.1] text-[#B9B3AC]">
                Every person I have <br />
                contact with shows <br />
                compassion.
              </p>
              <p className="mt-3 flex items-center justify-start gap-2 text-[10px] font-semibold text-[#B9B3AC]/60">
                <Check className="w-3 h-3 opacity-40" /> Verified TrimRx
                Customer
              </p>
            </div>
          </div>
        </div>

        {/* HSA/FSA bar */}
        <div className="py-20 flex items-center justify-center gap-4 text-[24px] sm:text-[32px] md:text-[40px] font-bold text-[#2F2A25]">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/images/HpMphmT9reZWKHyliNJuwSGqX0.png"
              alt="HSA/FSA"
              fill
              className="object-contain"
            />
          </div>
          HSA/FSA Eligible
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-[#FAF9F6] py-24 overflow-hidden">
        <div className="mx-auto max-w-[77.625rem] px-4 text-center mb-16">
          <p className="text-[#2F2A25] opacity-60 text-sm font-medium mb-4">
            10,000+ Patients Agree
          </p>
          <div className="flex justify-center gap-1 mb-6">
            <Stars starClassName="w-6 h-6 text-[#FB923C]" />
          </div>
          <h2 className="text-[#2F2A25] font-display text-[32px] sm:text-[40px] font-medium leading-[1.1] tracking-tight">
            There&apos;s a reason people are <br />
            <span className="text-[#FB923C] font-bold">raving about us.</span>
          </h2>
        </div>

        <div className="flex gap-4 md:gap-6 marquee-container">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] md:w-[400px] bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6"
            >
              <Stars starClassName="w-4 h-4 text-[#FB923C]" />
              <p className="text-[18px] md:text-[22px] font-medium leading-[1.4] text-[#2F2A25]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 bg-[#F1F5F9] px-3 py-1.5 rounded-full">
                  <Check className="w-3 h-3 text-[#2F2A25]" />
                  <span className="text-[11px] font-bold text-[#2F2A25] uppercase tracking-wider">
                    Verified Customer
                  </span>
                </div>
                <span className="text-[#2F2A25] font-bold text-[14px]">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    text: 'When nothing else worked, TrimRx did. I lost 25 lbs in 3 months and feel amazing.',
    author: 'Sarah J.',
  },
  {
    text: 'The process was so simple. Approved and medication delivered to my door in days.',
    author: 'Michael R.',
  },
  {
    text: 'I was skeptical at first, but the results speak for themselves. Highly recommend!',
    author: 'Emma L.',
  },
  {
    text: 'Compassionate doctors and real support. Finally reached my goal weight.',
    author: 'David K.',
  },
  {
    text: "Best weight loss program I've ever tried. It actually works on your metabolism.",
    author: 'Jessica M.',
  },
];
