"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingPopup } from "@/components/ui/booking-popup";
import { motion } from "framer-motion";

export function ContactSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-gradient-luxury text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Ready to Find Your Dream Property?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-lg"
            >
              Get in touch with our expert team and let us help you make the right investment
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+911234567890" className="text-white/80 hover:text-accent transition-colors">
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@aiminfrabuild.com" className="text-white/80 hover:text-accent transition-colors">
                        info@aiminfrabuild.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/80">
                        Delhi NCR, India<br />
                        Serving clients across India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-white/80">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">Why Choose Us?</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• 25+ years of expertise in Delhi NCR</li>
                  <li>• 2500+ crores worth of transactions</li>
                  <li>• Partnerships with top developers</li>
                  <li>• End-to-end real estate solutions</li>
                </ul>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10"
            >
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="text-white/90 mb-8">
                  Book a free consultation with our real estate experts. We'll help you find the perfect property that matches your needs and budget.
                </p>

                <div className="space-y-4">
                  <Button
                    variant="premium"
                    size="xl"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full text-lg font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Book Free Consultation
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-sm text-white/70">
                    <span>•</span>
                    <span>Free of charge</span>
                    <span>•</span>
                    <span>No obligation</span>
                    <span>•</span>
                    <span>Expert advice</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-white/70">
                    Trusted by 1000+ satisfied clients across India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}