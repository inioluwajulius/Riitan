"use client";

import React, { useState } from "react";
import { LOOKBOOK_EDITORIAL, LookbookItem } from "../data/riitanData";
import { Maximize2, X, Sparkles, MapPin } from "lucide-react";

interface LookbookSectionProps {
  onOpenBooking: () => void;
}

export function LookbookSection({ onOpenBooking }: LookbookSectionProps) {
  const [activeItem, setActiveItem] = useState<LookbookItem | null>(null);

  return (
    <section id="lookbook" className="py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#0D2218] text-[#FAF7F2] relative border-b border-[#C9A86A]/20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#C9A86A]/20 pb-6 sm:pb-8">
          <div className="space-y-3">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] sm:tracking-[0.35em] text-[#C9A86A] uppercase">
              THE LOOKBOOK · EDITORIAL ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#FAF7F2] tracking-tight">
              An experience, <span className="italic font-normal text-gold-gradient">not a catalogue.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base font-sans font-light text-[#FAF7F2]/75 leading-relaxed">
            Visual storytelling over product listing — texture, movement and emotion. Light on melanin, gold against stone, the quiet breath before motion.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LOOKBOOK_EDITORIAL.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-[#C9A86A]/20 bg-[#081710] transition-all duration-700 hover:border-[#C9A86A] hover:shadow-2xl ${
                index === 0 || index === 4 ? "md:row-span-2" : ""
              }`}
            >
              {/* Photo Container */}
              <div className="relative w-full h-80 md:h-full min-h-[340px] sm:min-h-[380px] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.9] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081710] via-[#081710]/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                {/* Top Location Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#081710]/70 backdrop-blur-md border border-[#C9A86A]/30 text-[9.5px] sm:text-[10px] font-sans tracking-widest text-[#EBD49B] uppercase">
                  <MapPin className="w-3 h-3 text-[#C9A86A]" />
                  <span>{item.location}</span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#081710]/70 backdrop-blur-md border border-[#C9A86A]/30 flex items-center justify-center text-[#FAF7F2] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Story Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#FAF7F2] group-hover:text-[#EBD49B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-sans font-light text-[#FAF7F2]/75 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.styledPieces.map((piece) => (
                      <span
                        key={piece}
                        className="px-2.5 py-0.5 rounded-md bg-[#C9A86A]/15 border border-[#C9A86A]/30 text-[9.5px] sm:text-[10px] font-sans tracking-wider text-[#EBD49B]"
                      >
                        {piece}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#081710]/95 backdrop-blur-2xl overflow-y-auto">
          <div className="relative w-full max-w-4xl rounded-3xl bg-[#0D2218] border border-[#C9A86A]/40 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 my-auto max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#081710]/80 text-[#FAF7F2] hover:text-[#C9A86A] border border-[#C9A86A]/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="md:col-span-7 h-64 sm:h-80 md:h-[520px] relative">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Lightbox Details */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest text-[#C9A86A] uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeItem.location}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2]">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans font-light text-[#FAF7F2]/80 leading-relaxed">
                  {activeItem.caption}
                </p>

                <div className="pt-3 sm:pt-4 border-t border-[#C9A86A]/20">
                  <span className="text-[10px] sm:text-[11px] font-sans tracking-widest text-[#FAF7F2]/50 uppercase block mb-2">
                    Styled In This Look:
                  </span>
                  <div className="flex flex-col space-y-1.5">
                    {activeItem.styledPieces.map((p) => (
                      <div
                        key={p}
                        className="text-xs font-sans font-medium text-[#EBD49B] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveItem(null);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.2em] uppercase hover:shadow-[0_0_20px_rgba(201,168,106,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0D2218]" />
                <span>Book Styling Session</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
