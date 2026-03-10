import React from 'react';
import { Leaf, Clock, Award, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Leaf size={32} />, title: "100% Vegan", desc: "Cruelty-free ingredients" },
    { icon: <Clock size={32} />, title: "Long Lasting", desc: "12+ Hours Longevity" },
    { icon: <Award size={32} />, title: "Premium Quality", desc: "Artisanal craftsmanship" },
    { icon: <ShieldCheck size={32} />, title: "Certified", desc: "Safety & Quality Assured" }
  ];

  return (
    <section className="py-12 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-row justify-between items-center gap-2 md:gap-8 overflow-x-auto no-scrollbar">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-4 shrink-0">
              <div className="text-luxe-gold shrink-0 scale-75 md:scale-100">{f.icon}</div>
              <div className="flex flex-col">
                <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white font-bold leading-tight whitespace-nowrap">{f.title}</h4>
                <p className="text-[7px] md:text-[9px] uppercase tracking-widest text-white/40 mt-0.5 whitespace-nowrap">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
