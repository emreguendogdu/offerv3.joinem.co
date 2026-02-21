import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand';
import { FooterPolicyLink } from './FooterPolicyLink';
import Logo from './ui/Logo';

const FOOTER_POLICY_LINKS = [
  { href: BRAND.links.safety, label: 'Safety Information' },
  { href: BRAND.links.hipaa, label: 'HIPPA Privacy Policy' },
  { href: BRAND.links.smsPrivacy, label: 'SMS Privacy Policy' },
  { href: BRAND.links.privacy, label: 'Privacy Policy' },
  { href: BRAND.links.terms, label: 'Terms & Conditions' },
  { href: BRAND.links.shipping, label: 'Shipping Policy' },
] as const;

export function Footer() {
  return (
    <footer className="bg-white flex flex-col gap-6 md:gap-15 overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-15 px-4 md:px-8 ">
        {/* Contact info */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-16">
          <Logo className="w-16 h-16 md:w-32 md:h-32" />
          <div className="flex flex-col gap-5 text-gray-600">
            <div className="flex items-center gap-3 rounded-full bg-[#FAFAFA] px-5 py-2.5 w-fit max-w-[320px] font-semibold">
              <svg
                className="shrink-0"
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
              {BRAND.contact.email}
            </div>
            <div className="flex items-center gap-3 rounded-full bg-[#FAFAFA] px-5 py-2.5 w-fit max-w-[320px] font-semibold">
              <svg
                className="shrink-0"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.66 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.3 1.55.53 2.36.66A2 2 0 0122 16.92z" />
              </svg>
              {BRAND.contact.phone}
            </div>
            <div className="flex items-center gap-3 rounded-full bg-[#FAFAFA] px-5 py-2.5 w-fit max-w-[320px] font-semibold">
              <svg
                className="shrink-0"
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
              {BRAND.contact.address}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-base">
          <p className="uppercase">
            Important Safety Information &amp; Disclaimer:
          </p>
          <br />
          <p>
            Medication Options: The Embody platform connects you with licensed
            medical providers who can prescribe medication based on their
            professional judgment. This may include:
          </p>
          <p>
            &bull; Compounded Medication Program: Our primary program provides
            access to compounded medications, which are prepared and shipped by
            a state-licensed sterile compounding pharmacy. These compounded
            drugs are not FDA-approved. This means the FDA has not reviewed them
            for safety, effectiveness, or quality.
          </p>
          <p>
            &bull; Prescriptions for Branded Medications: Alternatively, your
            provider may write a prescription for an FDA-approved branded
            medication (e.g., Ozempic&reg;, Wegovy&reg;). Embody does not sell,
            dispense, or ship any branded medications. If you are prescribed a
            branded medication, you are responsible for filling the prescription
            at your chosen pharmacy and for all associated costs.
          </p>
          <p>
            No Guarantees: Individual results may vary. Weight loss is not
            guaranteed and is influenced by many factors, including diet,
            exercise, and individual biology. The information on this website is
            for educational purposes only and does not constitute medical
            advice. Always consult a healthcare professional before starting any
            new medication or weight loss program. Ozempic&reg;, Wegovy&reg;,
            Zepbound&reg;, and Mounjaro&reg; are trademarks of their respective
            owners and are not affiliated with Embody.
          </p>
        </div>

        <div className="flex flex-col">
          {/* Links */}
          <div className="relative">
            <div className="absolute border-t border-t-black/15 left-0 right-0 top-0 w-[150%] -translate-x-1/4"></div>
            <div className="grid grid-cols-3 items-center justify-center mx-auto max-w-lg gap-4 text-sm pt-4 px-4 md:pt-8 pb-5 md:px-8">
              {FOOTER_POLICY_LINKS.map((link) => (
                <FooterPolicyLink key={link.href} href={link.href}>
                  {link.label}
                </FooterPolicyLink>
              ))}
            </div>
          </div>

          {/* LegitScript + Copyright */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="https://www.legitscript.com/websites/?checker_keywords=joinem.co"
              target="_blank"
            >
              <div className="relative h-16 w-16 md:w-27 md:h-27">
                <Image
                  src="/images/iPUa6q2apUM6PH2ZJ047D5Zgg.png"
                  alt="LegitScript Certified"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <div className="w-[200%] -translate-x-1/4 h-full bg-black mt-4 flex items-center justify-center p-4">
            <p className="text-sm text-white">
              &copy; 2026 EMBODY. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
