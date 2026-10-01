import type { Testimonial } from '../types';
import mariaAvatar from '../assets/testimonials/maria-ibanez.jpg';
import devonAvatar from '../assets/testimonials/devon-walsh.jpg';
import priyaAvatar from '../assets/testimonials/priya-anand.jpg';
import samAvatar from '../assets/testimonials/sam-okafor.jpg';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Maria Ibanez',
    role: 'Founder, Ridgeline Apparel',
    quote:
      'Turnaround was faster than any supplier we tried before, and the digitizing team caught details our own art file missed.',
    initials: 'MI',
    avatar: mariaAvatar,
    rating: 5,
  },
  {
    id: 't2',
    name: 'Devon Walsh',
    role: 'Team Manager, Northbay Athletics',
    quote:
      'We reorder our woven patches every season and the color match has been consistent every single time.',
    initials: 'DW',
    avatar: devonAvatar,
    rating: 5,
  },
  {
    id: 't3',
    name: 'Priya Anand',
    role: 'Ops Lead, Fernwood Co-op',
    quote:
      'Wholesale pricing plus a real person answering quote questions made this an easy switch from our old vendor.',
    initials: 'PA',
    avatar: priyaAvatar,
    rating: 4,
  },
  {
    id: 't4',
    name: 'Sam Okafor',
    role: 'Owner, Grit & Thread Studio',
    quote:
      'The proof-approval step saved us from a misprint twice. Small thing, but it shows the process is built right.',
    initials: 'SO',
    avatar: samAvatar,
    rating: 5,
  },
];
