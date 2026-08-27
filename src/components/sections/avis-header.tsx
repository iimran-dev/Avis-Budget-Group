"use client";

import React, { useState } from "react";
import Link from "next/link";
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
            <div className="flex items-center text-2xl font-black tracking-tight uppercase">
              <span className="text-[#D4001A] font-extrabold tracking-normal">avis</span>
              <span className="text-[#FF6600] font-extrabold tracking-normal ml-0.5">budget</span>
              <span className="text-white font-light lowercase text-xl ml-1.5 opacity-90">group</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-slate-200">
            <Link href="#who-we-are" className="hover:text-[#D4001A] transition-colors py-2">
              Who We Are
            </Link>
            <Link href="#our-brands" className="hover:text-[#D4001A] transition-colors py-2">
              Our Brands
            </Link>
            <Link href="#investors" className="hover:text-[#D4001A] transition-colors py-2">
              Investors
            </Link>
            <Link href="#sustainability" className="hover:text-[#D4001A] transition-colors py-2">
              Sustainability
            </Link>
            <Link href="#careers" className="hover:text-[#D4001A] transition-colors py-2">
              Careers
            </Link>
            <Link href="#newsroom" className="hover:text-[#D4001A] transition-colors py-2">
              Newsroom
            </Link>
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
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Region Selector Modal Dropdown */}
              {regionModalOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#141822] border border-white/15 rounded-xl shadow-2xl py-2 z-50">
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
                </div>
              )}
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
      {searchOpen && (
        <div className="bg-[#141822] border-t border-white/10 px-4 py-4 shadow-xl">
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
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0E14] border-t border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <Link
              href="#who-we-are"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4001A]"
            >
              Who We Are
            </Link>
            <Link
              href="#our-brands"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4001A]"
            >
              Our Brands
            </Link>
            <Link
              href="#investors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4001A]"
            >
              Investors
            </Link>
            <Link
              href="#sustainability"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4001A]"
            >
              Sustainability
            </Link>
            <Link
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4001A]"
            >
              Careers
            </Link>
            <Link
              href="#newsroom"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4001A]"
            >
              Newsroom
            </Link>
          </nav>
          
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
              <Globe className="w-4 h-4 text-[#D4001A]" />
              <span>Region: {selectedRegion}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
