"use client";

import React, { useState } from "react";
import { GoldMotif } from "./GoldMotifs";
import { Sparkles, ArrowRight, ShieldCheck, Gem, Compass } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreSignature: () => void;
}

export function HeroSection({
  onOpenBooking,
  onExploreSignature,
}: HeroSectionProps) {
  const [selectedFinish, setSelectedFinish] = useState<"yellow" | "rose" | "white">("yellow");
  const [activeTab, setActiveTab] = useState<"split-loop" | "soft-triangle" | "double-flow">("split-loop");

  return (
    <section className="relative min-h-screen bg-[#0D2218] text-[#FAF7F2] pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden border-b border-[#C9A86A]/20">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A86A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#163326] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 my-auto">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
          {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C9A86A]/30 bg-[#163326]/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-ping" />
            <span className="text-[10px] tracking-[0.35em] text-[#EBD49B] uppercase font-sans font-medium">
              MAISON DE HAUTE JOAILLERIE · 2026
            </span>
          </div> */}

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-light leading-[1.08] tracking-tight text-[#FAF7F2]">
              The shape of a woman, <br />
              <span className="italic font-normal text-gold-gradient">
                rendered in gold.
              </span>
            </h1>
          </div>

          <p className="max-w-xl text-base sm:text-lg font-sans font-light text-[#FAF7F2]/80 leading-relaxed tracking-wide">
            Adornment as a visual language. We move beyond literal symbols into
            pure sculptural form — 18k solid recycled gold, cast to order with
            quiet architectural presence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={onExploreSignature}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:shadow-[0_0_30px_rgba(201,168,106,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore The Signature</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#C9A86A]/40 hover:border-[#C9A86A] hover:bg-[#C9A86A]/10 text-xs font-sans font-medium tracking-[0.25em] uppercase text-[#FAF7F2] transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Book Private Consultation</span>
            </button>
          </div>

          {/* Form Switcher Quick Pill */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-[#C9A86A]/15 w-full">
            <span className="text-[11px] font-sans tracking-widest text-[#FAF7F2]/60 uppercase">
              Interactive Silhouette Preview:
            </span>
            <div className="flex gap-2">
              {(
                [
                  { id: "split-loop", label: "01 Split Loop" },
                  { id: "soft-triangle", label: "02 Soft Triangle" },
                  { id: "double-flow", label: "03 Double Flow" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1 text-[11px] font-sans tracking-wider rounded-md transition-all ${
                    activeTab === tab.id
                      ? "bg-[#C9A86A] text-[#0D2218] font-semibold"
                      : "text-[#FAF7F2]/70 hover:text-[#FAF7F2] hover:bg-[#163326]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Interactive Sculpture Visualizer */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-[#143023]/60 via-[#0D2218]/90 to-[#081710] border border-[#C9A86A]/30 backdrop-blur-xl shadow-2xl group">
            {/* Ambient Corner Accents */}
            <div className="absolute top-4 left-4 text-[9px] font-sans tracking-[0.3em] text-[#C9A86A]/70 uppercase">
              FIG. {activeTab === "split-loop" ? "01" : activeTab === "soft-triangle" ? "02" : "03"}
            </div>
            <div className="absolute top-4 right-4 text-[9px] font-sans tracking-[0.3em] text-[#C9A86A]/70 uppercase">
              18K SOLID GOLD
            </div>

            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-10 rounded-full border border-[#C9A86A]/10 animate-pulse-gold pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-dashed border-[#C9A86A]/15 pointer-events-none" />

            {/* Main Interactive Motif */}
            <div className="animate-float-slow transition-transform duration-500">
              <GoldMotif
                type={activeTab}
                finish={selectedFinish}
                size={260}
                interactive={true}
              />
            </div>

            {/* Finish Selector Floating Badge */}
            <div className="absolute bottom-4 inset-x-6 flex items-center justify-between px-4 py-2 rounded-full bg-[#081710]/85 border border-[#C9A86A]/30 backdrop-blur-md">
              <span className="text-[10px] tracking-widest text-[#FAF7F2]/60 font-sans uppercase">
                Alloy:
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSelectedFinish("yellow")}
                  className={`flex items-center gap-1 text-[10px] font-sans tracking-wider uppercase transition-colors ${
                    selectedFinish === "yellow"
                      ? "text-[#EBD49B] font-bold"
                      : "text-[#FAF7F2]/50 hover:text-[#FAF7F2]"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C9A86A] border border-white/40 inline-block" />
                  Yellow
                </button>
                <button
                  onClick={() => setSelectedFinish("rose")}
                  className={`flex items-center gap-1 text-[10px] font-sans tracking-wider uppercase transition-colors ${
                    selectedFinish === "rose"
                      ? "text-[#EAA896] font-bold"
                      : "text-[#FAF7F2]/50 hover:text-[#FAF7F2]"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C98270] border border-white/40 inline-block" />
                  Rose
                </button>
                <button
                  onClick={() => setSelectedFinish("white")}
                  className={`flex items-center gap-1 text-[10px] font-sans tracking-wider uppercase transition-colors ${
                    selectedFinish === "white"
                      ? "text-white font-bold"
                      : "text-[#FAF7F2]/50 hover:text-[#FAF7F2]"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BDC3C7] border border-white/40 inline-block" />
                  White
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hallmark Pillars Bar */}
      <div className="max-w-7xl mx-auto w-full pt-12 mt-8 border-t border-[#C9A86A]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center z-10">
        <div className="flex flex-col items-center justify-center space-y-1">
          <ShieldCheck className="w-4 h-4 text-[#C9A86A] mb-1" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#FAF7F2] uppercase">
            18k Solid Gold
          </span>
          <span className="text-[10px] font-sans text-[#FAF7F2]/60 tracking-wider">
            100% Recycled & Hallmarked
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Compass className="w-4 h-4 text-[#C9A86A] mb-1" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#FAF7F2] uppercase">
            Dual Atelier
          </span>
          <span className="text-[10px] font-sans text-[#FAF7F2]/60 tracking-wider">
            Lagos & London Masters
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Gem className="w-4 h-4 text-[#C9A86A] mb-1" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#FAF7F2] uppercase">
            Made To Order
          </span>
          <span className="text-[10px] font-sans text-[#FAF7F2]/60 tracking-wider">
            Zero Waste Craftsmanship
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <Sparkles className="w-4 h-4 text-[#C9A86A] mb-1" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#FAF7F2] uppercase">
            Bespoke Salon
          </span>
          <span className="text-[10px] font-sans text-[#FAF7F2]/60 tracking-wider">
            Private Commissions
          </span>
        </div>
      </div>
    </section>
  );
}
