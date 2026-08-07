# RÍÌTÀN — Project Journey, Architecture & Implementation Progress

> **Maison de Haute Joaillerie · Lagos & London**  
> *"The shape of a woman, rendered in gold."*  
> Sculptural 18k solid recycled gold rooted in Yoruba heritage and architectural modernity.

---

## 📖 1. Project Genesis & Brand Foundations

### 1.1 The Brand Vision & Heritage
The project originated from the creative briefs and Scope of Work (SOW):
- **`RIITAN Creative Brief.pdf`**: Defining the brand essence, visual identity, target audience, quiet luxury positioning, and brand storytelling.
- **`RÍÌTÀN — Brand Identity & Website Creative Brief.pdf`**: Establishing the high-jewelry aesthetic, four collection chapters, signature silhouettes, and bespoke atelier philosophy.
- **`Brand Identity and Web Dev SCOPE OF WORK (SOW).pdf`**: Defining the deliverables, interactive components, currency conversions, lookbook experience, and bespoke concierge booking systems.
- **Design Prototype Analysis**: A video walkthrough (`riitan-prototype-demo.mov`) demonstrating the dark emerald backdrop, gold gradients, interactive 3D-feel motifs, chapter tabs, and editorial typography.

### 1.2 Core Brand Pillars
- **Adornment as a Visual Language**: Moving beyond literal symbols into pure abstract sculptural forms.
- **Quiet Luxury & Permanence**: 18k solid recycled gold with substantial weight and zero mining waste.
- **Dual Atelier Presence**: Bridging ancestral lost-wax metallurgy in Lagos with high-precision fine jewelry engineering in London.
- **Made to Order**: Bespoke one-of-a-kind commissions, numbered casting editions (1–50), and private salon appointments.

---

## 🎨 2. Design System & Typography

### 2.1 Color Palette
- **Deep Heritage Emerald / Forest**: `#0D2218`, `#11271D`, `#163326`, `#081710`
- **Warm Champagne / Oat Silk**: `#F5EFE6`, `#EDE6D8`, `#FAF7F2`, `#E8DFC8`
- **Lustrous 18k Solid Gold Gradients**:
  - *Light Gold Highlight*: `#FFF1C5` / `#EBD49B`
  - *Base Gold*: `#C9A86A`
  - *Rich Gold*: `#B8924B`
  - *Deep Antique Gold*: `#8E6D30`
- **Charcoal Onyx**: `#111111`, `#191919`

### 2.2 Typography
- **Headings & Editorial Titles**: `Cormorant Garamond` (Editorial high-contrast serif with refined italic ligatures) and `Cinzel` (Architectural logomark serif).
- **Body & Data UI**: `Plus Jakarta Sans` (Clean, geometric modern sans with wide letter tracking `0.15em` to `0.35em`).

---

## 🏗️ 3. Architecture & Tech Stack

- **Framework**: Next.js 16.3.0 (App Router, Turbopack, React 19)
- **Language**: TypeScript 5 (Strict typing across data models and components)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Custom Design Tokens & Keyframe Animations
- **Icons & Graphics**: Lucide React + Bespoke Precision SVG Gold Vector Motifs + HTML5 Ambient Gold Canvas
- **Experience Model**: Single-page fluid storytelling architecture with smooth anchor routing and modal overlays.

---

## 💎 4. Built Components & Feature Modules

### 4.1 Ambient Gold Canvas (`src/components/GoldCanvas.tsx`)
- Shimmering particulate simulation with floating gold dust and undulating bezier silk waves on the dark emerald canvas.

### 4.2 Precision Gold Motifs (`src/components/GoldMotifs.tsx`)
- Scalable SVG jewelry visualizer with interactive lighting and alloy switching:
  - `split-loop`: The foundational open ring that never quite closes.
  - `soft-triangle`: Tactile rounded triangle with hollow chamfered core.
  - `double-flow`: Sinuous twin parallel ribbons moving in unison.
  - `talisman`: Indented shield with ancestral Yoruba sunburst relief.
  - `torque`: Architectural ergonomic collar.
  - `master-emblem`: High-carat sculptural central emblem.

### 4.3 Concierge Header (`src/components/Header.tsx`)
- Frosted glassmorphism header with wide-tracked `R Í Ì T À N` wordmark and brand insignia.
- **Live Multi-Currency Engine**: Real-time conversion across `USD ($)`, `GBP (£)`, `EUR (€)`, and `NGN (₦)`.
- **Responsive Mobile Drawer**: Opaque luxury drawer with backdrop blur, currency selectors, and quick Private Salon booking triggers.

### 4.4 Editorial & Interactive Hero Section (`src/components/HeroSection.tsx`)
- **Default View**: Defaults to the **Editorial Muse on Skin** on all devices.
- **Mobile Experience (Blended Background)**:
  - High-impact visual immersion above the fold with the editorial muse wearing the solid 18k gold necklace and earrings seamlessly blended into the background.
  - Multi-stage directional gradients (`from-[#0D2218] via-[#0D2218]/80 to-[#0D2218]/60`) ensuring high-contrast readability.
  - **Option 1 Floating Bottom-Right Thumb Dock (`[ ✦ MUSE | ✦ SCULPTURE ]`)**: Positioned in the mobile thumb zone for one-handed switching between the editorial portrait and the 3D golden emblem.
- **Desktop Experience (3D Parallax Showcase)**:
  - Balanced 2-column layout with generous vertical headroom (`pt-28 lg:pt-36`) to prevent clipping beneath the fixed navbar.
  - Interactive 3D parallax tilt on hover with dynamic specular glint light reflections.
  - Slim atelier pedigree assurance line and animated *"Scroll to Discover"* cue.

### 4.5 Signature Silhouettes (`src/components/SignatureSection.tsx`)
- In-depth showcase of the 3 iconic forms:
  1. `01 The Split Loop` (Minimal & Highly Recognizable)
  2. `02 The Soft Triangle` (Structure Without Complexity)
  3. `03 The Double Flow` (Movement Made Wearable)

### 4.6 Product Spotlight — Piece No. 01 (`src/components/SpotlightSection.tsx`)
- Focus on **The Split Loop Earring** (`$1,480 USD` / dynamic multi-currency).
- Alloy selector (*18k Yellow Gold*, *Rose Gold*, *White Gold*), specifications matrix (*9.4g solid pair, 18k recycled gold, made to order 3-4 weeks*), and direct commission enquiry action.

### 4.7 Collections & Four Chapters (`src/components/CollectionsSection.tsx`)
- Chapter organization:
  - **Chapter I — Presence**: Sculptural statement pieces and architectural collars.
  - **Chapter II — Tide**: Kinetic undulating ribbons and water-inspired drops.
  - **Chapter III — Lineage**: Ancestral memory and talismanic signet rings.
  - **Chapter IV — Gilt**: Essential daily modular bands and minimalist pendants.
- Category filtering (`All`, `Earrings`, `Necklaces`, `Cuffs`, `Rings`, `Bespoke`).
- Quick-View product modal triggers and direct commission actions.

### 4.8 High-Fashion Lookbook (`src/components/LookbookSection.tsx`)
- Editorial photography across Lagos and London campaign shoots.
- Interactive fullscreen Lightbox modal displaying styling credits, locations, and styling session booking triggers.

### 4.9 The Atelier & Sustainable Craftsmanship (`src/components/AtelierSection.tsx`)
- 4 Key Sustainability & Quality Pillars: `18k Solid Recycled Gold`, `100% Hand Finished`, `1 of 1 Made to Order`, `0% Mining Waste`.
- 4-Stage Lost-Wax Metallurgy breakdown:
  1. *Wax Sculpture*
  2. *Lost-Wax Burnout*
  3. *18k Solid Gold Cast*
  4. *Hand Luster & Hallmark*

### 4.10 House Services (`src/components/ServicesSection.tsx`)
- Dedicated booking cards for:
  - `01 Personal Styling` (Curated stack architecture)
  - `02 Private Consultations` (Guidance on form, scale and gold)
  - `03 Custom Sourcing & Bespoke` (One-of-a-kind royal amulets and rare gemstones)
  - `04 The Rental Edit` (Red carpet and milestone loans)

### 4.11 Interactive Modals & Reservation Drawer (`src/components/BookingModal.tsx` & `ProductModal.tsx`)
- Multi-step luxury consultation booking flow with automatic reference code generation.
- Piece customization with alloy toggles and full specifications.

### 4.12 Footer & Private Salon Dispatch (`src/components/FooterSection.tsx`)
- Private Salon newsletter register with instant confirmation feedback.
- Live dual-time clocks for **Lagos Atelier (WAT)** and **London Salon (GMT)**.

---

## 📱 5. Responsive Architecture & UX Optimization

| Viewport | Screen Width | Key UX Features |
| :--- | :--- | :--- |
| **Mobile** | `375px – 640px` | Blended hero backdrop, floating bottom thumb dock (`[ ✦ MUSE \| ✦ SCULPTURE ]`), opaque luxury navigation drawer, full-width touch-friendly CTAs (`min-h-[48px]`). |
| **Tablet** | `768px – 1024px` | Fluid 2-column grids, balanced typography scaling, integrated currency selector, touch-optimized product cards. |
| **Desktop** | `1200px – 1920px+` | Sticky glassmorphic header, 3D parallax tilt showcase with light glint reflections, animated gold canvas particles, smooth section anchor alignment (`scroll-mt-24`). |

---

## 🧹 6. File Structure & Assets

```
riitan/
├── public/
│   ├── brand-lookbook-hero.jpg      # Campaign editorial photograph
│   ├── riitan-muse-hero.jpg         # High-fashion muse wearing 18k solid gold jewellery
│   ├── logo-riitan.png              # High-resolution emblem logo
│   ├── wordmark-riitan.png          # High-resolution wordmark
│   ├── riitan-prototype-demo.mov    # Original brand prototype video
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css              # Design system tokens, gold gradients, animations
│   │   ├── layout.tsx               # Typography & SEO metadata
│   │   └── page.tsx                 # Master single-page assembly & state coordination
│   ├── components/
│   │   ├── AtelierSection.tsx       # Craftsmanship & 4-stage casting journey
│   │   ├── BookingModal.tsx         # Multi-step bespoke consultation drawer
│   │   ├── CollectionsSection.tsx   # Four Chapters catalog with category filtering
│   │   ├── FooterSection.tsx        # Salon dispatch & live Lagos/London clocks
│   │   ├── GoldCanvas.tsx           # Shimmering ambient canvas background
│   │   ├── GoldMotifs.tsx           # Vector gold jewelry motif engine
│   │   ├── Header.tsx               # Navigation & real-time multi-currency switcher
│   │   ├── HeroSection.tsx          # Blended mobile hero, 3D parallax & view switcher
│   │   ├── LookbookSection.tsx      # Editorial gallery & interactive lightbox
│   │   ├── ProductModal.tsx         # Detailed piece quick-view & customizer
│   │   ├── ServicesSection.tsx      # The four bespoke house services
│   │   ├── SignatureSection.tsx     # The three iconic silhouettes
│   │   └── SpotlightSection.tsx     # Foundational Piece No. 01 showcase
│   └── data/
│       └── riitanData.ts            # Data models, prices, chapters, services & lookbook
├── PROGRESS.md                      # Comprehensive journey & technical documentation
├── package.json
└── tsconfig.json
```

---

## ✅ 7. Verification & Quality Validation

- **Build Check**: `npx next build`
- **Compilation Status**: `✓ Compiled successfully`
- **TypeScript**: 0 errors
- **Linter**: 0 warnings
- **Multi-Device Testing**: Live browser verified on Mobile (iPhone 375×812), Tablet (iPad 768×1024), and Desktop (1440×900).
