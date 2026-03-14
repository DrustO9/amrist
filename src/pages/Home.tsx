import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import Features from '../components/Features';
import SocialProof from '../components/SocialProof';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div className="bg-luxe-black">
      <Hero />

      {/* Rotating All Products Section */}
      <ProductCarousel />

      {/* Features Section (Vegan, Long Lasting) */}
      <Features />

      {/* Social Proof (Combined Creators & Reviews) */}
      <SocialProof />
      {/* Immersive Quote & Articles */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-luxe-soft-lavender/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=2000"
            alt="Atmospheric"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32 max-w-4xl mx-auto"
          >
            <span className="text-6xl font-serif text-luxe-accent opacity-30 mb-8 block">“</span>
            <h3 className="text-3xl md:text-5xl font-serif text-luxe-paper italic leading-relaxed mb-12">
              A fragrance is like a bouquet of memories, blooming with every breath you take.
            </h3>
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxe-paper/40">— The Master Perfumer</span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Article Placeholders */}
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-luxe-paper/5 relative">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <div className="absolute inset-0 border border-luxe-paper/10 group-hover:border-luxe-accent/50 transition-colors duration-500 rounded-xl z-20"></div>
                  <div className="w-full h-full flex items-center justify-center text-luxe-paper/20">
                    <span className="text-[10px] uppercase tracking-widest">Image Placeholder</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-luxe-accent">Editorial</span>
                  <div className="h-[1px] flex-1 bg-luxe-paper/10"></div>
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-luxe-paper mb-3 group-hover:text-luxe-accent transition-colors">Article Title Placeholder {item}</h4>
                <p className="text-xs text-luxe-paper/50 font-light leading-relaxed">Brief preview description goes here. It will be replaced with actual text later once provided.</p>
                <div className="mt-6 text-[10px] uppercase tracking-widest text-luxe-accent group-hover:text-white transition-colors duration-300">Read More →</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
