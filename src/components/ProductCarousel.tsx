import React from 'react';
import { motion } from 'motion/react';
import ProductCard from './ProductCard';

const MOCK_PRODUCTS = [
  // ZENÔ Series (Affordable Premium)
  {
    id: 1, name: "On the Grind", description: "Gym Rat? Match the intensity with this active blend", price: 299,
    image: "/Gemini_Generated_Image_eum0ajeum0ajeum0.png",
    badge: "ZENÔ"
  },
  {
    id: 2, name: "Up n’ Running", description: "Boardroom Bound? Command the room with confidence", price: 499,
    image: "/Gemini_Generated_Image_dtlvp1dtlvp1dtlv.png",
    badge: "ZENÔ"
  },
  {
    id: 3, name: "City Flow", description: "Commuter? Master the pace with this fresh, vibrant scent", price: 399,
    image: "/Gemini_Generated_Image_ljjr7oljjr7oljjr.png",
    badge: "ZENÔ"
  },
  {
    id: 4, name: "Out n’ About", description: "Off-duty? Keep it cool with a relaxed, effortless fragrance", price: 349,
    image: "/Gemini_Generated_Image_3z299y3z299y3z29.png",
    badge: "ZENÔ"
  },

  // ETHÉL Series (Premium)
  {
    id: 5, name: "The Protector", description: "Fierce leather and spice for commanding presence", price: 3999,
    image: "/Gemini_Generated_Image_fd7wn5fd7wn5fd7w.png",
    badge: "ETHÉL"
  },
  {
    id: 6, name: "The Wise Guide", description: "Calm woods and incense for quiet authority", price: 3799,
    image: "/Gemini_Generated_Image_jrq28jrq28jrq28j.png",
    badge: "ETHÉL"
  },
  {
    id: 7, name: "Passionate Heart", description: "Floral warmth and amber for magnetic allure", price: 3499,
    image: "/Gemini_Generated_Image_ug3nmsug3nmsug3n.png",
    badge: "ETHÉL"
  },
  {
    id: 8, name: "Visionary Alchemist", description: "Mystical resins and iris for bold creativity", price: 3299,
    image: "/Whisk_2b3348986bc7383b2ec49bb5b09bfa47dr (1).jpeg",
    badge: "ETHÉL"
  },
  {
    id: 9, name: "The Seeker", description: "Fresh marine woods for the spirit of exploration", price: 2999,
    image: "/Whisk_3fba3fd3a15006e842345b70517d742adr (1).jpeg",
    badge: "ETHÉL"
  }
];

const ProductCarousel = () => {
  return (
    <section className="py-24 bg-luxe-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-accent font-bold mb-4 block">Spring Selection</span>
        <h2 className="text-4xl font-serif text-luxe-paper">Floral <span className="italic font-light text-luxe-accent">Bouquet</span></h2>
      </div>

      {/* Brand Tiers Expansion Section */}
      <div className="relative py-24 mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/bgi.jpeg" alt="Background Texture" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxe-bg via-transparent to-luxe-bg" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-accent font-bold mb-4 block">Our Evolution</span>
            <h2 className="text-4xl font-serif text-luxe-paper mb-6">Two Distinct <span className="italic font-light text-luxe-accent">Tiers</span></h2>
            <p className="text-sm text-luxe-paper/70 font-light leading-relaxed tracking-wide">
              We are expanding our market footprint by launching two distinct product tiers. Our 'Standard' range provides high-value entry points, while our 'Premium' line bridges accessibility and luxury. Operating through separate identities preserves the unique brand equity of each segment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Standard Line: ZENÔ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center mt-12 md:mt-24"
            >
              <div className="relative w-[300px] sm:w-[350px] aspect-[4/5] overflow-hidden rounded-2xl mb-8 border border-white/5">
                <img src="/zeno.jpeg" alt="Zenô" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.3em] font-medium text-white rounded-full">Standard</span>
                </div>
              </div>
              <h3 className="text-3xl font-serif text-luxe-paper tracking-widest mb-4">ZENÔ</h3>
              <p className="text-[11px] uppercase tracking-[0.1em] text-luxe-paper/60 font-light leading-relaxed max-w-sm">
                represents the brand’s affordable premium segment, offering a refined fragrance experience at an accessible price point while catering to modern, everyday lifestyles.
              </p>
            </motion.div>

            {/* Premium Line: ETHÉL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex flex-col items-center text-center relative"
            >
              <div className="absolute -inset-10 bg-luxe-accent/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative w-[320px] sm:w-[380px] aspect-[4/5] overflow-hidden rounded-2xl mb-8 border border-luxe-accent/30 shadow-[0_0_40px_rgba(200,160,110,0.15)] ring-1 ring-luxe-accent/10">
                <img src="/Ethel.jpeg" alt="Ethél" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-5 py-2 bg-gradient-to-r from-luxe-accent to-luxe-accent/80 backdrop-blur-md border border-luxe-accent/50 text-[11px] uppercase tracking-[0.4em] font-bold text-white rounded-full shadow-lg">Premium</span>
                </div>
              </div>
              <h3 className="text-4xl font-serif text-luxe-accent tracking-widest mb-4">ETHÉL</h3>
              <p className="text-[11px] uppercase tracking-[0.1em] text-luxe-paper/70 font-light leading-relaxed max-w-sm">
                represents the brand’s premium fragrance line, crafted for refined occasions with richer compositions and elevated packaging for a luxury experience.
              </p>
            </motion.div>
          </div>
        </div>
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
