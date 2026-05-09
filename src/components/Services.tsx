import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Camera, Wind, Brush, Star, Heart } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Bridal Makeup",
      desc: "Full glam bridal look tailored to your features with an HD finish.",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
    },
    {
      title: "Party Makeup",
      desc: "Glamorous evening and cocktail looks for bridesmaids and guests.",
      icon: <Star className="w-8 h-8 text-primary" />,
    },
    {
      title: "HD Makeup",
      desc: "High-definition, camera-ready finish perfect for heavy flash photography.",
      icon: <Camera className="w-8 h-8 text-primary" />,
    },
    {
      title: "Airbrush Makeup",
      desc: "Flawless, lightweight, and long-lasting airbrush technique.",
      icon: <Wind className="w-8 h-8 text-primary" />,
    },
    {
      title: "Bridal Mehndi",
      desc: "Intricate, traditional full-hand bridal mehndi with fine details.",
      icon: <Heart className="w-8 h-8 text-primary" />,
    },
    {
      title: "Arabic Mehndi",
      desc: "Bold, modern, and striking Arabic and Indo-Arabic designs.",
      icon: <Brush className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground">Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-background border border-border hover:border-primary transition-all duration-300 ease-in-out cursor-default relative overflow-hidden"
            >
              <div className="mb-6">{service.icon}</div>
              <h4 className="font-serif text-2xl text-foreground mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed font-light">
                {service.desc}
              </p>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
