"use client";

import React, { useState, useEffect } from "react";
import { CurrencyCode, CURRENCIES } from "../data/riitanData";
import { Globe, Menu, X, Sparkles, ChevronDown } from "lucide-react";

interface HeaderProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export function Header({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "SIGNATURE", href: "#signature" },
    { label: "COLLECTIONS", href: "#collections" },
    { label: "LOOKBOOK", href: "#lookbook" },
    { label: "ATELIER", href: "#atelier" },
    { label: "SERVICES", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D2218]/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-[#C9A86A]/20 shadow-2xl"
          : "bg-gradient-to-b from-[#0D2218]/90 via-[#0D2218]/60 to-transparent py-4 sm:py-6"
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16 flex items-center justify-between gap-4 sm:gap-6">
        {/* 1. START: Brand Logomark & Identity */}
        <div className="flex-1 flex items-center justify-start min-w-0">
          <a
            href="#"
            className="group flex items-center gap-2.5 sm:gap-4 transition-opacity hover:opacity-90 flex-shrink-0"
          >
            <img
              src="/logo-riitan-gold.png"
              alt="RÍÌTÀN Emblem"
              className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 object-contain filter drop-shadow-[0_2px_12px_rgba(201,168,106,0.35)] transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/logo-riitan.png";
              }}
            />
            <div className="flex flex-col items-start">
              <span className="font-serif text-lg sm:text-2xl tracking-[0.2em] sm:tracking-[0.26em] text-[#FAF7F2] uppercase font-light whitespace-nowrap">
                R Í Ì T À N
              </span>
              <span className="text-[7px] sm:text-[8.5px] tracking-[0.24em] sm:tracking-[0.34em] text-[#C9A86A] uppercase font-sans mt-0.5 opacity-90 group-hover:text-[#EBD49B] transition-colors whitespace-nowrap">
                Maison de Haute Joaillerie
              </span>
            </div>
          </a>
        </div>

        {/* 2. MIDDLE: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 text-[11px] xl:text-[11.5px] tracking-[0.22em] font-sans font-medium text-[#FAF7F2]/80 uppercase whitespace-nowrap flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#EBD49B] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A86A] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 3. END: Actions & Currency Switcher */}
        <div className="flex-1 flex items-center justify-end space-x-2.5 sm:space-x-4 min-w-0">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-[#C9A86A]/30 text-xs font-sans text-[#FAF7F2]/90 hover:border-[#C9A86A] transition-all bg-[#0D2218]/40 hover:bg-[#163326]"
              aria-label="Select Currency"
            >
              <Globe className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span className="tracking-wider text-xs">{currentCurrency}</span>
              <ChevronDown className="w-3 h-3 text-[#C9A86A]/70" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#0D2218] border border-[#C9A86A]/40 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-xl">
                {CURRENCIES.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      onCurrencyChange(curr.code);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-sans tracking-wider flex items-center justify-between transition-colors ${
                      currentCurrency === curr.code
                        ? "text-[#EBD49B] bg-[#163326] font-semibold"
                        : "text-[#FAF7F2]/75 hover:text-[#FAF7F2] hover:bg-[#163326]/50"
                    }`}
                  >
                    <span>{curr.label}</span>
                    {currentCurrency === curr.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book / Enquire Button (Desktop & Tablet) */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex group relative items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#0D2218] bg-gold-metallic hover:shadow-[0_0_20px_rgba(201,168,106,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <Sparkles className="w-3 h-3 text-[#0D2218]" />
            <span>Private Salon</span>
          </button>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#FAF7F2] hover:text-[#C9A86A] transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#EBD49B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#C9A86A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-[#0D2218] z-50 overflow-y-auto px-6 py-8 border-t border-[#C9A86A]/20 shadow-2xl flex flex-col justify-between animate-fadeIn">
          <div className="space-y-6">
            <span className="text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase block">
              Navigation
            </span>
            <nav className="flex flex-col space-y-4 text-base font-serif tracking-[0.2em] text-[#FAF7F2] uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-[#C9A86A]/15 hover:text-[#EBD49B] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#C9A86A]/60">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-[#C9A86A]/20 space-y-6">
            {/* Mobile Private Salon CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.25em] uppercase shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0D2218]" />
              <span>Book Private Salon Consultation</span>
            </button>

            {/* Currency selector inside drawer */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#FAF7F2]/60 tracking-widest font-sans uppercase">
                Currency
              </span>
              <div className="flex gap-2">
                {CURRENCIES.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      onCurrencyChange(curr.code);
                    }}
                    className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                      currentCurrency === curr.code
                        ? "border-[#C9A86A] bg-[#C9A86A]/25 text-[#EBD49B] font-semibold"
                        : "border-white/10 text-white/70 hover:border-white/30"
                    }`}
                  >
                    {curr.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Atelier contact footer */}
            <div className="text-[11px] font-sans text-[#FAF7F2]/50 text-center pt-2">
              <span>Lagos & London · By Appointment Only</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
