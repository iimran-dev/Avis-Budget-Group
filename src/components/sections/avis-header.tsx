"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Search, Menu, X, ChevronDown } from "lucide-react";

export function AvisHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [regionModalOpen, setRegionModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Global");

  const regions = [
    "Global",
    "North America (US & Canada)",
    "Europe, Middle East & Africa",
    "Latin America & Caribbean",
    "Asia Pacific & Australasia",
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0E14] text-white border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo: Avis Budget Group */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="flex items-center text-2xl font-black tracking-tight uppercase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-[#D4001A] font-extrabold tracking-normal">avis</span>
              <span className="text-[#FF6600] font-extrabold tracking-normal ml-0.5">budget</span>
              <span className="text-white font-light lowercase text-xl ml-1.5 opacity-90">group</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium tracking-wide text-slate-200">
            {[
              { name: "Global Scale", href: "#global-scale" },
              { name: "Our Journey", href: "#timeline" },
              { name: "Ecosystem", href: "#ecosystem" },
              { name: "Sustainability", href: "#sustainability" },
              { name: "Innovation", href: "#innovation" },
              { name: "Careers", href: "#careers" },
              { name: "Investors & News", href: "#investors" },
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={item.href}
                  className="hover:text-[#D4001A] transition-colors py-2 whitespace-nowrap relative group"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4001A] group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Action Icons: Global Region Dropdown & Search */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Global Region Button */}
            <div className="relative">
              <button
                onClick={() => setRegionModalOpen(!regionModalOpen)}
                className="flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
              >
                <Globe className="w-4 h-4 text-[#D4001A]" />
                <span>{selectedRegion}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${regionModalOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Region Selector Modal Dropdown */}
              <AnimatePresence>
                {regionModalOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-64 bg-[#141822] border border-white/15 rounded-xl shadow-2xl py-2 z-50"
                  >
                    <div className="px-4 py-2 text-xs font-bold uppercase text-slate-400 border-b border-white/10">
                      Select Region
                    </div>
                    {regions.map((reg) => (
                      <button
                        key={reg}
                        onClick={() => {
                          setSelectedRegion(reg);
                          setRegionModalOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between ${
                          selectedRegion === reg
                            ? "bg-[#D4001A]/20 text-[#D4001A] font-semibold"
                            : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span>{reg}</span>
                        {selectedRegion === reg && <span className="w-1.5 h-1.5 rounded-full bg-[#D4001A]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-slate-300 p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 p-2 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Global Search Bar Dropdown Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-[#141822] border-t border-white/10 px-4 py-4 shadow-xl overflow-hidden"
          >
            <div className="max-w-4xl mx-auto flex items-center space-x-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search Avis Budget Group press releases, investor info, locations..."
                className="w-full bg-transparent border-none text-white focus:outline-none text-sm placeholder:text-slate-500"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0B0E14] border-t border-white/10 px-6 py-6 space-y-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 text-base font-medium">
              {[
                { name: "Global Scale", href: "#global-scale" },
                { name: "Our Journey", href: "#timeline" },
                { name: "Ecosystem", href: "#ecosystem" },
                { name: "Sustainability", href: "#sustainability" },
                { name: "Innovation", href: "#innovation" },
                { name: "Careers", href: "#careers" },
                { name: "Investors & News", href: "#investors" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-200 hover:text-[#D4001A] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
                <Globe className="w-4 h-4 text-[#D4001A]" />
                <span>Region: {selectedRegion}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
