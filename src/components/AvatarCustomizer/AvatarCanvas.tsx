"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Download,
  Shuffle,
  RotateCcw,
  Sparkles,
  Share2,
  Check,
  Wind,
  Shield,
} from "lucide-react";
import {
  AvatarState,
  SKIN_TONES,
  BACKGROUNDS,
  MALE_HEADWEAR,
  FEMALE_HEADWEAR,
  MALE_OUTFITS,
  FEMALE_OUTFITS,
  SASHES,
  ACCESSORIES,
} from "./avatarData";

interface AvatarCanvasProps {
  avatar: AvatarState;
  onRandomize: () => void;
  onReset: () => void;
}

export default function AvatarCanvas({
  avatar,
  onRandomize,
  onReset,
}: AvatarCanvasProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get active skin tone
  const activeSkin =
    SKIN_TONES.find((s) => s.id === avatar.skinToneId) || SKIN_TONES[0];
  const activeBg =
    BACKGROUNDS.find((b) => b.id === avatar.backgroundId) || BACKGROUNDS[0];

  // Confetti effect on randomize
  const handleRandomizeClick = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#134e2f", "#cfa847", "#198754", "#ffffff"],
    });
    onRandomize();
  };

  // Export SVG to high-resolution PNG
  const handleDownload = () => {
    if (!svgRef.current) return;
    setDownloading(true);

    try {
      const svg = svgRef.current;
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      canvas.width = 1000;
      canvas.height = 1200;
      const ctx = canvas.getContext("2d");

      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      const loadImg = (source: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const imgObj = new window.Image();
          imgObj.crossOrigin = "anonymous";
          imgObj.onload = () => resolve(imgObj);
          imgObj.onerror = (err) => reject(err);
          imgObj.src = source;
        });
      };

      Promise.all([loadImg(url), loadImg("/images/logo_ikmsb.png")])
        .then(([renderedImg, logoImg]) => {
          if (!ctx) return;

          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(renderedImg, 0, 0, canvas.width, canvas.height);

          // ELEGANT WATERMARK: IKMSB Malang (Top-Right Corner)
          ctx.save();
          
          // 1. Watermark Official Badge (Top Right)
          const badgeWidth = 330;
          const badgeHeight = 74;
          const badgeX = canvas.width - badgeWidth - 36;
          const badgeY = 36; // Ujung kanan atas

          // Shadow
          ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
          ctx.shadowBlur = 14;
          ctx.shadowOffsetY = 4;

          // Background pill
          ctx.fillStyle = "rgba(9, 46, 27, 0.94)";
          ctx.beginPath();
          ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 20);
          ctx.fill();

          // Gold border
          ctx.shadowColor = "transparent";
          ctx.strokeStyle = "rgba(207, 168, 71, 0.95)";
          ctx.lineWidth = 2.5;
          ctx.stroke();

          // Draw official IKMSB Malang logo inside badge
          try {
            ctx.drawImage(logoImg, badgeX + 16, badgeY + 12, 50, 50);
          } catch {
            // Fallback emblem circle if image drawing fails
            ctx.fillStyle = "#cfa847";
            ctx.beginPath();
            ctx.arc(badgeX + 40, badgeY + 37, 21, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#092e1b";
            ctx.font = "bold 17px system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("M", badgeX + 40, badgeY + 37);
          }

          // Watermark Title: IKMSB Malang
          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 22px system-ui, -apple-system, sans-serif";
          ctx.textAlign = "left";
          ctx.textBaseline = "alphabetic";
          ctx.fillText("IKMSB Malang", badgeX + 78, badgeY + 34);

          // Watermark Subtitle: Tradisi Mangngaro Mamasa
          ctx.fillStyle = "#cfa847";
          ctx.font = "600 13px system-ui, -apple-system, sans-serif";
          ctx.fillText("Tradisi Mamasa", badgeX + 78, badgeY + 55);

          ctx.restore();

          const pngUrl = canvas.toDataURL("image/png");
          const downloadLink = document.createElement("a");
          downloadLink.href = pngUrl;
          downloadLink.download = `IKMSB_Malang_Karakter_${avatar.name.replace(
            /\s+/g,
            "_"
          )}_Mamasa.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(url);
          setDownloading(false);

          confetti({
            particleCount: 70,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#0d3d24", "#cfa847", "#198754"],
          });
        })
        .catch(() => {
          URL.revokeObjectURL(url);
          setDownloading(false);
        });
    } catch {
      setDownloading(false);
    }
  };

  const handleShare = () => {
    const text = `Karakter Adat Mamasa saya: "${avatar.name}" dalam Tradisi bersama IKMSB (Ikatan Keluarga Mahasiswa Sulawesi Barat)!`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${text}\n${window.location.origin}${window.location.pathname}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Anti-Gravity Floating Avatar Card */}
      <div className="relative w-full max-w-[420px] aspect-[5/6] flex items-center justify-center">
        
        {/* Floating Animation Wrapper */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#134e2f]/20 bg-white"
        >
          {/* SVG Vector 2D Character Canvas */}
          <svg
            ref={svgRef}
            viewBox="0 0 500 600"
            className="w-full h-full select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradients for Backgrounds */}
              <linearGradient id="bgLembah" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#eaf5ee" />
                <stop offset="60%" stopColor="#d5ecdc" />
                <stop offset="100%" stopColor="#b4ddbf" />
              </linearGradient>

              <linearGradient id="bgBanua" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8f4ea" />
                <stop offset="65%" stopColor="#ebe1ca" />
                <stop offset="100%" stopColor="#dac89d" />
              </linearGradient>

              <linearGradient id="bgAngin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0fbf6" />
                <stop offset="50%" stopColor="#d4f1e3" />
                <stop offset="100%" stopColor="#b2e5cc" />
              </linearGradient>

              <linearGradient id="bgSenja" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fdeee6" />
                <stop offset="60%" stopColor="#f8d5c4" />
                <stop offset="100%" stopColor="#e2a886" />
              </linearGradient>

              <linearGradient id="bgMinimalis" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#f3f8f5" />
                <stop offset="100%" stopColor="#e4eee7" />
              </linearGradient>

              {/* Gold Gradient for Passura Embroidery */}
              <linearGradient id="goldMamasa" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b88f32" />
                <stop offset="50%" stopColor="#fae188" />
                <stop offset="100%" stopColor="#c59837" />
              </linearGradient>

              {/* Emerald Fabric Gradient */}
              <linearGradient id="fabricEmerald" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#195e38" />
                <stop offset="100%" stopColor="#0b2f1c" />
              </linearGradient>

              {/* White Fabric Gradient for Mangngaro */}
              <linearGradient id="fabricWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e5ece8" />
              </linearGradient>

              {/* Earth Terracotta Fabric */}
              <linearGradient id="fabricEarth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ab4326" />
                <stop offset="100%" stopColor="#752511" />
              </linearGradient>

              {/* Subtle Shadow Filter */}
              <filter id="softDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0d3d24" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* LAYER 1: SCENE BACKGROUND */}
            <rect
              width="500"
              height="600"
              fill={
                avatar.backgroundId === "bg-banua"
                  ? "url(#bgBanua)"
                  : avatar.backgroundId === "bg-angin"
                  ? "url(#bgAngin)"
                  : avatar.backgroundId === "bg-senja"
                  ? "url(#bgSenja)"
                  : avatar.backgroundId === "bg-minimalis"
                  ? "url(#bgMinimalis)"
                  : "url(#bgLembah)"
              }
            />

            {/* Background Mamasa Mountain Silhouettes */}
            <path
              d="M-40,320 L80,180 L220,290 L380,160 L540,310 L540,600 L-40,600 Z"
              fill="#134e2f"
              fillOpacity="0.07"
            />
            <path
              d="M-20,380 L140,260 L280,360 L420,240 L520,370 L520,600 L-20,600 Z"
              fill="#0d3d24"
              fillOpacity="0.09"
            />

            {/* Sun Halo / Pa'barre Allo Emblem in Sky */}
            <g transform="translate(250, 150)" opacity="0.35">
              <circle r="70" fill="none" stroke="#cfa847" strokeWidth="1.5" strokeDasharray="4,5" />
              <circle r="56" fill="none" stroke="#134e2f" strokeWidth="1" />
              {/* Sun rays */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="-64"
                  x2="0"
                  y2="-80"
                  stroke="#cfa847"
                  strokeWidth="2"
                  transform={`rotate(${i * 45})`}
                />
              ))}
            </g>

            {/* Wind flow trails behind character */}
            {avatar.windEffect && (
              <g opacity="0.45">
                <path
                  d="M10,120 Q120,80 230,130 T450,90"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeDasharray="8,6"
                />
                <path
                  d="M30,220 Q180,180 320,230 T490,190"
                  fill="none"
                  stroke="#cfa847"
                  strokeWidth="1.8"
                  strokeDasharray="6,8"
                />
                <path
                  d="M0,450 Q160,390 310,460 T500,410"
                  fill="none"
                  stroke="#134e2f"
                  strokeWidth="1.2"
                  strokeDasharray="5,7"
                />
              </g>
            )}

            {/* LAYER 2: CHARACTER BASE BODY & SKIN */}
            <g id="character-body">
              {/* Neck & Trapezius */}
              <path
                d="M218,250 C218,275 224,300 215,315 L285,315 C276,300 282,275 282,250 Z"
                fill={activeSkin.color}
              />
              {/* Neck shadow under jaw */}
              <path
                d="M222,255 C235,272 265,272 278,255 L280,278 C265,286 235,286 220,278 Z"
                fill={activeSkin.shadow}
                opacity="0.4"
              />

              {/* Shoulders and Base Torso Silhouette */}
              <path
                d="M150,320 C180,290 320,290 350,320 L375,590 L125,590 Z"
                fill={activeSkin.shadow}
                opacity="0.2"
              />

              {/* Ears with natural anatomy */}
              <g id="ears">
                {/* Left Ear */}
                <path
                  d="M185,180 C174,180 170,195 172,210 C174,222 182,228 188,225 L188,185 Z"
                  fill={activeSkin.color}
                />
                <path
                  d="M184,188 C178,194 176,204 178,214 C180,218 184,218 185,214"
                  fill="none"
                  stroke={activeSkin.shadow}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Right Ear */}
                <path
                  d="M315,180 C326,180 330,195 328,210 C326,222 318,228 312,225 L312,185 Z"
                  fill={activeSkin.color}
                />
                <path
                  d="M316,188 C322,194 324,204 322,214 C320,218 316,218 315,214"
                  fill="none"
                  stroke={activeSkin.shadow}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </g>

              {/* Female Gold Earrings */}
              {avatar.gender === "female" && (
                <g>
                  <circle cx="178" cy="226" r="4.5" fill="#cfa847" />
                  <circle cx="322" cy="226" r="4.5" fill="#cfa847" />
                  <polygon points="178,230 174,242 182,242" fill="#fae188" />
                  <polygon points="322,230 318,242 326,242" fill="#fae188" />
                </g>
              )}

              {/* Head / Face Shape */}
              {avatar.gender === "male" ? (
                /* Handsome, structured masculine jawline */
                <path
                  d="M186,170 C186,115 314,115 314,170 C314,205 308,235 288,255 C275,268 262,272 250,272 C238,272 225,268 212,255 C192,235 186,205 186,170 Z"
                  fill={activeSkin.color}
                  filter="url(#softDrop)"
                />
              ) : (
                /* Elegant, softer feminine oval face */
                <path
                  d="M188,170 C188,118 312,118 312,170 C312,210 304,240 282,258 C270,268 258,270 250,270 C242,270 230,268 218,258 C196,240 188,210 188,170 Z"
                  fill={activeSkin.color}
                  filter="url(#softDrop)"
                />
              )}

              {/* Base Hair Layer for Male (Prevents baldness even if headwear changes) */}
              {avatar.gender === "male" && (
                <g id="male-hair-base">
                  {/* Sideburns / Jambang Rapi */}
                  <path
                    d="M186,170 L186,212 C186,216 190,214 192,208 L194,180 Z"
                    fill="#18110d"
                  />
                  <path
                    d="M314,170 L314,212 C314,216 310,214 308,208 L306,180 Z"
                    fill="#18110d"
                  />
                  {/* Hair top dome (clean dark hair under or framing passapu) */}
                  <path
                    d="M184,165 C180,105 320,105 316,165 C308,135 285,125 250,125 C215,125 192,135 184,165 Z"
                    fill="#18110d"
                  />
                </g>
              )}

              {/* Facial Features (Well-proportioned and dignified) */}
              <g id="face-features">
                {/* Eyebrows */}
                {avatar.gender === "male" ? (
                  /* Masculine defined brows */
                  <g>
                    <path
                      d="M204,176 C214,171 226,171 238,175"
                      fill="none"
                      stroke="#18110d"
                      strokeWidth="3.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M296,176 C286,171 274,171 262,175"
                      fill="none"
                      stroke="#18110d"
                      strokeWidth="3.6"
                      strokeLinecap="round"
                    />
                  </g>
                ) : (
                  /* Feminine graceful arched brows */
                  <g>
                    <path
                      d="M206,176 C216,170 228,170 238,176"
                      fill="none"
                      stroke="#22150e"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M294,176 C284,170 272,170 262,176"
                      fill="none"
                      stroke="#22150e"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </g>
                )}

                {/* Eyes - Handsome Almond Shape with Sclera & Iris */}
                <g id="eyes">
                  {/* Left Eye */}
                  <ellipse cx="222" cy="190" rx="11" ry="6.5" fill="#ffffff" />
                  <ellipse cx="223" cy="190" rx="5.5" ry="5.5" fill="#2b1a10" />
                  <circle cx="223" cy="190" r="3" fill="#0d0805" />
                  <circle cx="224.5" cy="188.5" r="1.5" fill="#ffffff" />
                  {/* Upper eyelid contour */}
                  <path
                    d="M210,191 C215,183 230,183 235,191"
                    fill="none"
                    stroke="#1c120c"
                    strokeWidth={avatar.gender === "female" ? "2.6" : "2.2"}
                    strokeLinecap="round"
                  />

                  {/* Right Eye */}
                  <ellipse cx="278" cy="190" rx="11" ry="6.5" fill="#ffffff" />
                  <ellipse cx="277" cy="190" rx="5.5" ry="5.5" fill="#2b1a10" />
                  <circle cx="277" cy="190" r="3" fill="#0d0805" />
                  <circle cx="278.5" cy="188.5" r="1.5" fill="#ffffff" />
                  {/* Upper eyelid contour */}
                  <path
                    d="M265,191 C270,183 285,183 290,191"
                    fill="none"
                    stroke="#1c120c"
                    strokeWidth={avatar.gender === "female" ? "2.6" : "2.2"}
                    strokeLinecap="round"
                  />

                  {/* Female Eyelash flicks */}
                  {avatar.gender === "female" && (
                    <g stroke="#1c120c" strokeWidth="1.8" strokeLinecap="round">
                      <line x1="234" y1="187" x2="239" y2="183" />
                      <line x1="266" y1="187" x2="261" y2="183" />
                    </g>
                  )}
                </g>

                {/* Nose - Sculpted Bridge and Wings */}
                <g id="nose">
                  <path
                    d="M246,182 L246,208 C246,214 242,217 250,217 C258,217 254,214 254,208"
                    fill="none"
                    stroke={activeSkin.shadow}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Nostrils */}
                  <ellipse cx="243" cy="216" rx="2" ry="1.2" fill={activeSkin.shadow} opacity="0.6" />
                  <ellipse cx="257" cy="216" rx="2" ry="1.2" fill={activeSkin.shadow} opacity="0.6" />
                </g>

                {/* Mouth / Smile - Warm and Dignified */}
                <g id="mouth">
                  {/* Upper lip shadow */}
                  <path
                    d="M236,236 C243,234 257,234 264,236"
                    fill="none"
                    stroke={avatar.gender === "female" ? "#a83e35" : "#6a3b2b"}
                    strokeWidth={avatar.gender === "female" ? "2.2" : "1.8"}
                    strokeLinecap="round"
                  />
                  {/* Gentle warm smile curve */}
                  <path
                    d="M234,237 C242,246 258,246 266,237"
                    fill={avatar.gender === "female" ? "#c85248" : "none"}
                    stroke={avatar.gender === "female" ? "#963028" : "#633324"}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  {/* Chin cleft/shadow */}
                  <path
                    d="M245,255 C248,257 252,257 255,255"
                    fill="none"
                    stroke={activeSkin.shadow}
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </g>

                {/* Traditional Sacred Forehead / Cheek Dot */}
                <circle cx="250" cy="158" r="2.8" fill="#cfa847" opacity="0.85" />
                {avatar.gender === "female" && (
                  <>
                    <circle cx="210" cy="204" r="7" fill="#e88278" opacity="0.22" />
                    <circle cx="290" cy="204" r="7" fill="#e88278" opacity="0.22" />
                  </>
                )}
              </g>
            </g>

            {/* LAYER 3: TRADITIONAL OUTFIT (BUSANA ADAT MAMASA) */}
            <g id="outfit-layer">
              {/* Male Outfits */}
              {avatar.gender === "male" && (
                <g>
                  {/* Jas Tutup Passura Zamrud */}
                  {avatar.outfitId === "jas-passura-zamrud" && (
                    <g filter="url(#softDrop)">
                      {/* Main Coat Body */}
                      <path
                        d="M152,310 C180,285 320,285 348,310 L378,590 L122,590 Z"
                        fill="url(#fabricEmerald)"
                      />
                      {/* Gold Shoulder Trim (Pa'tedong Epaulets) */}
                      <path d="M152,310 L185,295 L195,315 L160,330 Z" fill="#cfa847" opacity="0.9" />
                      <path d="M348,310 L315,295 L305,315 L340,330 Z" fill="#cfa847" opacity="0.9" />
                      
                      {/* Authentic Mandarin Collar (Kerah Tutup Adat) */}
                      <path
                        d="M214,260 C230,256 270,256 286,260 L284,292 C268,296 232,296 216,292 Z"
                        fill="#062b18"
                        stroke="#cfa847"
                        strokeWidth="2.5"
                      />
                      {/* Gold Collar Clasp */}
                      <circle cx="250" cy="276" r="4.5" fill="url(#goldMamasa)" />

                      {/* Center Placket with Passura Embroidery */}
                      <rect x="240" y="292" width="20" height="298" fill="#072b19" />
                      <line x1="242" y1="292" x2="242" y2="590" stroke="#cfa847" strokeWidth="1.5" />
                      <line x1="258" y1="292" x2="258" y2="590" stroke="#cfa847" strokeWidth="1.5" />
                      
                      {/* Filigree Gold Buttons */}
                      {[315, 350, 385, 420, 455, 490, 525].map((y) => (
                        <g key={y}>
                          <circle cx="250" cy={y} r="5" fill="url(#goldMamasa)" stroke="#745112" strokeWidth="1" />
                          <circle cx="250" cy={y} r="2" fill="#ffffff" opacity="0.7" />
                        </g>
                      ))}

                      {/* Chest Geometric Carving Accents */}
                      <polygon points="195,335 225,335 210,360" fill="none" stroke="#cfa847" strokeWidth="2" />
                      <polygon points="305,335 275,335 290,360" fill="none" stroke="#cfa847" strokeWidth="2" />
                    </g>
                  )}

                  {/* Baju Putih Bersih Mangngaro */}
                  {avatar.outfitId === "baju-putih" && (
                    <g filter="url(#softDrop)">
                      {/* Crisp White Ceremonial Robe */}
                      <path
                        d="M152,310 C180,285 320,285 348,310 L378,590 L122,590 Z"
                        fill="url(#fabricWhite)"
                      />
                      {/* Emerald & Silver Shoulder Trim */}
                      <path d="M152,310 L185,295 L195,315 L160,330 Z" fill="#134e2f" opacity="0.85" />
                      <path d="M348,310 L315,295 L305,315 L340,330 Z" fill="#134e2f" opacity="0.85" />
                      
                      {/* Tailored White Mandarin Collar */}
                      <path
                        d="M214,260 C230,256 270,256 286,260 L284,292 C268,296 232,296 216,292 Z"
                        fill="#ffffff"
                        stroke="#134e2f"
                        strokeWidth="2.5"
                      />
                      <circle cx="250" cy="276" r="4.5" fill="#134e2f" />

                      {/* Center Placket with Emerald/Gold Piping */}
                      <rect x="242" y="292" width="16" height="298" fill="#eaf3ec" />
                      <line x1="242" y1="292" x2="242" y2="590" stroke="#134e2f" strokeWidth="1.5" />
                      <line x1="258" y1="292" x2="258" y2="590" stroke="#134e2f" strokeWidth="1.5" />
                      
                      {/* Ceremonial Emerald Buttons */}
                      {[315, 350, 385, 420, 455, 490, 525].map((y) => (
                        <g key={y}>
                          <circle cx="250" cy={y} r="5" fill="#134e2f" stroke="#cfa847" strokeWidth="1" />
                          <circle cx="250" cy={y} r="2" fill="#ffffff" opacity="0.8" />
                        </g>
                      ))}
                    </g>
                  )}

                  {/* Baju Sutra Emas Bella Dada */}
                  {avatar.outfitId === "baju-sutra-emas" && (
                    <g filter="url(#softDrop)">
                      {/* Luxurious Golden Silk Coat */}
                      <path
                        d="M152,310 C180,285 320,285 348,310 L378,590 L122,590 Z"
                        fill="url(#goldMamasa)"
                      />
                      {/* Emerald Silk Lapels */}
                      <polygon points="250,292 210,380 290,380" fill="#0d3d24" stroke="#cfa847" strokeWidth="2" />
                      <circle cx="250" cy="340" r="5" fill="#ffffff" />
                      
                      {/* Golden Collar with Emerald Trimming */}
                      <path
                        d="M214,260 C230,256 270,256 286,260 L284,292 C268,296 232,296 216,292 Z"
                        fill="#cfa847"
                        stroke="#0d3d24"
                        strokeWidth="2.5"
                      />
                      
                      {/* Center Placket */}
                      <rect x="242" y="380" width="16" height="210" fill="#0d3d24" />
                      {[410, 450, 490, 530].map((y) => (
                        <circle key={y} cx="250" cy={y} r="4.5" fill="#fae188" stroke="#704e0e" strokeWidth="1" />
                      ))}
                    </g>
                  )}

                  {/* Tenun Sambur Merah Bumi */}
                  {avatar.outfitId === "tenun-sambur-merah" && (
                    <g filter="url(#softDrop)">
                      {/* Traditional Heavy Woven Textile Body */}
                      <path
                        d="M152,310 C180,285 320,285 348,310 L378,590 L122,590 Z"
                        fill="url(#fabricEarth)"
                      />
                      {/* Woven Collar */}
                      <path
                        d="M214,260 C230,256 270,256 286,260 L284,292 C268,296 232,296 216,292 Z"
                        fill="#752511"
                        stroke="#fae188"
                        strokeWidth="2.5"
                      />
                      <circle cx="250" cy="276" r="4.5" fill="#fae188" />

                      {/* Ethnic Woven Zigzag Stripes (Motif Pa'sulan Sangbua) */}
                      {[325, 365, 405, 445, 485, 525].map((y, idx) => (
                        <path
                          key={y}
                          d={`M130,${y} L155,${y - 8} L180,${y} L205,${y - 8} L230,${y} L255,${y - 8} L280,${y} L305,${y - 8} L330,${y} L355,${y - 8} L372,${y}`}
                          fill="none"
                          stroke={idx % 2 === 0 ? "#fae188" : "#134e2f"}
                          strokeWidth="2.5"
                        />
                      ))}
                    </g>
                  )}
                </g>
              )}

              {/* Female Outfits */}
              {avatar.gender === "female" && (
                <g>
                  {/* Baju Pokko Hijau Zamrud */}
                  {avatar.outfitId === "pokko-hijau-zamrud" && (
                    <g>
                      <path
                        d="M170,290 C195,270 305,270 330,290 L360,590 L140,590 Z"
                        fill="url(#fabricEmerald)"
                        filter="url(#softDrop)"
                      />
                      {/* Scoop neckline */}
                      <path
                        d="M210,285 Q250,330 290,285"
                        fill={activeSkin.color}
                        stroke="#cfa847"
                        strokeWidth="3.5"
                      />
                      {/* Golden Passura necklace embroidery on Pokko */}
                      <path
                        d="M200,290 Q250,350 300,290"
                        fill="none"
                        stroke="#fae188"
                        strokeWidth="2"
                        strokeDasharray="4,3"
                      />
                      {/* Sleeve bands */}
                      <rect x="142" y="380" width="30" height="8" fill="#cfa847" />
                      <rect x="328" y="380" width="30" height="8" fill="#cfa847" />
                    </g>
                  )}

                  {/* Baju Pokko Putih Suci Mangngaro */}
                  {avatar.outfitId === "pokko-putih" && (
                    <g>
                      <path
                        d="M170,290 C195,270 305,270 330,290 L360,590 L140,590 Z"
                        fill="url(#fabricWhite)"
                        filter="url(#softDrop)"
                      />
                      <path
                        d="M212,285 Q250,325 288,285"
                        fill={activeSkin.color}
                        stroke="#134e2f"
                        strokeWidth="3"
                      />
                      {/* Delicate emerald beads */}
                      <path
                        d="M205,295 Q250,345 295,295"
                        fill="none"
                        stroke="#198754"
                        strokeWidth="2"
                        strokeDasharray="3,3"
                      />
                    </g>
                  )}

                  {/* Baju Pokko Merah Marun */}
                  {avatar.outfitId === "pokko-merah-marun" && (
                    <g>
                      <path
                        d="M170,290 C195,270 305,270 330,290 L360,590 L140,590 Z"
                        fill="url(#fabricEarth)"
                        filter="url(#softDrop)"
                      />
                      <path
                        d="M210,285 Q250,330 290,285"
                        fill={activeSkin.color}
                        stroke="#cfa847"
                        strokeWidth="3.5"
                      />
                      <circle cx="250" cy="350" r="16" fill="none" stroke="#fae188" strokeWidth="2" />
                      <circle cx="250" cy="350" r="8" fill="#cfa847" />
                    </g>
                  )}

                  {/* Kebaya Tenun Kuning Langsat */}
                  {avatar.outfitId === "tenun-ikat-kuning" && (
                    <g>
                      <path
                        d="M170,290 C195,270 305,270 330,290 L360,590 L140,590 Z"
                        fill="url(#goldMamasa)"
                        filter="url(#softDrop)"
                      />
                      <path
                        d="M215,285 Q250,320 285,285"
                        fill={activeSkin.color}
                        stroke="#0d3d24"
                        strokeWidth="2.5"
                      />
                      {/* Central vertical brocade */}
                      <rect x="246" y="320" width="8" height="270" fill="#0d3d24" />
                    </g>
                  )}
                </g>
              )}
            </g>

            {/* LAYER 4: SELEMPANG / SASH (DIAGONAL TENUN) */}
            {avatar.sashId !== "sash-none" && (
              <g id="sash-layer" filter="url(#softDrop)">
                {avatar.sashId === "sash-sambur-zamrud" && (
                  <g>
                    <path
                      d="M190,280 L320,530 L290,560 L160,300 Z"
                      fill="#0d3d24"
                      stroke="#cfa847"
                      strokeWidth="2"
                    />
                    {/* Tenun zigzag diamonds */}
                    {[320, 360, 400, 440, 480].map((y) => (
                      <polygon
                        key={y}
                        points={`240,${y} 248,${y - 8} 256,${y} 248,${y + 8}`}
                        fill="#fae188"
                      />
                    ))}
                    {/* Tassels at bottom */}
                    <line x1="290" y1="560" x2="285" y2="585" stroke="#cfa847" strokeWidth="2.5" />
                    <line x1="300" y1="550" x2="295" y2="585" stroke="#cfa847" strokeWidth="2.5" />
                    <line x1="310" y1="540" x2="305" y2="585" stroke="#cfa847" strokeWidth="2.5" />
                  </g>
                )}

                {avatar.sashId === "sash-merah-sarita" && (
                  <g>
                    <path
                      d="M190,280 L320,530 L290,560 L160,300 Z"
                      fill="#912c1b"
                      stroke="#fae188"
                      strokeWidth="2"
                    />
                    <path
                      d="M180,290 L310,540"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                    />
                  </g>
                )}

                {avatar.sashId === "sash-putih-suci" && (
                  <g>
                    <path
                      d="M190,280 L320,530 L290,560 L160,300 Z"
                      fill="#ffffff"
                      stroke="#134e2f"
                      strokeWidth="2"
                    />
                    <line x1="175" y1="290" x2="305" y2="545" stroke="#cfa847" strokeWidth="1.8" />
                  </g>
                )}
              </g>
            )}

            {/* LAYER 5: ACCESSORIES / PUSAKA & KALUNG */}
            <g id="accessory-layer">
              {/* Kalung Manik Kandaure (Beaded Cascade) */}
              {avatar.accessoryId === "kalung-kandaure" && (
                <g filter="url(#softDrop)">
                  <path
                    d="M200,285 Q250,370 300,285"
                    fill="none"
                    stroke="#cfa847"
                    strokeWidth="3.5"
                  />
                  {/* Cascading fringe */}
                  {[220, 230, 240, 250, 260, 270, 280].map((x, i) => (
                    <line
                      key={x}
                      x1={x}
                      y1={300 + (i === 3 ? 20 : 10)}
                      x2={x}
                      y2={335 + (i === 3 ? 35 : 18)}
                      stroke={i % 2 === 0 ? "#fae188" : "#912c1b"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  ))}
                  <polygon points="250,380 238,360 262,360" fill="#cfa847" />
                </g>
              )}

              {/* Gayang Mamasa (Keris Pusaka) */}
              {avatar.accessoryId === "gayang-mamasa" && (
                <g transform="translate(185, 410) rotate(-22)" filter="url(#softDrop)">
                  {/* Ornate carved wooden hilt (Hulu Keris) */}
                  <path
                    d="M30,0 C38,-10 50,-10 52,5 C48,20 40,24 35,32 Z"
                    fill="#422510"
                    stroke="#cfa847"
                    strokeWidth="1.5"
                  />
                  {/* Gold collar / Mendak */}
                  <rect x="28" y="32" width="16" height="6" rx="2" fill="#fae188" />
                  {/* Sheath / Sarung Keris with curved boat wing */}
                  <path
                    d="M10,38 Q36,44 65,36 L40,150 L32,150 Z"
                    fill="#134e2f"
                    stroke="#cfa847"
                    strokeWidth="2"
                  />
                  {/* Embossed gold bands */}
                  <line x1="28" y1="65" x2="48" y2="65" stroke="#fae188" strokeWidth="2.5" />
                  <line x1="30" y1="95" x2="44" y2="95" stroke="#fae188" strokeWidth="2.5" />
                </g>
              )}

              {/* Salipi Perak (Silver Belt) */}
              {avatar.accessoryId === "salipi-perak" && (
                <g filter="url(#softDrop)">
                  <path
                    d="M175,440 Q250,455 325,440 L325,465 Q250,480 175,465 Z"
                    fill="#e0e8e4"
                    stroke="#7d968b"
                    strokeWidth="2"
                  />
                  <circle cx="250" cy="458" r="14" fill="#cfa847" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="250" cy="458" r="6" fill="#134e2f" />
                </g>
              )}

              {/* Daun Suci Mangngaro (Sacred Ritual Leaves) */}
              {avatar.accessoryId === "daun-suci" && (
                <g transform="translate(290, 420) rotate(15)" filter="url(#softDrop)">
                  <path d="M0,0 Q25,-40 50,-20 Q25,0 0,0" fill="#198754" stroke="#cfa847" strokeWidth="1.5" />
                  <path d="M5,10 Q35,-20 60,0 Q35,20 5,10" fill="#134e2f" stroke="#cfa847" strokeWidth="1.5" />
                  <line x1="0" y1="0" x2="60" y2="0" stroke="#fae188" strokeWidth="1.2" />
                </g>
              )}
            </g>

            {/* LAYER 6: HEADWEAR / PASSAPU / SA'PI / SANGGUL */}
            <g id="headwear-layer">
              {/* Male Headwear */}
              {avatar.gender === "male" && (
                <g filter="url(#softDrop)">
                  {/* Passapu Hijau Zamrud */}
                  {avatar.hairHeadwearId === "passapu-zamrud" && (
                    <g id="passapu-hijau">
                      {/* Full Head Cap / Cloth Dome (covers the entire head, eliminating baldness) */}
                      <path
                        d="M180,165 C176,92 324,92 320,165 C300,148 200,148 180,165 Z"
                        fill="#0d3d24"
                      />
                      {/* Subtle cloth weave highlights */}
                      <path
                        d="M200,128 C230,108 270,108 300,128"
                        fill="none"
                        stroke="#195e38"
                        strokeWidth="3"
                        opacity="0.6"
                      />

                      {/* Main Forehead Wrap Band */}
                      <path
                        d="M174,152 C204,136 296,136 326,152 L324,174 C296,158 204,158 176,174 Z"
                        fill="#062b18"
                        stroke="#cfa847"
                        strokeWidth="2.5"
                      />

                      {/* Signature Mamasa Noble Fold (Lipatan Tanduk Pa'tedong Mengembang Tegak) */}
                      <g id="passapu-horn-crest">
                        {/* Shadow under crest */}
                        <polygon points="178,160 152,82 208,136" fill="#03160c" opacity="0.4" />
                        {/* Main Fold Wing */}
                        <polygon
                          points="180,158 156,85 206,134"
                          fill="#0d3d24"
                          stroke="#cfa847"
                          strokeWidth="2.5"
                        />
                        {/* Inner geometric gold fold lining */}
                        <polygon
                          points="178,150 162,96 198,130"
                          fill="#134e2f"
                          stroke="#fae188"
                          strokeWidth="1.8"
                        />
                        {/* Sacred Passura diamond emblem on fold */}
                        <polygon points="176,125 182,112 188,125 182,138" fill="url(#goldMamasa)" />
                      </g>

                      {/* Fold Pleat Lines along the Headband */}
                      <line x1="205" y1="144" x2="202" y2="166" stroke="#cfa847" strokeWidth="1.5" />
                      <line x1="250" y1="138" x2="250" y2="162" stroke="#cfa847" strokeWidth="2" />
                      <line x1="295" y1="144" x2="298" y2="166" stroke="#cfa847" strokeWidth="1.5" />

                      {/* Decorative Golden Passura Diamonds across the Band */}
                      {[218, 234, 266, 282].map((x) => (
                        <polygon
                          key={x}
                          points={`${x},150 ${x + 4},145 ${x + 8},150 ${x + 4},155`}
                          fill="url(#goldMamasa)"
                        />
                      ))}
                    </g>
                  )}

                  {/* Passapu Emas Pusaka */}
                  {avatar.hairHeadwearId === "passapu-emas" && (
                    <g id="passapu-emas">
                      {/* Golden Cloth Crown Dome */}
                      <path
                        d="M180,165 C176,90 324,90 320,165 C300,146 200,146 180,165 Z"
                        fill="url(#goldMamasa)"
                      />
                      {/* Brocade texture */}
                      <path d="M195,125 Q250,105 305,125" stroke="#7a5513" strokeWidth="2" fill="none" opacity="0.4" />

                      {/* Symmetrical Twin Horn Folds (Lipatan Tanduk Kembar) */}
                      {/* Left Horn */}
                      <polygon
                        points="182,156 150,82 204,130"
                        fill="url(#goldMamasa)"
                        stroke="#0d3d24"
                        strokeWidth="2.2"
                      />
                      <polygon points="180,148 158,94 196,126" fill="#fae188" />

                      {/* Right Horn */}
                      <polygon
                        points="318,156 350,82 296,130"
                        fill="url(#goldMamasa)"
                        stroke="#0d3d24"
                        strokeWidth="2.2"
                      />
                      <polygon points="320,148 342,94 304,126" fill="#fae188" />

                      {/* Main Forehead Wrap Band */}
                      <path
                        d="M174,152 C204,136 296,136 326,152 L324,174 C296,158 204,158 176,174 Z"
                        fill="#0d3d24"
                        stroke="#fae188"
                        strokeWidth="2.5"
                      />
                      {/* Central Ruby / Jewel Accent */}
                      <circle cx="250" cy="155" r="5" fill="#a82318" stroke="#ffffff" strokeWidth="1" />
                    </g>
                  )}

                  {/* Passapu Tenun Sambur */}
                  {avatar.hairHeadwearId === "passapu-marun" && (
                    <g id="passapu-marun">
                      {/* Maroon Woven Cap */}
                      <path
                        d="M180,165 C176,92 324,92 320,165 C300,148 200,148 180,165 Z"
                        fill="#87291a"
                      />
                      {/* Woven Zigzag Pattern on Dome */}
                      <path
                        d="M185,130 L200,122 L215,130 L230,122 L245,130 L260,122 L275,130 L290,122 L305,130 L315,124"
                        fill="none"
                        stroke="#fae188"
                        strokeWidth="2"
                      />

                      {/* Asymmetrical Traditional Crest Fold */}
                      <polygon
                        points="180,158 154,84 206,132"
                        fill="#87291a"
                        stroke="#fae188"
                        strokeWidth="2.5"
                      />
                      <polygon points="178,148 160,96 196,125" fill="#a83522" stroke="#ffffff" strokeWidth="1" />

                      {/* Forehead Band */}
                      <path
                        d="M174,152 C204,136 296,136 326,152 L324,174 C296,158 204,158 176,174 Z"
                        fill="#062b18"
                        stroke="#fae188"
                        strokeWidth="2.5"
                      />
                      <line x1="182" y1="163" x2="318" y2="163" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,4" />
                    </g>
                  )}

                  {/* Rambut Tradisional Rapi (Tanpa Passapu) */}
                  {avatar.hairHeadwearId === "rambut-rapi" && (
                    <g id="rambut-rapi">
                      {/* Handsome, Textured Modern/Traditional Haircut with Volume */}
                      <path
                        d="M180,165 C175,90 325,90 320,165 C310,135 288,122 250,122 C212,122 190,135 180,165 Z"
                        fill="#18110d"
                      />
                      {/* Hair parting and textured sweeps */}
                      <path
                        d="M210,125 C230,105 275,108 310,135"
                        fill="none"
                        stroke="#332219"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M215,138 C238,122 270,124 298,145"
                        fill="none"
                        stroke="#332219"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      {/* Clean side fade line */}
                      <path
                        d="M184,168 C186,188 188,206 192,214"
                        fill="none"
                        stroke="#18110d"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M316,168 C314,188 312,206 308,214"
                        fill="none"
                        stroke="#18110d"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </g>
                  )}
                </g>
              )}

              {/* Female Headwear */}
              {avatar.gender === "female" && (
                <g filter="url(#softDrop)">
                  {/* Sa'pi Manik Bunga */}
                  {avatar.hairHeadwearId === "sapi-manik" && (
                    <g>
                      {/* Glossy black hair pulled back */}
                      <path
                        d="M175,180 C175,95 325,95 325,180 C315,135 285,120 250,120 C215,120 185,135 175,180 Z"
                        fill="#130d0a"
                      />
                      {/* Beaded Sa'pi headband */}
                      <path
                        d="M176,162 C205,135 295,135 324,162"
                        fill="none"
                        stroke="#0d3d24"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      {/* Colorful floral beads */}
                      {[190, 205, 220, 235, 250, 265, 280, 295, 310].map((x, i) => (
                        <circle
                          key={x}
                          cx={x}
                          cy={150 - (i === 4 ? 6 : Math.abs(i - 4) * 1.5)}
                          r="4"
                          fill={i % 3 === 0 ? "#fae188" : i % 3 === 1 ? "#d93829" : "#198754"}
                        />
                      ))}
                    </g>
                  )}

                  {/* Sanggul Hias Kandaure */}
                  {avatar.hairHeadwearId === "sanggul-kandaure" && (
                    <g>
                      {/* High ornate bun */}
                      <circle cx="250" cy="105" r="38" fill="#130d0a" />
                      <circle cx="250" cy="105" r="32" fill="none" stroke="#cfa847" strokeWidth="2" />
                      {/* Golden Hairpin (Tusuk Konde) */}
                      <line x1="200" y1="85" x2="300" y2="125" stroke="#fae188" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="200" cy="85" r="7" fill="#d93829" />
                      {/* Hair framing face */}
                      <path
                        d="M175,180 C175,115 325,115 325,180 C315,145 285,130 250,130 C215,130 185,145 175,180 Z"
                        fill="#130d0a"
                      />
                    </g>
                  )}

                  {/* Mahkota Daun Emas */}
                  {avatar.hairHeadwearId === "mahkota-lontar" && (
                    <g>
                      <path
                        d="M175,180 C175,100 325,100 325,180 C315,135 285,120 250,120 C215,120 185,135 175,180 Z"
                        fill="#130d0a"
                      />
                      {/* Sun ray spikes */}
                      {[210, 226, 242, 258, 274, 290].map((x, i) => (
                        <polygon
                          key={x}
                          points={`${x},142 ${x + 6},${115 - (i === 2 || i === 3 ? 12 : 0)} ${x + 12},142`}
                          fill="url(#goldMamasa)"
                        />
                      ))}
                      <rect x="195" y="140" width="110" height="7" rx="3" fill="#cfa847" />
                    </g>
                  )}

                  {/* Rambut Terurai Melati */}
                  {avatar.hairHeadwearId === "rambut-terurai" && (
                    <g>
                      {/* Long cascading hair flowing down shoulders */}
                      <path
                        d="M175,180 C170,110 330,110 325,180 L345,350 C335,350 320,330 315,260 L315,180 C285,130 215,130 185,180 L185,260 C180,330 165,350 155,350 Z"
                        fill="#130d0a"
                      />
                      {/* Jasmine flower bud in hair */}
                      <circle cx="192" cy="165" r="6" fill="#ffffff" />
                      <circle cx="192" cy="165" r="2.5" fill="#fae188" />
                    </g>
                  )}
                </g>
              )}
            </g>

            {/* FOREFRONT FLOATING WIND RIBBONS (ANTI-GRAVITY FEEL) */}
            {avatar.windEffect && (
              <g opacity="0.6">
                <path
                  d="M-10,380 Q140,320 250,380 T510,320"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeDasharray="6,8"
                />
                <circle cx="280" cy="365" r="3" fill="#cfa847" opacity="0.8" />
                <circle cx="150" cy="340" r="2.5" fill="#ffffff" opacity="0.7" />
              </g>
            )}
          </svg>

          {/* Top-Right Badge: IKMSB Malang with Official Logo */}
          <div className="absolute top-3.5 right-3.5 bg-[#092e1b]/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#cfa847]/50 shadow-md flex items-center gap-2 text-[11px] font-bold text-white z-10">
            <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
              <Image
                src="/images/logo_ikmsb.png"
                alt="Logo Resmi IKMSB Malang"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <span>IKMSB Malang</span>
          </div>

          {/* Bottom Card Label inside the canvas frame */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#0d3d24]/15 shadow-md flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-[#0d3d24] tracking-tight">
                {avatar.name || "Karakter Mamasa"}
              </p>
              <p className="text-[10px] font-medium text-[#5e7e6d]">
                {avatar.gender === "male" ? "Pria (To Mamasa)" : "Wanita (Baine Sura')"} •{" "}
                {activeBg.name}
              </p>
            </div>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#134e2f] text-white">
              Mamasa
            </span>
          </div>
        </motion.div>

        {/* Dynamic Synchronized Anti-Gravity Ground Shadow */}
        <motion.div
          animate={{
            scaleX: [1, 0.85, 1],
            opacity: [0.25, 0.12, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-5 w-3/5 h-4 rounded-full bg-[#0d3d24]/20 blur-md pointer-events-none"
        />
      </div>

      {/* Action Buttons Under Canvas */}
      <div className="w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
        {/* Main Export / Download Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDownload}
          disabled={downloading}
          className="w-full flex items-center justify-center gap-2 sm:gap-2.5 py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl bg-[#0d3d24] hover:bg-[#134e2f] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#0d3d24]/20 border border-[#cfa847]/40 transition-all cursor-pointer"
        >
          <Download className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#cfa847]" />
          <span>{downloading ? "Memproses Unduhan..." : "Unduh Avatar (PNG HD)"}</span>
        </motion.button>

        {/* Action Controls Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {/* Randomize */}
          <button
            onClick={handleRandomizeClick}
            type="button"
            className="flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-white hover:bg-[#f4f8f5] text-[#0d3d24] font-bold text-[11px] sm:text-xs border border-[#134e2f]/20 shadow-sm transition-all"
            title="Acak Karakter"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#134e2f]" />
            <span>Acak</span>
          </button>

          {/* Reset */}
          <button
            onClick={onReset}
            type="button"
            className="flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-white hover:bg-[#f4f8f5] text-[#5e7e6d] font-semibold text-[11px] sm:text-xs border border-gray-200 shadow-sm transition-all"
            title="Reset ke Awal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            type="button"
            className="flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-white hover:bg-[#f4f8f5] text-[#0d3d24] font-bold text-[11px] sm:text-xs border border-[#134e2f]/20 shadow-sm transition-all"
            title="Salin Tautan / Deskripsi"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-600 text-[10px] sm:text-xs">Tersalin!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#134e2f]" />
                <span>Bagikan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
