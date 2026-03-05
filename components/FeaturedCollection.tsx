'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

type Collection = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type FeaturedCollectionProps = {
  collections: Collection[];
};

export function FeaturedCollection({ collections }: FeaturedCollectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
        {collections.map((collection, index) => (
          <motion.article
            key={collection.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
              <Image src={collection.image} alt={collection.name} fill className="object-cover" />
            </div>
            <h3 className="mt-4 font-serif text-2xl text-neutral-950">{collection.name}</h3>
            <p className="mt-2 text-sm text-neutral-600">{collection.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
