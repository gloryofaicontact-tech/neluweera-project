"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X, ArrowRight, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FullProject {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Corporate" | "Retail";
  location: string;
  year: string;
  area: string;
  image: string;
  aspect: "portrait" | "landscape" | "wide";
  summary: string;
  description: string;
  materials: string[];
  features: string[];
}

const FULL_PROJECTS: FullProject[] = [
  {
    id: "alabaster-residence",
    title: "The Alabaster Residence",
    category: "Residential",
    location: "Colombo 07, Sri Lanka",
    year: "2025",
    area: "8,500 sq ft",
    image: "/images/project-residential.jpg",
    aspect: "portrait",
    summary: "Monolithic travertine volumes, natural linen textures, and tailored oak joinery creating a serene sanctuary.",
    description: "Designed for a discerning collector of contemporary art, this multi-level residence balances sweeping social loggias with intimate family retreats. Continuous floor-to-ceiling travertine cladding creates a seamless dialogue between lush interior courtyards and shaded verandas.",
    materials: ["Italian Roman Travertine", "Smoked European White Oak", "Raw Belgian Linen", "Unlacquered Architectural Bronze"],
    features: ["Internal Reflective Water Pavilion", "Custom Monolithic Kitchen Island", "Concealed Acoustic Ceiling Slats", "Integrated Art Illumination"],
  },
  {
    id: "lumina-pavilion",
    title: "Lumina Pavilion & Gallery",
    category: "Commercial",
    location: "Marina Bay, Singapore",
    year: "2024",
    area: "12,200 sq ft",
    image: "/images/project-commercial.jpg",
    aspect: "landscape",
    summary: "Sculptural concrete curves and diffused architectural illumination designed for contemporary cultural display.",
    description: "Commissioned as an international gallery and private foundation pavilion, Lumina choreographs movement through fluid curvilinear plaster forms. Diffused zenithal skylights provide soft, shadow-free illumination optimal for spatial installations.",
    materials: ["Board-Formed White Concrete", "Micro-Terrazzo Flooring", "Perforated Acoustic Ceilings", "Patinated Steel Vitrines"],
    features: ["Double-Height Curvilinear Atrium", "Parametric Daylight Diffusers", "Modular Spatial Partitioning", "Climate-Controlled Vault"],
  },
  {
    id: "kandy-hills-sanctuary",
    title: "Kandy Hills Sanctuary",
    category: "Hospitality",
    location: "Central Highlands, Sri Lanka",
    year: "2025",
    area: "16,000 sq ft",
    image: "/images/project-hospitality.jpg",
    aspect: "portrait",
    summary: "An immersive mountain retreat framing cloud forests through raw earth plaster and patinated brass detailing.",
    description: "Perched along an escarpment enveloped in mountain mist, this boutique luxury retreat prioritizes contemplative restoration. Every suite centers on panoramic glazed vistas, freestanding monolithic stone bathtubs, and open-hearth fireplaces.",
    materials: ["Hand-Applied Clay Plaster", "Reclaimed Ceylon Teak", "Local Granite Stone", "Oxidized Brass Accents"],
    features: ["Panoramic Forest-Facing Loggias", "Monolithic Hand-Carved Baths", "Custom Open-Fire Hearths", "Acoustic Insulation for Silence"],
  },
  {
    id: "vesper-penthouse",
    title: "Vesper Executive Penthouse",
    category: "Corporate",
    location: "Dubai Marina, UAE",
    year: "2024",
    area: "6,800 sq ft",
    image: "/images/project-corporate.jpg",
    aspect: "wide",
    summary: "Smoked oak paneling, bronze vitrines, and bespoke executive lounge architecture commanding skyline vistas.",
    description: "An expansive private family and executive office aerie overlooking the Arabian Gulf. The residence features tailored wall paneling with integrated brass reveals, private boardroom facilities, and bespoke leather banquette seating.",
    materials: ["Smoked European Oak Paneling", "Nero Marquina Marble", "Saddle Leather Upholstery", "Antiqued Bronze Glass"],
    features: ["Private Executive Boardroom", "360-Degree Panoramic Terraces", "Integrated Smart Lighting Controls", "Custom Cellar & Humidor"],
  },
  {
    id: "monolith-atelier",
    title: "The Brass & Monolith Atelier",
    category: "Retail",
    location: "Melbourne, Australia",
    year: "2025",
    area: "3,400 sq ft",
    image: "/images/project-retail.jpg",
    aspect: "portrait",
    summary: "A tactile flagship retail interior centered on hand-cast bronze display monoliths and limestone flooring.",
    description: "Created as an exclusive sensory boutique for a luxury fashion house. The spatial sequence encourages slow discovery through sculpted archways, raw limestone plinths, and warm architectural shadows.",
    materials: ["Sandblasted Limestone", "Hand-Cast Architectural Bronze", "Textured Lime Wash", "Silk Velvet Drapery"],
    features: ["Sculptural Display Monoliths", "Concealed Fitting Sanctuaries", "Bespoke Scent Diffuser Niches", "Precision Track Illumination"],
  },
  {
    id: "casa-travertino",
    title: "Casa Travertino",
    category: "Residential",
    location: "Galle Coast, Sri Lanka",
    year: "2024",
    area: "9,200 sq ft",
    image: "/images/project-coastal.jpg",
    aspect: "landscape",
    summary: "A coastal residence celebrating horizontal openness, shaded teak verandas, and marine-grade craftsmanship.",
    description: "Overlooking the Indian Ocean, Casa Travertino is designed to withstand oceanic salt winds while providing an oasis of calm. Large horizontal roof overhangs filter tropical sun while fostering continuous cross-ventilation.",
    materials: ["Honed Silver Travertine", "Weathered Plantation Teak", "Polished Terrazzo", "Off-White Stucco"],
    features: ["Infinity Horizon Lap Pool", "Shaded Deep Loggia Verandas", "Marine-Grade Joinery Detailing", "Internal Courtyard Gardens"],
  },
  {
    id: "heritage-tea-estate",
    title: "The Heritage Tea Sanctuary",
    category: "Hospitality",
    location: "Hatton, Sri Lanka",
    year: "2024",
    area: "14,500 sq ft",
    image: "/images/project-heritage.jpg",
    aspect: "portrait",
    summary: "Sensitive architectural reinvention of a colonial planter's bungalow into a world-class luxury boutique lodge.",
    description: "Restoring hundred-year-old architectural bones while introducing contemporary ensuite sanctuaries, underfloor heating, and refined brass joinery, preserving historical soul with modern luxury.",
    materials: ["Restored Teak & Satinwood", "Local River Stone", "Cast Iron Details", "Natural Wool & Linens"],
    features: ["Preserved Historic Fireplaces", "Conservatory Dining Pavilion", "Heated Ensuite Marble Baths", "Highland Tea Tasting Room"],
  },
  {
    id: "seraphim-lounge",
    title: "Seraphim Executive Lounge",
    category: "Corporate",
    location: "Singapore Financial District",
    year: "2025",
    area: "5,100 sq ft",
    image: "/images/project-lounge.jpg",
    aspect: "landscape",
    summary: "A discreet private members and wealth advisory salon prioritizing acoustic perfection and tactile craftsmanship.",
    description: "Designed for high-level confidential dialogue, this executive suite utilizes acoustic fluted oak, sound-dampening mohair drapery, and calibrated architectural lighting to create an oasis amidst the city.",
    materials: ["Fluted Smoked Oak", "Statuary White Marble", "Mohair Velvet", "Brushed Champagne Bronze"],
    features: ["Acoustically Isolated Suites", "Private Dining Boardroom", "Custom Monolithic Bar", "Discreet High-Security Access"],
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality", "Corporate", "Retail"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<FullProject | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    activeCategory === "All"
      ? FULL_PROJECTS
      : FULL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#171714] text-[#171714] dark:text-[#F5F3EE] flex flex-col justify-between selection:bg-[#41D2CB] selection:text-[#171714] transition-colors duration-500">
      <Navbar forceSolid />

      <main className="w-full pt-32 sm:pt-40 lg:pt-48 pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#919297]/15 dark:border-[#919297]/25">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
              <span className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-[#2AA8A1]">
                02 &mdash; ARCHIVE &amp; PORTFOLIO
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171714] dark:text-[#F5F3EE] font-normal leading-[1.02] tracking-tight"
            >
              A curated monograph of <br />
              <span className="italic font-light text-[#919297]">considered spaces.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-xl text-[#817C72] dark:text-[#B8B3A8] font-sans font-light leading-relaxed max-w-2xl pt-2"
            >
              Spanning high-calibre private residences, flagship commercial pavilions, and boutique hospitality retreats across Asia, the Middle East, and Australia.
            </motion.p>
          </div>

          {/* DEDICATED ARCHITECTURAL HERO BANNER */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/10] overflow-hidden bg-[#E5DED2] dark:bg-[#24231F] mt-12 sm:mt-16 group shadow-sm"
          >
            <Image
              src="/images/hero-projects.jpg"
              alt="Neluweera architectural portfolio and selected works"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171714]/60 via-[#171714]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase text-[#F5F3EE] drop-shadow-xs">
                CURATED PORTFOLIO &bull; MONOGRAPH ARCHIVE 2018–2026
              </span>
            </div>
          </motion.div>

          {/* Interactive Typology Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-14 pt-8 border-t border-[#919297]/15 dark:border-[#919297]/25">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              const count =
                cat === "All"
                  ? FULL_PROJECTS.length
                  : FULL_PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] sm:text-xs font-sans uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 border flex items-center gap-2 ${
                    isSelected
                      ? "border-[#171714] dark:border-[#F5F3EE] bg-[#171714] dark:bg-[#F5F3EE] text-[#F5F3EE] dark:text-[#171714]"
                      : "border-transparent text-[#919297] hover:text-[#171714] dark:hover:text-[#F5F3EE] hover:border-[#919297]/30"
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />}
                  <span>{cat}</span>
                  <span className={`text-[10px] ${isSelected ? "text-[#41D2CB] dark:text-[#2AA8A1]" : "text-[#919297]/70"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ASYMMETRICAL EDITORIAL PORTFOLIO GRID */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14"
            >
              {filtered.map((project, idx) => {
                const isEven = idx % 2 === 0;
                const isFullFeatured = idx % 5 === 0;
                const colSpan = isFullFeatured
                  ? "md:col-span-12"
                  : isEven
                  ? "md:col-span-7"
                  : "md:col-span-5 md:mt-12 lg:mt-16";

                const aspectClass = isFullFeatured
                  ? "aspect-[21/10]"
                  : isEven
                  ? "aspect-[4/3] sm:aspect-[16/11]"
                  : "aspect-[4/5]";

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`${colSpan} group flex flex-col cursor-pointer`}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Visual Photographic Container */}
                    <div className="relative w-full overflow-hidden bg-[#E5DED2] dark:bg-[#24231F] group">
                      <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category} interior by Neluweera Design Studio`}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#171714]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Monograph Index Pill */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                          <span className="text-[10px] font-sans uppercase tracking-[0.25em] px-3 py-1 bg-[#F5F3EE]/95 dark:bg-[#171714]/90 text-[#171714] dark:text-[#F5F3EE] backdrop-blur-xs font-medium inline-flex items-center gap-1.5 border border-[#919297]/15">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                            <span>0{idx + 1}</span>
                          </span>
                        </div>

                        {/* Interactive View Specifications Pill */}
                        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 px-4 py-2 bg-[#F5F3EE] dark:bg-[#171714] text-[#171714] dark:text-[#F5F3EE] text-xs font-sans uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                          <Eye className="w-3.5 h-3.5 text-[#2AA8A1]" />
                          <span>View Dossier</span>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Project Card Details */}
                    <div className="pt-6 flex flex-col space-y-2">
                      <div className="flex items-center justify-between text-xs font-sans text-[#817C72] dark:text-[#B8B3A8]">
                        <span className="tracking-[0.25em] uppercase text-[#2AA8A1] font-medium">
                          {project.category}
                        </span>
                        <div className="flex items-center space-x-3 text-[#919297]">
                          <span>{project.location}</span>
                          <span>&bull;</span>
                          <span>{project.year}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#171714] dark:text-[#F5F3EE] font-normal leading-snug group-hover:text-[#2AA8A1] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-[#919297] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>

                      <p className="text-xs sm:text-sm text-[#817C72] dark:text-[#B8B3A8] font-sans font-light leading-relaxed pt-1">
                        {project.summary}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.materials.slice(0, 2).map((m) => (
                          <span
                            key={m}
                            className="text-[10px] font-sans tracking-wider uppercase px-2.5 py-0.5 bg-[#FAF8F5] dark:bg-[#24231F] border border-[#919297]/15 text-[#817C72] dark:text-[#B8B3A8]"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* CONFIDENTIAL MONOGRAPHS & PRIVATE COMMISSIONS BANNER */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-28">
          <div className="p-10 sm:p-14 bg-[#171714] text-[#F5F3EE] border border-[#919297]/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#41D2CB]">
                CONFIDENTIAL ARCHIVE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F5F3EE] font-normal">
                Private residences under non-disclosure.
              </h3>
              <p className="text-xs sm:text-sm text-[#E5DED2]/70 font-sans font-light leading-relaxed">
                Many of our most celebrated residential and ultra-high-net-worth commissions remain strictly confidential.
                Private monographs and material folios can be presented in person at our Colombo, Singapore, or Dubai ateliers.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#41D2CB] text-[#171714] text-xs uppercase tracking-[0.25em] font-sans font-medium hover:bg-[#F5F3EE] transition-colors shrink-0 shadow-lg"
            >
              <span>REQUEST CONFIDENTIAL DOSSIER</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      {/* FULL PROJECT DOSSIER MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#171714]/85 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-[#F5F3EE] dark:bg-[#1E1D19] text-[#171714] dark:text-[#F5F3EE] shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-[#919297]/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-[#171714] text-[#F5F3EE] hover:bg-[#41D2CB] hover:text-[#171714] transition-colors focus:outline-hidden"
                aria-label="Close project dossier"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Large Feature Photograph */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#E5DED2] dark:bg-[#24231F] overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171714]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#41D2CB] block mb-1">
                    {selectedProject.category} &bull; {selectedProject.year}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5F3EE] font-normal">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Dossier Body Content */}
              <div className="p-6 sm:p-10 lg:p-12 space-y-10">
                {/* Meta Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[#919297]/20 text-xs font-sans">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#919297] block">
                      LOCATION
                    </span>
                    <span className="font-serif text-lg text-[#171714] dark:text-[#F5F3EE] block mt-1">
                      {selectedProject.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#919297] block">
                      TOTAL AREA
                    </span>
                    <span className="font-serif text-lg text-[#171714] dark:text-[#F5F3EE] block mt-1">
                      {selectedProject.area}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#919297] block">
                      TYPOLOGY
                    </span>
                    <span className="font-serif text-lg text-[#171714] dark:text-[#F5F3EE] block mt-1">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#919297] block">
                      STATUS
                    </span>
                    <span className="font-serif text-lg text-[#2AA8A1] block mt-1">
                      Completed Commission
                    </span>
                  </div>
                </div>

                {/* Narrative */}
                <div className="space-y-4">
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1] font-medium block">
                    ARCHITECTURAL ESSAY &amp; BRIEF
                  </span>
                  <p className="text-sm sm:text-base text-[#817C72] dark:text-[#B8B3A8] font-sans font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Material Palette & Key Elements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1] font-medium block">
                      PRIMARY MATERIALITY
                    </span>
                    <ul className="space-y-2">
                      {selectedProject.materials.map((m) => (
                        <li key={m} className="text-xs sm:text-sm text-[#171714] dark:text-[#F5F3EE] font-sans flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1] font-medium block">
                      BESPOKE ARCHITECTURAL FEATURES
                    </span>
                    <ul className="space-y-2">
                      {selectedProject.features.map((f) => (
                        <li key={f} className="text-xs sm:text-sm text-[#171714] dark:text-[#F5F3EE] font-sans flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-[#919297]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#919297] font-sans">
                    Ref: NDS-{selectedProject.id.toUpperCase()}-2026
                  </span>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-[#171714] dark:bg-[#41D2CB] text-[#F5F3EE] dark:text-[#171714] px-6 py-3 font-medium hover:bg-[#41D2CB] dark:hover:bg-[#F5F3EE] transition-colors"
                  >
                    <span>Inquire About Similar Commission</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
