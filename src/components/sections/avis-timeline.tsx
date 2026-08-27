"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

interface EraCard {
  year: string;
  title: string;
  image: string;
  highlight?: boolean;
}

export function AvisTimeline() {
  const eras: EraCard[] = [
    {
      year: "1950s",
      title: "Building the Foundation",
      image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2000s",
      title: "Expanding Globally",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2020s",
      title: "Smarter Mobility",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2030+",
      title: "Shaping the Future Together",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
      highlight: true,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(3);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % eras.length);
  };

  return (
    <section className="py-24 bg-[#0B0E14] text-white overflow-hidden relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4001A]">
              THE FUTURE IS MOVING.
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Mobility Through <br />
              Time
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Decades of innovation. A clear vision for the future.
            </p>

            <div>
              <motion.div whileHover={{ x: 6 }} className="inline-block">
                <Link
                  href="#our-journey"
                  className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-white border border-white/30 hover:border-[#D4001A] hover:text-[#D4001A] px-6 py-3 rounded-full transition-all"
                >
                  <span>EXPLORE OUR JOURNEY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column Interactive Cards Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {eras.map((era, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={era.year}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                      isActive
                        ? "border-2 border-[#D4001A] shadow-xl shadow-red-900/30"
                        : "border-white/10 opacity-75 hover:opacity-100 hover:border-white/30"
                    }`}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Background Image */}
                    <Image
                      src={era.image}
                      alt={era.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                    {/* Active Highlight Ring Effect */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 border-2 border-[#D4001A] rounded-2xl pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Text Overlay */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <div className="text-sm font-black text-slate-200 uppercase tracking-widest flex items-center justify-between">
                        <span>{era.year}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#D4001A] animate-ping" />
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {era.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Next Navigation Chevron Button overlaying right side */}
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center hover:bg-slate-100 transition-colors hidden sm:flex"
                aria-label="Next Era"
              >
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </motion.button>
            </div>

            {/* Bottom Carousel Dot Controls */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              {eras.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-8 bg-[#D4001A]" : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to era ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
