"use client";

import React, { useState } from "react";
import { HOUSE_SERVICES } from "../data/riitanData";
import { X, Check, Sparkles, Calendar, MapPin, Mail, Phone, User } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialPieceName?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialPieceName,
}: BookingModalProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || "private-consultations"
  );
  const [selectedLocation, setSelectedLocation] = useState<string>("lagos");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState(
    initialPieceName ? `Inquiring about commissioning: ${initialPieceName}` : ""
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefCode(`RN-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#081710]/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0D2218] border border-[#C9A86A]/40 shadow-2xl p-6 sm:p-10 text-[#FAF7F2] my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#081710]/80 text-[#FAF7F2] hover:text-[#C9A86A] border border-[#C9A86A]/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Modal Title */}
            <div className="space-y-2 border-b border-[#C9A86A]/20 pb-4">
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase">
                PRIVATE SALON & BESPOKE COMMISSIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2]">
                Reserve Your Private Consultation
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light text-[#FAF7F2]/75">
                Quiet, unhurried guidance with our client concierge and master goldsmiths.
              </p>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                1. Select Experience:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {HOUSE_SERVICES.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-sans transition-all ${
                      selectedService === s.id
                        ? "border-[#C9A86A] bg-[#163326] text-[#EBD49B] shadow-md"
                        : "border-[#C9A86A]/20 bg-[#081710]/60 text-[#FAF7F2]/70 hover:border-[#C9A86A]/50"
                    }`}
                  >
                    <div className="font-serif text-sm text-[#FAF7F2]">{s.title}</div>
                    <div className="text-[10px] text-[#C9A86A] opacity-80">{s.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Salon Location */}
            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                2. Preferred Salon or Format:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "lagos", label: "Lagos VIP Suite", place: "Victoria Island" },
                  { id: "london", label: "London Salon", place: "Mayfair" },
                  { id: "virtual", label: "Virtual Concierge", place: "Private Video" },
                ].map((loc) => (
                  <button
                    type="button"
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-sans transition-all ${
                      selectedLocation === loc.id
                        ? "border-[#C9A86A] bg-[#163326] text-[#EBD49B]"
                        : "border-[#C9A86A]/20 bg-[#081710]/60 text-[#FAF7F2]/70 hover:border-[#C9A86A]/50"
                    }`}
                  >
                    <div className="font-medium text-[#FAF7F2]">{loc.label}</div>
                    <div className="text-[10px] text-[#FAF7F2]/50">{loc.place}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Client Information */}
            <div className="space-y-4 pt-2">
              <label className="text-xs font-sans tracking-widest text-[#FAF7F2]/70 uppercase block">
                3. Client Details:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C9A86A]/60" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#081710] border border-[#C9A86A]/25 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C9A86A]/60" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#081710] border border-[#C9A86A]/25 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C9A86A]/60" />
                <input
                  type="tel"
                  placeholder="Phone Number (for concierge WhatsApp / confirmation)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#081710] border border-[#C9A86A]/25 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#C9A86A]"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Notes, specific piece of interest, or custom commission vision..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-[#081710] border border-[#C9A86A]/25 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#C9A86A]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:shadow-[0_0_25px_rgba(201,168,106,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#0D2218]" />
                <span>Confirm Reservation</span>
              </button>
            </div>
          </form>
        ) : (
          /* Submission Confirmation Card */
          <div className="py-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#163326] border border-[#C9A86A] text-[#C9A86A] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(201,168,106,0.4)]">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#C9A86A] uppercase">
                RESERVATION RECEIVED · REF #{refCode || "RN-750180"}
              </span>
              <h3 className="text-3xl font-serif text-[#FAF7F2]">
                Thank You, {fullName || "Esteemed Client"}
              </h3>
              <p className="max-w-md mx-auto text-sm font-sans font-light text-[#FAF7F2]/80 leading-relaxed">
                Our Private Salon Concierge will contact you within 12 hours via email and phone to finalize your appointment details and prepare tailored gold casts for your session.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-gold-metallic text-[#0D2218] text-xs font-sans font-semibold tracking-[0.2em] uppercase"
              >
                Return to Experience
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
