"use client";

import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import TagScroll from "@/components/TagScroll";
import AboutMeSplit from "@/components/AboutMeSplit";
import ServicesGrid from "@/components/ServicesGrid";
import JourneyTimeline from "@/components/JourneyTimeline";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <section ref={heroRef} className="relative h-[500vh]">
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </section>

      <div className="relative z-20 bg-[#0d0d0d]">
        <TagScroll />
        <AboutMeSplit />
        <ServicesGrid />
        <JourneyTimeline />
        <Courses />
        <Footer />
      </div>
    </main>
  );
}
