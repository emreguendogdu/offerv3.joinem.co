import React from 'react';
import Image from 'next/image';
import { Check } from './ui/Icons';

const PATIENTS = [
  { src: 'cuZhgpBjeSSAKoMvYFHYO1l4.jpg', alt: 'Patient 1' },
  { src: 'NQqOmeOq8ThEBIlN3sKga1O7QQ0.jpg', alt: 'Patient 2' },
  { src: 'slE7NDw3RqftarmJJbMWWCs0to.jpg', alt: 'Patient 3' },
  { src: 'N51YbqCRIIzwwYPH36B7N9lcGUo.jpg', alt: 'Patient 4' },
  { src: 'mWUMueuLzdw3Ay1FvGSNFxHaWLs.jpg', alt: 'Patient 5' },
  { src: 'RBa6kItPw3GCYCh5RaBEaw8IA.jpg', alt: 'Patient 6' },
  { src: 'eKEZ1mlvVbuQYZZFRP2HGWM52Y.png', alt: 'Patient 7' },
  { src: '6EcuoAeEA3spcOOzKTuXbA5UHAg.jpg', alt: 'Patient 8' },
];

export function ResultsGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[81rem] px-4 text-left md:text-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-4xl md:text-5xl text-center font-medium">
            The change we&apos;ve all been waiting for.
          </h2>
          <p className=" text-center">
            Join the over{' '}
            <span className="text-primary font-bold">100,000</span> TrimRx
            patients and we&apos;ll help you finally get real, lasting results.
          </p>
        </div>
        {/* People photo grid */}
        {/* People photo grid */}
        <div className="mt-10 hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[600px]">
          {PATIENTS.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-[50px]">
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="mt-10 grid grid-cols-3 gap-3 md:hidden">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square w-full overflow-hidden rounded-[50px]">
              <Image
                src={`/images/${PATIENTS[2].src}`}
                alt={PATIENTS[2].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[50px]">
              <Image
                src={`/images/${PATIENTS[5].src}`}
                alt={PATIENTS[5].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square w-full overflow-hidden rounded-[50px]">
              <Image
                src={`/images/${PATIENTS[0].src}`}
                alt={PATIENTS[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[50px]">
              <Image
                src={`/images/${PATIENTS[1].src}`}
                alt={PATIENTS[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative w-full h-full overflow-hidden rounded-[50px]">
            <Image
              src={`/images/${PATIENTS[4].src}`}
              alt={PATIENTS[4].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 3 stat badges */}
        <div className="flex flex-col w-fit gap-5 mx-auto">
          <div className="mt-10 flex flex-wrap items-center justify-start md:justify-center gap-6">
            <div className="flex items-center gap-2">
              <Check />
              <span className="text-lg">
                6x more weight loss than exercise and diet alone
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check />
              <span className="text-lg">
                Lose an average of 18% of your body weight
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check />
              <span className="text-lg">93% kept the weight off for good</span>
            </div>
          </div>
          {/* Text */}
          <div className="flex w-full items-start">
            <p className="text-xs text-[#38312C]">
              * Data based on TrimRx patients over their first 6 months of
              treatment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
