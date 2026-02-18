import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* Contact info */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-16">
          <div className="text-3xl tracking-tight text-brand-dark">
            <span className="font-light">trim</span>
            <span className="font-light">.</span>
            <span className="font-light">rx</span>
          </div>
          <div className="flex flex-col gap-3  text-gray-600">
            <div className="flex items-center gap-3 rounded-full bg-gray-50 px-5 py-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@trimrx.org
            </div>
            <div className="flex items-center gap-3 rounded-full bg-gray-50 px-5 py-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.66 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.3 1.55.53 2.36.66A2 2 0 0122 16.92z" />
              </svg>
              (888) 896-1612
            </div>
            <div className="flex items-center gap-3 rounded-full bg-gray-50 px-5 py-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              12636 High Bluff Drive Ste 400, San Diego, California, 92130
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-xs font-bold text-gray-500 uppercase">
            Important Safety Information &amp; Disclaimer:
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-gray-400">
            Medication Options: The TrimRx platform connects you with licensed
            medical providers who can prescribe medication based on their
            professional judgment. This may include:
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-gray-400">
            &bull; Compounded Medication Program: Our primary program provides
            access to compounded medications, which are prepared and shipped by
            a state-licensed sterile compounding pharmacy. These compounded
            drugs are not FDA-approved. This means the FDA has not reviewed them
            for safety, effectiveness, or quality.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-gray-400">
            &bull; Prescriptions for Branded Medications: Alternatively, your
            provider may write a prescription for an FDA-approved branded
            medication (e.g., Ozempic&reg;, Wegovy&reg;). TrimRx does not sell,
            dispense, or ship any branded medications. If you are prescribed a
            branded medication, you are responsible for filling the prescription
            at your chosen pharmacy and for all associated costs.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-gray-400">
            No Guarantees: Individual results may vary. Weight loss is not
            guaranteed and is influenced by many factors, including diet,
            exercise, and individual biology. The information on this website is
            for educational purposes only and does not constitute medical
            advice. Always consult a healthcare professional before starting any
            new medication or weight loss program. Ozempic&reg;, Wegovy&reg;,
            Zepbound&reg;, and Mounjaro&reg; are trademarks of their respective
            owners and are not affiliated with TrimRx.
          </p>
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
          <a href="#" className=" hover:text-gray-600">
            Safety Information
          </a>
          <a href="#" className=" hover:text-gray-600">
            HIPPA Privacy Policy
          </a>
          <a href="#" className=" hover:text-gray-600">
            SMS Privacy Policy
          </a>
          <a href="#" className=" hover:text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className=" hover:text-gray-600">
            Terms &amp; Conditions
          </a>
          <a href="#" className=" hover:text-gray-600">
            Shipping Policy
          </a>
        </div>

        {/* LegitScript + Copyright */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="relative h-16 w-16">
            <Image
              src="/images/iPUa6q2apUM6PH2ZJ047D5Zgg.png"
              alt="LegitScript Certified"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-gray-400">
            &copy; 2025 TRIMRX. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
