'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

import type { Product } from '@/types/product';

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-serif text-3xl text-neutral-950 md:text-4xl">Selected Pieces</h2>
        <a href="/catalog" className="text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-900">
          View Catalog
        </a>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const defaultVariant = product.variants.find((variant) => variant.isDefault) ?? product.variants[0];

          return (
            <motion.article
              key={product.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.07 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src={product.images[0]?.url ?? '/images/products/placeholder.jpg'}
                  alt={product.images[0]?.alt ?? product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base text-neutral-950">{product.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">{product.category}</p>
                </div>
                <p className="text-sm text-neutral-800">{defaultVariant.price.toLocaleString('ru-RU')} ₽</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
