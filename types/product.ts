export type Locale = 'ru' | 'en';

export type ProductImage = {
  url: string;
  alt: string;
  order: number;
  dominantColor: string;
  blurDataURL?: string;
};

export type ProductVariant = {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  sku: string;
  price: number;
  stock: number;
  isDefault?: boolean;
};

export type ProductSEO = {
  title: string;
  description: string;
  slug: string;
  ogImage: string;
};

export type ProductStatus = 'draft' | 'published';

export type Product = {
  id: string;
  name: string;
  description: string;
  images: ProductImage[];
  variants: ProductVariant[];
  category: string;
  collections: string[];
  seo: ProductSEO;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
};
