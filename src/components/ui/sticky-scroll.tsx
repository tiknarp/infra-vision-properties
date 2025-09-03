'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

// Import partner company logos
import birlaLogo from '@/assets/birla.png';
import brigadeLogo from '@/assets/brigade.png';
import dlfLogo from '@/assets/dlf.jpeg';
import elanLogo from '@/assets/elan.jpeg';
import godrejLogo from '@/assets/godrej.png';
import indiabullsLogo from '@/assets/indiabullsgroup.jpeg';
import sobhaLogo from '@/assets/sobha.jpeg';
import tataLogo from '@/assets/tata.png';

const Component = forwardRef<HTMLElement>((props, ref) => {
  const partnerImages = [
    { src: birlaLogo, alt: "Birla Real Estate", name: "Birla Real Estate" },
    { src: brigadeLogo, alt: "Brigade Group", name: "Brigade Group" },
    { src: dlfLogo, alt: "DLF Limited", name: "DLF Limited" },
    { src: elanLogo, alt: "Elan Group", name: "Elan Group" },
    { src: godrejLogo, alt: "Godrej Properties", name: "Godrej Properties" },
    { src: indiabullsLogo, alt: "Indiabulls Group", name: "Indiabulls Group" },
    { src: sobhaLogo, alt: "Sobha Limited", name: "Sobha Limited" },
    { src: tataLogo, alt: "Tata Housing", name: "Tata Housing" },
  ];

  return (
    <ReactLenis root>
      <main className='bg-background' ref={ref}>
        <div className='wrapper'>
          <section className='text-foreground h-screen w-full bg-gradient-to-br from-background via-background/95 to-muted grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] mb-6'>
                Our Trusted Partners
                <br />
                <span className="text-primary">Building Excellence Together</span>
              </h1>
              <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto px-8">
                Scroll down to explore our partnerships with India's leading real estate developers! 👇
              </p>
            </motion.div>
          </section>
        </div>

        <section className='text-foreground w-full bg-background p-4'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='grid gap-4 col-span-4'>
              {partnerImages.slice(0, 3).map((partner, index) => (
                <motion.figure 
                  key={`left-${index}`}
                  className='w-full'
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-full h-96 bg-white/90 rounded-2xl flex items-center justify-center shadow-elegant hover:shadow-luxury hover:scale-105 transition-all duration-300 p-6">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className='max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                  <p className="text-center mt-3 font-medium text-muted-foreground">{partner.name}</p>
                </motion.figure>
              ))}
            </div>
            
            <div className='sticky top-0 h-screen w-full col-span-4 gap-4 grid grid-rows-3'>
              {partnerImages.slice(3, 6).map((partner, index) => (
                <motion.figure 
                  key={`center-${index}`}
                  className='w-full h-full'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                >
                  <div className="w-full h-full bg-white/90 rounded-2xl flex items-center justify-center shadow-elegant hover:shadow-luxury hover:scale-105 transition-all duration-300 p-6">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className='max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                </motion.figure>
              ))}
            </div>
            
            <div className='grid gap-4 col-span-4'>
              {partnerImages.slice(6).map((partner, index) => (
                <motion.figure 
                  key={`right-${index}`}
                  className='w-full'
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-full h-96 bg-white/90 rounded-2xl flex items-center justify-center shadow-elegant hover:shadow-luxury hover:scale-105 transition-all duration-300 p-6">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className='max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                  <p className="text-center mt-3 font-medium text-muted-foreground">{partner.name}</p>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <footer className='group bg-background'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <h2 className='text-[12vw] md:text-[8vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all ease-linear'>
              Excellence
            </h2>
            <div className='bg-gradient-to-t from-background to-muted h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'>
              <p className="text-muted-foreground font-medium">
                <span className="text-accent font-semibold">₹2500+ Crores</span> worth of transactions since 1995
              </p>
            </div>
          </motion.div>
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'PartnersGallery';

export default Component;