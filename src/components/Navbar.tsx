import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', path: '/collections' },
    { name: 'Gifting', path: '/gifting' },
    { name: 'Packs', path: '/bundle' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const aboutLinks = [
    { name: 'Corporate Gifting', path: '/corporate' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-luxe-soft-pink py-2 text-center overflow-hidden">
        <motion.p 
          animate={{ x: [1000, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxe-paper whitespace-nowrap"
        >
          ! Spring Collection ! Fresh Floral Scents for a New Season — Shop the Collection Now
        </motion.p>
      </div>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mt-[26px] ${
          isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-luxe-soft-pink/20' : 'bg-transparent py-8'
        }`}
      >
        {/* Decorative Floral Outlines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <Flower2 className="absolute -left-4 -top-4 text-luxe-accent rotate-12" size={80} strokeWidth={0.5} />
          <Flower2 className="absolute -right-4 -bottom-4 text-luxe-accent -rotate-12" size={80} strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center relative z-10">
          {/* Left: Logo */}
          <Link to="/" className="flex flex-col items-start group mr-12">
            <span className="text-xl md:text-2xl font-serif tracking-[0.3em] text-luxe-paper group-hover:text-luxe-accent transition-colors duration-500">
              AMORIST
            </span>
            <span className="text-[7px] uppercase tracking-[0.5em] text-luxe-accent mt-1 opacity-80">
              LUXURY PARFUMS
            </span>
          </Link>

          {/* Center-Left: Main Links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300">
              Home
            </Link>
            <Link to="/collections" className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300">
              Explore
            </Link>
            <Link to="/gifting" className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300">
              Gifting
            </Link>
            <Link to="/bundle" className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300">
              Packs
            </Link>
            <Link to="/limited" className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxe-accent hover:text-luxe-paper transition-colors duration-300">
              LIMITED EDITION
            </Link>
            <Link to="/blogs" className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300">
              Blogs
            </Link>
            
            {/* More Dropdown */}
            <div 
              className="relative group/dropdown"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="text-[10px] uppercase tracking-[0.2em] font-medium text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300 flex items-center gap-1">
                More <ChevronDown size={10} />
              </button>
              
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-48 glass p-4 flex flex-col gap-3 rounded-xl"
                  >
                    {aboutLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.path}
                        className="text-[10px] uppercase tracking-[0.15em] text-luxe-paper/60 hover:text-luxe-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Icons (Pushed to the right) */}
          <div className="ml-auto flex items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4 md:gap-6">
              <button className="text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300 flex items-center gap-2">
                <Search size={18} strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-widest hidden xl:block">Search</span>
              </button>
              <button className="relative text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300 flex items-center gap-2">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-widest hidden xl:block">Cart</span>
                <span className="absolute -top-2 -right-2 bg-luxe-accent text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300 flex items-center gap-2">
                <User size={18} strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-widest hidden xl:block">Account</span>
              </button>
              <button 
                className="lg:hidden text-luxe-paper/70 hover:text-luxe-accent transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-luxe-black flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-luxe-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="text-3xl font-serif text-white hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
