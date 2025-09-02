"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";

export function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-luxury">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Aim Infra Build</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <TextShimmerWave
            className="text-2xl font-semibold [--base-color:#ffffff] [--base-gradient-color:#C9A876]"
            duration={1.5}
            spread={1}
            zDistance={8}
            scaleDistance={1.2}
            rotateYDistance={15}
          >
            Crafting Your Dream Property Experience...
          </TextShimmerWave>
        </motion.div>
      </div>
    </motion.div>
  );
}