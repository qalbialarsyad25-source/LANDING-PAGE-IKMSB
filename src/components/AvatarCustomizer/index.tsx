"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, Wind } from "lucide-react";
import AvatarCanvas from "./AvatarCanvas";
import CustomizerControls from "./CustomizerControls";
import {
  AvatarState,
  DEFAULT_AVATAR,
  SKIN_TONES,
  MALE_HEADWEAR,
  FEMALE_HEADWEAR,
  MALE_OUTFITS,
  FEMALE_OUTFITS,
  SASHES,
  ACCESSORIES,
  BACKGROUNDS,
} from "./avatarData";

export default function AvatarCustomizer() {
  const [avatar, setAvatar] = useState<AvatarState>(DEFAULT_AVATAR);

  const handleUpdate = (updates: Partial<AvatarState>) => {
    setAvatar((prev) => ({ ...prev, ...updates }));
  };

  const handleReset = () => {
    setAvatar(DEFAULT_AVATAR);
  };

  const handleRandomize = () => {
    const genders: ("male" | "female")[] = ["male", "female"];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];

    const randomSkin =
      SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)].id;
    const headwears =
      randomGender === "male" ? MALE_HEADWEAR : FEMALE_HEADWEAR;
    const randomHeadwear =
      headwears[Math.floor(Math.random() * headwears.length)].id;

    const outfits = randomGender === "male" ? MALE_OUTFITS : FEMALE_OUTFITS;
    const randomOutfit = outfits[Math.floor(Math.random() * outfits.length)].id;

    const randomSash = SASHES[Math.floor(Math.random() * SASHES.length)].id;
    const randomAccessory =
      ACCESSORIES[Math.floor(Math.random() * ACCESSORIES.length)].id;
    const randomBg =
      BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)].id;

    const maleNames = ["To Mamasa", "To Mambirang", "Ambe' Sura'", "Leluhur Kondo"];
    const femaleNames = ["Baine Sura'", "Indo' Kondo", "Srikandi Gandang", "Putri Passura"];
    const nameList = randomGender === "male" ? maleNames : femaleNames;
    const randomName = nameList[Math.floor(Math.random() * nameList.length)];

    setAvatar({
      name: randomName,
      gender: randomGender,
      skinToneId: randomSkin,
      expressionId: "smile",
      hairHeadwearId: randomHeadwear,
      outfitId: randomOutfit,
      sashId: randomSash,
      accessoryId: randomAccessory,
      backgroundId: randomBg,
      windEffect: true,
      outfitColorAccent: "#0d3d24",
    });
  };

  return (
    <section
      id="avatar-builder"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-mamasa-pattern relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f4f8f5] border border-[#134e2f]/20 text-[#0d3d24] text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#cfa847]" />
            <span>Fitur Interaktif IKMSB</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d3d24] tracking-tight">
            Kustomisasi Karakter 2D <br />
            <span className="text-[#134e2f] font-serif italic">Busana Sakral Mamasa</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#325340] leading-relaxed">
            Pilihlah ragam tenun Sambur, passapu berlipat tanduk kerbau, hingga gayang pusaka.
            Setiap komponen pakaian adat yang Anda kenakan di kanvas ini mencerminkan helai tenun baru
            yang dipersembahkan kepada leluhur dalam prosesi suci di Mamasa.
          </p>
        </div>

        {/* 2-Column Customizer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Canvas Preview of the 2D Character (Layering & Anti-Gravity) */}
          <div className="lg:col-span-5 flex justify-center relative lg:sticky lg:top-24 z-20">
            <AvatarCanvas
              avatar={avatar}
              onRandomize={handleRandomize}
              onReset={handleReset}
            />
          </div>

          {/* Right Column: Interactive Customization Controls */}
          <div className="lg:col-span-7">
            <CustomizerControls avatar={avatar} onChange={handleUpdate} />
          </div>

        </div>

      </div>
    </section>
  );
}
