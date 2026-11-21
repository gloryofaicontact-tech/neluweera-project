"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PILLARS = [
  {
    number: "01",
    title: "Architectural Rigor",
    description:
      "We treat interior spaces as spatial volumes, not decorative surfaces. Spatial choreographies are tuned to human proportion, structural envelopes, and unencumbered movement.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Material Authenticity",
    description:
      "Our work privileges natural stone, unlacquered bronze, smoked European oak, and tactile woven textiles that develop richer patinas over decades of life.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Chiaroscuro & Light",
    description:
      "Light is our fundamental building medium. We sculpt deep reveals, diffuse skylights, and shadow gradients that transform spaces dynamically from morning to nightfall.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Enduring Longevity",
    description:
      "Rejecting fleeting stylistic cycles, our studio crafts environments that remain relevant, calming, and deeply resonant for generations.",
    icon: ShieldCheck,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Spatial Inception & Choreography",
    duration: "Weeks 1 – 4",
    description:
      "Deep architectural exploration into site topography, natural illumination axes, daily rituals, and master volumetric layout.",
    deliverables: ["Volumetric Layout Studies", "Circulation Flow Diagrams", "Natural Illumination Modeling"],
  },
  {
    step: "02",
    phase: "Material Inquiry & Detailing",
    duration: "Weeks 5 – 10",
    description:
      "Tactile curation of custom stone slabs, hand-cast metal samples, joinery sections, and tailored millwork technical drawings.",
    deliverables: ["1:1 Scale Millwork Details", "Physical Material Moodboard", "Lighting & Acoustic Schedules"],
  },
  {
    step: "03",
    phase: "Artisan Fabrication & Execution",
    duration: "Weeks 11 – 24",
    description:
      "Rigorous site oversight and direct collaboration with master stone masons, bronze smiths, and cabinetmakers.",
    deliverables: ["On-Site Quality Supervision", "Custom Monolith Fabrication", "Mechanical Integration Oversight"],
  },
  {
    step: "04",
    phase: "Curation, Styling & Commissioning",
    duration: "Weeks 25 – 28",
    description:
      "Curating fine art acquisitions, commissioning bespoke objects, lighting scene tuning, and complete atmospheric commissioning.",
    deliverables: ["Fine Art Placement", "Sensory Textile Layering", "Comprehensive As-Built Monograph"],
  },
];

const LEADERSHIP = [
  {
    name: "Ar. Nelu Weera",
    role: "Founder & Principal Architect",
    bio: "Educated in architectural theory and structural craftsmanship, Nelu directs the studio's spatial philosophy and oversees every bespoke commission with unwavering devotion to material balance.",
    location: "Colombo / Singapore",
  },
  {
    name: "Elena Vance",
    role: "Director of Interior Architecture",
    bio: "Specializing in high-end residential and cultural pavilions, Elena guides structural reconfiguration, parametric ceiling detailing, and holistic interior envelope execution.",
    location: "Singapore",
  },
  {
    name: "Darius Kaelen",
    role: "Head of Furniture & Materiality",
    bio: "A master of artisanal joinery and rare stones, Darius orchestrates custom furniture fabrication, bronze patina development, and global procurement.",
    location: "Dubai",
  },
];

export default function StudioPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#171714] flex flex-col justify-between selection:bg-[#41D2CB] selection:text-[#171714]">
      {/* SECTION 01: Navbar */}
      <Navbar forceSolid />

      <main className="w-full pt-32 sm:pt-40 lg:pt-48">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28 border-b border-[#919297]/15">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1.5px] bg-[#41D2CB]" />
              <span className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-[#2AA8A1]">
                01 &mdash; STUDIO PROFILE &amp; MONOGRAPH
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171714] font-normal leading-[1.02] tracking-tight"
            >
              Architecture of intimacy, <br />
              <span className="italic font-light text-[#919297]">proportions of permanence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-xl text-[#817C72] font-sans font-light leading-relaxed max-w-2xl pt-2"
            >
              Neluweera Design Studio is an international interior architecture practice founded on the belief that
              thoughtful space shapes human emotion, quiet contemplation, and enduring luxury.
            </motion.p>
          </div>

          {/* Key Metric Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-16 border-t border-[#919297]/20">
            <div>
              <span className="font-serif text-4xl sm:text-5xl text-[#171714] block flex items-baseline gap-2">
                45+ <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
              </span>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#919297] mt-1 block">
                Commissions Delivered
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl text-[#171714] block flex items-baseline gap-2">
                03 <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
              </span>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#919297] mt-1 block">
                Global Studios
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl text-[#171714] block flex items-baseline gap-2">
                12 <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
              </span>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#919297] mt-1 block">
                Industry Citations
              </span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl text-[#171714] block flex items-baseline gap-2">
                100% <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
              </span>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#919297] mt-1 block">
                Bespoke Joinery &amp; Detail
              </span>
            </div>
          </div>
        </section>

        {/* ASYMMETRICAL EDITORIAL ESSAY SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Composition */}
            <div className="lg:col-span-6 relative aspect-[4/5] bg-[#E5DED2] overflow-hidden group">
              <Image
                src="/images/studio-craft.jpg"
                alt="Tactile architectural joinery and natural stone craft"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171714]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-sans text-[#F5F3EE]">
                <span className="tracking-[0.2em] uppercase text-[10px]">STUDIO ATELIER ARCHIVE</span>
                <span className="text-[#41D2CB]">EST. 2018</span>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1] block">
                THE STUDIO ETHOS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171714] leading-tight font-normal">
                A relentless pursuit of spatial silence and material warmth.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#817C72] font-sans font-light leading-relaxed">
                <p>
                  At Neluweera, we operate at the intersection of architectural discipline and sensory intimacy.
                  We do not view interiors as an afterthought of drywall and surface finishes; rather, we sculpt the
                  volumetric skeleton, directing natural light to form quiet, atmospheric sanctuaries.
                </p>
                <p>
                  Every commission begins with deep listening—to the client’s private cadence, to the geographical
                  climate, and to the inherent character of the building structure. We collaborate with master masons,
                  timber artisans, and bronze smiths across Sri Lanka, Europe, and Asia to manifest bespoke elements
                  found nowhere else.
                </p>
              </div>

              <blockquote className="border-l-2 border-[#41D2CB] pl-6 py-2 font-serif text-xl sm:text-2xl text-[#171714] italic font-light">
                &ldquo;True luxury is not clamorous decoration. It is the deep quiet of authentic proportions,
                flawless alignment, and surfaces that welcome human touch.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* 4 CORE DESIGN PILLARS */}
        <section className="w-full py-24 sm:py-36 bg-[#E5DED2]/25 border-y border-[#919297]/15">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-16 sm:mb-20">
              <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1] block mb-3">
                FOUNDATIONAL PRINCIPLES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#171714] font-normal tracking-tight">
                The four pillars of our practice.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="p-8 bg-[#F5F3EE] border border-[#919297]/15 flex flex-col justify-between space-y-8 hover:border-[#41D2CB] transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl text-[#2AA8A1] font-light">
                        {pillar.number}
                      </span>
                      <Icon className="w-5 h-5 text-[#919297] group-hover:text-[#41D2CB] transition-colors stroke-[1.5]" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl text-[#171714] font-normal">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#817C72] font-sans font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* METHODOLOGICAL FRAMEWORK / 4-PHASE PROCESS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#919297]/15">
            <div>
              <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#2AA8A1] block mb-3">
                METHODOLOGY &amp; RIGOR
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#171714] font-normal tracking-tight">
                The Architectural Journey.
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#817C72] font-sans max-w-md">
              A structured, transparent lifecycle engineered to preserve design purity from initial conception to physical completion.
            </p>
          </div>

          <div className="space-y-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 sm:p-10 border border-[#919297]/20 bg-[#FAF8F5] hover:border-[#41D2CB] transition-colors"
              >
                <div className="lg:col-span-4 flex items-baseline space-x-6">
                  <span className="font-serif text-3xl sm:text-4xl text-[#41D2CB] font-light">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#171714] font-normal">
                      {step.phase}
                    </h3>
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#919297] mt-1 block">
                      {step.duration}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex items-center">
                  <p className="text-xs sm:text-sm text-[#817C72] font-sans font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#919297]/15 pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-center">
                  <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1] font-medium block mb-2">
                    CORE DELIVERABLES
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.map((d) => (
                      <li key={d} className="text-xs text-[#292824] font-sans flex items-center gap-2">
                        <span className="w-1.5 h-[1.5px] bg-[#41D2CB]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRACTICE LEADERSHIP */}
        <section className="w-full py-24 sm:py-36 bg-[#171714] text-[#F5F3EE]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-16">
              <span className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-[#41D2CB] block mb-3">
                STUDIO DIRECTORS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F3EE] font-normal tracking-tight">
                Leadership &amp; Creative Direction.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LEADERSHIP.map((leader) => (
                <div
                  key={leader.name}
                  className="p-8 border border-[#F5F3EE]/10 bg-[#292824]/30 space-y-6 hover:border-[#41D2CB]/60 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#41D2CB]">
                      {leader.location}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F3EE] font-normal">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-sans text-[#919297] tracking-wider uppercase">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#E5DED2]/70 font-sans font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL ATELIERS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#919297]/20 pt-16">
            <div className="space-y-3">
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1]">
                FLAGSHIP ATELIER
              </span>
              <h4 className="font-serif text-2xl text-[#171714]">Colombo</h4>
              <p className="text-xs sm:text-sm text-[#817C72] font-sans leading-relaxed">
                No. 48 Ward Place, Cinnamon Gardens <br />
                Colombo 00700, Sri Lanka
              </p>
              <p className="text-xs font-sans text-[#919297]">+94 11 234 5678</p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1]">
                SOUTHEAST ASIA STUDIO
              </span>
              <h4 className="font-serif text-2xl text-[#171714]">Singapore</h4>
              <p className="text-xs sm:text-sm text-[#817C72] font-sans leading-relaxed">
                Marina Bay Financial Centre Tower 1 <br />
                018981 Singapore
              </p>
              <p className="text-xs font-sans text-[#919297]">+65 6789 0123</p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#2AA8A1]">
                MIDDLE EAST ATELIER
              </span>
              <h4 className="font-serif text-2xl text-[#171714]">Dubai</h4>
              <p className="text-xs sm:text-sm text-[#817C72] font-sans leading-relaxed">
                Gate Precinct Building 4, DIFC <br />
                Dubai, United Arab Emirates
              </p>
              <p className="text-xs font-sans text-[#919297]">+971 4 567 8901</p>
            </div>
          </div>

          {/* Action Prompt */}
          <div className="mt-20 p-10 bg-[#FAF8F5] border border-[#919297]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-2xl text-[#171714]">Commence a conversation</h3>
              <p className="text-xs sm:text-sm text-[#817C72] font-sans">
                Our partners are available for confidential consultations on upcoming commissions.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#171714] text-[#F5F3EE] text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#41D2CB] hover:text-[#171714] transition-colors shrink-0"
            >
              <span>SCHEDULE CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
