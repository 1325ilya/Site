import { Suspense } from 'react';

import { FeaturedCollection } from '@/components/FeaturedCollection';
import { Footer } from '@/components/Footer';
import { HeroBanner } from '@/components/HeroBanner';
import { ProductGrid } from '@/components/ProductGrid';
import { featuredCollections, featuredProducts } from '@/lib/mock-data';
import type { Product } from '@/types/product';

async function getFeaturedProducts(): Promise<Product[]> {
  return featuredProducts;
}

function ProductGridSkeleton() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-8 h-10 w-56 animate-pulse bg-neutral-200" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="space-y-4">
            <div className="aspect-[4/5] animate-pulse bg-neutral-200" />
            <div className="h-4 w-3/4 animate-pulse bg-neutral-200" />
            <div className="h-3 w-1/3 animate-pulse bg-neutral-200" />
          </div>
        ))}
      </div>
    </section>
  );
}

async function FeaturedProductsSection() {
  const products = await getFeaturedProducts();

  if (products.length === 0) {
    return (
      <section className="mx-auto w-full max-w-7xl px-6 py-20 text-center md:px-10">
        <p className="font-serif text-2xl text-neutral-900">Products are coming soon.</p>
        <p className="mt-2 text-sm text-neutral-600">Check back shortly for the new drop.</p>
      </section>
    );
  }

  return <ProductGrid products={products} />;
}

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900">
      <HeroBanner />

      <Suspense fallback={<ProductGridSkeleton />}>
        <FeaturedProductsSection />
      </Suspense>

      <FeaturedCollection collections={featuredCollections} />
      <Footer />
    </main>
  );
}
