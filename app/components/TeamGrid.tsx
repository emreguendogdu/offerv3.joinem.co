import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Buttons';

const DOCTORS = [
  {
    name: 'Dr. Michael Stratton',
    cred: 'Board-Certified Internal Medicine',
    img: 'gmAO0NLwCU4hmmBvMjd2k7v2Zw.jpg',
  },
  {
    name: 'Dr. James Caldwell',
    cred: 'Board-Certified Doctor of Osteopathic Medicine',
    img: 'WpQDdDdB7frIu3ItVcFKOpTN5fc.jpg',
  },
  {
    name: 'Dr. Sarah Bennett',
    cred: "St. George's University, School of Medicine",
    img: 'EvW5yYm41mDHfGT8ii7GUROSpZU.jpg',
  },
  {
    name: 'Dr. Robert Harrington',
    cred: 'American Board of Emergency Medicine',
    img: 'A1ouBmKWbK329wV6Cm0rRVeNCg.jpg',
  },
];

export function TeamGrid() {
  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-[77.625rem]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-[#2F2A25] font-display text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-tight max-w-[500px]">
            Meet the <span className="text-[#FB923C]">incredible</span> doctors
            we&apos;ve partnered with.
          </h2>
          <div className="flex flex-col gap-6 lg:max-w-[420px]">
            <p className="text-[#2F2A25] text-base md:text-[17px] leading-[1.6] opacity-90">
              TrimRx physicians are here to guide you every step of the way,
              bringing both their expertise and genuine care to keep you
              supported.
            </p>
            <div>
              <Button className="bg-gradient-to-r from-[#F59E0B] to-[#EAB308] text-white px-8 py-4 rounded-full font-bold text-[14px] tracking-widest uppercase hover:opacity-90 transition-opacity border-none shadow-lg">
                TAKE THE ASSESSMENT
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="relative aspect-[4/5] overflow-hidden rounded-[56px] group"
            >
              <Image
                src={`/images/${doc.img}`}
                alt={doc.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-sm rounded-[32px] p-6 text-center shadow-lg border border-white/20">
                <h4 className="text-[#2F2A25] font-bold text-[17px] leading-tight mb-1">
                  {doc.name}
                </h4>
                <p className="text-[#2F2A25] text-[11px] leading-snug opacity-60">
                  {doc.cred}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
