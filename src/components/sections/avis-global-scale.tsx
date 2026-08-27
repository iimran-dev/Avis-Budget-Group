"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Users, Car } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface CityMarker {
  name: string;
  coordinates: [number, number];
  locations: string;
  isHub?: boolean;
}

const markers: CityMarker[] = [
  { name: "New York", coordinates: [-74.006, 40.7128], locations: "420+ Locations", isHub: true },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], locations: "180+ Locations" },
  { name: "London", coordinates: [-0.1276, 51.5074], locations: "350+ Locations", isHub: true },
  { name: "Paris", coordinates: [2.3522, 48.8566], locations: "290+ Locations" },
  { name: "Frankfurt", coordinates: [8.6821, 50.1109], locations: "210+ Locations" },
  { name: "Dubai", coordinates: [55.2708, 25.2048], locations: "150+ Locations", isHub: true },
  { name: "Tokyo", coordinates: [139.6917, 35.6895], locations: "310+ Locations", isHub: true },
  { name: "Singapore", coordinates: [103.8198, 1.3521], locations: "95+ Locations" },
  { name: "Sydney", coordinates: [151.2093, -33.8688], locations: "240+ Locations" },
  { name: "São Paulo", coordinates: [-46.6333, -23.5505], locations: "160+ Locations" },
  { name: "Johannesburg", coordinates: [28.0473, -26.2041], locations: "110+ Locations" },
];

export function AvisGlobalScale() {
  const [hoveredCity, setHoveredCity] = useState<CityMarker | null>(null);

  return (
    <section id="global-scale" className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4001A]">
              GLOBAL SCALE. LOCAL PRESENCE.
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Mobility Solutions <br />
              That Move The World
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              From our global brands to our local teams, we are everywhere you need to be.
            </p>

            <div>
              <Link
                href="#our-brands"
                className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 border border-slate-300 hover:border-[#D4001A] hover:text-[#D4001A] px-6 py-3 rounded-full transition-all"
              >
                <span>EXPLORE OUR BRANDS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column Interactive React Simple Maps */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            <div className="relative w-full aspect-[16/9] max-w-2xl rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-[#F8FAFC]">
              
              {/* Tooltip Overlay */}
              {hoveredCity && (
                <div className="absolute top-4 left-4 z-20 bg-[#0B0E14] text-white px-3 py-2 rounded-xl shadow-xl border border-white/10 text-xs transition-opacity duration-200 pointer-events-none">
                  <div className="font-extrabold text-[#D4001A]">{hoveredCity.name}</div>
                  <div className="text-slate-300 text-[11px] font-medium">{hoveredCity.locations}</div>
                </div>
              )}

              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 110,
                  center: [15, 20],
                }}
                className="w-full h-full"
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E2E8F0"
                        stroke="#CBD5E1"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#CBD5E1", outline: "none" },
                          pressed: { fill: "#94A3B8", outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {markers.map((city) => (
                  <Marker
                    key={city.name}
                    coordinates={city.coordinates}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    {/* Outer Glow / Pulsing circle for hub locations */}
                    {city.isHub && (
                      <circle
                        r={8}
                        fill="#D4001A"
                        opacity={0.35}
                        className="animate-ping"
                      />
                    )}
                    
                    {/* Main Marker Dot */}
                    <circle
                      r={city.isHub ? 4.5 : 3.5}
                      fill={city.isHub ? "#D4001A" : "#0F172A"}
                      stroke="#FFFFFF"
                      strokeWidth={1.5}
                      className="cursor-pointer hover:scale-125 transition-transform"
                    />

                    <text
                      textAnchor="middle"
                      y={-8}
                      style={{
                        fontFamily: "system-ui",
                        fontSize: 8,
                        fontWeight: 700,
                        fill: "#1E293B",
                        pointerEvents: "none",
                      }}
                    >
                      {city.name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>

            </div>
          </div>

        </div>

        {/* Bottom Metric Strip on White Background */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-full bg-slate-100 text-[#D4001A]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">180+</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Countries</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-full bg-slate-100 text-[#D4001A]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">10,250+</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Rental Locations</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-full bg-slate-100 text-[#D4001A]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">24,500+</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Employees</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-full bg-slate-100 text-[#D4001A]">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">Millions</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Of Rentals Every Year</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

