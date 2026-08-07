"use client";

import React, { useState } from "react";
import { SIGNATURE_SILHOUETTES } from "../data/riitanData";
import { GoldMotif } from "./GoldMotifs";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";

interface SignatureSectionProps {
  onSelectForm: (formKey: string) => void;
}

type FinishOption = "yellow" | "rose" | "white";

export function SignatureSection({ onSelectForm }: SignatureSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>("yellow");

  return (
    <section id="signature" className="py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F5EFE6] text-[#0D2218] relative overflow-hidden">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0D2218]/15 pb-6 sm:pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-[#8E6D30]/30 bg-[#8E6D30]/10 text-[9.5px] sm:text-[10px] font-sans font-semibold tracking-[0.26em] sm:tracking-[0.3em] text-[#8E6D30] uppercase">
              <Sparkles className="w-3 h-3" />
              <span>CHAPTER I · THE CORE FORMS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#0D2218] tracking-tight">
              Three silhouettes, <span className="italic font-normal">infinitely worn.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 max-w-md">
            <p className="text-xs sm:text-sm md:text-base font-sans font-light text-[#0D2218]/75 leading-relaxed md:text-right">
              We move away from literal symbols toward abstract, scalable geometry —
              a visual language cast in 18k solid gold that reads across earrings, cuffs, rings, and torcs.
            </p>
            
            {/* Global Alloy Switcher for the Section */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#FAF7F2] border border-[#0D2218]/15 shadow-sm max-w-full">
              <span className="text-[8.5px] sm:text-[9px] font-sans font-semibold tracking-widest text-[#0D2218]/60 uppercase px-2 whitespace-nowrap">
                Preview Alloy:
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSelectedFinish("yellow")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[9.5px] sm:text-[10px] font-sans tracking-wider uppercase transition-all ${
                    selectedFinish === "yellow"
                      ? "bg-[#0D2218] text-[#FAF7F2] font-medium shadow"
                      : "text-[#0D2218]/60 hover:text-[#0D2218]"
                  }`}
                >
                  Yellow Gold
                </button>
                <button
                  onClick={() => setSelectedFinish("rose")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[9.5px] sm:text-[10px] font-sans tracking-wider uppercase transition-all ${
                    selectedFinish === "rose"
                      ? "bg-[#0D2218] text-[#FAF7F2] font-medium shadow"
                      : "text-[#0D2218]/60 hover:text-[#0D2218]"
                  }`}
                >
                  Rose Gold
                </button>
                <button
                  onClick={() => setSelectedFinish("white")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[9.5px] sm:text-[10px] font-sans tracking-wider uppercase transition-all ${
                    selectedFinish === "white"
                      ? "bg-[#0D2218] text-[#FAF7F2] font-medium shadow"
                      : "text-[#0D2218]/60 hover:text-[#0D2218]"
                  }`}
                >
                  White Gold
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Iconic Silhouette Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {SIGNATURE_SILHOUETTES.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={item.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelectForm(item.formKey)}
              className="group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FAF7F2] border border-[#0D2218]/10 hover:border-[#8E6D30] transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden"
            >
              {/* Subtle dynamic background glow on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A86A]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Card Top Metadata */}
              <div className="flex items-center justify-between border-b border-[#0D2218]/10 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl text-[#8E6D30] font-light">
                    {item.number}
                  </span>
                  <span className="text-[9.5px] sm:text-[10px] font-sans font-semibold tracking-[0.25em] text-[#0D2218]/60 uppercase">
                    {item.tag}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[8.5px] sm:text-[9px] font-sans tracking-[0.2em] text-[#8E6D30] uppercase font-medium">
                  <Award className="w-3 h-3 text-[#8E6D30]" />
                  <span>AU 750</span>
                </div>
              </div>

              {/* Center Motif Display */}
              <div className="my-6 sm:my-8 flex flex-col items-center justify-center min-h-[190px] sm:min-h-[240px] relative z-10">
                <GoldMotif
                  type={item.formKey}
                  finish={selectedFinish}
                  size={190}
                  interactive={true}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="space-y-3.5 sm:space-y-4 pt-4 border-t border-[#0D2218]/10 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#0D2218] group-hover:text-[#8E6D30] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[9.5px] sm:text-[10px] font-sans tracking-[0.2em] text-[#0D2218]/60 uppercase font-mono mt-0.5 block">
                      {item.scale}
                    </span>
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0D2218]/20 flex items-center justify-center group-hover:bg-[#0D2218] group-hover:text-[#FAF7F2] transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-sans font-light text-[#0D2218]/80 leading-relaxed">
                  {item.description}
                </p>

                {/* Technical Casting Bar */}
                <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-sans tracking-wider border-t border-[#0D2218]/5">
                  <span className="italic font-serif text-xs text-[#0D2218]/70 truncate max-w-[55%]">
                    &ldquo;{item.philosophy}&rdquo;
                  </span>
                  <span className="text-[9.5px] sm:text-[10px] font-sans font-semibold tracking-widest text-[#8E6D30] uppercase whitespace-nowrap">
                    Explore Collection →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
