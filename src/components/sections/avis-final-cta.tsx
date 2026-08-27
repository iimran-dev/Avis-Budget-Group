"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, TrendingUp, Handshake } from "lucide-react";

export function AvisFinalCta() {
  const cards = [
    {
      title: "For Customers",
      desc: "Find the right solution for your journey.",
      icon: Car,
      link: "#customers",
    },
    {
      title: "For Investors",
      desc: "Discover performance, reports and more.",
      icon: TrendingUp,
      link: "#investors",
    },
    {
      title: "For Partners",
      desc: "Let's build the future of mobility together.",
      icon: Handshake,
      link: "#partners",
    },
  ];

  return (
    <section className="relative py-28 bg-[#0B0E14] text-white overflow-hidden">
      
      {/* Background Image & Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1920&auto=format&fit=crop"
          alt="Let's Move The World Forward"
          fill
          className="object-cover object-center opacity-40 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/85 to-[#0B0E14]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              Let&apos;s Move <br />
              The World Forward
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal max-w-md">
              Together, we&apos;re building a world where mobility is smarter, safer and more sustainable for all.
            </p>
          </motion.div>

          {/* Right Column 3 Audience Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="bg-[#141822]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-white/30 hover:bg-[#1A202C]/90 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white w-fit group-hover:text-[#D4001A] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-extrabold text-white">{card.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>

                  <Link
                    href={card.link}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-[#D4001A] transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
