import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
           <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto">
  <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4" />
  <img
    // Yahan change hai: purane URL ki jagah ab local path hai
    src="/gallery/vedika.jfif" 
    alt="Vedika Maheshwari - Makeup Artist"
    className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
  />
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-primary tracking-widest uppercase text-sm mb-4">Meet The Artist</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Vedika Maheshwari</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
              <p>
                With over 3 years of experience in the luxury bridal industry, my philosophy is simple: makeup should not mask who you are; it should elevate your natural beauty to its most breathtaking state.
              </p>
              <p>
                Every bride carries a unique aura. My craft is deeply rooted in understanding that essence, creating timeless, HD-ready looks, and weaving intricate mehndi designs that tell a story of love, tradition, and modern elegance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border pt-8">
              <div className="text-center">
                <span className="block text-primary font-serif text-2xl mb-2">✦</span>
                <span className="text-sm tracking-wider uppercase text-foreground/80">Certified Artist</span>
              </div>
              <div className="text-center">
                <span className="block text-primary font-serif text-2xl mb-2">✦</span>
                <span className="text-sm tracking-wider uppercase text-foreground/80">Premium Products</span>
              </div>
              <div className="text-center">
                <span className="block text-primary font-serif text-2xl mb-2">✦</span>
                <span className="text-sm tracking-wider uppercase text-foreground/80">On-Location</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
