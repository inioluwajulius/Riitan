"use client";

import React, { useState, useRef } from "react";
import { GoldMotif } from "./GoldMotifs";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Eye,
  ChevronDown,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreSignature: () => void;
}

type HeroViewMode = "editorial" | "sculpture";

export function HeroSection({
  onOpenBooking,
  onExploreSignature,
}: HeroSectionProps) {
  const [viewMode, setViewMode] = useState<HeroViewMode>("editorial");
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax Tilt & Specular Light Coordinates for Desktop Card
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glint, setGlint] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;

    const glintX = (x / rect.width) * 100;
    const glintY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlint({ x: glintX, y: glintY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlint({ x: 50, y: 50 });
    setIsHovered(false);
  };

  return (
    <section className="relative min-h-screen bg-[#0D2218] text-[#FAF7F2] pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between overflow-hidden border-b border-[#C9A86A]/20">
      {/* ========================================================================= */}
      {/* 1. MOBILE-ONLY BLENDED BACKGROUND LAYER (< lg) */}
      {/* ========================================================================= */}
      <div className="lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mode 1: Editorial Muse Blended Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            viewMode === "editorial" ? "opacity-35 sm:opacity-45" : "opacity-0"
          }`}
        >
          <img
            src="/riitan-muse-hero.jpg"
            alt="RÍÌTÀN Muse Atmosphere"
            className="w-full h-full object-cover object-top filter brightness-90 contrast-110"
          />
          {/* Multi-layered luxury gradient mask for maximum text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2218] via-[#0D2218]/80 to-[#0D2218]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D2218]/90 via-transparent to-[#0D2218]" />
        </div>

        {/* Mode 2: Pure Golden Sculpture Ambient Motif Background */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            viewMode === "sculpture" ? "opacity-25 sm:opacity-35" : "opacity-0"
          }`}
        >
          <div className="scale-125 sm:scale-150 transform opacity-60">
            <GoldMotif
              type="master-emblem"
              finish="yellow"
              size={340}
              interactive={false}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2218] via-[#0D2218]/85 to-[#0D2218]/70" />
        </div>

        {/* Warm golden ambient spotlight in center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#C9A86A]/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Ambient background glows for Desktop */}
      <div className="hidden lg:block absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A86A]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="hidden lg:block absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#163326] rounded-full blur-[140px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 2. MAIN HERO CONTENT CONTAINER */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center z-10 my-auto">
        {/* Left Column: Narrative, Mode Switcher & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
          {/* Top Eyebrow Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#C9A86A]/40 bg-[#163326]/90 backdrop-blur-md shadow-[0_0_20px_rgba(201,168,106,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-ping flex-shrink-0" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.24em] sm:tracking-[0.3em] text-[#EBD49B] uppercase font-sans font-medium">
              MAISON DE HAUTE JOAILLERIE · LAGOS & LONDON
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light leading-[1.12] sm:leading-[1.08] tracking-tight text-[#FAF7F2]">
              The shape of a woman, <br />
              <span className="italic font-normal text-gold-gradient">
                rendered in gold.
              </span>
            </h1>
          </div>

          {/* Editorial Descriptor */}
          <p className="max-w-xl text-sm sm:text-base md:text-lg font-sans font-light text-[#FAF7F2]/85 leading-relaxed tracking-wide">
            Adornment as a visual language. We move beyond literal symbols into
            pure sculptural form — 18k solid recycled gold, cast to order with
            quiet architectural presence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={onExploreSignature}
              className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.22em] sm:tracking-[0.25em] uppercase hover:shadow-[0_0_30px_rgba(201,168,106,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore The Signature</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#C9A86A]/40 hover:border-[#C9A86A] hover:bg-[#C9A86A]/10 text-xs font-sans font-medium tracking-[0.22em] sm:tracking-[0.25em] uppercase text-[#FAF7F2] transition-all duration-300 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Book Private Consultation</span>
            </button>
          </div>

          {/* Atelier Hallmark Pedigree Line */}
          <div className="pt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans text-[#FAF7F2]/70 border-t border-[#C9A86A]/20 w-full max-w-xl">
            <div className="flex items-center gap-1.5 text-[#EBD49B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86A] flex-shrink-0" />
              <span className="tracking-wider uppercase text-[10px] font-mono font-medium whitespace-nowrap">
                Assay Certified AU750
              </span>
            </div>
            <span className="text-[#C9A86A]/40 hidden xs:inline">·</span>
            <span className="tracking-wide text-[10.5px] sm:text-[11px] whitespace-nowrap">
              Numbered Castings 1–50
            </span>
            <span className="text-[#C9A86A]/40 hidden xs:inline">·</span>
            <span className="tracking-wide text-[10.5px] sm:text-[11px] whitespace-nowrap">
              Goldsmiths&apos; Hall, London
            </span>
          </div>
        </div>

        {/* Right Column: Desktop 3D Interactive Parallax Showcase (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center w-full">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
                isHovered ? 1.02 : 1
              }, ${isHovered ? 1.02 : 1}, 1)`,
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            className="relative w-full max-w-[420px] xl:max-w-[460px] aspect-[4/5] rounded-[32px] overflow-hidden border border-[#C9A86A]/35 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl group cursor-pointer"
          >
            {/* View Mode 1: Editorial Muse on Skin */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                viewMode === "editorial"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <img
                src="/riitan-muse-hero.jpg"
                alt="RÍÌTÀN Editorial Muse — Sculptural 18k Solid Gold"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2218]/90 via-[#0D2218]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D2218]/30 via-transparent to-[#0D2218]/30" />
            </div>

            {/* View Mode 2: Pure 18k Golden Sculpture Floating in Space */}
            <div
              className={`absolute inset-0 bg-gradient-to-b from-[#143023]/95 via-[#0D2218]/98 to-[#081710] flex flex-col items-center justify-center p-8 transition-opacity duration-700 ease-in-out ${
                viewMode === "sculpture"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="absolute inset-10 rounded-full border border-[#C9A86A]/10 animate-pulse-gold pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-dashed border-[#C9A86A]/15 pointer-events-none" />

              <div className="relative z-10 animate-float-slow">
                <GoldMotif
                  type="master-emblem"
                  finish="yellow"
                  size={230}
                  interactive={true}
                />
              </div>
            </div>

            {/* Specular Light Reflection Overlay */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 280px at ${glint.x}% ${glint.y}%, rgba(255, 241, 197, 0.25) 0%, rgba(201, 168, 106, 0.08) 40%, transparent 80%)`,
                opacity: isHovered ? 1 : 0.4,
              }}
            />

            {/* Top Luxury Hallmark Badge */}
            <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2218]/85 backdrop-blur-md border border-[#C9A86A]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#EBD49B] uppercase font-semibold">
                  18K SOLID GOLD
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#0D2218]/85 backdrop-blur-md border border-[#C9A86A]/30 text-[9px] font-sans tracking-[0.2em] text-[#FAF7F2]/80 uppercase">
                {viewMode === "editorial" ? "MUSE ON SKIN" : "PURE SCULPTURE"}
              </div>
            </div>

            {/* Bottom Subtle View Toggle Switcher */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between gap-2">
              <div className="text-left">
                <p className="text-xs font-serif text-[#FAF7F2] font-light">
                  {viewMode === "editorial"
                    ? "The Sculpture in Presence"
                    : "The Core Geometry"}
                </p>
                <p className="text-[9px] font-sans tracking-widest text-[#C9A86A] uppercase">
                  Cast by hand to order
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setViewMode(
                    viewMode === "editorial" ? "sculpture" : "editorial"
                  );
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#081710]/90 hover:bg-[#163326] border border-[#C9A86A]/40 text-[10px] font-sans tracking-wider text-[#FAF7F2] uppercase backdrop-blur-md transition-all shadow-lg hover:border-[#C9A86A]"
              >
                <Eye className="w-3 h-3 text-[#C9A86A]" />
                <span>
                  Switch to {viewMode === "editorial" ? "Sculpture" : "Muse"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. REFINED LUXURY SCROLL INVITATION & SLIM ASSURANCE BAR */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF7F2]/60 z-10">
        <div className="flex items-center gap-6 text-[10.5px] tracking-wider uppercase text-[#FAF7F2]/60">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
            100% Recycled 18k Gold
          </span>
          <span className="hidden md:inline text-[#C9A86A]/30">|</span>
          <span className="hidden md:inline">Dual Atelier: Lagos & London</span>
          <span className="hidden md:inline text-[#C9A86A]/30">|</span>
          <span className="hidden md:inline">Zero-Waste Hand Cast</span>
        </div>

        <button
          onClick={onExploreSignature}
          className="group inline-flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#C9A86A] uppercase hover:text-[#EBD49B] transition-colors"
        >
          <span>Scroll to Discover</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#C9A86A]" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 4. OPTION 1: MOBILE-ONLY FLOATING THUMB DOCK */}
      {/* ========================================================================= */}
      <div className="lg:hidden absolute bottom-4 right-4 z-30">
        <div className="flex items-center p-1 rounded-full bg-[#081710]/95 border border-[#C9A86A]/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.85)] ring-1 ring-[#C9A86A]/30">
          <button
            type="button"
            onClick={() => setViewMode("editorial")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[9.5px] font-sans tracking-wider uppercase transition-all duration-300 ${
              viewMode === "editorial"
                ? "bg-[#C9A86A] text-[#0D2218] font-bold shadow-md"
                : "text-[#FAF7F2]/70 hover:text-[#FAF7F2]"
            }`}
          >
            <span>✦ Muse</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("sculpture")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[9.5px] font-sans tracking-wider uppercase transition-all duration-300 ${
              viewMode === "sculpture"
                ? "bg-[#C9A86A] text-[#0D2218] font-bold shadow-md"
                : "text-[#FAF7F2]/70 hover:text-[#FAF7F2]"
            }`}
          >
            <span>✦ Sculpture</span>
          </button>
        </div>
      </div>
    </section>
  );
}
