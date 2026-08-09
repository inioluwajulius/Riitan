export interface ProductPiece {
  id: string;
  name: string;
  subtitle: string;
  chapterId: 'presence' | 'tide' | 'lineage' | 'gilt';
  chapterName: string;
  category: 'earrings' | 'rings' | 'necklaces' | 'cuffs' | 'bespoke';
  priceUSD: number;
  formType: 'split-loop' | 'soft-triangle' | 'double-flow' | 'talisman' | 'torque';
  description: string;
  poeticNote: string;
  specifications: {
    material: string;
    weight: string;
    finishOptions: string[];
    dimensions: string;
    leadTime: string;
    origin: string;
  };
  featured: boolean;
  heroVisualType: string;
}

export interface CollectionChapter {
  id: 'presence' | 'tide' | 'lineage' | 'gilt';
  roman: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  moodTag: string;
  pieceCount: number;
  highlightMotif: string;
}

export interface HouseService {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  location: string;
  availableOptions: string[];
  imageUrl?: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  location: string;
  caption: string;
  styledPieces: string[];
  aspect: 'portrait' | 'landscape' | 'square';
  goldAccent: string;
  imageUrl: string;
}

export const CURRENCIES = [
  { code: 'USD', symbol: '$', rate: 1.0, label: 'USD ($)' },
  { code: 'GBP', symbol: '£', rate: 0.79, label: 'GBP (£)' },
  { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
  { code: 'NGN', symbol: '₦', rate: 1550, label: 'NGN (₦)' },
] as const;

export type CurrencyCode = typeof CURRENCIES[number]['code'];

export const COLLECTION_CHAPTERS: CollectionChapter[] = [
  {
    id: 'presence',
    roman: 'Chapter I',
    title: 'Presence',
    subtitle: 'Sculptural statements & bold volumes',
    year: '2026',
    description: 'Forms that announce themselves without noise. Weighty, deliberate curves cast in 18k solid gold that command space with serenity.',
    moodTag: 'Architectural · Solid · Unapologetic',
    pieceCount: 6,
    highlightMotif: 'split-loop',
  },
  {
    id: 'tide',
    roman: 'Chapter II',
    title: 'Tide',
    subtitle: 'Fluid movement & parallel currents',
    year: '2026',
    description: 'Inspired by the rhythmic cadence of the Atlantic meeting the Lagos shoreline. Double parallel gold curves that flow seamlessly across the skin.',
    moodTag: 'Fluid · Kinetic · Weightless',
    pieceCount: 5,
    highlightMotif: 'double-flow',
  },
  {
    id: 'lineage',
    roman: 'Chapter III',
    title: 'Lineage',
    subtitle: 'Ancestral memory & talismanic geometry',
    year: '2026',
    description: 'Modern heirlooms rooted in Yoruba metallurgy and royal ornamentation. Symbols distilled to their purest geometrical essence.',
    moodTag: 'Heritage · Sacred · Enduring',
    pieceCount: 5,
    highlightMotif: 'talisman',
  },
  {
    id: 'gilt',
    roman: 'Chapter IV',
    title: 'Gilt',
    subtitle: 'Essential everyday icons & refined geometry',
    year: '2026',
    description: 'The foundation of the daily stack. Understated geometric profiles hand-polished to a radiant mirror sheen for effortless repetition.',
    moodTag: 'Quiet Luxury · Daily · Pure',
    pieceCount: 6,
    highlightMotif: 'soft-triangle',
  },
];

export const SIGNATURE_SILHOUETTES = [
  {
    number: '01',
    name: 'The Split Loop',
    tag: 'Minimal & Highly Recognizable',
    description: 'An open ring that never quite closes. A subtle interruption that creates dynamic tension and catches light from every angle.',
    formKey: 'split-loop',
    philosophy: 'The power of the unfinished circle — continuous possibility.',
    featuredPiece: 'The Split Loop Earring',
    scale: 'Earrings · Rings · Cuffs',
  },
  {
    number: '02',
    name: 'The Soft Triangle',
    tag: 'Structure Without Complexity',
    description: 'A rounded, tactile triangle with quiet geometry. Softened vertices engineered to sit weightlessly against bone and collar.',
    formKey: 'soft-triangle',
    philosophy: 'Tripartite balance — earth, memory, and presence.',
    featuredPiece: 'The Soft Triangle Pendant',
    scale: 'Pendants · Signets · Choker',
  },
  {
    number: '03',
    name: 'The Double Flow',
    tag: 'Movement Made Wearable',
    description: 'Two sinuous lines in parallel, undulating like water over smooth river stone. Fluid, clean, and endlessly flattering in motion.',
    formKey: 'double-flow',
    philosophy: 'Duality in perpetual motion — self and legacy.',
    featuredPiece: 'The Double Flow Bangle',
    scale: 'Torques · Bangles · Drop Earrings',
  },
];

export const PRODUCTS_LIST: ProductPiece[] = [
  {
    id: 'split-loop-earrings',
    name: 'The Split Loop Earring',
    subtitle: 'The form that began the house',
    chapterId: 'presence',
    chapterName: 'Chapter I — Presence',
    category: 'earrings',
    priceUSD: 1480,
    formType: 'split-loop',
    description: 'The form that began the house. An open loop that never closes — sculptural, weightless on the ear, and instantly RÍÌTÀN. Made to be worn every day and passed on.',
    poeticNote: 'The split form catches light from every angle — a quiet signal of presence rather than a statement of excess.',
    specifications: {
      material: '18k Recycled Solid Gold',
      weight: '9.4 grams (pair)',
      finishOptions: ['High Polish Yellow Gold', 'Brushed Matte Yellow Gold', '18k Warm Rose Gold'],
      dimensions: '26mm height × 18mm depth',
      leadTime: 'Handcrafted to order (3–4 weeks)',
      origin: 'Atelier Lagos & London',
    },
    featured: true,
    heroVisualType: 'split-loop',
  },
  {
    id: 'soft-triangle-pendant',
    name: 'The Soft Triangle Pendant',
    subtitle: 'Quiet geometry on fluid silk chain',
    chapterId: 'gilt',
    chapterName: 'Chapter IV — Gilt',
    category: 'necklaces',
    priceUSD: 1850,
    formType: 'soft-triangle',
    description: 'Cast in heavy 18k solid gold, this rounded triangle rests at the clavicle like a modern protective talisman with mirror-polished facets.',
    poeticNote: 'Structure without hardness. Curves that soften the light.',
    specifications: {
      material: '18k Solid Yellow Gold',
      weight: '12.8 grams',
      finishOptions: ['Mirror Polish', 'Satin Matte'],
      dimensions: '22mm × 24mm on 45cm adjustable chain',
      leadTime: 'In stock / Hand-finished',
      origin: 'Atelier London',
    },
    featured: true,
    heroVisualType: 'soft-triangle',
  },
  {
    id: 'double-flow-bangle',
    name: 'The Double Flow Torque Bangle',
    subtitle: 'Parallel rivers of solid gold',
    chapterId: 'tide',
    chapterName: 'Chapter II — Tide',
    category: 'cuffs',
    priceUSD: 3650,
    formType: 'double-flow',
    description: 'Sculpted with twin parallel ribbons of gold that gently wrap the wrist with an engineered tension closure that feels organic and bespoke.',
    poeticNote: 'Two paths traveling in unison, never colliding.',
    specifications: {
      material: '18k Solid Yellow Gold',
      weight: '28.5 grams',
      finishOptions: ['High Polish Duo', 'Matte & Polish Contrast'],
      dimensions: 'Internal oval diameter: 58mm × 48mm',
      leadTime: 'Bespoke order (4 weeks)',
      origin: 'Atelier Lagos',
    },
    featured: true,
    heroVisualType: 'double-flow',
  },
  {
    id: 'lineage-talisman-signet',
    name: 'The Lineage Talisman Signet',
    subtitle: 'Ancestral seal with tactile gold relief',
    chapterId: 'lineage',
    chapterName: 'Chapter III — Lineage',
    category: 'rings',
    priceUSD: 2190,
    formType: 'talisman',
    description: 'A contemporary reimagining of the royal Yoruba signet ring. Heavy solid 18k gold with a subtly indented crest that can be custom engraved.',
    poeticNote: 'An anchor on the finger. A quiet weight reminding you who you are.',
    specifications: {
      material: '18k Recycled Solid Gold',
      weight: '16.2 grams',
      finishOptions: ['Hand-Carved Texture', 'Smooth Polish'],
      dimensions: 'Face width: 14mm × 16mm',
      leadTime: 'Handmade to order (3 weeks)',
      origin: 'Atelier Lagos',
    },
    featured: true,
    heroVisualType: 'talisman',
  },
  {
    id: 'presence-choker-collar',
    name: 'The Presence Sculptural Collar',
    subtitle: 'Architectural statement neckpiece',
    chapterId: 'presence',
    chapterName: 'Chapter I — Presence',
    category: 'necklaces',
    priceUSD: 6800,
    formType: 'torque',
    description: 'The masterwork of Chapter I. A seamless open choker that hugs the neckline with majestic architectural curvature and flawless ergonomics.',
    poeticNote: 'Adornment as armor and celebration.',
    specifications: {
      material: '18k Heavy Solid Gold',
      weight: '52.0 grams',
      finishOptions: ['High Polish Mirror', 'Brushed Silk Finish'],
      dimensions: 'Conforming ergonomic contour (125mm internal width)',
      leadTime: 'Limited commission (6 weeks)',
      origin: 'Master Goldsmith Atelier',
    },
    featured: true,
    heroVisualType: 'torque',
  },
  {
    id: 'tide-cascade-drops',
    name: 'The Tide Cascade Drop Earrings',
    subtitle: 'Kinetic undulating ribbons',
    chapterId: 'tide',
    chapterName: 'Chapter II — Tide',
    category: 'earrings',
    priceUSD: 2420,
    formType: 'double-flow',
    description: 'Articulated drops that sway with every turn of the head. Light bounces rhythmically along the dual gold channels.',
    poeticNote: 'Catching the ambient light like sunset on saltwater.',
    specifications: {
      material: '18k Solid Gold',
      weight: '11.6 grams (pair)',
      finishOptions: ['High Polish Yellow Gold', 'Rose Gold'],
      dimensions: '52mm drop length',
      leadTime: 'Handcrafted to order (3 weeks)',
      origin: 'Atelier London',
    },
    featured: false,
    heroVisualType: 'double-flow',
  },
  {
    id: 'gilt-stacking-duo',
    name: 'The Gilt Modular Ring Duo',
    subtitle: 'Interlocking geometric bands',
    chapterId: 'gilt',
    chapterName: 'Chapter IV — Gilt',
    category: 'rings',
    priceUSD: 1650,
    formType: 'soft-triangle',
    description: 'Two interlocking bands designed to nest seamlessly together or be worn across multiple fingers for varied styling.',
    poeticNote: 'Infinite combinations from a solitary thought.',
    specifications: {
      material: '18k Solid Yellow Gold',
      weight: '8.8 grams',
      finishOptions: ['High Polish', 'Fine Satin'],
      dimensions: 'Band width: 3.8mm each',
      leadTime: 'Ready to ship / Made to size',
      origin: 'Atelier Lagos',
    },
    featured: false,
    heroVisualType: 'soft-triangle',
  },
  {
    id: 'bespoke-royal-amulet',
    name: 'The Royal Amulet Commission',
    subtitle: 'One-of-a-kind heritage centerpiece',
    chapterId: 'lineage',
    chapterName: 'Chapter III — Lineage',
    category: 'bespoke',
    priceUSD: 8900,
    formType: 'talisman',
    description: 'A bespoke one-of-a-kind creation co-designed during private consultation, incorporating heirloom stories, custom stone settings, or family crest reliefs.',
    poeticNote: 'A living narrative captured in molten gold.',
    specifications: {
      material: '18k or 22k Solid Gold',
      weight: 'Custom bespoke weighting',
      finishOptions: ['Full Bespoke Customization'],
      dimensions: 'Designed to individual proportions',
      leadTime: '6–8 weeks with consultation',
      origin: 'Direct Master Atelier',
    },
    featured: false,
    heroVisualType: 'talisman',
  },
];

export const HOUSE_SERVICES: HouseService[] = [
  {
    number: '01',
    id: 'personal-styling',
    title: 'Personal Styling',
    subtitle: 'Curated stack architecture',
    description: 'One-to-one sessions to build a signature stack that is unmistakably yours. We balance proportions, ear anatomy, and lifestyle to create an effortless daily signature.',
    duration: '45 Minutes',
    location: 'Lagos Suite · London Salon · Virtual Video',
    availableOptions: ['Ear Stack Architecture', 'Collar & Neckline Layering', 'Wardrobe Harmony Review'],
    imageUrl: '/service-personal-styling.png',
  },
  {
    number: '02',
    id: 'private-consultations',
    title: 'Private Consultations',
    subtitle: 'Guidance on form, scale and gold',
    description: 'Quiet, considered, unhurried guidance with our head of client relations. Explore raw samples, test different gold karats and weights, and discover your ideal silhouette.',
    duration: '60 Minutes',
    location: 'Private VIP Salon or In-Residence',
    availableOptions: ['Gold Karat & Alloy Selection', 'Ergonomic Fitting', 'Investment & Collection Strategy'],
    imageUrl: '/service-private-salon.png',
  },
  {
    number: '03',
    id: 'custom-sourcing',
    title: 'Custom Sourcing & Bespoke',
    subtitle: 'Bespoke commissions & special-occasion pieces',
    description: 'From ceremonial wedding suites to talismanic anniversary pieces. We source ethically mined gemstones and cast bespoke 18k solid gold sculptures to order.',
    duration: 'Multi-stage engagement',
    location: 'Direct Goldsmith Collaboration',
    availableOptions: ['Custom Lost-Wax Carving', 'Ethical Diamond & Gem Sourcing', 'Heirloom Gold Recycling'],
    imageUrl: '/service-custom-bespoke.png',
  },
  {
    number: '04',
    id: 'the-rental-edit',
    title: 'The Rental Edit',
    subtitle: 'Borrow a sculptural moment',
    description: 'For red carpet appearances, editorial shoots, galas, and milestone celebrations. Access our archival and high-jewelry statement pieces on a private rental basis.',
    duration: '3–7 Days Engagement',
    location: 'White-glove courier delivery worldwide',
    availableOptions: ['High-Jewelry Collars', 'Archive Statement Cuffs', 'Editorial Press Loans'],
    imageUrl: '/service-rental-edit.png',
  },
];

export const LOOKBOOK_EDITORIAL: LookbookItem[] = [
  {
    id: 'editorial-1',
    title: 'Warmth on Ochre',
    location: 'Lagos Salon, 2026',
    caption: 'The Split Loop Earring bathed in late afternoon harmattan light. Natural skin warmth meeting 18k solid gold.',
    styledPieces: ['The Split Loop Earring', 'The Gilt Modular Ring'],
    aspect: 'portrait',
    goldAccent: '#D4AF37',
    imageUrl: '/brand-lookbook-hero.jpg',
  },
  {
    id: 'editorial-2',
    title: 'Stone & Pure Form',
    location: 'Architectural Study, Mayfair',
    caption: 'Raw volcanic basalt contrasting with the flawless mirror surface of the Soft Triangle Pendant.',
    styledPieces: ['The Soft Triangle Pendant'],
    aspect: 'landscape',
    goldAccent: '#E4C988',
    imageUrl: '/lookbook-stone-pendant.png',
  },
  {
    id: 'editorial-3',
    title: 'The Tide Movement',
    location: 'Coastal Light, Eko Atlantic',
    caption: 'Kinetic undulating flow. The Double Flow Torque Bangle moving in harmony with the wrist.',
    styledPieces: ['The Double Flow Torque Bangle', 'The Tide Cascade Drops'],
    aspect: 'portrait',
    goldAccent: '#C9A86A',
    imageUrl: '/lookbook-tide-cuff.png',
  },
  {
    id: 'editorial-4',
    title: 'Ancestral Lineage',
    location: 'Heritage Archive Collection',
    caption: 'The Lineage Talisman Signet resting on natural raw linen. Quiet permanence across generations.',
    styledPieces: ['The Lineage Talisman Signet', 'The Royal Amulet'],
    aspect: 'square',
    goldAccent: '#B8924B',
    imageUrl: '/lookbook-talisman-ring.png',
  },
  {
    id: 'editorial-5',
    title: 'Presence Collar at Twilight',
    location: 'Private Residency, London',
    caption: 'Architectural minimalism worn with evening silk. Adornment that speaks without raising its voice.',
    styledPieces: ['The Presence Sculptural Collar'],
    aspect: 'portrait',
    goldAccent: '#F3E0B5',
    imageUrl: '/lookbook-presence-collar.png',
  },
  {
    id: 'editorial-6',
    title: 'Lost-Wax Mastery',
    location: 'Master Atelier Workshop',
    caption: 'Hand-carved green wax transformed through molten 18k gold into enduring sculptural jewelry.',
    styledPieces: ['All Four Chapters in Development'],
    aspect: 'landscape',
    goldAccent: '#DFC07C',
    imageUrl: '/lookbook-lostwax-workshop.png',
  },
];

export const ATELIER_PILLARS = [
  {
    stat: '18k',
    label: 'Solid Recycled Gold',
    desc: 'Never plated, vermeil, or hollow. Only ethically sourced 750‰ solid gold with substantial weight and enduring value.',
  },
  {
    stat: '100%',
    label: 'Hand Finished',
    desc: 'Each contour is filed, shaped, and buffed by master goldsmiths in our Lagos and London ateliers to achieve our signature luster.',
  },
  {
    stat: '1 of 1',
    label: 'Made to Order',
    desc: 'Eliminating excess inventory and mass production. Every piece is individually cast specifically for its future custodian.',
  },
  {
    stat: '0%',
    label: 'Mining Waste Policy',
    desc: 'Partnered with certified LBMA refineries ensuring 100% circular gold tracing from cast to hallmark.',
  },
];

export function formatPrice(amountUSD: number, currencyCode: CurrencyCode = 'USD'): string {
  const curr = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];
  const converted = Math.round(amountUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}
