"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-luxury text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Aim Infra Build</span>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Your trusted real estate partner since 1995. We specialize in premium properties across Delhi NCR with a track record of ₹2500+ crores in successful transactions.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {[
                "Residential Properties",
                "Commercial Real Estate", 
                "Investment Advisory",
                "Retail Spaces",
                "Market Intelligence",
                "Legal & Documentation"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Properties", href: "#properties" },
                { name: "Partners", href: "#partners" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <a href="tel:+911234567890" className="text-white hover:text-accent transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <a href="mailto:info@aiminfrabuild.com" className="text-white hover:text-accent transition-colors">
                    info@aiminfrabuild.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-white">
                    Delhi NCR, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Business Hours</p>
                  <p className="text-white text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2024 Aim Infra Build. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Established 1995 • ₹2500+ Crores Transactions • Delhi NCR's Trusted Real Estate Partner
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/40">•</span>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <span className="text-white/40">•</span>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
    </footer>
  );
}