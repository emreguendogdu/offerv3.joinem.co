import Image from 'next/image';
import { Button } from './ui/Buttons';

interface PricingCard {
  id: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
  buttonText: string;
}

const PRICING_CONFIG: PricingCard[] = [
  {
    id: 'inj_sema',
    badge: 'In Stock',
    imageSrc: '/images/products/inj_sema.webp',
    imageAlt: 'Semaglutide vial',
    title: 'GLP-1 Injection',
    description: 'One simple injection per week.',
    price: '$149',
    buttonText: 'Get Started',
  },
  {
    id: 'gum_sema',
    badge: 'In Stock',
    imageSrc: '/images/products/gum_sema.webp',
    imageAlt: 'Semaglutide gum',
    title: 'GLP-1 Gum',
    description: 'One minty piece per day.',
    price: '$199',
    buttonText: 'Get Started',
  },
];

export function PricingCards() {
  return (
    <section className="bg-white md:mx-auto md:max-w-[78.75rem] px-4 text-center overflow-hidden">
      <h2 className="font-display text-[1.875rem] font-medium leading-[1.25] text-black">
        Trusted by experts.
        <br />
        <span className="font-black text-primary">priced for you.</span>
      </h2>
      <p className="mt-4 text-base leading-[1.4] text-black">
        Find the right GLP-1 medication with the confidence that comes from
        knowing it is{' '}
        <span className="text-primary font-bold">doctor-approved</span>.
      </p>
      {/* Horizontal scroll on narrow viewports */}
      <div className="mt-10 w-full md:mx-auto md:max-w-[52.75rem] overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2 no-scrollbar">
        <div className="flex w-max gap-4 md:gap-6">
          {PRICING_CONFIG.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl text-left flex flex-col pt-20 w-[301px] md:w-[402px] shrink-0"
            >
              <div className="relative rounded-t-[inherit] h-[210px] md:h-[280px] w-full bg-accent">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white">
                  {card.badge}
                </span>
                <div className="relative mx-auto my-6 w-[210px] h-[255px] md:w-[200px] md:h-[340px]">
                  <div className="w-full h-full absolute -top-[30%] md:-top-[27%] hover:scale-[1.1] transition-all">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 400px"
                      className="object-contain select-none pointer-events-none"
                    />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-5 items-center text-center min-h-[220px] px-8 pt-6 pb-5 bg-[#FAFAFA] rounded-b-[inherit]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-center text-lg font-bold">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-base text-center text-gray-500">
                    {card.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-center">
                    <span className=" text-gray-500">Starting at</span>{' '}
                    <span className="font-display text-2xl md:text-3xl font-black text-primary">
                      {card.price}
                    </span>
                  </p>
                  <Button
                    variant="dark"
                    className="w-full justify-center mt-5 py-3"
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
