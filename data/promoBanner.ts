import { PromoBannerContent } from '@/types/promoBanner';

export const defaultPromoBannerContent: PromoBannerContent = {
  heading: 'Limited Time Offer!',
};

// Add new utm_term values here as they come in from partners.
export const promoBannerContentByUtmTerm: Record<string, PromoBannerContent> = {
  forbes: {
    heading: 'Exclusive Forbes Offer!',
  },
  'mens-health': {
    heading: 'Exclusive Mens Health Offer!',
  },
};
