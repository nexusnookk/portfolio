"use client";

import React, { useEffect, useRef, useState } from "react";

const timelineItems = [
  {
    year: "2022",
    title: "Started Learning Digital Marketing",
    desc: "Discovered branding, SEO, and performance marketing."
  },
  {
    year: "2023",
    title: "Entered Web Development",
    desc: "Started building modern responsive websites and frontend experiences."
  },
  {
    year: "2024",
    title: "Focused on E-commerce & Automation",
    desc: "Learned Shopify, WooCommerce, AI workflows, and conversion systems."
  },
  {
    year: "2025",
    title: "Built Creative Portfolio Projects",
    desc: "Created cinematic digital experiences with immersive storytelling."
  },
  {
    year: "2026",
    title: "Scaling as a Creative Digital Professional",
    desc: "Combining marketing, development, branding, and AI into one powerful workflow."
  }
];

interface TimelineItemData {
  year: string;
  title: string;
  desc: string;
}

const TimelineItem = ({ item, index }: { item: TimelineItemData, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center w-full my-12 transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Mobile Year Badge (Hidden on Desktop) */}
      <div className="md:hidden bg-accent text-white px-4 py-1 rounded-full font-bold text-sm mb-4 self-start">
        {item.year}
      </div>

      <div className="w-full md:w-1/2 px-6 flex flex-col items-start md:items-center">
        <div className={`w-full max-w-md ${isEven ? "md:text-left" : "md:text-right"}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-[-0.03em]">{item.title}</h3>
          <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {/* Center Line Marker */}
      <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#0d0d0d] hidden md:block z-10" />

      <div className="w-full md:w-1/2 px-6 hidden md:flex items-center justify-center">
        <div className={`text-6xl font-black text-white/10 ${isEven ? "md:text-right" : "md:text-left"} w-full max-w-md`}>
          {item.year}
        </div>
      </div>
    </div>
  );
};

export default function JourneyTimeline() {
  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-24 text-center tracking-[-0.03em]">
          My Journey
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />

          {timelineItems.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
