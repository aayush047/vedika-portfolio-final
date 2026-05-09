import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground">Book Your Date</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div className="space-y-4">
              <h4 className="font-serif text-2xl text-foreground mb-4">Let's Create Magic</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                We are currently accepting bookings for the 2024-2025 bridal season. Reach out via WhatsApp or call us directly to check availability and discuss your vision.
              </p>
            </div>

            <div className="space-y-6">
              <a href="https://wa.me/8889192854" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 border border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-card text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                  <p className="text-lg text-foreground">+91 8889192854</p>
                </div>
              </a>

              <a href="tel:+919876543210" className="flex items-center gap-6 p-4 border border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-card text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                  <p className="text-lg text-foreground">+91 8889192854</p>
                </div>
              </a>

              <a href="https://instagram.com/its_vedu.0821" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 border border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-card text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FaInstagram className="text-lg" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Instagram</p>
                  <p className="text-lg text-foreground">@its_vedu.0821</p>
                </div>
              </a>
            </div>
            
            <div className="flex items-start gap-4 text-muted-foreground">
              <MapPin className="text-primary shrink-0 mt-1" />
              <p className="font-light">Mandsour, Shabakheda — Available for travel across India  weddings.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-[600px] border border-border p-2 bg-card"
          >
            <iframe
              title="Sabakheda location map"
              src="https://www.google.com/maps?q=Sabakheda,+Madhya+Pradesh+458002&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
