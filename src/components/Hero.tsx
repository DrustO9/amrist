import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Flower2, Leaf } from 'lucide-react';

const slides = [
  {
    image: "/Carousal1.png",
    label: "Spring Awakening",
    title: "Floral Essence",
    subtitle: "A bouquet of fresh morning dew",
    badge: "New"
  },
  {
    image: "/carousal2.png",
    label: "Pastel Dreams",
    title: "Rose Petals",
    subtitle: "Soft, delicate, and timeless",
    badge: "Premium"
  },
  {
    image: "/Carousal3.png",
    label: "Fresh Garden",
    title: "Sage & Mint",
    subtitle: "Crisp notes of a summer morning",
    badge: "Limited"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover object-[70%_center]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxe-bg/90 via-luxe-bg/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-left px-6 md:px-24 max-w-5xl">
        {/* Decorative Floral Outlines */}
        <div className="absolute -left-12 -top-12 opacity-10 pointer-events-none">
          <Flower2 size={200} strokeWidth={0.3} className="text-luxe-accent animate-spin-slow" />
        </div>
        <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
          <Leaf size={150} strokeWidth={0.3} className="text-luxe-accent rotate-45" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-luxe-accent font-semibold">
                {slides[current].label}
              </span>
              <span className="px-3 py-1 bg-luxe-soft-pink text-luxe-paper text-[9px] font-bold uppercase tracking-widest rounded-full">
                {slides[current].badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif text-luxe-paper leading-tight mb-8">
              {slides[current].title.split(' ')[0]} <br />
              <span className="italic font-light text-luxe-accent">{slides[current].title.split(' ')[1]}</span>
            </h1>

            <p className="text-sm md:text-lg text-luxe-paper/70 max-w-xl mb-12 font-light leading-relaxed tracking-wide uppercase">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
              <Link
                to="/collections"
                className="group relative px-10 py-4 overflow-hidden border border-luxe-accent text-[11px] uppercase tracking-[0.3em] font-semibold text-luxe-paper transition-all duration-500 rounded-full"
              >
                <div className="absolute inset-0 bg-luxe-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Shop Now
                </span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-luxe-black transition-all">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-luxe-black transition-all">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxe-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
