"use client";

import React, { useState } from "react";
import {
  PRODUCTS_LIST,
  COLLECTION_CHAPTERS,
  ProductPiece,
  CurrencyCode,
  formatPrice,
} from "../data/riitanData";
import { GoldMotif } from "./GoldMotifs";
import { ArrowUpRight, Filter } from "lucide-react";

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
    { id: "all", label: "All Creations" },
    { id: "earrings", label: "Earrings" },
    { id: "necklaces", label: "Necklaces & Torcs" },
    { id: "cuffs", label: "Cuffs & Bangles" },
    { id: "rings", label: "Sculptural Rings" },
  ];

  const filteredPieces = PRODUCTS_LIST.filter((piece) => {
    const chapterMatch =
      selectedChapter === "all" || piece.chapterId === selectedChapter;
    const categoryMatch =
      selectedCategory === "all" || piece.category === selectedCategory;
    return chapterMatch && categoryMatch;
  });

  return (
    <section
      id="collections"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#0D2218] text-[#FAF7F2] relative border-b border-[#C9A86A]/20"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#C9A86A]/20 pb-6 sm:pb-8">
          <div className="space-y-3">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] sm:tracking-[0.35em] text-[#C9A86A] uppercase">
              THE FOUR CHAPTERS · ARCHIVAL CATALOGUE
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#FAF7F2] tracking-tight">
              Curated by form, <span className="italic font-normal text-gold-gradient">numbered by casting.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base font-sans font-light text-[#FAF7F2]/75 leading-relaxed">
            Every piece is cast in solid 18k gold in limited numbered editions of 50. Hand-finished and stamped with the official British Goldsmiths&apos; Hall hallmark.
          </p>
        </div>

        {/* Chapter Selection Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          <button
            onClick={() => setSelectedChapter("all")}
            className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all text-left flex flex-col justify-between space-y-3 ${
              selectedChapter === "all"
                ? "bg-[#163326] border-[#C9A86A] shadow-xl shadow-[#C9A86A]/10"
                : "bg-[#081710]/70 border-[#C9A86A]/20 hover:border-[#C9A86A]/50"
            }`}
          >
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#C9A86A] uppercase">
              CHAPTER ALL
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-[#FAF7F2]">The Complete Archive</h3>
              <p className="text-[10px] sm:text-xs text-[#FAF7F2]/60 font-sans mt-0.5 sm:mt-1 hidden sm:block">
                All four sculptural design chapters
              </p>
            </div>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-wider text-[#EBD49B] uppercase font-semibold">
              {PRODUCTS_LIST.length} Masterpieces
            </span>
          </button>

          {COLLECTION_CHAPTERS.map((chap) => {
            const isSelected = selectedChapter === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => setSelectedChapter(chap.id)}
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all text-left flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-[#163326] border-[#C9A86A] shadow-xl shadow-[#C9A86A]/10"
                    : "bg-[#081710]/70 border-[#C9A86A]/20 hover:border-[#C9A86A]/50"
                }`}
              >
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#C9A86A] uppercase">
                  CHAPTER {chap.roman}
                </span>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-[#FAF7F2]">{chap.title}</h3>
                  <p className="text-[10px] sm:text-xs text-[#FAF7F2]/60 font-sans mt-0.5 sm:mt-1 line-clamp-1 hidden sm:block">
                    {chap.subtitle}
                  </p>
                </div>
                <span className="text-[9px] sm:text-[10px] font-sans tracking-wider text-[#EBD49B] uppercase font-semibold">
                  {PRODUCTS_LIST.filter((p) => p.chapterId === chap.id).length} Pieces
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-[#FAF7F2]/50 font-sans uppercase tracking-widest mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span className="text-[10px]">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase whitespace-nowrap transition-all flex-shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-[#C9A86A] text-[#0D2218] font-bold shadow-md"
                  : "bg-[#081710] text-[#FAF7F2]/75 border border-[#C9A86A]/20 hover:border-[#C9A86A]/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPieces.map((piece) => (
            <div
              key={piece.id}
              onClick={() => onSelectPiece(piece)}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#081710]/90 border border-[#C9A86A]/25 hover:border-[#C9A86A] transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden"
            >
              {/* Top Details */}
              <div className="flex items-center justify-between border-b border-[#C9A86A]/15 pb-4">
                <span className="text-[9.5px] sm:text-[10px] font-sans tracking-[0.25em] text-[#C9A86A] uppercase font-semibold">
                  {piece.chapterName}
                </span>
                <span className="text-[9px] sm:text-[9.5px] font-mono text-[#FAF7F2]/60 uppercase">
                  Edition of 50
                </span>
              </div>

              {/* Central Gold Motif */}
              <div className="my-6 sm:my-8 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px] relative">
                <GoldMotif
                  type={piece.formType}
                  finish="yellow"
                  size={190}
                  interactive={true}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Information */}
              <div className="space-y-4 pt-4 border-t border-[#C9A86A]/15">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#FAF7F2] group-hover:text-[#EBD49B] transition-colors">
                      {piece.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-sans text-[#C9A86A] uppercase tracking-widest mt-0.5">
                      {piece.specifications.material}
                    </p>
                  </div>
                  <span className="font-serif text-lg sm:text-xl text-[#FAF7F2] whitespace-nowrap">
                    {formatPrice(piece.priceUSD, currentCurrency)}
                  </span>
                </div>

                <p className="text-xs font-sans font-light text-[#FAF7F2]/75 line-clamp-2 leading-relaxed">
                  {piece.description}
                </p>

                {/* Quick Enquire CTA */}
                <div className="pt-2 flex items-center justify-between text-xs font-sans">
                  <span className="text-[10px] font-sans tracking-widest text-[#FAF7F2]/50 uppercase">
                    {piece.specifications.weight}
                  </span>
                  <div className="flex items-center gap-1 text-[#C9A86A] group-hover:text-[#EBD49B] transition-colors text-[10.5px] font-medium tracking-wider uppercase">
                    <span>Inspect Piece</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
