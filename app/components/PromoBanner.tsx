import Link from 'next/link';
import { cn } from '@/lib/utils';
import DiscountIcon from './icons/DiscountIcon';

function SaleStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-[24px] border-y border-[#ebeaea] bg-[#fefefe]/10 p-2 opacity-20 select-none pointer-events-none whitespace-nowrap -rotate-45',
        className,
      )}
      style={{
        width: 'min-content',
        height: 'min-content',
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex justify-center">
          <p className="font-text text-[14px] leading-[16px] text-[#fefefe] font-normal">
            SALE
          </p>
        </div>
      ))}
    </div>
  );
}

export function PromoBanner() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Decorative 'SALE' Strips */}
      <div className="absolute left-[30%] -translate-x-1/2 top-1/2 translate-y-1/2">
        <SaleStrip />
      </div>

      <div className="absolute left-[63%] -translate-x-1/2 top-1/2 translate-y-1/2">
        <SaleStrip />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-4 pt-4 pb-3">
        <Link href="#" className="flex flex-col items-center gap-2 text-center">
          {/* Main Offer */}
          <div className="flex items-center gap-2">
            <DiscountIcon className="w-6 h-6" />
            <span className="text-base font-bold text-white">
              Limited Time: $140 OFF
            </span>
          </div>

          {/* Secondary Badge/Info */}
          <div className="flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-4 py-2 shadow-lg shadow-black/20">
            <span className=" font-black text-white uppercase leading-none">
              $140 OFF
            </span>
            <span className=" font-medium text-white/90 leading-none">
              all weight loss plans
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
