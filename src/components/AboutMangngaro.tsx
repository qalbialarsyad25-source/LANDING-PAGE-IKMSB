"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Feather, BookOpen, Users, Compass, CheckCircle2, HeartHandshake, Eye } from "lucide-react";

export default function AboutMangngaro() {
  const [activeStage, setActiveStage] = useState(0);

  const ritualStages = [
    {
      step: "01",
      title: "Persiapan & Penandanan Jenazah",
      desc: "Segera setelah seseorang dinyatakan meninggal dunia, tubuhnya tidak dibaringkan melainkan diatur dalam posisi duduk diatas kursi, jenazah kemudian dimandikan dan diriasi wajahnay dan dipakaikan baju adat lengkap beserta perhiasan seperti orang masih hidup",
    },
    {
      step: "02",
      title: "Penyemayaman di Bilik Pelaminan",
      desc: "Jenazah yang sudah didandani rapi ditempatkan di dalam ruang ramu rumah tongkonan, pihak keluarga membuat bilik khusus yang dihiasi dekorasi megah menyerupai pelaminan pesta pernikahan.",
    },
    {
      step: "03",
      title: "Masa Penjagaan",
      desc: "Prosesi duduk ini berlangsung selama sehari semalam sepanjang waktu ini. masyarakat dan keluarga secara adat memperlakukan jenzah tersebut bukan sebagai orang mati, melainkan sebagai orang yang hanya sedang sakit",
    },
    {
      step: "04",
      title: "Penyembelihan kerbau & Peniduran Kembali",
      desc: "Setelah sehari semalam selesai, ritual diakhiri dengan menyembelih seekor kerbau yang disebut sebagai korban pabbambangan, Dengan disembelihnya kerbau ini, status jenazah resmi dinyatakan meninggal dunia.",
    },
  ];

  return (
    <section id="mangngaro" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle Mamasa Background Motif */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] pointer-events-none bg-wind-flow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.03] pointer-events-none bg-wind-flow" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4f8f5] border border-[#134e2f]/20 text-[#0d3d24] text-xs font-bold uppercase tracking-widest"
          >
            <Feather className="w-3.5 h-3.5 text-[#134e2f]" />
            <span>Riwayat & Makna Suci</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d3d24] tracking-tight">
            Tradisi Ma'Patokdang: <br />
            <span className="text-[#134e2f] font-serif italic">Merawat Tradisi Menjaga Sakralitas</span>
          </h2>

          <p className="text-base sm:text-lg text-[#325340] leading-relaxed">
            Bagi masyarakat adat pegunungan Mamasa di Sulawesi Barat, kematian bukanlah batas akhir cinta.
            Ma'Patokdang adalah upacara sakral awal untuk merawat, membersihkan, dan membalut kembali jasad
            para leluhur dengan helai tenun baru terbaik.
          </p>
        </div>

        {/* Narrative & Visual Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual illustration with anti-gravity badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-2 bg-[#f4f8f5] border border-[#134e2f]/15 shadow-xl">
              <div className="relative h-[280px] xs:h-[320px] sm:h-[400px] lg:h-[430px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/mangngaro_ritual.jpg"
                  alt="Prosesi Upacara Adat Mangngaro di Mamasa"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062b18]/70 via-transparent to-transparent" />
                
                {/* Floating Quote Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#134e2f]/20 shadow-xl"
                >
                  <p className="text-[11px] sm:text-xs italic text-[#0d3d24] font-medium leading-relaxed">
                    &ldquo;Di setiap helai benang tenun yang dipakaikan, mengalir doa dan ingatan bahwa kita ada karena mereka yang telah mendahului kita.&rdquo;
                  </p>
                  <span className="block mt-1 text-[10px] sm:text-[11px] font-bold text-[#134e2f] uppercase tracking-wider">
                    — Petuah Tetua Adat Mamasa
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: In-depth Context and IKMSB Role */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0d3d24]">
                Menghidupkan Kembali Memori Kolektif
              </h3>
              <p className="text-sm sm:text-base text-[#325340] leading-relaxed">
                Di tengah sejuknya kabut pegunungan Kondo Sapata&apos;, ritual Ma'Patokdang diadakan
                setiap ada individu yang telah wafat. Para keluarga yang merantau kembali pulang, melintasi lembah dan ngarai,
                menuju kampung halaman untuk berbakti kepada orang tua dan nenek moyang.
              </p>
              <p className="text-sm sm:text-base text-[#325340] leading-relaxed">
                Tradisi ini bukan sekadar prosesi fisik, melainkan penegasan identitas moral bahwa
                anak cucu tidak akan pernah melupakan akar, budi pekerti, dan tanah tempat mereka lahir.
              </p>
            </div>

            {/* IKMSB Role Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f4f8f5] to-[#eaf3ec] border border-[#134e2f]/20 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0d3d24] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Users className="w-6 h-6 text-[#cfa847]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-extrabold text-[#0d3d24]">
                    Peran IKMSB (Ikatan Keluarga Mahasiswa Sulawesi Barat) Malang
                  </h4>
                  <p className="text-xs sm:text-sm text-[#325340] leading-relaxed">
                    IKMSB Malang hadir sebagai jembatan kultural dan intelektual generasi muda. IKMSB berkomitmen:
                  </p>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm text-[#0d3d24] font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#198754] shrink-0" />
                      <span><strong>Digitalisasi Warisan:</strong> Mendokumentasikan dan memvisualisasikan narasi tradisi Mamasa secara modern.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#198754] shrink-0" />
                      <span><strong>Pelestarian Nilai:</strong> Menjunjung tinggi persaudaraan <em>Mesa&apos; Kada Dipotuo, Pantan Kada Dipomate</em>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 4 Steps Timeline / Ritual Process */}
        <div className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#134e2f]/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#134e2f]">Tahapan Sakral</span>
              <h3 className="text-2xl font-extrabold text-[#0d3d24]">Langkah Demi Langkah Upacara Ma'Patokdang</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5e7e6d]">
              Klik tahapan di bawah untuk melihat rincian prosesi ritual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ritualStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStage(idx)}
                className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border ${
                  activeStage === idx
                    ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-lg shadow-[#0d3d24]/20 scale-[1.02]"
                    : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/15 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-black px-2.5 py-1 rounded-md ${
                      activeStage === idx
                        ? "bg-[#cfa847] text-[#0d3d24]"
                        : "bg-[#134e2f]/10 text-[#134e2f]"
                    }`}
                  >
                    {stage.step}
                  </span>
                  {activeStage === idx && (
                    <span className="text-[10px] font-semibold text-[#cfa847] uppercase tracking-wider">
                      Aktif Dipilih
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-base mb-2">{stage.title}</h4>
                <p
                  className={`text-xs leading-relaxed mb-3 ${
                    activeStage === idx ? "text-gray-200" : "text-[#325340]"
                  }`}
                >
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
