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

      {/* Immersive Quote */}
      <section className="py-48 relative overflow-hidden bg-luxe-soft-lavender/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=2000" 
            alt="Atmospheric" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl font-serif text-luxe-accent opacity-30 mb-8 block">“</span>
            <h3 className="text-3xl md:text-5xl font-serif text-luxe-paper italic leading-relaxed mb-12">
              A fragrance is like a bouquet of memories, blooming with every breath you take.
            </h3>
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxe-paper/40">— The Master Perfumer</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
