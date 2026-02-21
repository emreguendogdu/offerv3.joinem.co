import Image from 'next/image';
import { Button } from './ui/Buttons';

const DOCTORS = [
  {
    name: 'Dr. Alan Viglione',
    cred: 'American Board of Internal Medicine',
    src: '/images/doctors/alan_viglione.webp',
  },
  {
    name: 'Dr. Kelly Tenbrink',
    cred: 'American Board of Emergency Medicine',
    src: '/images/doctors/kelly_tenbrink.webp',
  },
  {
    name: 'Dr. Ana Lisa Carr',
    cred: "St. George's University, School of Medicine",
    src: '/images/doctors/ana_lisa_carr.webp',
  },
];

export function TeamGrid() {
  const doctorsList = [...DOCTORS, ...DOCTORS, ...DOCTORS, ...DOCTORS];

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-[77.625rem] px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-6 md:mb-16">
          <h2 className="text-[#2F2A25] font-display text-[2rem] md:text-[2.5rem] font-medium leading-[1.1] tracking-tight max-w-[500px]">
            Meet the <span className="text-primary">incredible</span> doctors
            we&apos;ve partnered with.
          </h2>
          <div className="flex flex-col gap-6 lg:max-w-[420px]">
            <p className="text-[#2F2A25] text-base md:text-lg leading-[1.6] opacity-90">
              Embody physicians are here to guide you every step of the way,
              bringing both their expertise and genuine care to keep you
              supported.
            </p>
            <div>
              <Button className="bg-gradient-to-r from-[#F59E0B] to-[#EAB308] text-white px-8 py-4 rounded-full font-normal md:font-bold text-[0.875rem] tracking-widest uppercase border-none shadow-lg">
                TAKE THE ASSESSMENT
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 12.5%, black 87.5%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 12.5%, black 87.5%, transparent)',
        }}
      >
        <div className="logo-ticker flex gap-6 w-max select-none">
          {doctorsList.map((doc, i) => (
            <div
              key={`${doc.name}-${i}`}
              className="relative aspect-[4/5] w-[336px] md:w-[350px] shrink-0 overflow-hidden rounded-[56px] bg-[#7A8F97]"
            >
              <Image
                src={doc.src}
                alt={doc.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-sm rounded-[32px] p-6 text-center shadow-lg border border-white/20">
                <h4 className="text-[#2F2A25] font-bold text-lg leading-tight mb-1">
                  {doc.name}
                </h4>
                <p className="text-[#2F2A25] text-[0.6875rem] leading-snug opacity-60">
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
