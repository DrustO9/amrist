import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="bg-luxe-black">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1608248593842-8021c62ce3ee?auto=format&fit=crop&q=80&w=2000" 
            alt="Perfume Studio" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxe-black/80 via-transparent to-luxe-black" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-gold font-bold mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white italic">The Art of <br /> <span className="not-italic font-light">Olfaction</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              A Vision of <br /> <span className="text-gold italic">Timeless Elegance</span>
            </h2>
            <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed">
              <p>
                Founded in the heart of artisanal craftsmanship, Amorist was born from a singular desire: to create fragrances that transcend the ordinary. We believe that a scent is more than just a product; it is an invisible signature, a silent communicator of identity.
              </p>
              <p>
                Our journey began with a small collection of rare essences and a commitment to uncompromising quality. Today, we continue to push the boundaries of perfumery, blending traditional heritage with contemporary innovation.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" alt="Process" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-sm mt-12">
              <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" alt="Ingredients" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-luxe-charcoal/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-gold font-bold mb-8 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-12 leading-snug italic">
              "We don't just create perfumes; we capture moments, emotions, and memories in a bottle."
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
              <div className="space-y-4">
                <h4 className="text-luxe-gold font-serif text-xl italic">Purity</h4>
                <p className="text-sm text-white/40 font-light leading-relaxed">Only the finest natural essences, ethically sourced from their native lands.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-luxe-gold font-serif text-xl italic">Artistry</h4>
                <p className="text-sm text-white/40 font-light leading-relaxed">Each formula is a labor of love, refined over months of meticulous testing.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-luxe-gold font-serif text-xl italic">Sustainability</h4>
                <p className="text-sm text-white/40 font-light leading-relaxed">Committed to vegan practices and eco-conscious packaging solutions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
