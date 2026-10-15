"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface WindParticle {
  id: number;
  startX: number;
  startY: number;
  length: number;
  duration: number;
  delay: number;
  strokeWidth: number;
  opacity: number;
}

export default function WindParticles() {
  const [particles, setParticles] = useState<WindParticle[]>([]);

  useEffect(() => {
    // Generate gentle breeze wind trails
    const newParticles: WindParticle[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 95,
      length: 60 + Math.random() * 140,
      duration: 7 + Math.random() * 6,
      delay: Math.random() * 5,
      strokeWidth: 1 + Math.random() * 1.5,
      opacity: 0.15 + Math.random() * 0.35,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="windGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#134e2f" stopOpacity="0" />
            <stop offset="40%" stopColor="#198754" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#cfa847" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d3d24" stopOpacity="0" />
          </linearGradient>
        </defs>

        {particles.map((p) => (
          <motion.g
            key={p.id}
            initial={{ x: "-20vw", opacity: 0 }}
            animate={{
              x: ["0vw", "120vw"],
              y: [0, (p.id % 2 === 0 ? -18 : 18), 0],
              opacity: [0, p.opacity, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Elegant wavy wind line */}
            <path
              d={`M 0 ${p.startY * 8} Q ${p.length * 0.5} ${p.startY * 8 - 12}, ${p.length} ${p.startY * 8}`}
              fill="none"
              stroke="url(#windGrad)"
              strokeWidth={p.strokeWidth}
              strokeDasharray="6,8"
              strokeLinecap="round"
            />
            {/* Small floating sacred leaf/petal */}
            {p.id % 3 === 0 && (
              <circle
                cx={p.length * 0.8}
                cy={p.startY * 8 - 6}
                r="2.5"
                fill="#cfa847"
                opacity="0.5"
              />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
