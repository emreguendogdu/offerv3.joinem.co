import Image from 'next/image';
import React from 'react';
import { Button } from './ui/Buttons';

export default function DrAlan() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] px-4 flex gap-8 md:gap-12 lg:gap-16 flex-col-reverse md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:gap-8 flex-1">
          <h2 className="text-(--color-text-dark) font-display text-[2rem] md:text-[2.35rem] font-medium leading-[1.1] tracking-tight max-w-[500px]">
            Meet our{' '}
            <span className="text-primary">chief medical officer.</span>
          </h2>

          <div className="flex flex-col">
            <p className="text-(--color-text-dark) text-sm md:text-base leading-[1.6] opacity-90">
              Dr. Alan Viglione, MD is a board-certified Internal Medicine
              physician with a deep focus on preventive medicine, metabolic
              optimization, fitness, and evidence-based longevity care. He
              earned dual honors degrees in Biology and History from Boston
              College, completed a Master’s in Molecular Biology at UC Santa
              Barbara, and received his MD from SUNY Upstate Medical University.
            </p>

            <br />

            <p className="text-(--color-text-dark) text-sm md:text-base leading-[1.6] opacity-90">
              Dr. Viglione completed residency training in Internal Medicine at
              Kaiser Permanente San Francisco, where he deepened his commitment
              to integrative, patient-centered care. He is ABIM board certified,
              holds a Certified Personal Trainer credential (NASM), and has
              advanced training through the American Academy of Anti-Aging
              Medicine (A4M).
            </p>

            <br />

            <p className="text-(--color-text-dark) text-sm md:text-base leading-[1.6] opacity-90">
              As Chief Medical Officer at Em, Dr. Viglione helps guide clinical
              quality, safety, and patient experience - ensuring Em delivers
              modern metabolic medicine with clarity, trust, and real human
              support.
            </p>
          </div>

          <Button className="bg-gradient-to-r from-(--color-brand-orange) to-[#EAB308] text-white px-8 py-4 rounded-full font-normal md:font-bold text-[0.875rem] tracking-widest uppercase border-none shadow-lg w-fit! md:w-fit!">
            TAKE THE ASSESSMENT
          </Button>
        </div>

        <div className="flex-1">
          <div className="relative w-full aspect-square h-full shrink-0 overflow-hidden rounded-[56px] bg-(--color-bg-teal) max-h-[520px] md:max-h-none">
            <Image
              src="/images/doctors/alan_viglione.webp"
              alt="Dr. Alan Viglione"
              fill
              className="object-cover object-[50%_10%]"
            />
            <div className="absolute inset-x-2 md:inset-x-4 bottom-2 md:bottom-4 bg-white backdrop-blur-sm rounded-[24px] md:rounded-[32px] p-3 md:p-6 text-center shadow-lg border border-white/20 w-fit mx-auto">
              <h4 className="text-(--color-text-dark) font-bold text-lg leading-tight mb-1">
                Dr. Alan Viglione
              </h4>
              <p className="text-(--color-text-dark) text-[0.6875rem] leading-snug opacity-60">
                American Board of Internal Medicine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
