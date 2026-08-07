"use client";

import React, { useState } from "react";
import { CurrencyCode, formatPrice } from "../data/riitanData";
import { GoldMotif } from "./GoldMotifs";
import { Check, Sparkles, Clock, Compass, Shield } from "lucide-react";

interface SpotlightSectionProps {
  currentCurrency: CurrencyCode;
  onEnquire: () => void;
}

export function SpotlightSection({
  currentCurrency,
  onEnquire,
}: SpotlightSectionProps) {
  const [finish, setFinish] = useState<"yellow" | "rose" | "white">("yellow");

  const finishes = [
    { id: "yellow", name: "18k Yellow Gold", desc: "Signature warm luster", color: "#C9A86A" },
    { id: "rose", name: "18k Warm Rose Gold", desc: "Gentle copper-blushed 750‰ alloy", color: "#C98270" },
    { id: "white", name: "18k Noble White Gold", desc: "Unplated natural champagne white", color: "#BDC3C7" },
  ] as const;

  return (
    <section className="py-28 px-6 md:px-12 bg-[#F5EFE6] text-[#0D2218] relative overflow-hidden border-b border-[#0D2218]/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Visualizer Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[480px] aspect-square rounded-3xl bg-[#0D2218] p-10 flex flex-col items-center justify-center shadow-2xl border border-[#C9A86A]/40 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#081710] via-[#0D2218] to-[#163326] opacity-90" />
            <div className="absolute top-6 left-6 text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase z-10">
              PIECE NO. 01 · FOUNDATIONAL FORM
            </div>
            <div className="absolute top-6 right-6 text-[10px] font-sans tracking-[0.3em] text-[#FAF7F2]/50 uppercase z-10">
              18K SOLID GOLD
            </div>

            {/* Central Animated Gold Motif */}
            <div className="z-10 animate-float-slow my-auto">
              <GoldMotif type="split-loop" finish={finish} size={280} interactive={true} />
            </div>

            {/* Bottom Finish Badges */}
            <div className="z-10 w-full pt-4 border-t border-[#C9A86A]/20 flex items-center justify-between text-[11px] font-sans text-[#FAF7F2]/70">
              <span>Selected Alloy:</span>
              <span className="text-[#EBD49B] font-medium uppercase tracking-wider">
                {finishes.find((f) => f.id === finish)?.name}
              </span>
            </div>
          </div>
        </div>

        {/* Right Product Spotlight Editorial Details */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.35em] text-[#8E6D30] uppercase">
              THE PIECE · NO. 01
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#0D2218] tracking-tight">
              The Split Loop <span className="italic font-normal">Earring</span>
            </h2>
            <p className="text-2xl font-serif text-[#8E6D30]">
              From {formatPrice(1480, currentCurrency)}
            </p>
          </div>

          <p className="text-sm sm:text-base font-sans font-light text-[#0D2218]/80 leading-relaxed">
            The form that began the house. An open loop that never closes — sculptural, weightless on the ear, and instantly RÍÌTÀN. Engineered with an invisible internal counterweight to sit with perfect architectural balance.
          </p>

          {/* Finish Option Selector */}
          <div className="space-y-3">
            <span className="text-xs font-sans tracking-widest text-[#0D2218]/60 uppercase font-semibold">
              Select Gold Alloy:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {finishes.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFinish(item.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    finish === item.id
                      ? "border-[#8E6D30] bg-[#FAF7F2] shadow-md ring-1 ring-[#8E6D30]"
                      : "border-[#0D2218]/15 bg-[#FAF7F2]/60 hover:border-[#0D2218]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block shadow-inner"
                      style={{ backgroundColor: item.color }}
                    />
                    {finish === item.id && (
                      <Check className="w-3.5 h-3.5 text-[#8E6D30]" />
                    )}
                  </div>
                  <div className="text-xs font-sans font-medium text-[#0D2218]">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-sans text-[#0D2218]/60 mt-0.5">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Specifications Matrix */}
          <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#0D2218]/15 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-[#0D2218]/50 uppercase tracking-widest text-[10px]">Composition</span>
              <div className="font-medium text-[#0D2218]">18k Recycled Solid Gold</div>
            </div>
            <div className="space-y-1">
              <span className="text-[#0D2218]/50 uppercase tracking-widest text-[10px]">Gold Weight</span>
              <div className="font-medium text-[#0D2218]">9.4g solid pair</div>
            </div>
            <div className="space-y-1">
              <span className="text-[#0D2218]/50 uppercase tracking-widest text-[10px]">Lead Time</span>
              <div className="font-medium text-[#0D2218]">Made to Order (3–4 weeks)</div>
            </div>
            <div className="space-y-1">
              <span className="text-[#0D2218]/50 uppercase tracking-widest text-[10px]">Atelier Origin</span>
              <div className="font-medium text-[#0D2218]">Lagos & London</div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onEnquire}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:shadow-[0_0_25px_rgba(201,168,106,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-[#0D2218]" />
              <span>Enquire to Commission</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
