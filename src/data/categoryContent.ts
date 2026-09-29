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
      title: 'Custom Patches Tailored to Perfection',
      description:
        'Transform your vision into a wearable masterpiece. Explore our range of Chenille, Sublimated, and Embroidered patches designed for maximum durability and unmatched detail.',
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
        type: 'PVC',
        title: 'Signature Molded PVC Patches',
        description: 'High-precision rubber molding for a clean, sharp, and indestructible finish.',
      },
      {
        type: 'Chenille',
        title: 'Iconic Chenille Patches',
        description: 'Plush texture. Bold colors. Classic varsity style. Shop the ultimate collection of iron-on chenille patches.',
      },
      {
        type: 'Printed',
        title: 'Sleek & Seamless Sublimated / DTF Art',
        description:
          'Experience the perfect blend of modern printing and classic patch aesthetics. Lightweight, durable, and ultra-detailed — perfect for hats, hoodies, and custom gear.',
      },
    ],
  },
  {
    category: 'Transfers',
    slug: 'transfers',
    heroImage: transfers,
    hero: {
      eyebrow: 'Heat-applied graphics',
      title: 'Next-Level Transfers. Infinite Possibilities.',
      description:
        'One-stop shop for all your custom transfer needs. Get high-definition, easy-to-apply prints across multiple categories, engineered for maximum durability and vibrant results.',
    },
    collections: [
      {
        type: 'DTF',
        title: 'High-Quality DTF Transfers',
        description:
          'Scale your printing business with our premium "Ready-to-Press" DTF transfers. Get vibrant colors, extreme durability, and professional-grade gang sheets delivered straight to your door.',
      },
      {
        type: 'Gang Sheets',
        title: 'Pro-Scale DTF Gang Sheets',
        description:
          'Maximize your production with high-definition, ready-to-press rolls designed for seamless apparel branding.',
      },
    ],
  },
  {
    category: 'Stickers',
    slug: 'stickers',
    heroImage: stickers,
    hero: {
      eyebrow: 'Custom stickers',
      title: 'Custom Stickers for Every Surface',
      description:
        'From vibrant holographic effects to crystal-clear transparent decals, we bring your designs to life with precision-cut, weather-resistant vinyl. Express yourself with Threadock’s elite sticker collection.',
    },
    collections: [
      {
        type: 'Die-Cut',
        title: 'Weatherproof Custom Die-Cut Decals',
        description:
          'Tough, thick, and UV-resistant. These stickers are built to withstand the elements, making them perfect for your water bottles, laptops, cars, and outdoor gear. Your vision, perfectly shaped.',
      },
      {
        type: 'Holographic',
        title: 'Shimmer & Shine — Premium Holographic Stickers',
        description:
          'Give your brand a futuristic edge! Our holographic stickers feature a stunning rainbow effect that changes with light and perspective. Perfect for making your logo stand out with a high-end, multi-dimensional finish.',
      },
      {
        type: 'Transparent',
        title: 'Premium Transparent Stickers',
        description:
          'Elevate your branding with our seamless, borderless clear vinyl decals. Designed to blend perfectly with any surface, our transparent stickers offer a high-end "printed-on" effect that is waterproof, UV-resistant, and built to last.',
      },
    ],
  },
  {
    category: 'Bags',
    slug: 'bags',
    heroImage: bags,
    hero: {
      eyebrow: 'Bags & packaging',
      title: 'Custom Branded Packaging & Bags',
      description: 'Professional shipping and packaging solutions designed to elevate your brand’s unboxing experience.',
    },
    collections: [
      {
        type: 'Poly Mailers',
        title: 'Heavy-Duty Shipping Mailers',
        description:
          'Lightweight yet indestructible packaging designed to protect your products from the warehouse to the doorstep.',
      },
      {
        type: 'Frosted Poly Bags',
        title: 'Signature Frosted Poly Bags',
        description: 'Elevate your brand’s unboxing experience with our soft-touch, premium matte packaging.',
      },
    ],
  },
  {
    category: 'Keychains',
    slug: 'keychains',
    heroImage: keychains,
    hero: {
      eyebrow: 'Custom keychains',
      title: 'Premium Bespoke Keychain Collection',
      description:
        'Small details, big impressions. Our custom-crafted keychains offer a tactile and stylish way to showcase your brand identity with exceptional clarity and long-lasting quality.',
    },
    collections: [
      {
        type: 'Leather',
        title: 'Premium Leather Keychains',
        description:
          'Elevate your daily essentials with our handcrafted leather collection. From executive car loops to intricate artisan designs, experience the perfect blend of durability and high-end style.',
      },
      {
        type: 'PVC',
        title: 'Vibrant PVC Keychains',
        description:
          'Add a splash of personality to your gear! From cute characters and witty slogans to retro icons, our high-definition 3D PVC keychains are the ultimate "small-but-mighty" accessories.',
      },
    ],
  },
  {
    category: 'Promotional Items',
    slug: 'promotional-items',
    heroImage: promotionalItems,
    hero: {
      eyebrow: 'Promotional items',
      title: 'Your Brand with Premium Custom Merchandise',
      description:
        'High-quality promotional items tailored for your business. From lanyards to bespoke gear, Threadock brings your vision to life with precision and style.',
    },
    collections: [
      {
        type: 'Lanyards',
        title: 'Premium Custom Lanyards for Professional Impact',
        description:
          'Experience the perfect blend of comfort and durability. Our custom lanyards feature vibrant sublimation printing and premium hooks that last as long as your brand.',
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
