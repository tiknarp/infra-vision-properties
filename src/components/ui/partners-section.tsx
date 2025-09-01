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
    <section className="py-24 bg-background" id="partners">
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Our Trusted Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            We collaborate with India's leading real estate developers to bring you the finest properties.
          </motion.p>
        </div>

        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <a
            href="#contact"
            className="block text-sm duration-150 hover:opacity-75 text-primary font-medium"
          >
            <span>Explore Partnerships</span>
            <motion.span 
              className="ml-1 inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </div>

        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-4xl grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-luxury rounded-2xl flex items-center justify-center shadow-elegant hover:shadow-luxury transition-all duration-300 mb-3">
                <span className="text-white font-bold text-lg md:text-xl">
                  {partner.logo}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-accent font-semibold">₹2500+ Crores</span> worth of transactions processed since 1995
          </p>
        </motion.div>
      </div>
    </section>
  );
}