"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BookOpen, Heart, Shield, Compass, MapPin, Mail, Award, Sparkles } from "lucide-react";
import { FaInstagram } from "react-icons/fa"

export default function AboutIKMSB() {
  const pillars = [
    {
      icon: Users,
      title: "Rumah Kekeluargaan Perantau",
      desc: "Menghubungkan dan menjadi keluarga kedua bagi seluruh mahasiswa perantau asal Sulawesi Barat yang menempuh pendidikan di Malang Raya.",
    },
    {
      icon: BookOpen,
      title: "Pelestarian Budaya Leluhur",
      desc: "Mengenalkan narasi tradisi sakral seperti Ma'Patokdang, dan tenun tradisional ke panggung nasional dan akademis.",
    },
    {
      icon: Award,
      title: "Intelektual & Kepemimpinan",
      desc: "Mendorong kader-kader mahasiswa untuk berprestasi secara akademis dan memegang teguh integritas moral bagi kemajuan daerah.",
    },
  ];

  return (
    <section
      id="tentang-ikmsb"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-[#134e2f]/10"
    >
      {/* Background Subtle Mamasa Motif */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none bg-wind-flow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.03] pointer-events-none bg-mamasa-pattern" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Official Logo */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16">
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-3xl bg-white shadow-xl border border-[#134e2f]/15 flex items-center justify-center"
            >
              <Image
                src="/images/logo_ikmsb.png"
                alt="Lambang Resmi IKMSB Malang"
                width={80}
                height={80}
                className="w-full h-full object-contain filter drop-shadow"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4f8f5] border border-[#134e2f]/20 text-[#0d3d24] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <Shield className="w-3.5 h-3.5 text-[#134e2f]" />
            <span>Profil Resmi Organisasi</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d3d24] tracking-tight">
            Tentang IKMSB Malang: <br />
            <span className="text-[#134e2f] font-serif italic">Solid Berbudaya</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#325340] leading-relaxed">
            <strong>Ikatan Keluarga Mahasiswa Sulawesi Barat (IKMSB) Malang</strong> adalah
            wadah berkumpul, bertukar gagasan, dan menjaga ikatan emosional para mahasiswa asal Sulawesi Barat
            atau Bumi Malaqbi di perantauan Jawa Timur khususnya Kota Malang dengan semboyan suci: <br />
            <em className="text-[#0d3d24] font-semibold">&ldquo;Malilu&apos; Sipaingarang, Manus Siorongngi&rdquo;</em> (Saling mengingatkan dalam kebaikan, saling menopang dalam kesulitan).
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#fcfdfa] border border-[#134e2f]/15 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0d3d24] text-[#cfa847] flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0d3d24]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#325340] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative & Philosophy Feature Box */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0d3d24] to-[#072415] text-white shadow-xl border border-[#cfa847]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#cfa847]/15 to-transparent blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#cfa847]/30 text-[#cfa847] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#cfa847]" />
                <span>Falsafah Luhur Pegunungan & Pesisir</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                &ldquo;Mesa&apos; Kada Dipotuo, Pantang Kada Dipomate&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl">
                Filosofi agung masyarakat Mamasa ini mengajarkan bahwa persatuan mendatangkan kehidupan dan kejayaan,
                sedangkan perpecahan membawa kehancuran. Melalui prinsip ini, IKMSB Malang menyatukan mahasiswa
                dari seluruh 6 kabupaten (Mamasa, Majene, Polewali Mandar, Mamuju, Mamuju Tengah, dan Pasangkayu)
                dalam satu simpul kekeluargaan yang kokoh.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3 text-xs">
              <h4 className="font-bold text-[#cfa847] text-sm uppercase tracking-wider">
                Sekretariat & Wilayah
              </h4>
              <div className="flex items-start gap-2.5 text-gray-200">
                <MapPin className="w-4 h-4 text-[#cfa847] shrink-0 mt-0.5" />
                <span>Kota Malang, Jawa Timur, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-200">
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
              <div className="pt-2 border-t border-white/10 text-[11px] text-[#cfa847] font-semibold">
                Terbuka untuk seluruh mahasiswa & simpatisan budaya Sulawesi Barat di Malang.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
