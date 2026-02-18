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
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <h2 className="font-display text-3xl font-bold leading-snug">
            Meet the{' '}
            <span className=" text-primary font-extrabold">incredible</span>{' '}
            doctors we&apos;ve partnered with.
          </h2>
          <div>
            <p className=" leading-relaxed text-gray-600">
              TrimRx physicians are here to guide you every step of the way,
              bringing both their expertise and genuine care to keep you
              supported.
            </p>
            <div className="mt-4">
              <Button variant="orange" size="lg">
                Take the Assessment
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-4">
          <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
            {DOCTORS.map((doc) => (
              <div
                key={doc.name}
                className="w-64 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={`/images/${doc.img}`}
                    alt={doc.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold">{doc.name}</h4>
                  <p className="mt-1 text-xs text-gray-500">{doc.cred}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
