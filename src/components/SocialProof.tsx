import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const CREATORS = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  img: `https://images.unsplash.com/photo-${[
    "1534528741775-53994a69daeb", "1507003211169-0a1dd7228f2d", "1494790108377-be9c29b29330",
    "1500648767791-00dcc994a43e", "1539571696357-5a69c17a67c6", "1517841905240-472988babdf9",
    "1524504388940-b1c1722653e1", "1506794778202-cad84cf45f1d", "1531746020798-e6953c6e8e04",
    "1488426862026-3ee34a7d66df"
  ][i % 10]}?auto=format&fit=crop&q=80&w=400`
}));

const REVIEWS = [
  {
    id: 2,
    author: "Vikram R.",
    text: "The scent of Twilight is like walking through a blooming garden at dusk. Absolutely divine.",
    rating: 5,
    product: "Twilight"
  },
  {
    id: 3,
    author: "Priya M.",
    text: "Ethereal is my go-to for spring. It's light, flowery, and lasts all day without being overpowering.",
    rating: 5,
    product: "Ethereal"
  }
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-luxe-bg border-t border-luxe-soft-pink/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-accent font-bold mb-4 block">Social Proof</span>
          <h2 className="text-4xl font-serif text-luxe-paper">The <span className="italic font-light text-luxe-accent">Amorist</span> Community</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Creator Collage */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {CREATORS.map((c, i) => (
                <motion.div 
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.05 }}
                  className="aspect-square overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer border border-luxe-soft-pink/10 rounded-lg"
                >
                  <img src={c.img} alt="Creator" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-luxe-paper/30 font-medium">
              Trusted by 24+ leading creators and connoisseurs
            </p>
          </div>

          {/* Right: Reviews */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col gap-3 flex-1 justify-center shadow-sm"
              >
                <div className="flex gap-1 text-luxe-accent">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-xs text-luxe-paper/70 font-light leading-relaxed italic">
                  "{review.text}"
                </p>
                
                <div className="pt-3 border-t border-luxe-soft-pink/10 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-serif text-luxe-paper">{review.author}</p>
                    <p className="text-[8px] uppercase tracking-widest text-luxe-accent mt-0.5">Verified</p>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-luxe-paper/20">{review.product}</span>
                </div>
              </motion.div>
            ))}
            
            <button className="w-full py-3 border border-luxe-soft-pink/20 text-[9px] uppercase tracking-[0.3em] font-bold text-luxe-paper/60 hover:text-luxe-accent hover:border-luxe-accent transition-all mt-auto rounded-full">
              Read All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
