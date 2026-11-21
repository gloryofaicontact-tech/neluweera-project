"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DisciplineDetail {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
  typologies: string[];
  materialFocus: string;
}

const DISCIPLINES: DisciplineDetail[] = [
  {
    number: "01",
    title: "Interior Architecture",
    subtitle: "Spatial Restructuring & Volumetric Articulation",
    summary:
      "We re-engineer interior envelopes, ceiling topographies, and vertical circulation to establish pure volumetric balance. Working closely with structural engineers, we remove architectural barriers to reveal noble spatial sequences.",
    deliverables: [
      "Volumetric Reconfiguration & Partition Removal",
      "Floor-to-Ceiling Height Maximization & Concealed MEP",
      "Skylight, Lightwell & Chiaroscuro Daylight Studies",
      "Structural Thresholds & Continuous Travertine Reveals",
    ],
    typologies: ["Heritage Villa Renovations", "Multi-Storey Penthouses", "Cultural Pavilions"],
    materialFocus: "Structural stone, board-formed concrete, concealed steel frameworks.",
  },
  {
    number: "02",
    title: "Residential Interior Design",
    subtitle: "Private Sanctuaries & Sensory Living",
    summary:
      "Crafting private family homes and luxury retreats that reflect the daily rituals, contemplation, and hospitality of the owners. We harmonize tactile millwork, culinary architectures, and ensuite sanctuaries with human intimacy.",
    deliverables: [
      "Complete Master Living & Social Loggia Design",
      "Bespoke Culinary Architectures & Sculleries",
      "Monolithic Bathroom & Spa Sanctuaries",
      "Private Wardrobe Dressing Suites & Valets",
    ],
    typologies: ["Coastal Villas", "High-End Urban Residences", "Mountain Sanctuaries"],
    materialFocus: "Unlacquered bronze, raw European oak, honed limestone, washed Belgian linen.",
  },
  {
    number: "03",
    title: "Commercial & Cultural Spaces",
    subtitle: "Brand Ateliers & Exhibition Pavilions",
    summary:
      "Designing high-calibre public environments that celebrate brand prestige, intuitive guest navigation, and immersive spatial storytelling. Every touchpoint is engineered to foster memorable sensory impressions.",
    deliverables: [
      "Flagship Fashion & Design Retail Ateliers",
      "Contemporary Art Galleries & Exhibition Halles",
      "Creative Agency Headquarters & Studios",
      "Acoustic Engineering & Directional Illumination",
    ],
    typologies: ["Flagship Retail Boutiques", "Private Art Galleries", "Design Headquarters"],
    materialFocus: "Sculptural plaster, micro-terrazzo, patinated architectural metals.",
  },
  {
    number: "04",
    title: "Corporate & Hospitality Interiors",
    subtitle: "Executive Salons & Boutique Retreats",
    summary:
      "Creating discreet sanctuaries for high-level business dialogue, restorative hospitality retreats, and luxury private lounges. We prioritize acoustic isolation, bespoke joinery, and effortless operational flow.",
    deliverables: [
      "Boutique Hotel Suites & Reception Lounges",
      "Executive Boardrooms & Confidential Advisory Suites",
      "Private Members Bars & Fine Dining Salons",
      "Wellness Pavilions & Hydrotherapy Suites",
    ],
    typologies: ["Boutique Hotels", "Executive Penthouses", "Private Banking Salons"],
    materialFocus: "Smoked oak paneling, acoustic mohair velvet, Nero Marquina marble.",
  },
  {
    number: "05",
    title: "Bespoke Furniture & Object Design",
    subtitle: "Custom Monoliths & Artisanal Commissions",
    summary:
      "When market-available pieces fail to achieve the required tectonic precision, our studio drafts custom monolithic dining tables, sculptural bronze light sculptures, and integrated cabinetry crafted by master artisans.",
    deliverables: [
      "Monolithic Stone Dining & Coffee Tables",
      "Hand-Cast Bronze Chandeliers & Sconces",
      "Integrated Architectural Wall Millwork",
      "Curation of Fine Art, Ceramics & Rare Textiles",
    ],
    typologies: ["Custom Residential Objects", "Flagship Display Plinths", "Private Art Portfolios"],
    materialFocus: "Direct artisan sourcing of rare marbles, patinated brass, and ancient hardwoods.",
  },
];

const FAQS = [
  {
    q: "How does Neluweera engage with international clients?",
    a: "We maintain active ateliers in Colombo, Singapore, and Dubai. Our team manages commissions worldwide through a hybrid framework: physical site immersions, stone quarry inspections, and virtual 3D walkthroughs, backed by dedicated local contractor supervision.",
  },
  {
    q: "What is the typical timeline for a full architectural interior commission?",
    a: "A comprehensive residential or commercial project typically spans 6 to 14 months, depending on structural scope, scale, and custom artisan fabrication schedules. We provide precise milestone schedules at the outset.",
  },
  {
    q: "Do you fabricate custom furniture pieces exclusively for your projects?",
    a: "Yes. Every piece developed by Neluweera Object Atelier is individually drafted and numbered for a specific spatial commission. We never mass-produce or duplicate signature client pieces.",
  },
  {
    q: "How do you coordinate with our existing architect or builder?",
    a: "We welcome close collaboration with base-building architects, structural engineers, and general contractors. We integrate our comprehensive interior architectural drawing sets directly into BIM and CAD workflows.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#171714] flex flex-col justify-between selection:bg-[#41D2CB] selection:text-[#171714]">
      <Navbar forceSolid />

      <main className="w-full pt-32 sm:pt-40 lg:pt-48 pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 border-b border-[#919297]/15">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
              <span className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-[#2AA8A1]">
                03 &mdash; EXPERTISE &amp; CAPABILITIES
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171714] font-normal leading-[1.02] tracking-tight"
            >
              Spatial disciplines, <br />
              <span className="italic font-light text-[#919297]">executed with precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-xl text-[#817C72] font-sans font-light leading-relaxed max-w-2xl pt-2"
            >
              From structural reconfiguration through bespoke bronze casting and private art curation,
              we shepherd commissions through complete architectural synthesis.
            </motion.p>
          </div>
        </section>

        {/* 5 COMPREHENSIVE SERVICE MODULES */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 space-y-20">
          {DISCIPLINES.map((d, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={d.number}
                className="p-8 sm:p-12 lg:p-16 bg-[#FAF8F5] border border-[#919297]/20 relative overflow-hidden group hover:border-[#41D2CB] transition-colors"
              >
                {/* Floating Big Index Number Watermark */}
                <span className="absolute -bottom-8 -right-4 font-serif text-[120px] sm:text-[180px] text-[#919297]/10 select-none pointer-events-none font-bold">
                  {d.number}
                </span>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Title & Narrative */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="font-serif text-2xl sm:text-3xl text-[#2AA8A1]">
                        {d.number}
                      </span>
                      <span className="w-6 h-[1.5px] bg-[#41D2CB]" />
                      <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#919297]">
                        DISCIPLINE
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171714] font-normal leading-tight">
                      {d.title}
                    </h2>

                    <p className="text-xs uppercase tracking-[0.2em] text-[#919297] font-sans font-medium">
                      {d.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#817C72] font-sans font-light leading-relaxed">
                      {d.summary}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#2AA8A1] block font-medium mb-1">
                        MATERIAL PALETTE FOCUS
                      </span>
                      <p className="text-xs font-sans text-[#171714] font-light">
                        {d.materialFocus}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables & Typologies */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-8 lg:border-l lg:border-[#919297]/20 lg:pl-10">
                    <div className="space-y-4">
                      <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1] font-medium block">
                        TECHNICAL SCOPE &amp; DELIVERABLES
                      </span>
                      <ul className="space-y-3">
                        {d.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#171714] font-sans">
                            <div className="w-4 h-4 rounded-full bg-[#41D2CB]/20 flex items-center justify-center text-[#2AA8A1] shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-[#919297]/15 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#919297] block">
                          REPRESENTATIVE TYPOLOGIES
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {d.typologies.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-sans px-2.5 py-1 bg-[#F5F3EE] border border-[#919297]/20 text-[#817C72]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="p-3 rounded-full bg-[#171714] text-[#F5F3EE] hover:bg-[#41D2CB] hover:text-[#171714] transition-colors ml-4 shrink-0"
                        aria-label={`Inquire about ${d.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-[#919297]/20">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1] block mb-3">
              CONSULTANCY FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#171714] font-normal tracking-tight">
              Inquiries regarding engagement.
            </h2>
          </div>

          <div className="max-w-4xl divide-y divide-[#919297]/20 border-y border-[#919297]/20">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;

              return (
                <div key={faq.q} className="py-6 sm:py-8">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between text-left focus:outline-hidden group"
                  >
                    <span className="font-serif text-xl sm:text-2xl text-[#171714] group-hover:text-[#2AA8A1] transition-colors pr-6">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-[#919297]/30 flex items-center justify-center transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 bg-[#41D2CB]/20 border-[#41D2CB]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-[#171714]" />
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 text-xs sm:text-sm text-[#817C72] font-sans font-light leading-relaxed pr-8"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM ACTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
          <div className="p-10 sm:p-14 bg-[#171714] text-[#F5F3EE] flex flex-col sm:flex-row items-center justify-between gap-8 border border-[#919297]/20">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F3EE]">
                Begin an architectural engagement
              </h3>
              <p className="text-xs sm:text-sm text-[#E5DED2]/70 font-sans font-light">
                Our directors are available for initial spatial strategy sessions and project assessments.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#41D2CB] text-[#171714] text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#F5F3EE] transition-colors shrink-0 shadow-lg"
            >
              <span>INITIATE CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
