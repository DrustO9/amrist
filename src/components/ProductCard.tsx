import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-luxe-soft-pink/10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-luxe-soft-pink text-luxe-paper rounded-full">
              {product.badge}
            </span>
          </div>
        )}
        
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="absolute bottom-4 left-4 right-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          <button className="w-full glass py-4 text-[11px] uppercase tracking-[0.3em] font-semibold text-luxe-paper hover:bg-luxe-accent hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 rounded-xl">
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-serif text-luxe-paper group-hover:text-luxe-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-luxe-paper/40 font-light">
          {product.description}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-sm font-medium tracking-wider text-luxe-accent">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-luxe-paper/30 line-through tracking-wider">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
