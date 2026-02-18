import React from 'react';

const FAQS = [
  {
    q: 'How soon will I start seeing results with TrimRx?',
    a: 'Most patients begin noticing changes within the first few weeks of treatment. On average, patients lose 15–20% of their body weight over the course of their program.',
  },
  {
    q: 'Do I need to follow a special diet while on TrimRx?',
    a: 'While no specific diet is required, maintaining a balanced, nutritious diet can help maximize your results. Your care team will provide personalized guidance.',
  },
  {
    q: 'Can I drink alcohol while on GLP-1 medications?',
    a: "It's generally recommended to limit alcohol consumption while on GLP-1 medications, as alcohol can affect blood sugar levels and may increase side effects.",
  },
  {
    q: 'How long should I stay on GLP-1 medication?',
    a: 'Treatment duration varies by individual. Your provider will work with you to determine the optimal length of treatment based on your progress and goals.',
  },
];

export function FAQ() {
  return (
    <section className="bg-[#F8F9FA] py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-[50rem]">
        <h2 className="text-center font-display text-[36px] md:text-[45px] font-medium leading-[1.1] tracking-tight mb-16 text-[#2D2925]">
          Frequently asked <span className="text-[#D1D5DB]">questions</span>
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-[24px] bg-white shadow-sm border border-gray-100 overflow-hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between px-8 py-7 text-[17px] font-semibold text-[#2F2925]">
                {faq.q}
                <div className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 group-open:bg-blue-100 transition-colors">
                  <svg
                    className="h-4 w-4 text-blue-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>
              <div className="px-8 pb-7">
                <p className="text-[15.5px] leading-[1.6] text-[#2F2A25] opacity-80">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
