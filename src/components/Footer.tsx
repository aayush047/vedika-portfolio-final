import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-serif font-bold text-primary tracking-wider block mb-2">
              VEDIKA MAHESHWARI
            </a>
            <p className="text-muted-foreground font-light tracking-wide text-sm uppercase">
              Luxury Bridal Makeup & Mehndi
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#about" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm font-light">
            &copy; {new Date().getFullYear()} Vedika Maheshwari Makeup Artist. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
