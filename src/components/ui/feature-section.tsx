"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "Our Services",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12 py-32 bg-background", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
          {title}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
          With over 25 years of expertise in Delhi NCR's real estate market, we provide comprehensive services to meet all your property needs.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8 cursor-pointer p-4 rounded-lg hover:bg-muted/30 transition-colors"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.6 }}
                transition={{ duration: 0.5 }}
                onClick={() => setCurrentFeature(index)}
              >
                <motion.div
                  className={cn(
                    "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110 shadow-luxury"
                      : "bg-muted border-muted-foreground/30 text-muted-foreground",
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-elegant"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-white text-xl font-semibold mb-2">
                          {feature.title || feature.step}
                        </h4>
                        <div className="w-full bg-white/20 rounded-full h-1">
                          <div 
                            className="bg-accent h-1 rounded-full transition-all duration-300"
                            style={{ width: index === currentFeature ? `${progress}%` : '0%' }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}