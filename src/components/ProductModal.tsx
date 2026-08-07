"use client";

import React, { useState } from "react";
import { ProductPiece, CurrencyCode, formatPrice } from "../data/riitanData";
import { GoldMotif } from "./GoldMotifs";
import { X, Sparkles, Check, ShieldCheck, Clock, Compass } from "lucide-react";

interface ProductModalProps {
  piece: ProductPiece | null;
  currentCurrency: CurrencyCode;
  onClose: () => void;
  onEnquire: (piece: ProductPiece) => void;
}

export function ProductModal({
  piece,
  currentCurrency,
  onClose,
  onEnquire,
}: ProductModalProps) {
  const [selectedFinish, setSelectedFinish] = useState<"yellow" | "rose" | "white">("yellow");

  if (!piece) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#081710]/95 backdrop-blur-2xl overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0D2218] border border-[#C9A86A]/40 shadow-2xl overflow-hidden my-8 grid grid-cols-1 md:grid-cols-12 text-[#FAF7F2]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#081710]/80 text-[#FAF7F2] hover:text-[#C9A86A] border border-[#C9A86A]/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Interactive Visualizer Area */}
        <div className="md:col-span-6 p-8 sm:p-12 bg-gradient-to-b from-[#143023]/60 via-[#0D2218] to-[#081710] flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#C9A86A]/20">
          <div className="w-full flex items-center justify-between text-[10px] font-sans tracking-[0.25em] text-[#C9A86A] uppercase">
            <span>{piece.chapterName}</span>
            <span>{piece.specifications.material}</span>
          </div>

          <div className="my-auto py-8">
            <GoldMotif
              type={piece.formType}
              finish={selectedFinish}
              size={240}
              interactive={true}
            />
          </div>

          {/* Finish Switcher */}
          <div className="w-full p-2 rounded-full bg-[#081710]/80 border border-[#C9A86A]/30 flex items-center justify-around">
            <button
              onClick={() => setSelectedFinish("yellow")}
              className={`text-[11px] font-sans tracking-wider uppercase px-3 py-1 rounded-full transition-all ${
                selectedFinish === "yellow"
                  ? "bg-[#C9A86A] text-[#0D2218] font-bold"
                  : "text-[#FAF7F2]/60 hover:text-[#FAF7F2]"
              }`}
            >
              Yellow Gold
            </button>
            <button
              onClick={() => setSelectedFinish("rose")}
              className={`text-[11px] font-sans tracking-wider uppercase px-3 py-1 rounded-full transition-all ${
                selectedFinish === "rose"
                  ? "bg-[#C98270] text-[#FAF7F2] font-bold"
                  : "text-[#FAF7F2]/60 hover:text-[#FAF7F2]"
              }`}
            >
              Rose Gold
            </button>
            <button
              onClick={() => setSelectedFinish("white")}
              className={`text-[11px] font-sans tracking-wider uppercase px-3 py-1 rounded-full transition-all ${
                selectedFinish === "white"
                  ? "bg-[#BDC3C7] text-[#0D2218] font-bold"
                  : "text-[#FAF7F2]/60 hover:text-[#FAF7F2]"
              }`}
            >
              White Gold
            </button>
          </div>
        </div>

        {/* Right Piece Details */}
        <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase">
                FINE JEWELLERY SPECIFICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] mt-1">
                {piece.name}
              </h2>
              <p className="text-xl font-serif text-[#EBD49B] mt-1">
                {formatPrice(piece.priceUSD, currentCurrency)}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-sans font-light text-[#FAF7F2]/80 leading-relaxed">
              {piece.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#163326]/50 border border-[#C9A86A]/20 text-xs font-serif italic text-[#EBD49B]">
              &ldquo;{piece.poeticNote}&rdquo;
            </div>

            {/* Specifications Matrix */}
            <div className="space-y-2 pt-2 border-t border-[#C9A86A]/20 text-xs font-sans">
              <div className="flex justify-between py-1 border-b border-[#C9A86A]/10">
                <span className="text-[#FAF7F2]/50 uppercase text-[10px] tracking-wider">Weight</span>
                <span className="text-[#FAF7F2] font-medium">{piece.specifications.weight}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#C9A86A]/10">
                <span className="text-[#FAF7F2]/50 uppercase text-[10px] tracking-wider">Dimensions</span>
                <span className="text-[#FAF7F2] font-medium">{piece.specifications.dimensions}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#C9A86A]/10">
                <span className="text-[#FAF7F2]/50 uppercase text-[10px] tracking-wider">Lead Time</span>
                <span className="text-[#FAF7F2] font-medium">{piece.specifications.leadTime}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#FAF7F2]/50 uppercase text-[10px] tracking-wider">Atelier</span>
                <span className="text-[#FAF7F2] font-medium">{piece.specifications.origin}</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                onClose();
                onEnquire(piece);
              }}
              className="w-full py-4 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:shadow-[0_0_25px_rgba(201,168,106,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0D2218]" />
              <span>Enquire to Commission</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
