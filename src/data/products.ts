import type { Product } from '../types';

import patchSteamship from '../assets/product_images/patches_category21.jpg';
import patchGardeningSkeleton from '../assets/product_images/patches_category22.jpg';
import patchWildlifeFox from '../assets/product_images/patches_category23.jpg';
import patchAstronautGalaxy from '../assets/product_images/patches_category24.jpg';
import patchTacticalMascot from '../assets/product_images/patches_category31.jpg';
import patchCircularWildlife from '../assets/product_images/patches_category32.jpg';
import patch3dEffect from '../assets/product_images/patches_category33.jpg';
import patchCustomWoven from '../assets/product_images/patches_categrogy11.jpg';
import patchTacticalWasp from '../assets/product_images/patches_categrogy12.jpg';
import patchBrandingSample from '../assets/product_images/patches_categrogy13.jpg';
import patchAngryBull from '../assets/product_images/patches_categrogy14.jpg';
import patchTigerCub from '../assets/product_images/patches_embridery1.jpg';
import patchSmileyFace from '../assets/product_images/patches_embridery2.jpg';
import patchVarsityLetter from '../assets/product_images/patches_embridery3.jpg';
import patchCool from '../assets/product_images/patches_embridery4.jpg';
import patchSublimatedRound from '../assets/product_images/patches_category41.jpg';
import patchHdPrinted from '../assets/product_images/patches_category42.jpg';

import transferGangSheets from '../assets/product_images/Transfers4.jpg';
import transferPremiumCustom from '../assets/product_images/Transfers1.jpg';
import transferReadyToPress from '../assets/product_images/Transfers2.jpg';
import transferUltraHd from '../assets/product_images/Transfers3.jpg';
import transferCreativeHub from '../assets/product_images/Transfers5.jpg';
import transferProConnect from '../assets/product_images/Transfers6.jpg';

import stickerSkull from '../assets/product_images/stickers1.jpg';
import stickerScript from '../assets/product_images/stickers2.jpg';
import stickerRoadTrip from '../assets/product_images/stickers3.jpg';
import stickerCustomShapes from '../assets/product_images/stickers4.jpg';
import stickerFloralDagger from '../assets/product_images/stickers5.jpg';
import stickerTrailblazer from '../assets/product_images/stickers6.jpg';
import stickerHolographicFoil from '../assets/product_images/stickers_holoscopic1.jpg';
import stickerHolographicRainbow from '../assets/product_images/stickers_holoscopic2.jpg';
import stickerHolographicLogo from '../assets/product_images/stickers9.jpg';
import stickerDontPanic from '../assets/product_images/stickers10.jpg';
import stickerSkeletonThumbsUp from '../assets/product_images/stickers11.jpg';
import stickerCustomTransparent from '../assets/product_images/stickers12.jpg';
import stickerKermit from '../assets/product_images/stickers13.jpg';

import bagBranding from '../assets/product_images/bags1.jpg';
import bagCompostable from '../assets/product_images/bags2.jpg';
import bagFrostedApparel from '../assets/product_images/bags3.jpg';
import bagClassicWhite from '../assets/product_images/bags4.jpg';
import bagPolkaDot from '../assets/product_images/bags5.jpg';
import bagFrostedCustom from '../assets/product_images/bags6.jpg';
import bagDieCutHandle from '../assets/product_images/bags7.jpg';
import bagMatteApparel from '../assets/product_images/bags8.jpg';
import bagThreadock from '../assets/product_images/bags9_threadock.jpg';

import keychainMidnightBat from '../assets/product_images/keychains_loopkeychain1.jpg';
import keychainLayeredLeaf from '../assets/product_images/keychains_loopkeychain2.jpg';
import keychainHandcrafted from '../assets/product_images/keychains_loopkeychain3.jpg';
import keychainExecutiveLoop from '../assets/product_images/keychains_loopkeychain4.jpg';
import keychainPopCulture from '../assets/product_images/keychains_clut.jpg';
import keychainKawaii from '../assets/product_images/keychains_3dcharacters.jpg';
import keychainAngryPanda from '../assets/product_images/keychains_angrypanda.jpg';
import keychainNeon from '../assets/product_images/keychains_neon_colorful.jpg';

import lanyardDetachableBuckle from '../assets/product_images/ Keychains_flatwovenkeychain1.jpg';
import lanyardFullColorSublimated from '../assets/product_images/ Keychains_flatwovenkeychain2.jpg';
import lanyardEliteSeries from '../assets/product_images/ Keychains_flatwovenkeychain3.jpg';

export const products: Product[] = [
  // ---- Patches: Embroidered ----
  {
    id: 'p1',
    slug: 'vintage-steamship-artistic-embroidered-patch',
    image: patchSteamship,
    name: 'Vintage Steamship Artistic Embroidered Patch',
    category: 'Patches',
    type: 'Embroidered',
    description:
      'Detailed multi-thread linework brings a vintage steamship scene to life with rich, dimensional texture.',
    monogram: 'VS',
    bestseller: true,
    detail: [
      "Our Vintage Steamship Series channels old-world maritime art onto a modern embroidered patch. Dense, multi-directional stitching builds up the ship's rigging and rolling waves in fine detail, giving the design real depth and a tactile, dimensional feel.",
    ],
    highlights: [
      "Detailed Maritime Artwork: Fine linework captures the ship's rigging, smoke stacks, and rolling waves.",
      'Raised Thread Texture: Dense stitch coverage adds depth and a premium tactile feel.',
      'Vintage Color Palette: Weathered blues and creams keep the artwork looking authentically old-world.',
      'Built to Last: Reinforced edges and a merrowed border stand up to years of wear.',
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Sheen Embroidery Thread' },
      { label: 'Theme', value: 'Vintage Maritime' },
      { label: 'Border', value: 'Clean Embroidered Merrowed Edge' },
      { label: 'Texture', value: 'Dense Multi-Directional Stitching' },
    ],
  },
  {
    id: 'p2',
    slug: 'gardening-skeleton-premium-embroidered-patch',
    image: patchGardeningSkeleton,
    name: 'Gardening Skeleton Premium Embroidered Patch',
    category: 'Patches',
    type: 'Embroidered',
    description: 'Whimsical skeleton artwork rendered in dense thread coverage for a bold, conversation-starting patch.',
    monogram: 'GS',
    detail: [
      'A playful skeleton tends the garden in this densely stitched embroidered patch. Bold outlines and saturated thread colors give the artwork a bold, conversation-starting look that holds up to daily wear.',
    ],
    highlights: [
      'Whimsical Skeleton Artwork: Bold outlines and expressive detail bring the design to life.',
      'Dense Thread Coverage: Full embroidery fill for a rich, textured finish.',
      "Fade-Resistant Colors: Vibrant thread holds its color wash after wash.",
      'Durable & Long-Lasting: Reinforced edges and heavy-duty backing built for daily wear.',
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Sheen Embroidery Thread' },
      { label: 'Theme', value: 'Novelty / Gardening' },
      { label: 'Border', value: 'Clean Embroidered Merrowed Edge' },
      { label: 'Texture', value: 'Dense Fill Stitching' },
    ],
  },
  {
    id: 'p3',
    slug: 'premium-wildlife-series-embroidered-patch',
    image: patchWildlifeFox,
    name: 'Premium Wildlife Series Embroidered Patch',
    category: 'Patches',
    type: 'Embroidered',
    description: 'Fine shading and layered stitching capture every detail of the wildlife series design.',
    monogram: 'WS',
    detail: [
      'Part of our Wildlife Series, this patch captures fine fur, feather, and shading detail through layered embroidery. Every stitch is placed to build gradual shading and depth, so the artwork reads clearly even at a small size.',
    ],
    highlights: [
      'Layered Shading Detail: Multi-tone stitching captures fur and feather texture with precision.',
      'High-Thread-Count Precision: Fine detail holds up even on smaller placements.',
      'Raised 3D Texture: Multi-layered stitching adds depth to the wildlife artwork.',
      'Style Variety: Available in circular, shield, and custom die-cut shapes.',
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Sheen Embroidery Thread' },
      { label: 'Theme', value: 'Wildlife / Nature' },
      { label: 'Border', value: 'Clean Embroidered Merrowed Edge' },
      { label: 'Texture', value: 'High-Density 3D Stitching' },
    ],
  },
  {
    id: 'p4',
    slug: 'premium-astronaut-galaxy-embroidered-patches',
    image: patchAstronautGalaxy,
    name: 'Premium Astronaut & Galaxy Embroidered Patches',
    category: 'Patches',
    type: 'Embroidered',
    description: 'Cosmic artwork stitched with metallic thread accents for a striking astronaut and galaxy motif.',
    monogram: 'AG',
    detail: [
      'Our Space & Galaxy Series brings the wonders of the universe to your apparel. Each patch is crafted using high-quality embroidery threads that capture the bold neon blues, pinks, and yellows of the cosmos, providing a rich tactile feel and a standout look.',
    ],
    highlights: [
      'Detailed Cosmic Artwork: Featuring intricate designs including space shuttles, planets, and astronauts with high-thread-count precision.',
      'Raised 3D Texture: The multi-layered stitching creates a premium, textured surface that adds depth to every planet and star.',
      'Bold High-Contrast Colors: Fade-resistant threads in vibrant teal, magenta, and white that stay bright over time.',
      'Durable & Long-Lasting: Reinforced edges and heavy-duty backing ensure these patches survive any journey, whether on earth or in space.',
      'Style Variety: Available in multiple shapes—circular, shield, and custom die-cut—to fit any placement on your gear.',
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Sheen Embroidery Thread' },
      { label: 'Theme', value: 'Space Exploration / Sci-Fi' },
      { label: 'Border', value: 'Clean Embroidered Merrowed Edge' },
      { label: 'Texture', value: 'High-Density 3D Stitching' },
    ],
  },

  // ---- Patches: Woven ----
  {
    id: 'p5',
    slug: 'tactical-mascot-series-woven-patch',
    image: patchTacticalMascot,
    name: 'Tactical Mascot Series Woven Patch',
    category: 'Patches',
    type: 'Woven',
    description: 'High-density weave renders the tactical mascot artwork in crisp, low-profile detail.',
    monogram: 'TM',
    bestseller: true,
    detail: [
      "Woven at high density, this Tactical Mascot patch renders bold linework and small text in a sleek, low-profile finish that embroidery can't match. It's built for gear that needs to look sharp without adding bulk.",
    ],
    highlights: [
      'Crisp Fine-Line Detail: High-density weave renders sharp edges and small text cleanly.',
      'Low-Profile Finish: Thin, flat weave sits flush against fabric without extra bulk.',
      'Tactical Color Palette: Muted, high-contrast tones built for gear and uniforms.',
      'Durable Construction: Tight weave resists fraying through repeated wash and wear.',
    ],
    specs: [
      { label: 'Material', value: 'High-Density Woven Thread' },
      { label: 'Theme', value: 'Tactical / Mascot' },
      { label: 'Border', value: 'Clean Woven Merrowed Edge' },
      { label: 'Texture', value: 'Fine-Thread Low-Profile Weave' },
    ],
  },
  {
    id: 'p6',
    slug: 'premium-circular-wildlife-woven-patch',
    image: patchCircularWildlife,
    name: 'Premium Circular Wildlife Woven Patch',
    category: 'Patches',
    type: 'Woven',
    description: 'A circular wildlife design woven with fine thread for a smooth, sleek finish.',
    monogram: 'CW',
    detail: [
      'A circular wildlife design rendered in fine woven thread for a smooth, sleek finish. The high-density weave keeps intricate line art crisp at small sizes, ideal for sleeves, hats, and bag tags.',
    ],
    highlights: [
      "Fine-Detail Weave: Captures intricate wildlife linework other methods can't reproduce.",
      'Smooth, Sleek Finish: Low-profile weave feels soft and flat against fabric.',
      'Circular Format: Balanced, symmetrical layout suited to patches and badges.',
      'Built to Last: Tight weave construction resists fraying and fading.',
    ],
    specs: [
      { label: 'Material', value: 'High-Density Woven Thread' },
      { label: 'Theme', value: 'Wildlife / Nature' },
      { label: 'Border', value: 'Clean Woven Merrowed Edge' },
      { label: 'Texture', value: 'Fine-Thread Low-Profile Weave' },
    ],
  },
  {
    id: 'p7',
    slug: '3d-effect-style-woven-patch',
    image: patch3dEffect,
    name: '3D Effect Style Woven Patch',
    category: 'Patches',
    type: 'Woven',
    description: 'Layered weaving technique creates a raised 3D illusion without adding bulk.',
    monogram: '3D',
    detail: [
      'A layered weaving technique builds a raised 3D illusion into this patch without adding real bulk. Light and shadow are woven directly into the design, giving flat artwork visible depth.',
    ],
    highlights: [
      'Raised 3D Illusion: Layered weaving technique adds visible depth to flat artwork.',
      'No Added Bulk: Stays thin and flexible despite the dimensional look.',
      'Sharp Shadow Detail: Precise thread placement defines highlights and shading.',
      'Versatile Placement: Works well on jackets, bags, and caps alike.',
    ],
    specs: [
      { label: 'Material', value: 'High-Density Woven Thread' },
      { label: 'Theme', value: '3D Effect / Novelty' },
      { label: 'Border', value: 'Clean Woven Merrowed Edge' },
      { label: 'Texture', value: 'Layered Dimensional Weave' },
    ],
  },
  {
    id: 'p8',
    slug: 'premium-custom-woven-patch',
    image: patchCustomWoven,
    name: 'Premium Custom Woven Patch',
    category: 'Patches',
    type: 'Woven',
    description: 'Your custom artwork woven at high density for sharp lines and a soft, low-profile feel.',
    monogram: 'CP',
    detail: [
      "Send us your artwork and we'll weave it at high density for sharp lines and a soft, low-profile feel. Ideal for logos, wordmarks, and detailed designs that need to stay crisp at small sizes.",
    ],
    highlights: [
      'Your Custom Artwork: Woven exactly to your design, logo, or wordmark.',
      'High-Density Weave: Keeps fine lines and small text crisp and legible.',
      'Soft, Low-Profile Feel: Thin weave lays flat and comfortable against fabric.',
      'Fast Turnaround: Digitized and proofed quickly for repeat production runs.',
    ],
    specs: [
      { label: 'Material', value: 'High-Density Woven Thread' },
      { label: 'Theme', value: 'Fully Custom' },
      { label: 'Border', value: 'Clean Woven Merrowed Edge' },
      { label: 'Texture', value: 'Fine-Thread Low-Profile Weave' },
    ],
  },

  // ---- Patches: PVC ----
  {
    id: 'p9',
    slug: 'tactical-wasp-clt4-rme-shield-pvc-patch',
    image: patchTacticalWasp,
    name: 'Tactical Wasp "CLT4 RME" Shield PVC Patch',
    category: 'Patches',
    type: 'PVC',
    description: 'Molded rubber shield patch with crisp raised detailing built for tactical gear.',
    monogram: 'TW',
    detail: [
      "Molded from durable rubber, this shield-shaped PVC patch holds crisp raised detail that won't fray or fade. Built for tactical gear that takes a beating and keeps looking sharp.",
    ],
    highlights: [
      'Crisp Raised Detail: Precision molding captures sharp linework and fine text.',
      'Weatherproof Rubber: Shrugs off rain, mud, and UV exposure.',
      'Sealed Edges: Molded construction means no fraying, ever.',
      'Shield Silhouette: Bold shape built for tactical patches and morale gear.',
    ],
    specs: [
      { label: 'Material', value: 'Premium Molded PVC Rubber' },
      { label: 'Theme', value: 'Tactical / Shield' },
      { label: 'Border', value: 'Sealed Molded Edge (No Fraying)' },
      { label: 'Texture', value: 'Raised 3D Molded Relief' },
    ],
  },
  {
    id: 'p10',
    slug: 'custom-branding-sample-pvc-patch-circular',
    image: patchBrandingSample,
    name: 'Custom Branding Sample PVC Patch (Circular)',
    category: 'Patches',
    type: 'PVC',
    description: 'Circular molded PVC patch finished with sharp edges and vivid color fill.',
    monogram: 'BS',
    detail: [
      'A circular molded PVC patch finished with sharp edges and vivid, long-lasting color fill — a clean way to sample how your logo translates into a raised rubber patch.',
    ],
    highlights: [
      "Vivid Color Fill: Saturated, UV-stable color that won't fade in the sun.",
      'Sharp Molded Edges: Clean circular silhouette with crisp detail.',
      'Sample-Ready: Perfect for testing branding before a bulk production run.',
      'Weatherproof Build: Rain, mud, and sun-resistant rubber construction.',
    ],
    specs: [
      { label: 'Material', value: 'Premium Molded PVC Rubber' },
      { label: 'Theme', value: 'Custom Branding' },
      { label: 'Border', value: 'Sealed Molded Edge (No Fraying)' },
      { label: 'Texture', value: 'Raised 3D Molded Relief' },
    ],
  },
  {
    id: 'p11',
    slug: 'tactical-angry-bull-3d-pvc-mascot-patch',
    image: patchAngryBull,
    name: 'Tactical Angry Bull 3D PVC Mascot Patch',
    category: 'Patches',
    type: 'PVC',
    description: 'Bold 3D mascot design molded in durable, weatherproof PVC rubber.',
    monogram: 'AB',
    detail: [
      'A bold 3D mascot design molded in durable, weatherproof PVC rubber. The angry bull artwork is raised in sharp relief for a patch that reads clearly from a distance.',
    ],
    highlights: [
      'Bold 3D Mascot Artwork: Raised relief gives the bull design real presence.',
      'Weatherproof Rubber: Built to handle rain, mud, and sun without fading.',
      'Sealed Edges: Molded construction means no fraying or loose threads.',
      'High-Impact Colors: Deep color fill stays vivid through years of use.',
    ],
    specs: [
      { label: 'Material', value: 'Premium Molded PVC Rubber' },
      { label: 'Theme', value: 'Tactical / Mascot' },
      { label: 'Border', value: 'Sealed Molded Edge (No Fraying)' },
      { label: 'Texture', value: 'Raised 3D Molded Relief' },
    ],
  },

  // ---- Patches: Chenille ----
  {
    id: 'p12',
    slug: 'cute-tiger-cub-chenille-patch',
    image: patchTigerCub,
    name: 'Cute Tiger Cub Chenille Patch',
    category: 'Patches',
    type: 'Chenille',
    description: 'Plush chenille stitching brings a playful tiger cub design to life in bold color.',
    monogram: 'TC',
    bestseller: true,
    detail: [
      'Plush chenille stitching brings this playful tiger cub design to life in bold, saturated color. The thick pile texture gives it that classic varsity-letterman feel.',
    ],
    highlights: [
      'Plush Chenille Texture: Thick pile gives the design a soft, raised feel.',
      'Bold, Playful Artwork: Saturated colors make the tiger cub design pop.',
      'Classic Varsity Style: Iron-on construction ready for jackets and letterman gear.',
      'Built to Last: Reinforced backing holds up to iron-on application and wear.',
    ],
    specs: [
      { label: 'Material', value: 'Plush Chenille Yarn' },
      { label: 'Theme', value: 'Novelty / Animal' },
      { label: 'Border', value: 'Merrowed Varsity Edge' },
      { label: 'Texture', value: 'Raised Plush Pile' },
    ],
  },
  {
    id: 'p13',
    slug: 'retro-smiley-face-chenille-patch',
    image: patchSmileyFace,
    name: 'Retro Smiley Face Chenille Patch',
    category: 'Patches',
    type: 'Chenille',
    description: 'Classic varsity-style chenille texture on a retro smiley face design.',
    monogram: 'SF',
    detail: [
      'A retro smiley face rendered in classic varsity-style chenille texture — thick, plush, and instantly nostalgic. Iron-on ready for jackets, bags, and letterman gear.',
    ],
    highlights: [
      'Retro-Inspired Artwork: Nostalgic smiley design in bold chenille yarn.',
      'Thick Plush Texture: Classic varsity-letterman feel and depth.',
      'Iron-On Ready: Simple application onto jackets, bags, and caps.',
      'Fade-Resistant Yarn: Bright colors that hold up over time.',
    ],
    specs: [
      { label: 'Material', value: 'Plush Chenille Yarn' },
      { label: 'Theme', value: 'Retro / Novelty' },
      { label: 'Border', value: 'Merrowed Varsity Edge' },
      { label: 'Texture', value: 'Raised Plush Pile' },
    ],
  },
  {
    id: 'p14',
    slug: 'custom-chenille-varsity-letter-patch',
    image: patchVarsityLetter,
    name: 'Custom Chenille Varsity Letter Patch',
    category: 'Patches',
    type: 'Chenille',
    description: 'Iron-on varsity letter patch with thick, plush chenille texture.',
    monogram: 'VL',
    detail: [
      'Your letter or initial rendered in thick, plush chenille texture for an authentic varsity look. Iron-on ready and built for jackets, bags, and letterman gear.',
    ],
    highlights: [
      'Custom Letter or Initial: Rendered exactly to your size and color spec.',
      'Authentic Varsity Texture: Thick chenille pile with classic letterman styling.',
      'Iron-On Ready: Quick, clean application onto jackets and bags.',
      'Built to Last: Reinforced backing stands up to repeated wear.',
    ],
    specs: [
      { label: 'Material', value: 'Plush Chenille Yarn' },
      { label: 'Theme', value: 'Varsity Lettering' },
      { label: 'Border', value: 'Merrowed Varsity Edge' },
      { label: 'Texture', value: 'Raised Plush Pile' },
    ],
  },
  {
    id: 'p15',
    slug: 'multi-color-cool-chenille-patch',
    image: patchCool,
    name: 'Multi-Color "COOL" Chenille Patch',
    category: 'Patches',
    type: 'Chenille',
    description: 'Bold multi-color chenille lettering with a raised, tactile finish.',
    monogram: 'CL',
    detail: [
      'Bold multi-color chenille lettering spells out COOL in a thick, raised, tactile finish that stands out from across the room.',
    ],
    highlights: [
      'Multi-Color Lettering: Bold color blocking across each letter.',
      'Raised Tactile Finish: Thick chenille pile you can feel as well as see.',
      'Statement Piece: Built to be the focal point of any jacket or bag.',
      'Iron-On Ready: Easy application for jackets, bags, and caps.',
    ],
    specs: [
      { label: 'Material', value: 'Plush Chenille Yarn' },
      { label: 'Theme', value: 'Bold Lettering' },
      { label: 'Border', value: 'Merrowed Varsity Edge' },
      { label: 'Texture', value: 'Raised Plush Pile' },
    ],
  },

  // ---- Patches: Printed (Sublimated / DTF) ----
  {
    id: 'p16',
    slug: 'high-definition-sublimated-round-sticker-patch',
    image: patchSublimatedRound,
    name: 'High-Definition Sublimated Round Sticker Patch',
    category: 'Patches',
    type: 'Printed',
    description: 'Full-color sublimation printing delivers photo-real detail on a lightweight round patch.',
    monogram: 'HS',
    signature: true,
    detail: [
      "Full-color sublimation printing delivers photo-real detail on a lightweight round patch — the perfect middle ground between a sticker and a patch, with gradients embroidery simply can't reproduce.",
    ],
    highlights: [
      "Photo-Real Detail: Dye sublimation reproduces gradients and fine artwork embroidery can't.",
      'Lightweight & Flexible: Thin profile that sits comfortably on hats and bags.',
      'Soft-Touch Laminate: Smooth, matte finish that resists scuffing.',
      "Laser-Cut Precision: Clean, sealed edges cut exactly to your artwork's shape.",
    ],
    specs: [
      { label: 'Material', value: 'Full-Color Dye Sublimation' },
      { label: 'Theme', value: 'Fully Custom' },
      { label: 'Border', value: 'Laser-Cut Sealed Edge' },
      { label: 'Texture', value: 'Smooth Soft-Touch Laminate' },
    ],
  },
  {
    id: 'p17',
    slug: 'custom-high-definition-printed-patch',
    image: patchHdPrinted,
    name: 'Custom High-Definition Printed Patch',
    category: 'Patches',
    type: 'Printed',
    description: "Ultra-detailed, full-color print finish for artwork embroidery can't reproduce.",
    monogram: 'HP',
    signature: true,
    detail: [
      "An ultra-detailed, full-color print finish for artwork embroidery simply can't reproduce — fine text, gradients, and photo-real imagery all print sharp and vivid.",
    ],
    highlights: [
      'Ultra-Fine Detail: Reproduces small text and gradients with total clarity.',
      "Full-Color Printing: No thread-color limits — print any color in your artwork.",
      'Soft-Touch Laminate: Smooth matte finish that resists scuffing and fading.',
      'Laser-Cut Precision: Sealed edges cut exactly to your custom shape.',
    ],
    specs: [
      { label: 'Material', value: 'Full-Color Dye Sublimation' },
      { label: 'Theme', value: 'Fully Custom' },
      { label: 'Border', value: 'Laser-Cut Sealed Edge' },
      { label: 'Texture', value: 'Smooth Soft-Touch Laminate' },
    ],
  },

  // ---- Transfers: DTF ----
  {
    id: 'p20',
    slug: 'custom-dtf-gang-sheets',
    image: transferGangSheets,
    name: 'Custom DTF Gang Sheets',
    category: 'Transfers',
    type: 'DTF',
    description: 'Multi-design gang sheets printed vivid and ready to press straight out of the bag.',
    monogram: 'GS',
    bestseller: true,
    detail: [
      'Print dozens of designs on a single sheet and press them one at a time as orders come in. Our custom DTF gang sheets pack your artwork edge-to-edge for maximum yield with vivid, wash-durable color on any fabric.',
    ],
  },
  {
    id: 'p21',
    slug: 'premium-custom-dtf-transfers',
    image: transferPremiumCustom,
    name: 'Premium Custom DTF Transfers',
    category: 'Transfers',
    type: 'DTF',
    description: 'Direct-to-film transfer with rich color saturation and long-lasting wash durability.',
    monogram: 'DT',
    detail: [
      'Bring your most complex designs to life with our high-resolution DTF transfers. Featuring vibrant colors and exceptional detail, these transfers are "Ready to Press" on any fabric. Durable, stretchable, and built to last without cracking.',
    ],
  },
  {
    id: 'p22',
    slug: 'premium-dtf-ready-to-press-transfers',
    image: transferReadyToPress,
    name: 'Premium DTF Ready-to-Press Transfers',
    category: 'Transfers',
    type: 'DTF',
    description: 'Pre-cut, ready-to-press transfers built for fast, professional-grade application.',
    monogram: 'RP',
    detail: [
      'Pre-cut and ready straight out of the bag, these DTF transfers press onto any fabric with vibrant, high-resolution color that stretches and flexes without cracking or peeling.',
    ],
  },

  // ---- Transfers: Gang Sheets ----
  {
    id: 'p23',
    slug: 'ultra-hd-custom-dtf-transfer-sheets',
    image: transferUltraHd,
    name: 'Ultra-HD Custom DTF Transfer Sheets',
    category: 'Transfers',
    type: 'Gang Sheets',
    description: 'High-definition transfer sheets built for scaled, seamless apparel production.',
    monogram: 'UH',
    detail: [
      'Built for scaled apparel production, these ultra-HD transfer sheets hold crisp detail and consistent color across every design on the sheet, run after run.',
    ],
  },
  {
    id: 'p24',
    slug: 'creative-hub-dtf-heat-transfer-sheets',
    image: transferCreativeHub,
    name: 'Creative Hub DTF Heat Transfer Sheets',
    category: 'Transfers',
    type: 'Gang Sheets',
    description: 'Ready-to-press heat transfer sheets sized for fast-turnaround production runs.',
    monogram: 'CH',
    detail: [
      'Sized and organized for fast-turnaround production, these ready-to-press heat transfer sheets let small shops keep up with big orders without sacrificing print quality.',
    ],
  },
  {
    id: 'p25',
    slug: 'pro-connect-dtf-gang-sheet-rolls',
    image: transferProConnect,
    name: 'Pro-Connect DTF Gang Sheet Rolls',
    category: 'Transfers',
    type: 'Gang Sheets',
    description: 'Continuous gang sheet rolls engineered for high-volume heat press shops.',
    monogram: 'PC',
    detail: [
      'Continuous gang sheet rolls built for high-volume heat press shops — load once and press design after design without stopping to reload.',
    ],
  },

  // ---- Stickers: Die-Cut ----
  {
    id: 'p27',
    slug: 'neon-melting-skull-die-cut-sticker',
    image: stickerSkull,
    name: 'Neon Melting Skull (Die-Cut Sticker)',
    category: 'Stickers',
    type: 'Die-Cut',
    description: 'Vibrant neon gradient skull artwork cut precisely to shape for maximum visual impact.',
    monogram: 'NS',
    bestseller: true,
    detail: [
      'Vibrant neon gradients drip across this melting skull design, cut precisely to its custom contour for a bold, shaped look that pops off any surface.',
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Opacity Cast Vinyl' },
      { label: 'Finish', value: 'Gloss UV Laminate' },
      { label: 'Cut Type', value: 'Precision Die-Cut (Custom Contour)' },
      { label: 'Durability', value: 'Waterproof, Weatherproof, and UV Resistant' },
      { label: 'Application', value: 'Laptops, Water Bottles, Cars, and Outdoor Gear' },
    ],
  },
  {
    id: 'p28',
    slug: 'inspirational-script-die-cut-laptop-sticker',
    image: stickerScript,
    name: 'Inspirational Script Die-Cut Laptop Sticker',
    category: 'Stickers',
    type: 'Die-Cut',
    description: 'Hand-lettered script quote die-cut for a clean, laptop-ready finish.',
    monogram: 'IS',
    detail: [
      "Fuel your daily ambition with a visual reminder that success starts from within. Our Mindset Is Everything sticker is crafted for those who value both high-quality design and powerful messaging. Using an advanced die-cutting process, the sticker follows the exact contour of the bold, industrial-style lettering, giving it a custom 'painted-on' look once applied.",
      "Printed on professional-grade, weather-resistant vinyl with a sleek matte finish, this sticker is built to last. Whether it's on your laptop, water bottle, or workstation, the high-opacity ink ensures the black-and-white contrast remains sharp and clear for years to come.",
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Opacity Cast Vinyl' },
      { label: 'Finish', value: 'Luxury Anti-Glare Matte Coating' },
      { label: 'Cut Type', value: 'Precision Die-Cut (Custom Contour)' },
      { label: 'Durability', value: 'Waterproof, Weatherproof, and UV Resistant' },
      { label: 'Adhesive', value: 'Pressure-Sensitive, Residue-Free Permanent Bond' },
      { label: 'Ink Quality', value: 'High-Definition Eco-Solvent (Fade-Proof)' },
      { label: 'Application', value: 'Laptops, Planners, Water Bottles, and Hard-Shell Cases' },
      { label: 'Cleanup', value: 'Wipeable with damp cloth; Scratch-resistant surface' },
    ],
  },
  {
    id: 'p29',
    slug: 'road-trip-adventure-die-cut-sticker',
    image: stickerRoadTrip,
    name: '"Road Trip" Adventure Die-Cut Sticker',
    category: 'Stickers',
    type: 'Die-Cut',
    description: 'Adventure-themed artwork cut to shape and built to survive the elements.',
    monogram: 'RT',
    detail: [
      'Adventure-themed artwork — road signs, map pins, and open highway — cut to shape and printed on tough, UV-resistant vinyl built to survive the elements.',
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Opacity Cast Vinyl' },
      { label: 'Finish', value: 'Gloss UV Laminate' },
      { label: 'Cut Type', value: 'Precision Die-Cut (Custom Contour)' },
      { label: 'Durability', value: 'Waterproof, Weatherproof, and UV Resistant' },
      { label: 'Application', value: 'Laptops, Water Bottles, Cars, and Outdoor Gear' },
    ],
  },
  {
    id: 'p30',
    slug: 'custom-die-cut-stickers-your-design-your-shape',
    image: stickerCustomShapes,
    name: 'Custom Die-Cut Stickers – Your Design, Your Shape',
    category: 'Stickers',
    type: 'Die-Cut',
    description: 'Your artwork cut to any custom shape on tough, UV-resistant vinyl.',
    monogram: 'YD',
    detail: [
      "Send us your artwork and we'll cut it to any custom shape on tough, UV-resistant vinyl — no rectangle borders, just your design exactly as you drew it.",
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Opacity Cast Vinyl' },
      { label: 'Finish', value: 'Gloss UV Laminate' },
      { label: 'Cut Type', value: 'Precision Die-Cut (Fully Custom Contour)' },
      { label: 'Durability', value: 'Waterproof, Weatherproof, and UV Resistant' },
      { label: 'Application', value: 'Laptops, Water Bottles, Cars, and Outdoor Gear' },
    ],
  },
  {
    id: 'p31',
    slug: 'floral-dagger-true-crime-vinyl-decal',
    image: stickerFloralDagger,
    name: 'Floral Dagger True Crime Vinyl Decal',
    category: 'Stickers',
    type: 'Die-Cut',
    description: 'Bold floral dagger artwork printed on thick, weatherproof vinyl.',
    monogram: 'FD',
    detail: [
      "Bold floral dagger artwork printed in saturated color on thick, weatherproof vinyl — cut precisely to the illustration's edge for a striking, shaped decal.",
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Opacity Cast Vinyl' },
      { label: 'Finish', value: 'Gloss UV Laminate' },
      { label: 'Cut Type', value: 'Precision Die-Cut (Custom Contour)' },
      { label: 'Durability', value: 'Waterproof, Weatherproof, and UV Resistant' },
      { label: 'Application', value: 'Laptops, Water Bottles, Cars, and Outdoor Gear' },
    ],
  },
  {
    id: 'p32',
    slug: 'hit-the-trails-adventure-die-cut-sticker',
    image: stickerTrailblazer,
    name: '"Hit the Trails" Adventure Die-Cut Sticker',
    category: 'Stickers',
    type: 'Die-Cut',
    description: 'Rugged outdoor-themed decal die-cut for water bottles and gear.',
    monogram: 'HT',
    detail: [
      'A rugged outdoor-themed decal die-cut to shape and built for water bottles, hydro flasks, and gear that spends its life outside.',
    ],
    specs: [
      { label: 'Material', value: 'Premium High-Opacity Cast Vinyl' },
      { label: 'Finish', value: 'Gloss UV Laminate' },
      { label: 'Cut Type', value: 'Precision Die-Cut (Custom Contour)' },
      { label: 'Durability', value: 'Waterproof, Weatherproof, and UV Resistant' },
      { label: 'Application', value: 'Laptops, Water Bottles, Cars, and Outdoor Gear' },
    ],
  },

  // ---- Stickers: Holographic ----
  {
    id: 'p33',
    slug: 'holographic-foil-sticker',
    image: stickerHolographicFoil,
    name: 'Holographic Foil Sticker',
    category: 'Stickers',
    type: 'Holographic',
    description: 'Shimmering foil finish shifts color and shine with every angle of light.',
    monogram: 'HF',
    detail: [
      'A shimmering foil finish shifts color and shine with every angle of light, giving any logo a futuristic, multi-dimensional edge.',
    ],
    specs: [
      { label: 'Material', value: 'Holographic Rainbow Vinyl' },
      { label: 'Finish', value: 'Multi-Dimensional Holographic Foil' },
      { label: 'Cut Type', value: 'Precision Die-Cut' },
      { label: 'Durability', value: 'Waterproof and Scratch-Resistant' },
      { label: 'Application', value: 'Laptops, Bottles, and Branding' },
    ],
  },
  {
    id: 'p34',
    slug: 'holographic-rainbow-decal',
    image: stickerHolographicRainbow,
    name: 'Holographic Rainbow Decal',
    category: 'Stickers',
    type: 'Holographic',
    description: 'Rainbow holographic effect gives any logo a futuristic, eye-catching edge.',
    monogram: 'HR',
    detail: [
      "A full rainbow holographic effect washes across this decal as the light shifts, giving any logo a bold, futuristic edge that's impossible to ignore.",
    ],
    specs: [
      { label: 'Material', value: 'Holographic Rainbow Vinyl' },
      { label: 'Finish', value: 'Multi-Dimensional Holographic Foil' },
      { label: 'Cut Type', value: 'Precision Die-Cut' },
      { label: 'Durability', value: 'Waterproof and Scratch-Resistant' },
      { label: 'Application', value: 'Laptops, Bottles, and Branding' },
    ],
  },
  {
    id: 'p35',
    slug: 'holographic-logo-sticker',
    image: stickerHolographicLogo,
    name: 'Holographic Logo Sticker',
    category: 'Stickers',
    type: 'Holographic',
    description: 'High-end holographic finish makes your logo pop with a multi-dimensional shine.',
    monogram: 'HL',
    detail: [
      'Your logo printed with a high-end holographic finish that shifts and shines with every angle, giving your branding a premium, multi-dimensional look.',
    ],
    specs: [
      { label: 'Material', value: 'Holographic Rainbow Vinyl' },
      { label: 'Finish', value: 'Multi-Dimensional Holographic Foil' },
      { label: 'Cut Type', value: 'Precision Die-Cut' },
      { label: 'Durability', value: 'Waterproof and Scratch-Resistant' },
      { label: 'Application', value: 'Laptops, Bottles, and Branding' },
    ],
  },

  // ---- Stickers: Transparent ----
  {
    id: 'p36',
    slug: 'dont-panic-clear-vinyl-sticker',
    image: stickerDontPanic,
    name: "Don't Panic! – Clear Vinyl Sticker",
    category: 'Stickers',
    type: 'Transparent',
    description: 'Borderless clear vinyl print with a seamless, printed-on look.',
    monogram: 'DP',
    detail: [
      'Borderless clear vinyl printing gives this design a seamless, printed-on look that blends right into any surface — no white background, no visible edges.',
    ],
    specs: [
      { label: 'Material', value: 'Crystal-Clear Vinyl' },
      { label: 'Finish', value: 'Seamless "Printed-On" Clear Finish' },
      { label: 'Cut Type', value: 'Precision Die-Cut' },
      { label: 'Durability', value: 'Waterproof and UV-Resistant' },
      { label: 'Application', value: 'Windows, Laptops, and Smooth Surfaces' },
    ],
  },
  {
    id: 'p37',
    slug: 'skeleton-thumbs-up-clear-vinyl-sticker',
    image: stickerSkeletonThumbsUp,
    name: 'Skeleton Thumbs Up – Clear Vinyl Sticker',
    category: 'Stickers',
    type: 'Transparent',
    description: 'Playful skeleton artwork on crystal-clear, waterproof vinyl.',
    monogram: 'SU',
    detail: [
      'Playful skeleton artwork printed on crystal-clear, waterproof vinyl for a fun decal that looks printed directly onto whatever surface it\'s applied to.',
    ],
    specs: [
      { label: 'Material', value: 'Crystal-Clear Vinyl' },
      { label: 'Finish', value: 'Seamless "Printed-On" Clear Finish' },
      { label: 'Cut Type', value: 'Precision Die-Cut' },
      { label: 'Durability', value: 'Waterproof and UV-Resistant' },
      { label: 'Application', value: 'Windows, Laptops, and Smooth Surfaces' },
    ],
  },
  {
    id: 'p38',
    slug: 'custom-shape-die-cut-transparent-stickers',
    image: stickerCustomTransparent,
    name: 'Custom Shape Die-Cut Transparent Stickers',
    category: 'Stickers',
    type: 'Transparent',
    description: 'Your artwork cut to custom shape on high-clarity transparent vinyl.',
    monogram: 'CT',
    detail: [
      'Your artwork cut to any custom shape on high-clarity transparent vinyl, so the sticker disappears and only your design shows through.',
    ],
    specs: [
      { label: 'Material', value: 'Crystal-Clear Vinyl' },
      { label: 'Finish', value: 'Seamless "Printed-On" Clear Finish' },
      { label: 'Cut Type', value: 'Precision Die-Cut (Fully Custom Contour)' },
      { label: 'Durability', value: 'Waterproof and UV-Resistant' },
      { label: 'Application', value: 'Windows, Laptops, and Smooth Surfaces' },
    ],
  },
  {
    id: 'p39',
    slug: 'kermit-slap-transparent-vinyl-sticker',
    image: stickerKermit,
    name: 'Kermit "Slap" – Transparent Vinyl Sticker',
    category: 'Stickers',
    type: 'Transparent',
    description: 'Fun character artwork printed on clear vinyl for a clean, borderless finish.',
    monogram: 'KS',
    detail: [
      'Fun character artwork printed on clear vinyl for a clean, borderless finish that looks great on laptops, bottles, and windows alike.',
    ],
    specs: [
      { label: 'Material', value: 'Crystal-Clear Vinyl' },
      { label: 'Finish', value: 'Seamless "Printed-On" Clear Finish' },
      { label: 'Cut Type', value: 'Precision Die-Cut' },
      { label: 'Durability', value: 'Waterproof and UV-Resistant' },
      { label: 'Application', value: 'Windows, Laptops, and Smooth Surfaces' },
    ],
  },

  // ---- Bags: Poly Mailers ----
  {
    id: 'p40',
    slug: 'custom-printed-branding-poly-mailers',
    image: bagBranding,
    name: 'Custom Printed Branding Poly Mailers',
    category: 'Bags',
    type: 'Poly Mailers',
    description: 'Full-color branded mailers built tough for the trip from warehouse to doorstep.',
    monogram: 'BM',
    signature: true,
    detail: ['Add a personal touch to your deliveries with custom printed text and designs on high-strength poly bags.'],
  },
  {
    id: 'p41',
    slug: 'compostable-eco-friendly-poly-mailer',
    image: bagCompostable,
    name: 'Compostable Eco-Friendly Poly Mailer',
    category: 'Bags',
    type: 'Poly Mailers',
    description: 'Compostable packaging that protects your product without the environmental cost.',
    monogram: 'EM',
    detail: [
      'Ship sustainably without compromising on strength — this compostable mailer breaks down naturally while still protecting your product through transit.',
    ],
  },
  {
    id: 'p42',
    slug: 'premium-frosted-poly-mailer-for-apparel',
    image: bagFrostedApparel,
    name: 'Premium Frosted Poly Mailer for Apparel',
    category: 'Bags',
    type: 'Poly Mailers',
    description: 'Soft-touch frosted mailer sized and reinforced for apparel shipments.',
    monogram: 'FM',
    detail: [
      "A soft-touch frosted finish sized and reinforced specifically for apparel shipments, giving your packages a premium first impression straight from the mailbox.",
    ],
  },
  {
    id: 'p43',
    slug: 'classic-white-self-seal-poly-mailers',
    image: bagClassicWhite,
    name: 'Classic White Self-Seal Poly Mailers',
    category: 'Bags',
    type: 'Poly Mailers',
    description: 'Durable self-seal mailers in classic white, built for everyday shipping.',
    monogram: 'WM',
    detail: [
      'A dependable, no-frills mailer in classic white with a strong self-seal strip — built for everyday shipping at any volume.',
    ],
  },
  {
    id: 'p44',
    slug: 'designer-polka-dot-poly-mailers',
    image: bagPolkaDot,
    name: 'Designer Polka Dot Poly Mailers',
    category: 'Bags',
    type: 'Poly Mailers',
    description: 'Playful polka dot print adds branded personality to every shipment.',
    monogram: 'PD',
    detail: [
      'A playful polka dot print adds branded personality to every shipment, turning a simple mailer into part of the unboxing experience.',
    ],
  },

  // ---- Bags: Frosted Poly Bags ----
  {
    id: 'p45',
    slug: 'premium-custom-frosted-poly-bag',
    image: bagFrostedCustom,
    name: 'Premium Custom Frosted Poly Bag',
    category: 'Bags',
    type: 'Frosted Poly Bags',
    description: "Soft-touch matte finish elevates your product's unboxing moment.",
    monogram: 'FB',
    detail: [
      "A soft-touch matte finish elevates your product's unboxing moment, giving retail and e-commerce packaging a premium, boutique feel.",
    ],
  },
  {
    id: 'p46',
    slug: 'frosted-die-cut-handle-poly-bag',
    image: bagDieCutHandle,
    name: 'Frosted Die-Cut Handle Poly Bag',
    category: 'Bags',
    type: 'Frosted Poly Bags',
    description: 'Frosted poly bag with a die-cut handle for a premium retail feel.',
    monogram: 'HB',
    detail: [
      'A frosted poly bag finished with a die-cut handle for a premium retail feel — sturdy enough to carry product, polished enough to double as a shopping bag.',
    ],
  },
  {
    id: 'p47',
    slug: 'premium-matte-apparel-packaging-bags',
    image: bagMatteApparel,
    name: 'Premium Matte Apparel Packaging Bags',
    category: 'Bags',
    type: 'Frosted Poly Bags',
    description: 'Matte-finish packaging sized and reinforced for folded apparel.',
    monogram: 'MB',
    detail: [
      'Matte-finish packaging sized and reinforced for folded apparel, keeping garments protected while presenting them with a clean, premium look.',
    ],
  },
  {
    id: 'p48',
    slug: 'threadock-customization-premium-frosted-poly-bag',
    image: bagThreadock,
    name: 'Threadock Customization Premium Frosted Poly Bag',
    category: 'Bags',
    type: 'Frosted Poly Bags',
    description: 'Signature frosted poly bag branded with your logo for a polished unboxing experience.',
    monogram: 'TD',
    detail: [
      'Our signature frosted poly bag, branded with your logo for a polished unboxing experience that customers remember.',
    ],
  },

  // ---- Keychains: Leather ----
  {
    id: 'p50',
    slug: 'midnight-bat-leather-keychain',
    image: keychainMidnightBat,
    name: 'Midnight Bat Leather Keychain',
    category: 'Keychains',
    type: 'Leather',
    description: 'Hand-stitched leather keychain with a laser-etched bat design for a bold, everyday-carry look.',
    monogram: 'MB',
    bestseller: true,
    tagline: 'Bold Style, Built to Last',
    detail: [
      'Hand-stitched from thick, genuine leather and finished with a laser-etched bat design, this keychain trades a subtle look for a bold, everyday-carry statement piece.',
    ],
    highlights: [
      'Permanent Laser Engraving: Etched deep into the leather for a design that never fades or peels.',
      'Hand-Stitched Construction: Reinforced stitching built to handle daily wear.',
      'Bold Debossed Look: The etched design creates a striking, tactile contrast.',
      'The Perfect Gift: A standout giveaway for brands, clubs, and personal gifting alike.',
    ],
    specs: [
      { label: 'Leather Type', value: 'Thick Veg-Tanned Genuine Leather' },
      { label: 'Dimensions', value: 'Perfect 3-4 inch loop for easy grip' },
      { label: 'Customization', value: 'Available for all Logos & Personal Names' },
      { label: 'Rivets', value: 'Rust-Proof Polished Chrome' },
    ],
  },
  {
    id: 'p51',
    slug: 'artisan-layered-leather-leaf-keychain',
    image: keychainLayeredLeaf,
    name: 'Artisan Layered Leather Leaf Keychain',
    category: 'Keychains',
    type: 'Leather',
    description: 'Layered leather cut and stitched into a detailed, artisan leaf design.',
    monogram: 'LL',
    tagline: 'Handcrafted Detail, Naturally Inspired',
    detail: [
      "Layers of leather are cut and stitched by hand into a detailed leaf design, giving this keychain the kind of texture and depth mass production can't replicate.",
    ],
    highlights: [
      'Hand-Layered Construction: Multiple leather layers stitched for real depth and texture.',
      'Artisan Detailing: Every leaf vein and edge is cut and finished by hand.',
      'Premium Finishing: Burnished edges for a smooth, refined feel.',
      'One-of-a-Kind Look: No two pieces stitch up exactly alike.',
    ],
    specs: [
      { label: 'Leather Type', value: 'Thick Veg-Tanned Genuine Leather' },
      { label: 'Dimensions', value: 'Compact 2-3 inch layered design' },
      { label: 'Customization', value: 'Available for personal names and initials' },
      { label: 'Rivets', value: 'Rust-Proof Polished Chrome' },
    ],
  },
  {
    id: 'p52',
    slug: 'premium-handcrafted-leather-keychains',
    image: keychainHandcrafted,
    name: 'Premium Handcrafted Leather Keychains',
    category: 'Keychains',
    type: 'Leather',
    description: 'Full-grain leather handcrafted for durability with a refined, minimal look.',
    monogram: 'HL',
    tagline: 'Full-Grain Leather, Refined and Minimal',
    detail: [
      'Handcrafted from full-grain leather and finished with a refined, minimal look, this keychain is built for durability without shouting for attention.',
    ],
    highlights: [
      'Full-Grain Leather: The most durable leather grade, ages beautifully over time.',
      'Minimal, Refined Design: A clean look that fits any brand or personal style.',
      'Premium Finishing: Burnished edges secured with a shining silver rivet.',
      'The Perfect Corporate Gift: A best-seller for corporate giveaways and dealerships.',
    ],
    specs: [
      { label: 'Leather Type', value: 'Full-Grain Genuine Leather' },
      { label: 'Dimensions', value: 'Perfect 3-4 inch loop for easy grip' },
      { label: 'Customization', value: 'Available for all Logos & Personal Names' },
      { label: 'Rivets', value: 'Rust-Proof Polished Chrome' },
    ],
  },
  {
    id: 'p53',
    slug: 'executive-leather-loop-keychains',
    image: keychainExecutiveLoop,
    name: 'Executive Leather Loop Keychains',
    category: 'Keychains',
    type: 'Leather',
    description: 'Executive-style leather loop keychain built for daily car and office use.',
    monogram: 'EL',
    tagline: 'The Gold Standard for Key Accessories',
    detail: [
      'Your keys deserve a serious upgrade. Our Leather Loop Collection is crafted from exceptionally strong leather that easily handles daily wear and tear. The minimalist loop design looks sharp and stays comfortable to carry in a pocket.',
    ],
    highlights: [
      'Permanent Engraving: High-tech laser engraving means your logo or brand name never fades — the engraving goes deep into the leather for a true debossed effect.',
      "Vibrant Color Palette: From bright red for a car brand to sleek black for a motorcycle brand, we have colors to match any brand's theme.",
      'Premium Finishing: Edges are finely burnished smooth and secured with a shining silver rivet that adds to the luxury look.',
      'The Perfect Corporate Gift: These keychains are a top giveaway item for car dealerships, bike clubs, and corporate offices.',
    ],
    specs: [
      { label: 'Leather Type', value: 'Thick Veg-Tanned Genuine Leather' },
      { label: 'Dimensions', value: 'Perfect 3-4 inch loop for easy grip' },
      { label: 'Customization', value: 'Available for all Car/Bike Logos & Personal Names' },
      { label: 'Rivets', value: 'Rust-Proof Polished Chrome' },
    ],
  },

  // ---- Keychains: PVC ----
  {
    id: 'p54',
    slug: 'ultimate-pop-culture-pvc-keychain-collection',
    image: keychainPopCulture,
    name: 'Ultimate Pop Culture PVC Keychain Collection',
    category: 'Keychains',
    type: 'PVC',
    description: 'Fun pop-culture-inspired 3D PVC keychains packed with personality.',
    monogram: 'PC',
    tagline: 'Small Charms, Big Personality',
    detail: [
      'Fun, pop-culture-inspired 3D PVC keychains packed with personality — molded in high-definition detail and bright, saturated color.',
    ],
    highlights: [
      'High-Definition 3D Molding: Sharp detail captures every character feature.',
      "Vibrant, Saturated Colors: UV-stable rubber that won't fade with daily use.",
      'Collectible Appeal: Designed to be traded, collected, and shown off.',
      'Durable Everyday Carry: Flexible rubber construction resists cracking.',
    ],
    specs: [
      { label: 'Material', value: 'Soft PVC Rubber' },
      { label: 'Finish', value: 'High-Definition 3D Molded Detail' },
      { label: 'Dimensions', value: 'Compact 2-3 inch charm' },
      { label: 'Attachment', value: 'Standard Split Ring' },
    ],
  },
  {
    id: 'p55',
    slug: 'kawaii-motivational-pvc-keychains',
    image: keychainKawaii,
    name: 'Kawaii Motivational PVC Keychains',
    category: 'Keychains',
    type: 'PVC',
    description: 'Cute kawaii-style keychains with playful, motivational messaging.',
    monogram: 'KM',
    tagline: 'Cute Charms, Big Encouragement',
    detail: [
      'Cute kawaii-style keychains paired with playful, motivational messaging — a small daily pick-me-up that clips right onto your keys or bag.',
    ],
    highlights: [
      'Kawaii-Style Artwork: Soft, rounded character design molded in vivid color.',
      'Motivational Messaging: A playful daily reminder built right into the design.',
      'High-Definition Molding: Crisp detail even at a small charm size.',
      'Durable Everyday Carry: Flexible rubber construction resists cracking.',
    ],
    specs: [
      { label: 'Material', value: 'Soft PVC Rubber' },
      { label: 'Finish', value: 'High-Definition 3D Molded Detail' },
      { label: 'Dimensions', value: 'Compact 2-3 inch charm' },
      { label: 'Attachment', value: 'Standard Split Ring' },
    ],
  },
  {
    id: 'p56',
    slug: 'angry-panda-pvc-keychain',
    image: keychainAngryPanda,
    name: 'Angry Panda PVC Keychain',
    category: 'Keychains',
    type: 'PVC',
    description: 'Bold 3D panda design molded in vibrant, high-definition PVC.',
    monogram: 'AP',
    tagline: 'Bold Character, Built to Last',
    detail: [
      'A bold 3D panda design molded in vibrant, high-definition PVC — big personality packed into a small, durable everyday-carry charm.',
    ],
    highlights: [
      'Bold 3D Character Design: High-definition molding captures every expressive detail.',
      "Vibrant, Saturated Colors: UV-stable rubber that won't fade with daily use.",
      'Durable Everyday Carry: Flexible rubber construction resists cracking.',
      'Fun Conversation Starter: A charm that gets noticed on any keyring or bag.',
    ],
    specs: [
      { label: 'Material', value: 'Soft PVC Rubber' },
      { label: 'Finish', value: 'High-Definition 3D Molded Detail' },
      { label: 'Dimensions', value: 'Compact 2-3 inch charm' },
      { label: 'Attachment', value: 'Standard Split Ring' },
    ],
  },
  {
    id: 'p57',
    slug: 'premium-neon-vibrant-rubber-keychain',
    image: keychainNeon,
    name: 'Premium Neon Vibrant Rubber Keychain',
    category: 'Keychains',
    type: 'PVC',
    description: 'Neon-bright rubber keychain molded for maximum color pop.',
    monogram: 'NV',
    tagline: 'Maximum Color, Maximum Pop',
    detail: [
      'A neon-bright rubber keychain molded for maximum color pop — built to stand out on any keyring, backpack, or bag.',
    ],
    highlights: [
      'Neon Color Fill: Bright, saturated rubber that catches the eye instantly.',
      'High-Definition Molding: Clean, crisp edges on every design.',
      'Durable Everyday Carry: Flexible rubber construction resists cracking.',
      'UV-Stable Color: Stays bright even with daily outdoor use.',
    ],
    specs: [
      { label: 'Material', value: 'Soft PVC Rubber' },
      { label: 'Finish', value: 'High-Definition 3D Molded Detail' },
      { label: 'Dimensions', value: 'Compact 2-3 inch charm' },
      { label: 'Attachment', value: 'Standard Split Ring' },
    ],
  },

  // ---- Promotional Items: Lanyards ----
  {
    id: 'p58',
    slug: 'custom-detachable-buckle-lanyards-with-safety-breakaway',
    image: lanyardDetachableBuckle,
    name: 'Custom Detachable Buckle Lanyards with Safety Breakaway',
    category: 'Promotional Items',
    type: 'Lanyards',
    description: 'Detachable buckle lanyard with a safety breakaway clasp for everyday event use.',
    monogram: 'DB',
    highlights: [
      'Detachable Safety Buckle: Quick-release breakaway clasp built for everyday event safety.',
      "Comfortable Flat Weave: Smooth, soft-touch polyester that won't irritate skin.",
      'Vibrant Sublimation Printing: Full-color logos that stay crisp and fade-resistant.',
      'Secure ID Ring: High-tension metal ring holds badges, keys, or tech accessories.',
      'Built for Events: Ideal for conferences, staff badges, and trade shows.',
    ],
    specs: [
      { label: 'Material', value: 'Premium Soft-Touch Flat Polyester' },
      { label: 'Printing Style', value: 'High-Definition Double-Sided Sublimation' },
      { label: 'Hardware', value: 'Detachable Safety Breakaway Buckle' },
      { label: 'Width', value: 'Professional Standard 20mm' },
      { label: 'Best For', value: 'Events, Conferences, and Staff Badges' },
    ],
  },
  {
    id: 'p59',
    slug: 'premium-full-color-sublimated-custom-lanyards',
    image: lanyardFullColorSublimated,
    name: 'Premium Full-Color Sublimated Custom Lanyards',
    category: 'Promotional Items',
    type: 'Lanyards',
    description: 'Full-color sublimated lanyard printed edge-to-edge with premium hardware.',
    monogram: 'FL',
    highlights: [
      'Edge-to-Edge Full-Color Print: Sublimation printing with no white space or gaps.',
      "Comfortable Flat Weave: Smooth, soft-touch polyester that won't irritate skin.",
      'Premium Hardware: Reinforced metal clip built to hold up to daily use.',
      'Fade-Resistant Color: Advanced heat-transfer technology locks in vivid color.',
      'Versatile Branding: A professional choice for offices, events, and staff uniforms.',
    ],
    specs: [
      { label: 'Material', value: 'Premium Soft-Touch Flat Polyester' },
      { label: 'Printing Style', value: 'High-Definition Double-Sided Sublimation' },
      { label: 'Hardware', value: 'Reinforced Metal Clip' },
      { label: 'Width', value: 'Professional Standard 20mm' },
      { label: 'Best For', value: 'Corporate ID, Events, and Staff Uniforms' },
    ],
  },
  {
    id: 'p60',
    slug: 'elite-series-custom-branding-lanyard',
    image: lanyardEliteSeries,
    name: 'Elite Series Custom Branding Lanyard',
    category: 'Promotional Items',
    type: 'Lanyards',
    description: 'Heavyweight woven lanyard finished with premium hooks built to last as long as your brand.',
    monogram: 'EB',
    highlights: [
      'Integrated Heavy-Duty Hardware: Features a reinforced, quick-release buckle and a high-tension metal ring that securely holds ID badges, keys, or tech accessories.',
      "Modern Tech Aesthetic: The bold black and red contrast, combined with sleek chevron patterns, creates an innovative 'high-tech' look that elevates your brand's perceived value.",
      'High-Grade Comfort Fabric: Crafted from premium-grade flat polyester that offers a smooth, silk-like tactile feel, ensuring no skin irritation during long working hours.',
      'Precision Sublimation Printing: Utilizes advanced heat-transfer technology to ensure your logo and icons remain crisp, vibrant, and completely fade-resistant over time.',
      'Versatile Branding Solution: The ultimate professional choice for corporate offices, trade show exhibitions, and specialized tech team uniforms.',
    ],
    specs: [
      { label: 'Material', value: 'Premium Soft-Touch Flat Polyester' },
      { label: 'Printing Style', value: 'High-Definition Double-Sided Sublimation' },
      { label: 'Hardware', value: 'Quick-Release Buckle & Stainless Steel Ring' },
      { label: 'Width', value: 'Professional Standard 20mm' },
      { label: 'Best For', value: 'Corporate ID, Tech Teams, Promotional Events' },
    ],
  },
];

export const bestsellerProducts = products.filter((p) => p.bestseller);
export const signatureProducts = products.filter((p) => p.signature);
