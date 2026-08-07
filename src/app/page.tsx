"use client";

import React, { useState } from "react";
import { CurrencyCode, ProductPiece, HouseService } from "./../data/riitanData";
import { GoldCanvas } from "./../components/GoldCanvas";
import { Header } from "./../components/Header";
import { HeroSection } from "./../components/HeroSection";
import { SignatureSection } from "./../components/SignatureSection";
import { CollectionsSection } from "./../components/CollectionsSection";
import { SpotlightSection } from "./../components/SpotlightSection";
import { LookbookSection } from "./../components/LookbookSection";
import { AtelierSection } from "./../components/AtelierSection";
import { ServicesSection } from "./../components/ServicesSection";
import { BookingModal } from "./../components/BookingModal";
import { ProductModal } from "./../components/ProductModal";
import { FooterSection } from "./../components/FooterSection";

export default function Home() {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>("USD");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [bookingPieceName, setBookingPieceName] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<ProductPiece | null>(null);

  const handleOpenBooking = (serviceId?: string, pieceName?: string) => {
    setBookingServiceId(serviceId);
    setBookingPieceName(pieceName);
    setBookingModalOpen(true);
  };

  const handleBookService = (service: HouseService) => {
    handleOpenBooking(service.id);
  };

  const handleEnquirePiece = (piece: ProductPiece) => {
    handleOpenBooking("custom-sourcing", piece.name);
  };

  const handleExploreSignature = () => {
    const el = document.getElementById("signature");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectForm = (formKey: string) => {
    const el = document.getElementById("collections");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#F5EFE6] text-[#0D2218] overflow-x-hidden selection:bg-[#C9A86A]/30">
      {/* Shimmering Ambient Gold Canvas Background */}
      <GoldCanvas />

      {/* Floating Concierge Header */}
      <Header
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenBooking={() => handleOpenBooking()}
        onExploreSignature={handleExploreSignature}
      />

      {/* The 3 Signature Silhouettes */}
      <SignatureSection onSelectForm={handleSelectForm} />

      {/* Product Spotlight — Piece No. 01 */}
      <SpotlightSection
        currentCurrency={currentCurrency}
        onEnquire={() => handleOpenBooking("custom-sourcing", "The Split Loop Earring")}
      />

      {/* Four Chapters Collections Grid */}
      <CollectionsSection
        currentCurrency={currentCurrency}
        onSelectPiece={(piece) => setSelectedProduct(piece)}
        onEnquirePiece={handleEnquirePiece}
      />

      {/* The Lookbook & Editorial Storytelling */}
      <LookbookSection onOpenBooking={() => handleOpenBooking("personal-styling")} />

      {/* The Atelier & Craftsmanship */}
      <AtelierSection />

      {/* The House Services */}
      <ServicesSection onBookService={handleBookService} />

      {/* Luxury Footer & Newsletter */}
      <FooterSection />

      {/* Interactive Booking / Commission Drawer Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={bookingServiceId}
        initialPieceName={bookingPieceName}
      />

      {/* Interactive Product Quick View Modal */}
      <ProductModal
        piece={selectedProduct}
        currentCurrency={currentCurrency}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquirePiece}
      />
    </main>
  );
}
