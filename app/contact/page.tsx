"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MessageSquare, ArrowRight, CheckCircle2, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    typology: "Residential Architecture",
    location: "",
    timeline: "Within 6 months",
    message: "",
  });

  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                04 &mdash; CORRESPONDENCE &amp; INQUIRIES
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#171714] dark:text-[#F5F3EE] font-normal leading-[1.02] tracking-tight"
            >
              Start a <br />
              <span className="italic font-light text-[#919297]">conversation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-xl text-[#817C72] dark:text-[#B8B3A8] font-sans font-light leading-relaxed max-w-2xl pt-2"
            >
              We welcome commissions for residential, commercial, hospitality, and corporate interior architecture worldwide.
              Our partners review all initial inquiries personally within two business days.
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
              src="/images/hero-contact.jpg"
              alt="Neluweera studio consultation sanctuary and reception lounge"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171714]/60 via-[#171714]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#41D2CB]" />
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase text-[#F5F3EE] drop-shadow-xs">
                STUDIO APPOINTMENTS &bull; PRIVATE CONSULTATION SANCTUARIES
              </span>
            </div>
          </motion.div>
        </section>

        {/* TWO-COLUMN DIRECTORY & INTERACTIVE FORM */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: STUDIO DIRECTORY & DIRECT COMMUNICATIONS */}
            <div className="lg:col-span-5 space-y-12">
              {/* Direct Channels Cards */}
              <div className="space-y-4">
                <span className="text-[11px] font-sans font-medium tracking-[0.25em] uppercase text-[#2AA8A1] block mb-6">
                  DIRECT ACCESS
                </span>

                <a
                  href="mailto:inquiries@neluweera.com"
                  className="p-6 bg-[#FAF8F5] dark:bg-[#1E1D19] border border-[#919297]/20 dark:border-[#919297]/25 flex items-center justify-between hover:border-[#41D2CB] transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#E5DED2]/50 dark:bg-[#24231F] flex items-center justify-center text-[#171714] dark:text-[#F5F3EE] group-hover:bg-[#41D2CB] group-hover:text-[#171714] transition-colors">
                      <Mail className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#919297] block">
                        DIRECT INQUIRIES
                      </span>
                      <span className="font-serif text-lg text-[#171714] dark:text-[#F5F3EE] group-hover:text-[#2AA8A1] transition-colors">
                        inquiries@neluweera.com
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#919297] group-hover:text-[#41D2CB] transition-colors" />
                </a>

                <a
                  href="tel:+94112345678"
                  className="p-6 bg-[#FAF8F5] dark:bg-[#1E1D19] border border-[#919297]/20 dark:border-[#919297]/25 flex items-center justify-between hover:border-[#41D2CB] transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#E5DED2]/50 dark:bg-[#24231F] flex items-center justify-center text-[#171714] dark:text-[#F5F3EE] group-hover:bg-[#41D2CB] group-hover:text-[#171714] transition-colors">
                      <Phone className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#919297] block">
                        STUDIO SWITCHBOARD
                      </span>
                      <span className="font-serif text-lg text-[#171714] dark:text-[#F5F3EE] group-hover:text-[#2AA8A1] transition-colors">
                        +94 11 234 5678
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#919297] group-hover:text-[#41D2CB] transition-colors" />
                </a>

                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-[#FAF8F5] dark:bg-[#1E1D19] border border-[#919297]/20 dark:border-[#919297]/25 flex items-center justify-between hover:border-[#41D2CB] transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#E5DED2]/50 dark:bg-[#24231F] flex items-center justify-center text-[#171714] dark:text-[#F5F3EE] group-hover:bg-[#41D2CB] group-hover:text-[#171714] transition-colors">
                      <MessageSquare className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#919297] block">
                        WHATSAPP DIRECT
                      </span>
                      <span className="font-serif text-lg text-[#171714] dark:text-[#F5F3EE] group-hover:text-[#2AA8A1] transition-colors">
                        +94 77 123 4567
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#919297] group-hover:text-[#41D2CB] transition-colors" />
                </a>
              </div>

              {/* Studio Locations List */}
              <div className="pt-8 border-t border-[#919297]/20 space-y-8">
                <span className="text-[11px] font-sans font-medium tracking-[0.25em] uppercase text-[#2AA8A1] block">
                  GLOBAL ATELIERS
                </span>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-4 h-4 text-[#41D2CB] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-xl text-[#171714] dark:text-[#F5F3EE]">Colombo Flagship Atelier</h4>
                      <p className="text-xs sm:text-sm text-[#817C72] dark:text-[#B8B3A8] font-sans leading-relaxed">
                        No. 48 Ward Place, Cinnamon Gardens, Colombo 00700, Sri Lanka
                      </p>
                      <p className="text-xs font-sans text-[#919297] mt-1">Monday – Friday, 09:00 – 18:00 (IST)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-4 h-4 text-[#41D2CB] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-xl text-[#171714] dark:text-[#F5F3EE]">Singapore Design Studio</h4>
                      <p className="text-xs sm:text-sm text-[#817C72] dark:text-[#B8B3A8] font-sans leading-relaxed">
                        Marina Bay Financial Centre Tower 1, 018981 Singapore
                      </p>
                      <p className="text-xs font-sans text-[#919297] mt-1">By prior appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-4 h-4 text-[#41D2CB] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-xl text-[#171714] dark:text-[#F5F3EE]">Dubai Practice</h4>
                      <p className="text-xs sm:text-sm text-[#817C72] dark:text-[#B8B3A8] font-sans leading-relaxed">
                        Gate Precinct Building 4, DIFC, Dubai, UAE
                      </p>
                      <p className="text-xs font-sans text-[#919297] mt-1">By prior appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONSULTATION INQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 lg:p-14 bg-[#FAF8F5] dark:bg-[#1E1D19] border border-[#919297]/20 dark:border-[#919297]/25 shadow-xs transition-colors duration-500">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#41D2CB]/20 text-[#2AA8A1] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#171714] dark:text-[#F5F3EE]">
                      Inquiry Transmitted
                    </h3>

                    <p className="text-sm sm:text-base text-[#817C72] dark:text-[#B8B3A8] font-sans font-light leading-relaxed max-w-md mx-auto">
                      Thank you for sharing your project vision with Neluweera Design Studio. A partner will review your brief and contact you within two business days.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#171714] dark:text-[#F5F3EE] border-b border-[#171714] dark:border-[#F5F3EE] pb-1 hover:text-[#2AA8A1] hover:border-[#41D2CB] transition-colors"
                    >
                      <span>SEND ANOTHER MESSAGE</span>
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#2AA8A1] font-medium block">
                        COMMISSION INQUIRY DOSSIER
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#171714] dark:text-[#F5F3EE] font-normal">
                        Tell us about your space.
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297] block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alistair Vance"
                          className="w-full px-4 py-3 bg-[#F5F3EE] dark:bg-[#24231F] border border-[#919297]/25 text-sm font-sans text-[#171714] dark:text-[#F5F3EE] placeholder-[#919297]/60 focus:outline-hidden focus:border-[#41D2CB] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297] block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. a.vance@studio.com"
                          className="w-full px-4 py-3 bg-[#F5F3EE] dark:bg-[#24231F] border border-[#919297]/25 text-sm font-sans text-[#171714] dark:text-[#F5F3EE] placeholder-[#919297]/60 focus:outline-hidden focus:border-[#41D2CB] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297] block">
                          Telephone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+94 77 000 0000"
                          className="w-full px-4 py-3 bg-[#F5F3EE] dark:bg-[#24231F] border border-[#919297]/25 text-sm font-sans text-[#171714] dark:text-[#F5F3EE] placeholder-[#919297]/60 focus:outline-hidden focus:border-[#41D2CB] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297] block">
                          Project Location (City, Country)
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Colombo, Sri Lanka / Singapore"
                          className="w-full px-4 py-3 bg-[#F5F3EE] dark:bg-[#24231F] border border-[#919297]/25 text-sm font-sans text-[#171714] dark:text-[#F5F3EE] placeholder-[#919297]/60 focus:outline-hidden focus:border-[#41D2CB] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297] block">
                          Project Typology
                        </label>
                        <select
                          name="typology"
                          value={formData.typology}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#F5F3EE] dark:bg-[#24231F] border border-[#919297]/25 text-sm font-sans text-[#171714] dark:text-[#F5F3EE] focus:outline-hidden focus:border-[#41D2CB] transition-colors"
                        >
                          <option>Residential Architecture &amp; Villa</option>
                          <option>Commercial Atelier &amp; Gallery</option>
                          <option>Boutique Hospitality &amp; Retreat</option>
                          <option>Corporate Penthouse &amp; Salon</option>
                          <option>Bespoke Furniture &amp; Millwork</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297] block">
                          Anticipated Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#F5F3EE] dark:bg-[#24231F] border border-[#919297]/25 text-sm font-sans text-[#171714] dark:text-[#F5F3EE] focus:outline-hidden focus:border-[#41D2CB] transition-colors"
                        >
                          <option>Immediate / Within 3 months</option>
                          <option>Within 6 months</option>
                          <option>6 to 12 months</option>
                          <option>Exploratory / Concept Phase</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#919297] block">
                        Project Scope &amp; Vision *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share details regarding structural scope, approximate square footage, site context, or specific materiality ambitions..."
                        className="w-full px-4 py-3 bg-[#F5F3EE] dark:bg-[#24231F] border border-[#919297]/25 text-sm font-sans text-[#171714] dark:text-[#F5F3EE] placeholder-[#919297]/60 focus:outline-hidden focus:border-[#41D2CB] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-[11px] font-sans text-[#919297]">
                        All submissions are treated with strict confidentiality.
                      </span>

                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[#171714] dark:bg-[#41D2CB] text-[#F5F3EE] dark:text-[#171714] text-xs uppercase tracking-[0.25em] font-sans font-medium hover:bg-[#41D2CB] dark:hover:bg-[#F5F3EE] transition-all duration-300 shadow-md w-full sm:w-auto justify-center"
                      >
                        <span>TRANSMIT INQUIRY</span>
                        <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
