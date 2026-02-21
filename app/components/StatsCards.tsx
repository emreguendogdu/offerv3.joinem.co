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
    <section className="bg-white md:text-center mx-auto px-4 max-w-[75rem] flex flex-col gap-4 md:items-center md:justify-center">
      <h2 className="font-display text-2x text-[2rem] md:text-[2.75rem] max-w-[52.5rem] mx-auto">
        Why are so many patients signing up for Embody?{' '}
        <strong className=" text-primary">It works.</strong>
      </h2>
      <p className="text-gray-600 text-lg">
        On average, patients in the Embody program lose 15-20% of their body
        weight.
      </p>

      <div className="grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-4 w-full">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-accent-light p-3 md:p-6 flex md:flex-col justify-between gap-4 items-center md:justify-center text-center rounded-3xl"
          >
            <p className="font-text text-[3.2rem] md:text-[4.5rem] font-bold text-brand-dark leading-tight md:leading-[6.75rem] w-[40%] md:w-auto text-left md:text-center">
              {stat.value}
              <span className="font-normal text-primary">{stat.unit}</span>
            </p>
            <p className="mt-2 text-xs md:text-sm text-gray-600 max-w-[180px] w-[60%] md:w-auto">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
