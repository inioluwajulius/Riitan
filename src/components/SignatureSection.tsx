"use client";

import React, { useState } from "react";
import { SIGNATURE_SILHOUETTES } from "../data/riitanData";
import { GoldMotif } from "./GoldMotifs";
import { ArrowUpRight } from "lucide-react";

interface SignatureSectionProps {
  onSelectForm: (formKey: string) => void;
}

export function SignatureSection({ onSelectForm }: SignatureSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="signature" className="py-28 px-6 md:px-12 bg-[#F5EFE6] text-[#0D2218] relative overflow-hidden">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0D2218]/15 pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.35em] text-[#8E6D30] uppercase">
              THE SIGNATURE SILHOUETTES
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-[#0D2218] tracking-tight">
              One silhouette, <span className="italic font-normal">infinitely worn.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-sans font-light text-[#0D2218]/75 leading-relaxed">
            We move away from literal symbols toward abstract, scalable forms —
            a visual language that reads instantly across an earring, a ring, a necklace.
          </p>
        </div>
      </div>

      {/* 3 Iconic Silhouette Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {SIGNATURE_SILHOUETTES.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={item.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelectForm(item.formKey)}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#0D2218]/10 hover:border-[#C9A86A] transition-all duration-500 hover:shadow-2xl cursor-pointer"
            >
              {/* Card Top Metadata */}
              <div className="flex items-center justify-between border-b border-[#0D2218]/10 pb-4">
                <span className="font-serif text-2xl text-[#8E6D30] font-light">
                  {item.number}
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#0D2218]/60 uppercase">
                  {item.tag}
                </span>
              </div>

              {/* Center Motif Display */}
              <div className="my-10 flex flex-col items-center justify-center min-h-[220px]">
                <GoldMotif
                  type={item.formKey}
                  finish="yellow"
                  size={190}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="space-y-4 pt-4 border-t border-[#0D2218]/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif font-normal text-[#0D2218] group-hover:text-[#8E6D30] transition-colors">
                    {item.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-[#0D2218]/20 flex items-center justify-center group-hover:bg-[#0D2218] group-hover:text-[#FAF7F2] transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-sans font-light text-[#0D2218]/75 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] font-sans tracking-wider text-[#8E6D30]">
                  <span className="italic font-serif text-xs text-[#0D2218]/60">
                    &ldquo;{item.philosophy}&rdquo;
                  </span>
                  <span className="uppercase text-[10px] font-medium tracking-[0.2em] text-[#0D2218]/70">
                    {item.scale}
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
