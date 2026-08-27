"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export function AvisFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0E14] text-white border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <div className="flex items-center text-xl font-black uppercase tracking-tight">
              <span className="text-[#D4001A] font-extrabold">avis</span>
              <span className="text-[#FF6600] font-extrabold ml-0.5">budget</span>
              <span className="text-white font-light lowercase text-lg ml-1 opacity-90">group</span>
            </div>
          </Link>

          {/* Legal Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </nav>

          {/* Copyright & Scroll Top */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="text-xs text-slate-500 font-normal">
              © 2026 Avis Budget Group, Inc. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
