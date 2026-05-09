import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anjali Desai",
      text: "Priya made me feel like royalty on my wedding day. The makeup was flawless, felt so light, and lasted through tears and dancing. Highly recommended!",
    },
    {
      name: "Meera Patel",
      text: "Her mehndi designs are true art. She listened to exactly what I wanted and created a custom design that incorporated our story. Stunning work.",
    },
    {
      name: "Simran Kapoor",
      text: "I booked Priya for both my Sangeet and Wedding day. Her team is professional, punctual, and incredibly talented. I got so many compliments!",
    },
    {
      name: "Roshni Singh",
      text: "The HD makeup finish was incredible. Looking at my wedding photos, my skin looks naturally perfect. She is truly a master of her craft.",
    },
    {
      name: "Kriti Verma",
      text: "Such a calming presence on a stressful morning. She took her time and perfected every detail. The Arabic mehndi for the guests was also beautiful.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary tracking-widest uppercase text-sm mb-4">Love Letters</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground">Bride Testimonials</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            loop={true}
            className="pb-16"
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-center px-4 md:px-16">
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-serif italic text-foreground mb-8 leading-relaxed">
                    "{test.text}"
                  </p>
                  <p className="text-sm uppercase tracking-widest text-primary">
                    — {test.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
