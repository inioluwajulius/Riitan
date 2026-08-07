"use client";

import React, { useState } from "react";
import { HOUSE_SERVICES } from "../data/riitanData";
import { X, Sparkles, Check, Clock, MapPin, Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialPieceName?: string;
  preselectedServiceId?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialPieceName,
  preselectedServiceId,
}: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(
    initialServiceId || preselectedServiceId || "private-salon"
  );
  const [location, setLocation] = useState<"lagos" | "london" | "virtual">("lagos");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState(
    initialPieceName ? `Inquiring regarding: ${initialPieceName}` : ""
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      if (initialServiceId || preselectedServiceId) {
        setSelectedService(initialServiceId || preselectedServiceId || "private-salon");
      }
      if (initialPieceName) {
        setNotes(`Inquiring regarding: ${initialPieceName}`);
      }
      setIsSubmitted(false);
    }
  }, [isOpen, initialServiceId, initialPieceName, preselectedServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#081710]/95 backdrop-blur-2xl overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0D2218] border border-[#C9A86A]/40 shadow-2xl p-6 sm:p-10 text-[#FAF7F2] my-auto max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-[#081710]/80 text-[#FAF7F2] hover:text-[#C9A86A] border border-[#C9A86A]/30 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2 pr-8">
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase font-semibold">
                MAISON CONCIERGE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#FAF7F2]">
                Request a Private Consultation
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light text-[#FAF7F2]/75">
                Our Private Client Director will contact you within 24 hours to confirm your appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-[10.5px] font-sans tracking-widest text-[#C9A86A] uppercase block">
                  Select Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#081710] border border-[#C9A86A]/30 text-sm font-sans text-[#FAF7F2] focus:outline-none focus:border-[#C9A86A]"
                >
                  {HOUSE_SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#081710] text-[#FAF7F2]">
                      {s.title} — {s.duration}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Picker */}
              <div className="space-y-2">
                <label className="text-[10.5px] font-sans tracking-widest text-[#C9A86A] uppercase block">
                  Salon Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocation("lagos")}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-sans tracking-wider uppercase transition-all ${
                      location === "lagos"
                        ? "border-[#C9A86A] bg-[#163326] text-[#EBD49B] font-medium"
                        : "border-[#C9A86A]/20 bg-[#081710]/60 text-[#FAF7F2]/70 hover:border-[#C9A86A]/40"
                    }`}
                  >
                    Lagos VIP Suite
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocation("london")}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-sans tracking-wider uppercase transition-all ${
                      location === "london"
                        ? "border-[#C9A86A] bg-[#163326] text-[#EBD49B] font-medium"
                        : "border-[#C9A86A]/20 bg-[#081710]/60 text-[#FAF7F2]/70 hover:border-[#C9A86A]/40"
                    }`}
                  >
                    London Salon
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocation("virtual")}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-sans tracking-wider uppercase transition-all ${
                      location === "virtual"
                        ? "border-[#C9A86A] bg-[#163326] text-[#EBD49B] font-medium"
                        : "border-[#C9A86A]/20 bg-[#081710]/60 text-[#FAF7F2]/70 hover:border-[#C9A86A]/40"
                    }`}
                  >
                    Virtual Private
                  </button>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lady Folashade"
                    className="w-full px-4 py-3 rounded-xl bg-[#081710] border border-[#C9A86A]/30 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/30 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="folashade@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#081710] border border-[#C9A86A]/30 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/30 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                    Telephone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 / +44 ..."
                    className="w-full px-4 py-3 rounded-xl bg-[#081710] border border-[#C9A86A]/30 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/30 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#081710] border border-[#C9A86A]/30 text-sm font-sans text-[#FAF7F2] focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                  Specific Requests or Preferred Pieces
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about the occasion, wrist/finger sizing, or specific pieces of interest..."
                  className="w-full px-4 py-3 rounded-xl bg-[#081710] border border-[#C9A86A]/30 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/30 focus:outline-none focus:border-[#C9A86A] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:shadow-[0_0_25px_rgba(201,168,106,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#0D2218]" />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#163326] border border-[#C9A86A] flex items-center justify-center mx-auto text-[#C9A86A]">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase font-semibold">
                APPOINTMENT REQUESTED
              </span>
              <h3 className="text-3xl font-serif text-[#FAF7F2]">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-sm font-sans font-light text-[#FAF7F2]/80 max-w-md mx-auto leading-relaxed">
                Thank you, {name || "esteemed guest"}. Our Concierge team has received your request and will contact you via email shortly.
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-8 py-3.5 rounded-full border border-[#C9A86A]/50 text-xs font-sans tracking-widest uppercase text-[#FAF7F2] hover:bg-[#C9A86A]/20 transition-all"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
