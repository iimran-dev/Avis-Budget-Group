"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Zap, Sun, Users } from "lucide-react";

export function AvisEsg() {
  const esgStats = [
    {
      icon: Leaf,
      title: "CO2 Reduction",
      subtitle: "(Since 2016)",
      value: "32%",
    },
    {
      icon: Zap,
      title: "Electric Vehicles",
      subtitle: "In Our Fleet",
      value: "25%+",
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      subtitle: "Usage",
      value: "18%",
    },
    {
      icon: Users,
      title: "Diversity in",
      subtitle: "Leadership",
      value: "46%",
    },
  ];

  return (
    <section id="sustainability" className="py-16 sm:py-24 bg-[#072C22] text-white relative overflow-hidden">
      
      {/* Background leaf pattern/glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            className="lg:col-span-4 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              SUSTAINABLE TODAY. BETTER TOMORROW.
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Our ESG Impact
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-normal">
              We are committed to creating a positive impact for our planet, our people and our communities.
            </p>

            <div>
              <motion.div whileHover={{ x: 6 }} className="inline-block">
                <Link
                  href="#innovation"
                  className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-white border border-emerald-400/40 hover:border-emerald-400 hover:bg-emerald-950/40 px-6 py-3 rounded-full transition-all"
                >
                  <span>VIEW ESG REPORT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column 4 Stat Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {esgStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  className="bg-[#0A3F30]/80 border border-emerald-500/20 rounded-2xl p-4 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-6 hover:border-emerald-400/50 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <div className="text-xs text-emerald-200 font-semibold">{stat.title}</div>
                    <div className="text-[10px] text-emerald-300/70 italic mb-1.5 sm:mb-2">{stat.subtitle}</div>
                    <motion.div
                      className="text-2xl sm:text-4xl font-black text-white tracking-tight"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
