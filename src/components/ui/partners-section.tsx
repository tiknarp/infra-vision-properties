"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Birla Real Estate", logo: "B" },
  { name: "Elan", logo: "E" },
  { name: "DLF", logo: "D" },
  { name: "Godrej Properties", logo: "G" },
  { name: "Indiabulls", logo: "I" },
  { name: "Tata Housing", logo: "T" },
  { name: "Sobha", logo: "S" },
  { name: "Brigade Group", logo: "BG" },
];

export function PartnersSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We collaborate with India's leading real estate developers to bring you the finest properties. 
            Our partnerships ensure access to premium projects and exclusive opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-luxury rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-luxury transition-all duration-300 mb-3">
                <span className="text-white font-bold text-lg md:text-xl">
                  {partner.logo}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            <span className="text-accent font-semibold">2500+ Crores</span> worth of transactions processed since 1995
          </p>
        </div>
      </div>
    </section>
  );
}