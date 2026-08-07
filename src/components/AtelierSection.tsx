"use client";

import React from "react";
import { ATELIER_PILLARS } from "../data/riitanData";
import { Flame, Layers, Sparkles, Award } from "lucide-react";

export function AtelierSection() {
  const steps = [
    {
      num: "01",
      icon: Layers,
      title: "Wax Sculpture",
      desc: "Each silhouette begins as a block of organic wax, carved by hand to achieve gentle ergonomic curvature.",
    },
    {
      num: "02",
      icon: Flame,
      title: "Lost-Wax Burnout",
      desc: "An ancient technique practiced across Yoruba royal courts for centuries, creating a hollow negative mold.",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "18k Solid Gold Cast",
      desc: "Molten 750‰ solid recycled gold is centrifugally cast into the mold, solidifying in seconds.",
    },
    {
      num: "04",
      icon: Award,
      title: "Hand Luster & Hallmark",
      desc: "Over 14 hours of hand-filing, satin texturing, mirror buffing, and official assay hallmarking.",
    },
  ];

  return (
    <section
      id="atelier"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F5EFE6] text-[#0D2218] relative border-b border-[#0D2218]/15"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0D2218]/15 pb-6 sm:pb-8">
          <div className="space-y-3">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] sm:tracking-[0.35em] text-[#8E6D30] uppercase">
              THE ATELIER · CRAFTSMANSHIP & ETHICS
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#0D2218] tracking-tight">
              Molten heritage, <span className="italic font-normal">sculpted for eternity.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base font-sans font-light text-[#0D2218]/75 leading-relaxed">
            Every curve is shaped in our dual ateliers in Lagos and London, uniting lost-wax ancestral metallurgy with timeless fine jewelry engineering.
          </p>
        </div>

        {/* 4 Atelier Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {ATELIER_PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#0D2218]/10 hover:border-[#8E6D30] transition-all duration-300 hover:shadow-xl space-y-3 sm:space-y-4"
            >
              <div className="text-2xl sm:text-4xl font-serif font-light text-[#8E6D30]">
                {pillar.stat}
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#0D2218] font-normal">
                {pillar.label}
              </h3>
              <p className="text-xs font-sans font-light text-[#0D2218]/70 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The 4-Stage Casting Journey */}
        <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#0D2218] text-[#FAF7F2] border border-[#C9A86A]/30 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A86A]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-8 sm:space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C9A86A]/20 pb-4 sm:pb-6">
              <div>
                <span className="text-[9.5px] sm:text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase">
                  THE PROCESS
                </span>
                <h3 className="text-xl sm:text-3xl font-serif text-[#FAF7F2] mt-1">
                  The Lost-Wax Transformation
                </h3>
              </div>
              <span className="text-xs font-sans text-[#FAF7F2]/60 tracking-wider">
                100% Handcrafted · Zero Mass Production
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((s) => {
                const IconComponent = s.icon;
                return (
                  <div key={s.num} className="space-y-2.5 sm:space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif text-[#C9A86A]">
                        STAGE {s.num}
                      </span>
                      <IconComponent className="w-4 h-4 text-[#C9A86A]/70" />
                    </div>
                    <h4 className="text-base sm:text-lg font-serif text-[#FAF7F2]">
                      {s.title}
                    </h4>
                    <p className="text-xs font-sans font-light text-[#FAF7F2]/70 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
