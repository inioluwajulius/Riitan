"use client";

import React, { useState, useRef } from "react";
import { SIGNATURE_SILHOUETTES } from "../data/riitanData";
import { GoldMotif } from "./GoldMotifs";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * 0.25;
    const y = (clientY - centerY) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SignatureSectionProps {
  onSelectForm: (formKey: string) => void;
}

type FinishOption = "yellow" | "rose" | "white";

export function SignatureSection({ onSelectForm }: SignatureSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>("yellow");

  return (
    <section
      id="signature"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F5EFE6] text-[#0D2218] relative overflow-hidden"
    >
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-6 border-b border-[#0D2218]/15 pb-8">
          <div className="space-y-4 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8E6D30]/30 bg-[#8E6D30]/10 text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.25em] text-[#8E6D30] uppercase"
            >
              <Sparkles className="w-3 h-3" />
              <span>THE SIGNATURE COLLECTION · CORE FORMS</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#0D2218] tracking-tight leading-[1.1]"
            >
              Three silhouettes,<br className="hidden md:block" /> <span className="italic font-normal">infinitely worn.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col items-start gap-6 max-w-md pt-2 md:pt-0"
          >
            <p className="text-sm md:text-base font-sans font-light text-[#0D2218]/80 leading-relaxed">
              We move away from literal symbols toward abstract, scalable geometry —
              a visual language cast in 18k solid gold that reads across earrings, cuffs, rings, and torcs.
            </p>
            
            {/* Global Alloy Switcher with Visual Swatches */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#0D2218]/50 uppercase">
                Select Alloy Preview
              </span>
              <div className="flex flex-wrap items-center gap-1">
                {[
                  { id: "yellow", label: "Yellow Gold", gradient: "from-[#C9A86A] to-[#FFF1C5]" },
                  { id: "rose", label: "Rose Gold", gradient: "from-[#C98270] to-[#FFE3DA]" },
                  { id: "white", label: "White Gold", gradient: "from-[#BDC3C7] to-[#FFFFFF]" }
                ].map((alloy) => (
                  <button
                    key={alloy.id}
                    onClick={() => setSelectedFinish(alloy.id as FinishOption)}
                    className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                      selectedFinish === alloy.id
                        ? "bg-[#FAF7F2] shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-[#0D2218]/10"
                        : "hover:bg-[#0D2218]/5"
                    }`}
                  >
                    {/* Visual Swatch */}
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${alloy.gradient} shadow-inner border border-black/5 transition-transform duration-500 group-hover:scale-110`} />
                    <span className={`text-[9px] sm:text-[10px] font-sans tracking-[0.15em] uppercase transition-colors duration-300 ${
                      selectedFinish === alloy.id ? "text-[#0D2218] font-medium" : "text-[#0D2218]/60"
                    }`}>
                      {alloy.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3 Iconic Silhouette Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {SIGNATURE_SILHOUETTES.map((item, index) => (
          <ParallaxSignatureCard
            key={item.number}
            item={item}
            index={index}
            selectedFinish={selectedFinish}
            onSelectForm={onSelectForm}
            setHoveredIndex={setHoveredIndex}
            isBlurred={hoveredIndex !== null && hoveredIndex !== index}
          />
        ))}
      </div>
    </section>
  );
}

interface ParallaxSignatureCardProps {
  item: typeof SIGNATURE_SILHOUETTES[0];
  index: number;
  selectedFinish: FinishOption;
  onSelectForm: (formKey: string) => void;
  setHoveredIndex: (index: number | null) => void;
  isBlurred?: boolean;
}

function ParallaxSignatureCard({ item, index, selectedFinish, onSelectForm, setHoveredIndex, isBlurred }: ParallaxSignatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glint, setGlint] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 6; // Max 6 deg
    const rotateX = -((y - centerY) / centerY) * 6;

    const glintX = (x / rect.width) * 100;
    const glintY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlint({ x: glintX, y: glintY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlint({ x: 50, y: 50 });
    setIsHovered(false);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredIndex(index);
        }}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelectForm(item.formKey)}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
          transformStyle: "preserve-3d"
        }}
        className={`group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[32px] bg-[#FAF7F2] border border-[#0D2218]/10 hover:border-[#C9A86A]/40 cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_20px_60px_rgba(13,34,24,0.12)] transition-[filter,opacity] duration-500 ${isBlurred ? "blur-[3px] opacity-60 scale-95" : ""}`}
      >
      {/* Specular Light Reflection Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-50 mix-blend-overlay"
        style={{
          background: `radial-gradient(circle 350px at ${glint.x}% ${glint.y}%, rgba(255, 255, 255, 0.7) 0%, rgba(201, 168, 106, 0.1) 40%, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Subtle dynamic background glow on hover */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A86A]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div 
        style={{ 
          transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
          transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"
        }}
        className="flex flex-col h-full justify-between relative z-10"
      >
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
            lightSource={glint}
            className="transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Card Body */}
        <div className="space-y-4 pt-4 border-t border-[#0D2218]/10 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#0D2218] group-hover:text-[#8E6D30] transition-colors">
                {item.name}
              </h3>
              <span className="text-[9.5px] sm:text-[10px] font-sans tracking-[0.2em] text-[#0D2218]/60 uppercase font-mono mt-0.5 block">
                {item.scale}
              </span>
            </div>
            <MagneticButton>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0D2218]/20 flex items-center justify-center group-hover:bg-[#0D2218] group-hover:text-[#FAF7F2] transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </MagneticButton>
          </div>

          <p className="text-xs sm:text-sm font-sans font-light text-[#0D2218]/80 leading-relaxed">
            {item.description}
          </p>

          {/* Poetic Philosophy Note */}
          <p className="italic font-serif text-xs text-[#8E6D30]/90">
            &ldquo;{item.philosophy}&rdquo;
          </p>

          {/* Technical Casting Bar */}
          <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-sans tracking-wider border-t border-[#0D2218]/5">
            <span className="text-[9.5px] sm:text-[10px] font-sans text-[#0D2218]/50 uppercase tracking-widest">
              Numbered Editions 1–50
            </span>
            <MagneticButton>
              <span className="text-[9.5px] sm:text-[10px] font-sans font-semibold tracking-widest text-[#8E6D30] uppercase whitespace-nowrap inline-block p-2 -mr-2 cursor-pointer hover:text-[#0D2218] transition-colors">
                Explore Collection →
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
