"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export function AvisInnovationLab() {
  const cards = [
    {
      id: "ai-data",
      title: "AI & Data Intelligence",
      description: "Smarter decisions for a better experience.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "connected-fleet",
      title: "Connected Fleet",
      description: "Real-time insights for safer journeys.",
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "ev-sustainability",
      title: "EV & Sustainability",
      description: "Driving a cleaner, greener future.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "future-ready",
      title: "Future Ready",
      description: "Preparing for autonomous and the road ahead.",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % cards.length);
  };

  return (
    <section id="innovation" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4001A]">
              INNOVATING FOR WHAT&apos;S NEXT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Mobility Innovation <br className="hidden sm:inline" />
              Lab
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Using technology and data to build smarter, safer, and more sustainable mobility solutions.
            </p>

            <div>
              <Link
                href="#careers"
                className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 border border-slate-300 hover:border-[#D4001A] hover:text-[#D4001A] px-6 py-3 rounded-full transition-all"
              >
                <span>EXPLORE INNOVATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column 4 Innovation Cards Grid / Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {cards.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm cursor-pointer ${
                    activeIdx === idx
                      ? "border-[#D4001A] shadow-md ring-2 ring-[#D4001A]/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="relative h-28 sm:h-36 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Chevron Nav button */}
            <button
              onClick={handleNext}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-transform active:scale-95"
              aria-label="Next Innovation"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIdx === idx ? "w-6 bg-[#D4001A]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
