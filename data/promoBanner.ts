import {
  PromoBannerContent,
  PromoBannerContentOverrides,
} from '@/types/promoBanner';

export const defaultPromoBannerContent: PromoBannerContent = {
  heading: 'Limited Time Offer!',
  primaryText: '$170 OFF (GLP1 for $129 today)',
  subText: 'With free shipping and no long term commitment!',
};

// Add partner-specific banner overrides here by utm_term.
// Only include the fields you want to change for that partner.
// Any missing field, or an empty string, will fall back to defaultPromoBannerContent above.
//
// Example:
// forbes: {
//   heading: 'Exclusive Forbes Offer!',
//   primaryText: '50% + $50 OFF (GLP1 for $129 today)',
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
  'web-md': {
    heading: 'Exclusive WebMD Offer!',
  },
  'top-10': {
    heading: 'Exclusive Top10 Offer!',
  },
  'best-weight-loss': {
    heading: 'Exclusive Best Weight Loss Offer!',
  },
  'weight-loss-meds': {
    heading: 'Exclusive WeightLossMeds Offer!',
  },
  'top-5': {
    heading: 'Exclusive Top5 Offer!',
  },
  'best-weight-loss-meds': {
    heading: 'Exclusive BestWeightLossMeds Offer!',
  },
  'compare-treatments': {
    heading: 'Exclusive Compare Treatments Offer!',
  },
  
};
