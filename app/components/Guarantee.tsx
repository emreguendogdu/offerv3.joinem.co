'use client';

import { Button } from './ui/Buttons';
import { useRevealOnInView } from '@/lib/hooks/useRevealOnInView';
import Logo from './ui/Logo';

export function Guarantee() {
  const { ref: sectionRef, revealClassName } = useRevealOnInView<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`bg-white px-4 overflow-hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${revealClassName}`}
    >
      <div className="mx-auto max-w-[58.75rem] bg-[#FBF6F0] rounded-[60px] md:rounded-[80px] card relative overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-[40rem]">
          <Logo className="w-16 h-16 md:w-25 md:h-25" />
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-foreground font-semibold text-[0.625rem] md:text-[0.75rem] mt-1 text-center md:text-left uppercase">
              Guarantee
            </span>
            <h2 className="text-[#2F2A25] font-display text-[1.5rem] md:text-[1.875rem] font-semibold leading-[1.1] tracking-tight text-center md:max-w-lg md:mx-auto">
              Support that fits your life, backed by a simple 100% satisfaction
              guarantee.
            </h2>
            <p className="text-[#2F2A25] text-sm md:text-base leading-[1.6] opacity-90 text-center tracking-[-0.02rem]">
              We&apos;re so confident in our personalized program, we guarantee
              you&apos;ll lose weight or your money back. It&apos;s that simple.
            </p>
            <Button className="bg-gradient-to-r from-[#F59E0B] to-[#EAB308] text-white px-10 py-4 rounded-full font-bold text-xs text-[0.625rem] w-full md:w-auto md:text-xs tracking-[0.075rem] uppercase hover:opacity-90 transition-opacity border-none shadow-lg">
              CONTINUE WITH CONFIDENCE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
