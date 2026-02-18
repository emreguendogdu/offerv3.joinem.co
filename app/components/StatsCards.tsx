import React from 'react';

const STATS = [
  { value: '18', unit: '%', label: 'Average weight loss' },
  {
    value: '9',
    unit: '/10',
    label: 'Patients call it the most effective treatment to date.',
  },
  { value: '6.5', unit: '"', label: 'Potential waist reduction' },
  { value: '93', unit: '%', label: 'Kept the weight off' },
];

export function StatsCards() {
  return (
    <section className="bg-white py-16 text-center mx-auto px-4 max-w-[75rem] flex flex-col gap-4 items-center justify-center">
      <h2 className="font-display text-3xl md:text-[2.75rem]">
        Why are so many patients signing up for TrimRX?{' '}
        <strong className=" text-primary">It works.</strong>
      </h2>
      <p className="text-gray-600 text-lg">
        On average, patients in the TrimRx program lose 15-20% of their body
        weight.
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 w-full">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-brand-peach p-6 flex flex-col items-center justify-center text-center"
          >
            <p className="font-text text-[42px] md:text-[72px] font-bold text-brand-dark leading-tight md:leading-[108px]">
              {stat.value}
              <span className="font-normal text-brand-orange">{stat.unit}</span>
            </p>
            <p className="mt-2 text-xs md:text-sm text-gray-600 max-w-[180px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
