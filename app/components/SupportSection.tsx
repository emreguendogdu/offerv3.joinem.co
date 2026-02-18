import React from 'react';
import Image from 'next/image';

export function SupportSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-[77.625rem] bg-[#F2F2F2] rounded-[48px] p-8 md:p-16 lg:p-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#2F2A25] font-display text-[36px] md:text-[40px] leading-[1.1] md:tracking-tight">
              Unlimited 24/7 support <br />
              <strong className="text-[#FB923C]">included.</strong>
            </h2>
            <p className="text-[#2F2A25] text-base md:text-[17px] leading-[1.6] opacity-90 max-w-[480px]">
              TrimRx provides 24/7 access to a dedicated team of specialists,
              ensuring you have the support you need{' '}
              <span className="text-[#FB923C]">around the clock</span>. With
              unlimited appointments, messaging and support, you can confidently
              reach out for guidance, ask questions, or address concerns at any
              time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[22vh] md:h-[400px]">
            <div className="relative h-full overflow-hidden rounded-[24px] md:rounded-[32px] mt-8">
              <Image
                src="/images/VFZS546xGl8hWlrXSKafeSpHjhk.png"
                alt="Support specialist"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full overflow-hidden rounded-[24px] md:rounded-[40px]">
              <Image
                src="/images/FO7DL2EbFiMoQ56vF6yuqTt2xj0.png"
                alt="Man with medication"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
