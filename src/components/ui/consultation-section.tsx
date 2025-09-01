"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingPopup } from "@/components/ui/booking-popup";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const realEstateImages = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop", // Modern house
  "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop", // Luxury apartment
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop", // Office building
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop", // City skyline
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop", // Modern home
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop", // Interior design
  "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1000&auto=format&fit=crop", // Real estate keys
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1000&auto=format&fit=crop", // House exterior
];

export function ConsultationSection() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="relative py-32 bg-luxury overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Schedule a Consultation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto mb-12"
          >
            Ready to explore premium real estate opportunities? Let our experts guide you through 
            your property investment journey with personalized consultation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              onClick={() => setShowBooking(true)}
              variant="secondary"
              size="lg"
              className="bg-white text-luxury hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-luxury"
            >
              Book Your Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <Floating sensitivity={-0.5} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[8%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            src={realEstateImages[0]}
            className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="Modern real estate"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[15%] left-[75%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            src={realEstateImages[1]}
            className="w-24 h-32 md:w-32 md:h-40 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="Luxury apartment"
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[45%] left-[5%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            src={realEstateImages[2]}
            className="w-32 h-24 md:w-40 md:h-32 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="Commercial building"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[60%] left-[70%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            src={realEstateImages[3]}
            className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="City skyline"
          />
        </FloatingElement>

        <FloatingElement depth={3} className="top-[25%] left-[45%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            src={realEstateImages[4]}
            className="w-16 h-24 md:w-20 md:h-28 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="Modern home"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[70%] left-[25%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            src={realEstateImages[5]}
            className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="Interior design"
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[35%] left-[85%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            src={realEstateImages[6]}
            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="Real estate keys"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
            src={realEstateImages[7]}
            className="w-28 h-20 md:w-36 md:h-24 object-cover rounded-2xl shadow-luxury hover:scale-105 transition-transform duration-300"
            alt="House exterior"
          />
        </FloatingElement>
      </Floating>

      <BookingPopup isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </section>
  );
}