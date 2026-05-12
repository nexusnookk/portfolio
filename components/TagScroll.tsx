"use client";

import React from "react";

const tags = [
  "Digital Marketer",
  "Web Developer",
  "E-commerce Expert",
  "SEO Specialist",
  "Antigravity Developer",
  "VS Code Workflow",
  "Shopify Expert",
  "WooCommerce Builder",
  "Meta Ads",
  "Brand Strategy",
  "UI/UX Design",
  "Landing Pages",
  "AI Automation",
  "Content Marketing",
  "Creative Branding",
  "Performance Marketing",
];

export default function TagScroll() {
  const extendedTags = [...tags, ...tags];

  return (
    <section className="bg-[#111111] py-24 md:py-32 overflow-hidden flex flex-col gap-6">
      {/* Row 1 - Scrolling Left */}
      <div className="flex w-[200%] animate-scroll-left">
        {extendedTags.map((tag, i) => (
          <div
            key={`row1-${i}`}
            className="border border-white/20 rounded-full px-6 py-2 text-white whitespace-nowrap mx-3 text-lg md:text-xl font-medium"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="flex w-[200%] animate-scroll-right">
        {[...extendedTags].reverse().map((tag, i) => (
          <div
            key={`row2-${i}`}
            className="border border-white/20 rounded-full px-6 py-2 text-white whitespace-nowrap mx-3 text-lg md:text-xl font-medium"
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}
