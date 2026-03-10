import React from 'react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const MOCK_PRODUCTS = [
  {
    id: 1, name: "Horizon", description: "Citrus • Vetiver • Amber", price: 1249, originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    badge: "Bestseller"
  },
  {
    id: 2, name: "Twilight", description: "Sandalwood • Musk • Oud", price: 1249, originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1590156546946-ce55a12a6409?auto=format&fit=crop&q=80&w=800",
    badge: "Limited"
  },
  {
    id: 3, name: "Eclipse", description: "Black Pepper • Cardamom • Leather", price: 1499, originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    badge: "New"
  },
  {
    id: 4, name: "Aurora", description: "Bergamot • Jasmine • Patchouli", price: 1149, originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1622618991746-b2586aecc5a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5, name: "Nova", description: "Lavender • Vanilla • Cedar", price: 999, originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6, name: "Ethereal", description: "Rose • White Musk • Sandalwood", price: 1599, originalPrice: 3199,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    badge: "Premium"
  }
];

const Shop = () => {
  return (
    <div className="pt-32 pb-24 bg-luxe-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-gold font-bold mb-4 block">The Boutique</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">All <span className="italic font-light">Creations</span></h1>
          <p className="text-white/40 max-w-2xl mx-auto font-light tracking-wide">
            Explore our complete collection of artisanal fragrances, each crafted with the finest ingredients to create a unique olfactory signature.
          </p>
        </motion.div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-[80px] z-40 bg-luxe-black/80 backdrop-blur-md border-y border-white/5 py-6 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-white/70 hover:text-white transition-colors">
              <Filter size={14} />
              Filter
            </button>
            <div className="hidden md:flex items-center gap-6">
              <button className="flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors">
                Availability <ChevronDown size={12} />
              </button>
              <button className="flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors">
                Price <ChevronDown size={12} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 hidden sm:block">
              {MOCK_PRODUCTS.length} Products
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">Sort:</span>
              <select className="bg-transparent text-[10px] uppercase tracking-[0.15em] text-white font-semibold focus:outline-none cursor-pointer">
                <option className="bg-luxe-black">Featured</option>
                <option className="bg-luxe-black">Newest</option>
                <option className="bg-luxe-black">Price: Low to High</option>
                <option className="bg-luxe-black">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
