"use client";

import React, { useState } from "react";
import {
  COLLECTION_CHAPTERS,
  PRODUCTS_LIST,
  ProductPiece,
  CurrencyCode,
  formatPrice,
} from "../data/riitanData";
import { GoldMotif } from "./GoldMotifs";
import { Eye, Sparkles, Filter } from "lucide-react";

interface CollectionsSectionProps {
  currentCurrency: CurrencyCode;
  onSelectPiece: (piece: ProductPiece) => void;
  onEnquirePiece: (piece: ProductPiece) => void;
}

export function CollectionsSection({
  currentCurrency,
  onSelectPiece,
  onEnquirePiece,
}: CollectionsSectionProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "earrings", label: "Earrings" },
    { id: "necklaces", label: "Necklaces & Collars" },
    { id: "cuffs", label: "Cuffs & Bangles" },
    { id: "rings", label: "Rings & Signets" },
    { id: "bespoke", label: "Bespoke" },
  ];

  const filteredPieces = PRODUCTS_LIST.filter((piece) => {
    const matchesChapter =
      selectedChapter === "all" || piece.chapterId === selectedChapter;
    const matchesCategory =
      selectedCategory === "all" || piece.category === selectedCategory;
    return matchesChapter && matchesCategory;
  });

  return (
    <section id="collections" className="py-28 px-6 md:px-12 bg-[#0D2218] text-[#FAF7F2] relative border-b border-[#C9A86A]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#C9A86A]/20 pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.35em] text-[#C9A86A] uppercase">
              THE COLLECTIONS · FOUR CHAPTERS · 2026
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-[#FAF7F2] tracking-tight">
              A cohesive <span className="italic font-normal text-gold-gradient">family of forms.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-sans font-light text-[#FAF7F2]/75 leading-relaxed">
            Every piece belongs to an overarching grammar of design. Wear them individually as a focal point or layered across chapters.
          </p>
        </div>

        {/* Chapter Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {COLLECTION_CHAPTERS.map((chapter) => {
            const isActive = selectedChapter === chapter.id;
            return (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(isActive ? "all" : chapter.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-[#163326] border-[#C9A86A] shadow-[0_0_20px_rgba(201,168,106,0.25)]"
                    : "bg-[#081710]/60 border-[#C9A86A]/20 hover:border-[#C9A86A]/50 hover:bg-[#143023]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-sans tracking-[0.25em] text-[#C9A86A] uppercase">
                    {chapter.roman}
                  </span>
                  <span className="text-[10px] font-sans text-[#FAF7F2]/50 tracking-wider">
                    {chapter.year}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-normal text-[#FAF7F2] mb-1">
                  {chapter.title}
                </h3>
                <p className="text-xs font-sans text-[#FAF7F2]/65 line-clamp-2">
                  {chapter.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#C9A86A]/15">
          <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-[#FAF7F2]/60 uppercase">
            <Filter className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span>Filter Category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gold-metallic text-[#0D2218] font-semibold shadow-md"
                    : "border border-[#C9A86A]/20 text-[#FAF7F2]/75 hover:border-[#C9A86A]/60 hover:text-[#FAF7F2]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#081710]/70 border border-[#C9A86A]/20 hover:border-[#C9A86A] transition-all duration-500 hover:shadow-2xl backdrop-blur-md"
            >
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#C9A86A]/15">
                <span className="text-[10px] font-sans tracking-[0.2em] text-[#C9A86A] uppercase">
                  {piece.chapterName}
                </span>
                <span className="text-[10px] font-sans tracking-wider text-[#FAF7F2]/60 uppercase">
                  {piece.specifications.material}
                </span>
              </div>

              {/* Center Motif Artwork */}
              <div
                onClick={() => onSelectPiece(piece)}
                className="my-8 flex items-center justify-center min-h-[200px] cursor-pointer"
              >
                <GoldMotif
                  type={piece.formType}
                  finish="yellow"
                  size={180}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Piece Information & Price */}
              <div className="space-y-4 pt-4 border-t border-[#C9A86A]/15">
                <div>
                  <h3
                    onClick={() => onSelectPiece(piece)}
                    className="text-xl sm:text-2xl font-serif text-[#FAF7F2] group-hover:text-[#EBD49B] transition-colors cursor-pointer"
                  >
                    {piece.name}
                  </h3>
                  <p className="text-xs font-sans text-[#FAF7F2]/60 line-clamp-1 mt-0.5">
                    {piece.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-lg sm:text-xl font-serif font-light text-[#EBD49B]">
                    {formatPrice(piece.priceUSD, currentCurrency)}
                  </span>
                  <span className="text-[10px] font-sans tracking-widest text-[#FAF7F2]/50 uppercase">
                    {piece.specifications.leadTime}
                  </span>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onSelectPiece(piece)}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-[#C9A86A]/40 hover:border-[#C9A86A] text-xs font-sans tracking-wider text-[#FAF7F2] hover:bg-[#C9A86A]/10 transition-colors uppercase"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>Quick View</span>
                  </button>

                  <button
                    onClick={() => onEnquirePiece(piece)}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-wider hover:opacity-95 transition-opacity uppercase"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#0D2218]" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
