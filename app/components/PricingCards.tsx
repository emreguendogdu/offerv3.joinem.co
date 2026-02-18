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
    id: 'semaglutide',
    badge: 'In Stock',
    imageSrc: '/images/1s3iVupz6x0QUBqFUosk3669sc.png',
    imageAlt: 'Semaglutide vial',
    title: 'GLP-1 Injections',
    description: 'One simple injection per week.',
    price: '$149',
    buttonText: 'Get Started',
  },
  {
    id: 'tirzepatide',
    badge: 'In Stock',
    imageSrc: '/images/1s3iVupz6x0QUBqFUosk3669sc.png',
    imageAlt: 'Tirzepatide vial',
    title: 'GLP-1 Injections',
    description: 'One simple injection per week.',
    price: '$149',
    buttonText: 'Get Started',
  },
];

export function PricingCards() {
  return (
    <section className="bg-white py-16 mx-auto max-w-[78.75rem] px-6 text-center">
      <h2 className="font-display text-3xl font-medium leading-[1.2] md:text-[34px]">
        Trusted by experts.
        <br />
        <span className="font-bold text-primary">priced for you.</span>
      </h2>
      <p className="mt-3 text-gray-600">
        Find the right GLP-1 medication with the confidence that comes from
        knowing it is{' '}
        <span className="text-primary font-bold">doctor-approved</span> and
        budget-friendly.
      </p>

      <div className="mt-10 mx-auto max-w-[52.75rem] md:grid md:gap-5 md:grid-cols-2 flex flex-col gap-6">
        {PRICING_CONFIG.map((card) => (
          <div
            key={card.id}
            className="relative rounded-2xl text-left flex flex-col pt-20"
          >
            <div className="relative rounded-t-[inherit] h-[280px] w-full bg-accent">
              <span className="absolute top-3 left-3 z-10 rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white">
                {card.badge}
              </span>
              <div className="relative mx-auto my-6 h-48 w-36 md:w-[200px] md:h-[340px]">
                <div className="w-full h-full absolute -top-1/4 hover:scale-[1.1] transition-all">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-contain select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col gap-5 items-center text-center min-h-[220px] px-8 pt-6 pb-5 bg-[#FAFAFA] rounded-b-[inherit]">
              <div className="flex flex-col gap-2">
                <h3 className="text-center text-lg font-bold">{card.title}</h3>
                <p className=" text-center  text-gray-500">
                  {card.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-center">
                  <span className=" text-gray-500">Starting at</span>{' '}
                  <span className="font-display text-3xl font-black text-primary">
                    {card.price}
                  </span>
                </p>
                <div className="mt-5 w-full">
                  <Button variant="dark" className="w-full justify-center">
                    {card.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
