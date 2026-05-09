import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    "https://images.unsplash.com/photo-1595475884562-073c30d45670?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583001809873-c626adbd37c2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616084042858-aabf4bd6682b?q=80&w=2071&auto=format&fit=crop",
  ];

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="h-full w-full"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-4"
        >
          Every Bride Deserves to Feel Like a Queen
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 max-w-4xl"
        >
          Luxury Bridal Makeup & Mehndi Artist
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/918889192854"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            Book on WhatsApp
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-primary text-primary font-medium uppercase tracking-widest text-sm hover:bg-primary/10 transition-colors"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-md border-t border-border py-4">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-base text-foreground/80 tracking-wider">
          <span>3+ Years Experience</span>
          <span className="hidden md:inline text-primary">•</span>
          <span>200+ Happy Brides</span>
          <span className="hidden md:inline text-primary">•</span>
          <span>100+ Events</span>
        </div>
      </div>
    </section>
  );
}
