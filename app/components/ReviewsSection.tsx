import React from 'react';
import Image from 'next/image';
import { Stars } from './ui/Icons';
import { Button } from './ui/Buttons';

export function ReviewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <h2 className="font-display text-3xl font-bold leading-snug">
            There&apos;s a reason people are{' '}
            <span className=" text-primary">raving about us.</span>
          </h2>
          <div>
            <p className=" leading-relaxed text-gray-600">
              Join the thousands of people who have trusted TrimRx to help
              change their lives, achieving significant,{' '}
              <span className="text-primary font-bold">
                lasting weight loss
              </span>
              .
            </p>
            <div className="mt-4">
              <Button variant="orange" size="lg">
                I&apos;m Ready, Let&apos;s Go
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="mx-auto grid max-w-5xl grid-cols-3 grid-rows-2 gap-4 lg:-mx-16 lg:max-w-none lg:grid-cols-4">
            {/* Jamie K. — top-left */}
            <div className="rounded-2xl bg-brand-cream p-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/HVBXeD99wX7b2PnjNTPHMR0Kgw.png"
                    alt="Jamie K."
                    fill
                    className="object-cover"
                  />
                </div>
                <span className=" font-bold">Jamie K.</span>
                <Stars />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                The whole process was way easier than I thought. The questions
                made sense, and when I had concerns, they actually responded
                quickly (like, same day!). My prescription arrived on time and
                the support has been amazing. Wish I started sooner!
              </p>
            </div>

            {/* Large photo card — center, spans 2 rows */}
            <div className="relative overflow-hidden rounded-2xl row-span-2">
              <Image
                src="/images/jCpumbS2hmf0bTV4rn63Ex5o.png"
                alt="Happy patient"
                fill
                className="object-cover"
              />
            </div>

            {/* Terika S. — top-right */}
            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <span className=" font-bold">Terika S.</span>
                <Stars />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                I&apos;ve tried so many things before this – diets, gym
                memberships, you name it. Nothing worked. But my provider here?
                She actually gets it. Felt like talking to a friend who happens
                to be a doctor. I&apos;m finally seeing real results!
              </p>
            </div>

            {/* Lou-Ann T. — bottom-left */}
            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <span className=" font-bold">Lou-Ann T.</span>
                <Stars />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                I&apos;m 13 pounds away from my goal weight! Can you believe it?
                The doctors and staff have been so supportive through this whole
                journey. I asked to stay on maintenance for a bit to get used to
                my new routine, and they totally understood. This is the real
                deal!
              </p>
            </div>

            {/* Elizabeth R. — bottom-right */}
            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <span className=" font-bold">Elizabeth R.</span>
                <Stars />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                My clinician walked me through everything step by step. No
                medical jargon, just straight talk about what to expect, when
                I&apos;d see changes, and how to adjust if needed. It&apos;s
                been 4 months and I&apos;ve lost 22 pounds. My energy is through
                the roof!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
