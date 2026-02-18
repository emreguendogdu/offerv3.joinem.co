import React from 'react';
import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
}

/* ─── Green circle checkmark ─── */
export function Check({ className }: IconProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 34"
      fill="none"
      className={cn('shrink-0 mt-0.5', className)}
    >
      <path
        d="M16 34C7.163 34 0 26.837 0 18C0 9.163 7.163 2 16 2C24.837 2 32 9.163 32 18C32 26.837 24.837 34 16 34Z"
        fill="#779d7c"
      />
      <path
        d="M22.665 13L13.499 22.167L9.332 18"
        stroke="white"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── 5 orange stars ─── */
export function Stars({
  className,
  starClassName,
}: IconProps & { starClassName?: string }) {
  return (
    <div className={cn('flex gap-0.5', className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={cn('w-5 h-5 text-[#FFCA3B]  fill-current', starClassName)}
        >

```
The `Stars` icon doesn't have `width` and `height` props on the SVG, it uses Tailwind classes `w-5 h-5`.
`w-5` is 20px.
If the `viewBox` is `0 0 24 24`, and the star path is `M12 2...`, it's a 20px star inside a 24px container, which then gets scaled to 20px total.
This makes the star actually 16.66px (20/24 * 20).
If the user wants a "20px star", they probably want the star to fill the 20px area.
This means the viewBox
        </svg>
      ))}
    </div>
  );
}
