"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";

interface MotifProps {
  type: "master-emblem" | "emblem" | "split-loop" | "soft-triangle" | "double-flow" | "talisman" | "torque" | string;
  className?: string;
  interactive?: boolean;
  finish?: "yellow" | "rose" | "white" | string;
  size?: number;
  lightSource?: { x: number; y: number } | null;
}

export function GoldMotif({
  type,
  className = "",
  interactive = false,
  finish = "yellow",
  size = 180,
  lightSource = null,
}: MotifProps) {
  // Finish gradient colors
  const gradientStops = {
    yellow: {
      light: "#FFF1C5",
      midLight: "#E5C882",
      mid: "#C9A86A",
      deep: "#8E6D30",
      ambient: "#563F15",
    },
    rose: {
      light: "#FFE3DA",
      midLight: "#EAA896",
      mid: "#C98270",
      deep: "#914E3F",
      ambient: "#54271D",
    },
    white: {
      light: "#FFFFFF",
      midLight: "#E8EBED",
      mid: "#BDC3C7",
      deep: "#7F8C8D",
      ambient: "#454D50",
    },
  }[finish === "rose" ? "rose" : finish === "white" ? "white" : "yellow"];

  const reactId = useId().replace(/[^a-zA-Z0-9-_]/g, "");
  const gradId = `gold-grad-${type}-${finish}-${reactId}`;
  const filterId = `gold-shadow-${type}-${reactId}`;

  const gradX1 = lightSource ? `${lightSource.x}%` : "0%";
  const gradY1 = lightSource ? `${lightSource.y}%` : "0%";
  const gradX2 = lightSource ? `${100 - lightSource.x}%` : "100%";
  const gradY2 = lightSource ? `${100 - lightSource.y}%` : "100%";

  switch (type) {
    case "master-emblem":
    case "emblem": {
      const emblemImg =
        finish === "white" ? "/logo-riitan-white.png" : "/logo-riitan-gold.png";
      const emblemFilter =
        finish === "rose"
          ? "sepia(0.5) saturate(1.8) hue-rotate(-25deg) drop-shadow(0 15px 35px rgba(234,168,150,0.35))"
          : finish === "white"
          ? "brightness(1.1) drop-shadow(0 15px 35px rgba(255,255,255,0.35))"
          : "drop-shadow(0 15px 35px rgba(201,168,106,0.45))";

      return (
        <div
          className={`relative flex items-center justify-center transition-all duration-700 ${
            interactive ? "group hover:scale-105 cursor-pointer" : ""
          } ${className}`}
          style={{ width: size, height: size }}
        >
          {/* Ambient Gold Glow Halo */}
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-40 transition-all duration-500 pointer-events-none"
            style={{
              background:
                finish === "rose"
                  ? "radial-gradient(circle, #C98270 0%, transparent 70%)"
                  : finish === "white"
                  ? "radial-gradient(circle, #FFFFFF 0%, transparent 70%)"
                  : "radial-gradient(circle, #C9A86A 0%, transparent 70%)",
            }}
          />

          <img
            src={emblemImg}
            alt="RÍÌTÀN Master Emblem"
            className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:rotate-3"
            style={{ filter: emblemFilter }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/logo-riitan.png";
            }}
          />
        </div>
      );
    }

    case "split-loop":
      return (
        <div
          className={`relative flex items-center justify-center transition-all duration-700 ${
            interactive ? "group hover:scale-105 cursor-pointer" : ""
          } ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_15px_25px_rgba(201,168,106,0.25)] transition-transform duration-700 group-hover:rotate-6"
          >
            <defs>
              <linearGradient id={gradId} x1={gradX1} y1={gradY1} x2={gradX2} y2={gradY2}>
                <stop offset="0%" stopColor={gradientStops.light} />
                <stop offset="25%" stopColor={gradientStops.midLight} />
                <stop offset="55%" stopColor={gradientStops.mid} />
                <stop offset="85%" stopColor={gradientStops.deep} />
                <stop offset="100%" stopColor={gradientStops.ambient} />
              </linearGradient>
              <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor={gradientStops.ambient} floodOpacity="0.4" />
              </filter>
            </defs>

            <motion.g
              animate={{ rotate: [0, 1.5, -1, 0], scale: [1, 1.005, 0.995, 1] }}
              transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            >
              {/* Ambient Back Glow */}
              <circle cx="100" cy="100" r="70" fill="none" stroke={gradientStops.mid} strokeWidth="1" opacity="0.15" />

              {/* Main Sculptural Split Loop Form */}
              <path
                d="M 128,48 
                   A 70,70 0 1,0 160,82 
                   C 152,78 140,84 135,92 
                   A 45,45 0 1,1 112,65 
                   C 118,55 124,50 128,48 Z"
                fill={`url(#${gradId})`}
                filter={`url(#${filterId})`}
              />

              {/* Inner Refined Lip Specular Highlight */}
              <path
                d="M 125,52 A 66,66 0 1,0 156,84"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* Subtle Carat Hallmark Micro-engraving */}
              <text
                x="100"
                y="105"
                textAnchor="middle"
                fill={gradientStops.mid}
                fontSize="6"
                letterSpacing="2"
                className="font-sans font-medium uppercase opacity-60"
              >
                RÍÌTÀN · 750
              </text>
            </motion.g>
          </svg>
        </div>
      );

    case "soft-triangle":
      return (
        <div
          className={`relative flex items-center justify-center transition-all duration-700 ${
            interactive ? "group hover:scale-105 cursor-pointer" : ""
          } ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_15px_25px_rgba(201,168,106,0.25)] transition-transform duration-700 group-hover:-rotate-6"
          >
            <defs>
              <linearGradient id={gradId} x1={gradX1} y1={gradY1} x2={gradX2} y2={gradY2}>
                <stop offset="0%" stopColor={gradientStops.light} />
                <stop offset="30%" stopColor={gradientStops.midLight} />
                <stop offset="60%" stopColor={gradientStops.mid} />
                <stop offset="85%" stopColor={gradientStops.deep} />
                <stop offset="100%" stopColor={gradientStops.ambient} />
              </linearGradient>
              <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor={gradientStops.ambient} floodOpacity="0.4" />
              </filter>
            </defs>

            <motion.g
              animate={{ rotate: [0, -1, 1, 0], scale: [1, 1.01, 0.99, 1] }}
              transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            >
              {/* Soft Triangle: Rounded Chamfered Geometry with Hollow Core */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 100,32 C 108,32 165,135 162,146 C 158,158 42,158 38,146 C 35,135 92,32 100,32 Z M 100,68 C 104,68 135,128 132,134 C 128,140 72,140 68,134 C 65,128 96,68 100,68 Z"
                fill={`url(#${gradId})`}
                filter={`url(#${filterId})`}
              />

              {/* Gold specular ridge */}
              <path
                d="M 98,38 C 104,38 155,132 153,142"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.85"
              />
            </motion.g>
          </svg>
        </div>
      );

    case "double-flow":
      return (
        <div
          className={`relative flex items-center justify-center transition-all duration-700 ${
            interactive ? "group hover:scale-105 cursor-pointer" : ""
          } ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_15px_25px_rgba(201,168,106,0.25)] transition-transform duration-700 group-hover:scale-105"
          >
            <defs>
              <linearGradient id={gradId} x1={gradX1} y1={gradY1} x2={gradX2} y2={gradY2}>
                <stop offset="0%" stopColor={gradientStops.light} />
                <stop offset="35%" stopColor={gradientStops.midLight} />
                <stop offset="70%" stopColor={gradientStops.mid} />
                <stop offset="100%" stopColor={gradientStops.deep} />
              </linearGradient>
              <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor={gradientStops.ambient} floodOpacity="0.4" />
              </filter>
            </defs>

            <motion.g
              animate={{ rotate: [0, 1.5, -1.5, 0] }}
              transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            >
              {/* Ribbon 1 - Outer Wave */}
              <motion.path
                d="M 40,70 
                   C 70,30 130,40 160,85 
                   C 180,115 150,165 110,165 
                   C 80,165 50,140 60,115 
                   C 70,90 120,95 135,115"
                fill="none"
                stroke={`url(#${gradId})`}
                strokeWidth="16"
                strokeLinecap="round"
                filter={`url(#${filterId})`}
                animate={{ d: [
                  "M 40,70 C 70,30 130,40 160,85 C 180,115 150,165 110,165 C 80,165 50,140 60,115 C 70,90 120,95 135,115",
                  "M 38,72 C 68,32 132,38 158,87 C 182,113 148,167 108,163 C 78,167 52,138 62,113 C 72,88 118,97 137,113",
                  "M 40,70 C 70,30 130,40 160,85 C 180,115 150,165 110,165 C 80,165 50,140 60,115 C 70,90 120,95 135,115"
                ] }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
              />

              {/* Specular ribbon 1 */}
              <path
                d="M 48,68 C 72,36 125,44 152,84"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Ribbon 2 - Parallel Inner Wave */}
              <motion.path
                d="M 50,95 
                   C 75,65 115,70 135,100 
                   C 150,122 130,150 100,150 
                   C 80,150 65,135 72,120"
                fill="none"
                stroke={`url(#${gradId})`}
                strokeWidth="10"
                strokeLinecap="round"
                animate={{ d: [
                  "M 50,95 C 75,65 115,70 135,100 C 150,122 130,150 100,150 C 80,150 65,135 72,120",
                  "M 48,97 C 73,67 117,68 133,102 C 152,120 128,152 98,148 C 78,152 67,133 74,118",
                  "M 50,95 C 75,65 115,70 135,100 C 150,122 130,150 100,150 C 80,150 65,135 72,120"
                ] }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.g>
          </svg>
        </div>
      );

    case "talisman":
      return (
        <div
          className={`relative flex items-center justify-center transition-all duration-700 ${
            interactive ? "group hover:scale-105 cursor-pointer" : ""
          } ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_15px_25px_rgba(201,168,106,0.25)] transition-transform duration-700 group-hover:scale-105"
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={gradientStops.light} />
                <stop offset="35%" stopColor={gradientStops.midLight} />
                <stop offset="65%" stopColor={gradientStops.mid} />
                <stop offset="100%" stopColor={gradientStops.deep} />
              </linearGradient>
            </defs>

            {/* Shield / Heirloom Signet Crest */}
            <rect
              x="50"
              y="40"
              width="100"
              height="120"
              rx="25"
              fill={`url(#${gradId})`}
            />

            {/* Inner Inset Face */}
            <rect
              x="62"
              y="52"
              width="76"
              height="96"
              rx="18"
              fill="#0D2218"
            />

            {/* Geometric Yoruba Heritage Sunburst Motif */}
            <circle cx="100" cy="100" r="22" fill="none" stroke={`url(#${gradId})`} strokeWidth="3" />
            <circle cx="100" cy="100" r="10" fill={`url(#${gradId})`} />
            <path d="M 100,68 L 100,74 M 100,126 L 100,132 M 68,100 L 74,100 M 126,100 L 132,100" stroke={`url(#${gradId})`} strokeWidth="3" strokeLinecap="round" />

            {/* Highlight */}
            <path d="M 60,45 L 140,45" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          </svg>
        </div>
      );

    case "torque":
    default:
      return (
        <div
          className={`relative flex items-center justify-center transition-all duration-700 ${
            interactive ? "group hover:scale-105 cursor-pointer" : ""
          } ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_15px_25px_rgba(201,168,106,0.25)] transition-transform duration-700 group-hover:scale-105"
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={gradientStops.light} />
                <stop offset="40%" stopColor={gradientStops.midLight} />
                <stop offset="70%" stopColor={gradientStops.mid} />
                <stop offset="100%" stopColor={gradientStops.deep} />
              </linearGradient>
            </defs>

            {/* Torc / Collar contour */}
            <path
              d="M 60,50 
                 C 25,95 30,150 100,165 
                 C 170,150 175,95 140,50"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Finial tips */}
            <circle cx="60" cy="50" r="14" fill={`url(#${gradId})`} />
            <circle cx="140" cy="50" r="14" fill={`url(#${gradId})`} />
            {/* Highlight */}
            <path
              d="M 50,85 C 36,115 45,148 100,158 C 155,148 164,115 150,85"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </div>
      );
  }
}
