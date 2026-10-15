import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMangngaro from "@/components/AboutMangngaro";
import BanuaSuraShowcase from "@/components/BanuaSuraShowcase";
import AvatarCustomizer from "@/components/AvatarCustomizer";
import AboutIKMSB from "@/components/AboutIKMSB";
import WindParticles from "@/components/WindParticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#fcfdfa] text-[#0a2617] overflow-x-hidden">
      {/* Ambient Wind Breeze Particle System */}
      <WindParticles />

      {/* Top Header / Navigation */}
      <Navbar />

      {/* Hero Section with Floating Banua Sura' & Anti-Gravity Motion */}
      <HeroSection />

      {/* About Section: Mangngaro Tradition */}
      <AboutMangngaro />

      {/* Cultural Heritage Section: Banua Sura' Architecture & Motifs */}
      <BanuaSuraShowcase />

      {/* Interactive Avatar Customizer (2-Column Canvas & Layering System) */}
      <AvatarCustomizer />

      {/* About IKMSB Section: Profil Organisasi IKMSB Malang */}
      <AboutIKMSB />

      {/* Footer */}
      <Footer />
    </main>
  );
}
