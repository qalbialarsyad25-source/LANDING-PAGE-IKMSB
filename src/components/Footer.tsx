"use client";

import React from "react";
import Image from "next/image";
import { Wind, Heart, Shield, Mail, MapPin, ExternalLink} from "lucide-react";
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#092e1b] text-white border-t border-[#cfa847]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Wind Flow */}
      <div className="absolute inset-0 opacity-5 bg-wind-flow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo_ikmsb.png"
                  alt="Logo Resmi IKMSB Malang"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-2xl tracking-wider text-white">
                    IKMSB
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#cfa847] text-[#092e1b]">
                    Malang
                  </span>
                </div>
                <span className="block text-xs font-semibold text-[#cfa847]">
                  Ikatan Keluarga Mahasiswa Sulawesi Barat
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
              Inisiatif digital pelestarian tradisi sakral Ma'Patokdang&apos;
              Kabupaten Mamasa, Sulawesi Barat. Mempertemukan khazanah masa lampau dengan teknologi masa kini.
            </p>

            <div className="p-3.5 rounded-xl bg-[#0d3d24] border border-[#cfa847]/30 inline-block">
              <p className="text-xs italic text-[#fae188] font-serif">
                &ldquo;Mesa&apos; Kada Dipotuo, Pantang Kada Dipomate&rdquo;
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Bersatu Kita Hidup, Bercerai Kita Binasa — Falsafah Luhur Kondosapata&apos;
              </p>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#cfa847] uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#mangngaro" className="hover:text-white transition-colors">
                  Ma'Patokdang
                </a>
              </li>
              <li>
                <a href="#banua-sura" className="hover:text-white transition-colors">
                  Rambu Solo' Mamasa
                </a>
              </li>
              <li>
                <a href="#avatar-builder" className="hover:text-white transition-colors">
                  Kustomisasi Avatar 2D
                </a>
              </li>
              <li>
                <a href="#tentang-ikmsb" className="hover:text-white transition-colors">
                  Tentang IKMSB
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Info Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-[#cfa847] uppercase tracking-wider">
              Wilayah Adat & Kontak
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#cfa847] shrink-0 mt-0.5" />
                <span>Perumahan Joyo Grand No. 2 Blok B2, Merjosari, Lowokwaru, Kota Malang, Jawa Timur, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaInstagram className="w-4 h-4 text-[#cfa847] shrink-0" />
                <a
                  href="https://www.instagram.com/ikmsbmalang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cfa847] transition-colors"
                >
                  IKMSB Malang
              </a>
              </div>
              <div className="flex items-center gap-2.5 text-gray-200">
                <FaInstagram className="w-4 h-4 text-[#cfa847] shrink-0" />
                <a
                  href="https://www.instagram.com/qalbi_arsyad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cfa847] transition-colors"
                >
                  Instagram Developer
              </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} IKMSB (Ikatan Keluarga Mahasiswa Sulawesi Barat). Yang buat admin Q gacor.</p>
          <div className="flex items-center gap-2 text-gray-300">
            <span>Dipersiapkan dengan ketulusan untuk Sulawesi Barat</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
