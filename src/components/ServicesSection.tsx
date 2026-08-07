"use client";

import React from "react";
import { HOUSE_SERVICES, HouseService } from "../data/riitanData";
import { Sparkles, Clock, MapPin, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onBookService: (service: HouseService) => void;
}

export function ServicesSection({ onBookService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-[#0D2218] text-[#FAF7F2] relative border-b border-[#C9A86A]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#C9A86A]/20 pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.35em] text-[#C9A86A] uppercase">
              THE HOUSE SERVICES · BESPOKE & CONCIERGE
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-[#FAF7F2] tracking-tight">
              Considered care for a <span className="italic font-normal text-gold-gradient">lifelong collection.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-sans font-light text-[#FAF7F2]/75 leading-relaxed">
            Our relationship begins, not ends, with acquisition. From bespoke commissions to private styling appointments.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOUSE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#081710]/80 border border-[#C9A86A]/25 hover:border-[#C9A86A] transition-all duration-500 hover:shadow-2xl backdrop-blur-md"
            >
              <div className="space-y-6">
                {/* Number & Duration */}
                <div className="flex items-center justify-between border-b border-[#C9A86A]/15 pb-4">
                  <span className="text-3xl font-serif text-[#C9A86A]">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-[#FAF7F2]/60">
                    <Clock className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] group-hover:text-[#EBD49B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-sans tracking-widest text-[#C9A86A] uppercase mt-1">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm font-sans font-light text-[#FAF7F2]/75 leading-relaxed">
                  {service.description}
                </p>

                {/* Location & Options */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#FAF7F2]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>{service.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.availableOptions.map((opt) => (
                      <span
                        key={opt}
                        className="px-3 py-1 rounded-full bg-[#163326] border border-[#C9A86A]/20 text-[11px] font-sans text-[#EBD49B]"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 border-t border-[#C9A86A]/15 mt-8">
                <button
                  onClick={() => onBookService(service)}
                  className="w-full py-3.5 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.2em] uppercase hover:shadow-[0_0_20px_rgba(201,168,106,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#0D2218]" />
                  <span>Reserve Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0D2218]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
