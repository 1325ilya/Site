import { Product } from '@/types/product';

export const featuredProducts: Product[] = [
  {
    id: 'p-tailored-blazer-01',
    name: 'Tailored Wool Blazer',
    description: 'Structured silhouette with soft shoulder and matte finish.',
    images: [
      {
        url: '/images/products/blazer-1.jpg',
        alt: 'Charcoal tailored wool blazer front view',
        order: 1,
        dominantColor: '#3C3C3A',
      },
      {
        url: '/images/products/blazer-2.jpg',
        alt: 'Charcoal tailored wool blazer detail',
        order: 2,
        dominantColor: '#51514F',
      },
    ],
    variants: [
      { size: 'S', sku: 'BLZ-CH-S', price: 18990, stock: 7, isDefault: true },
      { size: 'M', sku: 'BLZ-CH-M', price: 18990, stock: 4 },
      { size: 'L', sku: 'BLZ-CH-L', price: 18990, stock: 0 },
    ],
    category: 'outerwear',
    collections: ['new-arrivals', 'atelier-core'],
    seo: {
      title: 'Tailored Wool Blazer — Atelier Core',
      description: 'Minimalist charcoal blazer in premium wool blend.',
      slug: 'tailored-wool-blazer',
      ogImage: '/images/og/tailored-wool-blazer.jpg',
    },
    status: 'published',
    createdAt: '2026-02-10T09:00:00.000Z',
    updatedAt: '2026-02-20T12:30:00.000Z',
  },
  {
    id: 'p-silk-shirt-01',
    name: 'Fluid Silk Shirt',
    description: 'Relaxed fit shirt in washed silk for day-to-evening styling.',
    images: [
      {
        url: '/images/products/shirt-1.jpg',
        alt: 'Ivory fluid silk shirt on model',
        order: 1,
        dominantColor: '#D7D0C7',
      },
    ],
    variants: [
      { size: 'XS', sku: 'SLS-IV-XS', price: 12990, stock: 5 },
      { size: 'S', sku: 'SLS-IV-S', price: 12990, stock: 8, isDefault: true },
      { size: 'M', sku: 'SLS-IV-M', price: 12990, stock: 3 },
    ],
    category: 'tops',
    collections: ['new-arrivals'],
    seo: {
      title: 'Fluid Silk Shirt — New Arrivals',
      description: 'Ivory silk shirt with minimalist drape and soft shine.',
      slug: 'fluid-silk-shirt',
      ogImage: '/images/og/fluid-silk-shirt.jpg',
    },
    status: 'published',
    createdAt: '2026-02-01T10:00:00.000Z',
    updatedAt: '2026-02-18T15:45:00.000Z',
  },
  {
    id: 'p-wide-leg-trouser-01',
    name: 'Wide-Leg Tailored Trouser',
    description: 'High-rise trousers with full length leg and sharp pleat.',
    images: [
      {
        url: '/images/products/trouser-1.jpg',
        alt: 'Black wide-leg tailored trousers',
        order: 1,
        dominantColor: '#171717',
      },
    ],
    variants: [
      { size: 'S', sku: 'WTR-BK-S', price: 14990, stock: 6 },
      { size: 'M', sku: 'WTR-BK-M', price: 14990, stock: 2, isDefault: true },
      { size: 'L', sku: 'WTR-BK-L', price: 14990, stock: 1 },
      { size: 'XL', sku: 'WTR-BK-XL', price: 14990, stock: 0 },
    ],
    category: 'bottoms',
    collections: ['atelier-core'],
    seo: {
      title: 'Wide-Leg Tailored Trouser — Atelier Core',
      description: 'Minimal black trousers with crisp volume and movement.',
      slug: 'wide-leg-tailored-trouser',
      ogImage: '/images/og/wide-leg-tailored-trouser.jpg',
    },
    status: 'published',
    createdAt: '2026-01-20T08:30:00.000Z',
    updatedAt: '2026-02-22T11:00:00.000Z',
  },
];

export const featuredCollections = [
  {
    id: 'c-atelier-core',
    name: 'Atelier Core',
    description: 'Essential tailoring in restrained tones.',
    image: '/images/collections/atelier-core.jpg',
  },
  {
    id: 'c-new-arrivals',
    name: 'New Arrivals',
    description: 'Fresh silhouettes for the current season.',
    image: '/images/collections/new-arrivals.jpg',
  },
];
