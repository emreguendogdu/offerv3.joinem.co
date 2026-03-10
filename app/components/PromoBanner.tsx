import { cn } from '@/lib/utils';
import { PromoBannerContent } from '@/types/promoBanner';
import DiscountIcon from './icons/DiscountIcon';

type PromoBannerProps = {
  content: PromoBannerContent;
};

function SaleStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-[1.5rem] border-y border-[#ebeaea] bg-[#fefefe]/10 p-2 opacity-20 select-none pointer-events-none whitespace-nowrap -rotate-45',
        className,
      )}
      style={{
        width: 'min-content',
        height: 'min-content',
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex justify-center">
          <p className="font-text text-[0.875rem] leading-[1rem] text-[#fefefe] font-normal">
            SALE
          </p>
        </div>
      ))}
    </div>
  );
}

export function PromoBanner({ content }: PromoBannerProps) {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Decorative 'SALE' Strips */}
      <div className="absolute md:left-[30%] -translate-x-1/2 top-1/2 translate-y-1/2">
        <SaleStrip />
      </div>

      <div className="absolute left-[85%] md:left-[67.5%] -translate-x-1/2 top-1/2 translate-y-1/2">
        <SaleStrip />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-4 pt-4 pb-3">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Main Offer */}
          <div className="flex items-center gap-2">
            <DiscountIcon className="w-6 h-6" />
            <span className="text-base font-bold text-white">
              {content.heading}
            </span>
          </div>

          {/* Secondary text */}
          <div className="flex flex-col items-center sm:gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-4 py-2 shadow-lg shadow-black/20">
            <span className=" font-black text-white uppercase leading-none">
              {content.primaryText}
            </span>
            <span className=" font-medium text-white/90 leading-none">
              {content.subText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
