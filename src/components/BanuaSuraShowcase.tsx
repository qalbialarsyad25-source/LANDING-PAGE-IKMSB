"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Compass, Sun, Layers, ShieldCheck, Sparkles } from "lucide-react";

interface MotifInfo {
  name: string;
  trans: string;
  meaning: string;
  color: string;
  symbol: string;
}

export default function BanuaSuraShowcase() {
  const [selectedMotif, setSelectedMotif] = useState(0);

  const motifs: MotifInfo[] = [
    {
      name: "Pa'tedong (Tanduk Kerbau)",
      trans: "Ukiran Kepala Kerbau",
      meaning:
        "Simbol kemakmuran, kekuatan, dan status martabat luhur dalam tatanan sosial masyarakat Mamasa. Kerbau dipandang sebagai hewan sakral pengantar doa ke haribaan Sang Pencipta.",
      color: "#0d3d24",
      symbol: "♉",
    },
    {
      name: "Pa'barre Allo (Matahari Kehidupan)",
      trans: "Ukiran Lingkaran Surya Bercahaya",
      meaning:
        "Melambangkan sumber energi kehidupan, keagungan Tuhan Yang Maha Esa, serta bimbingan moral yang menerangi langkah hidup manusia agar senantiasa berbuat adil.",
      color: "#cfa847",
      symbol: "☀️",
    },
    {
      name: "Pa'ulu Karua (Delapan Penjuru)",
      trans: "Ukiran Delapan Sudut Kebijaksanaan",
      meaning:
        "Melambangkan kearifan dalam menimbang segala perkara kehidupan dari delapan penjuru mata angin sebelum mengambil keputusan musyawarah keluarga.",
      color: "#134e2f",
      symbol: "❖",
    },
    {
      name: "Pa'sulan Sangbua (Pucuk Rebung)",
      trans: "Motif Geometris Tumbuh Harapan",
      meaning:
        "Filosofi bahwa generasi muda harus selalu tumbuh lurus, kuat menghadapi angin rintangan, dan memberikan manfaat bagi keluarga dan bangsanya.",
      color: "#198754",
      symbol: "▲",
    },
  ];

  return (
    <section id="banua-sura" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#134e2f]/20 text-[#0d3d24] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Home className="w-3.5 h-3.5 text-[#134e2f]" />
            <span>Tradisi Rambu Solo' Mamasa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d3d24] tracking-tight">
            Filosofi Rambu Solo' Mamasa <br />
            <span className="text-[#134e2f] font-serif italic">Menghormati yang telah pergi, merawat ikatan yang tetap abadi</span>
          </h2>

          <p className="text-base sm:text-lg text-[#325340] leading-relaxed">
            Rambu solo' adalah cerminan bahwa perpisahan tidak menghapus ikatan, adat tidak sekedar diwariskan, dan penghormatan pada leluhur merupakan bagian dari menjaga jati diri masyarakat Mamasa
          </p>
        </div>

        {/* 3 Pillar Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#134e2f]/15 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0d3d24] text-white flex items-center justify-center mb-5 shadow-sm">
              <Compass className="w-6 h-6 text-[#cfa847]" />
            </div>
            <h3 className="text-xl font-bold text-[#0d3d24] mb-2">Penghormatan pada leluhur</h3>
            <p className="text-sm text-[#325340] leading-relaxed">
              Wujud penghormatan terakhir kepada mereka yang telah mendahului, sebagai bagian dari nilai adat dan spiritualitas masyarakat Mamasa
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#134e2f]/15 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0d3d24] text-white flex items-center justify-center mb-5 shadow-sm">
              <Layers className="w-6 h-6 text-[#cfa847]" />
            </div>
            <h3 className="text-xl font-bold text-[#0d3d24] mb-2">Solidaritas dan Kekeluargaan</h3>
            <p className="text-sm text-[#325340] leading-relaxed">
              Cerminan semangat gotong royong, kebersamaan, dan ikatan kekeluargaan yang menguatkan hubungan antar kerabat serta masyarakat
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#134e2f]/15 shadow-sm hover:shadow-md transition-all sm:col-span-2 md:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0d3d24] text-white flex items-center justify-center mb-5 shadow-sm">
              <Sparkles className="w-6 h-6 text-[#cfa847]" />
            </div>
            <h3 className="text-xl font-bold text-[#0d3d24] mb-2">Identitas dan Warisan Budaya</h3>
            <p className="text-sm text-[#325340] leading-relaxed">
              Representasi identitas masyarakat mamasa yang menjaga nilai nilai adat dan meneruskan warisan leluhur kepada generasi berikutnya
            </p>
          </motion.div>
        </div>

        {/* Interactive Passura Motif Explorer */}
        <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#134e2f]/15 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#134e2f]">Koleksi Ukiran Asli</span>
              <h3 className="text-2xl font-extrabold text-[#0d3d24]">Ragam Makna Motif Ukiran Passura&apos; Mamasa</h3>
            </div>
            <span className="text-xs font-medium text-[#5e7e6d]">
              Pilih motif untuk membaca pesan leluhur
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Buttons list */}
            <div className="lg:col-span-5 space-y-3">
              {motifs.map((motif, index) => (
                <button
                  key={motif.name}
                  onClick={() => setSelectedMotif(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center gap-4 ${
                    selectedMotif === index
                      ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-md"
                      : "bg-[#fcfdfa] text-[#0d3d24] border-[#134e2f]/15 hover:bg-[#f4f8f5]"
                  }`}
                >
                  <span className="text-2xl">{motif.symbol}</span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base leading-tight">{motif.name}</h4>
                    <span
                      className={`text-xs block mt-0.5 ${
                        selectedMotif === index ? "text-[#cfa847]" : "text-[#5e7e6d]"
                      }`}
                    >
                      {motif.trans}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Display Detail Box */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#f4f8f5] to-[#e8f2eb] border border-[#134e2f]/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{motifs[selectedMotif].symbol}</span>
                <div>
                  <h4 className="text-xl font-black text-[#0d3d24]">
                    {motifs[selectedMotif].name}
                  </h4>
                  <span className="text-xs font-semibold text-[#134e2f] uppercase tracking-wider">
                    {motifs[selectedMotif].trans}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#325340] leading-relaxed mb-6">
                {motifs[selectedMotif].meaning}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
