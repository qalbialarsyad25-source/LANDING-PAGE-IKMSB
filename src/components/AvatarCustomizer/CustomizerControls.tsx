"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Shirt,
  Crown,
  Shield,
  Palette,
  Wind,
  Info,
  Sparkles,
  Check,
} from "lucide-react";
import {
  AvatarState,
  SKIN_TONES,
  MALE_HEADWEAR,
  FEMALE_HEADWEAR,
  MALE_OUTFITS,
  FEMALE_OUTFITS,
  SASHES,
  ACCESSORIES,
  BACKGROUNDS,
} from "./avatarData";

interface CustomizerControlsProps {
  avatar: AvatarState;
  onChange: (updates: Partial<AvatarState>) => void;
}

type TabType = "character" | "outfit" | "headwear" | "accessory" | "background";

export default function CustomizerControls({
  avatar,
  onChange,
}: CustomizerControlsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("character");

  const tabs = [
    { id: "character" as TabType, label: "Karakter", icon: User },
    { id: "outfit" as TabType, label: "Busana", icon: Shirt },
    { id: "headwear" as TabType, label: "Kepala", icon: Crown },
    { id: "accessory" as TabType, label: "Pusaka", icon: Shield },
    { id: "background" as TabType, label: "Latar & Angin", icon: Wind },
  ];

  const currentHeadwears =
    avatar.gender === "male" ? MALE_HEADWEAR : FEMALE_HEADWEAR;
  const currentOutfits =
    avatar.gender === "male" ? MALE_OUTFITS : FEMALE_OUTFITS;

  // Active items for cultural lore
  const activeOutfit = currentOutfits.find((o) => o.id === avatar.outfitId);
  const activeHeadwear = currentHeadwears.find(
    (h) => h.id === avatar.hairHeadwearId
  );
  const activeAccessory = ACCESSORIES.find(
    (a) => a.id === avatar.accessoryId
  );

  const namePresets =
    avatar.gender === "male"
      ? ["To Mamasa", "To Mambirang", "Ambe' Sura'", "Leluhur Kondo"]
      : ["Baine Sura'", "Indo' Kondo", "Srikandi Gandang", "Putri Passura"];

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#134e2f]/15 shadow-xl">
      
      {/* Top Header & Character Name Input */}
      <div className="space-y-4 mb-5 sm:mb-6 border-b border-[#134e2f]/10 pb-4 sm:pb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#cfa847]" />
            <h3 className="font-extrabold text-lg sm:text-xl text-[#0d3d24]">
              Studio Busana Adat Mamasa
            </h3>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#134e2f] uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#f4f8f5] border border-[#134e2f]/20">
            2D Layer System
          </span>
        </div>

        {/* Character Name field with quick preset chips */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-[#325340] uppercase tracking-wider">
            Nama Karakter Adat
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={avatar.name}
              onChange={(e) => onChange({ name: e.target.value })}
              placeholder="Masukkan nama karakter..."
              className="flex-1 px-3.5 sm:px-4 py-2 text-xs sm:text-sm rounded-xl border border-[#134e2f]/20 focus:outline-none focus:ring-2 focus:ring-[#134e2f] focus:border-transparent text-[#0d3d24] font-medium"
              maxLength={26}
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] text-[#5e7e6d] font-semibold mr-1">Preset:</span>
            {namePresets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => onChange({ name: preset })}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#f4f8f5] hover:bg-[#eaf4ec] text-[#0d3d24] border border-[#134e2f]/15 transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tab Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2.5 scrollbar-none mb-5 sm:mb-6 -mx-1 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl font-bold text-[11px] sm:text-xs whitespace-nowrap transition-all border shrink-0 ${
                isActive
                  ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-md shadow-[#0d3d24]/15"
                  : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#325340] border-[#134e2f]/15"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#cfa847]" : "text-[#134e2f]"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="flex-1 space-y-6 max-h-none lg:max-h-[440px] overflow-y-auto pr-0 lg:pr-1.5">
        
        {/* TAB 1: KARAKTER (GENDER & SKIN TONE) */}
        {activeTab === "character" && (
          <div className="space-y-6">
            {/* Gender Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#325340] uppercase tracking-wider block">
                Jenis Karakter
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onChange({
                      gender: "male",
                      hairHeadwearId: "passapu-zamrud",
                      outfitId: "jas-passura-zamrud",
                    })
                  }
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    avatar.gender === "male"
                      ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-md"
                      : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/20"
                  }`}
                >
                  <span className="block font-bold text-sm">Pria (To Mamasa)</span>
                  <span className={`text-[10px] block mt-0.5 ${avatar.gender === "male" ? "text-[#cfa847]" : "text-[#5e7e6d]"}`}>
                    Passapu & Jas Tutup Passura
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onChange({
                      gender: "female",
                      hairHeadwearId: "sapi-manik",
                      outfitId: "pokko-hijau-zamrud",
                    })
                  }
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    avatar.gender === "female"
                      ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-md"
                      : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/20"
                  }`}
                >
                  <span className="block font-bold text-sm">Wanita (Baine Sura&apos;)</span>
                  <span className={`text-[10px] block mt-0.5 ${avatar.gender === "female" ? "text-[#cfa847]" : "text-[#5e7e6d]"}`}>
                    Sa&apos;pi Manik & Baju Pokko
                  </span>
                </button>
              </div>
            </div>

            {/* Skin Tone Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#325340] uppercase tracking-wider block">
                Warna Kulit Alami
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SKIN_TONES.map((tone) => (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => onChange({ skinToneId: tone.id })}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                      avatar.skinToneId === tone.id
                        ? "border-[#0d3d24] ring-2 ring-[#0d3d24] bg-[#f4f8f5]"
                        : "border-gray-200 hover:border-[#134e2f]/40 bg-white"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full border border-black/15 shadow-inner"
                      style={{ backgroundColor: tone.color }}
                    />
                    <span className="text-[11px] font-semibold text-[#0d3d24] text-center leading-tight">
                      {tone.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BUSANA ADAT MAMASA */}
        {activeTab === "outfit" && (
          <div className="space-y-6">
            {/* Outfits List */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#325340] uppercase tracking-wider block">
                Pakaian Adat Utama
              </label>
              <div className="space-y-2.5">
                {currentOutfits.map((outfit) => {
                  const isSelected = avatar.outfitId === outfit.id;
                  return (
                    <button
                      key={outfit.id}
                      type="button"
                      onClick={() => onChange({ outfitId: outfit.id })}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between ${
                        isSelected
                          ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-sm"
                          : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/20"
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-sm leading-snug">{outfit.name}</h4>
                        <p className={`text-xs mt-1 ${isSelected ? "text-gray-200" : "text-[#5e7e6d]"}`}>
                          {outfit.desc}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#cfa847] text-[#0d3d24] flex items-center justify-center shrink-0 ml-2 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sash / Selempang Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#325340] uppercase tracking-wider block">
                Selempang Tenun (Kain Bahu)
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {SASHES.map((sash) => (
                  <button
                    key={sash.id}
                    type="button"
                    onClick={() => onChange({ sashId: sash.id })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      avatar.sashId === sash.id
                        ? "bg-[#0d3d24] text-white border-[#cfa847]"
                        : "bg-white hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/20"
                    }`}
                  >
                    <span className="font-bold text-xs block leading-tight">{sash.name}</span>
                    <span className={`text-[10px] block mt-1 line-clamp-1 ${avatar.sashId === sash.id ? "text-[#cfa847]" : "text-[#5e7e6d]"}`}>
                      {sash.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HIASAN KEPALA / PASSAPU */}
        {activeTab === "headwear" && (
          <div className="space-y-3">
            <label className="text-xs font-bold text-[#325340] uppercase tracking-wider block">
              Penutup Kepala & Tatanan Rambut
            </label>
            <div className="space-y-2.5">
              {currentHeadwears.map((headwear) => {
                const isSelected = avatar.hairHeadwearId === headwear.id;
                return (
                  <button
                    key={headwear.id}
                    type="button"
                    onClick={() => onChange({ hairHeadwearId: headwear.id })}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between ${
                      isSelected
                        ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-sm"
                        : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/20"
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm leading-snug">{headwear.name}</h4>
                      <p className={`text-xs mt-1 ${isSelected ? "text-gray-200" : "text-[#5e7e6d]"}`}>
                        {headwear.desc}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#cfa847] text-[#0d3d24] flex items-center justify-center shrink-0 ml-2 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: PUSAKA & AKSESORIS */}
        {activeTab === "accessory" && (
          <div className="space-y-3">
            <label className="text-xs font-bold text-[#325340] uppercase tracking-wider block">
              Pusaka & Hiasan Adat
            </label>
            <div className="space-y-2.5">
              {ACCESSORIES.map((acc) => {
                const isSelected = avatar.accessoryId === acc.id;
                return (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => onChange({ accessoryId: acc.id })}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between ${
                      isSelected
                        ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-sm"
                        : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/20"
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm leading-snug">{acc.name}</h4>
                      <p className={`text-xs mt-1 ${isSelected ? "text-gray-200" : "text-[#5e7e6d]"}`}>
                        {acc.desc}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#cfa847] text-[#0d3d24] flex items-center justify-center shrink-0 ml-2 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: LATAR & ANGIN */}
        {activeTab === "background" && (
          <div className="space-y-6">
            {/* Background Atmosphere */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#325340] uppercase tracking-wider block">
                Pemandangan Latar
              </label>
              <div className="space-y-2.5">
                {BACKGROUNDS.map((bg) => {
                  const isSelected = avatar.backgroundId === bg.id;
                  return (
                    <button
                      key={bg.id}
                      type="button"
                      onClick={() => onChange({ backgroundId: bg.id })}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-[#0d3d24] text-white border-[#cfa847] shadow-sm"
                          : "bg-[#fcfdfa] hover:bg-[#f4f8f5] text-[#0d3d24] border-[#134e2f]/20"
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-sm">{bg.name}</h4>
                        <p className={`text-xs mt-0.5 ${isSelected ? "text-gray-200" : "text-[#5e7e6d]"}`}>
                          {bg.description}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#cfa847] text-[#0d3d24] flex items-center justify-center shrink-0 ml-2">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Wind Effect Switch */}
            <div className="p-4 rounded-2xl bg-[#f4f8f5] border border-[#134e2f]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Wind className="w-5 h-5 text-[#134e2f]" />
                <div>
                  <h4 className="font-bold text-sm text-[#0d3d24]">Semilir Angin & Partikel Suci</h4>
                  <p className="text-xs text-[#5e7e6d]">Tampilkan hembusan angin pada kanvas</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onChange({ windEffect: !avatar.windEffect })}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  avatar.windEffect ? "bg-[#134e2f]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                    avatar.windEffect ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Dynamic Cultural Lore Card at Bottom of Controls */}
      <div className="mt-6 pt-4 border-t border-[#134e2f]/10">
        <div className="p-4 rounded-2xl bg-[#f4f8f5] border border-[#134e2f]/15 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d3d24]">
            <Info className="w-3.5 h-3.5 text-[#134e2f]" />
            <span>Kearifan & Makna Budaya:</span>
          </div>
          <p className="text-xs text-[#325340] leading-relaxed">
            {activeHeadwear?.lore || activeOutfit?.lore || activeAccessory?.lore || "Setiap busana adat Mamasa menyimpan doa para leluhur yang senantiasa menjaga kesejahteraan generasi penerusnya."}
          </p>
        </div>
      </div>

    </div>
  );
}
