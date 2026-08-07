"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Check, Clock, Globe } from "lucide-react";

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [lagosTime, setLagosTime] = useState("");
  const [londonTime, setLondonTime] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setLagosTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setLondonTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#081710] text-[#FAF7F2] pt-24 pb-12 px-6 md:px-12 border-t border-[#C9A86A]/25 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#163326] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Private Salon Newsletter Invitation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D2218] border border-[#C9A86A]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] font-sans tracking-[0.35em] text-[#C9A86A] uppercase font-medium">
              THE PRIVATE SALON DISPATCH
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-light text-[#FAF7F2]">
              What comes next. <span className="italic text-gold-gradient">Shared in confidence.</span>
            </h3>
            <p className="text-xs sm:text-sm font-sans font-light text-[#FAF7F2]/75 max-w-lg leading-relaxed">
              Private previews, new sculptural forms, and the stories behind them — shared with a quiet circle before anyone else.
            </p>
          </div>

          <div className="lg:col-span-5">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-5 pr-32 py-4 rounded-full bg-[#081710] border border-[#C9A86A]/40 text-sm font-sans text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#C9A86A]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-gold-metallic text-[#0D2218] text-[11px] font-sans font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity flex items-center gap-1.5"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] font-sans text-[#FAF7F2]/50 tracking-wider block pl-4">
                  Complimentary private salon invitation · No spam
                </span>
              </form>
            ) : (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#163326] border border-[#C9A86A]/40 text-xs font-sans text-[#EBD49B]">
                <Check className="w-5 h-5 text-[#C9A86A]" />
                <span>You have been added to the private salon register. Welcome to RÍÌTÀN.</span>
              </div>
            )}
          </div>
        </div>

        {/* Live Atelier Clocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#0D2218]/50 border border-[#C9A86A]/15">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-[#FAF7F2]/70 uppercase">
              <Globe className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Lagos Atelier (WAT)</span>
            </div>
            <span className="font-serif text-lg text-[#EBD49B]">{lagosTime || "19:15"}</span>
          </div>

          <div className="flex items-center justify-between px-4 border-t sm:border-t-0 sm:border-l border-[#C9A86A]/15 pt-3 sm:pt-0">
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-[#FAF7F2]/70 uppercase">
              <Globe className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>London Salon (GMT)</span>
            </div>
            <span className="font-serif text-lg text-[#EBD49B]">{londonTime || "18:15"}</span>
          </div>
        </div>

        {/* Main Footer Links & Wordmark */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-[#C9A86A]/15">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-riitan-gold.png"
                alt="RÍÌTÀN Emblem"
                className="w-11 h-11 object-contain filter drop-shadow-[0_2px_10px_rgba(201,168,106,0.3)]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="font-serif text-3xl tracking-[0.35em] text-[#FAF7F2] uppercase font-light block">
                  R Í Ì T À N
                </span>
                <span className="text-[10px] tracking-[0.4em] text-[#C9A86A] uppercase font-sans block">
                  Maison de Haute Joaillerie
                </span>
              </div>
            </div>
            <p className="text-xs font-sans font-light text-[#FAF7F2]/70 max-w-sm leading-relaxed">
              Sculptural 18k solid recycled gold jewellery rooted in Yoruba heritage and architectural modernity. Adornment for a lasting presence.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#C9A86A] uppercase block">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#FAF7F2]/75">
              <li><a href="#signature" className="hover:text-[#EBD49B] transition-colors">The Signature Silhouettes</a></li>
              <li><a href="#collections" className="hover:text-[#EBD49B] transition-colors">Four Chapters Collection</a></li>
              <li><a href="#lookbook" className="hover:text-[#EBD49B] transition-colors">Editorial Lookbook</a></li>
              <li><a href="#atelier" className="hover:text-[#EBD49B] transition-colors">Lost-Wax Atelier</a></li>
              <li><a href="#services" className="hover:text-[#EBD49B] transition-colors">House Services & Styling</a></li>
            </ul>
          </div>

          {/* Concierge & Salons */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#C9A86A] uppercase block">
              PRIVATE SALONS
            </span>
            <div className="space-y-2 text-xs font-sans text-[#FAF7F2]/75">
              <div>
                <strong className="text-[#FAF7F2] font-serif block text-sm">Lagos VIP Suite</strong>
                <span>Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="pt-2">
                <strong className="text-[#FAF7F2] font-serif block text-sm">London Private Salon</strong>
                <span>Mayfair, London, United Kingdom</span>
              </div>
              <div className="pt-2 text-[11px] text-[#C9A86A]">
                <span>concierge@riitan.com · By Appointment Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 border-t border-[#C9A86A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans text-[#FAF7F2]/50 tracking-wider">
          <div>
            © 2026 RÍÌTÀN HAUTE JOAILLERIE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">Ethical Gold Tracing</a>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">750‰ Assay Hallmarks</a>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
