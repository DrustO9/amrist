import React from 'react';
import { motion } from 'motion/react';
import ProductCard from './ProductCard';

const MOCK_PRODUCTS = [
  {
    id: 1, name: "Blossom", description: "Cherry Blossom • Rose • Musk", price: 1249,
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800",
    badge: "Bestseller"
  },
  {
    id: 2, name: "Lavender", description: "French Lavender • Vanilla • Honey", price: 1249,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    badge: "Limited"
  },
  {
    id: 3, name: "Jasmine", description: "Night Jasmine • Tea • Sandalwood", price: 1499,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800",
    badge: "New"
  },
  {
    id: 4, name: "Orchid", description: "Wild Orchid • Bergamot • Patchouli", price: 1149,
    image: "https://images.unsplash.com/photo-1615485242211-140685934149?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5, name: "Peony", description: "Pink Peony • Lychee • Cedar", price: 999,
    image: "https://images.unsplash.com/photo-1617812847661-846a77ad3556?auto=format&fit=crop&q=80&w=800"
  }
];

const ProductCarousel = () => {
  return (
    <section className="py-24 bg-luxe-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-accent font-bold mb-4 block">Spring Selection</span>
        <h2 className="text-4xl font-serif text-luxe-paper">Floral <span className="italic font-light text-luxe-accent">Bouquet</span></h2>
      </div>

      <div className="flex gap-8 px-6 md:px-12 overflow-x-auto no-scrollbar pb-12">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 shrink-0"
        >
          {[...MOCK_PRODUCTS, ...MOCK_PRODUCTS].map((product, i) => (
            <div key={`${product.id}-${i}`} className="w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCarousel;
