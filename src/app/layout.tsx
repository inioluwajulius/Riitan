import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RÍÌTÀN — Sculptural Gold for a Lasting Presence | Maison de Haute Joaillerie",
  description:
    "Adornment as a visual language. Sculptural 18k solid gold jewellery rooted in Yoruba heritage and timeless modern form.",
  keywords: [
    "RIITAN",
    "RÍÌTÀN",
    "High Jewellery",
    "Sculptural Gold",
    "18k Solid Gold",
    "Bespoke Jewellery",
    "Quiet Luxury",
    "Yoruba Heritage",
    "Fine Jewellery Lagos London",
  ],
  authors: [{ name: "RÍÌTÀN Haute Joaillerie" }],
  openGraph: {
    title: "RÍÌTÀN — Sculptural Gold for a Lasting Presence",
    description:
      "One silhouette, infinitely worn. Handcrafted 18k solid recycled gold rooted in heritage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="bg-[#F5EFE6] text-[#121E17] font-sans antialiased selection:bg-[#C9A86A]/30 selection:text-[#0D2218]">
        {children}
      </body>
    </html>
  );
}
