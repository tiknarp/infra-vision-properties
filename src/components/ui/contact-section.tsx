"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingPopup } from "@/components/ui/booking-popup";
import { motion } from "framer-motion";
export function ContactSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return <>
      

      <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>;
}