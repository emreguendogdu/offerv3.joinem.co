const FEATURES = [
  {
    title: 'Embody money back guarantee',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a90b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Free, expedited delivery',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a90b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Doctor-led plans & coaching',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a90b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
        <path d="M8 15v1a6 6 0 006 6v0a6 6 0 006-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: 'No hidden fees',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a90b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v2m0 8v2m-4-6h1.5a2.5 2.5 0 010 5H8m8-5h-1.5a2.5 2.5 0 000-5H16" />
      </svg>
    ),
  },
];

export function FeaturesGrid() {
  return (
    <section className="bg-white py-8 px-4 md:px-8 w-full">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {FEATURES.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center justify-center rounded-[4px] border border-[#e9ecef] bg-[#F8FAFB] py-4 px-6 text-center gap-4"
          >
            <div className="mb-4">{card.icon}</div>
            <p className="text-[#38312C] font-semibold text-sm md:text-base leading-tight">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
