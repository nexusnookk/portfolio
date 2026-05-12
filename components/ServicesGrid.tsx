"use client";

import React from "react";

const services = [
  {
    title: "📈 Digital Marketing",
    desc: "SEO, Meta Ads, content strategy, and performance-driven marketing systems."
  },
  {
    title: "💻 Web Development",
    desc: "Modern responsive websites built with Next.js, Tailwind CSS, Antigravity, and VS Code."
  },
  {
    title: "🛒 E-commerce Growth",
    desc: "Shopify and WooCommerce stores focused on speed, conversions, and customer experience."
  },
  {
    title: "🤖 AI Automation",
    desc: "AI workflows, smart automations, chatbot systems, and scalable digital processes."
  },
  {
    title: "🎨 UI/UX Design",
    desc: "Premium interfaces, cinematic layouts, and immersive user experiences."
  },
  {
    title: "🚀 Personal Branding",
    desc: "LinkedIn growth, creator branding, portfolio strategy, and social presence optimization."
  }
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center tracking-[-0.03em]">
          Core Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/30 hover:-translate-y-1 flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold text-white">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
