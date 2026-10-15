"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Wind, Menu, X, Sparkles, Volume2, VolumeX, Shield } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ambient Highland Breeze generator via Web Audio API
  const toggleAmbientSound = () => {
    if (!audioCtx) {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      setAudioCtx(ctx);

      // Create white noise filtered for gentle highland wind
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Bandpass filter to mimic mountain wind
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 380;
      filter.Q.value = 2.5;

      const gainNode = ctx.createGain();
      gainNode.gain.value = 0.04;

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      whiteNoise.start();
      setIsAudioPlaying(true);
    } else {
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
        setIsAudioPlaying(true);
      } else if (audioCtx.state === "running") {
        audioCtx.suspend();
        setIsAudioPlaying(false);
      }
    }
  };

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Ma'Patokdang", href: "#mangngaro" },
    { name: "Rambu Solo' Mamasa", href: "#banua-sura" },
    { name: "Karakter Adat", href: "#avatar-builder" },
    { name: "Tentang IKMSB", href: "#tentang-ikmsb" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#0d3d24]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo IKMSB */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/logo_ikmsb.png"
                alt="Logo Resmi IKMSB Malang"
                width={48}
                height={48}
                className="w-full h-full object-contain filter drop-shadow-sm"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-[#0d3d24]">
                  IKMSB
                </span>
                <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-[#0d3d24]">
                  MALANG
                </span>
              </div>
              <p className="hidden xs:block text-[10px] sm:text-[11px] font-medium text-[#325340] tracking-tight">
                Ikatan Keluarga Mahasiswa Sulawesi Barat
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#134e2f] hover:text-[#0d3d24] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#cfa847] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Ambient Breeze Sound toggle */}
            <button
              onClick={toggleAmbientSound}
              type="button"
              title={isAudioPlaying ? "Matikan Semilir Angin" : "Dengarkan Semilir Angin Mamasa"}
              className={`p-2.5 rounded-full transition-all border ${
                isAudioPlaying
                  ? "bg-[#0d3d24] text-[#cfa847] border-[#cfa847]"
                  : "bg-white text-[#134e2f] border-[#0d3d24]/15 hover:bg-[#f4f8f5]"
              }`}
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#avatar-builder"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0d3d24] hover:bg-[#134e2f] text-white text-xs uppercase font-bold tracking-wider shadow-md hover:shadow-lg hover:shadow-[#0d3d24]/20 transition-all border border-[#cfa847]/40 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#cfa847] group-hover:rotate-12 transition-transform" />
              <span>Rancang Karakter</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleAmbientSound}
              type="button"
              className="p-2 rounded-lg bg-white border border-[#0d3d24]/15 text-[#134e2f]"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4 text-[#cfa847]" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0d3d24] text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b border-[#0d3d24]/10 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-semibold text-[#0d3d24] hover:text-[#cfa847] py-1 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#avatar-builder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0d3d24] text-white font-bold text-sm shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#cfa847]" />
                  <span>Rancang Karakter Adat Mamasa</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
