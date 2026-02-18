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
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-display text-3xl font-medium md:text-4xl">
          Frequently asked <span className="text-gray-300">questions</span>
        </h2>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group rounded-xl bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-medium">
                {faq.q}
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="px-6 pb-5  leading-relaxed text-gray-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
