"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Globe, MapPin, Users, Car, ChevronDown } from "lucide-react";

export function AvisHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stats = [
    { icon: Globe, value: "180+", label: "Countries" },
    { icon: MapPin, value: "10,250+", label: "Rental Locations" },
    { icon: Users, value: "24,500+", label: "Employees" },
    { icon: Car, value: "Millions", label: "Of Rentals Every Year" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0B0E14] text-white overflow-hidden">
      {/* Background Hero Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
          alt="Driving the Future of Mobility"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14]/90 via-[#0B0E14]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-[#0B0E14]/40" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex-1 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white drop-shadow-md"
            variants={itemVariants}
          >
            Driving the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              of Mobility
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl"
            variants={itemVariants}
          >
            We make life&apos;s journeys better by delivering innovative mobility solutions
            that are safe, sustainable and accessible for all.
          </motion.p>

          {/* Action Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
              <Link
                href="#global-scale"
                className="bg-[#D4001A] hover:bg-[#B80016] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-red-600/40 flex items-center justify-center w-full sm:w-auto text-center"
              >
                ABOUT US
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
              <Link
                href="#ecosystem"
                className="bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full border border-white/30 transition-all flex items-center justify-center w-full sm:w-auto text-center hover:border-white/60"
              >
                OUR BRANDS
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="w-full flex justify-center mt-8 sm:mt-12 mb-4">
          <motion.a
            href="#global-scale"
            className="text-white/70 hover:text-white transition-colors p-2"
            aria-label="Scroll Down"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom Floating Glass Stat Bar Overlay */}
      <motion.div
        className="relative z-10 w-full bg-[#0F141E]/90 backdrop-blur-md border-t border-white/10 py-5 sm:py-6 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex items-center space-x-3 sm:space-x-4 border-r-0 md:border-r md:border-white/10 md:last:border-r-0 pr-0 md:pr-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-white shrink-0 group-hover:border-[#D4001A] transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4001A]" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
