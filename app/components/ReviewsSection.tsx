import React from 'react';
import Image from 'next/image';
import { Stars } from './ui/Icons';
import { Button } from './ui/Buttons';

export function ReviewsSection() {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-[#2F2A25] font-display text-[36px] md:text-[45px] font-medium leading-[1.1] tracking-tight lg:max-w-[500px]">
            There&apos;s a reason people are <br />
            <span className="text-[#FB923C]">raving about us.</span>
          </h2>
          <div className="flex flex-col gap-6 lg:max-w-[420px]">
            <p className="text-[#2F2A25] text-base md:text-[17px] leading-[1.6] opacity-90">
              Join the thousands of people who have trusted TrimRx to help
              change their lives, achieving significant,{' '}
              <span className="text-[#FB923C] font-semibold">
                lasting weight loss
              </span>
              .
            </p>
            <div>
              <Button className="bg-[#2D2925] text-white px-10 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase hover:opacity-90 transition-opacity">
                I&apos;M READY, LET&apos;S GO
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#EFE8DB] rounded-[32px] p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-100">
                  <Image
                    src="/images/HVBXeD99wX7b2PnjNTPHMR0Kgw.png"
                    alt="Terika S."
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[#2F2A25] font-bold text-sm">
                  Terika S.
                </span>
              </div>
              <Stars />
            </div>
            <p className="text-[#2F2A25] text-[15px] leading-[1.6] opacity-80">
              I&apos;ve tried so many things before this – diets, gym
              memberships, you name it. Nothing worked. But my provider here?
              She actually gets it. Felt like talking to a friend who happens to
              be a doctor. I&apos;m finally seeing real results!
            </p>
          </div>

          {/* Large Image Card */}
          <div className="relative h-[400px] md:h-auto rounded-[32px] overflow-hidden shadow-sm">
            <Image
              src="/images/jCpumbS2hmf0bTV4rn63Ex5o.png"
              alt="Happy patient"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-100">
                  <Image
                    src="/images/HVBXeD99wX7b2PnjNTPHMR0Kgw.png"
                    alt="Billy M."
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <span className="text-[#2F2A25] font-bold text-sm">
                  Billy M.
                </span>
              </div>
              <Stars />
            </div>
            <p className="text-[#2F2A25] text-[15px] leading-[1.6] opacity-80">
              Honestly, I was skeptical at first. But Ms. Gonzalez really took
              the time to listen to me. She explained everything about the
              medication and what to expect. No judgment, just real help.
              I&apos;m down 28 pounds in 3 months and feeling like myself again!
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#2F2A25] font-bold text-sm">
                Elizabeth R.
              </span>
              <Stars />
            </div>
            <p className="text-[#2F2A25] text-sm leading-[1.6] opacity-70">
              My clinician walked me through everything step by step. No medical
              jargon, just straight talk about what to expect, when I&apos;d see
              changes, and how to adjust if needed. It&apos;s been 4 months and
              I&apos;ve lost 22 pounds. My energy is through the roof!
            </p>
          </div>

          <div className="bg-[#F8F9FA] rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#2F2A25] font-bold text-sm">
                Lou-Ann T.
              </span>
              <Stars />
            </div>
            <p className="text-[#2F2A25] text-sm leading-[1.6] opacity-70">
              I&apos;m 13 pounds away from my goal weight! Can you believe it?
              The doctors and staff have been so supportive through this whole
              journey. I asked to stay on maintenance for a bit to get used to
              my new routine, and they totally understood. This is the real
              deal!
            </p>
          </div>

          <div className="bg-[#F8F9FA] rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#2F2A25] font-bold text-sm">Jamie K.</span>
              <Stars />
            </div>
            <p className="text-[#2F2A25] text-sm leading-[1.6] opacity-70">
              The whole process was way easier than I thought. The questions
              made sense, and when I had concerns, they actually responded
              quickly (like, same day!). My prescription arrived on time and the
              support has been amazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
