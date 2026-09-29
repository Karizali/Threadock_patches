import stickers from '../assets/products/stickers.jpg';
import patches from '../assets/hero_image.webp';
import transfers from '../assets/products/transfers.jpg';
import bags from '../assets/products/bags.jpg';
import keychains from '../assets/products/keychains.jpg';
import promotionalItems from '../assets/products/promotional.jpg';

export interface CategoryCollection {
  /** Matches Product['type'] within this category */
  type: string;
  title: string;
  description: string;
}

export interface CategoryContent {
  category: string;
  slug: string;
  heroImage: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  collections: CategoryCollection[];
}

export const categoryContent: CategoryContent[] = [
  {
    category: 'Patches',
    slug: 'patches',
    heroImage: patches,
    hero: {
      eyebrow: 'Custom patches',
      title: 'Patches built to outlast the jacket.',
      description:
        'Embroidered, woven, PVC, or printed — every patch is digitized in-house and tested on a physical stitch-out before your order ships.',
    },
    collections: [
      {
        type: 'Embroidered',
        title: 'Premium Embroidered Patch Collection',
        description: 'Intricate stitching and 3D textured designs for a classic look.',
      },
      {
        type: 'Woven',
        title: 'Signature Woven Patch Collection',
        description: 'Ultra-fine detailing and a sleek, low-profile finish for premium branding.',
      },
      {
        type: 'Chenille',
        title: 'Varsity Chenille Collection',
        description: 'Bold letterman texture with tackle-twill accents for jackets and team gear.',
      },
      {
        type: 'PVC',
        title: 'Raised PVC Collection',
        description: 'Molded, weatherproof 3D patches built for outdoor and tactical gear.',
      },
      {
        type: 'Printed',
        title: 'Full-Color Printed Collection',
        description: 'Photo-real gradients and fine text that embroidery can’t reproduce.',
      },
      {
        type: 'Sticker',
        title: 'Sticker Patch Collection',
        description: 'Peel-and-stick durability with a die-cut, laptop-ready edge.',
      },
    ],
  },
  {
    category: 'Transfers',
    slug: 'transfers',
    heroImage: transfers,
    hero: {
      eyebrow: 'Heat-applied graphics',
      title: 'Transfers that survive the wash, every time.',
      description:
        'Full-color DTF or single-color screen transfers, pressed to spec and built for stretch, wash, and wear on cotton and blends.',
    },
    collections: [
      {
        type: 'DTF',
        title: 'Full-Color DTF Transfer Collection',
        description: 'Direct-to-film prints with soft hand-feel and vivid color on any fabric.',
      },
      {
        type: 'Screen Print',
        title: 'Screen Print Transfer Collection',
        description: 'Cost-efficient plastisol transfers for large single-color production runs.',
      },
    ],
  },
  {
    category: 'Stickers',
    slug: 'stickers',
    heroImage: stickers,
    hero: {
      eyebrow: 'Custom stickers',
      title: 'Stickers that stick around.',
      description:
        'Weatherproof vinyl and precision die-cut decals, laminated to hold their color through years of sun, rain, and handling.',
    },
    collections: [
      {
        type: 'Vinyl',
        title: 'Weatherproof Vinyl Sticker Collection',
        description: 'UV-resistant, laminate-coated stickers built for years outdoors.',
      },
      {
        type: 'Die-Cut Decal',
        title: 'Die-Cut Decal Collection',
        description: 'Precision-cut shapes with transfer tape, ready for windows and panels.',
      },
    ],
  },
  {
    category: 'Bags',
    slug: 'bags',
    heroImage: bags,
    hero: {
      eyebrow: 'Bags & packaging',
      title: 'Packaging and totes that carry your brand.',
      description:
        'From resealable poly bags for small-parts packaging to heavyweight canvas totes, printed and finished to your spec.',
    },
    collections: [
      {
        type: 'Poly',
        title: 'Resealable Poly Bag Collection',
        description: 'Printed, resealable packaging sized for apparel and small parts.',
      },
      {
        type: 'Canvas',
        title: 'Canvas Tote Collection',
        description: 'Heavyweight canvas totes with reinforced handles, screen-printed to spec.',
      },
    ],
  },
  {
    category: 'Keychains',
    slug: 'keychains',
    heroImage: keychains,
    hero: {
      eyebrow: 'Custom keychains',
      title: 'Keychains your customers actually keep.',
      description:
        'Engraved metal and UV-printed acrylic keychains, boxed individually and built to ride along on every keyring they own.',
    },
    collections: [
      {
        type: 'Metal',
        title: 'Engraved Metal Keychain Collection',
        description: 'Zinc-alloy keychains with color-fill engraving and a split ring.',
      },
      {
        type: 'Acrylic',
        title: 'Acrylic Keychain Collection',
        description: 'UV-printed acrylic charms with a lobster clasp, popular for merch bundles.',
      },
    ],
  },
  {
    category: 'Promotional Items',
    slug: 'promotional-items',
    heroImage: promotionalItems,
    hero: {
      eyebrow: 'Promotional items',
      title: 'Promo products people actually use.',
      description:
        'Lanyards, apparel, and drinkware branded for events, staff, and giveaways — built to be picked up more than once.',
    },
    collections: [
      {
        type: 'Lanyards',
        title: 'Woven Lanyard Collection',
        description: 'Custom woven lanyards with a breakaway clasp for events and staff badges.',
      },
      {
        type: 'Apparel',
        title: 'Team Apparel Collection',
        description: 'Moisture-wicking jerseys with sublimated graphics and roster numbering.',
      },
      {
        type: 'Drinkware',
        title: 'Branded Drinkware Collection',
        description: 'Wraparound-print ceramic mugs, packed for retail or trade-show giveaways.',
      },
    ],
  },
];

export function categoryContentBySlug(slug: string): CategoryContent | undefined {
  return categoryContent.find((c) => c.slug === slug);
}

export function categorySlug(category: string): string {
  return categoryContent.find((c) => c.category === category)?.slug ?? category.toLowerCase().replace(/\s+/g, '-');
}
