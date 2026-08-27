"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Building2, Building, Handshake, Zap, Users } from "lucide-react";

export function AvisEcosystem() {
  const leftColumn = [
    { icon: Plane, label: "Airports" },
    { icon: Building, label: "Cities" },
    { icon: Zap, label: "EV Charging" },
  ];

  const rightColumn = [
    { icon: Building2, label: "Corporate Clients" },
    { icon: Handshake, label: "Partners" },
    { icon: Users, label: "Communities" },
  ];

  // Refined cubic-bezier ease for high-level executive UI transition
  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 relative overflow-hidden">
      
      {/* Subtle architectural grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            {/* Tag */}
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4001A]">
              CONNECTED. INTELLIGENT. RELIABLE.
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              A Global Mobility <br />
              Ecosystem
            </h2>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed font-normal max-w-md">
              Our network connects people, places and possibilities through technology,
              partnerships and a shared purpose.
            </p>

            {/* Learn More Link with Refined Line Accent */}
            <div className="pt-2">
              <Link
                href="#learn-more"
                className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-slate-900 hover:text-[#D4001A] transition-colors group"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
              </Link>
              <div className="w-32 h-[2px] bg-slate-300 mt-2" />
            </div>

            {/* 2-Column Clean Icon List */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-6 pt-6">
              {/* Left List */}
              <div className="space-y-4">
                {leftColumn.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-center space-x-3 group cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3, ease: luxuryEase }}
                    >
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs group-hover:border-[#D4001A] group-hover:text-[#D4001A] transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#D4001A] transition-colors duration-300">
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right List */}
              <div className="space-y-4">
                {rightColumn.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-center space-x-3 group cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3, ease: luxuryEase }}
                    >
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs group-hover:border-[#D4001A] group-hover:text-[#D4001A] transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#D4001A] transition-colors duration-300">
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Isometric 3D Ecosystem Hub Illustration */}
          <motion.div
            className="lg:col-span-7 relative flex justify-center items-center py-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            <div className="relative w-full max-w-2xl aspect-[16/10] bg-white rounded-3xl p-3 sm:p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-200/80 overflow-hidden flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                alt="A Global Mobility Ecosystem Isometric 3D Diagram"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
