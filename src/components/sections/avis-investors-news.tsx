"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function AvisInvestorsNews() {
  const [activeTab, setActiveTab] = useState("1M");

  const newsItems = [
    {
      title: "Avis Budget Group Reports Second Quarter 2025 Results",
      date: "July 28, 2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Avis Budget Group Reports First Quarter 2025 Results",
      date: "April 29, 2025",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Avis Budget Group Reports Fourth Quarter 2024 Results",
      date: "Feb 12, 2025",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400&auto=format&fit=crop",
    },
  ];

  // SVG Chart path paths for different timeframe tabs
  const chartPaths: Record<string, string> = {
    "1D": "M 0 80 Q 50 60, 100 65 T 200 40 T 300 35 T 400 15",
    "1M": "M 0 85 Q 50 65, 100 70 T 200 45 T 300 30 T 400 15",
    "1Y": "M 0 90 Q 60 75, 120 50 T 240 60 T 360 25 T 400 10",
    "5Y": "M 0 95 Q 70 80, 140 40 T 280 45 T 380 20 T 400 5",
    ALL: "M 0 98 Q 80 85, 160 30 T 320 35 T 400 5",
  };

  const chartFillPaths: Record<string, string> = {
    "1D": "M 0 80 Q 50 60, 100 65 T 200 40 T 300 35 T 400 15 L 400 100 L 0 100 Z",
    "1M": "M 0 85 Q 50 65, 100 70 T 200 45 T 300 30 T 400 15 L 400 100 L 0 100 Z",
    "1Y": "M 0 90 Q 60 75, 120 50 T 240 60 T 360 25 T 400 10 L 400 100 L 0 100 Z",
    "5Y": "M 0 95 Q 70 80, 140 40 T 280 45 T 380 20 T 400 5 L 400 100 L 0 100 Z",
    ALL: "M 0 98 Q 80 85, 160 30 T 320 35 T 400 5 L 400 100 L 0 100 Z",
  };

  return (
    <section id="investors" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Investor Center & Stock Widget */}
          <motion.div
            className="lg:col-span-6 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4001A]">
              INVESTOR CENTER
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
              Delivering Long-Term Value
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
              Strong performance, disciplined strategy. Sustainable growth.
            </p>

            <div>
              <motion.div whileHover={{ x: 6 }} className="inline-block">
                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 border border-slate-300 hover:border-[#D4001A] hover:text-[#D4001A] px-6 py-3 rounded-full transition-all"
                >
                  <span>VIEW INVESTOR CENTER</span>
                </Link>
              </motion.div>
            </div>

            {/* NASDAQ CAR Stock Ticker Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-3 sm:space-y-4 max-w-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    NASDAQ: CAR
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular">
                    185.42 <span className="text-xs sm:text-sm font-semibold text-slate-500">USD</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 sm:space-x-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-emerald-200 text-[11px] sm:text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>+2.25 (+1.23%)</span>
                </div>
              </div>

              <div className="text-[10px] sm:text-[11px] text-slate-400">
                May 20, 2026 4:00 PM ET • Real-Time Quote
              </div>

              {/* Animated SVG Chart */}
              <div className="h-28 sm:h-32 w-full pt-2 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="stockGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill Area with Motion Keyframes */}
                  <motion.path
                    d={chartFillPaths[activeTab] || chartFillPaths["1M"]}
                    fill="url(#stockGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, d: chartFillPaths[activeTab] }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Line with Motion Path */}
                  <motion.path
                    d={chartPaths[activeTab] || chartPaths["1M"]}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, d: chartPaths[activeTab] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Pulsing current point dot */}
                  <circle cx="400" cy="15" r="5" fill="#10B981" className="animate-pulse" />
                </svg>
              </div>

              {/* Timeframe Filter Buttons */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 pt-2 border-t border-slate-200">
                {["1D", "1M", "1Y", "5Y", "ALL"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all ${
                      activeTab === tab
                        ? "bg-slate-900 text-white shadow-xs"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Latest News */}
          <motion.div
            id="newsroom"
            className="lg:col-span-6 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4001A]">
              LATEST NEWS
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
              Insights & Updates
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
              Stay informed with our latest news, announcements and stories.
            </p>

            <div>
              <motion.div whileHover={{ x: 6 }} className="inline-block">
                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 border border-slate-300 hover:border-[#D4001A] hover:text-[#D4001A] px-6 py-3 rounded-full transition-all"
                >
                  <span>VIEW ALL NEWS</span>
                </Link>
              </motion.div>
            </div>

            {/* News Cards List */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              {newsItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <Link
                    href="#"
                    className="group flex items-center space-x-3 sm:space-x-4 p-2.5 sm:p-3 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all"
                  >
                    <div className="relative h-16 w-20 sm:h-20 sm:w-24 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#D4001A] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-[11px] sm:text-xs text-slate-400 mt-1">
                        {item.date}
                      </div>
                    </div>

                    <div className="p-1.5 sm:p-2 text-slate-400 group-hover:text-[#D4001A] group-hover:translate-x-1 transition-all">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
