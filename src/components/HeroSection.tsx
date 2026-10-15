"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, Wind, ShieldCheck, Compass, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-mamasa-pattern overflow-hidden"
    >
      {/* Decorative Floating Wind SVG Accents in Background */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -12, 0],
          rotate: [0, 2, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-[#134e2f]/5 to-[#cfa847]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 16, 0],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-[#134e2f]/8 to-[#198754]/5 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Cultural Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#f4f8f5] border border-[#134e2f]/20 text-[#0d3d24] text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#cfa847] animate-pulse" />
              <Wind className="w-3.5 h-3.5 text-[#134e2f]" />
              <span>Tradisi Sakral Mamasa • Sulawesi Barat</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0d3d24] leading-[1.15]">
                MA'PATOKDANG: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#134e2f] via-[#1a6e42] to-[#cfa847]">
                  Merawat Ingatan
                </span>{" "}
                Leluhur Mamasa
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#325340] max-w-2xl font-normal leading-relaxed">
                Ritual Ma'Patokdang adalah salah satu tradisi kematian unik masyarakat suku Mamasa di kabupaten Mamasa Sulawesi Barat
              </p>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#mangngaro"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f4f8f5] text-[#0d3d24] text-xs sm:text-sm font-bold tracking-wide border border-[#134e2f]/20 shadow-sm transition-all"
              >
                <span>Pelajari Tradisi</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#avatar-builder"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full bg-[#0d3d24] hover:bg-[#134e2f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#0d3d24]/25 border border-[#cfa847]/50 transition-all group"
              >
                <Sparkles className="w-4 h-4 text-[#cfa847] group-hover:rotate-12 transition-transform" />
                <span>Kustomisasi Karakter 2D</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Cultural Highlights Pill Grid */}
            <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-3 border-t border-[#134e2f]/10 max-w-lg">
              <div className="space-y-0.5">
                <span className="block text-lg sm:text-2xl font-black text-[#0d3d24]">1.200m</span>
                <span className="text-[10px] sm:text-xs text-[#5e7e6d] font-medium leading-tight block">
                  Lembah Sejuk Mamasa
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-lg sm:text-2xl font-black text-[#0d3d24]">Banua Sura&apos;</span>
                <span className="text-[10px] sm:text-xs text-[#5e7e6d] font-medium leading-tight block">
                  Rumah Berukir Sakral
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-lg sm:text-2xl font-black text-[#0d3d24]">Pa&apos;tannun</span>
                <span className="text-[10px] sm:text-xs text-[#5e7e6d] font-medium leading-tight block">
                  Tenun Busana Pusaka
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Anti-Gravity Floating Illustration of Banua Sura' */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Anti-gravity Floating Container */}
            <motion.div
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md"
            >
              {/* Outer Decorative Halo & Wind Pattern */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#134e2f]/15 via-transparent to-[#cfa847]/25 blur-md" />

              {/* Main Illustration Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-2 sm:p-2.5 shadow-2xl shadow-[#0d3d24]/15 border border-[#134e2f]/15">
                <div className="relative h-[290px] sm:h-[380px] md:h-[410px] w-full rounded-2xl overflow-hidden bg-[#eef5f0]">
                  <Image
                    src="/images/ma'patokdang.jpg"
                    alt="Banua Sura Mamasa Tradisional"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062b18]/60 via-transparent to-white/10" />

                  {/* Wind Breeze lines overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                    viewBox="0 0 400 400"
                  >
                    <path
                      d="M20,60 Q180,20 380,80"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeDasharray="8,6"
                    />
                    <path
                      d="M0,120 Q200,90 400,140"
                      fill="none"
                      stroke="#cfa847"
                      strokeWidth="1.5"
                      strokeDasharray="6,8"
                    />
                  </svg>

                  {/* Floating Cultural Tag Top-Left */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#0d3d24]/15 shadow-md flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#134e2f]" />
                    <span className="text-xs font-bold text-[#0d3d24]">Ma'Patokdang&apos; Mamasa</span>
                  </motion.div>         

                  {/* Bottom Caption Pill inside the image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#0d3d24]/15 shadow-lg">
                    <p className="text-xs font-bold text-[#0d3d24] flex items-center justify-between">
                      <span>Ritual Kematian Adat Mamasa</span>
                      <span className="text-[10px] uppercase font-bold text-[#cfa847] bg-[#0d3d24] px-2 py-0.5 rounded-full">
                        Budaya
                      </span>
                    </p>
                    <p className="text-[11px] text-[#325340] mt-1 leading-snug">
                      Ma'Patokdang' adalah ritual kematian adat masyarakat Mamasa sebagai proses transisi spiritual tertinggi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Floating Shadow on Ground */}
              <motion.div
                animate={{
                  scaleX: [1, 0.9, 1],
                  opacity: [0.35, 0.2, 0.35],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-3/4 h-5 mx-auto mt-4 rounded-full bg-[#0d3d24]/20 blur-md"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
