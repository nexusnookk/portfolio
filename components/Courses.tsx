"use client";

import React from "react";

const courses = [
  {
    title: "Advanced Meta Ads & Performance Marketing",
    badge: "Most Popular",
    platform: "Meta Blueprint",
  },
  {
    title: "Modern Web Development With Next.js",
    badge: "Bestseller",
    platform: "YouTube",
  },
  {
    title: "Shopify & WooCommerce Mastery",
    badge: "Highest Rated",
    platform: "Udemy",
  },
  {
    title: "SEO & Content Growth Strategies",
    badge: "Most Popular",
    platform: "Skillshare",
  },
  {
    title: "AI Automation Systems",
    badge: "Trending",
    platform: "n8n",
  },
  {
    title: "UI/UX Design With Figma",
    badge: "Bestseller",
    platform: "Figma",
  },
];

export default function Courses() {
  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center tracking-[-0.03em]">
          Continuous Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  {c.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 leading-snug tracking-[-0.03em]">
                  {c.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-medium">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">🎓</div>
                {c.platform}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
