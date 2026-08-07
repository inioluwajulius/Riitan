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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-[#0D2218]/90 backdrop-blur-md py-3 border-b border-[#C9A86A]/20 shadow-2xl"
          : "bg-gradient-to-b from-[#0D2218]/80 to-transparent py-6"
      }`}
    >
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16 flex items-center justify-between gap-6">
        {/* 1. START: Brand Logomark & Identity */}
        <div className="flex-1 flex items-center justify-start min-w-0">
          <a
            href="#"
            className="group flex items-center gap-3.5 sm:gap-4 transition-opacity hover:opacity-90 flex-shrink-0"
          >
            <img
              src="/logo-riitan-gold.png"
              alt="RÍÌTÀN Emblem"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-13 md:w-13 object-contain filter drop-shadow-[0_2px_12px_rgba(201,168,106,0.35)] transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to standard logo if needed
                (e.target as HTMLImageElement).src = '/logo-riitan.png';
              }}
            />
            <div className="flex flex-col items-start">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.22em] sm:tracking-[0.26em] text-[#FAF7F2] uppercase font-light whitespace-nowrap">
                R Í Ì T À N
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.28em] sm:tracking-[0.34em] text-[#C9A86A] uppercase font-sans mt-0.5 opacity-90 group-hover:text-[#EBD49B] transition-colors whitespace-nowrap">
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
        <div className="flex-1 flex items-center justify-end space-x-3 sm:space-x-4 min-w-0">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#C9A86A]/30 text-xs font-sans text-[#FAF7F2]/90 hover:border-[#C9A86A] transition-all bg-[#0D2218]/40 hover:bg-[#163326]"
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
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book / Enquire Button */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex group relative items-center gap-2 px-5 py-3 rounded-full text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#0D2218] bg-gold-metallic hover:shadow-[0_0_20px_rgba(201,168,106,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <Sparkles className="w-3 h-3 text-[#0D2218]" />
            <span>Private Salon</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FAF7F2] hover:text-[#C9A86A] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#C9A86A]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-[#0D2218]/95 backdrop-blur-2xl border-b border-[#C9A86A]/30 px-8 py-8 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-5 text-sm font-sans tracking-[0.25em] text-[#FAF7F2]/90 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#C9A86A]/10 hover:text-[#C9A86A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#C9A86A]/20 flex items-center justify-between">
            <span className="text-xs text-[#FAF7F2]/60 tracking-widest font-sans uppercase">Currency</span>
            <div className="flex gap-2">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    onCurrencyChange(curr.code);
                  }}
                  className={`px-2.5 py-1 text-xs rounded-md border ${
                    currentCurrency === curr.code
                      ? "border-[#C9A86A] bg-[#C9A86A]/20 text-[#EBD49B]"
                      : "border-white/10 text-white/70"
                  }`}
                >
                  {curr.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
