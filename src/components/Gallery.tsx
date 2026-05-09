import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Screenshot ke mutabiq images ka path set kiya gaya hai
const makeupImages = Array.from({ length: 9 }, (_, i) => `/gallery/makeup${i + 1}.jfif`);
const mehndiImages = Array.from({ length: 9 }, (_, i) => `/gallery/mehndi${i + 1}.jfif`);

export default function Gallery() {
  const [filter, setFilter] = useState<"makeup" | "mehndi">("makeup");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = filter === "makeup" ? makeupImages : mehndiImages;
  const lightboxSlides = images.map((src) => ({ src }));

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-primary tracking-widest uppercase text-sm mb-4">Portfolio</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-12">The Gallery</h3>
          
          {/* Tabs */}
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setFilter("makeup")}
              className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors ${
                filter === "makeup" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Makeup
            </button>
            <button
              onClick={() => setFilter("mehndi")}
              className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors ${
                filter === "mehndi" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Mehndi
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {images.map((src, idx) => (
              <motion.div
                key={`${filter}-${src}`} // Key unique rakhi hai taaki animation smooth chale
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square overflow-hidden cursor-pointer group bg-muted"
                onClick={() => {
                  setPhotoIndex(idx);
                  setIsOpen(true);
                }}
              >
                <img
                  src={src}
                  alt={`${filter} artwork ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif italic text-xl">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Fullscreen Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={lightboxSlides}
        />
      </div>
    </section>
  );
}