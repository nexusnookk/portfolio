"use client";

import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface OverlayProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function Overlay({ heroRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // PHASE 1: Ghost Watermark (0.00 -> 0.28)
  const opacityP1 = useTransform(scrollYProgress, [0, 0.1, 0.18, 0.28], [1, 1, 1, 0]);

  // PHASE 2: Name Intro Block (0.28 -> 0.52)
  const opacityP2 = useTransform(scrollYProgress, [0.28, 0.34, 0.40, 0.46], [0, 1, 1, 0]);
  const yP2 = useTransform(scrollYProgress, [0.28, 0.46], [30, -30]);

  // PHASE 3: Role Statement (0.52 -> 0.78)
  const opacityP3 = useTransform(scrollYProgress, [0.52, 0.62, 0.7, 0.78], [0, 1, 1, 0]);
  // Add a slight upward movement for Phase 3 for smoothness
  const yP3 = useTransform(scrollYProgress, [0.52, 0.78], [40, -40]);

  // PHASE 4: Main Headline (0.78 -> 1.00)
  const opacityP4 = useTransform(scrollYProgress, [0.78, 0.88, 0.96, 1.0], [0, 1, 1, 0]);
  const yP4 = useTransform(scrollYProgress, [0.78, 1.0], [40, -40]);

  const overlayOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  return (
    <motion.div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center h-[100svh]" style={{ opacity: overlayOpacity, willChange: "opacity, transform", backfaceVisibility: "hidden" }}>
      {/* PHASE 1 */}
      <motion.div
        className="absolute w-full text-center flex items-center justify-center"
        style={{ opacity: opacityP1, willChange: "opacity, transform", backfaceVisibility: "hidden" }}
      >
        <h1
          className="text-white opacity-10 font-black"
          style={{ fontSize: "clamp(5rem, 15vw, 14rem)" }}
        >
          Sinan T P
        </h1>
      </motion.div>

      {/* PHASE 2 */}
      <motion.div
        className="absolute w-full flex flex-col items-center justify-center text-center px-4"
        style={{ opacity: opacityP2, y: yP2, willChange: "opacity, transform", backfaceVisibility: "hidden" }}
      >
        <p className="text-sm md:text-base text-gray-400 mb-2 uppercase tracking-widest">
          Digital Marketing · Web Development · E-commerce
        </p>
        <h2
          className="text-white font-extrabold leading-tight"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "-0.04em",
          }}
        >
          MUHAMMED SINAN
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mt-4 uppercase tracking-[0.2em]">
          Creative Developer · E-commerce Expert · AI Workflow Builder
        </p>
      </motion.div>

      {/* PHASE 3 */}
      <motion.div
        className="absolute w-full flex items-center justify-center text-center px-4"
        style={{ opacity: opacityP3, y: yP3, willChange: "opacity, transform", backfaceVisibility: "hidden" }}
      >
        <h2
          className="text-white font-bold leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Digital Marketer &<br />
          Creative Web Developer.
        </h2>
      </motion.div>

      {/* PHASE 4 */}
      <motion.div
        className="absolute w-full flex flex-col items-center justify-center text-center px-4"
        style={{ opacity: opacityP4, y: yP4, willChange: "opacity, transform", backfaceVisibility: "hidden" }}
      >
        <h2
          className="text-white font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          I Build Brands, Websites &<br />
          Digital Systems That Drive Growth.
        </h2>
        <p className="text-sm md:text-lg text-gray-400 uppercase tracking-widest font-medium">
          SEO · E-commerce · Automation · Creative Development
        </p>
      </motion.div>
    </div>
  );
}
