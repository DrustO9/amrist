import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-luxe-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-luxe-gold font-bold mb-4 block">Concierge</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">At Your <span className="italic font-light">Service</span></h1>
            <p className="text-white/40 max-w-xl font-light tracking-wide leading-relaxed">
              Whether you seek a personal fragrance consultation or require assistance with an order, our concierge team is here to provide an exceptional experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-16"
          >
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-luxe-gold shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2">Email</h4>
                  <p className="text-xl font-serif text-white">concierge@amorist.luxe</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-luxe-gold shrink-0">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2">Phone</h4>
                  <p className="text-xl font-serif text-white">+91 1800 LUXE 001</p>
                  <p className="text-xs text-white/20 mt-1 uppercase tracking-widest">Mon - Sat, 10am - 7pm IST</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-luxe-gold shrink-0">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2">Boutique</h4>
                  <p className="text-xl font-serif text-white">Amorist Flagship Store</p>
                  <p className="text-sm text-white/40 mt-1 font-light">DLF Emporio, Vasant Kunj, New Delhi</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-12 border-t border-white/5">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-6">Follow Our Journey</h4>
              <div className="flex gap-8">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="text-sm text-white/40 hover:text-luxe-gold transition-colors duration-300 font-light tracking-widest">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-10 md:p-16 rounded-sm"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-luxe-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-luxe-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Subject</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-white/60 focus:outline-none focus:border-luxe-gold transition-colors appearance-none cursor-pointer">
                  <option className="bg-luxe-black">General Inquiry</option>
                  <option className="bg-luxe-black">Order Assistance</option>
                  <option className="bg-luxe-black">Fragrance Consultation</option>
                  <option className="bg-luxe-black">Press & Media</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-luxe-gold transition-colors resize-none"
                  placeholder="How can we assist you?"
                />
              </div>

              <button className="group relative w-full py-5 overflow-hidden border border-luxe-gold text-[11px] uppercase tracking-[0.4em] font-bold text-white transition-all duration-500">
                <div className="absolute inset-0 bg-luxe-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-luxe-black transition-colors duration-500 flex items-center justify-center gap-3">
                  Send Message <ArrowRight size={16} />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
