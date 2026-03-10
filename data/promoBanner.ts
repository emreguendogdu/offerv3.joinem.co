import {
  PromoBannerContent,
  PromoBannerContentOverrides,
} from '@/types/promoBanner';

export const defaultPromoBannerContent: PromoBannerContent = {
  heading: 'Limited Time Offer!',
  primaryText: '$200 OFF (GLP1 for $99 today)',
  subText: 'With free shipping and no long term commitment!',
};

// Add partner-specific banner overrides here by utm_term.
// Only include the fields you want to change for that partner.
// Any missing field, or an empty string, will fall back to defaultPromoBannerContent above.
//
// Example:
// forbes: {
//   heading: 'Exclusive Forbes Offer!',
//   primaryText: '50% + $50 OFF (GLP1 for $99 today)',
// },
export const promoBannerContentByUtmTerm: Record<
  string,
  PromoBannerContentOverrides
> = {
  forbes: {
    heading: 'Exclusive Forbes Offer!',
  },
  'mens-health': {
    heading: 'Exclusive Mens Health Offer!',
  },
};
