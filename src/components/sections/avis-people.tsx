"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function AvisPeople() {
  const people = [
    {
      name: "Maria",
      role: "Operations",
      quote: "Empowering teams. Delivering excellence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "James",
      role: "Fleet",
      quote: "Safety and care in every journey.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Sophia",
      role: "Technology",
      quote: "Innovating for the future of mobility.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Marcus",
      role: "Customer Experience",
      quote: "Shaping every experience remarkable.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const [activePerson, setActivePerson] = useState(0);

  const handleNext = () => {
    setActivePerson((prev) => (prev + 1) % people.length);
  };

  return (
    <section id="careers" className="py-24 bg-[#7A0A19] text-white relative overflow-hidden">
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
            <div className="text-xs font-bold uppercase tracking-widest text-red-200">
              PEOPLE. PURPOSE. POSSIBILITIES.
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Our People <br />
              Drive Us Forward
            </h2>

            <p className="text-base text-red-100/90 leading-relaxed font-normal">
              Real people. Real stories. Real impact. Join a team that moves the world.
            </p>

            <div>
              <motion.div whileHover={{ x: 6 }} className="inline-block">
                <Link
                  href="#careers"
                  className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-white border border-white/40 hover:border-white hover:bg-white/10 px-6 py-3 rounded-full transition-all"
                >
                  <span>EXPLORE CAREERS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column 4 Portrait Cards Grid */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {people.map((person, idx) => (
                <motion.div
                  key={person.name}
                  onClick={() => setActivePerson(idx)}
                  className={`group relative h-96 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                    activePerson === idx
                      ? "border-white ring-2 ring-white/30 shadow-2xl scale-[1.02]"
                      : "border-white/20 opacity-85 hover:opacity-100"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Image
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Bottom Text Content overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white space-y-1">
                    <div className="text-base font-extrabold">
                      {person.name}, <span className="font-normal opacity-90">{person.role}</span>
                    </div>
                    <p className="text-xs italic opacity-85 leading-snug">
                      &ldquo;{person.quote}&rdquo;
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Next Chevron Nav button */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-100 transition-colors hidden sm:flex"
              aria-label="Next Team Member"
            >
              <ChevronRight className="w-5 h-5 text-slate-900" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
