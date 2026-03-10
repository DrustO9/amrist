import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, X, Check } from 'lucide-react';

const BUNDLE_PRODUCTS = [
  { id: 1, name: "Horizon", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Twilight", image: "https://images.unsplash.com/photo-1590156546946-ce55a12a6409?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Eclipse", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Aurora", image: "https://images.unsplash.com/photo-1622618991746-b2586aecc5a9?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Nova", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Ethereal", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=400" },
];

const Bundle = () => {
  const [selected, setSelected] = useState<any[]>([]);
  const maxItems = 3;

  const toggleSelect = (product: any) => {
    if (selected.find(p => p.id === product.id)) {
      setSelected(selected.filter(p => p.id !== product.id));
    } else if (selected.length < maxItems) {
      setSelected([...selected, product]);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-luxe-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-gold font-bold mb-4 block">Bespoke Experience</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">The <span className="italic font-light">Trio</span> Collection</h1>
            <p className="text-white/40 max-w-2xl mx-auto font-light tracking-wide">
              Curate your personal olfactory wardrobe. Select any three 15ml fragrances to create a bespoke bundle and save 25%.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Selection Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            {BUNDLE_PRODUCTS.map((product) => {
              const isSelected = selected.find(p => p.id === product.id);
              return (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -5 }}
                  onClick={() => toggleSelect(product)}
                  className={`relative aspect-[3/4] cursor-pointer overflow-hidden border transition-colors duration-500 ${
                    isSelected ? 'border-luxe-gold' : 'border-white/5'
                  }`}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  <div className={`absolute inset-0 bg-luxe-gold/10 transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-luxe-black to-transparent">
                    <p className="text-xs uppercase tracking-widest text-white font-medium">{product.name}</p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-luxe-gold rounded-full flex items-center justify-center text-luxe-black">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass p-10 rounded-sm sticky top-32">
              <h3 className="text-2xl font-serif text-white mb-8">Your Selection</h3>
              
              <div className="space-y-6 mb-10">
                {[...Array(maxItems)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5">
                    {selected[i] ? (
                      <>
                        <div className="w-16 h-16 bg-luxe-charcoal overflow-hidden">
                          <img src={selected[i].image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-xs uppercase tracking-widest text-white font-medium">{selected[i].name}</p>
                          <p className="text-[10px] text-luxe-gold mt-1">15ml Parfum</p>
                        </div>
                        <button onClick={() => toggleSelect(selected[i])} className="text-white/20 hover:text-white transition-colors">
                          <X size={14} />
                        </button>
                      </>
                    ) : (
                      <div className="flex items-center gap-4 opacity-20">
                        <div className="w-16 h-16 border border-dashed border-white flex items-center justify-center">
                          <span className="text-xl">+</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest">Select Fragrance {i + 1}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 font-light">Subtotal</span>
                  <span className="text-white">₹{selected.length * 499}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 font-light">Bundle Discount (25%)</span>
                  <span className="text-luxe-gold">-₹{Math.round(selected.length * 499 * 0.25)}</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Total</span>
                  <span className="text-2xl font-serif text-white">₹{Math.round(selected.length * 499 * 0.75)}</span>
                </div>
              </div>

              <button 
                disabled={selected.length < maxItems}
                className={`w-full py-5 text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-500 ${
                  selected.length === maxItems 
                    ? 'bg-luxe-gold text-luxe-black hover:bg-white' 
                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                }`}
              >
                Add Bundle to Bag
              </button>
              
              {selected.length < maxItems && (
                <p className="text-[9px] text-center mt-4 uppercase tracking-widest text-white/20">
                  Add {maxItems - selected.length} more to complete bundle
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
