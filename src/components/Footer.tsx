import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0C0A] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxe-gold/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-luxe-accent/5 blur-[100px] rounded-full -ml-32 -mb-32" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex flex-col group">
              <span className="text-2xl font-serif tracking-[0.3em] text-white group-hover:text-luxe-gold transition-colors duration-500">
                AMORIST
              </span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-luxe-gold mt-1">
                LUXURY PARFUMS
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed font-light max-w-xs">
              Redefining the art of fragrance. Each scent is a masterpiece of balance, designed to evoke emotion and leave an indelible mark.
            </p>
            <div className="flex items-center gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-white/20 hover:text-luxe-gold transition-all duration-300 hover:-translate-y-1">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-luxe-gold font-bold mb-8">Boutique</h4>
            <ul className="flex flex-col gap-4">
              {['All Collections', 'Bestsellers', 'Gift Sets', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-luxe-gold font-bold mb-8">Concierge</h4>
            <ul className="flex flex-col gap-4">
              {['Shipping', 'Returns', 'Privacy Policy', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-luxe-gold font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6 font-light">
              Join our inner circle for exclusive previews and olfactory insights.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-luxe-gold transition-colors placeholder:text-white/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-luxe-gold hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} AMORIST LUXE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white/40 cursor-pointer transition-colors">Terms</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white/40 cursor-pointer transition-colors">Privacy</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white/40 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
