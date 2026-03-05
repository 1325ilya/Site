'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export function HeroBanner() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Soft parallax limited to a small range to preserve readability and reduce motion fatigue.
  const y = useTransform(scrollYProgress, [0, 0.35], prefersReducedMotion ? [0, 0] : [0, -26]);

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-fashion.jpg"
          alt="Minimal fashion lookbook scene"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/55" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-end px-6 pb-12 pt-28 md:px-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-600">Atelier / Spring 2026</p>
          <h1 className="font-serif text-4xl leading-tight text-neutral-950 md:text-6xl">
            Quiet Luxury for Everyday Movement
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-neutral-700 md:text-base">
            Precision silhouettes, tactile fabrics, and restrained palettes. A modern wardrobe designed to feel effortless.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
