import type { BrandLogo } from '../types';
import ridgelineLogo from '../assets/brand-logos/ridgeline.svg';
import northbayLogo from '../assets/brand-logos/northbay.svg';
import fernwoodLogo from '../assets/brand-logos/fernwood.svg';
import gritThreadLogo from '../assets/brand-logos/grit-thread.svg';
import harlowLogo from '../assets/brand-logos/harlow.svg';
import amberAshLogo from '../assets/brand-logos/amber-ash.svg';

export const brandLogos: BrandLogo[] = [
  { id: 'b1', name: 'Ridgeline', logo: ridgelineLogo },
  { id: 'b2', name: 'Northbay', logo: northbayLogo },
  { id: 'b3', name: 'Fernwood Co-op', logo: fernwoodLogo },
  { id: 'b4', name: 'Grit & Thread', logo: gritThreadLogo },
  { id: 'b5', name: 'Harlow Supply', logo: harlowLogo },
  { id: 'b6', name: 'Amber & Ash', logo: amberAshLogo },
];
